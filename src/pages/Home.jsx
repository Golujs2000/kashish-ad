import React, { useState } from 'react';
import SEO from '../components/SEO';
import LightboxModal from '../components/LightboxModal';
import HeroBannerCarousel from '../components/HeroBannerCarousel';
import HeroSection from '../components/home/HeroSection';
import StatsBar from '../components/home/StatsBar';
import ServiceCategories from '../components/home/ServiceCategories';
import PortfolioSolutions from '../components/home/PortfolioSolutions';
import BusinessSolutions from '../components/home/BusinessSolutions';
import MachineryShowcase from '../components/home/MachineryShowcase';
import ClientsSection from '../components/home/ClientsSection';
import CtaBanner from '../components/home/CtaBanner';
import ContactMapSection from '../components/home/ContactMapSection';

// Schema.org FAQPage for Google Rich Snippets
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is Kashish Ad located in Patna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kashish Ad is located at Capital Tower, A-6 & B-16, Fraser Rd, Old Jakkanpur, Lodipur, Patna, Bihar 800001 (Near Chhabra Sports).'
      }
    },
    {
      '@type': 'Question',
      name: 'What services does Kashish Ad specialize in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kashish Ad specializes in UV Digital Flatbed Printing, Solvent Vinyl Printing, 3D Acrylic LED Letters, Stainless Steel Sign Boards, Frontlit Flex, Glow Sign Boards, Roll-up Standees, and CNC Laser Jali Cutting.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can I place an urgent printing order at Kashish Ad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can directly call our primary hotline at 09308327111 or message us on WhatsApp at 919308327111 for same-day fabrication and dispatch.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does Kashish Ad offer delivery outside Patna across Bihar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we manufacture in-house at Fraser Road, Patna and supply signage, banners, and digital prints across all districts of Bihar including Muzaffarpur, Gaya, Bhagalpur, Darbhanga, and Purnia.'
      }
    }
  ]
};

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <>
      <SEO
        title="Kashish Ad® | Patna's Leading Digital Printing & 3D Sign Board Manufacturer"
        description="Patna's premier manufacturing center for UV Flatbed, Solvent Vinyl, 3D LED Acrylic Letters, and Architectural Signage. 4.6★ (62 Google Reviews). Call 09308327111."
        keywords="digital printing patna, signage board patna, led sign board maker patna, 3d acrylic letters patna, uv printing bihar, glow sign board fraser road, capital tower printing"
        canonicalUrl="/"
        structuredData={[FAQ_SCHEMA]}
      />

      {/* 0. HERO BANNER CAROUSEL (Desktop & Tablet only - Hidden on Mobile View) */}
      {/* <section className="hidden sm:block bg-white pt-8 pb-10 sm:pt-10 sm:pb-12 lg:pt-12 lg:pb-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroBannerCarousel />
        </div>
      </section> */}

      {/* 1. HERO SECTION (Typography, Service Icons, CTAs & 3D Showcase) */}
      <HeroSection />

      {/* 2. STATS & TRUST BAR */}
      <StatsBar />

      {/* 3. EVERYTHING YOU NEED TO BUILD YOUR BRAND (12 Core Services in 4-Column Grid) */}
      <ServiceCategories />

      {/* 4. OUR PRINTING & BRANDING SOLUTIONS (Dark Contrast Project Grid) */}
      <PortfolioSolutions onSelectPhoto={setSelectedPhoto} />

      {/* 5. BRANDING SOLUTIONS FOR EVERY BUSINESS (5 Industry Verticals) */}
      <BusinessSolutions />

      {/* 5.5 IN-HOUSE PRODUCTION PLANT & MACHINERY (15+ Machines & Metrics) */}
      <MachineryShowcase />

      {/* 5.8 OUR CLIENTS (Extracted from Official Portfolio PDF) */}
      <ClientsSection />

      {/* 6. HIGH-CONVERSION CTA BANNER */}
      <CtaBanner />

      {/* 7. CONTACT US & WORKSHOP LOCATION WITH LIVE GOOGLE MAP */}
      <ContactMapSection />

      {/* Lightbox Modal for gallery preview */}
      {selectedPhoto && (
        <LightboxModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </>
  );
}
