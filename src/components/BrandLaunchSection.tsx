import React from 'react';
import { Rocket, CheckCircle2, TrendingUp, Sparkles, ArrowRight, Layers } from 'lucide-react';
import { BRAND_LAUNCH_STEPS } from '../data/phormData';

export const BrandLaunchSection: React.FC = () => {
  const launchedBrands = [
    { name: 'IMILAB KH', category: 'Smart Home Security', metric: 'Full Cambodia Entry' },
    { name: 'COSSY CAMBODIA', category: 'Smart Accessories', metric: 'Market Positioning' },
    { name: 'DEERMA KH', category: 'Smart Appliances', metric: 'AEON Mall Roadshows' },
    { name: 'DREAME CAMBODIA', category: 'Robotic Cleaning', metric: 'Premium Retail Launch' },
    { name: 'NAVEE CAMBODIA', category: 'Electric E-Scooters', metric: 'Pop-Up Test Rides' }
  ];

  return (
    <section id="brand-launches" className="py-24 bg-[#06080F] text-white border-b border-cyan-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Rocket className="w-3.5 h-3.5 text-cyan-400" />
            <span>06 — BRAND LAUNCH & EXPANSION</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase font-sans">
            FROM MARKET ENTRY <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">TO BRAND GROWTH</span>
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Taking global consumer technology brands from zero local presence to market leadership across Cambodia using a structured 10-step Go-To-Market framework.
          </p>
        </div>

        {/* 5 Launched Brands Row */}
        <div className="mb-16">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold mb-4 flex items-center gap-2">
            <span>5 International Tech Brands Launched in Cambodia by Phorm Karona:</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {launchedBrands.map((b, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0A0F1E] border border-cyan-500/30 hover:border-cyan-400 transition-all text-center space-y-2 shadow-lg"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/40 text-emerald-400 font-bold text-xs flex items-center justify-center mx-auto font-mono">
                  0{idx + 1}
                </div>
                <h4 className="font-extrabold text-white text-base font-sans tracking-wide">
                  {b.name}
                </h4>
                <p className="text-[11px] text-cyan-300 font-mono">
                  {b.category}
                </p>
                <span className="inline-block px-2 py-0.5 rounded bg-black/60 text-[10px] text-neutral-400 font-mono">
                  {b.metric}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Brand Launch Framework */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="text-2xl font-black uppercase text-white font-sans flex items-center gap-2">
              <Layers className="w-6 h-6 text-cyan-400" />
              <span>THE 10-STEP BRAND LAUNCH FRAMEWORK</span>
            </h3>
            <span className="text-xs font-mono text-cyan-300">End-to-End Market Execution</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {BRAND_LAUNCH_STEPS.map((item) => (
              <div
                key={item.step}
                className="p-5 rounded-2xl bg-[#090D18] border border-cyan-500/20 space-y-3 hover:border-cyan-400/50 transition-all shadow-md group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-black text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-500/30">
                      STEP {item.step}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-white uppercase tracking-wider group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                </div>

                <p className="text-[11px] text-neutral-400 leading-normal font-sans pt-2 border-t border-white/5">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
