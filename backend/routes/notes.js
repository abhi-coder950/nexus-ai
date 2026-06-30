const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const { protect } = require('../middleware/auth');

// GET all notes
router.get('/', protect, async (req, res) => {
  try {
    const { folder, tag, search } = req.query;
    let query = { userId: req.user._id };
    if (folder) query.folder = folder;
    if (tag) query.tags = { $in: [tag] };
    if (search) query.$or = [
      { title: { $regex: search, $options: 'i' } },
      { content: { $regex: search, $options: 'i' } }
    ];
    const notes = await Note.find(query).sort({ isPinned: -1, updatedAt: -1 });
    res.json({ success: true, notes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create note
router.post('/', protect, async (req, res) => {
  try {
    const note = await Note.create({ ...req.body, userId: req.user._id });
    res.status(201).json({ success: true, note });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// PUT update note
router.put('/:id', protect, async (req, res) => {
  try {
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { ...req.body, updatedAt: new Date() },
      { new: true }
    );
    if (!note) return res.status(404).json({ success: false, message: 'Note not found' });
    res.json({ success: true, note });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE note
router.delete('/:id', protect, async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    if (!note) return res.status(404).json({ success: false, message: 'Note not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET folders list
router.get('/folders/list', protect, async (req, res) => {
  try {
    const folders = await Note.distinct('folder', { userId: req.user._id });
    res.json({ success: true, folders });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
