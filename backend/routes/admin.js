const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');
const AptitudeQuestion = require('../models/AptitudeQuestion');
const CodingQuestion = require('../models/CodingQuestion');
const InterviewQuestion = require('../models/InterviewQuestion');
const Result = require('../models/Result');
const ResumeAnalysis = require('../models/ResumeAnalysis');
const mockDb = require('../config/mockDb');
const { protect, adminOnly } = require('../middleware/auth');

const isDbOffline = () => mongoose.connection.readyState !== 1;

// @route   GET /api/admin/dashboard
// @desc    Get dashboard metrics for administration
// @access  Private/Admin
router.get('/dashboard', protect, adminOnly, async (req, res) => {
  try {
    if (isDbOffline()) {
      const totalStudents = mockDb.users.filter(u => u.role === 'student').length;
      const totalAptitudeQuestions = mockDb.aptitudeQuestions.length;
      const totalCodingQuestions = mockDb.codingQuestions.length;
      const totalInterviewQuestions = mockDb.interviewQuestions.length;

      const aptitudeResults = mockDb.results.filter(r => r.type === 'aptitude');
      const codingResults = mockDb.results.filter(r => r.type === 'coding');
      const resumeAnalyses = mockDb.resumeAnalyses;

      const avgAptitudeScore = aptitudeResults.length > 0
        ? Math.round(aptitudeResults.reduce((sum, r) => sum + r.score, 0) / aptitudeResults.length)
        : 0;

      const avgCodingScore = codingResults.length > 0
        ? Math.round(codingResults.reduce((sum, r) => sum + r.score, 0) / codingResults.length)
        : 0;

      const avgResumeScore = resumeAnalyses.length > 0
        ? Math.round(resumeAnalyses.reduce((sum, r) => sum + r.score, 0) / resumeAnalyses.length)
        : 0;

      // Map mock recent submissions
      const recentSubmissions = mockDb.results
        .sort((a, b) => b.date - a.date)
        .slice(0, 10)
        .map(r => {
          const user = mockDb.users.find(u => u._id === r.user);
          return {
            _id: r._id,
            type: r.type,
            score: r.score,
            totalQuestions: r.totalQuestions,
            correctAnswers: r.correctAnswers,
            category: r.category,
            date: r.date,
            user: user ? { name: user.name, email: user.email } : { name: 'Unknown', email: '' }
          };
        });

      return res.json({
        success: true,
        stats: {
          totalStudents,
          totalAptitudeQuestions,
          totalCodingQuestions,
          totalInterviewQuestions,
          avgAptitudeScore,
          avgCodingScore,
          avgResumeScore
        },
        recentSubmissions
      });
    }

    const totalStudents = await User.countDocuments({ role: 'student' });
    const totalAptitudeQuestions = await AptitudeQuestion.countDocuments();
    const totalCodingQuestions = await CodingQuestion.countDocuments();
    const totalInterviewQuestions = await InterviewQuestion.countDocuments();

    const aptitudeResults = await Result.find({ type: 'aptitude' });
    const codingResults = await Result.find({ type: 'coding' });
    const resumeAnalyses = await ResumeAnalysis.find({});

    const avgAptitudeScore = aptitudeResults.length > 0
      ? Math.round(aptitudeResults.reduce((sum, r) => sum + r.score, 0) / aptitudeResults.length)
      : 0;

    const avgCodingScore = codingResults.length > 0
      ? Math.round(codingResults.reduce((sum, r) => sum + r.score, 0) / codingResults.length)
      : 0;

    const avgResumeScore = resumeAnalyses.length > 0
      ? Math.round(resumeAnalyses.reduce((sum, r) => sum + r.score, 0) / resumeAnalyses.length)
      : 0;

    const recentSubmissions = await Result.find({})
      .populate('user', 'name email')
      .sort({ date: -1 })
      .limit(10);

    res.json({
      success: true,
      stats: {
        totalStudents,
        totalAptitudeQuestions,
        totalCodingQuestions,
        totalInterviewQuestions,
        avgAptitudeScore,
        avgCodingScore,
        avgResumeScore
      },
      recentSubmissions
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @route   GET /api/admin/students
// @desc    Get list of all students with summary performance
// @access  Private/Admin
router.get('/students', protect, adminOnly, async (req, res) => {
  try {
    if (isDbOffline()) {
      const students = mockDb.users.filter(u => u.role === 'student');
      const studentsWithPerf = students.map(student => {
        const results = mockDb.results.filter(r => r.user === student._id);
        const resumes = mockDb.resumeAnalyses
          .filter(r => r.user === student._id)
          .sort((a, b) => b.analyzedAt - a.analyzedAt);

        const aptitudeTests = results.filter(r => r.type === 'aptitude');
        const codingTests = results.filter(r => r.type === 'coding');

        const avgAptitude = aptitudeTests.length > 0
          ? Math.round(aptitudeTests.reduce((sum, r) => sum + r.score, 0) / aptitudeTests.length)
          : null;

        const avgCoding = codingTests.length > 0
          ? Math.round(codingTests.reduce((sum, r) => sum + r.score, 0) / codingTests.length)
          : null;

        const latestResumeScore = resumes.length > 0 ? resumes[0].score : null;

        return {
          _id: student._id,
          name: student.name,
          email: student.email,
          academicDetails: student.academicDetails,
          skills: student.skills,
          performance: {
            aptitudeCount: aptitudeTests.length,
            avgAptitude,
            codingCount: codingTests.length,
            avgCoding,
            latestResumeScore
          }
        };
      });

      return res.json({ success: true, students: studentsWithPerf });
    }

    const students = await User.find({ role: 'student' }).select('-password');
    
    const studentsWithPerf = await Promise.all(students.map(async (student) => {
      const results = await Result.find({ user: student._id });
      const resumes = await ResumeAnalysis.find({ user: student._id }).sort({ analyzedAt: -1 });

      const aptitudeTests = results.filter(r => r.type === 'aptitude');
      const codingTests = results.filter(r => r.type === 'coding');

      const avgAptitude = aptitudeTests.length > 0
        ? Math.round(aptitudeTests.reduce((sum, r) => sum + r.score, 0) / aptitudeTests.length)
        : null;

      const avgCoding = codingTests.length > 0
        ? Math.round(codingTests.reduce((sum, r) => sum + r.score, 0) / codingTests.length)
        : null;

      const latestResumeScore = resumes.length > 0 ? resumes[0].score : null;

      return {
        _id: student._id,
        name: student.name,
        email: student.email,
        academicDetails: student.academicDetails,
        skills: student.skills,
        performance: {
          aptitudeCount: aptitudeTests.length,
          avgAptitude,
          codingCount: codingTests.length,
          avgCoding,
          latestResumeScore
        }
      };
    }));

    res.json({ success: true, students: studentsWithPerf });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ==========================================
// APTITUDE QUESTIONS CRUD
// ==========================================

router.post('/aptitude', protect, adminOnly, async (req, res) => {
  try {
    if (isDbOffline()) {
      const newQ = {
        _id: `mock-apt-${Date.now()}`,
        ...req.body
      };
      mockDb.aptitudeQuestions.push(newQ);
      return res.status(201).json({ success: true, question: newQ });
    }

    const question = await AptitudeQuestion.create(req.body);
    res.status(201).json({ success: true, question });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

router.put('/aptitude/:id', protect, adminOnly, async (req, res) => {
  try {
    if (isDbOffline()) {
      const idx = mockDb.aptitudeQuestions.findIndex(q => q._id === req.params.id);
      if (idx === -1) return res.status(404).json({ success: false, message: 'Question not found' });
      mockDb.aptitudeQuestions[idx] = {
        ...mockDb.aptitudeQuestions[idx],
        ...req.body
      };
      return res.json({ success: true, question: mockDb.aptitudeQuestions[idx] });
    }

    const question = await AptitudeQuestion.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!question) return res.status(404).json({ success: false, message: 'Question not found' });
    res.json({ success: true, question });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

router.delete('/aptitude/:id', protect, adminOnly, async (req, res) => {
  try {
    if (isDbOffline()) {
      const idx = mockDb.aptitudeQuestions.findIndex(q => q._id === req.params.id);
      if (idx === -1) return res.status(404).json({ success: false, message: 'Question not found' });
      mockDb.aptitudeQuestions.splice(idx, 1);
      return res.json({ success: true, message: 'Question deleted successfully' });
    }

    const question = await AptitudeQuestion.findByIdAndDelete(req.params.id);
    if (!question) return res.status(404).json({ success: false, message: 'Question not found' });
    res.json({ success: true, message: 'Question deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ==========================================
// CODING QUESTIONS CRUD
// ==========================================

router.post('/coding', protect, adminOnly, async (req, res) => {
  try {
    if (isDbOffline()) {
      const newQ = {
        _id: `mock-code-${Date.now()}`,
        ...req.body
      };
      mockDb.codingQuestions.push(newQ);
      return res.status(201).json({ success: true, question: newQ });
    }

    const question = await CodingQuestion.create(req.body);
    res.status(201).json({ success: true, question });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

router.put('/coding/:id', protect, adminOnly, async (req, res) => {
  try {
    if (isDbOffline()) {
      const idx = mockDb.codingQuestions.findIndex(q => q._id === req.params.id);
      if (idx === -1) return res.status(404).json({ success: false, message: 'Question not found' });
      mockDb.codingQuestions[idx] = {
        ...mockDb.codingQuestions[idx],
        ...req.body
      };
      return res.json({ success: true, question: mockDb.codingQuestions[idx] });
    }

    const question = await CodingQuestion.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!question) return res.status(404).json({ success: false, message: 'Question not found' });
    res.json({ success: true, question });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

router.delete('/coding/:id', protect, adminOnly, async (req, res) => {
  try {
    if (isDbOffline()) {
      const idx = mockDb.codingQuestions.findIndex(q => q._id === req.params.id);
      if (idx === -1) return res.status(404).json({ success: false, message: 'Question not found' });
      mockDb.codingQuestions.splice(idx, 1);
      return res.json({ success: true, message: 'Question deleted successfully' });
    }

    const question = await CodingQuestion.findByIdAndDelete(req.params.id);
    if (!question) return res.status(404).json({ success: false, message: 'Question not found' });
    res.json({ success: true, message: 'Question deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ==========================================
// INTERVIEW QUESTIONS CRUD
// ==========================================

router.post('/interview', protect, adminOnly, async (req, res) => {
  try {
    if (isDbOffline()) {
      const newQ = {
        _id: `mock-int-${Date.now()}`,
        ...req.body
      };
      mockDb.interviewQuestions.push(newQ);
      return res.status(201).json({ success: true, question: newQ });
    }

    const question = await InterviewQuestion.create(req.body);
    res.status(201).json({ success: true, question });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

router.put('/interview/:id', protect, adminOnly, async (req, res) => {
  try {
    if (isDbOffline()) {
      const idx = mockDb.interviewQuestions.findIndex(q => q._id === req.params.id);
      if (idx === -1) return res.status(404).json({ success: false, message: 'Question not found' });
      mockDb.interviewQuestions[idx] = {
        ...mockDb.interviewQuestions[idx],
        ...req.body
      };
      return res.json({ success: true, question: mockDb.interviewQuestions[idx] });
    }

    const question = await InterviewQuestion.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!question) return res.status(404).json({ success: false, message: 'Question not found' });
    res.json({ success: true, question });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

router.delete('/interview/:id', protect, adminOnly, async (req, res) => {
  try {
    if (isDbOffline()) {
      const idx = mockDb.interviewQuestions.findIndex(q => q._id === req.params.id);
      if (idx === -1) return res.status(404).json({ success: false, message: 'Question not found' });
      mockDb.interviewQuestions.splice(idx, 1);
      return res.json({ success: true, message: 'Question deleted successfully' });
    }

    const question = await InterviewQuestion.findByIdAndDelete(req.params.id);
    if (!question) return res.status(404).json({ success: false, message: 'Question not found' });
    res.json({ success: true, message: 'Question deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
