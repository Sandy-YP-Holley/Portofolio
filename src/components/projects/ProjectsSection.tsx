import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import { Layers } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/10"
      >
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-nest-400 bg-nest-500/10 border border-nest-500/20 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>PROJECT ARCHIVE</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Selected Works & Systems
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 font-mono max-w-md md:text-right">
          Click any project card to expand the case study, view actual screenshots, and inspect architectural details.
        </p>
      </motion.div>

      {/* Projects List */}
      <div className="space-y-4 sm:space-y-6">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            // Start collapsed so the user can click to expand as requested
            isInitiallyExpanded={index === 0}
          />
        ))}
      </div>
    </section>
  );
};
