import React, { useState, useEffect } from 'react';
import { X, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { PHORM_INFO } from '../data/phormData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillMessage?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, prefillMessage }) => {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (prefillMessage) {
      setMessage(prefillMessage);
    }
  }, [prefillMessage]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in-50">
      <div className="relative w-full max-w-lg bg-[#090D18] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-[#0E1528] text-neutral-400 hover:text-white hover:bg-cyan-950/50 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1">
            EXECUTIVE INQUIRY
          </span>
          <h3 className="text-2xl font-black uppercase text-white font-sans">
            Connect With Phorm Karona
          </h3>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3 bg-cyan-950/30 border border-cyan-500/30 rounded-2xl">
            <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto" />
            <h4 className="text-lg font-bold text-white uppercase">Message Sent</h4>
            <p className="text-xs text-neutral-300 font-sans">
              Thank you for getting in touch. Phorm will review your inquiry and get back to you promptly.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 rounded-xl bg-cyan-400 text-black font-extrabold text-xs uppercase"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-2">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl bg-[#0E1528] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-2">
                Your Email
              </label>
              <input
                type="email"
                required
                placeholder="email@domain.com"
                className="w-full px-4 py-3 rounded-xl bg-[#0E1528] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-2">
                Inquiry Topic / Details
              </label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Inquire about leadership, GTM consulting, or recruitment..."
                className="w-full px-4 py-3 rounded-xl bg-[#0E1528] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20"
            >
              Send Direct Message
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
