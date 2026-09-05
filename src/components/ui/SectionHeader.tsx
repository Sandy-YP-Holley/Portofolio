import React from 'react';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  tagline?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  subtitle,
  tagline,
  className = '',
}) => {
  return (
    <div className={`mb-12 border-b border-editorial pb-6 ${className}`}>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 text-archival-ochre font-mono text-xs tracking-widest uppercase mb-2">
            <span className="inline-block w-2 h-2 bg-archival-ochre"></span>
            <span>SEC_{number}</span>
            <span className="text-parchment-500 font-mono">//</span>
            <span className="text-parchment-400 font-mono">{tagline || 'INDEX'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-parchment-50">
            {title}
          </h2>
        </div>
        {subtitle && (
          <p className="font-mono text-xs text-parchment-400 max-w-md uppercase tracking-wider text-left md:text-right">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
