import React from 'react';
import { Award, Target, Globe, ShoppingBag, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import { CAPABILITIES } from '../data/phormData';

export const CapabilitiesSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'STRATEGY': return Target;
      case 'DIGITAL': return Globe;
      case 'BRAND': return Award;
      case 'OFFLINE': return ShoppingBag;
      case 'GROWTH': return TrendingUp;
      case 'LEADERSHIP': return Users;
      default: return Target;
    }
  };

  return (
    <section id="capabilities" className="py-24 bg-[#06080F] text-white border-b border-cyan-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>12 — CAPABILITY MATRIX</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase font-sans">
            EXECUTIVE MARKETING <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">CAPABILITIES</span>
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Comprehensive skill matrix spanning strategic planning, digital performance, brand management, offline retail, growth, and team leadership.
          </p>
        </div>

        {/* 6 Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, idx) => {
            const IconComp = getCategoryIcon(cap.category);

            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#090D18] border border-cyan-500/20 hover:border-cyan-400 transition-all shadow-xl space-y-6 group"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-black text-white font-sans uppercase tracking-wider">
                      {cap.category}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950 px-2 py-1 rounded border border-cyan-500/30">
                    EXPERT
                  </span>
                </div>

                <div className="space-y-3">
                  {cap.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2.5 text-xs font-mono text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
