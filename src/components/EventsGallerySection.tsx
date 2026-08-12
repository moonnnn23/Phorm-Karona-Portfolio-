import React, { useState } from 'react';
import { Camera, Calendar, MapPin, Sparkles, Upload, Image as ImageIcon, Trash2, X, ChevronLeft, ChevronRight, RefreshCw, Edit3 } from 'lucide-react';
import { MarketingEvent } from '../types';
import { useEventPhotos, removeEventPhoto, clearEventPhotos } from '../utils/mediaStore';
import { useEditableText } from '../utils/textStore';
import { PhotoUploadModal } from './PhotoUploadModal';

interface EventsGallerySectionProps {
  onOpenEditTextModal?: (tab?: 'profile' | 'brands' | 'career' | 'events', eventId?: string) => void;
}

export const EventsGallerySection: React.FC<EventsGallerySectionProps> = ({ onOpenEditTextModal }) => {
  const { eventPhotos, deletedPhotos, aeonRoadshowImg, keynoteLaunchImg } = useEventPhotos();
  const { textData } = useEditableText();
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [uploadingEvent, setUploadingEvent] = useState<{ id: string; title: string } | null>(null);

  // Lightbox State
  const [lightboxState, setLightboxState] = useState<{
    photos: string[];
    index: number;
    title: string;
  } | null>(null);

  const initialEvents: MarketingEvent[] = [
    {
      id: 'event-aeon-roadshow',
      title: 'AEON Mall Sen Sok Consumer Tech Pop-Up & Roadshow',
      brand: 'Tech Zone / Amazfit / Dreame',
      location: 'AEON Mall Sen Sok City, Phnom Penh',
      date: '2025 – Quarterly Activations',
      type: 'Mall Pop-up',
      description: 'High-traffic interactive retail experience featuring live smartwatch testing pods, smart vacuum demonstrations, and instant coupon giveaways.',
      photos: [
        aeonRoadshowImg,
        'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'
      ],
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
      photos: [
        keynoteLaunchImg,
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800'
      ],
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
      photos: [
        'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800'
      ],
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
      photos: [
        'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800'
      ],
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
      photos: [
        'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800'
      ],
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
      photos: [
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800'
      ],
      highlights: ['High-Intent VIP Leads', 'Luxury Media Coverage', 'Showroom Traffic Peak']
    }
  ];

  const filterOptions = ['All', 'Keynote Launch', 'Mall Pop-up', 'Outdoor Roadshow', 'KOL Unboxing', 'Automotive Launch'];

  // Apply overrides from textStore
  const eventsWithOverrides = initialEvents.map(ev => {
    const override = textData.events?.[ev.id] || {};
    return {
      ...ev,
      title: override.title || ev.title,
      brand: override.brand || ev.brand,
      location: override.location || ev.location,
      date: override.date || ev.date,
      type: override.type || ev.type,
      description: override.description || ev.description,
      highlights: override.highlights || ev.highlights
    };
  });

  const filteredEvents = eventsWithOverrides.filter(ev => {
    if (activeFilter === 'All') return true;
    return ev.type === activeFilter;
  });

  return (
    <section id="events-gallery" className="py-24 bg-[#04070E] text-white border-b border-cyan-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
              <Camera className="w-3.5 h-3.5 text-cyan-400" />
              <span>MARKETING ACTIVITIES & EVENTS GALLERY</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase font-sans">
              MARKETING <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ACTIVITIES & EVENT PHOTOS</span>
            </h2>
            <p className="text-neutral-300 text-base leading-relaxed">
              Visual documentation of product keynote launches, mall pop-up roadshows, KOL unboxings, and retail activations directed by Phorm Karona across Cambodia.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {onOpenEditTextModal && (
              <button
                onClick={() => onOpenEditTextModal('events')}
                className="px-3.5 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/20 text-xs font-mono font-bold transition-all flex items-center gap-1.5"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Event Texts</span>
              </button>
            )}
            <span className="px-3 py-1.5 rounded-xl bg-[#0B101E] border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>📷 Instant Photo Uploader</span>
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/10">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                activeFilter === filter
                  ? 'bg-cyan-500 text-black font-extrabold shadow-lg shadow-cyan-500/20'
                  : 'bg-[#090D1A] border border-white/10 text-neutral-400 hover:text-white hover:border-cyan-500/30'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Events Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredEvents.map((ev) => {
            const userUploadedPhotos = eventPhotos[ev.id] || [];
            const evDeleted = deletedPhotos[ev.id] || [];
            const rawPhotos = [...userUploadedPhotos, ...ev.photos];
            // Filter out deleted photos and remove duplicates
            const allPhotos = Array.from(new Set(rawPhotos)).filter(p => !evDeleted.includes(p));
            const isModified = userUploadedPhotos.length > 0 || evDeleted.length > 0;

            return (
              <div
                key={ev.id}
                className="p-6 sm:p-8 rounded-3xl bg-[#080C18] border border-cyan-500/20 hover:border-cyan-400/50 transition-all shadow-2xl space-y-6 flex flex-col justify-between group relative"
              >
                <div className="space-y-4">
                  
                  {/* Top Badges & Edit Text button */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase font-bold">
                        {ev.type}
                      </span>
                      {onOpenEditTextModal && (
                        <button
                          onClick={() => onOpenEditTextModal('events', ev.id)}
                          className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/20 text-[11px] font-mono font-bold transition-all flex items-center gap-1"
                          title="Edit text for this event"
                        >
                          <Edit3 className="w-3 h-3" />
                          <span>Edit Text</span>
                        </button>
                      )}
                    </div>
                    <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{ev.date}</span>
                    </span>
                  </div>

                  {/* Title & Brand */}
                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">
                      {ev.title}
                    </h3>
                    <div className="text-xs font-mono text-cyan-400 mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{ev.location}</span>
                      <span className="text-neutral-600">•</span>
                      <span className="text-neutral-300">{ev.brand}</span>
                    </div>
                  </div>

                  {/* Photo Display Grid Header */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider font-bold flex items-center gap-1">
                        <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Showcase Photos ({allPhotos.length})</span>
                      </span>

                      <div className="flex items-center gap-2">
                        {isModified && (
                          <button
                            onClick={() => clearEventPhotos(ev.id)}
                            className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-white/10 text-neutral-400 hover:text-amber-400 text-[10px] font-mono transition-colors flex items-center gap-1"
                            title="Reset all photos to default"
                          >
                            <RefreshCw className="w-3 h-3" />
                            <span>Reset Photos</span>
                          </button>
                        )}
                        <button
                          onClick={() => setUploadingEvent({ id: ev.id, title: ev.title })}
                          className="px-3 py-1.5 rounded-xl bg-cyan-500 text-black font-extrabold hover:bg-cyan-400 text-xs font-mono transition-all flex items-center gap-1.5 shadow-lg shadow-cyan-500/20"
                        >
                          <Upload className="w-3.5 h-3.5 stroke-[3]" />
                          <span>Upload Photo</span>
                        </button>
                      </div>
                    </div>

                    {/* Interactive Photo Grid Showcase */}
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {allPhotos.map((photoUrl, pIdx) => {
                        const isUserUploaded = userUploadedPhotos.includes(photoUrl);

                        return (
                          <div
                            key={pIdx}
                            onClick={() => setLightboxState({ photos: allPhotos, index: pIdx, title: ev.title })}
                            className="h-28 rounded-2xl overflow-hidden border border-white/10 relative group/photo cursor-pointer hover:border-cyan-400 transition-all shadow-md bg-neutral-900"
                          >
                            <img
                              src={photoUrl}
                              alt={`${ev.title} photo ${pIdx + 1}`}
                              className="w-full h-full object-cover group-hover/photo:scale-110 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                            
                            {/* Overlay hover prompt */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                              <span className="text-[10px] font-mono text-cyan-300 font-bold bg-black/80 px-2 py-0.5 rounded border border-cyan-400/40">
                                Expand
                              </span>
                            </div>

                            {/* Badge if custom uploaded */}
                            {isUserUploaded && (
                              <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-cyan-400 text-black text-[9px] font-mono font-black shadow pointer-events-none">
                                Custom
                              </div>
                            )}

                            {/* Delete photo button (Works on ANY photo) */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                removeEventPhoto(ev.id, photoUrl);
                              }}
                              className="absolute top-1 right-1 p-1.5 rounded-lg bg-red-600/90 text-white hover:bg-red-500 hover:scale-110 transition-all shadow-lg z-10"
                              title="Delete this picture"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        );
                      })}

                      {/* Add Photo Tile Prompt */}
                      <div
                        onClick={() => setUploadingEvent({ id: ev.id, title: ev.title })}
                        className="h-28 rounded-2xl border-2 border-dashed border-cyan-500/30 hover:border-cyan-400 bg-cyan-500/5 hover:bg-cyan-500/10 flex flex-col items-center justify-center p-2 cursor-pointer transition-all text-center group/add"
                      >
                        <Upload className="w-5 h-5 text-cyan-400 group-hover/add:scale-110 transition-transform mb-1" />
                        <span className="text-[10px] font-mono font-bold text-cyan-300">+ Add Picture</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                    {ev.description}
                  </p>

                </div>

                {/* Highlights Pills */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {ev.highlights.map((h, hIdx) => (
                    <span key={hIdx} className="px-2.5 py-1 rounded-md bg-[#0D1426] border border-cyan-500/20 text-[11px] font-mono text-cyan-300">
                      ✓ {h}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Upload Modal Trigger */}
        {uploadingEvent && (
          <PhotoUploadModal
            isOpen={!!uploadingEvent}
            targetType="event"
            targetId={uploadingEvent.id}
            targetTitle={uploadingEvent.title}
            onClose={() => setUploadingEvent(null)}
          />
        )}

        {/* Full-screen Lightbox Gallery Modal */}
        {lightboxState && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 animate-fade-in">
            <div className="relative max-w-5xl w-full flex flex-col items-center justify-center space-y-4">
              
              {/* Close Button */}
              <button
                onClick={() => setLightboxState(null)}
                className="absolute -top-12 right-0 p-2.5 rounded-full bg-neutral-900 border border-white/20 text-white hover:bg-neutral-800 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Main Photo Frame */}
              <div className="relative w-full max-h-[75vh] flex items-center justify-center rounded-3xl overflow-hidden border border-cyan-500/30 bg-black shadow-2xl">
                <img
                  src={lightboxState.photos[lightboxState.index]}
                  alt={`${lightboxState.title} - Photo ${lightboxState.index + 1}`}
                  className="max-h-[75vh] w-auto object-contain"
                  referrerPolicy="no-referrer"
                />

                {/* Left/Right Nav */}
                {lightboxState.photos.length > 1 && (
                  <>
                    <button
                      onClick={() => setLightboxState({
                        ...lightboxState,
                        index: (lightboxState.index - 1 + lightboxState.photos.length) % lightboxState.photos.length
                      })}
                      className="absolute left-4 p-3 rounded-full bg-black/70 border border-white/20 text-white hover:bg-cyan-500 hover:text-black transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => setLightboxState({
                        ...lightboxState,
                        index: (lightboxState.index + 1) % lightboxState.photos.length
                      })}
                      className="absolute right-4 p-3 rounded-full bg-black/70 border border-white/20 text-white hover:bg-cyan-500 hover:text-black transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Footer Title & Counter */}
              <div className="flex items-center justify-between w-full px-2 text-xs font-mono text-neutral-300">
                <span className="font-bold text-cyan-400">{lightboxState.title}</span>
                <span>Photo {lightboxState.index + 1} of {lightboxState.photos.length}</span>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
