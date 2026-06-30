const express = require('express');
const router = express.Router();
const Budget = require('../models/Budget');
const { protect } = require('../middleware/auth');

// GET budget for month/year
router.get('/', protect, async (req, res) => {
  try {
    const { month, year } = req.query;
    const m = parseInt(month) || new Date().getMonth() + 1;
    const y = parseInt(year) || new Date().getFullYear();
    let budget = await Budget.findOne({ userId: req.user._id, month: m, year: y });
    if (!budget) {
      // Return empty structure
      return res.json({ success: true, budget: null, month: m, year: y });
    }
    res.json({ success: true, budget });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST/PUT upsert budget for month
router.post('/', protect, async (req, res) => {
  try {
    const { month, year, income, savingsGoal, categories, notes } = req.body;
    const budget = await Budget.findOneAndUpdate(
      { userId: req.user._id, month, year },
      { income, savingsGoal, categories, notes, updatedAt: new Date() },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.json({ success: true, budget });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// PATCH update spent for a category (called from expense tracker)
router.patch('/spent', protect, async (req, res) => {
  try {
    const { month, year, category, amount } = req.body;
    const budget = await Budget.findOne({ userId: req.user._id, month, year });
    if (!budget) return res.status(404).json({ success: false, message: 'Budget not found for this month' });
    const cat = budget.categories.find(c => c.name.toLowerCase() === category.toLowerCase());
    if (cat) {
      cat.spent = (cat.spent || 0) + amount;
      await budget.save();
    }
    res.json({ success: true, budget });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE budget
router.delete('/:id', protect, async (req, res) => {
  try {
    await Budget.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
