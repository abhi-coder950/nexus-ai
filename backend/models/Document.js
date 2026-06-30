const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true, trim: true },
  category: {
    type: String,
    enum: ['identity', 'education', 'finance', 'medical', 'vehicle', 'property', 'work', 'other'],
    default: 'other'
  },
  fileUrl: { type: String, default: '' },
  fileName: { type: String, default: '' },
  fileSize: { type: Number, default: 0 },
  fileType: { type: String, default: '' },
  expiryDate: { type: Date, default: null },
  tags: [{ type: String }],
  notes: { type: String, default: '' },
  isConfidential: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Document', documentSchema);
