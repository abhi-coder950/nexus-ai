const express = require('express');
const router = express.Router();
const Bill = require('../models/Bill');
const { protect } = require('../middleware/auth');

// GET all bills
router.get('/', protect, async (req, res) => {
  try {
    const { upcoming, isPaid } = req.query;
    let query = { userId: req.user._id };
    if (isPaid !== undefined) query.isPaid = isPaid === 'true';
    if (upcoming) {
      const days = parseInt(upcoming) || 7;
      const future = new Date();
      future.setDate(future.getDate() + days);
      query.dueDate = { $lte: future };
      query.isPaid = false;
    }
    const bills = await Bill.find(query).sort({ dueDate: 1 });
    res.json({ success: true, bills });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create bill
router.post('/', protect, async (req, res) => {
  try {
    const bill = await Bill.create({ ...req.body, userId: req.user._id });
    res.status(201).json({ success: true, bill });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// PUT update bill
router.put('/:id', protect, async (req, res) => {
  try {
    const bill = await Bill.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true }
    );
    if (!bill) return res.status(404).json({ success: false, message: 'Bill not found' });
    res.json({ success: true, bill });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// PATCH mark as paid
router.patch('/:id/pay', protect, async (req, res) => {
  try {
    const bill = await Bill.findOne({ _id: req.params.id, userId: req.user._id });
    if (!bill) return res.status(404).json({ success: false, message: 'Bill not found' });
    bill.isPaid = !bill.isPaid;
    bill.paidAt = bill.isPaid ? new Date() : null;
    // If recurring, create next occurrence
    if (bill.isPaid && bill.frequency !== 'one-time') {
      const nextDue = new Date(bill.dueDate);
      if (bill.frequency === 'weekly') nextDue.setDate(nextDue.getDate() + 7);
      else if (bill.frequency === 'monthly') nextDue.setMonth(nextDue.getMonth() + 1);
      else if (bill.frequency === 'quarterly') nextDue.setMonth(nextDue.getMonth() + 3);
      else if (bill.frequency === 'annually') nextDue.setFullYear(nextDue.getFullYear() + 1);
      await Bill.create({ ...bill.toObject(), _id: undefined, isPaid: false, paidAt: null, dueDate: nextDue, createdAt: new Date() });
    }
    await bill.save();
    res.json({ success: true, bill });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE bill
router.delete('/:id', protect, async (req, res) => {
  try {
    await Bill.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
