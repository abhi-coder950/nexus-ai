import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import {
  User,
  Mail,
  GraduationCap,
  BookOpen,
  Award,
  Calendar,
  Code,
  ShieldCheck,
  Target,
  Briefcase,
  FileText,
  BarChart3,
  Loader2,
  LogIn
} from 'lucide-react';

const Profile = () => {
  const { user, loading } = useAuth();

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
          <Link
            to="/login"
            className="btn-gradient px-6 py-3 rounded-xl text-xs font-semibold inline-flex items-center gap-2"
          >
            <LogIn className="h-4 w-4" />
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  const initials = user.name
    ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : 'U';

  const skills = user.academicDetails?.skills || user.skills || [];
  const academic = user.academicDetails || {};

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex">
      <Sidebar />
      <div className="flex-1 pl-64 pt-16">
        <Navbar title="My Profile" />

        <main className="p-8 max-w-4xl mx-auto text-left space-y-8">

          <div className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-2xl shrink-0">
                {initials}
              </div>
              <div className="text-center sm:text-left flex-1">
                <h2 className="text-2xl font-bold text-white tracking-tight">{user.name}</h2>
                <p className="text-xs text-slate-400 mt-1 flex items-center justify-center sm:justify-start gap-1.5">
                  <Mail className="h-3.5 w-3.5" />
                  {user.email}
                </p>
                <div className="flex items-center gap-2 mt-3 justify-center sm:justify-start flex-wrap">
                  <span className="inline-flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-bold px-3 py-1 rounded-lg uppercase">
                    <ShieldCheck className="h-3 w-3" />
                    {user.role || 'Student'}
                  </span>
                  {academic.course && (
                    <span className="inline-flex items-center gap-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-bold px-3 py-1 rounded-lg uppercase">
                      {academic.course}{academic.branch ? ` — ${academic.branch}` : ''}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-indigo-400" />
              Academic Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="glass-card p-5 rounded-2xl text-left">
                <div className="bg-indigo-500/10 border border-indigo-500/20 w-9 h-9 rounded-lg flex items-center justify-center text-indigo-400 mb-3">
                  <BookOpen className="h-4 w-4" />
                </div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1">Course</p>
                <p className="text-sm font-semibold text-white">{academic.course || 'N/A'}</p>
              </div>
              <div className="glass-card p-5 rounded-2xl text-left">
                <div className="bg-purple-500/10 border border-purple-500/20 w-9 h-9 rounded-lg flex items-center justify-center text-purple-400 mb-3">
                  <BookOpen className="h-4 w-4" />
                </div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1">Branch</p>
                <p className="text-sm font-semibold text-white">{academic.branch || 'N/A'}</p>
              </div>
              <div className="glass-card p-5 rounded-2xl text-left">
                <div className="bg-emerald-500/10 border border-emerald-500/20 w-9 h-9 rounded-lg flex items-center justify-center text-emerald-400 mb-3">
                  <Award className="h-4 w-4" />
                </div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1">CGPA</p>
                <p className="text-sm font-semibold text-white">
                  {academic.cgpa != null ? Number(academic.cgpa).toFixed(2) : 'N/A'}
                </p>
              </div>
              <div className="glass-card p-5 rounded-2xl text-left">
                <div className="bg-cyan-500/10 border border-cyan-500/20 w-9 h-9 rounded-lg flex items-center justify-center text-cyan-400 mb-3">
                  <Calendar className="h-4 w-4" />
                </div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1">Graduation Year</p>
                <p className="text-sm font-semibold text-white">{academic.graduationYear || 'N/A'}</p>
              </div>
            </div>
          </div>

          {skills.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                <Code className="h-4 w-4 text-indigo-400" />
                Technical Skills
              </h3>
              <div className="glass-card p-6 rounded-2xl border border-white/5">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, idx) => (
                    <span key={idx} className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-xs text-emerald-400 tracking-tight flex items-center gap-2 uppercase">
                <Target className="h-4 w-4" />
                Placement Goal
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-slate-950/20 px-4 py-3 rounded-xl border border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Target Role</span>
                  <span className="text-xs font-semibold text-white">Software Developer</span>
                </div>
                <div className="flex items-center justify-between bg-slate-950/20 px-4 py-3 rounded-xl border border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Preferred Domain</span>
                  <span className="text-xs font-semibold text-white">Full Stack / Web Development</span>
                </div>
                <div className="flex items-center justify-between bg-slate-950/20 px-4 py-3 rounded-xl border border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Target Year</span>
                  <span className="text-xs font-semibold text-white">{academic.graduationYear || '2026'}</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-xs text-cyan-400 tracking-tight flex items-center gap-2 uppercase">
                <FileText className="h-4 w-4" />
                Resume Status
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-slate-950/20 px-4 py-3 rounded-xl border border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Last Review</span>
                  <span className="text-xs font-semibold text-white">Use Resume Analyzer</span>
                </div>
                <div className="flex items-center justify-between bg-slate-950/20 px-4 py-3 rounded-xl border border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase font-bold">AI Score</span>
                  <span className="text-xs font-semibold text-indigo-400">— /100</span>
                </div>
                <Link to="/resume" className="block text-center bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[10px] font-bold px-4 py-2.5 rounded-xl uppercase hover:bg-cyan-500/20 transition-colors">
                  Analyze My Resume
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-indigo-400" />
              Preparation Progress
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-card p-5 rounded-2xl text-left">
                <div className="bg-indigo-500/10 border border-indigo-500/20 w-9 h-9 rounded-lg flex items-center justify-center text-indigo-400 mb-3">
                  <BookOpen className="h-4 w-4" />
                </div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1">Aptitude Tests</p>
                <p className="text-sm font-semibold text-white">Start practicing</p>
                <Link to="/aptitude" className="text-[10px] text-indigo-400 font-semibold mt-1 inline-block hover:underline">
                  Go to Aptitude Arena &rarr;
                </Link>
              </div>
              <div className="glass-card p-5 rounded-2xl text-left">
                <div className="bg-purple-500/10 border border-purple-500/20 w-9 h-9 rounded-lg flex items-center justify-center text-purple-400 mb-3">
                  <Code className="h-4 w-4" />
                </div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1">Coding Practice</p>
                <p className="text-sm font-semibold text-white">Start solving</p>
                <Link to="/coding" className="text-[10px] text-purple-400 font-semibold mt-1 inline-block hover:underline">
                  Go to Coding Arena &rarr;
                </Link>
              </div>
              <div className="glass-card p-5 rounded-2xl text-left">
                <div className="bg-pink-500/10 border border-pink-500/20 w-9 h-9 rounded-lg flex items-center justify-center text-pink-400 mb-3">
                  <Briefcase className="h-4 w-4" />
                </div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1">Interview Prep</p>
                <p className="text-sm font-semibold text-white">Start preparing</p>
                <Link to="/interview" className="text-[10px] text-pink-400 font-semibold mt-1 inline-block hover:underline">
                  Go to Interview Prep &rarr;
                </Link>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Profile;
