import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  ChevronDown,
  CheckCircle2,
  AlertTriangle,
  Layers,
  ShieldCheck,
  TestTube
} from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { Project } from '../../types';
import { ScreenshotCarousel } from './ScreenshotCarousel';
import { ResearchBenchmark } from './ResearchBenchmark';

interface ProjectCardProps {
  project: Project;
  isInitiallyExpanded?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isInitiallyExpanded = false,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(isInitiallyExpanded);
  const [activeRoleIndex, setActiveRoleIndex] = useState<number>(0);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleExpand();
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`rounded-2xl transition-all duration-200 border overflow-hidden ${
        project.isFlagship
          ? 'bg-dark-900 border-nest-500/40 shadow-xl'
          : 'bg-dark-900/70 border-white/10 hover:border-white/20'
      }`}
    >
      {/* ============================================================ */}
      {/* COMPACT CLICKABLE CARD TRIGGER                               */}
      {/* ============================================================ */}
      <div
        role="button"
        tabIndex={0}
        onClick={toggleExpand}
        onKeyDown={handleKeyDown}
        aria-expanded={isExpanded}
        className="p-5 sm:p-7 cursor-pointer select-none group flex flex-col md:flex-row md:items-center justify-between gap-4 focus:outline-none focus:bg-white/5"
      >
        {/* Left: Project Number & Identity */}
        <div className="flex items-start gap-4 sm:gap-5">
          <span className="font-mono text-2xl sm:text-3xl font-bold text-nest-400">
            {project.number}
          </span>

          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-nest-400 transition-colors">
                {project.title}
              </h3>

              {project.isFlagship && (
                <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-nest-500/20 text-nest-300 border border-nest-500/30">
                  Flagship Project
                </span>
              )}

              {project.deploymentStatus.type === 'live' ? (
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Live Production
                </span>
              ) : project.deploymentStatus.type === 'frontend_only' ? (
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                  Frontend Demo (Backend Offline)
                </span>
              ) : (
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10">
                  Research Model
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-normal max-w-2xl leading-relaxed">
              {project.subtitle}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-2.5">
              {project.keyTech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Expand Toggle Button */}
        <div className="flex items-center gap-2 font-mono text-xs text-slate-400 group-hover:text-white pt-2 md:pt-0 border-t border-white/5 md:border-t-0">
          <span>{isExpanded ? 'Close' : 'View Case Study'}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4 h-4 text-nest-400" />
          </motion.div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* EXPANDED DETAILED CASE STUDY VIEW                            */}
      {/* ============================================================ */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="border-t border-white/10 bg-dark-950/90 p-5 sm:p-8 space-y-6"
          >
            {/* Action Buttons & Honest Status Note */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10">
              <div className="flex flex-wrap items-center gap-2.5">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white !text-black text-xs font-bold hover:bg-slate-200 transition-colors"
                  >
                    <span>Open Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5 !text-black" />
                  </a>
                )}

                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/10 text-white text-xs font-semibold hover:bg-white/15 border border-white/15 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </div>

              {project.deploymentStatus.note && (
                <div className="flex items-center gap-1.5 text-xs text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-lg font-mono">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  <span>{project.deploymentStatus.note}</span>
                </div>
              )}
            </div>

            {/* Metric Strip (Concise, High Contrast) */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-dark-900 border border-white/10">
                    <span className="text-[10px] text-slate-400 uppercase block">{m.label}</span>
                    <span className="text-base font-bold text-white block mt-0.5">{m.value}</span>
                    {m.detail && <span className="text-[10px] text-slate-400 block mt-0.5">{m.detail}</span>}
                  </div>
                ))}
              </div>
            )}

            {/* Screenshot Carousel */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div>
                <ScreenshotCarousel
                  screenshots={project.screenshots}
                  projectName={project.title}
                />
              </div>
            )}

            {/* Research Benchmark (For CV Project) */}
            {project.researchData && (
              <div>
                <ResearchBenchmark
                  metrics={project.researchData.metrics}
                  findings={project.researchData.keyFindings}
                />
              </div>
            )}

            {/* RBAC Tabs (Chronicle & Quill Flagship) */}
            {project.roles && project.roles.length > 0 && (
              <div className="p-4 sm:p-5 rounded-xl bg-dark-900 border border-white/10">
                <span className="text-xs font-mono text-nest-400 font-bold uppercase block mb-3">
                  Role-Based Access Control Architecture
                </span>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.roles.map((r, idx) => (
                    <button
                      key={r.role}
                      type="button"
                      onClick={() => setActiveRoleIndex(idx)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                        activeRoleIndex === idx
                          ? 'bg-nest-500 text-white font-bold'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {r.role}
                    </button>
                  ))}
                </div>

                {project.roles[activeRoleIndex] && (
                  <div className="space-y-2">
                    <p className="text-xs text-slate-300">
                      {project.roles[activeRoleIndex].description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-xs">
                      {project.roles[activeRoleIndex].capabilities.map((cap, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Features & Engineering Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-dark-900 border border-white/10">
                <div className="flex items-center gap-1.5 text-xs font-mono text-nest-400 font-bold uppercase mb-3">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Key Features</span>
                </div>
                <div className="space-y-2.5 text-xs">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="border-l-2 border-nest-500/40 pl-2.5">
                      <span className="font-semibold text-white block">{feat.title}</span>
                      <p className="text-slate-400 mt-0.5 leading-relaxed">{feat.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-dark-900 border border-white/10">
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-bold uppercase mb-3">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Engineering Decisions</span>
                </div>
                <div className="space-y-2.5 text-xs">
                  {project.engineeringHighlights.map((eng, idx) => (
                    <div key={idx} className="border-l-2 border-emerald-500/40 pl-2.5">
                      <span className="font-semibold text-white block">{eng.title}</span>
                      <p className="text-slate-400 mt-0.5 leading-relaxed">{eng.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* QA Test Suite (Chronicle & Quill) */}
            {project.qaArtifacts && project.qaArtifacts.length > 0 && (
              <div className="p-4 rounded-xl bg-dark-900 border border-white/10 font-mono text-xs">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold uppercase mb-3">
                  <TestTube className="w-3.5 h-3.5" />
                  <span>Automated QA Suite Artifacts</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.qaArtifacts.slice(0, 4).map((qa, idx) => (
                    <div key={idx} className="p-2 rounded bg-dark-950 border border-white/5">
                      <span className="text-white font-semibold block">{qa.name}</span>
                      <span className="text-slate-400 text-[10px] block mt-0.5">{qa.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack List */}
            <div className="pt-3 border-t border-white/10 flex flex-wrap gap-2 items-center text-xs font-mono">
              <span className="text-slate-400 font-semibold">Technologies:</span>
              {project.allTech.flatMap((t) => t.items).map((item, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">
                  {item}
                </span>
              ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
