import React from 'react';
import { Sparkles, Trophy, CheckCircle2 } from 'lucide-react';

export const HighlightsSection: React.FC = () => {
  const highlights = [
    { metric: '7+', label: 'Years Marketing Experience', desc: 'Integrated marketing, brand development, and digital leadership across Cambodia.' },
    { metric: '9', label: 'Tech Brands Managed', desc: 'Directing marketing for Amazfit, Dreame, Imilab, Deerma, Noise, Cossy, Navee, Kospet, Tech Zone.' },
    { metric: '14', label: 'Team Members Led', desc: 'Directing a multidisciplinary marketing unit of supervisors, creators, designers & videographers.' },
    { metric: '5', label: 'Brands Launched in KH', desc: 'Successfully executed Go-To-Market launches for IMILAB, Cossy, Deerma, Dreame, and Navee.' },
    { metric: '5', label: 'Key Market Sectors', desc: 'Consumer Tech, Automotive (BMW/Mazda/Kia/Volvo), Entertainment, Agency, Food & Beverage.' }
  ];

  return (
    <section id="highlights" className="py-24 bg-[#06080F] text-white border-b border-cyan-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Trophy className="w-3.5 h-3.5 text-cyan-400" />
            <span>16 — CAREER HIGHLIGHTS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase font-sans">
            KEY CAREER <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">MILESTONES & NUMBERS</span>
          </h2>
        </div>

        {/* Big Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {highlights.map((h, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#090D18] border border-cyan-500/30 text-center space-y-3 hover:border-cyan-400 transition-all shadow-xl group"
            >
              <div className="text-5xl sm:text-6xl font-black text-cyan-300 font-mono tracking-tight group-hover:scale-105 transition-transform">
                {h.metric}
              </div>
              <h3 className="text-sm font-extrabold text-white font-sans uppercase tracking-wider">
                {h.label}
              </h3>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                {h.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
