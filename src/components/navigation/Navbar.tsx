import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'projects', label: 'Projects' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Toolbox' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sectionElements = ['hero', ...navItems.map((n) => n.id)]
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)
        .sort((a, b) => a.offsetTop - b.offsetTop);

      const scrollPosition = window.scrollY + 220;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el.offsetTop <= scrollPosition) {
          setActiveSection(el.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div
        className={`w-full max-w-5xl rounded-full transition-all duration-300 pointer-events-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 border ${
          isScrolled
            ? 'bg-dark-900/80 backdrop-blur-xl border-white/15 shadow-2xl shadow-black/60'
            : 'bg-dark-950/60 backdrop-blur-lg border-white/10 shadow-lg'
        }`}
      >
        {/* Brand / Monogram */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-nest-500 to-nest-700 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-nest-500/30 group-hover:scale-105 transition-transform">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-xs sm:text-sm text-white tracking-tight group-hover:text-nest-400 transition-colors">
              Sandy Holley
            </span>
            <span className="text-[10px] text-slate-400 font-mono hidden sm:inline leading-none">
              Full-Stack Dev
            </span>
          </div>
        </a>

        {/* Center Nav Links (NestJS Style) */}
        <nav className="hidden md:flex items-center gap-1 font-medium text-xs text-slate-300" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 relative ${
                  isActive
                    ? 'text-white bg-white/10 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Buttons */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Sandy-YP-Holley"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-nest-500 to-nest-600 hover:from-nest-400 hover:to-nest-500 shadow-md shadow-nest-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-3 h-3" />
            <span>Contact</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white rounded-full bg-white/5 border border-white/10 ml-1"
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-50 md:hidden bg-dark-900/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl pointer-events-auto animate-in fade-in duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left py-2.5 px-4 rounded-xl text-slate-200 hover:bg-white/10 hover:text-nest-400 transition-colors font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">Kota Bekasi, ID (UTC+7)</span>
              <a
                href="https://github.com/Sandy-YP-Holley"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-nest-400 font-mono flex items-center gap-1"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
