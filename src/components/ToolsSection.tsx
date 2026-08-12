import React from 'react';
import { Cpu, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { TOOL_CATEGORIES } from '../data/phormData';

export const ToolsSection: React.FC = () => {
  return (
    <section id="tools" className="py-24 bg-[#06080F] text-white border-b border-cyan-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>14 — SOFTWARE & TECH STACK</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase font-sans">
            EXECUTIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">MARKETING TOOL WALL</span>
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Proficient across enterprise ad platforms, analytics suites, creative video editors, project management software, and cutting-edge AI tools.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-[#090D18] border border-cyan-500/20 hover:border-cyan-400 transition-all shadow-xl space-y-4"
            >
              <h3 className="text-lg font-black text-white font-sans uppercase tracking-wider border-b border-white/10 pb-3 text-cyan-300">
                {cat.category}
              </h3>

              <div className="space-y-3">
                {cat.tools.map((t, tIdx) => (
                  <div key={tIdx} className="p-3 rounded-xl bg-[#0D1426] border border-white/5 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-white">{t.name}</span>
                    <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
                      {t.badge || 'Proficient'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
