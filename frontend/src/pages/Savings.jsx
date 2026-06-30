import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';
import EmptyState from '../components/EmptyState';
import { motion, AnimatePresence } from 'framer-motion';
import { savingsApi } from '../api/index';
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { PiggyBank, Plus, X, Save, Loader2, Trash2, Edit3, IndianRupee, Target } from 'lucide-react';

const GOAL_CATEGORIES = ['emergency', 'travel', 'education', 'gadget', 'home', 'vehicle', 'retirement', 'other'];
const GOAL_ICONS = { emergency: '🚨', travel: '✈️', education: '📚', gadget: '💻', home: '🏠', vehicle: '🚗', retirement: '🏖️', other: '💰' };
const COLORS = { emerald: '#10B981', indigo: '#6366F1', sky: '#0EA5E9', amber: '#F59E0B', rose: '#F43F5E', violet: '#8B5CF6', teal: '#14B8A6', orange: '#F97316' };
const COLOR_OPTS = ['emerald', 'indigo', 'sky', 'amber', 'rose', 'violet', 'teal', 'orange'];
const COLOR_MAP_TEXT = { emerald: 'text-emerald-400', indigo: 'text-indigo-400', sky: 'text-sky-400', amber: 'text-amber-400', rose: 'text-rose-400', violet: 'text-violet-400', teal: 'text-teal-400', orange: 'text-orange-400' };
const COLOR_MAP_BG = { emerald: 'bg-emerald-500/10 border-emerald-500/20', indigo: 'bg-indigo-500/10 border-indigo-500/20', sky: 'bg-sky-500/10 border-sky-500/20', amber: 'bg-amber-500/10 border-amber-500/20', rose: 'bg-rose-500/10 border-rose-500/20', violet: 'bg-violet-500/10 border-violet-500/20', teal: 'bg-teal-500/10 border-teal-500/20', orange: 'bg-orange-500/10 border-orange-500/20' };

const GoalModal = ({ goal, onClose, onSave }) => {
  const [form, setForm] = useState({ name: goal?.name || '', targetAmount: goal?.targetAmount || '', targetDate: goal?.targetDate ? new Date(goal.targetDate).toISOString().split('T')[0] : '', category: goal?.category || 'other', color: goal?.color || 'emerald', icon: goal?.icon || '💰' });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try { await onSave({ ...form, targetAmount: parseFloat(form.targetAmount), icon: GOAL_ICONS[form.category] || form.icon }); onClose(); } finally { setSaving(false); }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95 }}
        className="glass-card border border-white/10 rounded-2xl p-6 w-full max-w-md"
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-white text-base">{goal ? 'Edit Savings Goal' : 'New Savings Goal'}</h3>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/5 text-slate-400"><X className="h-4 w-4" /></button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="Goal name (e.g. iPhone 16)..." required autoFocus
            className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm font-semibold text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50" />
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Target Amount (₹)</label>
              <input type="number" value={form.targetAmount} onChange={e => setForm(p => ({ ...p, targetAmount: e.target.value }))} placeholder="0" required
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500/50" />
            </div>
            <div>
              <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Target Date</label>
              <input type="date" value={form.targetDate} onChange={e => setForm(p => ({ ...p, targetDate: e.target.value }))}
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500/50 [color-scheme:dark]" />
            </div>
          </div>
          <div>
            <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Category</label>
            <select value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))}
              className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none appearance-none">
              {GOAL_CATEGORIES.map(c => <option key={c} value={c}>{GOAL_ICONS[c]} {c}</option>)}
            </select>
          </div>
          <div>
            <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-2 block">Color</label>
            <div className="flex gap-2">
              {COLOR_OPTS.map(c => (
                <button key={c} type="button" onClick={() => setForm(p => ({ ...p, color: c }))}
                  className={`w-7 h-7 rounded-full transition-all ${form.color === c ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-950 scale-110' : ''}`}
                  style={{ background: COLORS[c] }} />
              ))}
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 py-2.5 rounded-xl text-sm font-medium text-slate-400 bg-slate-800">Cancel</button>
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

const ContributeModal = ({ goal, onClose, onContribute }) => {
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [saving, setSaving] = useState(false);
  const remaining = goal.targetAmount - goal.currentAmount;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try { await onContribute(goal._id, parseFloat(amount), note); onClose(); } finally { setSaving(false); }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95 }}
        className="glass-card border border-white/10 rounded-2xl p-6 w-full max-w-sm"
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-white text-base">Add Contribution</h3>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/5 text-slate-400"><X className="h-4 w-4" /></button>
        </div>
        <p className="text-xs text-slate-400 mb-4">₹{remaining.toLocaleString('en-IN')} remaining for "{goal.name}"</p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount (₹)" required autoFocus
            className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-lg font-bold text-white focus:outline-none focus:border-indigo-500/50" />
          <input value={note} onChange={e => setNote(e.target.value)} placeholder="Note (optional)"
            className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50" />
          <button type="submit" disabled={saving} className="w-full btn-gradient py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2">
            {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <IndianRupee className="h-4 w-4" />}
            Add ₹{parseFloat(amount) || 0} to Savings
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

const Savings = () => {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [editGoal, setEditGoal] = useState(null);
  const [contributeGoal, setContributeGoal] = useState(null);

  const fetchGoals = async () => {
    setLoading(true);
    try { const data = await savingsApi.getAll(); setGoals(data.goals || []); } catch {} finally { setLoading(false); }
  };

  useEffect(() => { fetchGoals(); }, []);

  const handleCreate = async (data) => { const r = await savingsApi.create(data); setGoals(p => [r.goal, ...p]); };
  const handleUpdate = async (id, data) => { const r = await savingsApi.update(id, data); setGoals(p => p.map(g => g._id === id ? r.goal : g)); };
  const handleDelete = async (id) => { await savingsApi.delete(id); setGoals(p => p.filter(g => g._id !== id)); };
  const handleContribute = async (id, amount, note) => { const r = await savingsApi.contribute(id, amount, note); setGoals(p => p.map(g => g._id === id ? r.goal : g)); };

  const totalSaved = goals.reduce((s, g) => s + g.currentAmount, 0);
  const totalTarget = goals.reduce((s, g) => s + g.targetAmount, 0);

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex">
      <Sidebar />
      <div className="flex-1 lg:pl-64 pt-16">
        <Navbar title="Savings Tracker" />
        <main className="p-6 max-w-5xl mx-auto">
          <PageTransition>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold text-white">Savings</h1>
                <p className="text-xs text-slate-400 mt-1">₹{totalSaved.toLocaleString('en-IN')} saved of ₹{totalTarget.toLocaleString('en-IN')} total target</p>
              </div>
              <button onClick={() => setShowGoalModal(true)} className="btn-gradient px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2">
                <Plus className="h-4 w-4" /> New Goal
              </button>
            </div>

            {/* Overall progress */}
            {goals.length > 0 && (
              <div className="glass-card border border-emerald-500/20 rounded-2xl p-5 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-emerald-400">Overall Savings Progress</span>
                  <span className="text-xs font-bold text-white">{totalTarget > 0 ? Math.round((totalSaved / totalTarget) * 100) : 0}%</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden">
                  <motion.div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                    initial={{ width: 0 }} animate={{ width: `${totalTarget > 0 ? (totalSaved / totalTarget) * 100 : 0}%` }} transition={{ duration: 1, ease: 'easeOut' }} />
                </div>
              </div>
            )}

            {loading ? (
              <div className="flex items-center justify-center h-48"><Loader2 className="h-6 w-6 text-emerald-400 animate-spin" /></div>
            ) : goals.length === 0 ? (
              <EmptyState icon={PiggyBank} title="No savings goals" description="Set savings goals with target amounts and track your contributions." actionLabel="Create Goal" onAction={() => setShowGoalModal(true)} iconColor="text-emerald-400" bgColor="bg-emerald-500/10" borderColor="border-emerald-500/20" />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <AnimatePresence>
                  {goals.map(goal => {
                    const pct = goal.targetAmount > 0 ? Math.min(100, Math.round((goal.currentAmount / goal.targetAmount) * 100)) : 0;
                    const color = goal.color || 'emerald';
                    const daysLeft = goal.targetDate ? Math.ceil((new Date(goal.targetDate) - new Date()) / 86400000) : null;
                    const chartData = goal.contributions?.slice(-6).map((c, i) => ({ i: i + 1, amt: c.amount })) || [];

                    return (
                      <motion.div key={goal._id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="glass-card border border-white/7 rounded-2xl p-5 group hover:border-white/15 transition-all"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl ${COLOR_MAP_BG[color]} border flex items-center justify-center text-xl`}>{goal.icon || GOAL_ICONS[goal.category] || '💰'}</div>
                            <div>
                              <h3 className="font-semibold text-white text-sm">{goal.name}</h3>
                              <p className="text-[10px] text-slate-500 capitalize">{goal.category}</p>
                            </div>
                          </div>
                          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={() => { setEditGoal(goal); setShowGoalModal(true); }} className="p-1.5 rounded-lg hover:bg-white/5 text-slate-500 hover:text-indigo-400 transition-colors"><Edit3 className="h-3 w-3" /></button>
                            <button onClick={() => handleDelete(goal._id)} className="p-1.5 rounded-lg hover:bg-red-500/10 text-slate-500 hover:text-red-400 transition-colors"><Trash2 className="h-3 w-3" /></button>
                          </div>
                        </div>

                        <div className="flex items-end justify-between mb-2">
                          <div>
                            <p className={`text-2xl font-black ${COLOR_MAP_TEXT[color]}`}>₹{goal.currentAmount.toLocaleString('en-IN')}</p>
                            <p className="text-[10px] text-slate-500">of ₹{goal.targetAmount.toLocaleString('en-IN')}</p>
                          </div>
                          <div className="text-right">
                            <p className={`text-2xl font-black text-white`}>{pct}%</p>
                            {daysLeft !== null && <p className={`text-[10px] ${daysLeft < 0 ? 'text-red-400' : daysLeft <= 30 ? 'text-amber-400' : 'text-slate-500'}`}>{daysLeft < 0 ? 'Overdue' : `${daysLeft}d left`}</p>}
                          </div>
                        </div>

                        <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden mb-4">
                          <motion.div className="h-full rounded-full" style={{ background: COLORS[color] }}
                            initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 0.8, ease: 'easeOut' }} />
                        </div>

                        {goal.isCompleted ? (
                          <div className="text-center py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                            <p className="text-xs font-bold text-emerald-400">🎉 Goal Achieved!</p>
                          </div>
                        ) : (
                          <button onClick={() => setContributeGoal(goal)} className={`w-full py-2 rounded-xl text-xs font-semibold transition-all ${COLOR_MAP_BG[color]} border ${COLOR_MAP_TEXT[color]} hover:opacity-80`}>
                            + Add Contribution
                          </button>
                        )}
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            )}
          </PageTransition>
        </main>
      </div>
      <AnimatePresence>
        {showGoalModal && <GoalModal goal={editGoal} onClose={() => { setShowGoalModal(false); setEditGoal(null); }} onSave={async (data) => { if (editGoal) await handleUpdate(editGoal._id, data); else await handleCreate(data); }} />}
        {contributeGoal && <ContributeModal goal={contributeGoal} onClose={() => setContributeGoal(null)} onContribute={handleContribute} />}
      </AnimatePresence>
    </div>
  );
};

export default Savings;
