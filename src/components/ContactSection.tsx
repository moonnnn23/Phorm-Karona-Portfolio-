import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowUpRight, Download, Sparkles, CheckCircle2 } from 'lucide-react';
import { PHORM_INFO } from '../data/phormData';

interface ContactSectionProps {
  onOpenResumeModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResumeModal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#04060A] text-white border-b border-cyan-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Closing Headline Banner */}
        <div className="mb-20 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>20 — INITIATE CONTACT</span>
          </div>

          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase font-sans tracking-tight text-white leading-tight">
            LET’S BUILD THE NEXT <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              GROWTH STORY.
            </span>
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Available for executive marketing leadership, brand launch consulting, GTM strategy, and commercial partnership opportunities in Cambodia and Southeast Asia.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#080D1A] border border-cyan-500/30 space-y-6 shadow-2xl">
              <h3 className="text-xl font-extrabold text-white font-sans uppercase border-b border-white/10 pb-4">
                Direct Executive Channels
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${PHORM_INFO.email}`}
                  className="p-4 rounded-2xl bg-[#0D1426] border border-white/10 hover:border-cyan-400 transition-all flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                      Direct Email Address
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors font-mono">
                      {PHORM_INFO.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${PHORM_INFO.phone}`}
                  className="p-4 rounded-2xl bg-[#0D1426] border border-white/10 hover:border-cyan-400 transition-all flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                      Direct Phone / Telegram
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors font-mono">
                      {PHORM_INFO.phone}
                    </span>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-[#0D1426] border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                      Primary Location
                    </span>
                    <span className="text-sm font-bold text-white font-mono">
                      {PHORM_INFO.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* CV Action Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenResumeModal}
                  className="w-full py-4 rounded-xl bg-[#0D1528] border border-cyan-500/40 text-cyan-300 hover:text-white hover:border-cyan-400 text-xs font-mono font-bold transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Preview & Download Full CV</span>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#080C16] border border-cyan-500/30 space-y-6 shadow-2xl">
              <h3 className="text-xl font-extrabold text-white font-sans uppercase border-b border-white/10 pb-4">
                Send Strategic Inquiry
              </h3>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto" />
                  <h4 className="text-lg font-extrabold text-white uppercase font-sans">
                    Inquiry Received Successfully
                  </h4>
                  <p className="text-xs text-neutral-300 font-sans max-w-sm mx-auto">
                    Thank you for reaching out. Phorm Karona will respond directly via email or phone shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0E1528] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0E1528] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-2">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Retail Group / Tech Enterprise"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0E1528] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-2">
                      Message / Project Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your brand launch requirements, marketing leadership opportunity, or strategic collaboration inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0E1528] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-black font-black text-xs uppercase tracking-wider hover:opacity-95 shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-black stroke-[3]" />
                    <span>Send Executive Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
