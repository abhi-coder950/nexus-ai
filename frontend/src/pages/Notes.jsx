import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';
import EmptyState from '../components/EmptyState';
import { SkeletonGrid } from '../components/LoadingSkeleton';
import { motion, AnimatePresence } from 'framer-motion';
import { notesApi } from '../api/index';
import { StickyNote, Plus, Search, Trash2, Edit3, X, Pin, PinOff, Loader2, Save, Tag } from 'lucide-react';

const NOTE_COLORS = {
  default: { bg: 'bg-slate-900/60', border: 'border-slate-700/50', dot: 'bg-slate-400' },
  rose:    { bg: 'bg-rose-950/40',  border: 'border-rose-700/40',  dot: 'bg-rose-400' },
  amber:   { bg: 'bg-amber-950/40', border: 'border-amber-700/40', dot: 'bg-amber-400' },
  emerald: { bg: 'bg-emerald-950/40', border: 'border-emerald-700/40', dot: 'bg-emerald-400' },
  sky:     { bg: 'bg-sky-950/40',   border: 'border-sky-700/40',   dot: 'bg-sky-400' },
  violet:  { bg: 'bg-violet-950/40', border: 'border-violet-700/40', dot: 'bg-violet-400' },
  slate:   { bg: 'bg-slate-800/60', border: 'border-slate-600/50', dot: 'bg-slate-300' },
};

const NoteModal = ({ note, onClose, onSave }) => {
  const [form, setForm] = useState({
    title: note?.title || '',
    content: note?.content || '',
    color: note?.color || 'default',
    folder: note?.folder || 'General',
    tags: note?.tags?.join(', ') || '',
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    setSaving(true);
    try {
      await onSave({
        ...form,
        tags: form.tags ? form.tags.split(',').map(t => t.trim()).filter(Boolean) : [],
      });
      onClose();
    } finally { setSaving(false); }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95 }}
        className="glass-card border border-white/10 rounded-2xl p-6 w-full max-w-lg shadow-2xl"
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-white text-base">{note ? 'Edit Note' : 'New Note'}</h3>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/5 text-slate-400"><X className="h-4 w-4" /></button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))}
            placeholder="Note title..." autoFocus required
            className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm font-semibold text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50" />
          <textarea value={form.content} onChange={e => setForm(p => ({ ...p, content: e.target.value }))}
            placeholder="Write your note..." rows={6}
            className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 resize-none" />
          {/* Color Picker */}
          <div>
            <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-2 block">Color</label>
            <div className="flex gap-2 flex-wrap">
              {Object.entries(NOTE_COLORS).map(([key, val]) => (
                <button key={key} type="button" onClick={() => setForm(p => ({ ...p, color: key }))}
                  className={`w-7 h-7 rounded-full ${val.dot} border-2 transition-all ${form.color === key ? 'border-white scale-110' : 'border-transparent'}`} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Folder</label>
              <input value={form.folder} onChange={e => setForm(p => ({ ...p, folder: e.target.value }))}
                placeholder="e.g. Work, Personal..."
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50" />
            </div>
            <div>
              <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Tags</label>
              <input value={form.tags} onChange={e => setForm(p => ({ ...p, tags: e.target.value }))}
                placeholder="ideas, important..."
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50" />
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 py-2.5 rounded-xl text-sm font-medium text-slate-400 bg-slate-800 hover:bg-slate-700 transition-colors">Cancel</button>
            <button type="submit" disabled={saving} className="flex-1 btn-gradient py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2">
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              {note ? 'Update' : 'Save Note'}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

const NoteCard = ({ note, onEdit, onDelete, onTogglePin }) => {
  const style = NOTE_COLORS[note.color] || NOTE_COLORS.default;
  return (
    <motion.div layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
      className={`${style.bg} border ${style.border} rounded-2xl p-4 group relative cursor-pointer hover:border-white/20 transition-all`}
      onClick={() => onEdit(note)}
    >
      {note.isPinned && <div className="absolute top-3 right-3"><Pin className="h-3.5 w-3.5 text-amber-400" /></div>}
      <h3 className="font-semibold text-white text-sm mb-2 pr-6 line-clamp-1">{note.title}</h3>
      {note.content && <p className="text-xs text-slate-400 leading-relaxed line-clamp-4">{note.content}</p>}
      {note.tags?.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-3">
          {note.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] bg-white/5 text-slate-400 px-2 py-0.5 rounded">#{tag}</span>
          ))}
        </div>
      )}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
        <span className="text-[10px] text-slate-600">{note.folder}</span>
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" onClick={e => e.stopPropagation()}>
          <button onClick={() => onTogglePin(note)} className="p-1.5 rounded-lg hover:bg-white/10 text-slate-500 hover:text-amber-400 transition-colors">
            {note.isPinned ? <PinOff className="h-3 w-3" /> : <Pin className="h-3 w-3" />}
          </button>
          <button onClick={() => onDelete(note._id)} className="p-1.5 rounded-lg hover:bg-red-500/10 text-slate-500 hover:text-red-400 transition-colors">
            <Trash2 className="h-3 w-3" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [activeFolder, setActiveFolder] = useState('All');
  const [folders, setFolders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editNote, setEditNote] = useState(null);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const params = {};
      if (activeFolder !== 'All') params.folder = activeFolder;
      if (search) params.search = search;
      const data = await notesApi.getAll(params);
      setNotes(data.notes || []);
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  const fetchFolders = async () => {
    try { const data = await notesApi.getFolders(); setFolders(['All', ...(data.folders || [])]); } catch {}
  };

  useEffect(() => { fetchNotes(); }, [activeFolder]);
  useEffect(() => { fetchFolders(); }, []);

  useEffect(() => {
    const t = setTimeout(() => fetchNotes(), 300);
    return () => clearTimeout(t);
  }, [search]);

  const handleCreate = async (data) => {
    const result = await notesApi.create(data);
    setNotes(prev => [result.note, ...prev]);
    fetchFolders();
  };

  const handleUpdate = async (id, data) => {
    const result = await notesApi.update(id, data);
    setNotes(prev => prev.map(n => n._id === id ? result.note : n));
  };

  const handleDelete = async (id) => {
    await notesApi.delete(id);
    setNotes(prev => prev.filter(n => n._id !== id));
  };

  const handleTogglePin = async (note) => {
    await handleUpdate(note._id, { isPinned: !note.isPinned });
  };

  const handleEdit = (note) => { setEditNote(note); setShowModal(true); };
  const handleClose = () => { setShowModal(false); setEditNote(null); };
  const handleSave = async (data) => {
    if (editNote) await handleUpdate(editNote._id, data);
    else await handleCreate(data);
  };

  const pinned = notes.filter(n => n.isPinned);
  const unpinned = notes.filter(n => !n.isPinned);

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex">
      <Sidebar />
      <div className="flex-1 lg:pl-64 pt-16">
        <Navbar title="Notes" />
        <main className="p-6 max-w-7xl mx-auto">
          <PageTransition>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold text-white">Notes</h1>
                <p className="text-xs text-slate-400 mt-1">{notes.length} note{notes.length !== 1 ? 's' : ''}</p>
              </div>
              <button onClick={() => setShowModal(true)} className="btn-gradient px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2">
                <Plus className="h-4 w-4" /> New Note
              </button>
            </div>

            {/* Search + Folder Filter */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search notes..."
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50" />
              </div>
              <div className="flex gap-2 flex-wrap">
                {folders.map(f => (
                  <button key={f} onClick={() => setActiveFolder(f)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium transition-all ${activeFolder === f ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30' : 'bg-slate-900/50 text-slate-400 border border-white/5 hover:text-slate-200'}`}>
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {loading ? (
              <SkeletonGrid cols={3} rows={2} />
            ) : notes.length === 0 ? (
              <EmptyState icon={StickyNote} title="No notes yet" description="Capture your thoughts, ideas, and important information." actionLabel="Write a Note" onAction={() => setShowModal(true)} iconColor="text-amber-400" bgColor="bg-amber-500/10" borderColor="border-amber-500/20" />
            ) : (
              <>
                {pinned.length > 0 && (
                  <div className="mb-6">
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-3 flex items-center gap-1.5"><Pin className="h-3 w-3" /> Pinned</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      <AnimatePresence>
                        {pinned.map(note => <NoteCard key={note._id} note={note} onEdit={handleEdit} onDelete={handleDelete} onTogglePin={handleTogglePin} />)}
                      </AnimatePresence>
                    </div>
                  </div>
                )}
                {unpinned.length > 0 && (
                  <div>
                    {pinned.length > 0 && <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-3">All Notes</p>}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      <AnimatePresence>
                        {unpinned.map(note => <NoteCard key={note._id} note={note} onEdit={handleEdit} onDelete={handleDelete} onTogglePin={handleTogglePin} />)}
                      </AnimatePresence>
                    </div>
                  </div>
                )}
              </>
            )}
          </PageTransition>
        </main>
      </div>
      <AnimatePresence>
        {showModal && <NoteModal note={editNote} onClose={handleClose} onSave={handleSave} />}
      </AnimatePresence>
    </div>
  );
};

export default Notes;
