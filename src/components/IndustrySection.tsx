import React from 'react';
import { Cpu, Car, Compass, Layers, Coffee, CheckCircle2 } from 'lucide-react';
import { INDUSTRIES } from '../data/phormData';

export const IndustrySection: React.FC = () => {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return Cpu;
      case 'Car': return Car;
      case 'Compass': return Compass;
      case 'Layers': return Layers;
      case 'Coffee': return Coffee;
      default: return Cpu;
    }
  };

  return (
    <section id="industry" className="py-24 bg-[#04060A] text-white border-b border-cyan-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>13 — INDUSTRY EXPERIENCE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase font-sans">
            MULTI-INDUSTRY <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">EXPERT KNOWLEDGE</span>
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Proven track record driving marketing results across consumer tech, luxury automotive, destination entertainment, agency services, and food & beverage.
          </p>
        </div>

        {/* 5 Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, idx) => {
            const IconComp = getIndustryIcon(ind.icon);

            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#090D18] border border-cyan-500/20 hover:border-cyan-400 transition-all shadow-xl space-y-6 group"
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 block">
                      SECTOR 0{idx + 1}
                    </span>
                    <h3 className="text-xl font-black text-white font-sans uppercase">
                      {ind.industry}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                    Focus Niches:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.subCategories.map((sub, sIdx) => (
                      <span key={sIdx} className="px-2.5 py-1 rounded-lg bg-[#0E1528] border border-white/5 text-xs font-mono text-neutral-200">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider block mb-1 font-bold">
                    Brands Handled:
                  </span>
                  <p className="text-xs font-mono text-neutral-300">
                    {ind.brands.join(', ')}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
