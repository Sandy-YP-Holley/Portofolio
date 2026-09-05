import React, { useEffect } from 'react';
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
    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, currentIndex, screenshots.length, onClose, onNavigate]);

  if (!isOpen || screenshots.length === 0) return null;

  const current = screenshots[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Screenshot Lightbox Viewer"
    >
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between z-10 border-b border-white/15 pb-4">
        <div className="flex items-center gap-3">
          <Maximize2 className="w-4 h-4 text-archival-ochre" />
          <span className="font-mono text-xs tracking-wider uppercase text-parchment-200">
            {current.title}
          </span>
          {current.category && (
            <span className="font-mono text-[10px] px-2 py-0.5 border border-white/20 text-parchment-400 uppercase hidden sm:inline">
              {current.category}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-archival-ochre">
            {String(currentIndex + 1).padStart(2, '0')} / {String(screenshots.length).padStart(2, '0')}
          </span>
          <button
            onClick={onClose}
            type="button"
            className="p-2 text-parchment-400 hover:text-white border border-white/20 hover:border-archival-ochre transition-colors"
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
              className="absolute left-2 sm:left-6 z-10 p-3 bg-ink-900/80 hover:bg-archival-ochre hover:text-ink-950 text-parchment-200 border border-white/20 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => onNavigate((currentIndex + 1) % screenshots.length)}
              type="button"
              className="absolute right-2 sm:right-6 z-10 p-3 bg-ink-900/80 hover:bg-archival-ochre hover:text-ink-950 text-parchment-200 border border-white/20 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        <img
          src={current.url}
          alt={current.title}
          className="max-h-[75vh] max-w-[92vw] object-contain border border-white/10 shadow-2xl transition-transform duration-200 select-none"
        />
      </div>

      {/* Bottom Description Bar */}
      <div className="border-t border-white/15 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
        <p className="text-parchment-300 max-w-3xl">
          {current.description}
        </p>
        <span className="text-parchment-500 text-[10px] uppercase">
          ESC to exit · Left/Right arrows to navigate
        </span>
      </div>
    </div>
  );
};
