import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Copy, Check } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { Hero3DBackground } from './Hero3DBackground';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('holleysandyyogaprakasa@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center items-center pt-28 pb-20 px-4 sm:px-6 overflow-hidden bg-nest-glow"
    >
      {/* 3D Canvas element tracking cursor/touch directly BEHIND name & introduction */}
      <Hero3DBackground />

      {/* Centered Hero Content Container */}
      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center justify-center">
        
        {/* Strictly Centered Top Status Tag */}
        <div className="w-full flex justify-center items-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono backdrop-blur-md mx-auto"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-nest-500 flex-shrink-0" />
            <span className="text-center">Full-Stack Developer · MERN · PERN · TALL · Python</span>
            <span className="w-1.5 h-1.5 rounded-full opacity-0 flex-shrink-0" aria-hidden="true" />
          </motion.div>
        </div>

        {/* Name Headline - Centered, Crisp, Modern */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-4"
        >
          Sandy Yoga Prakasa Holley
        </motion.h1>

        {/* Formal Role Title */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-sm sm:text-base text-nest-400 font-semibold tracking-wider uppercase mb-5"
        >
          Full-Stack Software Developer
        </motion.p>

        {/* Clear, Concise, Formal Summary (No walls of text, no corny phrasing) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mb-8"
        >
          Software engineer building resilient web systems, data architectures, and computer vision models. Graduated from Universitas Gunadarma with a B.S. in Informatics.
        </motion.p>

        {/* Action Buttons with Explicit High-Contrast Text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white !text-black font-bold text-sm hover:bg-slate-200 transition-colors shadow-lg shadow-white/10"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 !text-black" />
          </a>

          <a
            href="https://github.com/Sandy-YP-Holley"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-semibold text-sm border border-white/15 hover:bg-white/15 transition-colors backdrop-blur-sm"
          >
            <GithubIcon className="w-4 h-4 text-white" />
            <span>GitHub</span>
          </a>

          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-transparent border border-white/20 hover:border-white/40 text-slate-300 hover:text-white font-mono text-xs transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Clean, High-Contrast 3-Stat Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-xl pt-6 border-t border-white/10 font-mono text-center"
        >
          <div>
            <span className="text-xl sm:text-2xl font-bold text-white block">172 / 172</span>
            <span className="text-xs text-slate-400">Tests Passing (CI)</span>
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-bold text-white block">1 Year</span>
            <span className="text-xs text-slate-400">Hands-on Experience</span>
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-bold text-white block">4 Repos</span>
            <span className="text-xs text-slate-400">Full-Stack & Vision</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
