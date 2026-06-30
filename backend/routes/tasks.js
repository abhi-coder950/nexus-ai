const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const { protect } = require('../middleware/auth');

// GET all tasks
router.get('/', protect, async (req, res) => {
  try {
    const { status, priority, tag } = req.query;
    let query = { userId: req.user._id };
    if (status) query.status = status;
    if (priority) query.priority = priority;
    if (tag) query.tags = { $in: [tag] };
    const tasks = await Task.find(query).sort({ order: 1, createdAt: -1 });
    res.json({ success: true, tasks });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create task
router.post('/', protect, async (req, res) => {
  try {
    const task = await Task.create({ ...req.body, userId: req.user._id });
    res.status(201).json({ success: true, task });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// PUT update task
router.put('/:id', protect, async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { ...req.body, updatedAt: new Date() },
      { new: true }
    );
    if (!task) return res.status(404).json({ success: false, message: 'Task not found' });
    res.json({ success: true, task });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE task
router.delete('/:id', protect, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    if (!task) return res.status(404).json({ success: false, message: 'Task not found' });
    res.json({ success: true, message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PUT bulk update order (for drag-drop)
router.put('/bulk/reorder', protect, async (req, res) => {
  try {
    const { updates } = req.body; // [{id, order, status}]
    await Promise.all(updates.map(u =>
      Task.findOneAndUpdate({ _id: u.id, userId: req.user._id }, { order: u.order, status: u.status, updatedAt: new Date() })
    ));
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET stats
router.get('/stats/summary', protect, async (req, res) => {
  try {
    const total = await Task.countDocuments({ userId: req.user._id });
    const done = await Task.countDocuments({ userId: req.user._id, status: 'done' });
    const overdue = await Task.countDocuments({
      userId: req.user._id,
      status: { $ne: 'done' },
      dueDate: { $lt: new Date() }
    });
    res.json({ success: true, stats: { total, done, overdue, pending: total - done } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
