const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const AptitudeQuestion = require('../models/AptitudeQuestion');
const Result = require('../models/Result');
const mockDb = require('../config/mockDb');
const { protect } = require('../middleware/auth');

const isDbOffline = () => mongoose.connection.readyState !== 1;

// @route   GET /api/aptitude/questions
// @desc    Get aptitude questions by category
// @access  Private
router.get('/questions', protect, async (req, res) => {
  const { category, limit = 10 } = req.query;
  try {
    if (isDbOffline()) {
      let filtered = mockDb.aptitudeQuestions;
      if (category && ['quantitative', 'reasoning', 'verbal'].includes(category)) {
        filtered = filtered.filter(q => q.category === category);
      }
      
      // Shuffle array helper
      const shuffled = [...filtered].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, parseInt(limit));

      const clientQuestions = selected.map(q => ({
        _id: q._id,
        category: q.category,
        question: q.question,
        options: q.options,
        difficulty: q.difficulty
      }));

      return res.json({ success: true, questions: clientQuestions });
    }

    const filter = {};
    if (category && ['quantitative', 'reasoning', 'verbal'].includes(category)) {
      filter.category = category;
    }
    
    const questions = await AptitudeQuestion.aggregate([
      { $match: filter },
      { $sample: { size: parseInt(limit) } }
    ]);

    const clientQuestions = questions.map(q => ({
      _id: q._id,
      category: q.category,
      question: q.question,
      options: q.options,
      difficulty: q.difficulty
    }));

    res.json({ success: true, questions: clientQuestions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @route   POST /api/aptitude/submit
// @desc    Grade test answers and save result
// @access  Private
router.post('/submit', protect, async (req, res) => {
  const { answers, category } = req.body;

  try {
    if (!answers || typeof answers !== 'object') {
      return res.status(400).json({ success: false, message: 'Answers are required' });
    }

    if (isDbOffline()) {
      const questionIds = Object.keys(answers);
      const questions = mockDb.aptitudeQuestions.filter(q => questionIds.includes(q._id));

      let correctCount = 0;
      const details = [];

      questions.forEach(q => {
        const selectedOption = answers[q._id];
        const isCorrect = q.correctOption === selectedOption;
        if (isCorrect) {
          correctCount++;
        }
        details.push({
          questionId: q._id,
          question: q.question,
          options: q.options,
          selectedOption,
          correctOption: q.correctOption,
          explanation: q.explanation,
          isCorrect
        });
      });

      const totalQuestions = questions.length;
      const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

      const mockResult = {
        _id: `mock-res-${Date.now()}`,
        user: req.user.id,
        type: 'aptitude',
        score,
        totalQuestions,
        correctAnswers: correctCount,
        category: category || 'General Aptitude',
        date: new Date()
      };

      mockDb.results.push(mockResult);

      return res.json({
        success: true,
        result: {
          score,
          totalQuestions,
          correctAnswers: correctCount,
          category: mockResult.category,
          date: mockResult.date
        },
        details
      });
    }

    const questionIds = Object.keys(answers);
    const questions = await AptitudeQuestion.find({ _id: { $in: questionIds } });

    let correctCount = 0;
    const details = [];

    questions.forEach(q => {
      const selectedOption = answers[q._id];
      const isCorrect = q.correctOption === selectedOption;
      if (isCorrect) {
        correctCount++;
      }
      details.push({
        questionId: q._id,
        question: q.question,
        options: q.options,
        selectedOption,
        correctOption: q.correctOption,
        explanation: q.explanation,
        isCorrect
      });
    });

    const totalQuestions = questions.length;
    const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

    const result = await Result.create({
      user: req.user.id,
      type: 'aptitude',
      score,
      totalQuestions,
      correctAnswers: correctCount,
      category: category || 'General Aptitude'
    });

    res.json({
      success: true,
      result: {
        score,
        totalQuestions,
        correctAnswers: correctCount,
        category: result.category,
        date: result.date
      },
      details
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @route   GET /api/aptitude/history
// @desc    Get aptitude score history for student
// @access  Private
router.get('/history', protect, async (req, res) => {
  try {
    if (isDbOffline()) {
      const history = mockDb.results
        .filter(r => r.user === req.user.id && r.type === 'aptitude')
        .sort((a, b) => b.date - a.date);
      return res.json({ success: true, history });
    }

    const history = await Result.find({ user: req.user.id, type: 'aptitude' }).sort({ date: -1 });
    res.json({ success: true, history });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
