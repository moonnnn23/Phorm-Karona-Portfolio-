import React, { useState, useEffect } from 'react';
import { X, Save, Edit3, Check, RefreshCw, User, Briefcase, Cpu, Camera } from 'lucide-react';
import { PHORM_INFO, MANAGED_BRANDS, CAREER_JOURNEY } from '../data/phormData';
import { useEditableText, saveTextData, resetAllCustomText } from '../utils/textStore';

export const INITIAL_EVENTS_LIST = [
  {
    id: 'event-aeon-roadshow',
    title: 'AEON Mall Sen Sok Consumer Tech Pop-Up & Roadshow',
    brand: 'Tech Zone / Amazfit / Dreame',
    location: 'AEON Mall Sen Sok City, Phnom Penh',
    date: '2025 – Quarterly Activations',
    type: 'Mall Pop-up',
    description: 'High-traffic interactive retail experience featuring live smartwatch testing pods, smart vacuum demonstrations, and instant coupon giveaways.',
    highlights: ['Interactive Product Pods', 'Live Product Demonstrations', '10,000+ Mall Visitors Reached']
  },
  {
    id: 'event-amazfit-keynote',
    title: 'Amazfit Next-Gen Smartwatch Keynote Launch',
    brand: 'Amazfit Cambodia',
    location: 'Rosewood Hotel Phnom Penh Ballroom',
    date: 'Q3 2024 Launch',
    type: 'Keynote Launch',
    description: 'Grand product unveil for luxury smartwatch lineup with over 40 tech KOLs, press journalists, and consignment channel executives in attendance.',
    highlights: ['Keynote Stage Broadcast', '40+ KOLs & Tech Media', '2.5M Viral Social Views']
  },
  {
    id: 'event-navee-eden',
    title: 'Navee E-Scooter Outdoor Experiential Test Rides',
    brand: 'Navee Cambodia',
    location: 'Eden Garden Lifestyle Complex, Phnom Penh',
    date: 'Q1 2025 Brand Entry',
    type: 'Outdoor Roadshow',
    description: 'Experiential urban e-mobility testing zone with obstacle course track, speed tests, and TikTok influencer challenge reels.',
    highlights: ['Experiential Test Track', 'Youth TikTok Reels', 'On-Site Pre-Order Surge']
  },
  {
    id: 'event-dreame-launch',
    title: 'Dreame Robotic Cleaning Smart Home Media Launch',
    brand: 'Dreame Cambodia',
    location: 'Phnom Penh Tech Zone Experience Center',
    date: '2025 Full GTM Launch',
    type: 'Keynote Launch',
    description: 'Smart living simulation setup demonstrating AI robotic vacuum obstacle avoidance, self-emptying docks, and smart app integration.',
    highlights: ['Live Floor Cleaning Demos', 'Home Appliance Influencers', 'Top Retail Shelf Placements']
  },
  {
    id: 'event-kol-studio',
    title: 'Cambodia Tech Influencer & KOL Unboxing Sessions',
    brand: 'Tech Zone / Imilab / Cossy / Kospet',
    location: 'Studio & Tech Zone Unboxing Pods',
    date: 'Ongoing 2024 – 2026',
    type: 'KOL Unboxing',
    description: 'Structured influencer campaign workflows coordinating product seeds, video script alignment, unboxing reels, and affiliate discount codes.',
    highlights: ['30+ Monthly Tech Videos', 'High TikTok Engagement', 'Trackable Conversions']
  },
  {
    id: 'event-automotive-launch',
    title: 'HGB Group Premium Automotive Luxury Showroom Event',
    brand: 'BMW & Volvo Cars Cambodia',
    location: 'BMW Cambodia Showroom, Phnom Penh',
    date: '2022 – 2023 Executive Era',
    type: 'Automotive Launch',
    description: 'Exclusive luxury test drive weekend and VIP customer reception targeting high-net-worth buyers in Phnom Penh.',
    highlights: ['High-Intent VIP Leads', 'Luxury Media Coverage', 'Showroom Traffic Peak']
  }
];

interface EditTextModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'profile' | 'brands' | 'career' | 'events';
  initialEventId?: string;
}

export const EditTextModal: React.FC<EditTextModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'profile',
  initialEventId
}) => {
  const { textData } = useEditableText();
  const [activeTab, setActiveTab] = useState<'profile' | 'brands' | 'career' | 'events'>(initialTab);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Profile Form State
  const profileOverrides = textData.phormInfo || {};
  const [name, setName] = useState(profileOverrides.name || PHORM_INFO.name);
  const [title, setTitle] = useState(profileOverrides.title || PHORM_INFO.title);
  const [location, setLocation] = useState(profileOverrides.location || PHORM_INFO.location);
  const [phone, setPhone] = useState(profileOverrides.phone || PHORM_INFO.phone);
  const [email, setEmail] = useState(profileOverrides.email || PHORM_INFO.email);
  const [tagline, setTagline] = useState(profileOverrides.tagline || PHORM_INFO.tagline);
  const [bio, setBio] = useState(profileOverrides.bio || PHORM_INFO.bio);

  // Selected Brand Form State
  const [selectedBrandId, setSelectedBrandId] = useState<string>(MANAGED_BRANDS[0].id);
  const currentBrandConfig = MANAGED_BRANDS.find(b => b.id === selectedBrandId) || MANAGED_BRANDS[0];
  const brandOverrides = textData.managedBrands?.[selectedBrandId] || {};
  const [brandName, setBrandName] = useState(brandOverrides.name || currentBrandConfig.name);
  const [brandCategory, setBrandCategory] = useState(brandOverrides.category || currentBrandConfig.category);
  const [brandTagline, setBrandTagline] = useState(brandOverrides.tagline || currentBrandConfig.tagline);
  const [brandHighlights, setBrandHighlights] = useState((brandOverrides.highlights || currentBrandConfig.highlights).join(', '));

  // Selected Career Form State
  const [selectedCareerIndex, setSelectedCareerIndex] = useState<number>(0);
  const currentCareerConfig = CAREER_JOURNEY[selectedCareerIndex] || CAREER_JOURNEY[0];
  const careerOverrides = textData.careerJourney?.[selectedCareerIndex] || {};
  const [careerRole, setCareerRole] = useState(careerOverrides.role || currentCareerConfig.role);
  const [careerCompany, setCareerCompany] = useState(careerOverrides.company || currentCareerConfig.company);
  const [careerYear, setCareerYear] = useState(careerOverrides.year || currentCareerConfig.year);
  const [careerDesc, setCareerDesc] = useState(careerOverrides.description || currentCareerConfig.description || '');

  // Selected Event Form State
  const [selectedEventId, setSelectedEventId] = useState<string>(initialEventId || INITIAL_EVENTS_LIST[0].id);
  const currentEventConfig = INITIAL_EVENTS_LIST.find(e => e.id === selectedEventId) || INITIAL_EVENTS_LIST[0];
  const eventOverrides = textData.events?.[selectedEventId] || {};
  const [eventTitle, setEventTitle] = useState(eventOverrides.title || currentEventConfig.title);
  const [eventBrand, setEventBrand] = useState(eventOverrides.brand || currentEventConfig.brand);
  const [eventLocation, setEventLocation] = useState(eventOverrides.location || currentEventConfig.location);
  const [eventDate, setEventDate] = useState(eventOverrides.date || currentEventConfig.date);
  const [eventType, setEventType] = useState(eventOverrides.type || currentEventConfig.type);
  const [eventDesc, setEventDesc] = useState(eventOverrides.description || currentEventConfig.description);
  const [eventHighlights, setEventHighlights] = useState((eventOverrides.highlights || currentEventConfig.highlights).join(', '));

  // Sync state when tab or selection changes
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      if (initialEventId) {
        setSelectedEventId(initialEventId);
      }
    }
  }, [isOpen, initialTab, initialEventId]);

  useEffect(() => {
    const brand = MANAGED_BRANDS.find(b => b.id === selectedBrandId) || MANAGED_BRANDS[0];
    const bOverrides = textData.managedBrands?.[selectedBrandId] || {};
    setBrandName(bOverrides.name || brand.name);
    setBrandCategory(bOverrides.category || brand.category);
    setBrandTagline(bOverrides.tagline || brand.tagline);
    setBrandHighlights((bOverrides.highlights || brand.highlights).join(', '));
  }, [selectedBrandId, textData]);

  useEffect(() => {
    const career = CAREER_JOURNEY[selectedCareerIndex] || CAREER_JOURNEY[0];
    const cOverrides = textData.careerJourney?.[selectedCareerIndex] || {};
    setCareerRole(cOverrides.role || career.role);
    setCareerCompany(cOverrides.company || career.company);
    setCareerYear(cOverrides.year || career.year);
    setCareerDesc(cOverrides.description || career.description || '');
  }, [selectedCareerIndex, textData]);

  useEffect(() => {
    const event = INITIAL_EVENTS_LIST.find(e => e.id === selectedEventId) || INITIAL_EVENTS_LIST[0];
    const eOverrides = textData.events?.[selectedEventId] || {};
    setEventTitle(eOverrides.title || event.title);
    setEventBrand(eOverrides.brand || event.brand);
    setEventLocation(eOverrides.location || event.location);
    setEventDate(eOverrides.date || event.date);
    setEventType(eOverrides.type || event.type);
    setEventDesc(eOverrides.description || event.description);
    setEventHighlights((eOverrides.highlights || event.highlights).join(', '));
  }, [selectedEventId, textData]);

  if (!isOpen) return null;

  const handleSaveProfile = () => {
    saveTextData((prev) => ({
      ...prev,
      phormInfo: {
        ...prev.phormInfo,
        name,
        title,
        location,
        phone,
        email,
        tagline,
        bio
      }
    }));
    triggerSaveSuccess();
  };

  const handleSaveBrand = () => {
    saveTextData((prev) => ({
      ...prev,
      managedBrands: {
        ...prev.managedBrands,
        [selectedBrandId]: {
          name: brandName,
          category: brandCategory,
          tagline: brandTagline,
          highlights: brandHighlights.split(',').map(s => s.trim()).filter(Boolean)
        }
      }
    }));
    triggerSaveSuccess();
  };

  const handleSaveCareer = () => {
    saveTextData((prev) => ({
      ...prev,
      careerJourney: {
        ...prev.careerJourney,
        [selectedCareerIndex]: {
          role: careerRole,
          company: careerCompany,
          year: careerYear,
          description: careerDesc
        }
      }
    }));
    triggerSaveSuccess();
  };

  const handleSaveEvent = () => {
    saveTextData((prev) => ({
      ...prev,
      events: {
        ...prev.events,
        [selectedEventId]: {
          title: eventTitle,
          brand: eventBrand,
          location: eventLocation,
          date: eventDate,
          type: eventType,
          description: eventDesc,
          highlights: eventHighlights.split(',').map(s => s.trim()).filter(Boolean)
        }
      }
    }));
    triggerSaveSuccess();
  };

  const triggerSaveSuccess = () => {
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
    }, 1200);
  };

  const handleResetAll = () => {
    if (confirm('Are you sure you want to reset all text to original defaults?')) {
      resetAllCustomText();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0A0E18] border border-cyan-500/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl text-white max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
              <Edit3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold uppercase font-sans text-white">
                Live Portfolio Text Editor
              </h3>
              <p className="text-xs text-cyan-400 font-mono">
                Edit headlines, bio, brands, career & event gallery texts
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-3 shrink-0">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-3 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all flex items-center gap-1.5 ${
              activeTab === 'profile'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                : 'bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Profile</span>
          </button>

          <button
            onClick={() => setActiveTab('events')}
            className={`px-3 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all flex items-center gap-1.5 ${
              activeTab === 'events'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                : 'bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white'
            }`}
          >
            <Camera className="w-3.5 h-3.5 text-black" />
            <span>Event Gallery</span>
          </button>

          <button
            onClick={() => setActiveTab('brands')}
            className={`px-3 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all flex items-center gap-1.5 ${
              activeTab === 'brands'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                : 'bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>9 Brands</span>
          </button>

          <button
            onClick={() => setActiveTab('career')}
            className={`px-3 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all flex items-center gap-1.5 ${
              activeTab === 'career'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                : 'bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career</span>
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="flex-1 overflow-y-auto space-y-5 pr-2 custom-scrollbar">
          
          {/* TAB 1: EXECUTIVE PROFILE */}
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-cyan-300 font-bold uppercase">Executive Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#060913] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-cyan-300 font-bold uppercase">Job Title / Designation</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-[#060913] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-cyan-300 font-bold uppercase">Location</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-[#060913] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-cyan-300 font-bold uppercase">Phone Number</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#060913] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-cyan-300 font-bold uppercase">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#060913] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-cyan-300 font-bold uppercase">Hero Tagline / Overview</label>
                <textarea
                  rows={2}
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  className="w-full bg-[#060913] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono leading-relaxed"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-cyan-300 font-bold uppercase">Detailed Executive Bio (About Me)</label>
                <textarea
                  rows={4}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full bg-[#060913] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono leading-relaxed"
                />
              </div>

              <button
                onClick={handleSaveProfile}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-extrabold text-xs uppercase tracking-wider hover:opacity-95 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
              >
                {saveSuccess ? <Check className="w-4 h-4 stroke-[3]" /> : <Save className="w-4 h-4" />}
                <span>{saveSuccess ? 'Executive Info Saved!' : 'Save Executive Profile Text'}</span>
              </button>
            </div>
          )}

          {/* TAB 2: EVENTS GALLERY EDIT */}
          {activeTab === 'events' && (
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-cyan-300 font-bold uppercase">Select Event To Edit</label>
                <select
                  value={selectedEventId}
                  onChange={(e) => setSelectedEventId(e.target.value)}
                  className="w-full bg-[#060913] border border-cyan-500/40 rounded-xl px-3 py-2.5 text-xs text-cyan-300 font-mono font-bold focus:outline-none"
                >
                  {INITIAL_EVENTS_LIST.map(ev => (
                    <option key={ev.id} value={ev.id} className="bg-black text-white">
                      {ev.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-cyan-300 font-bold uppercase">Event Title / Headline</label>
                <input
                  type="text"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                  className="w-full bg-[#060913] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-cyan-300 font-bold uppercase">Brand / Sponsor Tag</label>
                  <input
                    type="text"
                    value={eventBrand}
                    onChange={(e) => setEventBrand(e.target.value)}
                    className="w-full bg-[#060913] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-cyan-300 font-bold uppercase">Location / Venue</label>
                  <input
                    type="text"
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                    className="w-full bg-[#060913] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-cyan-300 font-bold uppercase">Date / Timeline</label>
                  <input
                    type="text"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full bg-[#060913] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-cyan-300 font-bold uppercase">Event Type / Filter Category</label>
                  <input
                    type="text"
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full bg-[#060913] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-cyan-300 font-bold uppercase">Event Overview / Description</label>
                <textarea
                  rows={3}
                  value={eventDesc}
                  onChange={(e) => setEventDesc(e.target.value)}
                  className="w-full bg-[#060913] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono leading-relaxed"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-cyan-300 font-bold uppercase">Strategic Highlights (Comma Separated)</label>
                <input
                  type="text"
                  value={eventHighlights}
                  onChange={(e) => setEventHighlights(e.target.value)}
                  className="w-full bg-[#060913] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                />
              </div>

              <button
                onClick={handleSaveEvent}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-extrabold text-xs uppercase tracking-wider hover:opacity-95 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
              >
                {saveSuccess ? <Check className="w-4 h-4 stroke-[3]" /> : <Save className="w-4 h-4" />}
                <span>{saveSuccess ? 'Event Text Saved!' : `Save Event Text`}</span>
              </button>
            </div>
          )}

          {/* TAB 3: MANAGED TECH BRANDS */}
          {activeTab === 'brands' && (
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-cyan-300 font-bold uppercase">Select Tech Brand To Edit</label>
                <select
                  value={selectedBrandId}
                  onChange={(e) => setSelectedBrandId(e.target.value)}
                  className="w-full bg-[#060913] border border-cyan-500/40 rounded-xl px-3 py-2.5 text-xs text-cyan-300 font-mono font-bold focus:outline-none"
                >
                  {MANAGED_BRANDS.map(b => (
                    <option key={b.id} value={b.id} className="bg-black text-white">
                      {b.name} ({b.category})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-cyan-300 font-bold uppercase">Brand Name</label>
                  <input
                    type="text"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    className="w-full bg-[#060913] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-cyan-300 font-bold uppercase">Category Tag</label>
                  <input
                    type="text"
                    value={brandCategory}
                    onChange={(e) => setBrandCategory(e.target.value)}
                    className="w-full bg-[#060913] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-cyan-300 font-bold uppercase">Tagline / Subtitle</label>
                <input
                  type="text"
                  value={brandTagline}
                  onChange={(e) => setBrandTagline(e.target.value)}
                  className="w-full bg-[#060913] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-cyan-300 font-bold uppercase">Strategic Scope Highlights (Comma Separated)</label>
                <input
                  type="text"
                  value={brandHighlights}
                  onChange={(e) => setBrandHighlights(e.target.value)}
                  className="w-full bg-[#060913] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                />
              </div>

              <button
                onClick={handleSaveBrand}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-extrabold text-xs uppercase tracking-wider hover:opacity-95 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
              >
                {saveSuccess ? <Check className="w-4 h-4 stroke-[3]" /> : <Save className="w-4 h-4" />}
                <span>{saveSuccess ? 'Brand Details Saved!' : `Save ${brandName} Text`}</span>
              </button>
            </div>
          )}

          {/* TAB 4: CAREER JOURNEY */}
          {activeTab === 'career' && (
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-cyan-300 font-bold uppercase">Select Career Role To Edit</label>
                <select
                  value={selectedCareerIndex}
                  onChange={(e) => setSelectedCareerIndex(Number(e.target.value))}
                  className="w-full bg-[#060913] border border-cyan-500/40 rounded-xl px-3 py-2.5 text-xs text-cyan-300 font-mono font-bold focus:outline-none"
                >
                  {CAREER_JOURNEY.map((c, idx) => (
                    <option key={idx} value={idx} className="bg-black text-white">
                      {c.role} — {c.company} ({c.year})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-cyan-300 font-bold uppercase">Role Title</label>
                  <input
                    type="text"
                    value={careerRole}
                    onChange={(e) => setCareerRole(e.target.value)}
                    className="w-full bg-[#060913] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-cyan-300 font-bold uppercase">Company Name</label>
                  <input
                    type="text"
                    value={careerCompany}
                    onChange={(e) => setCareerCompany(e.target.value)}
                    className="w-full bg-[#060913] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-cyan-300 font-bold uppercase">Employment Period (Years)</label>
                <input
                  type="text"
                  value={careerYear}
                  onChange={(e) => setCareerYear(e.target.value)}
                  className="w-full bg-[#060913] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-cyan-300 font-bold uppercase">Role Responsibilities & Achievements</label>
                <textarea
                  rows={4}
                  value={careerDesc}
                  onChange={(e) => setCareerDesc(e.target.value)}
                  className="w-full bg-[#060913] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono leading-relaxed"
                />
              </div>

              <button
                onClick={handleSaveCareer}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-extrabold text-xs uppercase tracking-wider hover:opacity-95 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
              >
                {saveSuccess ? <Check className="w-4 h-4 stroke-[3]" /> : <Save className="w-4 h-4" />}
                <span>{saveSuccess ? 'Career Role Saved!' : `Save ${careerRole} Text`}</span>
              </button>
            </div>
          )}

        </div>

        {/* Footer Controls */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between shrink-0">
          <button
            onClick={handleResetAll}
            className="px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-neutral-400 hover:text-amber-400 text-xs font-mono flex items-center gap-1.5 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset All Defaults</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-neutral-900 text-neutral-300 text-xs font-mono hover:text-white"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
