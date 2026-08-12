import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CoverSection } from './components/CoverSection';
import { AboutSection } from './components/AboutSection';
import { JourneySection } from './components/JourneySection';
import { CurrentRoleSection } from './components/CurrentRoleSection';
import { LeadershipSection } from './components/LeadershipSection';
import { BrandLaunchSection } from './components/BrandLaunchSection';
import { ProductLaunchSection } from './components/ProductLaunchSection';
import { RetailOfflineSection } from './components/RetailOfflineSection';
import { EventsGallerySection } from './components/EventsGallerySection';
import { EcosystemSection } from './components/EcosystemSection';
import { PerformanceSection } from './components/PerformanceSection';
import { ContentCreativeSection } from './components/ContentCreativeSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { IndustrySection } from './components/IndustrySection';
import { ToolsSection } from './components/ToolsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { HighlightsSection } from './components/HighlightsSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ValuePropsSection } from './components/ValuePropsSection';
import { PersonalBrandSection } from './components/PersonalBrandSection';
import { AIMarketingAuditTool } from './components/AIMarketingAuditTool';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ResumeModal } from './components/ResumeModal';
import { EditTextModal } from './components/EditTextModal';

export function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactPrefill, setContactPrefill] = useState('');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [editTextModalOpen, setEditTextModalOpen] = useState(false);
  const [editTextInitialTab, setEditTextInitialTab] = useState<'profile' | 'brands' | 'career' | 'events'>('profile');
  const [editTextInitialEventId, setEditTextInitialEventId] = useState<string | undefined>(undefined);

  const handleOpenContact = (prefill?: string) => {
    setContactPrefill(prefill || '');
    setContactModalOpen(true);
  };

  const handleOpenEditTextModal = (
    tab: 'profile' | 'brands' | 'career' | 'events' = 'profile',
    eventId?: string
  ) => {
    setEditTextInitialTab(tab);
    setEditTextInitialEventId(eventId);
    setEditTextModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#04060A] text-white font-sans selection:bg-cyan-500 selection:text-black">
      {/* Navigation Header */}
      <Navbar
        onOpenContact={handleOpenContact}
        onOpenResumeModal={() => setResumeModalOpen(true)}
        onOpenEditTextModal={handleOpenEditTextModal}
      />

      {/* Main Portfolio Sections */}
      <main id="main-content">
        {/* 01 — COVER */}
        <CoverSection
          onOpenContact={handleOpenContact}
          onOpenResumeModal={() => setResumeModalOpen(true)}
          onOpenEditTextModal={handleOpenEditTextModal}
        />

        {/* 02 — ABOUT ME */}
        <AboutSection />

        {/* 03 — MY MARKETING JOURNEY */}
        <JourneySection onOpenEditTextModal={handleOpenEditTextModal} />

        {/* 04 — CURRENT ROLE */}
        <CurrentRoleSection onOpenEditTextModal={handleOpenEditTextModal} />

        {/* 05 — LEADERSHIP */}
        <LeadershipSection />

        {/* 06 — BRAND LAUNCH & MARKET EXPANSION */}
        <BrandLaunchSection />

        {/* 07 — PRODUCT LAUNCH */}
        <ProductLaunchSection />

        {/* 08 — RETAIL & OFFLINE MARKETING */}
        <RetailOfflineSection />

        {/* 09 — MARKETING ACTIVITIES & EVENTS GALLERY */}
        <EventsGallerySection onOpenEditTextModal={handleOpenEditTextModal} />

        {/* 10 — DIGITAL MARKETING ECOSYSTEM */}
        <EcosystemSection />

        {/* 10 — PERFORMANCE MARKETING */}
        <PerformanceSection />

        {/* 11 — CONTENT & CREATIVE */}
        <ContentCreativeSection />

        {/* 12 — MARKETING CAPABILITIES */}
        <CapabilitiesSection />

        {/* 13 — INDUSTRY EXPERIENCE */}
        <IndustrySection />

        {/* 14 — SOFTWARE & TOOLS */}
        <ToolsSection />

        {/* 15 — PROFESSIONAL CERTIFICATIONS */}
        <CertificationsSection />

        {/* 16 — CAREER HIGHLIGHTS */}
        <HighlightsSection />

        {/* 17 — MY MARKETING PHILOSOPHY */}
        <PhilosophySection />

        {/* 18 — WHAT I BRING TO A BUSINESS */}
        <ValuePropsSection />

        {/* 19 — PERSONAL BRAND */}
        <PersonalBrandSection onOpenContact={handleOpenContact} />

        {/* AI GO-TO-MARKET AUDIT TOOL */}
        <AIMarketingAuditTool />

        {/* 20 — CONTACT */}
        <ContactSection onOpenResumeModal={() => setResumeModalOpen(true)} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Modals */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        prefillMessage={contactPrefill}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <EditTextModal
        isOpen={editTextModalOpen}
        onClose={() => setEditTextModalOpen(false)}
        initialTab={editTextInitialTab}
        initialEventId={editTextInitialEventId}
      />
    </div>
  );
}

export default App;
