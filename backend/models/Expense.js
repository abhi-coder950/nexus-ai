const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true, min: 0 },
  category: {
    type: String,
    enum: ['food', 'transport', 'shopping', 'entertainment', 'health', 'education', 'bills', 'housing', 'travel', 'other'],
    default: 'other'
  },
  description: { type: String, required: true, trim: true },
  date: { type: Date, default: Date.now },
  paymentMethod: { type: String, enum: ['cash', 'card', 'upi', 'netbanking', 'wallet', 'other'], default: 'upi' },
  tags: [{ type: String }],
  isRecurring: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Expense', expenseSchema);
