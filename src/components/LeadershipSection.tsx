import React from 'react';
import { Users, UserCheck, ShieldCheck, BarChart2, Edit3, Palette, Video, Camera, ChevronDown } from 'lucide-react';
import { TEAM_STRUCTURE } from '../data/phormData';

export const LeadershipSection: React.FC = () => {
  const getRoleIcon = (title: string) => {
    switch (title) {
      case 'Assistant Marketing Manager': return UserCheck;
      case 'Brand Supervisors': return ShieldCheck;
      case 'Digital Marketing Executive': return BarChart2;
      case 'Content Creators': return Edit3;
      case 'Graphic Designers': return Palette;
      case 'Video Editors': return Video;
      case 'Photographer & Videographer': return Camera;
      default: return Users;
    }
  };

  return (
    <section id="leadership" className="py-24 bg-[#04060A] text-white border-b border-cyan-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            <span>05 — TEAM LEADERSHIP</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase font-sans">
            BUILDING & DIRECTING <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">MARKETING TEAMS</span>
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Directing a high-performing 14-member multidisciplinary marketing team covering brand supervision, digital ads, graphic design, video editing, and content creation.
          </p>
        </div>

        {/* Top Leadership Badge */}
        <div className="mb-12 p-8 rounded-3xl bg-gradient-to-r from-[#0C152A] via-[#091022] to-[#090E1B] border border-cyan-400/40 text-center space-y-4 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono uppercase font-bold tracking-widest">
            ORGANIZATION & MANAGEMENT
          </span>

          <div className="text-5xl sm:text-7xl font-black text-cyan-300 font-mono tracking-tight">
            14-MEMBER <span className="text-white">MARKETING TEAM</span>
          </div>

          <p className="text-neutral-300 text-sm max-w-xl mx-auto font-sans leading-relaxed">
            Under Phorm Karona’s direct leadership, this structured unit executes full campaign lifecycles from creative briefs to post-production and performance tracking.
          </p>
        </div>

        {/* Visual Org Tree / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_STRUCTURE.map((role, idx) => {
            const IconComponent = getRoleIcon(role.title);

            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#080D18] border border-cyan-500/20 hover:border-cyan-400/50 transition-all shadow-xl space-y-4 relative group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-cyan-300 font-mono px-3 py-1 rounded-xl bg-[#0E162B] border border-white/10">
                    {role.count} {role.count === 1 ? 'Head' : 'Heads'}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider font-sans group-hover:text-cyan-300 transition-colors">
                    {role.title}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed font-sans">
                    {role.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
