import React from 'react';
import { Calendar, Briefcase, ChevronRight, CheckCircle2, ShieldCheck, Car, Compass, Cpu, Layers, Edit3 } from 'lucide-react';
import { CAREER_JOURNEY } from '../data/phormData';
import { useEditableText } from '../utils/textStore';

interface JourneySectionProps {
  onOpenEditTextModal?: (tab?: 'profile' | 'brands' | 'career') => void;
}

export const JourneySection: React.FC<JourneySectionProps> = ({ onOpenEditTextModal }) => {
  const { textData } = useEditableText();

  return (
    <section id="journey" className="py-24 bg-[#04060A] text-white border-b border-cyan-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>03 — CAREER TIMELINE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase font-sans">
              MY MARKETING <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">JOURNEY & EVOLUTION</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              From operational quality control to senior digital marketing leadership managing multi-million-dollar technology ecosystems.
            </p>
          </div>

          {onOpenEditTextModal && (
            <button
              onClick={() => onOpenEditTextModal('career')}
              className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/20 text-xs font-mono font-bold transition-all flex items-center gap-1.5 shrink-0"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Timeline Text</span>
            </button>
          )}
        </div>

        {/* Vertical Visual Timeline */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {CAREER_JOURNEY.map((item, idx) => {
            const isCurrent = idx === CAREER_JOURNEY.length - 1;
            const override = textData.careerJourney?.[idx] || {};

            const roleTitle = override.role || item.role;
            const companyName = override.company || item.company;
            const period = override.year || item.year;
            const description = override.description || item.description;

            return (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    isCurrent
                      ? 'bg-cyan-400 border-cyan-300 text-black shadow-lg shadow-cyan-400/50 scale-110'
                      : 'bg-[#090D18] border-cyan-500/50 text-cyan-400'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-black' : 'bg-cyan-400'}`} />
                </div>

                {/* Card Container */}
                <div className={`p-6 sm:p-8 rounded-3xl border transition-all ${
                  isCurrent
                    ? 'bg-gradient-to-br from-[#0C1427] to-[#080E1D] border-cyan-400/60 shadow-2xl shadow-cyan-500/10'
                    : 'bg-[#080B14] border-white/10 hover:border-cyan-500/30'
                }`}>
                  
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase ${
                      isCurrent ? 'bg-cyan-400 text-black' : 'bg-cyan-950 text-cyan-300 border border-cyan-500/30'
                    }`}>
                      {period}
                    </span>
                    <span className="text-xs font-mono text-neutral-400 font-bold">
                      {companyName}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight font-sans">
                    {roleTitle}
                  </h3>
                  
                  {description && (
                    <p className="text-neutral-300 text-xs sm:text-sm mt-2 leading-relaxed">
                      {description}
                    </p>
                  )}

                  {/* Brands Managed List if present */}
                  {item.brands && item.brands.length > 0 && (
                    <div className="mt-4 p-3 rounded-2xl bg-[#0F162A] border border-cyan-500/20 space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-bold block">
                        Portfolio Brands Handled:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.brands.map((b, bIdx) => (
                          <span key={bIdx} className="px-2.5 py-1 rounded-lg bg-black/50 border border-white/10 text-xs font-medium text-white">
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Focus Areas Badges */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold block mb-2">
                      Core Focus & Key Deliverables:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.focusAreas.map((focus, fIdx) => (
                        <span
                          key={fIdx}
                          className="px-2.5 py-1 rounded-lg bg-[#0E1528] border border-white/10 text-xs font-mono text-neutral-300"
                        >
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
