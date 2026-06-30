const mongoose = require('mongoose');

const calendarEventSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true, trim: true },
  description: { type: String, default: '' },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  allDay: { type: Boolean, default: false },
  color: { type: String, default: 'indigo' },
  category: {
    type: String,
    enum: ['work', 'personal', 'health', 'finance', 'education', 'social', 'reminder', 'other'],
    default: 'personal'
  },
  location: { type: String, default: '' },
  isRecurring: { type: Boolean, default: false },
  recurringType: { type: String, enum: ['none', 'daily', 'weekly', 'monthly'], default: 'none' },
  reminder: { type: Number, default: 30 }, // minutes before
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CalendarEvent', calendarEventSchema);
