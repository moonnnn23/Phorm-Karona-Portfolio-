import React from 'react';
import { Briefcase, Target, ShieldCheck, CheckCircle2, TrendingUp, Users } from 'lucide-react';
import { VALUE_PROPOSITIONS } from '../data/phormData';

export const ValuePropsSection: React.FC = () => {
  return (
    <section id="value-props" className="py-24 bg-[#06080F] text-white border-b border-cyan-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>18 — COMMERCIAL VALUE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase font-sans">
            WHAT I BRING <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">TO A BUSINESS</span>
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Five core value pillars delivered to organizations seeking brand market share expansion and marketing operational excellence.
          </p>
        </div>

        {/* 5 Value Propositions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUE_PROPOSITIONS.map((v, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#090D18] border border-cyan-500/20 hover:border-cyan-400 transition-all shadow-xl space-y-4 group"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-black text-sm flex items-center justify-center font-mono">
                  0{idx + 1}
                </span>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                  VALUE PILLAR
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white font-sans uppercase group-hover:text-cyan-300 transition-colors">
                  {v.title}
                </h3>
                <p className="text-xs font-medium text-cyan-300 mt-2 font-sans">
                  {v.summary}
                </p>
                <p className="text-xs text-neutral-300 mt-2 font-sans leading-relaxed">
                  {v.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
