import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Globe2, Compass, Award } from 'lucide-react';
import { educationData } from '../../data/experience';

export const AboutSection: React.FC = () => {
  const cards = [
    {
      icon: <GraduationCap className="w-5 h-5" />,
      tag: 'Education',
      title: 'B.S. in Computer Science',
      desc: 'Major in Informatics at Universitas Gunadarma (Graduated August 2026).',
      footerLabel: 'Cumulative GPA:',
      footerVal: educationData.gpa,
      accent: 'nest',
    },
    {
      icon: <Compass className="w-5 h-5" />,
      tag: 'Engineering Practice',
      title: 'Architectural Discipline',
      desc: 'Focus on schema integrity, token lifecycles, and automated test coverage across full-stack applications.',
      footerLabel: 'Flagship Verification:',
      footerVal: '172 Automated Tests',
      accent: 'emerald',
    },
    {
      icon: <Globe2 className="w-5 h-5" />,
      tag: 'Location & Languages',
      title: 'Kota Bekasi, Indonesia',
      desc: 'Native Indonesian, fluent professional English. Located in the UTC+7 (WIB) timezone.',
      footerLabel: 'Status:',
      footerVal: 'Indonesian (Native) · English (Fluent)',
      accent: 'nest',
    },
    {
      icon: <Award className="w-5 h-5" />,
      tag: 'Core Technologies',
      title: 'Full-Stack & Vision',
      desc: 'Production application experience across MERN, PERN, TALL stacks, and Python PyTorch/YOLO pipelines.',
      footerLabel: 'Primary:',
      footerVal: 'React · Next.js · Node · Python',
      accent: 'purple',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium text-nest-400 bg-nest-500/10 border border-nest-500/20 mb-3">
          BACKGROUND
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          About Sandy Holley
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto mt-2">
          Academic foundation, engineering discipline, and technological focus.
        </p>
      </motion.div>

      {/* 4-Card Staggered Scroll Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {cards.map((c, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            className="p-5 sm:p-6 rounded-2xl bg-dark-900 border border-white/10 hover:border-nest-500/30 transition-colors shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-nest-400 mb-3">
                {c.icon}
              </div>
              <span className="font-mono text-[10px] text-nest-400 font-bold uppercase tracking-wider block mb-1">
                {c.tag}
              </span>
              <h3 className="text-base font-bold text-white mb-1.5">
                {c.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {c.desc}
              </p>
            </div>

            <div className="pt-3 mt-4 border-t border-white/10 font-mono text-[11px] flex items-center justify-between">
              <span className="text-slate-400">{c.footerLabel}</span>
              <span className="text-white font-semibold">{c.footerVal}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
