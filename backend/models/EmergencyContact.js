const mongoose = require('mongoose');

const emergencyContactSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true, trim: true },
  relationship: {
    type: String,
    enum: ['father', 'mother', 'spouse', 'sibling', 'friend', 'doctor', 'police', 'neighbor', 'colleague', 'other'],
    default: 'other'
  },
  phone: { type: String, required: true },
  alternatePhone: { type: String, default: '' },
  email: { type: String, default: '' },
  address: { type: String, default: '' },
  isPrimary: { type: Boolean, default: false },
  isICE: { type: Boolean, default: false }, // In Case of Emergency
  notes: { type: String, default: '' },
  avatar: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('EmergencyContact', emergencyContactSchema);
