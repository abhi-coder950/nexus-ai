import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';
import EmptyState from '../components/EmptyState';
import { SkeletonList } from '../components/LoadingSkeleton';
import { motion, AnimatePresence } from 'framer-motion';
import { habitsApi } from '../api/index';
import { Flame, Plus, Trash2, Edit3, X, Save, Loader2, CheckCircle2, Circle, Award } from 'lucide-react';

const HABIT_ICONS = ['🏃', '💪', '📚', '🧘', '💧', '🥗', '😴', '🎯', '✍️', '🎵', '🌿', '💊', '🏋️', '🚴', '🧠', '📝'];
const COLORS = ['indigo', 'emerald', 'rose', 'amber', 'violet', 'sky', 'orange', 'teal'];
const COLOR_MAP = { indigo: 'bg-indigo-500', emerald: 'bg-emerald-500', rose: 'bg-rose-500', amber: 'bg-amber-500', violet: 'bg-violet-500', sky: 'bg-sky-500', orange: 'bg-orange-500', teal: 'bg-teal-500' };
const COLOR_RING = { indigo: 'ring-indigo-500', emerald: 'ring-emerald-500', rose: 'ring-rose-500', amber: 'ring-amber-500', violet: 'ring-violet-500', sky: 'ring-sky-500', orange: 'ring-orange-500', teal: 'ring-teal-500' };
const COLOR_TEXT = { indigo: 'text-indigo-400', emerald: 'text-emerald-400', rose: 'text-rose-400', amber: 'text-amber-400', violet: 'text-violet-400', sky: 'text-sky-400', orange: 'text-orange-400', teal: 'text-teal-400' };

// Build last 35 days for heat map
const getLast35Days = () => {
  const days = [];
  for (let i = 34; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    days.push(d.toISOString().split('T')[0]);
  }
  return days;
};

const HabitModal = ({ habit, onClose, onSave }) => {
  const [form, setForm] = useState({ name: habit?.name || '', description: habit?.description || '', icon: habit?.icon || '🎯', color: habit?.color || 'indigo', frequency: habit?.frequency || 'daily', targetDays: habit?.targetDays || 21 });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    setSaving(true);
    try { await onSave(form); onClose(); } finally { setSaving(false); }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95 }}
        className="glass-card border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl"
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-white text-base">{habit ? 'Edit Habit' : 'New Habit'}</h3>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/5 text-slate-400"><X className="h-4 w-4" /></button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-2 block">Choose Icon</label>
            <div className="flex flex-wrap gap-2">
              {HABIT_ICONS.map(icon => (
                <button key={icon} type="button" onClick={() => setForm(p => ({ ...p, icon }))}
                  className={`w-9 h-9 rounded-xl text-lg flex items-center justify-center transition-all ${form.icon === icon ? 'bg-indigo-500/30 ring-2 ring-indigo-500' : 'bg-slate-900/50 hover:bg-slate-800'}`}>
                  {icon}
                </button>
              ))}
            </div>
          </div>
          <input value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
            placeholder="Habit name..." autoFocus required
            className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm font-semibold text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50" />
          <div>
            <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-2 block">Color</label>
            <div className="flex gap-2">
              {COLORS.map(c => (
                <button key={c} type="button" onClick={() => setForm(p => ({ ...p, color: c }))}
                  className={`w-7 h-7 rounded-full ${COLOR_MAP[c]} transition-all ${form.color === c ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-950 scale-110' : ''}`} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Frequency</label>
              <select value={form.frequency} onChange={e => setForm(p => ({ ...p, frequency: e.target.value }))}
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 appearance-none">
                <option value="daily">Daily</option>
                <option value="weekdays">Weekdays</option>
                <option value="weekends">Weekends</option>
                <option value="weekly">Weekly</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Target Days</label>
              <input type="number" min="1" max="365" value={form.targetDays} onChange={e => setForm(p => ({ ...p, targetDays: parseInt(e.target.value) || 21 }))}
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500/50" />
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 py-2.5 rounded-xl text-sm font-medium text-slate-400 bg-slate-800 hover:bg-slate-700 transition-colors">Cancel</button>
            <button type="submit" disabled={saving} className="flex-1 btn-gradient py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2">
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              {habit ? 'Update' : 'Create Habit'}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

const HabitCard = ({ habit, days, onToggle, onEdit, onDelete, toggling }) => {
  const today = new Date().toISOString().split('T')[0];
  const doneTodaySet = new Set(habit.completions?.map(c => c.date));
  const doneToday = doneTodaySet.has(today);
  const color = habit.color || 'indigo';

  return (
    <motion.div layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
      className="glass-card border border-white/7 rounded-2xl p-5 group hover:border-white/15 transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-11 h-11 rounded-xl bg-${color}-500/15 border border-${color}-500/25 flex items-center justify-center text-2xl`}>
            {habit.icon}
          </div>
          <div>
            <h3 className="font-semibold text-white text-sm">{habit.name}</h3>
            <div className="flex items-center gap-2 mt-0.5">
              <Flame className={`h-3 w-3 ${habit.streak > 0 ? 'text-orange-400' : 'text-slate-600'}`} />
              <span className={`text-[10px] font-bold ${habit.streak > 0 ? 'text-orange-400' : 'text-slate-600'}`}>{habit.streak} day streak</span>
              {habit.streak >= 7 && <span className="text-[10px] text-amber-400">🏆</span>}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={() => onEdit(habit)} className="p-1.5 rounded-lg hover:bg-white/5 text-slate-500 hover:text-indigo-400 transition-colors"><Edit3 className="h-3 w-3" /></button>
            <button onClick={() => onDelete(habit._id)} className="p-1.5 rounded-lg hover:bg-red-500/10 text-slate-500 hover:text-red-400 transition-colors"><Trash2 className="h-3 w-3" /></button>
          </div>
          <button onClick={() => onToggle(habit._id)} disabled={toggling === habit._id}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${doneToday ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : `bg-${color}-500/15 text-${color}-400 border border-${color}-500/25 hover:bg-${color}-500/25`}`}>
            {toggling === habit._id ? <Loader2 className="h-3 w-3 animate-spin" /> : doneToday ? <CheckCircle2 className="h-3 w-3" /> : <Circle className="h-3 w-3" />}
            {doneToday ? 'Done!' : 'Mark Done'}
          </button>
        </div>
      </div>

      {/* Mini heat map (last 35 days — 5 weeks) */}
      <div>
        <p className="text-[9px] text-slate-600 uppercase font-bold mb-2">Last 5 Weeks</p>
        <div className="grid gap-1" style={{ gridTemplateColumns: 'repeat(35, 1fr)' }}>
          {days.map(date => {
            const done = doneTodaySet.has(date);
            const isToday = date === today;
            return (
              <div key={date}
                className={`aspect-square rounded-sm ${done ? `bg-${color}-500 opacity-80` : 'bg-slate-800'} ${isToday ? 'ring-1 ring-white/40' : ''}`}
                title={date}
              />
            );
          })}
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-[9px] text-slate-600">{habit.completions?.length || 0} completions</span>
          <span className="text-[9px] text-slate-600">Target: {habit.targetDays} days</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-3">
        <div className="w-full bg-slate-900 rounded-full h-1 overflow-hidden">
          <div className={`h-full bg-${color}-500 rounded-full transition-all duration-700`}
            style={{ width: `${Math.min(100, ((habit.completions?.length || 0) / habit.targetDays) * 100)}%` }} />
        </div>
      </div>
    </motion.div>
  );
};

const Habits = () => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editHabit, setEditHabit] = useState(null);
  const [toggling, setToggling] = useState(null);
  const days = getLast35Days();

  const fetchHabits = async () => {
    setLoading(true);
    try { const data = await habitsApi.getAll(); setHabits(data.habits || []); }
    catch (err) { console.error(err); } finally { setLoading(false); }
  };

  useEffect(() => { fetchHabits(); }, []);

  const handleToggle = async (id) => {
    setToggling(id);
    try { const r = await habitsApi.toggleComplete(id); setHabits(p => p.map(h => h._id === id ? r.habit : h)); }
    catch (err) { console.error(err); } finally { setToggling(null); }
  };

  const handleCreate = async (data) => { const r = await habitsApi.create(data); setHabits(p => [r.habit, ...p]); };
  const handleUpdate = async (id, data) => { const r = await habitsApi.update(id, data); setHabits(p => p.map(h => h._id === id ? r.habit : h)); };
  const handleDelete = async (id) => { await habitsApi.delete(id); setHabits(p => p.filter(h => h._id !== id)); };
  const handleEdit = (habit) => { setEditHabit(habit); setShowModal(true); };
  const handleClose = () => { setShowModal(false); setEditHabit(null); };
  const handleSave = async (data) => { if (editHabit) await handleUpdate(editHabit._id, data); else await handleCreate(data); };

  const today = new Date().toISOString().split('T')[0];
  const doneToday = habits.filter(h => h.completions?.some(c => c.date === today)).length;
  const totalStreak = habits.reduce((s, h) => s + (h.streak || 0), 0);

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex">
      <Sidebar />
      <div className="flex-1 lg:pl-64 pt-16">
        <Navbar title="Habit Tracker" />
        <main className="p-6 max-w-5xl mx-auto">
          <PageTransition>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold text-white">Habits</h1>
                <p className="text-xs text-slate-400 mt-1">{doneToday}/{habits.length} done today · {totalStreak} total streak days</p>
              </div>
              <button onClick={() => setShowModal(true)} className="btn-gradient px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2">
                <Plus className="h-4 w-4" /> New Habit
              </button>
            </div>

            {/* Today's progress */}
            {habits.length > 0 && (
              <div className="glass-card border border-white/7 rounded-2xl p-5 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Flame className="h-4 w-4 text-orange-400" />
                    <span className="text-sm font-bold text-white">Today's Progress</span>
                  </div>
                  <span className="text-sm font-bold text-indigo-400">{doneToday}/{habits.length}</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden">
                  <motion.div className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full"
                    initial={{ width: 0 }} animate={{ width: `${habits.length ? (doneToday / habits.length) * 100 : 0}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }} />
                </div>
                {doneToday === habits.length && habits.length > 0 && (
                  <p className="text-xs text-emerald-400 font-semibold mt-2 flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5" /> Perfect day! All habits complete 🎉
                  </p>
                )}
              </div>
            )}

            {loading ? <SkeletonList rows={3} /> : habits.length === 0 ? (
              <EmptyState icon={Flame} title="No habits yet" description="Build consistent habits and track your streaks daily." actionLabel="Add Habit" onAction={() => setShowModal(true)} iconColor="text-rose-400" bgColor="bg-rose-500/10" borderColor="border-rose-500/20" />
            ) : (
              <div className="space-y-4">
                <AnimatePresence>
                  {habits.map(h => <HabitCard key={h._id} habit={h} days={days} onToggle={handleToggle} onEdit={handleEdit} onDelete={handleDelete} toggling={toggling} />)}
                </AnimatePresence>
              </div>
            )}
          </PageTransition>
        </main>
      </div>
      <AnimatePresence>
        {showModal && <HabitModal habit={editHabit} onClose={handleClose} onSave={handleSave} />}
      </AnimatePresence>
    </div>
  );
};

export default Habits;
