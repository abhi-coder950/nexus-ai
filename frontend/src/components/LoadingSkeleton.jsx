import React from 'react';

const SkeletonCard = ({ className = '' }) => (
  <div className={`glass-card rounded-2xl p-5 animate-pulse ${className}`}>
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-xl bg-slate-800" />
      <div className="flex-1 space-y-2">
        <div className="h-3 bg-slate-800 rounded w-2/3" />
        <div className="h-2 bg-slate-800/60 rounded w-1/2" />
      </div>
    </div>
    <div className="space-y-2">
      <div className="h-2 bg-slate-800 rounded w-full" />
      <div className="h-2 bg-slate-800 rounded w-4/5" />
      <div className="h-2 bg-slate-800/60 rounded w-3/5" />
    </div>
  </div>
);

const SkeletonList = ({ rows = 4 }) => (
  <div className="space-y-3">
    {Array.from({ length: rows }).map((_, i) => (
      <div key={i} className="glass-card rounded-xl p-4 flex items-center gap-3 animate-pulse">
        <div className="w-9 h-9 rounded-xl bg-slate-800 shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-3 bg-slate-800 rounded w-3/4" />
          <div className="h-2 bg-slate-800/60 rounded w-1/2" />
        </div>
        <div className="w-16 h-6 bg-slate-800 rounded-lg" />
      </div>
    ))}
  </div>
);

const SkeletonGrid = ({ cols = 3, rows = 2 }) => (
  <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${cols} gap-4`}>
    {Array.from({ length: cols * rows }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

export { SkeletonCard, SkeletonList, SkeletonGrid };
export default SkeletonCard;
