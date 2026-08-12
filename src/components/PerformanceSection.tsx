import React from 'react';
import { TrendingUp, Target, BarChart2, CheckCircle2, Car, ShieldCheck } from 'lucide-react';

export const PerformanceSection: React.FC = () => {
  const performancePillars = [
    'Campaign Planning & Strategy',
    'Precision Audience Targeting',
    'Paid Social & Search Advertising',
    'High-Intent Lead Generation',
    'Conversion Funnel Optimization',
    'ROI & CPA Analytics Tracking',
    'Comprehensive Performance Analysis',
    'Executive Monthly Reporting',
    'Budget Management & Allocation'
  ];

  const autoBrands = [
    { name: 'BMW Cambodia', category: 'Luxury Automotive Lead Generation' },
    { name: 'Mazda Cambodia', category: 'Consumer Passenger Automotive' },
    { name: 'Kia Cambodia', category: 'Urban SUV & Passenger Vehicles' },
    { name: 'Volvo Cars Cambodia', category: 'Premium Sustainable Luxury' }
  ];

  return (
    <section id="performance" className="py-24 bg-[#06080F] text-white border-b border-cyan-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>10 — PERFORMANCE MARKETING</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase font-sans">
            DATA → INSIGHT → <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ACTION → GROWTH</span>
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Data-driven campaign management focused on lead generation, conversion optimization, customer acquisition, and budget efficiency.
          </p>
        </div>

        {/* Automotive Case Box */}
        <div className="mb-16 p-8 rounded-3xl bg-[#090E1B] border border-cyan-500/30 space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Car className="w-5 h-5 text-cyan-400" />
              <span>AUTOMOTIVE LEAD GENERATION EXPERIENCE (HGB GROUP)</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              Luxury & Consumer Automotive
            </span>
          </div>

          <p className="text-neutral-300 text-sm leading-relaxed font-sans">
            During tenure at HGB Group as Digital Marketing Supervisor, directed paid search, video, and social lead generation funnels across 4 premier automotive marques in Cambodia:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {autoBrands.map((b, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#0C1224] border border-white/10 space-y-1">
                <div className="text-base font-extrabold text-white font-sans uppercase">
                  {b.name}
                </div>
                <p className="text-[11px] text-cyan-300 font-mono">
                  {b.category}
                </p>
              </div>
            ))}
          </div>

          {/* Automotive tactics */}
          <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-neutral-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Facebook Lead Ads</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Google Search (SEM)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>YouTube Video Marketing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Showroom Conversion</span>
            </div>
          </div>
        </div>

        {/* 9 Pillars Grid */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold">
            Performance Core Capabilities:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {performancePillars.map((pillar, pIdx) => (
              <div key={pIdx} className="p-4 rounded-2xl bg-[#080C16] border border-white/10 flex items-center gap-3">
                <BarChart2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs font-mono text-neutral-200 font-medium">{pillar}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
