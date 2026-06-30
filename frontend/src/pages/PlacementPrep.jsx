import { useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, BookOpen, Clock, ChevronRight, Filter } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import courseRoadmaps from '../data/courseRoadmaps';

const categories = ['All', 'Engineering', 'Computer', 'Commerce', 'Management', 'Science', 'Arts', 'ITI', 'Other'];

const categoryColors = {
  Engineering: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  Computer: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  Commerce: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  Management: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  Science: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  Arts: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  ITI: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  Other: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
};

const categoryGradients = {
  Engineering: 'from-indigo-500 to-indigo-700',
  Computer: 'from-purple-500 to-purple-700',
  Commerce: 'from-emerald-500 to-emerald-700',
  Management: 'from-amber-500 to-amber-700',
  Science: 'from-cyan-500 to-cyan-700',
  Arts: 'from-pink-500 to-pink-700',
  ITI: 'from-orange-500 to-orange-700',
  Other: 'from-slate-500 to-slate-700',
};

export default function PlacementPrep() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = useMemo(() => {
    return courseRoadmaps.filter((course) => {
      const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
      const matchesSearch =
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const totalTopics = (course) => course.topics?.length || 0;

  const totalHours = (course) =>
    course.topics?.reduce((sum, t) => sum + (t.estimatedHours || 0), 0) || 0;

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex">
      <Sidebar />
      <div className="flex-1 pl-64 pt-16">
        <Navbar title="Placement Preparation" />
        <main className="p-8 max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Placement Preparation</h1>
            <p className="text-slate-400 text-lg">
              Choose your course and follow the structured roadmap to ace your placement
            </p>
          </div>

          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mb-6 text-slate-400 text-sm">
            Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="glass-card group cursor-pointer hover:scale-[1.02] transition-all duration-300"
                onClick={() => navigate(`/placement/course/${course.id}`)}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        categoryColors[course.category] || categoryColors.Other
                      }`}
                    >
                      {course.category}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${
                        categoryGradients[course.category] || categoryGradients.Other
                      } flex items-center justify-center shadow-lg`}
                    >
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {course.name}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <BookOpen className="w-4 h-4" />
                      <span>{totalTopics(course)} topics</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Clock className="w-4 h-4" />
                      <span>{totalHours(course)} hrs</span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/placement/course/${course.id}`);
                    }}
                    className="w-full py-2.5 rounded-xl bg-indigo-600/20 text-indigo-300 font-medium text-sm hover:bg-indigo-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 border border-indigo-500/20 hover:border-indigo-500/50"
                  >
                    Start Preparing
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <Filter className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No courses found</h3>
              <p className="text-slate-400">Try adjusting your search or filter to find what you're looking for.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
