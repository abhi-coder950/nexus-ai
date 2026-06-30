const express = require('express');
const router = express.Router();
const Reminder = require('../models/Reminder');
const { protect } = require('../middleware/auth');

// GET all reminders by type
router.get('/', protect, async (req, res) => {
  try {
    const { type } = req.query;
    let query = { userId: req.user._id, isActive: true };
    if (type) query.type = type;
    const reminders = await Reminder.find(query).sort({ createdAt: -1 });
    res.json({ success: true, reminders });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create reminder
router.post('/', protect, async (req, res) => {
  try {
    const reminder = await Reminder.create({ ...req.body, userId: req.user._id });
    res.status(201).json({ success: true, reminder });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// PUT update reminder
router.put('/:id', protect, async (req, res) => {
  try {
    const reminder = await Reminder.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true }
    );
    if (!reminder) return res.status(404).json({ success: false, message: 'Reminder not found' });
    res.json({ success: true, reminder });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// POST add service history to vehicle reminder
router.post('/:id/service', protect, async (req, res) => {
  try {
    const reminder = await Reminder.findOne({ _id: req.params.id, userId: req.user._id, type: 'vehicle' });
    if (!reminder) return res.status(404).json({ success: false, message: 'Vehicle reminder not found' });
    reminder.serviceHistory.push(req.body);
    await reminder.save();
    res.json({ success: true, reminder });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE reminder (soft)
router.delete('/:id', protect, async (req, res) => {
  try {
    await Reminder.findOneAndUpdate({ _id: req.params.id, userId: req.user._id }, { isActive: false });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
