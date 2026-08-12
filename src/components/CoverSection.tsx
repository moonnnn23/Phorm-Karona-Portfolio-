import React, { useState } from 'react';
import { ArrowUpRight, Award, ShieldCheck, Users, Layers, MapPin, Mail, Phone, Download, Cpu, Sparkles, Camera, Upload, Edit3 } from 'lucide-react';
import { PHORM_INFO } from '../data/phormData';
import { useProfilePhoto } from '../utils/mediaStore';
import { useEditableText } from '../utils/textStore';
import { ProfilePhotoUploadModal } from './ProfilePhotoUploadModal';

interface CoverSectionProps {
  onOpenContact: (prefill?: string) => void;
  onOpenResumeModal: () => void;
  onOpenEditTextModal?: (tab?: 'profile' | 'brands' | 'career') => void;
}

export const CoverSection: React.FC<CoverSectionProps> = ({ onOpenContact, onOpenResumeModal, onOpenEditTextModal }) => {
  const { photo } = useProfilePhoto();
  const { textData } = useEditableText();
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  const info = {
    name: textData.phormInfo?.name || PHORM_INFO.name,
    title: textData.phormInfo?.title || PHORM_INFO.title,
    location: textData.phormInfo?.location || PHORM_INFO.location,
    phone: textData.phormInfo?.phone || PHORM_INFO.phone,
    email: textData.phormInfo?.email || PHORM_INFO.email,
    summary: textData.phormInfo?.tagline || PHORM_INFO.tagline
  };

  return (
    <section id="cover" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#04060A] text-white overflow-hidden border-b border-cyan-500/20">
      {/* Background Technology Mesh Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-indigo-600/5 blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Title & Executive Intro */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Status Pill & Profile Avatar Badge */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>01 — EXECUTIVE PORTFOLIO</span>
                <span className="text-white/40">|</span>
                <span className="text-white/80">Phnom Penh, Cambodia</span>
              </div>

              {/* Upload Profile Photo Button Pill */}
              <button
                onClick={() => setIsPhotoModalOpen(true)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E1628] border border-cyan-400/40 text-cyan-300 hover:text-white hover:border-cyan-300 text-xs font-mono transition-all group shadow-md"
              >
                <Camera className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Upload Profile Photo</span>
              </button>
            </div>

            {/* Oversized Name Header with Integrated Profile Avatar Frame */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              
              {/* Executive Profile Avatar Card */}
              <div className="relative group shrink-0">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-2 border-cyan-400/80 p-1 bg-gradient-to-br from-cyan-500/30 via-blue-600/20 to-transparent shadow-2xl shadow-cyan-500/20">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-neutral-900 relative">
                    <img
                      src={photo}
                      alt="Phorm Karona Executive Profile Photo"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Upload Photo Hover Badge */}
                <button
                  onClick={() => setIsPhotoModalOpen(true)}
                  className="absolute bottom-1 right-1 bg-cyan-400 text-black p-2 rounded-2xl shadow-lg border-2 border-[#04060A] hover:scale-110 transition-transform"
                  title="Upload / Change Profile Photo"
                >
                  <Upload className="w-3.5 h-3.5 stroke-[3]" />
                </button>
              </div>

              {/* Name & Title */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase font-sans leading-none">
                    {info.name}
                  </h1>
                  {onOpenEditTextModal && (
                    <button
                      onClick={() => onOpenEditTextModal('profile')}
                      className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 hover:text-white hover:bg-cyan-500/30 transition-all shadow-md"
                      title="Edit Executive Info Text"
                    >
                      <Edit3 className="w-4 h-4 text-cyan-400" />
                    </button>
                  )}
                </div>
                <div className="text-xl sm:text-3xl font-extrabold text-cyan-400 uppercase tracking-wider font-mono flex flex-wrap items-center gap-3">
                  <span>{info.title}</span>
                </div>
              </div>
            </div>

            {/* Strategic Core Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-neutral-300">
              <span className="px-3 py-1.5 rounded-lg bg-[#0C1220] border border-cyan-500/30 text-cyan-300 font-semibold">
                Brand Strategy
              </span>
              <span className="text-cyan-500">•</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#0C1220] border border-cyan-500/30 text-cyan-300 font-semibold">
                Digital Marketing
              </span>
              <span className="text-cyan-500">•</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#0C1220] border border-cyan-500/30 text-cyan-300 font-semibold">
                Growth & Performance
              </span>
              <span className="text-cyan-500">•</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#0C1220] border border-cyan-500/30 text-cyan-300 font-semibold">
                Product Launch
              </span>
              <span className="text-cyan-500">•</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#0C1220] border border-cyan-500/30 text-cyan-300 font-semibold">
                Retail & Trade
              </span>
              <span className="text-cyan-500">•</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#0C1220] border border-cyan-500/30 text-cyan-300 font-semibold">
                Team Leadership
              </span>
            </div>

            {/* Executive Summary */}
            <p className="text-neutral-300 text-base sm:text-lg max-w-2xl leading-relaxed font-sans border-l-2 border-cyan-400/80 pl-4">
              {info.summary}
            </p>

            {/* Primary CTA Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenContact(`Requesting an executive strategy interview with ${info.name}.`)}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-black font-extrabold text-xs uppercase tracking-wider hover:opacity-95 shadow-xl shadow-cyan-500/20 transition-all flex items-center gap-2"
              >
                <span>Initiate Strategic Discussion</span>
                <ArrowUpRight className="w-4 h-4 text-black stroke-[3]" />
              </button>

              <button
                onClick={onOpenResumeModal}
                className="px-6 py-4 rounded-xl bg-[#0B101D] border border-cyan-500/40 text-cyan-300 hover:text-white hover:border-cyan-400 text-xs font-mono font-bold transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Executive CV</span>
              </button>
            </div>

            {/* Contact Quick Strip */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-neutral-400 font-mono">
              <a href={`mailto:${info.email}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{info.email}</span>
              </a>
              <a href={`tel:${info.phone}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{info.phone}</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{info.location}</span>
              </div>
            </div>
          </div>

          {/* Right Card: High-Impact Statistics Box */}
          <div className="lg:col-span-4 bg-[#090D18] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 relative shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold">
                  Leadership Metrics
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-[10px] font-mono">
                Tech Zone Group
              </span>
            </div>

            {/* Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#0E1526] border border-white/10 space-y-1">
                <div className="text-3xl font-black text-cyan-300 font-mono">7+</div>
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                  Years Marketing Experience
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0E1526] border border-white/10 space-y-1">
                <div className="text-3xl font-black text-cyan-300 font-mono">9</div>
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                  Tech Brands Managed
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0E1526] border border-white/10 space-y-1">
                <div className="text-3xl font-black text-white font-mono">14</div>
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                  Team Members Led
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0E1526] border border-white/10 space-y-1">
                <div className="text-3xl font-black text-emerald-400 font-mono">5</div>
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                  Brands Launched
                </div>
              </div>
            </div>

            {/* Current Position Highlights */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-[#0A0F1E] to-[#0A0F1E] border border-cyan-500/30 space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-mono font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Current Leadership Scope</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                Directing end-to-end brand management, GTM launches, retail pop-ups, performance ads, and influencer relations across Cambodia.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Profile Photo Upload Modal */}
      <ProfilePhotoUploadModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
      />
    </section>
  );
};
