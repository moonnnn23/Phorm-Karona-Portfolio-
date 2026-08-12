import React from 'react';
import { Compass, Lightbulb, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { PHILOSOPHY_PRINCIPLES } from '../data/phormData';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 bg-[#04060A] text-white border-b border-cyan-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>17 — MARKETING PHILOSOPHY</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase font-sans">
            MY CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">MARKETING BELIEFS</span>
          </h2>
        </div>

        {/* Master Statement Box */}
        <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0C152B] via-[#090E1E] to-[#080D1A] border border-cyan-400/40 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto">
            <Lightbulb className="w-6 h-6" />
          </div>

          <blockquote className="text-2xl sm:text-4xl font-black text-white font-sans uppercase leading-tight max-w-4xl mx-auto">
            “Marketing is not only about creating attention. It is about creating <span className="text-cyan-300">position</span>, <span className="text-cyan-300">market demand</span>, <span className="text-cyan-300">customer experience</span>, <span className="text-cyan-300">commercial growth</span>, and <span className="text-cyan-300">long-term brand equity</span>.”
          </blockquote>

          <div className="text-xs font-mono text-cyan-400 font-bold tracking-widest uppercase">
            — PHORM KARONA | DIGITAL MARKETING MANAGER
          </div>
        </div>

        {/* 5 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {PHILOSOPHY_PRINCIPLES.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#090D18] border border-cyan-500/20 hover:border-cyan-400 transition-all shadow-xl space-y-3"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-300 font-bold text-xs flex items-center justify-center font-mono">
                0{idx + 1}
              </div>
              <h3 className="text-base font-extrabold text-white font-sans uppercase">
                {p.principle}
              </h3>
              <p className="text-xs font-semibold text-cyan-300 font-sans">
                {p.desc}
              </p>
              <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                {p.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
