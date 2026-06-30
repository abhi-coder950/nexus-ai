const express = require('express');
const router = express.Router();
const SavingsGoal = require('../models/SavingsGoal');
const { protect } = require('../middleware/auth');

// GET all savings goals
router.get('/', protect, async (req, res) => {
  try {
    const goals = await SavingsGoal.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.json({ success: true, goals });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create goal
router.post('/', protect, async (req, res) => {
  try {
    const goal = await SavingsGoal.create({ ...req.body, userId: req.user._id });
    res.status(201).json({ success: true, goal });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// PUT update goal
router.put('/:id', protect, async (req, res) => {
  try {
    const goal = await SavingsGoal.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true }
    );
    if (!goal) return res.status(404).json({ success: false, message: 'Goal not found' });
    res.json({ success: true, goal });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// PATCH add contribution
router.patch('/:id/contribute', protect, async (req, res) => {
  try {
    const { amount, note } = req.body;
    const goal = await SavingsGoal.findOne({ _id: req.params.id, userId: req.user._id });
    if (!goal) return res.status(404).json({ success: false, message: 'Goal not found' });
    goal.contributions.push({ amount, note, date: new Date() });
    goal.currentAmount = Math.min(goal.currentAmount + amount, goal.targetAmount);
    if (goal.currentAmount >= goal.targetAmount) goal.isCompleted = true;
    await goal.save();
    res.json({ success: true, goal });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE goal
router.delete('/:id', protect, async (req, res) => {
  try {
    await SavingsGoal.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
