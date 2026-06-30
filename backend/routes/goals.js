const express = require('express');
const router = express.Router();
const Goal = require('../models/Goal');
const { protect } = require('../middleware/auth');

// GET all goals
router.get('/', protect, async (req, res) => {
  try {
    const { category, status } = req.query;
    let query = { userId: req.user._id };
    if (category) query.category = category;
    if (status) query.status = status;
    const goals = await Goal.find(query).sort({ createdAt: -1 });
    res.json({ success: true, goals });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create goal
router.post('/', protect, async (req, res) => {
  try {
    const goal = await Goal.create({ ...req.body, userId: req.user._id });
    res.status(201).json({ success: true, goal });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// PUT update goal
router.put('/:id', protect, async (req, res) => {
  try {
    const goal = await Goal.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { ...req.body, updatedAt: new Date() },
      { new: true, runValidators: true }
    );
    if (!goal) return res.status(404).json({ success: false, message: 'Goal not found' });
    res.json({ success: true, goal });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// PATCH toggle milestone
router.patch('/:id/milestone/:milestoneId', protect, async (req, res) => {
  try {
    const goal = await Goal.findOne({ _id: req.params.id, userId: req.user._id });
    if (!goal) return res.status(404).json({ success: false, message: 'Goal not found' });
    const milestone = goal.milestones.id(req.params.milestoneId);
    if (!milestone) return res.status(404).json({ success: false, message: 'Milestone not found' });
    milestone.completed = !milestone.completed;
    milestone.completedAt = milestone.completed ? new Date() : null;
    await goal.save();
    res.json({ success: true, goal });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE goal
router.delete('/:id', protect, async (req, res) => {
  try {
    await Goal.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
