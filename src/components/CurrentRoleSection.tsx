import React, { useState } from 'react';
import { Cpu, CheckCircle2, Sparkles, ExternalLink, ShieldCheck, Flame, Camera, Upload, Edit3 } from 'lucide-react';
import { MANAGED_BRANDS } from '../data/phormData';
import { useBrandMedia } from '../utils/mediaStore';
import { useEditableText } from '../utils/textStore';
import { BrandLogoUploadModal } from './BrandLogoUploadModal';

interface CurrentRoleSectionProps {
  onOpenEditTextModal?: (tab?: 'profile' | 'brands' | 'career') => void;
}

export const CurrentRoleSection: React.FC<CurrentRoleSectionProps> = ({ onOpenEditTextModal }) => {
  const { brandMedia } = useBrandMedia();
  const { textData } = useEditableText();
  const [selectedBrandForUpload, setSelectedBrandForUpload] = useState<{ id: string; name: string } | null>(null);

  const responsibilities = [
    'Overall Marketing Strategy & Roadmap',
    'Brand Development & Positioning',
    'New Product Launches & Keynotes',
    'Retail Expansion & Channel Growth',
    'Commercial Business & Sales Growth',
    'Omnichannel Digital Advertising',
    'Performance Marketing & ROI Tracking',
    'KOL & Influencer Strategy',
    'Retail Activations & Mall Pop-Ups',
    'Trade Marketing & Consignments',
    'Event Management & Press Relations',
    'Strategic Partnership Development',
    'Content Production & Team Direction'
  ];

  return (
    <section id="current-role" className="py-24 bg-[#06080F] text-white border-b border-cyan-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>04 — CURRENT LEADERSHIP ROLE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase font-sans">
            DIGITAL MARKETING MANAGER <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">@ TECH ZONE GROUP</span>
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Leading overall marketing strategy, retail expansion, product launches, digital performance, and brand management for <strong className="text-cyan-300">9 technology brands in Cambodia</strong>.
          </p>
        </div>

        {/* Responsibilities Bar */}
        <div className="mb-16 p-8 rounded-3xl bg-[#090E1C] border border-cyan-500/30 space-y-6 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="text-lg font-extrabold uppercase font-sans text-cyan-300 tracking-wide flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span>Core Executive Responsibilities</span>
            </h3>
            <span className="text-xs font-mono text-neutral-400">
              14-Member Team Direct Direction
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs font-mono text-neutral-200">
            {responsibilities.map((resp, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#0D1428] border border-white/5 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{resp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 9 Brands Grid Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase font-sans text-white">
              PORTFOLIO OF <span className="text-cyan-400">9 MANAGED TECH BRANDS</span>
            </h3>
            <p className="text-xs font-mono text-neutral-400 mt-1">
              Directing digital, retail, and influencer operations across consumer tech, wearables & smart home
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-xs font-mono">
              5 Launched by Phorm in KH
            </span>
          </div>
        </div>

        {/* 9 Managed Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MANAGED_BRANDS.map((brand) => {
            const customMedia = brandMedia[brand.id] || {};
            const textOverride = textData.managedBrands?.[brand.id] || {};

            const displayLogo = customMedia.logoUrl || brand.logoUrl;
            const displayImage = customMedia.imageUrl || brand.image;

            const bName = textOverride.name || brand.name;
            const bCategory = textOverride.category || brand.category;
            const bTagline = textOverride.tagline || brand.tagline;
            const bHighlights = textOverride.highlights || brand.highlights;

            return (
              <div
                key={brand.id}
                className="p-6 rounded-3xl bg-[#090D18] border border-cyan-500/20 hover:border-cyan-400/50 transition-all shadow-xl space-y-4 group relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#0E162B] border border-white/10 text-[10px] font-mono uppercase tracking-wider text-cyan-300">
                      {bCategory}
                    </span>

                    <div className="flex items-center gap-1.5">
                      {onOpenEditTextModal && (
                        <button
                          onClick={() => onOpenEditTextModal('brands')}
                          className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 text-[10px] font-mono flex items-center gap-1"
                          title="Edit text for this brand"
                        >
                          <Edit3 className="w-2.5 h-2.5" />
                          <span>Text</span>
                        </button>
                      )}

                      {brand.isLaunchedByPhorm && (
                        <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[10px] font-mono font-bold flex items-center gap-1">
                          <Flame className="w-3 h-3 text-emerald-400" />
                          <span>Launched by Phorm</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Brand Showcase Photo & Logo Display */}
                  <div
                    onClick={() => setSelectedBrandForUpload({ id: brand.id, name: bName })}
                    className="h-36 rounded-2xl overflow-hidden border border-white/10 relative mb-4 group-hover:border-cyan-400/50 transition-colors cursor-pointer"
                  >
                    <img
                      src={displayImage}
                      alt={bName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Hover Change Photo Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="px-3 py-1.5 rounded-xl bg-cyan-400 text-black font-mono font-extrabold text-xs shadow-lg flex items-center gap-1.5">
                        <Camera className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Change Brand Photo</span>
                      </span>
                    </div>

                    {/* Brand Logo Badge Overlay */}
                    <div className="absolute bottom-2 left-2 px-3 py-1.5 rounded-xl bg-black/90 border border-cyan-500/40 flex items-center gap-2">
                      {displayLogo ? (
                        <img src={displayLogo} alt={`${bName} Logo`} className="h-5 w-auto object-contain max-w-[80px]" referrerPolicy="no-referrer" />
                      ) : (
                        <span className="font-mono font-black text-xs text-cyan-300 tracking-wider">
                          {brand.logoText}
                        </span>
                      )}
                    </div>

                    {/* Upload Custom Logo & Photo Trigger */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedBrandForUpload({ id: brand.id, name: bName });
                      }}
                      className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-black/80 border border-cyan-400/40 text-cyan-300 hover:text-white hover:bg-cyan-500/30 text-[10px] font-mono font-bold transition-all flex items-center gap-1 shadow-lg"
                      title="Upload custom logo or image"
                    >
                      <Camera className="w-3 h-3 text-cyan-400" />
                      <span>Edit Logo/Photo</span>
                    </button>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {bName}
                    </h4>
                    <p className="text-xs text-neutral-400 font-sans">
                      {bTagline}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold block">
                      Strategic Scope:
                    </span>
                    <button
                      onClick={() => setSelectedBrandForUpload({ id: brand.id, name: bName })}
                      className="text-[10px] font-mono text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      <Upload className="w-2.5 h-2.5" />
                      <span>Upload Media</span>
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {bHighlights.map((h, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-[#0E1528] text-[11px] font-mono text-neutral-300">
                        • {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Logo Upload Modal */}
        {selectedBrandForUpload && (
          <BrandLogoUploadModal
            isOpen={!!selectedBrandForUpload}
            brandId={selectedBrandForUpload.id}
            brandName={selectedBrandForUpload.name}
            onClose={() => setSelectedBrandForUpload(null)}
          />
        )}

      </div>
    </section>
  );
};
