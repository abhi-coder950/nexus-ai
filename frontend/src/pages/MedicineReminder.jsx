import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';
import EmptyState from '../components/EmptyState';
import { motion, AnimatePresence } from 'framer-motion';
import { remindersApi } from '../api/index';
import { Pill, Plus, X, Save, Loader2, Trash2, Edit3, Clock, CheckCircle2, Circle, AlertCircle } from 'lucide-react';

const FREQUENCY_LABELS = { once: 'Once daily', twice: 'Twice daily', thrice: '3× daily', four_times: '4× daily', as_needed: 'As needed' };
const FREQ_TIMES = { once: ['08:00'], twice: ['08:00', '20:00'], thrice: ['08:00', '14:00', '20:00'], four_times: ['08:00', '12:00', '16:00', '20:00'], as_needed: [] };

const MedicineModal = ({ medicine, onClose, onSave }) => {
  const [form, setForm] = useState({
    type: 'medicine',
    medicineName: medicine?.medicineName || '',
    dosage: medicine?.dosage || '',
    frequency: medicine?.frequency || 'once',
    times: medicine?.times || FREQ_TIMES.once,
    startDate: medicine?.startDate ? new Date(medicine.startDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
    endDate: medicine?.endDate ? new Date(medicine.endDate).toISOString().split('T')[0] : '',
    notes: medicine?.notes || ''
  });
  const [saving, setSaving] = useState(false);

  const handleFreqChange = (freq) => setForm(p => ({ ...p, frequency: freq, times: FREQ_TIMES[freq] }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try { await onSave({ ...form, endDate: form.endDate || null }); onClose(); } finally { setSaving(false); }
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
          <h3 className="font-bold text-white text-base">{medicine ? 'Edit Medicine' : 'Add Medicine'}</h3>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/5 text-slate-400"><X className="h-4 w-4" /></button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input value={form.medicineName} onChange={e => setForm(p => ({ ...p, medicineName: e.target.value }))} placeholder="Medicine name..." required autoFocus
            className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm font-semibold text-white placeholder-slate-600 focus:outline-none focus:border-pink-500/50" />
          <input value={form.dosage} onChange={e => setForm(p => ({ ...p, dosage: e.target.value }))} placeholder="Dosage (e.g. 500mg, 1 tablet)..."
            className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-pink-500/50" />
          <div>
            <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-2 block">Frequency</label>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(FREQUENCY_LABELS).map(([k, l]) => (
                <button key={k} type="button" onClick={() => handleFreqChange(k)}
                  className={`py-2 px-3 rounded-xl text-xs font-medium text-left transition-all ${form.frequency === k ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30' : 'bg-slate-900/50 text-slate-400 border border-white/5 hover:text-slate-200'}`}>
                  {l}
                </button>
              ))}
            </div>
          </div>
          {form.times?.length > 0 && (
            <div>
              <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-2 block">Times</label>
              <div className="flex flex-wrap gap-2">
                {form.times.map((t, i) => (
                  <input key={i} type="time" value={t} onChange={e => setForm(p => ({ ...p, times: p.times.map((tt, j) => j === i ? e.target.value : tt) }))}
                    className="bg-slate-950/50 border border-white/10 rounded-xl py-2 px-3 text-sm text-white focus:outline-none [color-scheme:dark]" />
                ))}
              </div>
            </div>
          )}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Start Date</label>
              <input type="date" value={form.startDate} onChange={e => setForm(p => ({ ...p, startDate: e.target.value }))}
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none [color-scheme:dark]" />
            </div>
            <div>
              <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">End Date</label>
              <input type="date" value={form.endDate} onChange={e => setForm(p => ({ ...p, endDate: e.target.value }))}
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none [color-scheme:dark]" />
            </div>
          </div>
          <textarea value={form.notes} onChange={e => setForm(p => ({ ...p, notes: e.target.value }))} placeholder="Additional notes..." rows={2}
            className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-pink-500/50 resize-none" />
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 py-2.5 rounded-xl text-sm font-medium text-slate-400 bg-slate-800">Cancel</button>
            <button type="submit" disabled={saving} className="flex-1 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-rose-500 text-white hover:opacity-90 transition-opacity">
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              {medicine ? 'Update' : 'Add Medicine'}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

const MedicineReminder = () => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editMed, setEditMed] = useState(null);

  const fetch = async () => {
    setLoading(true);
    try { const data = await remindersApi.getAll('medicine'); setMedicines(data.reminders || []); } catch {} finally { setLoading(false); }
  };

  useEffect(() => { fetch(); }, []);

  const handleCreate = async (data) => { const r = await remindersApi.create(data); setMedicines(p => [r.reminder, ...p]); };
  const handleUpdate = async (id, data) => { const r = await remindersApi.update(id, data); setMedicines(p => p.map(m => m._id === id ? r.reminder : m)); };
  const handleDelete = async (id) => { await remindersApi.delete(id); setMedicines(p => p.filter(m => m._id !== id)); };
  const handleEdit = (m) => { setEditMed(m); setShowModal(true); };
  const handleClose = () => { setShowModal(false); setEditMed(null); };
  const handleSave = async (data) => { if (editMed) await handleUpdate(editMed._id, data); else await handleCreate(data); };

  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  const isTimePast = (timeStr) => {
    const [h, m] = timeStr.split(':').map(Number);
    return h < currentHour || (h === currentHour && m <= currentMinute);
  };

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex">
      <Sidebar />
      <div className="flex-1 lg:pl-64 pt-16">
        <Navbar title="Medicine Reminder" />
        <main className="p-6 max-w-4xl mx-auto">
          <PageTransition>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold text-white">Medicine Tracker</h1>
                <p className="text-xs text-slate-400 mt-1">{medicines.length} active prescription{medicines.length !== 1 ? 's' : ''}</p>
              </div>
              <button onClick={() => setShowModal(true)} className="px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 bg-gradient-to-r from-pink-600 to-rose-500 text-white hover:opacity-90 transition-opacity">
                <Plus className="h-4 w-4" /> Add Medicine
              </button>
            </div>

            {/* Today's Schedule */}
            {medicines.length > 0 && (
              <div className="glass-card border border-pink-500/20 rounded-2xl p-5 mb-6">
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-pink-400" /> Today's Schedule
                </h3>
                <div className="space-y-2">
                  {medicines.flatMap(m => (m.times || []).map(t => ({ medicine: m, time: t }))).sort((a, b) => a.time.localeCompare(b.time)).map(({ medicine: m, time }, i) => {
                    const past = isTimePast(time);
                    return (
                      <div key={i} className={`flex items-center gap-3 p-3 rounded-xl ${past ? 'bg-slate-900/30' : 'bg-pink-500/5 border border-pink-500/10'}`}>
                        {past ? <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" /> : <Circle className="h-4 w-4 text-pink-400 shrink-0" />}
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium ${past ? 'text-slate-500' : 'text-white'}`}>{m.medicineName}</p>
                          {m.dosage && <p className="text-[10px] text-slate-500">{m.dosage}</p>}
                        </div>
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${past ? 'text-slate-600 bg-slate-800' : 'text-pink-300 bg-pink-500/15'}`}>{time}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {loading ? <div className="flex items-center justify-center h-48"><Loader2 className="h-6 w-6 text-pink-400 animate-spin" /></div>
              : medicines.length === 0 ? (
                <EmptyState icon={Pill} title="No medicines tracked" description="Add your prescriptions to get daily reminders and tracking." actionLabel="Add Medicine" onAction={() => setShowModal(true)} iconColor="text-pink-400" bgColor="bg-pink-500/10" borderColor="border-pink-500/20" />
              ) : (
                <div className="space-y-4">
                  <AnimatePresence>
                    {medicines.map(m => {
                      const isActive = !m.endDate || new Date(m.endDate) >= new Date();
                      return (
                        <motion.div key={m._id} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                          className="glass-card border border-white/7 rounded-2xl p-5 group hover:border-pink-500/20 transition-all"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                                <Pill className="h-5 w-5 text-pink-400" />
                              </div>
                              <div>
                                <p className="text-sm font-bold text-white">{m.medicineName}</p>
                                <p className="text-[10px] text-slate-400">{m.dosage && `${m.dosage} · `}{FREQUENCY_LABELS[m.frequency]}</p>
                                {m.times?.length > 0 && <div className="flex gap-1 mt-1">{m.times.map(t => <span key={t} className="text-[10px] bg-pink-500/10 text-pink-300 px-1.5 py-0.5 rounded">{t}</span>)}</div>}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg border ${isActive ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' : 'text-slate-500 bg-slate-800 border-slate-700'}`}>{isActive ? 'Active' : 'Completed'}</span>
                              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button onClick={() => handleEdit(m)} className="p-1.5 rounded-lg hover:bg-white/5 text-slate-500 hover:text-indigo-400 transition-colors"><Edit3 className="h-3 w-3" /></button>
                                <button onClick={() => handleDelete(m._id)} className="p-1.5 rounded-lg hover:bg-red-500/10 text-slate-500 hover:text-red-400 transition-colors"><Trash2 className="h-3 w-3" /></button>
                              </div>
                            </div>
                          </div>
                          {m.notes && <p className="text-xs text-slate-500 mt-3 pl-13">{m.notes}</p>}
                          <div className="flex gap-4 mt-3 text-[10px] text-slate-600">
                            {m.startDate && <span>Start: {new Date(m.startDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}</span>}
                            {m.endDate && <span>End: {new Date(m.endDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}</span>}
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
        {showModal && <MedicineModal medicine={editMed} onClose={handleClose} onSave={handleSave} />}
      </AnimatePresence>
    </div>
  );
};

export default MedicineReminder;
