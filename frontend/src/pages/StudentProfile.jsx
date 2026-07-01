import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  User, Mail, Phone, GraduationCap, BookOpen, MapPin, Edit3, Camera,
  Award, Target, Clock, TrendingUp, Star, Bookmark, ChevronRight,
  CheckCircle, Brain, Code, FileText, MessageSquare, Trophy, Flame, Calendar, Loader2
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const TABS = [
  { id: 'overview', label: 'Overview', icon: User },
  { id: 'academic', label: 'Academic', icon: GraduationCap },
  { id: 'achievements', label: 'Achievements', icon: Award },
  { id: 'saved', label: 'Saved Courses', icon: Bookmark },
  { id: 'recent', label: 'Recent Activity', icon: Clock },
];

const ACHIEVEMENTS = [
  { id: 1, title: 'First Login', description: 'Joined PrepNex', icon: '🎉', earned: true, date: 'Aug 2023' },
  { id: 2, title: 'Question Streak', description: '7-day practice streak', icon: '🔥', earned: true, date: 'Sep 2023' },
  { id: 3, title: 'Easy Master', description: 'Solved 50 easy questions', icon: '✅', earned: true, date: 'Oct 2023' },
  { id: 4, title: 'Medium Explorer', description: 'Solved 25 medium questions', icon: '💪', earned: true, date: 'Nov 2023' },
  { id: 5, title: 'Note Taker', description: 'Created 10 study notes', icon: '📝', earned: true, date: 'Dec 2023' },
  { id: 6, title: 'Hard Warrior', description: 'Solved 10 hard questions', icon: '⚔️', earned: false, date: null },
  { id: 7, title: 'Course Complete', description: 'Complete a full semester', icon: '🎓', earned: false, date: null },
  { id: 8, title: 'Speed Demon', description: 'Answer 50 questions in 10 min', icon: '⚡', earned: false, date: null },
  { id: 9, title: 'Perfect Score', description: 'Score 100% in a mock test', icon: '💯', earned: false, date: null },
  { id: 10, title: 'Study Bug', description: '30-day streak', icon: '🐛', earned: false, date: null },
  { id: 11, title: 'Interview Ready', description: 'Complete 100 interview Qs', icon: '🎤', earned: false, date: null },
  { id: 12, title: 'Hub Explorer', description: 'Explore 10 courses', icon: '🗺️', earned: false, date: null },
];

const SAVED_COURSES = [
  { id: 'bca', name: 'BCA', progress: 65, lastAccessed: '2 hours ago' },
  { id: 'btech-cse', name: 'B.Tech CSE', progress: 42, lastAccessed: '1 day ago' },
  { id: 'mca', name: 'MCA', progress: 18, lastAccessed: '3 days ago' },
];

const RECENT_ACTIVITY = [
  { type: 'question', title: 'Solved: Data Structures - Linked Lists', time: '2 hours ago', score: '4/5' },
  { type: 'note', title: 'Created note: SQL Fundamentals', time: '5 hours ago' },
  { type: 'mock', title: 'Completed: C Programming Basics Test', time: 'Yesterday', score: '85%' },
  { type: 'question', title: 'Solved: Operating Systems - Processes', time: 'Yesterday', score: '6/10' },
  { type: 'article', title: 'Read: Why C is Called Mother of Languages', time: '2 days ago' },
  { type: 'question', title: 'Solved: DBMS - SQL Queries', time: '3 days ago', score: '9/10' },
];

const StudentProfile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [detectingLocation, setDetectingLocation] = useState(false);

  const profile = {
    name: user?.name || 'Student',
    email: user?.email || '',
    mobile: user?.mobile || '',
    dob: user?.dob || '',
    gender: user?.gender || '',
    college: user?.collegeName || '',
    university: user?.university || '',
    course: user?.academicDetails?.course || '',
    branch: user?.academicDetails?.branch || '',
    semester: user?.academicDetails?.currentSemester || '',
    cgpa: user?.academicDetails?.cgpa || '',
    city: user?.city || '',
    state: user?.state || '',
    country: user?.country || '',
    skills: user?.skills || [],
    bio: user?.bio || '',
    profileCompletion: 78,
    streak: 12,
    totalQuestions: 245,
    averageScore: 78,
  };

  const completionItems = [
    { label: 'Profile Photo', done: !!user?.profilePhoto || !!user?.avatar },
    { label: 'Basic Info', done: !!profile.name && !!profile.email },
    { label: 'College Details', done: !!profile.college && !!profile.course },
    { label: 'Skills', done: profile.skills.length > 0 },
    { label: 'DOB', done: !!profile.dob },
    { label: 'Bio', done: !!profile.bio },
  ];

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
          alert(`Detected Location:\nCity: ${addr.city || addr.town || addr.village || 'N/A'}\nState: ${addr.state || 'N/A'}\nCountry: ${addr.country || 'N/A'}`);
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
    <div className="min-h-screen bg-[#070A13] text-slate-100">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/5" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Avatar */}
            <div className="relative group">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white text-3xl font-bold border-4 border-[#070A13] overflow-hidden">
                {(user?.profilePhoto || user?.avatar) ? (
                  <img src={user.profilePhoto || user.avatar} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  profile.name.charAt(0)
                )}
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-[#070A13] flex items-center justify-center">
                <CheckCircle className="h-3.5 w-3.5 text-white" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-bold mb-1">{profile.name}</h1>
                  <p className="text-sm text-slate-400 mb-2">{profile.bio || 'No bio added yet.'}</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    {profile.course && <span className="flex items-center gap-1"><GraduationCap className="h-3.5 w-3.5" />{profile.course} {profile.branch}</span>}
                    {profile.semester && <span className="flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" />Sem {profile.semester}</span>}
                    {profile.college && <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{profile.college}</span>}
                  </div>
                </div>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium hover:bg-indigo-500/20 transition-all"
                >
                  <Edit3 className="h-3.5 w-3.5" />
                  Edit Profile
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 mt-4">
                {[
                  { label: 'Day Streak', value: profile.streak, icon: Flame, color: 'text-orange-400' },
                  { label: 'Questions Solved', value: profile.totalQuestions, icon: Target, color: 'text-emerald-400' },
                  { label: 'Avg Score', value: `${profile.averageScore}%`, icon: TrendingUp, color: 'text-blue-400' },
                  { label: 'Achievements', value: ACHIEVEMENTS.filter(a => a.earned).length, icon: Award, color: 'text-amber-400' },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/40 border border-white/5">
                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                    <div>
                      <p className="text-sm font-bold text-white">{stat.value}</p>
                      <p className="text-[10px] text-slate-500">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-56 shrink-0">
            <div className="lg:sticky lg:top-6 space-y-1">
              {TABS.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-indigo-600/15 text-white border border-indigo-500/20'
                        : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Profile Completion */}
                <div className="glass-card rounded-2xl border border-white/5 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-white text-sm">Profile Completion</h3>
                    <span className="text-lg font-bold text-indigo-400">{profile.profileCompletion}%</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden mb-4">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-violet-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${profile.profileCompletion}%` }}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {completionItems.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs">
                        {item.done ? (
                          <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-full border border-slate-600" />
                        )}
                        <span className={item.done ? 'text-slate-300' : 'text-slate-500'}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Overview Info */}
                <div className="glass-card rounded-2xl border border-white/5 p-6">
                  <h3 className="font-semibold text-white text-sm mb-4">Profile Overview</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: 'Full Name', value: profile.name || '—', icon: User },
                      { label: 'Email', value: profile.email || '—', icon: Mail },
                      { label: 'Mobile', value: profile.mobile || '—', icon: Phone },
                      { label: 'Course', value: profile.course || '—', icon: GraduationCap },
                      { label: 'Branch', value: profile.branch || '—', icon: BookOpen },
                      { label: 'College', value: profile.college || '—', icon: GraduationCap },
                      { label: 'University', value: profile.university || '—', icon: BookOpen },
                      { label: 'CGPA', value: profile.cgpa ? Number(profile.cgpa).toFixed(2) : '—', icon: Award },
                      { label: 'Date of Birth', value: profile.dob ? new Date(profile.dob + 'T00:00:00').toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '—', icon: Calendar },
                      { label: 'City', value: profile.city || '—', icon: MapPin },
                      { label: 'State', value: profile.state || '—', icon: MapPin },
                      { label: 'Country', value: profile.country || '—', icon: MapPin },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/30 border border-white/5">
                        <item.icon className="h-4 w-4 text-indigo-400 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">{item.label}</p>
                          <p className="text-xs text-slate-200">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Location Detection */}
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <button
                      onClick={handleDetectLocation}
                      disabled={detectingLocation}
                      className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-cyan-500/20 transition-colors disabled:opacity-50"
                    >
                      {detectingLocation ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <MapPin className="h-3.5 w-3.5" />}
                      {detectingLocation ? 'Detecting...' : 'Enable Location (Auto-detect City, State, Country)'}
                    </button>
                    <p className="text-[10px] text-slate-500 mt-1.5">
                      Click to auto-detect your location. You can also set it manually in your profile settings.
                    </p>
                  </div>
                </div>

                {/* Skills */}
                {profile.skills.length > 0 && (
                  <div className="glass-card rounded-2xl border border-white/5 p-6">
                    <h3 className="font-semibold text-white text-sm mb-4">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.map((skill, i) => (
                        <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'academic' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="glass-card rounded-2xl border border-white/5 p-6">
                  <h3 className="font-semibold text-white text-sm mb-4">Academic Progress</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {[
                      { label: 'Current Semester', value: profile.semester ? `${profile.semester}th` : '—', color: 'text-indigo-400' },
                      { label: 'CGPA', value: profile.cgpa ? Number(profile.cgpa).toFixed(2) : '—', color: 'text-violet-400' },
                      { label: 'Course', value: profile.course || '—', color: 'text-emerald-400' },
                    ].map((stat, i) => (
                      <div key={i} className="text-center p-4 rounded-xl bg-slate-900/40 border border-white/5">
                        <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'achievements' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="glass-card rounded-2xl border border-white/5 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-white text-sm">Achievements & Badges</h3>
                    <span className="text-xs text-slate-500">{ACHIEVEMENTS.filter(a => a.earned).length}/{ACHIEVEMENTS.length} earned</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {ACHIEVEMENTS.map((achievement, i) => (
                      <motion.div
                        key={achievement.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className={`p-4 rounded-xl border transition-all ${
                          achievement.earned
                            ? 'bg-gradient-to-br from-amber-500/5 to-orange-500/5 border-amber-500/20'
                            : 'bg-slate-900/30 border-white/5 opacity-50'
                        }`}
                      >
                        <div className="text-3xl mb-2">{achievement.icon}</div>
                        <h4 className="text-sm font-semibold text-white mb-0.5">{achievement.title}</h4>
                        <p className="text-[11px] text-slate-400 mb-2">{achievement.description}</p>
                        {achievement.earned ? (
                          <span className="text-[10px] text-amber-400 flex items-center gap-1">
                            <Trophy className="h-3 w-3" />
                            Earned {achievement.date}
                          </span>
                        ) : (
                          <span className="text-[10px] text-slate-500">Not yet earned</span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'saved' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="glass-card rounded-2xl border border-white/5 p-6">
                  <h3 className="font-semibold text-white text-sm mb-4">Saved Courses</h3>
                  <div className="space-y-3">
                    {SAVED_COURSES.map((course, i) => (
                      <Link
                        key={i}
                        to={`/hub/course/${course.id}`}
                        className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/30 border border-white/5 hover:border-white/10 transition-all cursor-pointer group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                          <BookOpen className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">{course.name}</h4>
                          <p className="text-[10px] text-slate-500">Last accessed: {course.lastAccessed}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-indigo-400">{course.progress}%</p>
                          <div className="w-16 bg-slate-950 h-1.5 rounded-full overflow-hidden mt-1">
                            <div
                              className="bg-indigo-500 h-full rounded-full"
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'recent' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="glass-card rounded-2xl border border-white/5 p-6">
                  <h3 className="font-semibold text-white text-sm mb-4">Recently Studied Topics</h3>
                  <div className="space-y-3">
                    {RECENT_ACTIVITY.map((activity, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/30 border border-white/5">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          activity.type === 'question' ? 'bg-emerald-500/10 text-emerald-400' :
                          activity.type === 'note' ? 'bg-blue-500/10 text-blue-400' :
                          activity.type === 'mock' ? 'bg-purple-500/10 text-purple-400' :
                          'bg-amber-500/10 text-amber-400'
                        }`}>
                          {activity.type === 'question' ? <Target className="h-4 w-4" /> :
                           activity.type === 'note' ? <FileText className="h-4 w-4" /> :
                           activity.type === 'mock' ? <Brain className="h-4 w-4" /> :
                           <BookOpen className="h-4 w-4" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-slate-200 mb-0.5">{activity.title}</p>
                          <p className="text-[10px] text-slate-500">{activity.time}</p>
                        </div>
                        {activity.score && (
                          <span className="text-xs font-semibold text-emerald-400">{activity.score}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
