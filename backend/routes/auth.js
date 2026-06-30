const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const { OAuth2Client } = require('google-auth-library');
const User = require('../models/User');
const mockDb = require('../config/mockDb');
const { protect } = require('../middleware/auth');

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const isDbOffline = () => mongoose.connection.readyState !== 1;

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'supersecretjwtkeyforplacementportal123', {
    expiresIn: '30d'
  });
};

// @route   POST /api/auth/register
// @desc    Register a new student
// @access  Public
router.post('/register', async (req, res) => {
  const { name, email, password, course, branch, cgpa, graduationYear, skills } = req.body;

  try {
    if (isDbOffline()) {
      const userExists = mockDb.users.some(u => u.email === email);
      if (userExists) {
        return res.status(400).json({ success: false, message: 'User already exists (Mock Mode)' });
      }

      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);

      const mockUser = {
        _id: `mock-user-${Date.now()}`,
        name,
        email,
        passwordHash,
        role: 'student',
        academicDetails: {
          course: course || '',
          branch: branch || '',
          cgpa: cgpa ? Number(cgpa) : 0,
          graduationYear: graduationYear ? Number(graduationYear) : 0
        },
        skills: skills || [],
        createdAt: new Date()
      };

      mockDb.users.push(mockUser);

      return res.status(201).json({
        success: true,
        token: generateToken(mockUser._id),
        user: {
          id: mockUser._id,
          name: mockUser.name,
          email: mockUser.email,
          role: mockUser.role,
          academicDetails: mockUser.academicDetails,
          skills: mockUser.skills
        }
      });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    const user = await User.create({
      name,
      email,
      password,
      role: 'student',
      academicDetails: {
        course: course || '',
        branch: branch || '',
        cgpa: cgpa || 0,
        graduationYear: graduationYear || 0
      },
      skills: skills || []
    });

    res.status(201).json({
      success: true,
      token: generateToken(user._id),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        academicDetails: user.academicDetails,
        skills: user.skills
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @route   POST /api/auth/login
// @desc    Authenticate student/admin & get token
// @access  Public
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    if (isDbOffline()) {
      const mockUser = mockDb.users.find(u => u.email === email);
      if (!mockUser) {
        return res.status(401).json({ success: false, message: 'Invalid email or password (Mock Mode)' });
      }

      const isMatch = await bcrypt.compare(password, mockUser.passwordHash);
      if (!isMatch) {
        return res.status(401).json({ success: false, message: 'Invalid email or password (Mock Mode)' });
      }

      return res.json({
        success: true,
        token: generateToken(mockUser._id),
        user: {
          id: mockUser._id,
          name: mockUser.name,
          email: mockUser.email,
          role: mockUser.role,
          academicDetails: mockUser.academicDetails,
          skills: mockUser.skills
        }
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    res.json({
      success: true,
      token: generateToken(user._id),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        academicDetails: user.academicDetails,
        skills: user.skills
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @route   POST /api/auth/google
// @desc    Authenticate with Google ID token
// @access  Public
router.post('/google', async (req, res) => {
  const { credential } = req.body;

  if (!credential) {
    return res.status(400).json({ success: false, message: 'Google credential is required' });
  }

  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, picture } = payload;

    if (isDbOffline()) {
      let mockUser = mockDb.users.find(u => u.email === email);

      if (mockUser) {
        return res.json({
          success: true,
          token: generateToken(mockUser._id),
          user: {
            id: mockUser._id,
            name: mockUser.name,
            email: mockUser.email,
            role: mockUser.role,
            avatar: mockUser.avatar || picture || '',
            authProvider: mockUser.authProvider || 'local',
            academicDetails: mockUser.academicDetails,
            skills: mockUser.skills
          }
        });
      }

      const newUser = {
        _id: `mock-user-${Date.now()}`,
        name,
        email,
        passwordHash: '',
        role: 'student',
        authProvider: 'google',
        avatar: picture || '',
        academicDetails: { course: '', branch: '', cgpa: 0, graduationYear: 0 },
        skills: [],
        createdAt: new Date()
      };

      mockDb.users.push(newUser);

      return res.status(201).json({
        success: true,
        token: generateToken(newUser._id),
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
          avatar: newUser.avatar,
          authProvider: newUser.authProvider,
          academicDetails: newUser.academicDetails,
          skills: newUser.skills
        }
      });
    }

    let user = await User.findOne({ email });

    if (user) {
      if (!user.avatar && picture) {
        user.avatar = picture;
      }
      if (user.authProvider !== 'google') {
        user.authProvider = 'google';
      }
      await user.save();

      return res.json({
        success: true,
        token: generateToken(user._id),
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          avatar: user.avatar,
          authProvider: user.authProvider,
          academicDetails: user.academicDetails,
          skills: user.skills
        }
      });
    }

    user = await User.create({
      name,
      email,
      role: 'student',
      authProvider: 'google',
      avatar: picture || ''
    });

    res.status(201).json({
      success: true,
      token: generateToken(user._id),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        authProvider: user.authProvider,
        academicDetails: user.academicDetails,
        skills: user.skills
      }
    });
  } catch (error) {
    console.error('Google auth error:', error);
    res.status(500).json({ success: false, message: 'Google authentication failed. Please try again.' });
  }
});

// @route   GET /api/auth/profile
// @desc    Get logged in user details
// @access  Private
router.get('/profile', protect, async (req, res) => {
  try {
    if (isDbOffline()) {
      // Return full user from mockDb (not just req.user which has minimal fields)
      const mockUser = mockDb.users.find(u => u._id === req.user.id);
      if (!mockUser) {
        return res.status(404).json({ success: false, message: 'User not found (Mock Mode)' });
      }
      return res.json({
        success: true,
        user: {
          id: mockUser._id,
          name: mockUser.name,
          email: mockUser.email,
          role: mockUser.role,
          avatar: mockUser.avatar || '',
          profilePhoto: mockUser.profilePhoto || '',
          authProvider: mockUser.authProvider || 'local',
          mobile: mockUser.mobile || '',
          dob: mockUser.dob || '',
          gender: mockUser.gender || '',
          city: mockUser.city || '',
          state: mockUser.state || '',
          linkedinUrl: mockUser.linkedinUrl || '',
          githubUrl: mockUser.githubUrl || '',
          collegeName: mockUser.collegeName || '',
          academicDetails: mockUser.academicDetails || { course: '', branch: '', cgpa: '', graduationYear: '', currentSemester: '' },
          skills: mockUser.skills || [],
          placementGoals: mockUser.placementGoals || { targetRole: '', preferredDomain: '', dreamCompany: '', expectedPackage: '', preferredLocation: '', targetPlacementYear: '' },
          resumePath: mockUser.resumePath || '',
          resumeName: mockUser.resumeName || ''
        }
      });
    }

    const user = await User.findById(req.user.id);
    if (user) {
      res.json({
        success: true,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          avatar: user.avatar,
          profilePhoto: user.profilePhoto,
          authProvider: user.authProvider,
          mobile: user.mobile,
          dob: user.dob,
          gender: user.gender,
          city: user.city,
          state: user.state,
          linkedinUrl: user.linkedinUrl,
          githubUrl: user.githubUrl,
          collegeName: user.collegeName,
          academicDetails: user.academicDetails,
          skills: user.skills,
          placementGoals: user.placementGoals,
          resumePath: user.resumePath,
          resumeName: user.resumeName
        }
      });
    } else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @route   PUT /api/auth/profile
// @desc    Update user profile details
// @access  Private
router.put('/profile', protect, async (req, res) => {
  try {
    if (isDbOffline()) {
      const idx = mockDb.users.findIndex(u => u._id === req.user.id);
      if (idx !== -1) {
        const u = mockDb.users[idx];
        u.name = req.body.name || u.name;
        if (req.body.password) {
          const salt = await bcrypt.genSalt(10);
          u.passwordHash = await bcrypt.hash(req.body.password, salt);
        }
        if (req.body.mobile !== undefined) u.mobile = req.body.mobile;
        if (req.body.dob !== undefined) u.dob = req.body.dob;
        if (req.body.gender !== undefined) u.gender = req.body.gender;
        if (req.body.city !== undefined) u.city = req.body.city;
        if (req.body.state !== undefined) u.state = req.body.state;
        if (req.body.linkedinUrl !== undefined) u.linkedinUrl = req.body.linkedinUrl;
        if (req.body.githubUrl !== undefined) u.githubUrl = req.body.githubUrl;
        if (req.body.collegeName !== undefined) u.collegeName = req.body.collegeName;
        if (req.body.academicDetails) {
          u.academicDetails = {
            course: req.body.academicDetails.course !== undefined ? req.body.academicDetails.course : u.academicDetails.course,
            branch: req.body.academicDetails.branch !== undefined ? req.body.academicDetails.branch : u.academicDetails.branch,
            cgpa: req.body.academicDetails.cgpa !== undefined ? Number(req.body.academicDetails.cgpa) : u.academicDetails.cgpa,
            graduationYear: req.body.academicDetails.graduationYear !== undefined ? Number(req.body.academicDetails.graduationYear) : u.academicDetails.graduationYear,
            currentSemester: req.body.academicDetails.currentSemester !== undefined ? req.body.academicDetails.currentSemester : (u.academicDetails.currentSemester || '')
          };
        }
        if (req.body.skills) {
          u.skills = req.body.skills;
        }
        if (req.body.placementGoals) {
          u.placementGoals = {
            targetRole: req.body.placementGoals.targetRole !== undefined ? req.body.placementGoals.targetRole : (u.placementGoals?.targetRole || ''),
            preferredDomain: req.body.placementGoals.preferredDomain !== undefined ? req.body.placementGoals.preferredDomain : (u.placementGoals?.preferredDomain || ''),
            dreamCompany: req.body.placementGoals.dreamCompany !== undefined ? req.body.placementGoals.dreamCompany : (u.placementGoals?.dreamCompany || ''),
            expectedPackage: req.body.placementGoals.expectedPackage !== undefined ? req.body.placementGoals.expectedPackage : (u.placementGoals?.expectedPackage || ''),
            preferredLocation: req.body.placementGoals.preferredLocation !== undefined ? req.body.placementGoals.preferredLocation : (u.placementGoals?.preferredLocation || ''),
            targetPlacementYear: req.body.placementGoals.targetPlacementYear !== undefined ? req.body.placementGoals.targetPlacementYear : (u.placementGoals?.targetPlacementYear || '')
          };
        }

        req.user.name = u.name;
        req.user.academicDetails = u.academicDetails;
        req.user.skills = u.skills;

        return res.json({
          success: true,
          user: {
            id: u._id, name: u.name, email: u.email, role: u.role,
            avatar: u.avatar, profilePhoto: u.profilePhoto, authProvider: u.authProvider,
            mobile: u.mobile, dob: u.dob, gender: u.gender, city: u.city, state: u.state,
            linkedinUrl: u.linkedinUrl, githubUrl: u.githubUrl, collegeName: u.collegeName,
            academicDetails: u.academicDetails, skills: u.skills,
            placementGoals: u.placementGoals, resumePath: u.resumePath, resumeName: u.resumeName
          }
        });
      }
      return res.status(404).json({ success: false, message: 'Mock profile not found' });
    }

    const user = await User.findById(req.user.id);
    if (user) {
      user.name = req.body.name || user.name;
      if (req.body.password) {
        user.password = req.body.password;
      }
      if (req.body.mobile !== undefined) user.mobile = req.body.mobile;
      if (req.body.dob !== undefined) user.dob = req.body.dob;
      if (req.body.gender !== undefined) user.gender = req.body.gender;
      if (req.body.city !== undefined) user.city = req.body.city;
      if (req.body.state !== undefined) user.state = req.body.state;
      if (req.body.linkedinUrl !== undefined) user.linkedinUrl = req.body.linkedinUrl;
      if (req.body.githubUrl !== undefined) user.githubUrl = req.body.githubUrl;
      if (req.body.collegeName !== undefined) user.collegeName = req.body.collegeName;
      if (req.body.academicDetails) {
        user.academicDetails = {
          course: req.body.academicDetails.course !== undefined ? req.body.academicDetails.course : user.academicDetails.course,
          branch: req.body.academicDetails.branch !== undefined ? req.body.academicDetails.branch : user.academicDetails.branch,
          cgpa: req.body.academicDetails.cgpa !== undefined ? Number(req.body.academicDetails.cgpa) : user.academicDetails.cgpa,
          graduationYear: req.body.academicDetails.graduationYear !== undefined ? Number(req.body.academicDetails.graduationYear) : user.academicDetails.graduationYear,
          currentSemester: req.body.academicDetails.currentSemester !== undefined ? req.body.academicDetails.currentSemester : user.academicDetails.currentSemester
        };
      }
      if (req.body.skills) {
        user.skills = req.body.skills;
      }
      if (req.body.placementGoals) {
        user.placementGoals = {
          targetRole: req.body.placementGoals.targetRole !== undefined ? req.body.placementGoals.targetRole : user.placementGoals.targetRole,
          preferredDomain: req.body.placementGoals.preferredDomain !== undefined ? req.body.placementGoals.preferredDomain : user.placementGoals.preferredDomain,
          dreamCompany: req.body.placementGoals.dreamCompany !== undefined ? req.body.placementGoals.dreamCompany : user.placementGoals.dreamCompany,
          expectedPackage: req.body.placementGoals.expectedPackage !== undefined ? req.body.placementGoals.expectedPackage : user.placementGoals.expectedPackage,
          preferredLocation: req.body.placementGoals.preferredLocation !== undefined ? req.body.placementGoals.preferredLocation : user.placementGoals.preferredLocation,
          targetPlacementYear: req.body.placementGoals.targetPlacementYear !== undefined ? req.body.placementGoals.targetPlacementYear : user.placementGoals.targetPlacementYear
        };
      }

      const updatedUser = await user.save();
      res.json({
        success: true,
        user: {
          id: updatedUser._id, name: updatedUser.name, email: updatedUser.email, role: updatedUser.role,
          avatar: updatedUser.avatar, profilePhoto: updatedUser.profilePhoto, authProvider: updatedUser.authProvider,
          mobile: updatedUser.mobile, dob: updatedUser.dob, gender: updatedUser.gender, city: updatedUser.city, state: updatedUser.state,
          linkedinUrl: updatedUser.linkedinUrl, githubUrl: updatedUser.githubUrl, collegeName: updatedUser.collegeName,
          academicDetails: updatedUser.academicDetails, skills: updatedUser.skills,
          placementGoals: updatedUser.placementGoals, resumePath: updatedUser.resumePath, resumeName: updatedUser.resumeName
        }
      });
    } else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @route   POST /api/auth/profile/photo
// @desc    Upload profile photo
// @access  Private
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const photoStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, '../uploads/profile-photos');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `profile-${req.user.id}-${Date.now()}${ext}`);
  }
});

const photoFilter = (req, file, cb) => {
  const allowed = ['.jpg', '.jpeg', '.png', '.webp'];
  const ext = path.extname(file.originalname).toLowerCase();
  cb(null, allowed.includes(ext));
};

const uploadPhoto = multer({ storage: photoStorage, fileFilter: photoFilter, limits: { fileSize: 5 * 1024 * 1024 } });

router.post('/profile/photo', protect, uploadPhoto.single('photo'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ success: false, message: 'Please upload an image file (JPG, PNG, WEBP)' });

    const photoUrl = `/uploads/profile-photos/${req.file.filename}`;

    if (isDbOffline()) {
      const idx = mockDb.users.findIndex(u => u._id === req.user.id);
      if (idx !== -1) {
        mockDb.users[idx].profilePhoto = photoUrl;
        req.user.profilePhoto = photoUrl;
      }
      return res.json({ success: true, profilePhoto: photoUrl });
    }

    const user = await User.findById(req.user.id);
    if (user) {
      // Delete old custom photo if exists
      if (user.profilePhoto && user.profilePhoto.startsWith('/uploads/profile-photos/')) {
        const oldPath = path.join(__dirname, '..', user.profilePhoto);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      user.profilePhoto = photoUrl;
      await user.save();
      return res.json({ success: true, profilePhoto: photoUrl });
    }
    res.status(404).json({ success: false, message: 'User not found' });
  } catch (error) {
    console.error('Photo upload error:', error);
    res.status(500).json({ success: false, message: 'Failed to upload photo' });
  }
});

// @route   DELETE /api/auth/profile/photo
// @desc    Remove custom profile photo (revert to Google avatar)
// @access  Private
router.delete('/profile/photo', protect, async (req, res) => {
  try {
    if (isDbOffline()) {
      const idx = mockDb.users.findIndex(u => u._id === req.user.id);
      if (idx !== -1) {
        mockDb.users[idx].profilePhoto = '';
        req.user.profilePhoto = '';
      }
      return res.json({ success: true, profilePhoto: '' });
    }

    const user = await User.findById(req.user.id);
    if (user) {
      if (user.profilePhoto && user.profilePhoto.startsWith('/uploads/profile-photos/')) {
        const oldPath = path.join(__dirname, '..', user.profilePhoto);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      user.profilePhoto = '';
      await user.save();
      return res.json({ success: true, profilePhoto: '' });
    }
    res.status(404).json({ success: false, message: 'User not found' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to remove photo' });
  }
});

// @route   POST /api/auth/resume
// @desc    Upload resume
// @access  Private
const resumeStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, '../uploads/resumes');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `resume-${req.user.id}-${Date.now()}${ext}`);
  }
});

const resumeFilter = (req, file, cb) => {
  const allowed = ['.pdf', '.doc', '.docx'];
  const ext = path.extname(file.originalname).toLowerCase();
  cb(null, allowed.includes(ext));
};

const uploadResume = multer({ storage: resumeStorage, fileFilter: resumeFilter, limits: { fileSize: 10 * 1024 * 1024 } });

router.post('/resume', protect, uploadResume.single('resume'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ success: false, message: 'Please upload a resume file (PDF, DOC, DOCX)' });

    const resumeUrl = `/uploads/resumes/${req.file.filename}`;

    if (isDbOffline()) {
      const idx = mockDb.users.findIndex(u => u._id === req.user.id);
      if (idx !== -1) {
        // Delete old resume if exists
        if (mockDb.users[idx].resumePath) {
          const oldPath = path.join(__dirname, '..', mockDb.users[idx].resumePath);
          if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
        }
        mockDb.users[idx].resumePath = resumeUrl;
        mockDb.users[idx].resumeName = req.file.originalname;
      }
      return res.json({ success: true, resumePath: resumeUrl, resumeName: req.file.originalname });
    }

    const user = await User.findById(req.user.id);
    if (user) {
      // Delete old resume if exists
      if (user.resumePath) {
        const oldPath = path.join(__dirname, '..', user.resumePath);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      user.resumePath = resumeUrl;
      user.resumeName = req.file.originalname;
      await user.save();
      return res.json({ success: true, resumePath: resumeUrl, resumeName: req.file.originalname });
    }
    res.status(404).json({ success: false, message: 'User not found' });
  } catch (error) {
    console.error('Resume upload error:', error);
    res.status(500).json({ success: false, message: 'Failed to upload resume' });
  }
});

// @route   DELETE /api/auth/resume
// @desc    Remove uploaded resume
// @access  Private
router.delete('/resume', protect, async (req, res) => {
  try {
    if (isDbOffline()) {
      const idx = mockDb.users.findIndex(u => u._id === req.user.id);
      if (idx !== -1) {
        if (mockDb.users[idx].resumePath) {
          const oldPath = path.join(__dirname, '..', mockDb.users[idx].resumePath);
          if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
        }
        mockDb.users[idx].resumePath = '';
        mockDb.users[idx].resumeName = '';
      }
      return res.json({ success: true });
    }

    const user = await User.findById(req.user.id);
    if (user) {
      if (user.resumePath) {
        const oldPath = path.join(__dirname, '..', user.resumePath);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      user.resumePath = '';
      user.resumeName = '';
      await user.save();
      return res.json({ success: true });
    }
    res.status(404).json({ success: false, message: 'User not found' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to remove resume' });
  }
});

module.exports = router;
