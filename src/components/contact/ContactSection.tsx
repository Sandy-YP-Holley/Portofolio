import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, MapPin, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const ContactSection: React.FC = () => {
  const email = 'holleysandyyogaprakasa@gmail.com';
  const [copied, setCopied] = useState(false);

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Engineering%20Inquiry%20-%20Sandy%20Holley`;

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Call to Action Container with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-3xl p-6 sm:p-12 md:p-14 bg-gradient-to-br from-dark-900 via-nest-950/60 to-dark-950 border border-nest-500/30 shadow-2xl overflow-hidden text-center flex flex-col items-center"
      >
        {/* Ambient Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-nest-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-xl">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-bold text-nest-400 bg-nest-500/15 border border-nest-500/30 mb-3">
            GET IN TOUCH
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
            Let's discuss full-stack engineering.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            Open to software engineering roles, distributed architecture design, and technical collaboration.
          </p>

          {/* Email Box & Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            {/* Clickable email pill to copy */}
            <button
              type="button"
              onClick={copyEmail}
              title="Click to copy email"
              className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 rounded-full bg-dark-950 border border-white/15 font-mono text-[11px] sm:text-sm text-white hover:border-nest-500/50 transition-colors group cursor-pointer max-w-full"
            >
              <Mail className="w-4 h-4 text-nest-400 flex-shrink-0" />
              <span className="truncate">{email}</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300 transition-colors flex-shrink-0" />
              )}
            </button>

            <div className="flex items-center gap-2">
              {/* Copy Button */}
              <button
                type="button"
                onClick={copyEmail}
                className="px-4 py-2.5 rounded-full bg-white !text-black text-xs font-bold hover:bg-slate-200 transition-all flex items-center gap-1.5 shadow-md"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              {/* Direct Gmail Web Client Link */}
              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-nest-500 hover:bg-nest-400 text-white text-xs font-bold transition-all shadow-md shadow-nest-500/30 flex items-center gap-1.5"
                title="Open compose draft in Gmail web client"
              >
                <span>Gmail</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 border-t border-white/10 text-xs font-mono text-slate-300">
            <a
              href="https://github.com/Sandy-YP-Holley"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>github.com/Sandy-YP-Holley</span>
            </a>

            <span className="hidden sm:inline">•</span>

            <a
              href="https://linkedin.com/in/sandyypholley"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>linkedin.com/in/sandyypholley</span>
            </a>

            <span className="hidden sm:inline">•</span>

            <span className="flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-nest-400" />
              <span>Kota Bekasi, ID</span>
            </span>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
