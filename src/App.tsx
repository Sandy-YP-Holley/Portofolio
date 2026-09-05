import React from 'react';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/hero/Hero';
import { ArchitectureTerminal } from './components/showcase/ArchitectureTerminal';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { AboutSection } from './components/about/AboutSection';
import { TechnicalToolbox } from './components/skills/TechnicalToolbox';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/common/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-nest-500/30 selection:text-white overflow-x-hidden">
      {/* Floating Pill Navbar (NestJS Style) */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content" className="flex-grow">
        {/* Hero Section with 3D Background Element Following Cursor Behind Name */}
        <Hero />

        {/* Projects Section (Centerpiece of Portfolio) */}
        <ProjectsSection />

        {/* Interactive Architecture & Code Terminal Showcase */}
        <ArchitectureTerminal />

        {/* Professional Experience (Modular Cards) */}
        <ExperienceSection />

        {/* About & Academic Stance (Modular Feature Grid) */}
        <AboutSection />

        {/* Technical Capabilities & Toolbox */}
        <TechnicalToolbox />

        {/* Call to Action Contact Banner */}
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
};

export default App;
