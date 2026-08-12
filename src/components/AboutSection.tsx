import React, { useState } from 'react';
import { User, Award, ShieldCheck, CheckCircle2, Cpu, TrendingUp, Users, Camera, Upload } from 'lucide-react';
import { PHORM_INFO } from '../data/phormData';
import { useProfilePhoto } from '../utils/mediaStore';
import { useEditableText } from '../utils/textStore';
import { ProfilePhotoUploadModal } from './ProfilePhotoUploadModal';

export const AboutSection: React.FC = () => {
  const { photo } = useProfilePhoto();
  const { textData } = useEditableText();
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  const name = textData.phormInfo?.name || PHORM_INFO.name;
  const title = textData.phormInfo?.title || PHORM_INFO.title;
  const location = textData.phormInfo?.location || PHORM_INFO.location;
  const aboutBio = textData.phormInfo?.bio || PHORM_INFO.bio;

  const highlights = [
    { title: '7+ Years Experience', desc: 'Integrated marketing, brand development & growth across Cambodia.', value: '7+', icon: Award },
    { title: '9 Brands Managed', desc: 'Leading tech brands including Amazfit, Dreame, Noise & Imilab.', value: '9', icon: Cpu },
    { title: '14 Team Members', desc: 'Multidisciplinary team of creators, designers, editors & supervisors.', value: '14', icon: Users },
    { title: '5 Brand Launches', desc: 'Successfully launched IMILAB, Cossy, Deerma, Dreame & Navee in KH.', value: '5', icon: TrendingUp }
  ];

  return (
    <section id="about" className="py-24 bg-[#06080F] text-white border-b border-cyan-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <User className="w-3.5 h-3.5 text-cyan-400" />
            <span>02 — ABOUT ME</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase font-sans">
            EXECUTIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">SUMMARY & PROFILE</span>
          </h2>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Detailed Biography Text & Profile Card */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Executive Profile Card */}
            <div className="p-6 rounded-3xl bg-[#080D18] border border-cyan-500/30 flex flex-col sm:flex-row items-center gap-6 shadow-2xl relative overflow-hidden">
              <div className="relative group shrink-0">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-cyan-400/80 shadow-xl bg-neutral-900">
                  <img
                    src={photo}
                    alt="Phorm Karona Executive Profile"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <button
                  onClick={() => setIsPhotoModalOpen(true)}
                  className="absolute bottom-1 right-1 bg-cyan-400 text-black p-2 rounded-xl shadow-lg border border-[#080D18] hover:scale-110 transition-transform"
                  title="Upload / Change Profile Photo"
                >
                  <Upload className="w-3.5 h-3.5 stroke-[3]" />
                </button>
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
                  Executive Leader Profile
                </div>
                <h3 className="text-2xl font-black text-white font-sans uppercase">
                  {name}
                </h3>
                <p className="text-xs text-neutral-300 font-mono">
                  {title} • {location}
                </p>
                <button
                  onClick={() => setIsPhotoModalOpen(true)}
                  className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 text-xs font-mono font-bold transition-all"
                >
                  <Camera className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Upload / Change Photo</span>
                </button>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#090E1A] border border-cyan-500/20 space-y-6 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-sans uppercase tracking-wide leading-tight border-b border-white/10 pb-4">
                Driving Market Share, Brand Equity & Commercial Growth in Cambodia.
              </h3>

              <div className="text-neutral-300 text-base leading-relaxed whitespace-pre-line font-sans space-y-4">
                {aboutBio}
              </div>

              {/* Key Competency Checklist */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Integrated Marketing Strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>New Product Launch Frameworks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Full-Funnel Paid Performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Retail Pop-Ups & Roadshows</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Influencer & KOL Operations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>14-Member Team Leadership</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights 4 Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => {
              const IconComp = h.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-[#0B101D] border border-cyan-500/20 space-y-3 hover:border-cyan-400/50 transition-all shadow-lg group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-cyan-300 font-mono tracking-tight">
                      {h.value}
                    </div>
                    <h4 className="font-bold text-xs text-white uppercase tracking-wider mt-1">
                      {h.title}
                    </h4>
                    <p className="text-[11px] text-neutral-400 leading-normal mt-1 font-sans">
                      {h.desc}
                    </p>
                  </div>
                </div>
              );
            })}
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
