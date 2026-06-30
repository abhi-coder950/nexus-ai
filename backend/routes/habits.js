const express = require('express');
const router = express.Router();
const Habit = require('../models/Habit');
const { protect } = require('../middleware/auth');

// GET all habits
router.get('/', protect, async (req, res) => {
  try {
    const habits = await Habit.find({ userId: req.user._id, isActive: true }).sort({ createdAt: -1 });
    res.json({ success: true, habits });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create habit
router.post('/', protect, async (req, res) => {
  try {
    const habit = await Habit.create({ ...req.body, userId: req.user._id });
    res.status(201).json({ success: true, habit });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// PUT update habit
router.put('/:id', protect, async (req, res) => {
  try {
    const habit = await Habit.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true }
    );
    if (!habit) return res.status(404).json({ success: false, message: 'Habit not found' });
    res.json({ success: true, habit });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// PATCH mark complete for today
router.patch('/:id/complete', protect, async (req, res) => {
  try {
    const habit = await Habit.findOne({ _id: req.params.id, userId: req.user._id });
    if (!habit) return res.status(404).json({ success: false, message: 'Habit not found' });

    const today = new Date().toISOString().split('T')[0];
    const alreadyDone = habit.completions.some(c => c.date === today);

    if (alreadyDone) {
      // Unmark
      habit.completions = habit.completions.filter(c => c.date !== today);
    } else {
      // Mark complete
      habit.completions.push({ date: today });
    }

    // Recalculate streak
    let streak = 0;
    const dates = habit.completions.map(c => c.date).sort().reverse();
    let checkDate = new Date();
    for (const dateStr of dates) {
      const expected = checkDate.toISOString().split('T')[0];
      if (dateStr === expected) {
        streak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }
    habit.streak = streak;
    if (streak > habit.longestStreak) habit.longestStreak = streak;

    await habit.save();
    res.json({ success: true, habit });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE habit (soft delete)
router.delete('/:id', protect, async (req, res) => {
  try {
    await Habit.findOneAndUpdate({ _id: req.params.id, userId: req.user._id }, { isActive: false });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
