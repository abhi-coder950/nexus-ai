import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';
import EmptyState from '../components/EmptyState';
import { motion, AnimatePresence } from 'framer-motion';
import { billsApi } from '../api/index';
import { TrendingUp, Plus, X, Save, Loader2, Trash2, Edit3, CheckCircle2, AlertCircle, Clock, Calendar } from 'lucide-react';

const BILL_CATEGORIES = ['electricity', 'water', 'internet', 'phone', 'rent', 'insurance', 'subscription', 'emi', 'other'];
const CAT_ICONS = { electricity: '⚡', water: '💧', internet: '📡', phone: '📱', rent: '🏠', insurance: '🛡️', subscription: '📺', emi: '🏦', other: '📄' };
const FREQ_LABELS = { 'one-time': 'One Time', weekly: 'Weekly', monthly: 'Monthly', quarterly: 'Quarterly', annually: 'Annual' };

const BillModal = ({ bill, onClose, onSave }) => {
  const [form, setForm] = useState({ name: bill?.name || '', amount: bill?.amount || '', category: bill?.category || 'other', dueDate: bill?.dueDate ? new Date(bill.dueDate).toISOString().split('T')[0] : '', frequency: bill?.frequency || 'monthly', reminderDays: bill?.reminderDays || 3, notes: bill?.notes || '' });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try { await onSave({ ...form, amount: parseFloat(form.amount) }); onClose(); } finally { setSaving(false); }
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
          <h3 className="font-bold text-white text-base">{bill ? 'Edit Bill' : 'Add Bill'}</h3>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/5 text-slate-400"><X className="h-4 w-4" /></button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="Bill name (e.g. Jio Fiber)..." required autoFocus
            className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm font-semibold text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50" />
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Amount (₹)</label>
              <input type="number" value={form.amount} onChange={e => setForm(p => ({ ...p, amount: e.target.value }))} placeholder="0" required
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500/50" />
            </div>
            <div>
              <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Category</label>
              <select value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))}
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none appearance-none">
                {BILL_CATEGORIES.map(c => <option key={c} value={c}>{CAT_ICONS[c]} {c}</option>)}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Due Date</label>
              <input type="date" value={form.dueDate} onChange={e => setForm(p => ({ ...p, dueDate: e.target.value }))} required
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500/50 [color-scheme:dark]" />
            </div>
            <div>
              <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Frequency</label>
              <select value={form.frequency} onChange={e => setForm(p => ({ ...p, frequency: e.target.value }))}
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none appearance-none">
                {Object.entries(FREQ_LABELS).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
              </select>
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 py-2.5 rounded-xl text-sm font-medium text-slate-400 bg-slate-800">Cancel</button>
            <button type="submit" disabled={saving} className="flex-1 btn-gradient py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2">
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              {bill ? 'Update' : 'Add Bill'}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

const Bills = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editBill, setEditBill] = useState(null);
  const [paying, setPaying] = useState(null);
  const [filter, setFilter] = useState('upcoming');

  const fetchBills = async () => {
    setLoading(true);
    try {
      let params = {};
      if (filter === 'upcoming') params = { upcoming: 30 };
      else if (filter === 'paid') params = { isPaid: true };
      else if (filter === 'overdue') params = {};
      const data = await billsApi.getAll(params);
      let result = data.bills || [];
      if (filter === 'overdue') result = result.filter(b => !b.isPaid && new Date(b.dueDate) < new Date());
      setBills(result);
    } catch {} finally { setLoading(false); }
  };

  useEffect(() => { fetchBills(); }, [filter]);

  const handlePay = async (id) => {
    setPaying(id);
    try { const r = await billsApi.pay(id); setBills(p => p.map(b => b._id === id ? r.bill : b)); } finally { setPaying(null); }
  };

  const handleCreate = async (data) => { const r = await billsApi.create(data); setBills(p => [r.bill, ...p]); };
  const handleUpdate = async (id, data) => { const r = await billsApi.update(id, data); setBills(p => p.map(b => b._id === id ? r.bill : b)); };
  const handleDelete = async (id) => { await billsApi.delete(id); setBills(p => p.filter(b => b._id !== id)); };
  const handleEdit = (b) => { setEditBill(b); setShowModal(true); };
  const handleClose = () => { setShowModal(false); setEditBill(null); };
  const handleSave = async (data) => { if (editBill) await handleUpdate(editBill._id, data); else await handleCreate(data); fetchBills(); };

  const totalDue = bills.filter(b => !b.isPaid).reduce((s, b) => s + b.amount, 0);
  const overdueBills = bills.filter(b => !b.isPaid && new Date(b.dueDate) < new Date());

  const getDueStatus = (bill) => {
    if (bill.isPaid) return { label: 'Paid', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' };
    const days = Math.ceil((new Date(bill.dueDate) - new Date()) / 86400000);
    if (days < 0) return { label: 'Overdue', color: 'text-red-400 bg-red-500/10 border-red-500/20' };
    if (days === 0) return { label: 'Due Today', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' };
    if (days <= 3) return { label: `${days}d`, color: 'text-orange-400 bg-orange-500/10 border-orange-500/20' };
    return { label: `${days}d`, color: 'text-slate-400 bg-slate-500/10 border-slate-500/20' };
  };

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex">
      <Sidebar />
      <div className="flex-1 lg:pl-64 pt-16">
        <Navbar title="Bill Reminders" />
        <main className="p-6 max-w-4xl mx-auto">
          <PageTransition>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold text-white">Bills</h1>
                <p className="text-xs text-slate-400 mt-1">₹{totalDue.toLocaleString('en-IN')} pending {overdueBills.length > 0 && <span className="text-red-400">· {overdueBills.length} overdue</span>}</p>
              </div>
              <button onClick={() => setShowModal(true)} className="btn-gradient px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2">
                <Plus className="h-4 w-4" /> Add Bill
              </button>
            </div>

            {/* Filter tabs */}
            <div className="flex gap-2 mb-5">
              {['upcoming', 'overdue', 'paid', 'all'].map(f => (
                <button key={f} onClick={() => setFilter(f)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium capitalize transition-all ${filter === f ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30' : 'bg-slate-900/50 text-slate-400 border border-white/5 hover:text-slate-200'}`}>
                  {f}
                  {f === 'overdue' && overdueBills.length > 0 && <span className="ml-1.5 bg-red-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">{overdueBills.length}</span>}
                </button>
              ))}
            </div>

            {loading ? (
              <div className="flex items-center justify-center h-48"><Loader2 className="h-6 w-6 text-indigo-400 animate-spin" /></div>
            ) : bills.length === 0 ? (
              <EmptyState icon={TrendingUp} title="No bills" description="Add recurring bills to get reminders before due dates." actionLabel="Add Bill" onAction={() => setShowModal(true)} iconColor="text-lime-400" bgColor="bg-lime-500/10" borderColor="border-lime-500/20" />
            ) : (
              <div className="space-y-3">
                <AnimatePresence>
                  {bills.map(bill => {
                    const status = getDueStatus(bill);
                    return (
                      <motion.div key={bill._id} layout initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                        className={`glass-card border rounded-xl p-4 flex items-center gap-4 group hover:border-white/15 transition-all ${bill.isPaid ? 'opacity-60 border-white/5' : 'border-white/7'}`}
                      >
                        <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-xl shrink-0">{CAT_ICONS[bill.category] || '📄'}</div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-semibold ${bill.isPaid ? 'line-through text-slate-500' : 'text-white'}`}>{bill.name}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[10px] text-slate-500 capitalize">{bill.category}</span>
                            <span className="text-[10px] text-slate-600">·</span>
                            <span className="text-[10px] text-slate-500">{FREQ_LABELS[bill.frequency]}</span>
                            <span className="text-[10px] text-slate-600">·</span>
                            <Calendar className="h-3 w-3 text-slate-600" />
                            <span className="text-[10px] text-slate-500">{new Date(bill.dueDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-sm font-bold text-white">₹{bill.amount.toLocaleString('en-IN')}</span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg border ${status.color}`}>{status.label}</span>
                          <div className="flex gap-1">
                            {!bill.isPaid && (
                              <button onClick={() => handlePay(bill._id)} disabled={paying === bill._id}
                                className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-colors">
                                {paying === bill._id ? <Loader2 className="h-3 w-3 animate-spin" /> : <CheckCircle2 className="h-3 w-3" />}
                              </button>
                            )}
                            <button onClick={() => handleEdit(bill)} className="p-1.5 rounded-lg hover:bg-white/5 text-slate-500 hover:text-indigo-400 transition-colors opacity-0 group-hover:opacity-100"><Edit3 className="h-3 w-3" /></button>
                            <button onClick={() => handleDelete(bill._id)} className="p-1.5 rounded-lg hover:bg-red-500/10 text-slate-500 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"><Trash2 className="h-3 w-3" /></button>
                          </div>
                        </div>
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
        {showModal && <BillModal bill={editBill} onClose={handleClose} onSave={handleSave} />}
      </AnimatePresence>
    </div>
  );
};

export default Bills;
