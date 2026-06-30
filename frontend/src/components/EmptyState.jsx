import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const EmptyState = ({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
  iconColor = 'text-indigo-400',
  bgColor = 'bg-indigo-500/10',
  borderColor = 'border-indigo-500/20'
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col items-center justify-center py-16 text-center"
  >
    <div className={`${bgColor} ${borderColor} border w-16 h-16 rounded-2xl flex items-center justify-center mb-5`}>
      {Icon && <Icon className={`h-7 w-7 ${iconColor}`} />}
    </div>
    <h3 className="text-base font-bold text-white mb-2">{title}</h3>
    {description && <p className="text-xs text-slate-400 max-w-xs leading-relaxed mb-6">{description}</p>}
    {onAction && actionLabel && (
      <button
        onClick={onAction}
        className="btn-gradient px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2"
      >
        <Plus className="h-3.5 w-3.5" />
        {actionLabel}
      </button>
    )}
  </motion.div>
);

export default EmptyState;
