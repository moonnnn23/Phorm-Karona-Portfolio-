import React from 'react';
import { User, ShieldCheck, Cpu, ArrowUpRight, Award } from 'lucide-react';

interface PersonalBrandSectionProps {
  onOpenContact: (prefill?: string) => void;
}

export const PersonalBrandSection: React.FC<PersonalBrandSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="personal-brand" className="py-24 bg-[#04060A] text-white border-b border-cyan-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Frame */}
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#0C152B] via-[#080E1C] to-[#080D1A] border border-cyan-400/40 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
                <User className="w-3.5 h-3.5 text-cyan-400" />
                <span>19 — EXECUTIVE BRANDING</span>
              </div>

              <h2 className="text-4xl sm:text-6xl font-black uppercase font-sans tracking-tight text-white leading-none">
                PHORM <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">KARONA</span>
              </h2>

              <div className="text-lg sm:text-2xl font-bold font-mono text-cyan-300 uppercase tracking-wider">
                Digital Marketing Manager • Brand Strategist • Growth Leader
              </div>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
                Positioned at the intersection of consumer technology, retail activation, performance marketing, and multi-disciplinary team management across Cambodia and Southeast Asia.
              </p>

              <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-300">
                <span className="px-3 py-1 rounded-lg bg-[#0E162B] border border-cyan-500/30 text-cyan-300">
                  Tech Brands Leader
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#0E162B] border border-cyan-500/30 text-cyan-300">
                  GTM Launch Specialist
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#0E162B] border border-cyan-500/30 text-cyan-300">
                  14-Head Marketing Team
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#0E162B] border border-cyan-500/30 text-cyan-300">
                  Omnichannel Retail
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 text-left lg:text-right">
              <button
                onClick={() => onOpenContact('Requesting an executive leadership consultation.')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-black font-black text-xs uppercase tracking-widest hover:opacity-95 shadow-xl shadow-cyan-500/20 transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Connect With Phorm</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
