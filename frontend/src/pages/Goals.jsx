import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';
import EmptyState from '../components/EmptyState';
import { SkeletonGrid } from '../components/LoadingSkeleton';
import { motion, AnimatePresence } from 'framer-motion';
import { goalsApi } from '../api/index';
import { Target, Plus, Trash2, Edit3, X, Save, Calendar, CheckCircle2, Circle, Loader2, Trophy, Flame } from 'lucide-react';

const CATEGORIES = ['career', 'health', 'finance', 'education', 'personal', 'fitness', 'travel', 'other'];
const CAT_COLORS = {
  career: 'indigo', health: 'emerald', finance: 'amber', education: 'violet',
  personal: 'pink', fitness: 'rose', travel: 'sky', other: 'slate'
};
const CAT_ICONS = { career: '💼', health: '💚', finance: '💰', education: '📚', personal: '🌟', fitness: '🏃', travel: '✈️', other: '🎯' };

const ProgressRing = ({ progress, size = 60, color = 'indigo' }) => {
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (progress / 100) * circ;
  const colorMap = { indigo: '#6366F1', emerald: '#10B981', amber: '#F59E0B', violet: '#8B5CF6', pink: '#EC4899', rose: '#F43F5E', sky: '#0EA5E9', slate: '#94A3B8' };
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={colorMap[color] || '#6366F1'} strokeWidth="6"
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 0.8s ease' }} />
    </svg>
  );
};

const GoalModal = ({ goal, onClose, onSave }) => {
  const [form, setForm] = useState({
    title: goal?.title || '', description: goal?.description || '',
    category: goal?.category || 'personal', targetDate: goal?.targetDate ? new Date(goal.targetDate).toISOString().split('T')[0] : '',
    icon: goal?.icon || '🎯', color: goal?.color || 'indigo',
    milestones: goal?.milestones || []
  });
  const [newMilestone, setNewMilestone] = useState('');
  const [saving, setSaving] = useState(false);

  const addMilestone = () => {
    if (!newMilestone.trim()) return;
    setForm(p => ({ ...p, milestones: [...p.milestones, { title: newMilestone.trim(), completed: false }] }));
    setNewMilestone('');
  };

  const removeMilestone = (i) => setForm(p => ({ ...p, milestones: p.milestones.filter((_, idx) => idx !== i) }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    setSaving(true);
    try { await onSave({ ...form, targetDate: form.targetDate || null }); onClose(); }
    finally { setSaving(false); }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95 }}
        className="glass-card border border-white/10 rounded-2xl p-6 w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-white text-base">{goal ? 'Edit Goal' : 'New Goal'}</h3>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/5 text-slate-400"><X className="h-4 w-4" /></button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-5 gap-3">
            <input value={form.icon} onChange={e => setForm(p => ({ ...p, icon: e.target.value }))}
              className="bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-3 text-center text-xl focus:outline-none focus:border-indigo-500/50" />
            <div className="col-span-4">
              <input value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))}
                placeholder="Goal title..." autoFocus required
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm font-semibold text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50" />
            </div>
          </div>
          <textarea value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))}
            placeholder="Describe your goal..." rows={2}
            className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 resize-none" />
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Category</label>
              <select value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value, color: CAT_COLORS[e.target.value] || 'indigo' }))}
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 appearance-none capitalize">
                {CATEGORIES.map(c => <option key={c} value={c}>{CAT_ICONS[c]} {c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Target Date</label>
              <input type="date" value={form.targetDate} onChange={e => setForm(p => ({ ...p, targetDate: e.target.value }))}
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500/50 [color-scheme:dark]" />
            </div>
          </div>
          {/* Milestones */}
          <div>
            <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-2 block">Milestones</label>
            <div className="space-y-2">
              {form.milestones.map((m, i) => (
                <div key={i} className="flex items-center gap-2 bg-slate-950/40 rounded-xl px-3 py-2">
                  <span className="text-xs text-slate-300 flex-1">{m.title}</span>
                  <button type="button" onClick={() => removeMilestone(i)} className="text-slate-600 hover:text-red-400"><X className="h-3 w-3" /></button>
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              <input value={newMilestone} onChange={e => setNewMilestone(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addMilestone(); } }}
                placeholder="Add a milestone..."
                className="flex-1 bg-slate-950/50 border border-white/10 rounded-xl py-2 px-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50" />
              <button type="button" onClick={addMilestone} className="px-3 py-2 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 rounded-xl text-xs font-semibold hover:bg-indigo-500/30 transition-colors">Add</button>
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 py-2.5 rounded-xl text-sm font-medium text-slate-400 bg-slate-800 hover:bg-slate-700 transition-colors">Cancel</button>
            <button type="submit" disabled={saving} className="flex-1 btn-gradient py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2">
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              {goal ? 'Update' : 'Create Goal'}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

const GoalCard = ({ goal, onEdit, onDelete, onToggleMilestone }) => {
  const color = goal.color || CAT_COLORS[goal.category] || 'indigo';
  const colorTextMap = { indigo: 'text-indigo-400', emerald: 'text-emerald-400', amber: 'text-amber-400', violet: 'text-violet-400', pink: 'text-pink-400', rose: 'text-rose-400', sky: 'text-sky-400', slate: 'text-slate-400' };
  const colorBgMap = { indigo: 'bg-indigo-500/10 border-indigo-500/20', emerald: 'bg-emerald-500/10 border-emerald-500/20', amber: 'bg-amber-500/10 border-amber-500/20', violet: 'bg-violet-500/10 border-violet-500/20', pink: 'bg-pink-500/10 border-pink-500/20', rose: 'bg-rose-500/10 border-rose-500/20', sky: 'bg-sky-500/10 border-sky-500/20', slate: 'bg-slate-500/10 border-slate-500/20' };
  const daysLeft = goal.targetDate ? Math.ceil((new Date(goal.targetDate) - new Date()) / 86400000) : null;

  return (
    <motion.div layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
      className="glass-card border border-white/7 rounded-2xl p-5 group hover:border-white/15 transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl ${colorBgMap[color]} border flex items-center justify-center text-xl`}>{goal.icon || '🎯'}</div>
          <div>
            <h3 className="font-semibold text-white text-sm line-clamp-1">{goal.title}</h3>
            <span className={`text-[10px] font-bold uppercase ${colorTextMap[color]}`}>{goal.category}</span>
          </div>
        </div>
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={() => onEdit(goal)} className="p-1.5 rounded-lg hover:bg-white/5 text-slate-500 hover:text-indigo-400 transition-colors"><Edit3 className="h-3.5 w-3.5" /></button>
          <button onClick={() => onDelete(goal._id)} className="p-1.5 rounded-lg hover:bg-red-500/10 text-slate-500 hover:text-red-400 transition-colors"><Trash2 className="h-3.5 w-3.5" /></button>
        </div>
      </div>

      {/* Progress Ring */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative flex-shrink-0">
          <ProgressRing progress={goal.progress} size={56} color={color} />
          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">{goal.progress}%</span>
        </div>
        <div className="flex-1 min-w-0">
          {goal.description && <p className="text-xs text-slate-400 line-clamp-2">{goal.description}</p>}
          {daysLeft !== null && (
            <p className={`text-[10px] font-bold mt-1 ${daysLeft < 0 ? 'text-red-400' : daysLeft <= 7 ? 'text-amber-400' : 'text-slate-500'}`}>
              {daysLeft < 0 ? `${Math.abs(daysLeft)}d overdue` : daysLeft === 0 ? 'Due today!' : `${daysLeft} days left`}
            </p>
          )}
        </div>
      </div>

      {/* Milestones */}
      {goal.milestones?.length > 0 && (
        <div className="space-y-1.5 pt-3 border-t border-white/5">
          {goal.milestones.slice(0, 3).map(m => (
            <button key={m._id} onClick={() => onToggleMilestone(goal._id, m._id)}
              className="flex items-center gap-2 w-full text-left hover:bg-white/3 rounded-lg px-1 py-0.5 transition-colors group/m">
              {m.completed
                ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                : <Circle className="h-3.5 w-3.5 text-slate-600 group-hover/m:text-indigo-400 shrink-0 transition-colors" />}
              <span className={`text-xs ${m.completed ? 'line-through text-slate-500' : 'text-slate-300'}`}>{m.title}</span>
            </button>
          ))}
          {goal.milestones.length > 3 && <p className="text-[10px] text-slate-600 pl-1">+{goal.milestones.length - 3} more</p>}
        </div>
      )}

      {goal.status === 'completed' && (
        <div className="mt-3 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-1.5">
          <Trophy className="h-3.5 w-3.5 text-emerald-400" />
          <span className="text-[10px] font-bold text-emerald-400 uppercase">Goal Achieved!</span>
        </div>
      )}
    </motion.div>
  );
};

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editGoal, setEditGoal] = useState(null);
  const [filterCat, setFilterCat] = useState('all');
  const [filterStatus, setFilterStatus] = useState('active');

  const fetchGoals = async () => {
    setLoading(true);
    try {
      const params = {};
      if (filterCat !== 'all') params.category = filterCat;
      if (filterStatus !== 'all') params.status = filterStatus;
      const data = await goalsApi.getAll(params);
      setGoals(data.goals || []);
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  useEffect(() => { fetchGoals(); }, [filterCat, filterStatus]);

  const handleCreate = async (data) => { const r = await goalsApi.create(data); setGoals(p => [r.goal, ...p]); };
  const handleUpdate = async (id, data) => { const r = await goalsApi.update(id, data); setGoals(p => p.map(g => g._id === id ? r.goal : g)); };
  const handleDelete = async (id) => { await goalsApi.delete(id); setGoals(p => p.filter(g => g._id !== id)); };
  const handleToggleMilestone = async (goalId, milestoneId) => {
    const r = await goalsApi.toggleMilestone(goalId, milestoneId);
    setGoals(p => p.map(g => g._id === goalId ? r.goal : g));
  };
  const handleEdit = (goal) => { setEditGoal(goal); setShowModal(true); };
  const handleClose = () => { setShowModal(false); setEditGoal(null); };
  const handleSave = async (data) => { if (editGoal) await handleUpdate(editGoal._id, data); else await handleCreate(data); };

  const stats = { total: goals.length, completed: goals.filter(g => g.status === 'completed').length, avgProgress: goals.length ? Math.round(goals.reduce((s, g) => s + g.progress, 0) / goals.length) : 0 };

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex">
      <Sidebar />
      <div className="flex-1 lg:pl-64 pt-16">
        <Navbar title="Goal Tracker" />
        <main className="p-6 max-w-7xl mx-auto">
          <PageTransition>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold text-white">Goals</h1>
                <p className="text-xs text-slate-400 mt-1">{stats.completed}/{stats.total} achieved · Avg {stats.avgProgress}% progress</p>
              </div>
              <button onClick={() => setShowModal(true)} className="btn-gradient px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2">
                <Plus className="h-4 w-4" /> New Goal
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { label: 'Active Goals', value: goals.filter(g => g.status === 'active').length, color: 'text-indigo-400' },
                { label: 'Completed', value: stats.completed, color: 'text-emerald-400' },
                { label: 'Avg Progress', value: `${stats.avgProgress}%`, color: 'text-amber-400' },
              ].map((s, i) => (
                <div key={i} className="glass-card p-4 rounded-xl text-center">
                  <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
                  <p className="text-[10px] text-slate-500 uppercase font-bold mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              <select value={filterCat} onChange={e => setFilterCat(e.target.value)}
                className="bg-slate-950/50 border border-white/10 rounded-xl py-2 px-3 text-xs text-slate-300 focus:outline-none appearance-none">
                <option value="all">All Categories</option>
                {CATEGORIES.map(c => <option key={c} value={c}>{CAT_ICONS[c]} {c}</option>)}
              </select>
              {['all', 'active', 'completed', 'paused'].map(s => (
                <button key={s} onClick={() => setFilterStatus(s)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium capitalize transition-all ${filterStatus === s ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30' : 'bg-slate-900/50 text-slate-400 border border-white/5 hover:text-slate-200'}`}>
                  {s}
                </button>
              ))}
            </div>

            {loading ? <SkeletonGrid cols={3} rows={2} /> : goals.length === 0 ? (
              <EmptyState icon={Target} title="No goals yet" description="Set goals with milestones and track your progress visually." actionLabel="Set a Goal" onAction={() => setShowModal(true)} iconColor="text-orange-400" bgColor="bg-orange-500/10" borderColor="border-orange-500/20" />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <AnimatePresence>
                  {goals.map(g => <GoalCard key={g._id} goal={g} onEdit={handleEdit} onDelete={handleDelete} onToggleMilestone={handleToggleMilestone} />)}
                </AnimatePresence>
              </div>
            )}
          </PageTransition>
        </main>
      </div>
      <AnimatePresence>
        {showModal && <GoalModal goal={editGoal} onClose={handleClose} onSave={handleSave} />}
      </AnimatePresence>
    </div>
  );
};

export default Goals;
