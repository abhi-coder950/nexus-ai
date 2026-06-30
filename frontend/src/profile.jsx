import React, { useState, useRef, useEffect, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { useAuth } from './context/AuthContext';
import { Link } from 'react-router-dom';
import {
  User, Mail, GraduationCap, BookOpen, Award, Calendar, Code, ShieldCheck,
  Target, Briefcase, FileText, BarChart3, Loader2, LogIn, Camera, X, Plus,
  Save, Edit3, Phone, MapPin, Github, Linkedin, Trash2, Download, Upload,
  Building2, TrendingUp, Star, BriefcaseBusiness, MapPinned, CalendarClock, Search
} from 'lucide-react';

const SKILL_OPTIONS = [
  'JavaScript', 'Python', 'Java', 'C', 'C++', 'React', 'Node.js', 'Express',
  'MongoDB', 'HTML', 'CSS', 'SQL', 'MySQL', 'PostgreSQL', 'Git', 'Docker',
  'TypeScript', 'AWS', 'Firebase', 'Tailwind', 'Bootstrap', 'Angular', 'Vue',
  'Django', 'Flask', 'Spring', 'PHP', 'GraphQL', 'REST API', 'Linux',
  'Data Structures', 'Algorithms', 'Machine Learning', 'Figma', 'Kubernetes',
  'Redis', 'Next.js', 'Vite', 'Jest', 'Selenium', 'Pandas', 'NumPy', 'TensorFlow'
];

const COURSE_OPTIONS = [
  'BCA', 'B.Tech', 'MCA', 'M.Tech', 'B.Sc', 'M.Sc', 'BBA', 'MBA',
  'B.Com', 'M.Com', 'Polytechnic', 'Diploma', 'ITI', 'Other'
];

const BRANCH_OPTIONS = [
  // Engineering
  'Computer Science & Engineering (CSE)',
  'Information Technology (IT)',
  'Artificial Intelligence (AI)',
  'Artificial Intelligence & Machine Learning (AI & ML)',
  'Data Science',
  'Cyber Security',
  'Electronics & Communication Engineering (ECE)',
  'Electrical Engineering (EE)',
  'Mechanical Engineering',
  'Civil Engineering',
  'Software Engineering',
  'Cloud Computing',
  'Internet of Things (IoT)',
  'Computer Applications',
  // Commerce / Management
  'Finance',
  'Marketing',
  'Human Resources',
  'Accounting',
  'Business Analytics',
  'Commerce',
  // Other
  'General',
  'Other'
];

// ─── Reusable field components (defined OUTSIDE Profile to prevent focus loss) ───

const InputField = ({ label, icon: Icon, value, onChange, placeholder, type = 'text', readOnly = false }) => (
  <div>
    <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">{label}</label>
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
        className={`w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-colors ${readOnly ? 'opacity-60 cursor-not-allowed' : ''}`}
      />
    </div>
  </div>
);

const SelectField = ({ label, icon: Icon, value, onChange, options }) => (
  <div>
    <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">{label}</label>
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-colors appearance-none cursor-pointer"
      >
        <option value="">Select...</option>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  </div>
);

const SearchableDropdown = ({ label, icon: Icon, value, onChange, options, placeholder }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(value || '');
  const ref = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    setSearch(value || '');
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setSearch(value || '');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [value]);

  const filtered = options.filter(opt =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (opt) => {
    onChange(opt);
    setSearch(opt);
    setOpen(false);
  };

  const handleClear = () => {
    onChange('');
    setSearch('');
    setOpen(false);
  };

  return (
    <div>
      <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">{label}</label>
      <div className="relative" ref={ref}>
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={open ? search : (value || '')}
            onChange={(e) => { setSearch(e.target.value); setOpen(true); }}
            onFocus={() => { setOpen(true); setSearch(value || ''); }}
            placeholder={placeholder || 'Search...'}
            className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-8 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-colors"
          />
          {value && (
            <button onClick={handleClear} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300">
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
        {open && filtered.length > 0 && (
          <div className="absolute z-30 mt-1 w-full bg-slate-900 border border-white/10 rounded-xl max-h-48 overflow-y-auto shadow-xl">
            {filtered.map(opt => (
              <button
                key={opt}
                onMouseDown={(e) => { e.preventDefault(); handleSelect(opt); }}
                className={`w-full text-left px-4 py-2 text-xs transition-colors ${opt === value ? 'bg-indigo-500/20 text-indigo-300' : 'text-slate-300 hover:bg-indigo-500/10 hover:text-indigo-300'}`}
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Profile = () => {
  const { user, loading, updateProfile, apiUrl } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [uploadingResume, setUploadingResume] = useState(false);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [skillInput, setSkillInput] = useState('');
  const [showSkillDropdown, setShowSkillDropdown] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');
  const [photoRemoved, setPhotoRemoved] = useState(false);
  const fileInputRef = useRef(null);
  const resumeInputRef = useRef(null);
  const skillDropdownRef = useRef(null);
  const isEditingRef = useRef(false);

  const [form, setForm] = useState({
    name: '', mobile: '', dob: '', gender: '', city: '', state: '',
    linkedinUrl: '', githubUrl: '', collegeName: 'Arka Jain University',
    academicDetails: { course: '', branch: '', cgpa: '', graduationYear: '', currentSemester: '' },
    skills: [],
    placementGoals: { targetRole: '', preferredDomain: '', dreamCompany: '', expectedPackage: '', preferredLocation: '', targetPlacementYear: '' },
    resumeName: '', resumePath: ''
  });

  useEffect(() => {
    setPhotoRemoved(false);
    if (user && !isEditingRef.current) {
      setForm({
        name: user.name || '',
        mobile: user.mobile || '',
        dob: user.dob || '',
        gender: user.gender || '',
        city: user.city || '',
        state: user.state || '',
        linkedinUrl: user.linkedinUrl || '',
        githubUrl: user.githubUrl || '',
        collegeName: user.collegeName || 'Arka Jain University',
        academicDetails: {
          course: user.academicDetails?.course || '',
          branch: user.academicDetails?.branch || '',
          cgpa: user.academicDetails?.cgpa || '',
          graduationYear: user.academicDetails?.graduationYear || '',
          currentSemester: user.academicDetails?.currentSemester || ''
        },
        skills: user.skills || [],
        placementGoals: {
          targetRole: user.placementGoals?.targetRole || '',
          preferredDomain: user.placementGoals?.preferredDomain || '',
          dreamCompany: user.placementGoals?.dreamCompany || '',
          expectedPackage: user.placementGoals?.expectedPackage || '',
          preferredLocation: user.placementGoals?.preferredLocation || '',
          targetPlacementYear: user.placementGoals?.targetPlacementYear || ''
        },
        resumeName: user.resumeName || '',
        resumePath: user.resumePath || ''
      });
    }
  }, [user]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (skillDropdownRef.current && !skillDropdownRef.current.contains(e.target)) {
        setShowSkillDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#070A13] text-slate-100 flex items-center justify-center">
        <div className="flex items-center gap-3 text-slate-400">
          <Loader2 className="h-6 w-6 animate-spin text-indigo-400" />
          <span className="text-sm font-medium">Loading profile...</span>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#070A13] text-slate-100 flex items-center justify-center">
        <div className="glass-card p-10 rounded-3xl text-center max-w-sm mx-auto space-y-5">
          <div className="bg-indigo-500/10 w-16 h-16 rounded-2xl flex items-center justify-center text-indigo-400 mx-auto">
            <User className="h-8 w-8" />
          </div>
          <h2 className="text-xl font-bold text-white">Not Logged In</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Please log in to view your profile and track your placement preparation progress.
          </p>
          <Link to="/login" className="btn-gradient px-6 py-3 rounded-xl text-xs font-semibold inline-flex items-center gap-2">
            <LogIn className="h-4 w-4" /> Go to Login
          </Link>
        </div>
      </div>
    );
  }

  const getAvatarUrl = () => {
    if (photoPreview) return photoPreview;
    if (user.profilePhoto) return user.profilePhoto;
    if (user.avatar) return user.avatar;
    return null;
  };

  const avatarUrl = getAvatarUrl();
  const initials = user.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : 'U';

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleAcademicChange = (field, value) => {
    setForm(prev => ({ ...prev, academicDetails: { ...prev.academicDetails, [field]: value } }));
  };

  const handleGoalsChange = (field, value) => {
    setForm(prev => ({ ...prev, placementGoals: { ...prev.placementGoals, [field]: value } }));
  };

  const addSkill = (skill) => {
    const trimmed = skill.trim();
    if (trimmed && !form.skills.includes(trimmed)) {
      setForm(prev => ({ ...prev, skills: [...prev.skills, trimmed] }));
    }
    setSkillInput('');
    setShowSkillDropdown(false);
  };

  const removeSkill = (skill) => {
    setForm(prev => ({ ...prev, skills: prev.skills.filter(s => s !== skill) }));
  };

  const filteredSkills = SKILL_OPTIONS.filter(
    s => s.toLowerCase().includes(skillInput.toLowerCase()) && !form.skills.includes(s)
  );

  const handlePhotoSelect = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { alert('Photo must be under 5MB'); return; }

    const reader = new FileReader();
    reader.onload = (ev) => setPhotoPreview(ev.target.result);
    reader.readAsDataURL(file);

    setUploadingPhoto(true);
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('photo', file);
      const res = await fetch(`${apiUrl}/auth/profile/photo`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData
      });
      const data = await res.json();
      if (data.success) {
        setPhotoRemoved(false);
      }
    } catch (err) {
      console.error('Photo upload failed:', err);
      setPhotoPreview(null);
    } finally {
      setUploadingPhoto(false);
    }
  };

  const handleRemovePhoto = async () => {
    setPhotoPreview(null);
    setPhotoRemoved(true);
    try {
      const token = localStorage.getItem('token');
      await fetch(`${apiUrl}/auth/profile/photo`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
    } catch (err) {
      console.error('Remove photo failed:', err);
    }
  };

  const handleResumeSelect = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) { alert('Resume must be under 10MB'); return; }

    setUploadingResume(true);
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('resume', file);
      const res = await fetch(`${apiUrl}/auth/resume`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData
      });
      const data = await res.json();
      if (data.success) {
        setForm(prev => ({ ...prev, resumePath: data.resumePath, resumeName: data.resumeName }));
      }
    } catch (err) {
      console.error('Resume upload failed:', err);
    } finally {
      setUploadingResume(false);
    }
  };

  const handleRemoveResume = async () => {
    try {
      const token = localStorage.getItem('token');
      await fetch(`${apiUrl}/auth/resume`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setForm(prev => ({ ...prev, resumePath: '', resumeName: '' }));
    } catch (err) {
      console.error('Remove resume failed:', err);
    }
  };

  const handleSave = async () => {
    if (!form.name.trim()) { alert('Name is required'); return; }
    setSaving(true);
    setSaveMsg('');
    isEditingRef.current = true;
    try {
      await updateProfile({
        name: form.name,
        mobile: form.mobile,
        dob: form.dob,
        gender: form.gender,
        city: form.city,
        state: form.state,
        linkedinUrl: form.linkedinUrl,
        githubUrl: form.githubUrl,
        collegeName: form.collegeName,
        academicDetails: form.academicDetails,
        skills: form.skills,
        placementGoals: form.placementGoals
      });
      setSaveMsg('✓ Profile saved successfully!');
      setTimeout(() => setSaveMsg(''), 3000);
      setEditMode(false);
      isEditingRef.current = false;
    } catch (err) {
      setSaveMsg('Failed to save profile. Please try again.');
      isEditingRef.current = false;
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    isEditingRef.current = false;
    setForm({
      name: user.name || '',
      mobile: user.mobile || '',
      dob: user.dob || '',
      gender: user.gender || '',
      city: user.city || '',
      state: user.state || '',
      linkedinUrl: user.linkedinUrl || '',
      githubUrl: user.githubUrl || '',
      collegeName: user.collegeName || 'Arka Jain University',
      academicDetails: {
        course: user.academicDetails?.course || '',
        branch: user.academicDetails?.branch || '',
        cgpa: user.academicDetails?.cgpa || '',
        graduationYear: user.academicDetails?.graduationYear || '',
        currentSemester: user.academicDetails?.currentSemester || ''
      },
      skills: user.skills || [],
      placementGoals: {
        targetRole: user.placementGoals?.targetRole || '',
        preferredDomain: user.placementGoals?.preferredDomain || '',
        dreamCompany: user.placementGoals?.dreamCompany || '',
        expectedPackage: user.placementGoals?.expectedPackage || '',
        preferredLocation: user.placementGoals?.preferredLocation || '',
        targetPlacementYear: user.placementGoals?.targetPlacementYear || ''
      },
      resumeName: user.resumeName || '',
      resumePath: user.resumePath || ''
    });
    setPhotoPreview(null);
    setPhotoRemoved(false);
    setEditMode(false);
    setSaveMsg('');
  };

  const handleEnterEditMode = () => {
    isEditingRef.current = true;
    setEditMode(true);
  };

  // Profile completion calculation
  const calcCompletion = () => {
    const fields = [
      form.name, form.mobile, form.dob, form.gender, form.city, form.state,
      form.linkedinUrl, form.githubUrl, form.collegeName,
      form.academicDetails.course, form.academicDetails.branch,
      form.academicDetails.cgpa, form.academicDetails.graduationYear,
      form.placementGoals.targetRole, form.placementGoals.dreamCompany,
      form.resumePath
    ];
    const skillBonus = form.skills.length > 0 ? 1 : 0;
    const filled = fields.filter(f => f && String(f).trim() !== '').length + skillBonus;
    return Math.round((filled / (fields.length + 1)) * 100);
  };
  const completionPct = calcCompletion();

  // Auto-detect location
  const [detectingLocation, setDetectingLocation] = React.useState(false);
  const handleDetectLocation = () => {
    if (!navigator.geolocation) { alert('Geolocation is not supported by your browser.'); return; }
    setDetectingLocation(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
          const data = await res.json();
          const addr = data.address || {};
          const city = addr.city || addr.town || addr.village || addr.county || '';
          const state = addr.state || '';
          handleChange('city', city);
          handleChange('state', state);
        } catch {
          alert('Could not retrieve location details.');
        } finally {
          setDetectingLocation(false);
        }
      },
      () => { alert('Location permission denied or unavailable.'); setDetectingLocation(false); }
    );
  };

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex">
      <Sidebar />
      <div className="flex-1 pl-64 pt-16">
        <Navbar title="My Profile" />
        <main className="p-8 max-w-4xl mx-auto text-left space-y-8">

          {/* Profile Header */}
          <div className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
              <div className="relative group">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-3xl shrink-0 border-2 border-white/10">
                  {avatarUrl ? (
                    <img src={avatarUrl} alt="Profile" className="w-full h-full object-cover" />
                  ) : initials}
                </div>
                <label className="absolute inset-0 bg-black/60 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <Camera className="h-5 w-5 text-white" />
                  <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handlePhotoSelect} />
                </label>
                {uploadingPhoto && (
                  <div className="absolute inset-0 bg-black/60 rounded-2xl flex items-center justify-center">
                    <Loader2 className="h-5 w-5 text-white animate-spin" />
                  </div>
                )}
                {(photoPreview || (user.profilePhoto && !photoRemoved)) && !editMode && (
                  <button onClick={handleRemovePhoto} className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity" title="Remove photo">
                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>
              <div className="text-center sm:text-left flex-1">
                {editMode ? (
                  <input
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="text-2xl font-bold text-white bg-transparent border-b border-indigo-500/50 focus:outline-none focus:border-indigo-400 w-full mb-1"
                    placeholder="Full Name"
                    autoFocus
                  />
                ) : (
                  <h2 className="text-2xl font-bold text-white tracking-tight">{user.name}</h2>
                )}
                <p className="text-xs text-slate-400 mt-1 flex items-center justify-center sm:justify-start gap-1.5">
                  <Mail className="h-3.5 w-3.5" /> {user.email}
                </p>
                <div className="flex items-center gap-2 mt-3 justify-center sm:justify-start flex-wrap">
                  <span className="inline-flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-bold px-3 py-1 rounded-lg uppercase">
                    <ShieldCheck className="h-3 w-3" /> {user.role || 'Student'}
                  </span>
                  {form.academicDetails.course && (
                    <span className="inline-flex items-center gap-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-bold px-3 py-1 rounded-lg uppercase">
                      {form.academicDetails.course}{form.academicDetails.branch ? ` — ${form.academicDetails.branch}` : ''}
                    </span>
                  )}
                </div>
              </div>
              <div className="shrink-0">
                {editMode ? (
                  <div className="flex items-center gap-2">
                    <button onClick={handleCancel} className="px-4 py-2 text-xs font-semibold text-slate-400 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors flex items-center gap-1.5" disabled={saving}>
                      <X className="h-3.5 w-3.5" /> Cancel
                    </button>
                    <button onClick={handleSave} className="btn-gradient px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5" disabled={saving}>
                      {saving ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                      {saving ? 'Saving...' : 'Save'}
                    </button>
                  </div>
                ) : (
                  <button onClick={handleEnterEditMode} className="px-4 py-2 text-xs font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-xl hover:bg-indigo-500/20 transition-colors flex items-center gap-1.5">
                    <Edit3 className="h-3.5 w-3.5" /> Edit Profile
                  </button>
                )}
              </div>
            </div>
            {saveMsg && (
              <div className={`mt-4 text-xs font-semibold text-center py-2 rounded-xl ${saveMsg.includes('success') || saveMsg.includes('✓') ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                {saveMsg}
              </div>
            )}
            {/* Profile Completion Bar */}
            <div className="mt-5 pt-5 border-t border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Profile Completion</span>
                <span className={`text-xs font-bold ${
                  completionPct >= 80 ? 'text-emerald-400' : completionPct >= 50 ? 'text-yellow-400' : 'text-red-400'
                }`}>{completionPct}%</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    completionPct >= 80 ? 'bg-emerald-500' : completionPct >= 50 ? 'bg-yellow-500' : 'bg-indigo-500'
                  }`}
                  style={{ width: `${completionPct}%` }}
                />
              </div>
              {completionPct < 100 && !editMode && (
                <p className="text-[10px] text-slate-500 mt-1.5">
                  Complete your profile to improve your placement readiness score.
                </p>
              )}
            </div>
          </div>

          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
              <User className="h-4 w-4 text-indigo-400" /> Personal Information
            </h3>
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              {editMode ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <InputField label="Mobile" icon={Phone} value={form.mobile} onChange={(v) => handleChange('mobile', v)} placeholder="Enter mobile number" />
                  <div>
                    <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Date of Birth</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
                      <input
                        type="date"
                        value={form.dob}
                        onChange={(e) => handleChange('dob', e.target.value)}
                        className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-colors [color-scheme:dark]"
                      />
                    </div>
                  </div>
                  <SelectField label="Gender" icon={User} value={form.gender} onChange={(v) => handleChange('gender', v)} options={['Male', 'Female', 'Other', 'Prefer not to say']} />
                  <InputField label="City" icon={MapPin} value={form.city} onChange={(v) => handleChange('city', v)} placeholder="Enter city" />
                  <InputField label="State" icon={MapPin} value={form.state} onChange={(v) => handleChange('state', v)} placeholder="Enter state" />
                  {/* Auto-detect location */}
                  <div className="flex items-end">
                    <button
                      type="button"
                      onClick={handleDetectLocation}
                      disabled={detectingLocation}
                      className="w-full flex items-center justify-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-cyan-500/20 transition-colors disabled:opacity-50"
                    >
                      {detectingLocation ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <MapPin className="h-3.5 w-3.5" />}
                      {detectingLocation ? 'Detecting...' : 'Auto-detect Location'}
                    </button>
                  </div>
                  <InputField label="College Name" icon={Building2} value={form.collegeName} onChange={(v) => handleChange('collegeName', v)} placeholder="College name" />
                  <InputField label="LinkedIn URL" icon={Linkedin} value={form.linkedinUrl} onChange={(v) => handleChange('linkedinUrl', v)} placeholder="https://linkedin.com/in/..." />
                  <InputField label="GitHub URL" icon={Github} value={form.githubUrl} onChange={(v) => handleChange('githubUrl', v)} placeholder="https://github.com/..." />
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { label: 'Mobile', icon: Phone, value: form.mobile || '—' },
                    { label: 'Date of Birth', icon: Calendar, value: form.dob ? new Date(form.dob + 'T00:00:00').toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '—' },
                    { label: 'Gender', icon: User, value: form.gender || '—' },
                    { label: 'City', icon: MapPin, value: form.city || '—' },
                    { label: 'State', icon: MapPin, value: form.state || '—' },
                    { label: 'College', icon: Building2, value: form.collegeName || '—' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-slate-950/20 px-4 py-3 rounded-xl border border-white/5">
                      <item.icon className="h-4 w-4 text-indigo-400 shrink-0" />
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold">{item.label}</p>
                        <p className="text-xs font-semibold text-white">{item.value}</p>
                      </div>
                    </div>
                  ))}
                  {(form.linkedinUrl || form.githubUrl) && (
                    <div className="flex items-center gap-4 col-span-full">
                      {form.linkedinUrl && (
                        <a href={form.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                          <Linkedin className="h-4 w-4" /> LinkedIn
                        </a>
                      )}
                      {form.githubUrl && (
                        <a href={form.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                          <Github className="h-4 w-4" /> GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Academic Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-indigo-400" /> Academic Details
            </h3>
            {editMode ? (
              <div className="glass-card p-6 rounded-2xl border border-white/5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <SearchableDropdown label="Course" icon={BookOpen} value={form.academicDetails.course} onChange={(v) => handleAcademicChange('course', v)} options={COURSE_OPTIONS} placeholder="Search course..." />
                  <SearchableDropdown label="Branch / Specialization" icon={BookOpen} value={form.academicDetails.branch} onChange={(v) => handleAcademicChange('branch', v)} options={BRANCH_OPTIONS} placeholder="Search branch..." />
                  <InputField label="CGPA" icon={Award} value={form.academicDetails.cgpa} onChange={(v) => handleAcademicChange('cgpa', v)} placeholder="e.g. 8.5" type="number" />
                  <InputField label="Graduation Year" icon={Calendar} value={form.academicDetails.graduationYear} onChange={(v) => handleAcademicChange('graduationYear', v)} placeholder="e.g. 2026" type="number" />
                  <InputField label="Current Semester" icon={CalendarClock} value={form.academicDetails.currentSemester} onChange={(v) => handleAcademicChange('currentSemester', v)} placeholder="e.g. 6" />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Course', icon: BookOpen, value: form.academicDetails.course || 'N/A', color: 'indigo' },
                  { label: 'Branch', icon: BookOpen, value: form.academicDetails.branch || 'N/A', color: 'purple' },
                  { label: 'CGPA', icon: Award, value: form.academicDetails.cgpa ? Number(form.academicDetails.cgpa).toFixed(2) : 'N/A', color: 'emerald' },
                  { label: 'Graduation Year', icon: Calendar, value: form.academicDetails.graduationYear || 'N/A', color: 'cyan' }
                ].map((item, i) => (
                  <div key={i} className="glass-card p-5 rounded-2xl text-left">
                    <div className={`bg-${item.color}-500/10 border border-${item.color}-500/20 w-9 h-9 rounded-lg flex items-center justify-center text-${item.color}-400 mb-3`}>
                      <item.icon className="h-4 w-4" />
                    </div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1">{item.label}</p>
                    <p className="text-sm font-semibold text-white">{item.value}</p>
                  </div>
                ))}
                {form.academicDetails.currentSemester && (
                  <div className="glass-card p-5 rounded-2xl text-left">
                    <div className="bg-pink-500/10 border border-pink-500/20 w-9 h-9 rounded-lg flex items-center justify-center text-pink-400 mb-3">
                      <CalendarClock className="h-4 w-4" />
                    </div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1">Current Semester</p>
                    <p className="text-sm font-semibold text-white">{form.academicDetails.currentSemester}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
              <Code className="h-4 w-4 text-indigo-400" /> Technical Skills
            </h3>
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              {editMode ? (
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {form.skills.map((skill, idx) => (
                      <span key={idx} className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase flex items-center gap-1.5">
                        {skill}
                        <button onClick={() => removeSkill(skill)} className="text-indigo-400 hover:text-red-400 transition-colors">
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="relative" ref={skillDropdownRef}>
                    <div className="flex gap-2">
                      <input
                        value={skillInput}
                        onChange={(e) => { setSkillInput(e.target.value); setShowSkillDropdown(true); }}
                        onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addSkill(skillInput); } }}
                        placeholder="Type a skill and press Enter..."
                        className="flex-1 bg-slate-950/50 border border-white/10 rounded-xl py-2 px-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30"
                      />
                      <button onClick={() => addSkill(skillInput)} className="px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 rounded-xl text-xs font-semibold hover:bg-indigo-500/30 transition-colors flex items-center gap-1">
                        <Plus className="h-3.5 w-3.5" /> Add
                      </button>
                    </div>
                    {showSkillDropdown && filteredSkills.length > 0 && (
                      <div className="absolute z-20 mt-1 w-full bg-slate-900 border border-white/10 rounded-xl max-h-48 overflow-y-auto shadow-xl">
                        {filteredSkills.slice(0, 10).map(skill => (
                          <button key={skill} onClick={() => addSkill(skill)} className="w-full text-left px-4 py-2 text-xs text-slate-300 hover:bg-indigo-500/10 hover:text-indigo-300 transition-colors">
                            {skill}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {form.skills.length > 0 ? form.skills.map((skill, idx) => (
                    <span key={idx} className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase">
                      {skill}
                    </span>
                  )) : <p className="text-xs text-slate-500">No skills added yet.</p>}
                </div>
              )}
            </div>
          </div>

          {/* Placement Goals & Resume */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-xs text-emerald-400 tracking-tight flex items-center gap-2 uppercase">
                <Target className="h-4 w-4" /> Placement Goal
              </h4>
              {editMode ? (
                <div className="space-y-3">
                  <InputField label="Target Role" icon={Briefcase} value={form.placementGoals.targetRole} onChange={(v) => handleGoalsChange('targetRole', v)} placeholder="e.g. Software Developer" />
                  <InputField label="Preferred Domain" icon={TrendingUp} value={form.placementGoals.preferredDomain} onChange={(v) => handleGoalsChange('preferredDomain', v)} placeholder="e.g. Full Stack / Web Dev" />
                  <InputField label="Dream Company" icon={Star} value={form.placementGoals.dreamCompany} onChange={(v) => handleGoalsChange('dreamCompany', v)} placeholder="e.g. Google, Microsoft" />
                  <InputField label="Expected Package" icon={BriefcaseBusiness} value={form.placementGoals.expectedPackage} onChange={(v) => handleGoalsChange('expectedPackage', v)} placeholder="e.g. 8-12 LPA" />
                  <InputField label="Preferred Location" icon={MapPinned} value={form.placementGoals.preferredLocation} onChange={(v) => handleGoalsChange('preferredLocation', v)} placeholder="e.g. Bangalore, Hyderabad" />
                  <InputField label="Target Placement Year" icon={CalendarClock} value={form.placementGoals.targetPlacementYear} onChange={(v) => handleGoalsChange('targetPlacementYear', v)} placeholder="e.g. 2026" />
                </div>
              ) : (
                <div className="space-y-3">
                  {[
                    { label: 'Target Role', value: form.placementGoals.targetRole || '—' },
                    { label: 'Preferred Domain', value: form.placementGoals.preferredDomain || '—' },
                    { label: 'Dream Company', value: form.placementGoals.dreamCompany || '—' },
                    { label: 'Expected Package', value: form.placementGoals.expectedPackage || '—' },
                    { label: 'Preferred Location', value: form.placementGoals.preferredLocation || '—' },
                    { label: 'Target Year', value: form.placementGoals.targetPlacementYear || form.academicDetails.graduationYear || '—' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between bg-slate-950/20 px-4 py-3 rounded-xl border border-white/5">
                      <span className="text-[10px] text-slate-400 uppercase font-bold">{item.label}</span>
                      <span className="text-xs font-semibold text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="glass-card p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-xs text-cyan-400 tracking-tight flex items-center gap-2 uppercase">
                <FileText className="h-4 w-4" /> Resume
              </h4>
              {form.resumeName ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-slate-950/20 px-4 py-3 rounded-xl border border-white/5">
                    <div className="flex items-center gap-2 min-w-0">
                      <FileText className="h-4 w-4 text-cyan-400 shrink-0" />
                      <span className="text-xs font-semibold text-white truncate">{form.resumeName}</span>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <a href={`${apiUrl.replace('/api', '')}${form.resumePath}`} target="_blank" rel="noopener noreferrer" className="p-1.5 text-cyan-400 hover:text-cyan-300 transition-colors" title="Download">
                        <Download className="h-3.5 w-3.5" />
                      </a>
                      {editMode && (
                        <button onClick={handleRemoveResume} className="p-1.5 text-red-400 hover:text-red-300 transition-colors" title="Remove">
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                  {editMode && (
                    <label className="block text-center bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[10px] font-bold px-4 py-2.5 rounded-xl uppercase hover:bg-cyan-500/20 transition-colors cursor-pointer">
                      {uploadingResume ? <Loader2 className="h-4 w-4 animate-spin inline mr-1" /> : <Upload className="h-4 w-4 inline mr-1" />}
                      {uploadingResume ? 'Uploading...' : 'Replace Resume'}
                      <input ref={resumeInputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleResumeSelect} disabled={uploadingResume} />
                    </label>
                  )}
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-slate-950/20 px-4 py-3 rounded-xl border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Status</span>
                    <span className="text-xs font-semibold text-slate-500">No resume uploaded</span>
                  </div>
                  {editMode && (
                    <label className="block text-center bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[10px] font-bold px-4 py-2.5 rounded-xl uppercase hover:bg-cyan-500/20 transition-colors cursor-pointer">
                      {uploadingResume ? <Loader2 className="h-4 w-4 animate-spin inline mr-1" /> : <Upload className="h-4 w-4 inline mr-1" />}
                      {uploadingResume ? 'Uploading...' : 'Upload Resume'}
                      <input ref={resumeInputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleResumeSelect} disabled={uploadingResume} />
                    </label>
                  )}
                  <Link to="/resume" className="block text-center bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-bold px-4 py-2.5 rounded-xl uppercase hover:bg-purple-500/20 transition-colors">
                    Analyze My Resume
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Progress Summary */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-indigo-400" /> Preparation Progress
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-card p-5 rounded-2xl text-left">
                <div className="bg-indigo-500/10 border border-indigo-500/20 w-9 h-9 rounded-lg flex items-center justify-center text-indigo-400 mb-3">
                  <BookOpen className="h-4 w-4" />
                </div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1">Aptitude Tests</p>
                <p className="text-sm font-semibold text-white">Start practicing</p>
                <Link to="/aptitude" className="text-[10px] text-indigo-400 font-semibold mt-1 inline-block hover:underline">Go to Aptitude Arena →</Link>
              </div>
              <div className="glass-card p-5 rounded-2xl text-left">
                <div className="bg-purple-500/10 border border-purple-500/20 w-9 h-9 rounded-lg flex items-center justify-center text-purple-400 mb-3">
                  <Code className="h-4 w-4" />
                </div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1">Coding Practice</p>
                <p className="text-sm font-semibold text-white">Start solving</p>
                <Link to="/coding" className="text-[10px] text-purple-400 font-semibold mt-1 inline-block hover:underline">Go to Coding Arena →</Link>
              </div>
              <div className="glass-card p-5 rounded-2xl text-left">
                <div className="bg-pink-500/10 border border-pink-500/20 w-9 h-9 rounded-lg flex items-center justify-center text-pink-400 mb-3">
                  <Briefcase className="h-4 w-4" />
                </div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1">Interview Prep</p>
                <p className="text-sm font-semibold text-white">Start preparing</p>
                <Link to="/interview" className="text-[10px] text-pink-400 font-semibold mt-1 inline-block hover:underline">Go to Interview Prep →</Link>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Profile;
