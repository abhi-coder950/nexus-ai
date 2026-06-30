const mongoose = require('mongoose');

const savingsGoalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true, trim: true },
  targetAmount: { type: Number, required: true, min: 0 },
  currentAmount: { type: Number, default: 0, min: 0 },
  targetDate: { type: Date, default: null },
  category: { type: String, enum: ['emergency', 'travel', 'education', 'gadget', 'home', 'vehicle', 'retirement', 'other'], default: 'other' },
  color: { type: String, default: 'emerald' },
  icon: { type: String, default: '💰' },
  contributions: [{
    amount: Number,
    date: { type: Date, default: Date.now },
    note: String
  }],
  isCompleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SavingsGoal', savingsGoalSchema);
