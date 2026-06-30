const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const InterviewQuestion = require('../models/InterviewQuestion');
const mockDb = require('../config/mockDb');
const { protect } = require('../middleware/auth');

const isDbOffline = () => mongoose.connection.readyState !== 1;

// @route   GET /api/interview/questions
// @desc    Get interview questions by type and category
// @access  Private
router.get('/questions', protect, async (req, res) => {
  const { type, category } = req.query;

  try {
    if (isDbOffline()) {
      let filtered = mockDb.interviewQuestions;
      if (type && ['hr', 'technical'].includes(type)) {
        filtered = filtered.filter(q => q.type === type);
      }
      if (category) {
        filtered = filtered.filter(q => q.category.toLowerCase() === category.toLowerCase());
      }

      // Unique categories
      const targetList = type ? mockDb.interviewQuestions.filter(q => q.type === type) : mockDb.interviewQuestions;
      const categories = [...new Set(targetList.map(q => q.category))];

      return res.json({
        success: true,
        categories,
        questions: filtered
      });
    }

    const filter = {};
    if (type && ['hr', 'technical'].includes(type)) {
      filter.type = type;
    }
    if (category) {
      filter.category = category;
    }

    const questions = await InterviewQuestion.find(filter);
    const categories = await InterviewQuestion.find(type ? { type } : {}).distinct('category');

    res.json({
      success: true,
      categories,
      questions
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
