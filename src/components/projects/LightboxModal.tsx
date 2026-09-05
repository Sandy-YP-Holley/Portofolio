import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Screenshot } from '../../types';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  screenshots: Screenshot[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  screenshots,
  currentIndex,
  onNavigate,
}) => {
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + screenshots.length) % screenshots.length);
      }
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % screenshots.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, currentIndex, screenshots.length, onClose, onNavigate]);

  if (!isOpen || screenshots.length === 0) return null;

  const current = screenshots[currentIndex];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        onNavigate((currentIndex + 1) % screenshots.length);
      } else {
        onNavigate((currentIndex - 1 + screenshots.length) % screenshots.length);
      }
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-dark-950/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Screenshot Lightbox Viewer"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between z-10 border-b border-white/15 pb-3 sm:pb-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <Maximize2 className="w-4 h-4 text-nest-400 flex-shrink-0" />
          <span className="font-mono text-xs tracking-wider uppercase text-white font-semibold truncate max-w-[150px] sm:max-w-none">
            {current.title}
          </span>
          {current.category && (
            <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 uppercase hidden sm:inline">
              {current.category}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <span className="font-mono text-xs text-nest-400 font-bold">
            {String(currentIndex + 1).padStart(2, '0')} / {String(screenshots.length).padStart(2, '0')}
          </span>
          <button
            onClick={onClose}
            type="button"
            className="p-1.5 sm:p-2 text-slate-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            aria-label="Close Lightbox (Escape)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
        {/* Navigation Arrows */}
        {screenshots.length > 1 && (
          <>
            <button
              onClick={() => onNavigate((currentIndex - 1 + screenshots.length) % screenshots.length)}
              type="button"
              className="absolute left-2 sm:left-6 z-10 p-2 sm:p-3 rounded-full bg-dark-900/90 hover:bg-nest-500 text-white border border-white/15 transition-colors shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={() => onNavigate((currentIndex + 1) % screenshots.length)}
              type="button"
              className="absolute right-2 sm:right-6 z-10 p-2 sm:p-3 rounded-full bg-dark-900/90 hover:bg-nest-500 text-white border border-white/15 transition-colors shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </>
        )}

        <img
          src={current.url}
          alt={current.title}
          className="max-h-[72vh] sm:max-h-[76vh] max-w-[94vw] sm:max-w-[90vw] object-contain rounded-lg border border-white/10 shadow-2xl transition-transform duration-200 select-none"
        />
      </div>

      {/* Bottom Description Bar */}
      <div className="border-t border-white/15 pt-3 sm:pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
        <p className="text-slate-300 max-w-3xl leading-relaxed">
          {current.description}
        </p>
        <span className="text-slate-400 text-[10px] uppercase whitespace-nowrap">
          Swipe or arrows to navigate · Esc to close
        </span>
      </div>
    </div>
  );
};
