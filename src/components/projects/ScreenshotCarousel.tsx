import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Screenshot } from '../../types';
import { LightboxModal } from './LightboxModal';

interface ScreenshotCarouselProps {
  screenshots: Screenshot[];
  projectName: string;
}

export const ScreenshotCarousel: React.FC<ScreenshotCarouselProps> = ({
  screenshots,
  projectName,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);

  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  const current = screenshots[currentIndex];

  return (
    <div
      className="w-full my-4 bg-dark-950/80 rounded-2xl border border-white/10 p-3 sm:p-4 focus:outline-none"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label={`${projectName} screenshot gallery`}
    >
      {/* Top Header of Carousel */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 font-mono text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-nest-500"></span>
          <span className="text-white font-semibold text-xs truncate max-w-[200px] sm:max-w-none">
            {current.title}
          </span>
          {current.category && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hidden sm:inline">
              {current.category}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-nest-400 font-bold">
            {String(currentIndex + 1).padStart(2, '0')} / {String(screenshots.length).padStart(2, '0')}
          </span>
          <button
            onClick={() => setLightboxOpen(true)}
            type="button"
            className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Inspect</span>
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl bg-black/60 overflow-hidden flex items-center justify-center group cursor-pointer border border-white/5"
        onClick={() => setLightboxOpen(true)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={current.url}
          alt={`${projectName} - ${current.title}`}
          loading="lazy"
          className="w-full h-full object-contain select-none"
        />


        {/* Previous / Next Navigation Arrows */}
        {screenshots.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-dark-900/90 text-white hover:bg-nest-500 border border-white/15 transition-all z-10"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-dark-900/90 text-white hover:bg-nest-500 border border-white/15 transition-all z-10"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Caption description */}
      <div className="pt-3 mt-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-xs">
        <p className="text-slate-300 font-normal leading-relaxed">
          <span className="text-nest-400 font-semibold font-mono">SCREENSHOT {String(currentIndex + 1).padStart(2, '0')}:</span> {current.description}
        </p>
        <span className="text-[10px] text-slate-500 font-mono whitespace-nowrap hidden sm:inline">
          Use arrow keys or swipe
        </span>
      </div>

      {/* Thumbnail Navigation Bar */}
      {screenshots.length > 1 && (
        <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {screenshots.map((s, idx) => (
            <button
              key={s.url}
              onClick={() => setCurrentIndex(idx)}
              type="button"
              className={`flex-shrink-0 w-14 sm:w-16 h-9 sm:h-10 rounded-lg border transition-all overflow-hidden ${
                idx === currentIndex
                  ? 'border-nest-500 ring-2 ring-nest-500/40 opacity-100'
                  : 'border-white/10 opacity-50 hover:opacity-90'
              }`}
              aria-label={`Thumbnail ${idx + 1}`}
            >
              <img
                src={s.url}
                alt={s.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        screenshots={screenshots}
        currentIndex={currentIndex}
        onNavigate={(idx) => setCurrentIndex(idx)}
      />
    </div>
  );
};
