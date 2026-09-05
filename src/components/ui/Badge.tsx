import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'ochre' | 'emerald' | 'amber' | 'muted' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  className = '',
}) => {
  const variantStyles = {
    default: 'bg-ink-800 text-parchment-200 border-white/10',
    ochre: 'bg-archival-ochre/15 text-archival-ochre-light border-archival-ochre/30',
    emerald: 'bg-signal-emerald/15 text-signal-emerald border-signal-emerald/30',
    amber: 'bg-signal-amber/15 text-signal-amber border-signal-amber/30',
    muted: 'bg-ink-900/60 text-parchment-400 border-white/5',
    outline: 'bg-transparent text-parchment-300 border-white/20',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 tracking-wide',
    md: 'text-xs px-2.5 py-1 tracking-wider',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono uppercase font-medium border rounded-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};
