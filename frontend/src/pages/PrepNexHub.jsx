import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, BookOpen, Clock, Users, ArrowRight, Filter, Sparkles } from 'lucide-react';
import { COURSES } from '../data/courseData';

const colorMap = {
  indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', text: 'text-indigo-400', hover: 'hover:border-indigo-500/40' },
  violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/20', text: 'text-violet-400', hover: 'hover:border-violet-500/40' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', hover: 'hover:border-blue-500/40' },
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400', hover: 'hover:border-cyan-500/40' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', hover: 'hover:border-emerald-500/40' },
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400', hover: 'hover:border-orange-500/40' },
  teal: { bg: 'bg-teal-500/10', border: 'border-teal-500/20', text: 'text-teal-400', hover: 'hover:border-teal-500/40' },
  yellow: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', text: 'text-yellow-400', hover: 'hover:border-yellow-500/40' },
  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-400', hover: 'hover:border-rose-500/40' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/20', text: 'text-green-400', hover: 'hover:border-green-500/40' },
  pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/20', text: 'text-pink-400', hover: 'hover:border-pink-500/40' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400', hover: 'hover:border-amber-500/40' },
};

const PrepNexHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Courses' },
    { id: 'ug', label: 'Undergraduate' },
    { id: 'pg', label: 'Postgraduate' },
    { id: 'diploma', label: 'Diploma' },
  ];

  const filteredCourses = useMemo(() => {
    let filtered = COURSES;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(course =>
        course.name.toLowerCase().includes(query) ||
        course.shortName.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.branches.some(b => b.toLowerCase().includes(query))
      );
    }

    if (selectedFilter === 'ug') {
      filtered = filtered.filter(c => ['bca', 'bsc', 'bcom', 'ba', 'bba', 'btech-cse', 'btech-it', 'btech-ece', 'btech-mech', 'btech-civil', 'btech-ee'].includes(c.id));
    } else if (selectedFilter === 'pg') {
      filtered = filtered.filter(c => ['mca', 'mba', 'mtech'].includes(c.id));
    } else if (selectedFilter === 'diploma') {
      filtered = filtered.filter(c => ['diploma', 'polytechnic'].includes(c.id));
    }

    return filtered;
  }, [searchQuery, selectedFilter]);

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-indigo-400" />
              <span className="text-indigo-300 text-xs font-semibold">Central Learning Hub</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              PrepNex <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-300">Hub</span>
            </h1>
            <p className="text-slate-400 text-sm max-w-lg mx-auto">
              Explore courses across all disciplines. Practice questions, access notes, and prepare for placements.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto mb-6"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
              <input
                type="text"
                placeholder="Search courses, subjects, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-slate-900/60 border border-white/10 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
              />
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex items-center justify-center gap-2 flex-wrap"
          >
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  selectedFilter === filter.id
                    ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                    : 'bg-slate-900/40 text-slate-400 border border-white/5 hover:border-white/10'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        {/* Stats */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-slate-400">
            <span className="text-white font-semibold">{filteredCourses.length}</span> courses available
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredCourses.map((course, index) => {
            const colors = colorMap[course.color] || colorMap.indigo;
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={`/hub/course/${course.id}`}
                  className={`block glass-card p-5 rounded-2xl border ${colors.border} ${colors.hover} transition-all duration-300 hover:scale-[1.02] group h-full`}
                >
                  {/* Icon & Title */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center text-2xl shrink-0`}>
                      {course.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white text-sm mb-1 group-hover:text-indigo-300 transition-colors">
                        {course.shortName}
                      </h3>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{course.name}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-4 text-[11px] text-slate-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      <span>{course.totalSemesters} Semesters</span>
                    </div>
                  </div>

                  {/* Branches */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {course.branches.slice(0, 3).map((branch, i) => (
                      <span key={i} className={`text-[10px] px-2 py-0.5 rounded-full ${colors.bg} ${colors.text} font-medium`}>
                        {branch}
                      </span>
                    ))}
                    {course.branches.length > 3 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800/50 text-slate-400">
                        +{course.branches.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className={`flex items-center gap-1 text-xs font-semibold ${colors.text} group-hover:gap-2 transition-all`}>
                    <span>Explore Course</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <Search className="h-12 w-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-300 mb-2">No courses found</h3>
            <p className="text-sm text-slate-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrepNexHub;
