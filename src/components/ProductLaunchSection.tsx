import React from 'react';
import { Sparkles, Calendar, Users, Camera, Video, TrendingUp, CheckCircle2 } from 'lucide-react';

export const ProductLaunchSection: React.FC = () => {
  const launchPillars = [
    { title: 'Launch Strategy', desc: 'Crafting keynote messaging and launch timelines for maximum market impact.' },
    { title: 'Event Planning', desc: 'Executing physical keynotes, pop-ups, and press release venues in Phnom Penh.' },
    { title: 'Media Relations', desc: 'Securing top tech media coverage, press releases, and live broadcast streams.' },
    { title: 'Influencer Engagement', desc: 'Partnering with top Cambodian tech KOLs for unboxings and live demos.' },
    { title: 'Customer Experience', desc: 'Designing interactive touchpoints and hands-on product trial zones.' },
    { title: 'Sales Activation', desc: 'Creating launch bundle discounts, pre-order incentives, and retail offers.' },
    { title: 'Content Production', desc: 'Producing high-definition keynote videos, launch reels, and social carousels.' },
    { title: 'Retail Activation', desc: 'Deploying POSM, window displays, and dedicated brand bays in stores.' }
  ];

  return (
    <section id="product-launch" className="py-24 bg-[#04060A] text-white border-b border-cyan-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>07 — PRODUCT LAUNCH EVENTS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase font-sans">
            TURNING PRODUCT LAUNCHES <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">INTO MARKET MOMENTS</span>
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Leading high-stakes product launch keynotes, press events, and experiential reveals for smartwatch leaders in Cambodia.
          </p>
        </div>

        {/* Featured Keynote Focus: Amazfit & Kospet */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Amazfit Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0C1428] via-[#090E1D] to-[#080C19] border border-cyan-500/40 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-cyan-400 text-black font-extrabold text-xs font-mono uppercase tracking-widest">
                FLAGSHIP LAUNCH MOMENT
              </span>
              <span className="text-xs font-mono text-cyan-300">Cambodia Keynotes</span>
            </div>

            <div>
              <h3 className="text-3xl font-black text-white uppercase font-sans tracking-wide">
                AMAZFIT CAMBODIA LAUNCHES
              </h3>
              <p className="text-xs text-neutral-300 mt-2 font-sans leading-relaxed">
                Spearheading major product reveals for Amazfit smartwatches in Cambodia, integrating press conferences, KOL fitness ambassadors, live product trials, and mall activations.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B16] border border-white/10 space-y-2 text-xs font-mono text-neutral-300">
              <div className="text-cyan-400 font-bold uppercase tracking-wider">Key Impact Outcomes:</div>
              <p>• High-volume pre-orders across Tech Zone retail stores</p>
              <p>• Multi-channel press & social video reach across TikTok & Facebook</p>
              <p>• High-converting in-store displays at AEON Mall</p>
            </div>
          </div>

          {/* Kospet Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0C1428] via-[#090E1D] to-[#080C19] border border-cyan-500/40 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-cyan-400 text-black font-extrabold text-xs font-mono uppercase tracking-widest">
                RUGGED TECH MOMENT
              </span>
              <span className="text-xs font-mono text-cyan-300">Outdoor Experiential</span>
            </div>

            <div>
              <h3 className="text-3xl font-black text-white uppercase font-sans tracking-wide">
                KOSPET CAMBODIA LAUNCHES
              </h3>
              <p className="text-xs text-neutral-300 mt-2 font-sans leading-relaxed">
                Orchestrating rugged smartwatch launch campaigns featuring extreme outdoor testing, influencer stress tests, and live durability demonstrations.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B16] border border-white/10 space-y-2 text-xs font-mono text-neutral-300">
              <div className="text-cyan-400 font-bold uppercase tracking-wider">Key Impact Outcomes:</div>
              <p>• Rapid category leadership in rugged outdoor wearability</p>
              <p>• Authentic KOL video unboxings with viral engagement</p>
              <p>• Retail consignment expansion into specialty partners</p>
            </div>
          </div>

        </div>

        {/* Launch Pillars 8 Grid */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold">
            Key Execution Capabilities for Product Launches:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {launchPillars.map((p, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#080D1A] border border-cyan-500/20 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase font-sans">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{p.title}</span>
                </div>
                <p className="text-xs text-neutral-400 leading-normal font-sans">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
