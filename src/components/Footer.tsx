import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { PHORM_INFO } from '../data/phormData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030509] text-white border-t border-cyan-500/20 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-white/10 pb-12">
          <div className="space-y-2">
            <a href="#cover" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-black font-black flex items-center justify-center text-sm shadow-lg shadow-cyan-500/20">
                PK
              </div>
              <span className="font-black text-xl tracking-wider text-white uppercase">
                PHORM KARONA
              </span>
            </a>
            <p className="text-xs font-mono text-cyan-400">
              Digital Marketing Manager • Brand Strategist • Marketing Leader
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-neutral-400">
            <a href={`mailto:${PHORM_INFO.email}`} className="hover:text-cyan-400 transition-colors">
              {PHORM_INFO.email}
            </a>
            <span>•</span>
            <a href={`tel:${PHORM_INFO.phone}`} className="hover:text-cyan-400 transition-colors">
              {PHORM_INFO.phone}
            </a>
            <span>•</span>
            <span>{PHORM_INFO.location}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-[#090E1A] border border-cyan-500/30 text-cyan-400 hover:text-white hover:border-cyan-400 transition-all flex items-center gap-2 text-xs font-mono"
            aria-label="Back to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
          <div>
            © {new Date().getFullYear()} Phorm Karona. All rights reserved.
          </div>
          <div className="text-neutral-500">
            Executive Portfolio | Tech Zone Group Cambodia
          </div>
        </div>

      </div>
    </footer>
  );
};
