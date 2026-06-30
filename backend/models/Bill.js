const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true, trim: true },
  amount: { type: Number, required: true, min: 0 },
  dueDate: { type: Date, required: true },
  frequency: { type: String, enum: ['one-time', 'weekly', 'monthly', 'quarterly', 'annually'], default: 'monthly' },
  category: {
    type: String,
    enum: ['electricity', 'water', 'internet', 'phone', 'rent', 'insurance', 'subscription', 'emi', 'other'],
    default: 'other'
  },
  isPaid: { type: Boolean, default: false },
  paidAt: { type: Date, default: null },
  reminderDays: { type: Number, default: 3 },
  notes: { type: String, default: '' },
  icon: { type: String, default: '📄' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Bill', billSchema);
