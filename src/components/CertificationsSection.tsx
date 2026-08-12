import React from 'react';
import { Award, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../data/phormData';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-[#04060A] text-white border-b border-cyan-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>15 — PROFESSIONAL CREDENTIALS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase font-sans">
            CERTIFICATIONS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ACCREDITATIONS</span>
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Continuous professional mastery across global marketing, project management, search engine optimization, and artificial intelligence.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#090D18] border border-cyan-500/20 hover:border-cyan-400 transition-all shadow-xl space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-md bg-cyan-950 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 font-bold">
                  {cert.badge}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white font-sans group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-neutral-400 mt-1">
                  Issued by: <strong className="text-neutral-200">{cert.issuer}</strong>
                </p>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Professional Credential</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
