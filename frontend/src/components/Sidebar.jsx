import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, Code, BookOpen, MessageSquare, FileText,
  LogOut, ShieldCheck, ChevronDown, GraduationCap, Menu, X,
  Search, User, Globe, Home
} from 'lucide-react';

const NAV_SECTIONS = [
  {
    label: 'Overview',
    items: [
      { name: 'Home', path: '/', icon: Home, color: 'emerald' },
      { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard, color: 'indigo' },
    ]
  },
  {
    label: 'PrepNex Hub',
    items: [
      { name: 'Hub', path: '/hub', icon: Globe, color: 'cyan' },
      { name: 'My Profile', path: '/profile/student', icon: User, color: 'violet' },
    ]
  },
  {
    label: 'PrepNex Tools',
    items: [
      { name: 'Aptitude', path: '/aptitude', icon: BookOpen, color: 'indigo' },
      { name: 'Coding', path: '/coding', icon: Code, color: 'purple' },
      { name: 'Resume', path: '/resume', icon: FileText, color: 'cyan' },
      { name: 'Interview', path: '/interview', icon: MessageSquare, color: 'pink' },
    ]
  }
];

const colorMap = {
  indigo: 'text-indigo-400', violet: 'text-violet-400', sky: 'text-sky-400',
  blue: 'text-blue-400', emerald: 'text-emerald-400', amber: 'text-amber-400',
  orange: 'text-orange-400', rose: 'text-rose-400', cyan: 'text-cyan-400',
  teal: 'text-teal-400', green: 'text-green-400', lime: 'text-lime-400',
  pink: 'text-pink-400', purple: 'text-purple-400', red: 'text-red-400',
  gray: 'text-slate-400'
};

const SidebarSection = ({ section, collapsed }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-2">
      {!collapsed && (
        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center justify-between w-full px-4 py-1.5 mb-1 text-[9px] font-bold text-slate-500 uppercase tracking-widest hover:text-slate-400 transition-colors"
        >
          {section.label}
          <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${open ? '' : '-rotate-90'}`} />
        </button>
      )}
      <AnimatePresence initial={false}>
        {(open || collapsed) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden space-y-0.5"
          >
            {section.items.map((item) => {
              const Icon = item.icon;
              const iconColor = colorMap[item.color] || 'text-slate-400';
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  title={collapsed ? item.name : undefined}
                  className={({ isActive }) => `
                    flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-150 group relative
                    ${isActive
                      ? 'bg-indigo-600/15 text-white'
                      : 'hover:bg-white/5 text-slate-400 hover:text-slate-200'}
                    ${collapsed ? 'justify-center' : ''}
                  `}
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 rounded-xl bg-indigo-600/15 border border-indigo-500/20"
                          transition={{ duration: 0.2 }}
                        />
                      )}
                      <Icon className={`h-4 w-4 relative z-10 shrink-0 ${isActive ? iconColor : 'text-slate-500 group-hover:' + iconColor}`} />
                      {!collapsed && <span className="relative z-10">{item.name}</span>}
                      {isActive && !collapsed && (
                        <div className={`ml-auto w-1.5 h-1.5 rounded-full ${iconColor.replace('text-', 'bg-')} relative z-10`} />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const sidebarContent = (
    <div className={`flex flex-col h-full transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
      {/* Brand */}
      <div className={`flex items-center h-16 border-b border-slate-800/80 shrink-0 ${collapsed ? 'justify-center px-3' : 'gap-3 px-5'}`}>
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shrink-0">
          <GraduationCap className="h-4 w-4 text-white" />
        </div>
        {!collapsed && (
          <div className="flex-1 min-w-0">
            <span className="font-bold text-base tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-300">
              PrepNex
            </span>
            <p className="text-[9px] text-slate-500 font-medium leading-none mt-0.5">Practice. Prepare. Perform.</p>
          </div>
        )}
        <button
          onClick={() => setCollapsed(c => !c)}
          className="hidden lg:flex ml-auto p-1.5 rounded-lg hover:bg-white/5 text-slate-500 hover:text-slate-300 transition-colors shrink-0"
        >
          <Menu className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 overflow-y-auto overflow-x-hidden scrollbar-thin">
        {NAV_SECTIONS.map((section) => (
          <SidebarSection key={section.label} section={section} collapsed={collapsed} />
        ))}

        {/* Admin */}
        {user?.role === 'admin' && (
          <div className="mt-2 pt-2 border-t border-slate-800/60">
            <NavLink
              to="/admin"
              className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all ${isActive ? 'bg-purple-600/15 text-purple-300' : 'hover:bg-white/5 text-slate-400'} ${collapsed ? 'justify-center' : ''}`}
              title={collapsed ? 'Admin Panel' : undefined}
            >
              <ShieldCheck className="h-4 w-4 text-purple-400 shrink-0" />
              {!collapsed && <span>Admin Panel</span>}
            </NavLink>
          </div>
        )}
      </nav>

      {/* User footer */}
      <div className={`border-t border-slate-800/80 p-3 shrink-0 ${collapsed ? 'flex justify-center' : ''}`}>
        {!collapsed && (
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-xs shrink-0">
              {user?.name?.charAt(0).toUpperCase() || 'U'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-slate-200 truncate">{user?.name}</p>
              <p className="text-[10px] text-slate-500 truncate">{user?.email}</p>
            </div>
          </div>
        )}
        <button
          onClick={handleLogout}
          title="Sign Out"
          className={`flex items-center gap-2 py-2 px-3 rounded-xl text-xs font-medium text-slate-400 hover:text-red-400 hover:bg-red-500/10 border border-slate-800 hover:border-red-500/20 transition-all ${collapsed ? 'justify-center w-full' : 'w-full'}`}
        >
          <LogOut className="h-4 w-4 shrink-0" />
          {!collapsed && 'Sign Out'}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`hidden lg:flex fixed inset-y-0 left-0 z-30 flex-col glass-card border-r border-slate-800 text-slate-300 transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
        {sidebarContent}
      </aside>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 p-2.5 rounded-xl glass-card border border-slate-800 text-slate-400 hover:text-slate-200"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile Overlay Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed inset-y-0 left-0 z-50 w-72 glass-card border-r border-slate-800 text-slate-300"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/5 text-slate-400"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="flex flex-col h-full w-72">
                {/* Brand - mobile */}
                <div className="flex items-center gap-3 h-16 px-5 border-b border-slate-800/80">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-base bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-300">PrepNex</span>
                    <p className="text-[9px] text-slate-500">Practice. Prepare. Perform.</p>
                  </div>
                </div>
                <nav className="flex-1 px-2 py-4 overflow-y-auto" onClick={() => setMobileOpen(false)}>
                  {NAV_SECTIONS.map((section) => (
                    <SidebarSection key={section.label} section={section} collapsed={false} />
                  ))}
                </nav>
                <div className="p-3 border-t border-slate-800/80">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-xs">
                      {user?.name?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-slate-200 truncate">{user?.name}</p>
                      <p className="text-[10px] text-slate-500 truncate">{user?.email}</p>
                    </div>
                  </div>
                  <button onClick={handleLogout} className="flex items-center gap-2 w-full py-2 px-3 rounded-xl text-xs font-medium text-slate-400 hover:text-red-400 hover:bg-red-500/10 border border-slate-800 hover:border-red-500/20 transition-all">
                    <LogOut className="h-4 w-4" /> Sign Out
                  </button>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
