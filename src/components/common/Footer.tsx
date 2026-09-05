import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-dark-950 py-10 px-4 sm:px-6 font-mono text-xs text-slate-400">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-nest-500 flex items-center justify-center text-white font-bold text-xs">
            S
          </div>
          <span className="text-white font-semibold">Sandy Yoga Prakasa Holley</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-500">MERN · PERN · TALL · Python</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Sandy-YP-Holley"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="https://linkedin.com/in/sandyypholley"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1 text-nest-400 hover:text-nest-300 ml-2"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
        <span>© {new Date().getFullYear()} Sandy Yoga Prakasa Holley. Engineered with React & Three.js.</span>
        <span>KOTA BEKASI, INDONESIA</span>
      </div>
    </footer>
  );
};
