const mongoose = require('mongoose');

const budgetCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  allocated: { type: Number, default: 0, min: 0 },
  spent: { type: Number, default: 0, min: 0 },
  color: { type: String, default: 'indigo' }
});

const budgetSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  month: { type: Number, required: true, min: 1, max: 12 },
  year: { type: Number, required: true },
  income: { type: Number, default: 0, min: 0 },
  savingsGoal: { type: Number, default: 0, min: 0 },
  categories: [budgetCategorySchema],
  notes: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

budgetSchema.index({ userId: 1, month: 1, year: 1 }, { unique: true });

module.exports = mongoose.model('Budget', budgetSchema);
