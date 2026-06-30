const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true, trim: true },
  content: { type: String, default: '' },
  color: { type: String, default: 'default', enum: ['default', 'rose', 'amber', 'emerald', 'sky', 'violet', 'slate'] },
  tags: [{ type: String }],
  isPinned: { type: Boolean, default: false },
  folder: { type: String, default: 'General' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

noteSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('Note', noteSchema);
