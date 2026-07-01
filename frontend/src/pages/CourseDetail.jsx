import React, { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Users, ArrowRight, ChevronRight, Search } from 'lucide-react';
import { COURSES } from '../data/courseData';

const colorMap = {
  indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', text: 'text-indigo-400' },
  violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/20', text: 'text-violet-400' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400' },
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400' },
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400' },
  teal: { bg: 'bg-teal-500/10', border: 'border-teal-500/20', text: 'text-teal-400' },
  yellow: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', text: 'text-yellow-400' },
  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-400' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/20', text: 'text-green-400' },
  pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/20', text: 'text-pink-400' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400' },
};

const CourseDetail = () => {
  const { courseId } = useParams();
  const [searchQuery, setSearchQuery] = useState('');

  const course = COURSES.find(c => c.id === courseId);
  if (!course) {
    return (
      <div className="min-h-screen bg-[#070A13] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-slate-300 mb-2">Course not found</h2>
          <Link to="/hub" className="text-indigo-400 text-sm hover:underline">Back to Hub</Link>
        </div>
      </div>
    );
  }

  const colors = colorMap[course.color] || colorMap.indigo;

  const allSubjects = useMemo(() => {
    const subjectSet = new Set();
    const subjectMap = {};
    Object.entries(course.subjectsPerSemester).forEach(([sem, subjects]) => {
      subjects.forEach(subject => {
        if (!subjectSet.has(subject)) {
          subjectSet.add(subject);
          subjectMap[subject] = { name: subject, semester: Number(sem) };
        }
      });
    });
    let subjects = Object.values(subjectMap);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      subjects = subjects.filter(s => s.name.toLowerCase().includes(q));
    }
    return subjects;
  }, [course, searchQuery]);

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} via-transparent to-transparent opacity-50`} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
            <Link to="/hub" className="hover:text-slate-300 transition-colors">PrepNex Hub</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-slate-300">{course.shortName}</span>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className={`w-16 h-16 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center text-3xl shrink-0`}>
              {course.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">{course.name}</h1>
              <p className="text-sm text-slate-400 mb-4 max-w-2xl">{course.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>{allSubjects.length} Subjects</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5" />
                  <span>{course.branches.length} Branches</span>
                </div>
              </div>
            </div>
          </div>

          {/* Branches */}
          <div className="flex flex-wrap gap-2 mt-4">
            {course.branches.map((branch, i) => (
              <span key={i} className={`text-xs px-3 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border} font-medium`}>
                {branch}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search subjects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900/60 border border-white/10 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 transition-all"
            />
          </div>
        </div>

        {/* All Subjects Grid */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-slate-300 mb-4">
            All Subjects — {allSubjects.length} Available
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allSubjects.map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
              >
                <Link
                  to={`/hub/course/${courseId}/semester/${subject.semester}/subject/${encodeURIComponent(subject.name)}`}
                  className="block glass-card p-5 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:scale-[1.02] group h-full"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.text}`}>
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1 group-hover:text-indigo-300 transition-colors">
                    {subject.name}
                  </h3>
                  <p className="text-[10px] text-slate-500 mb-3">Semester {subject.semester}</p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Practice
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      MCQs
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">
                      Interview
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Course Overview */}
        <div className="glass-card rounded-2xl border border-white/5 p-6">
          <h2 className="text-sm font-semibold text-slate-300 mb-4">Course Overview</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Total Subjects', value: allSubjects.length, icon: BookOpen },
              { label: 'Branches', value: course.branches.length, icon: Users },
              { label: 'Duration', value: course.duration, icon: Clock },
              { label: 'Total Semesters', value: course.totalSemesters, icon: BookOpen },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-slate-900/40 border border-white/5">
                <stat.icon className="h-5 w-5 text-indigo-400 mx-auto mb-2" />
                <p className="text-lg font-bold text-white">{stat.value}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
