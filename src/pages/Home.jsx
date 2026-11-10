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
      name: 'Who is the leading sign board manufacturer in Patna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kashish Ad® (Estd. 1985 by S Haidar) is Patna’s foremost commercial sign board manufacturer and digital printing plant. Located at Capital Tower, Fraser Road, Kashish Ad operates 16+ industrial machines in-house including 3.2m UV Roll-to-Roll printers, Flatbed UV systems, Roland plotters, fiber laser cutters, and CNC routers.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the price of 3D LED acrylic letter sign boards in Patna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At Kashish Ad, sign board prices are factory-direct. Standard glow sign boxes start from ₹120–₹160/sq.ft, 3D LED acrylic letters range from ₹90–₹160 per inch (powered by Samsung/LG waterproof LED modules), and architectural SS 304 titanium letter boards range from ₹140–₹220 per inch.'
      }
    },
    {
      '@type': 'Question',
      name: 'Where is Kashish Ad located in Patna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kashish Ad is located at Capital Tower, A-6 & B-16, Fraser Rd, Old Jakkanpur, Lodipur, Patna, Bihar 800001 (Near Canara Bank / Chhabra Sports, opposite Patna Junction corridor).'
      }
    },
    {
      '@type': 'Question',
      name: 'What services does Kashish Ad specialize in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kashish Ad specializes in UV Digital Flatbed & Roll-to-Roll Printing, Solvent Vinyl Printing, 3D Acrylic LED Letters, Stainless Steel 304 Sign Boards, Frontlit Flex, Glow Sign Boxes, Roll-up Standees, and CNC Laser Jali Gate Cutting.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can I place an urgent printing order at Kashish Ad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can directly call our primary hotline at 09308327111 or message us on WhatsApp at 919308327111 for same-day fabrication and 4-hour express dispatch.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does Kashish Ad offer delivery and installation outside Patna across Bihar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we manufacture in-house at Fraser Road, Patna and provide structural installation and express delivery across all 38 districts of Bihar including Muzaffarpur, Gaya, Bhagalpur, Darbhanga, Begusarai, Ara, Purnia, Chapra, and Motihari.'
      }
    }
  ]
};

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <>
      <SEO
        title="Kashish Ad® | Patna Signage & LED Sign Board Manufacturer"
        description="Patna's premier sign board manufacturer & digital printing house at Capital Tower, Fraser Road. 3D LED acrylic letters, UV printing, glow signs, CNC jali. 4.6★ (62 Google Reviews). Call 09308327111."
        keywords="patna signage, signage in patna, sign board manufacturer in patna, led sign board maker patna, digital printing patna, glow sign board patna, 3d acrylic letters patna, uv printing in patna, uv roll to roll printer patna, flex printing patna fraser road, capital tower printing, ss sign board patna, cnc jali cutting patna, kashish ad"
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
