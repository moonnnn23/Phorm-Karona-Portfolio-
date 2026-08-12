import React from 'react';
import { Palette, ArrowRight, Video, Camera, Edit3, Film, CheckCircle2 } from 'lucide-react';

export const ContentCreativeSection: React.FC = () => {
  const workflowSteps = [
    { num: '01', title: 'STRATEGY', desc: 'Audience angle & objective' },
    { num: '02', title: 'CONCEPT', desc: 'Creative hook & storyboard' },
    { num: '03', title: 'SCRIPT', desc: 'Localized messaging' },
    { num: '04', title: 'PRODUCTION', desc: 'Photoshoot & video capture' },
    { num: '05', title: 'CONTENT', desc: 'Design & video editing' },
    { num: '06', title: 'DISTRIBUTION', desc: 'Multi-platform publishing' },
    { num: '07', title: 'PERFORMANCE', desc: 'Engagement & CTR tracking' },
    { num: '08', title: 'OPTIMIZATION', desc: 'Iterative ad refresh' }
  ];

  const creativeDeliverables = [
    'Creative Briefs & Storyboards',
    'Campaign Concepts & Visual Hooks',
    'Commercial Video Production',
    'Product Studio Photography',
    'TikTok & Short-Form Video Reels',
    'Social Media Storytelling',
    'Post-Production & Motion Graphics',
    'POSM & Retail Graphic Displays'
  ];

  return (
    <section id="content-creative" className="py-24 bg-[#04060A] text-white border-b border-cyan-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Palette className="w-3.5 h-3.5 text-cyan-400" />
            <span>11 — CONTENT & CREATIVE DIRECTION</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase font-sans">
            FROM STRATEGY <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">TO CONTENT EXECUTION</span>
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Managing end-to-end creative production, storyboards, commercial video shoots, graphic design, and short-form TikTok content.
          </p>
        </div>

        {/* Visual Workflow Row */}
        <div className="mb-16 space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold mb-4">
            End-to-End Content Production Workflow:
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {workflowSteps.map((w, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#090E1B] border border-cyan-500/20 text-center space-y-2 hover:border-cyan-400 transition-all shadow-md">
                <span className="text-xs font-mono font-black text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">
                  {w.num}
                </span>
                <h4 className="font-extrabold text-white text-xs font-sans tracking-wide">
                  {w.title}
                </h4>
                <p className="text-[10px] text-neutral-400 font-mono">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables 8 Grid */}
        <div className="p-8 rounded-3xl bg-[#090D18] border border-cyan-500/30 space-y-6 shadow-2xl">
          <h3 className="text-xl font-extrabold text-white font-sans uppercase">
            Creative Production Scope Handled by Team:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {creativeDeliverables.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0D1426] border border-white/5 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs font-mono text-neutral-200">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
