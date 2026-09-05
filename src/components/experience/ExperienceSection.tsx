import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header with Scroll Motion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium text-nest-400 bg-nest-500/10 border border-nest-500/20 mb-3">
          CHRONOLOGY & RESPONSIBILITIES
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Professional Experience
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto mt-2">
          Documented leadership in cross-functional software project delivery and academic technical instruction.
        </p>
      </motion.div>

      {/* 2-Column Experience Cards with Staggered Scroll Slide-In */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experienceData.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="p-6 sm:p-8 rounded-2xl bg-dark-900 border border-white/10 hover:border-nest-500/30 transition-colors shadow-lg flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between font-mono text-xs mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-nest-500/10 text-nest-400 font-semibold border border-nest-500/20">
                  {exp.type}
                </span>
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-nest-400" />
                  <span>{exp.period}</span>
                </span>
              </div>

              {/* Role & Org */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {exp.role}
              </h3>
              <div className="flex items-center gap-2 font-mono text-xs text-slate-300 mb-4">
                <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-semibold text-white">{exp.organization}</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-nest-400" />
                  {exp.location}
                </span>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                {exp.summary}
              </p>

              {/* Responsibilities */}
              <div className="space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Pills */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-1.5 font-mono text-[10px]">
              {exp.impactKeywords.map((kw) => (
                <span
                  key={kw}
                  className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                >
                  {kw}
                </span>
              ))}
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};
