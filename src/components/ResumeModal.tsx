import React from 'react';
import { X, Download, Printer, Briefcase, Mail, Phone, MapPin, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PHORM_INFO, CAREER_JOURNEY, MANAGED_BRANDS, CERTIFICATIONS } from '../data/phormData';
import { useProfilePhoto } from '../utils/mediaStore';
import { useEditableText } from '../utils/textStore';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { photo } = useProfilePhoto();
  const { textData } = useEditableText();

  if (!isOpen) return null;

  const name = textData.phormInfo?.name || PHORM_INFO.name;
  const title = textData.phormInfo?.title || PHORM_INFO.title;
  const location = textData.phormInfo?.location || PHORM_INFO.location;
  const email = textData.phormInfo?.email || PHORM_INFO.email;
  const phone = textData.phormInfo?.phone || PHORM_INFO.phone;
  const summary = textData.phormInfo?.bio || PHORM_INFO.bio;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in-50">
      <div className="relative w-full max-w-4xl bg-[#090D18] border border-cyan-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 my-8 text-white max-h-[90vh] overflow-y-auto">
        
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 sticky top-0 bg-[#090D18] z-10 pt-2">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase">
            <Briefcase className="w-4 h-4" />
            <span>EXECUTIVE CURRICULUM VITAE</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-[#0E1528] border border-cyan-500/30 text-cyan-300 hover:text-white text-xs font-mono font-bold flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#0E1528] text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Container */}
        <div className="space-y-8 print:text-black">
          
          {/* Header */}
          <div className="border-b border-cyan-500/30 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl font-black uppercase text-white font-sans tracking-tight">
                {name}
              </h1>
              <p className="text-base sm:text-lg font-bold text-cyan-400 font-mono">
                {title}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-300 pt-2">
                <span>📍 {location}</span>
                <span>•</span>
                <span>✉️ {email}</span>
                <span>•</span>
                <span>📞 {phone}</span>
              </div>
            </div>

            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-cyan-400/80 shrink-0 bg-neutral-900 shadow-xl">
              <img
                src={photo}
                alt={`${name} CV Avatar`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Executive Profile */}
          <div className="space-y-2">
            <h2 className="text-sm font-mono font-extrabold uppercase text-cyan-400 tracking-wider">
              1. EXECUTIVE PROFILE
            </h2>
            <p className="text-xs text-neutral-300 leading-relaxed font-sans">
              {summary}
            </p>
          </div>

          {/* Career Experience */}
          <div className="space-y-4">
            <h2 className="text-sm font-mono font-extrabold uppercase text-cyan-400 tracking-wider">
              2. PROFESSIONAL CAREER EXPERIENCE
            </h2>

            <div className="space-y-4 border-l border-cyan-500/30 pl-4">
              {CAREER_JOURNEY.map((job, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <strong className="text-white font-bold">{job.role} — {job.company}</strong>
                    <span className="text-cyan-300 font-mono">{job.year}</span>
                  </div>
                  {job.description && (
                    <p className="text-xs text-neutral-300 font-sans">{job.description}</p>
                  )}
                  <div className="text-[11px] text-neutral-400 font-mono">
                    Focus: {job.focusAreas.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Brands Managed */}
          <div className="space-y-2">
            <h2 className="text-sm font-mono font-extrabold uppercase text-cyan-400 tracking-wider">
              3. MANAGED TECH BRANDS (TECH ZONE GROUP)
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono text-neutral-300">
              {MANAGED_BRANDS.map((b) => (
                <div key={b.id} className="p-2 rounded bg-[#0D1426] border border-white/5">
                  <span className="font-bold text-white block">{b.name}</span>
                  <span className="text-[10px] text-cyan-300">{b.category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-sm font-mono font-extrabold uppercase text-cyan-400 tracking-wider">
              4. CERTIFICATIONS & ACCREDITATIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-neutral-300">
              {CERTIFICATIONS.map((c, idx) => (
                <div key={idx} className="p-2 rounded bg-[#0D1426] border border-white/5 flex items-center justify-between">
                  <span>{c.title}</span>
                  <span className="text-cyan-400 font-bold">{c.issuer}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
