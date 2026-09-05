import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skills';
import { Code2, Server, Database, CheckSquare, Wrench } from 'lucide-react';

export const TechnicalToolbox: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Frontend Engineering':
        return <Code2 className="w-4 h-4 text-nest-400" />;
      case 'Backend & Server Systems':
        return <Server className="w-4 h-4 text-nest-400" />;
      case 'Databases & Storage':
        return <Database className="w-4 h-4 text-nest-400" />;
      case 'Testing & Quality Assurance':
        return <CheckSquare className="w-4 h-4 text-emerald-400" />;
      default:
        return <Wrench className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium text-nest-400 bg-nest-500/10 border border-nest-500/20 mb-3">
          TECHNICAL STACK
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Tools & Capabilities
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto mt-2">
          Organized by architectural tier with application context across production systems.
        </p>
      </motion.div>

      {/* Grid of Categories with Staggered Scroll Motion */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="p-5 sm:p-6 rounded-2xl bg-dark-900 border border-white/10 hover:border-nest-500/30 transition-colors shadow-lg flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                    {getCategoryIcon(cat.title)}
                  </div>
                  <span className="font-bold text-white text-sm">
                    {cat.title}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  {cat.badge}
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-2 font-mono text-xs">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-2 rounded-lg bg-dark-950 border border-white/5 hover:border-white/15 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-semibold ${item.highlight ? 'text-white' : 'text-slate-300'}`}>
                        {item.name}
                      </span>
                      {item.highlight && (
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-nest-500/20 text-nest-300 font-semibold uppercase">
                          Core
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      {item.context}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-slate-500">
              <span>PROD VERIFIED</span>
              <span>TYPE-SAFE</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
