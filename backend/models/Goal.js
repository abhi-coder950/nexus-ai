const mongoose = require('mongoose');

const milestoneSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  completedAt: { type: Date, default: null }
});

const goalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true, trim: true },
  description: { type: String, default: '' },
  category: {
    type: String,
    enum: ['career', 'health', 'finance', 'education', 'personal', 'fitness', 'travel', 'other'],
    default: 'personal'
  },
  targetDate: { type: Date, default: null },
  progress: { type: Number, default: 0, min: 0, max: 100 },
  milestones: [milestoneSchema],
  status: { type: String, enum: ['active', 'completed', 'paused', 'abandoned'], default: 'active' },
  icon: { type: String, default: '🎯' },
  color: { type: String, default: 'indigo' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

goalSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  // Auto-update progress based on milestones
  if (this.milestones.length > 0) {
    const completedMilestones = this.milestones.filter(m => m.completed).length;
    this.progress = Math.round((completedMilestones / this.milestones.length) * 100);
  }
  if (this.progress === 100) this.status = 'completed';
  next();
});

module.exports = mongoose.model('Goal', goalSchema);
