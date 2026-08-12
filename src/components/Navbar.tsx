import React, { useState, useEffect } from 'react';
import { Briefcase, ArrowUpRight, Menu, X, Download, Mail, Phone, MapPin, Sparkles, ChevronRight, Camera, Edit3 } from 'lucide-react';
import { PHORM_INFO } from '../data/phormData';
import { useProfilePhoto } from '../utils/mediaStore';
import { useEditableText } from '../utils/textStore';

interface NavbarProps {
  onOpenContact: (prefill?: string) => void;
  onOpenResumeModal: () => void;
  onOpenEditTextModal?: (tab?: 'profile' | 'brands' | 'career') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenResumeModal, onOpenEditTextModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { photo } = useProfilePhoto();
  const { textData } = useEditableText();

  const name = textData.phormInfo?.name || PHORM_INFO.name;
  const title = textData.phormInfo?.title || PHORM_INFO.title;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#journey' },
    { label: 'Current Role', href: '#current-role' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Brand Launches', href: '#brand-launches' },
    { label: 'Digital Funnel', href: '#digital-funnel' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'AI Audit', href: '#ai-audit' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06080F]/90 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Executive Avatar */}
        <a href="#cover" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-cyan-400/80 bg-neutral-900 group-hover:scale-105 transition-transform shadow-lg shadow-cyan-500/20">
              <img
                src={photo}
                alt="Phorm Karona Profile Avatar"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#06080F] rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm tracking-wider text-white uppercase group-hover:text-cyan-400 transition-colors">
              {name}
            </span>
            <span className="text-[10px] font-mono text-cyan-400/80 uppercase tracking-widest flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              {title}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#0C101C]/80 border border-white/10 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-cyan-400 hover:bg-cyan-950/30 rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {onOpenEditTextModal && (
            <button
              onClick={() => onOpenEditTextModal('profile')}
              className="px-3 py-2 rounded-xl bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/20 text-xs font-mono font-bold transition-all flex items-center gap-1.5 shadow-md"
              title="Edit text content across the portfolio"
            >
              <Edit3 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Edit Text</span>
            </button>
          )}

          <button
            onClick={onOpenResumeModal}
            className="px-4 py-2 rounded-xl bg-[#0D1322] border border-cyan-500/30 text-cyan-300 hover:border-cyan-400 hover:text-white text-xs font-mono font-bold transition-all flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV / Resume</span>
          </button>

          <button
            onClick={() => onOpenContact('Requesting a strategic marketing leadership discussion.')}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-extrabold text-xs uppercase tracking-wider hover:opacity-95 shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-1.5"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-xl bg-[#0F1524] border border-white/10 text-white"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#070A12] border-b border-cyan-500/20 px-6 py-6 space-y-4 animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-[#0F1524] border border-white/5 text-xs font-medium text-neutral-200 hover:text-cyan-400 hover:border-cyan-500/30 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-500" />
              </a>
            ))}
          </div>

          <div className="pt-2 flex items-center gap-3 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="flex-1 py-3 rounded-xl bg-[#0E1526] border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Preview CV</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
            >
              <span>Contact Phorm</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
