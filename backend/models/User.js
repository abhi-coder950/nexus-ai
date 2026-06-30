const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, default: null },
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
  authProvider: { type: String, enum: ['local', 'google'], default: 'local' },
  avatar: { type: String, default: '' },
  profilePhoto: { type: String, default: '' },
  mobile: { type: String, default: '' },
  dob: { type: String, default: '' },
  gender: { type: String, default: '' },
  city: { type: String, default: '' },
  state: { type: String, default: '' },
  linkedinUrl: { type: String, default: '' },
  githubUrl: { type: String, default: '' },
  collegeName: { type: String, default: 'Arka Jain University' },
  academicDetails: {
    course: { type: String, default: '' },
    branch: { type: String, default: '' },
    cgpa: { type: Number, default: 0 },
    graduationYear: { type: Number, default: 0 },
    currentSemester: { type: String, default: '' }
  },
  skills: [{ type: String }],
  placementGoals: {
    targetRole: { type: String, default: '' },
    preferredDomain: { type: String, default: '' },
    dreamCompany: { type: String, default: '' },
    expectedPackage: { type: String, default: '' },
    preferredLocation: { type: String, default: '' },
    targetPlacementYear: { type: String, default: '' }
  },
  resumePath: { type: String, default: '' },
  resumeName: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password') || !this.password) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
