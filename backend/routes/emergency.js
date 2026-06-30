const express = require('express');
const router = express.Router();
const EmergencyContact = require('../models/EmergencyContact');
const { protect } = require('../middleware/auth');

// GET all contacts
router.get('/', protect, async (req, res) => {
  try {
    const contacts = await EmergencyContact.find({ userId: req.user._id }).sort({ isPrimary: -1, isICE: -1, name: 1 });
    res.json({ success: true, contacts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create contact
router.post('/', protect, async (req, res) => {
  try {
    if (req.body.isPrimary) {
      await EmergencyContact.updateMany({ userId: req.user._id }, { isPrimary: false });
    }
    const contact = await EmergencyContact.create({ ...req.body, userId: req.user._id });
    res.status(201).json({ success: true, contact });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// PUT update contact
router.put('/:id', protect, async (req, res) => {
  try {
    if (req.body.isPrimary) {
      await EmergencyContact.updateMany({ userId: req.user._id, _id: { $ne: req.params.id } }, { isPrimary: false });
    }
    const contact = await EmergencyContact.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true }
    );
    if (!contact) return res.status(404).json({ success: false, message: 'Contact not found' });
    res.json({ success: true, contact });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE contact
router.delete('/:id', protect, async (req, res) => {
  try {
    await EmergencyContact.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
