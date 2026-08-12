import React from 'react';
import { Globe, BarChart2, ArrowDown, CheckCircle2, Target, Share2, Search, ShoppingCart, TrendingUp } from 'lucide-react';

export const EcosystemSection: React.FC = () => {
  const funnelStages = [
    {
      stage: 'AWARENESS',
      subtitle: 'Maximizing Brand Reach & Attention',
      channels: 'TikTok Ads, Facebook Reels, YouTube Shorts, Tech KOL Unboxings',
      objective: 'Capturing early category interest and driving viral brand exposure.'
    },
    {
      stage: 'ENGAGEMENT',
      subtitle: 'Building Interest & Community',
      channels: 'Meta Carousel Ads, Interactive Stories, Social Comments, Influencer Demos',
      objective: 'Fostering deep interaction and explaining core product innovations.'
    },
    {
      stage: 'CONSIDERATION',
      subtitle: 'Differentiating Product Superiority',
      channels: 'Google Search Ads, Tech Reviews, Landing Pages, Feature Comparison Reels',
      objective: 'Capturing high-intent buyers evaluating competitive tech specs.'
    },
    {
      stage: 'CONVERSION',
      subtitle: 'Driving Sales & Showroom Footfall',
      channels: 'Meta Conversion Ads, TikTok Shop, Retail Store Pop-Ups, Bundle Promo Offers',
      objective: 'Transforming prospect interest into immediate online or in-store purchase.'
    },
    {
      stage: 'RETENTION',
      subtitle: 'Maximizing LTV & Advocacy',
      channels: 'Customer VIP Groups, Warranty Reg, Retargeting Ads, Special Upgrade Deals',
      objective: 'Building brand loyalty and encouraging repeat consumer purchases.'
    }
  ];

  const corePlatforms = [
    { name: 'Meta Ads', role: 'Facebook & Instagram Lead Gen, Conversions, Brand Awareness', icon: Share2 },
    { name: 'TikTok Ads', role: 'Short-Form Video Ad Campaigns, TikTok Shop, Youth Reach', icon: TrendingUp },
    { name: 'Google Ads & SEM', role: 'High-Intent Search Ads, Display Banners, Google Shopping', icon: Search },
    { name: 'YouTube Ads', role: 'In-Stream Video Ads, Product Review Sponsorships', icon: Globe },
    { name: 'KOL / Influencers', role: 'Tier-1 Cambodian Tech KOL Unboxings & Endorsements', icon: Target },
    { name: 'E-Commerce', role: 'E-Commerce Storefront Conversions & ROI Tracking', icon: ShoppingCart }
  ];

  return (
    <section id="digital-funnel" className="py-24 bg-[#04060A] text-white border-b border-cyan-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>09 — DIGITAL ECOSYSTEM</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase font-sans">
            FULL-FUNNEL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">DIGITAL MARKETING</span>
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Architecting integrated online customer journeys across Facebook, Instagram, TikTok, Google, YouTube, and retail storefronts.
          </p>
        </div>

        {/* Visual Funnel Diagram */}
        <div className="mb-16 space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold mb-6">
            The 5-Stage Customer Growth Funnel:
          </h3>

          <div className="space-y-3">
            {funnelStages.map((f, idx) => (
              <div key={idx} className="relative">
                <div className="p-6 rounded-2xl bg-[#090E1B] border border-cyan-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-cyan-400 transition-all shadow-xl">
                  
                  {/* Stage Label */}
                  <div className="flex items-center gap-4 min-w-[220px]">
                    <span className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-black text-xs font-mono flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-lg font-extrabold text-white font-sans uppercase">
                        {f.stage}
                      </h4>
                      <p className="text-[11px] text-cyan-300 font-mono">
                        {f.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Channels */}
                  <div className="flex-1 space-y-1">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                      Primary Advertising Channels:
                    </span>
                    <p className="text-xs font-mono text-neutral-200">
                      {f.channels}
                    </p>
                  </div>

                  {/* Strategic Goal */}
                  <div className="max-w-xs text-xs text-neutral-300 font-sans border-t md:border-t-0 md:border-l border-white/10 pt-2 md:pt-0 md:pl-4">
                    {f.objective}
                  </div>

                </div>

                {/* Funnel Down Arrow */}
                {idx < funnelStages.length - 1 && (
                  <div className="flex justify-center my-1">
                    <ArrowDown className="w-4 h-4 text-cyan-400/60 animate-bounce" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Core Platforms Grid */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold">
            Core Digital Capabilities & Platforms Handled:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {corePlatforms.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-[#080C16] border border-white/10 space-y-3 hover:border-cyan-500/40 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="font-extrabold text-white text-base font-sans">
                      {p.name}
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                    {p.role}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
