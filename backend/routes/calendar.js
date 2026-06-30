const express = require('express');
const router = express.Router();
const CalendarEvent = require('../models/CalendarEvent');
const { protect } = require('../middleware/auth');

// GET events (with optional date range)
router.get('/', protect, async (req, res) => {
  try {
    const { startDate, endDate, category } = req.query;
    let query = { userId: req.user._id };
    if (startDate && endDate) {
      query.startDate = { $gte: new Date(startDate) };
      query.endDate = { $lte: new Date(endDate) };
    }
    if (category) query.category = category;
    const events = await CalendarEvent.find(query).sort({ startDate: 1 });
    res.json({ success: true, events });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create event
router.post('/', protect, async (req, res) => {
  try {
    const event = await CalendarEvent.create({ ...req.body, userId: req.user._id });
    res.status(201).json({ success: true, event });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// PUT update event
router.put('/:id', protect, async (req, res) => {
  try {
    const event = await CalendarEvent.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true }
    );
    if (!event) return res.status(404).json({ success: false, message: 'Event not found' });
    res.json({ success: true, event });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE event
router.delete('/:id', protect, async (req, res) => {
  try {
    await CalendarEvent.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET upcoming events (next 7 days)
router.get('/upcoming/week', protect, async (req, res) => {
  try {
    const now = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(now.getDate() + 7);
    const events = await CalendarEvent.find({
      userId: req.user._id,
      startDate: { $gte: now, $lte: nextWeek }
    }).sort({ startDate: 1 }).limit(10);
    res.json({ success: true, events });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
