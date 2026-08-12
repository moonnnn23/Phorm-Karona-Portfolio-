import React from 'react';
import { ShoppingBag, MapPin, Handshake, CheckCircle2, Store, Sparkles } from 'lucide-react';
import { RETAIL_LOCATIONS, RETAIL_PARTNERS } from '../data/phormData';

export const RetailOfflineSection: React.FC = () => {
  const offlineCapabilities = [
    'Retail Pop-Up Activations',
    'Mall Roadshows & Demos',
    'Interactive Product Demos',
    'In-Store Experiential Zones',
    'POSM & Window Branding',
    'Trade Partner Consignments',
    'Customer Engagement Events',
    'Corporate Distribution Deals'
  ];

  return (
    <section id="retail-offline" className="py-24 bg-[#06080F] text-white border-b border-cyan-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <ShoppingBag className="w-3.5 h-3.5 text-cyan-400" />
            <span>08 — RETAIL & OFFLINE MARKETING</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase font-sans">
            CONNECTING DIGITAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">WITH PHYSICAL EXPERIENCE</span>
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Bridging online advertising with high-impact physical activations in Cambodia’s premier retail malls and commercial hubs.
          </p>
        </div>

        {/* Major Mall Locations Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {RETAIL_LOCATIONS.map((loc, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#090D1A] border border-cyan-500/30 hover:border-cyan-400 transition-all shadow-xl space-y-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-bold block mb-1">
                  PREMIER LOCATION
                </span>
                <h3 className="text-2xl font-black text-white font-sans uppercase">
                  {loc.name}
                </h3>
                <p className="text-xs text-neutral-400 mt-1 font-mono">
                  {loc.type}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Active Mall Pop-up & Event Execution Hub</span>
              </div>
            </div>
          ))}
        </div>

        {/* Consignment & Channel Partnerships */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0C152A] via-[#080D1A] to-[#080D1A] border border-cyan-500/30 space-y-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-1">
                <Handshake className="w-4 h-4 text-cyan-400" />
                <span>CHANNEL DEVELOPMENT & CONSIGNMENT</span>
              </div>
              <h3 className="text-2xl font-black uppercase font-sans text-white">
                RETAIL PARTNERS & DISTRIBUTION CHANNELS
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              Consignment & Retail Network
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RETAIL_PARTNERS.map((partner, pIdx) => (
              <div key={pIdx} className="p-5 rounded-2xl bg-[#090E1B] border border-white/10 space-y-2">
                <div className="text-lg font-bold text-white uppercase font-sans">
                  {partner.name}
                </div>
                <p className="text-xs text-cyan-300 font-mono">
                  {partner.role}
                </p>
              </div>
            ))}
          </div>

          {/* Capabilities Grid */}
          <div className="pt-4 border-t border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold block mb-3">
              Retail Activation Capabilities:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-neutral-300">
              {offlineCapabilities.map((cap, cIdx) => (
                <div key={cIdx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
