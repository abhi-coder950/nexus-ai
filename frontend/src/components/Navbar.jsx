import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Award, BookOpen, Clock } from 'lucide-react';

const Navbar = ({ title }) => {
  const { user } = useAuth();
  
  const formatDate = () => {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <header className="fixed top-0 right-0 left-64 z-10 h-16 glass-card border-b border-slate-800/80 flex items-center justify-between px-8 text-slate-300">
      {/* Title / Section Name */}
      <div>
        <h1 className="font-semibold text-lg text-slate-100">{title}</h1>
        <p className="text-[10px] text-slate-400 font-medium">{formatDate()}</p>
      </div>

      {/* Quick Stats Banner (Only for students) */}
      {user && user.role === 'student' && (
        <div className="hidden md:flex items-center gap-6">
          {/* CGPA badge */}
          {user.academicDetails?.cgpa > 0 && (
            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
              <Award className="h-4 w-4 text-emerald-400" />
              <div className="text-left">
                <p className="text-[9px] text-slate-400 uppercase tracking-wider font-bold leading-none">CGPA</p>
                <p className="text-xs font-semibold text-emerald-400 leading-tight">
                  {user.academicDetails.cgpa.toFixed(2)}
                </p>
              </div>
            </div>
          )}

          {/* Academic Path */}
          {user.academicDetails?.course && (
            <div className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-lg">
              <BookOpen className="h-4 w-4 text-indigo-400" />
              <div className="text-left">
                <p className="text-[9px] text-slate-400 uppercase tracking-wider font-bold leading-none">Batch</p>
                <p className="text-xs font-semibold text-indigo-300 leading-tight">
                  {user.academicDetails.course} ({user.academicDetails.graduationYear || '2026'})
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
