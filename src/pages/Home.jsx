import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { MACHINERY } from '../data/machinery';
import { GALLERY_ITEMS } from '../data/gallery';
import LightboxModal from '../components/LightboxModal';
import SEO from '../components/SEO';
import HeroSlider from '../components/HeroSlider';

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // 9 Best seller items for 3x3 grid matching inspiration pic
  const bestSellers = [
    PRODUCTS.find(p => p.id === 'led-acrylic-letters') || PRODUCTS[2],
    PRODUCTS.find(p => p.id === 'solvent-vinyl') || PRODUCTS[1],
    PRODUCTS.find(p => p.id === 'ss-sign-board') || PRODUCTS[3],
    PRODUCTS.find(p => p.id === 'uv-digital') || PRODUCTS[0],
    PRODUCTS.find(p => p.id === 'backlit-board') || PRODUCTS[4],
    PRODUCTS.find(p => p.id === 'label-sticker') || PRODUCTS[7],
    PRODUCTS.find(p => p.id === 'rollup-standee') || PRODUCTS[6],
    PRODUCTS.find(p => p.id === 'frontlit-flex') || PRODUCTS[5],
    PRODUCTS.find(p => p.id === 'cnc-jali') || PRODUCTS[11]
  ];

  // Schema.org FAQPage for Google Rich Snippets
  const faqSchema = {
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

  return (
    <div className="bg-white min-h-screen text-slate-800">
      <SEO
        title="Kashish Ad® | Patna's Leading Digital Printing & LED Sign Board Manufacturer"
        description="Kashish Ad® (Capital Tower, Fraser Rd, Patna) - Premier digital printing service & sign board manufacturer. UV flatbed printing, solvent vinyl, 3D acrylic LED letters, glow signs, CNC jali gates. Call 09308327111."
        keywords="digital printing patna, signage board patna, uv printing patna, led acrylic letters patna, vinyl printing bihar, glow sign board patna, kashish ad fraser road, capital tower printing"
        canonicalUrl="http://localhost:3000/"
        structuredData={[faqSchema]}
      />
      {/* 1. Hero Section - Inspired by reference with Generous White Space */}
      <section className="relative overflow-hidden bg-white pt-14 pb-12 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-36 mb-8 sm:mb-12 lg:mb-0">
        {/* Subtle Blueprint/Graph Grid Pattern matching reference (Enlarged 54px squares) */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.75] bg-grid-pattern" />
        {/* Subtle gradient overlay to soften edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none lg:opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-7 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eff4fb] border border-blue-100 text-[#1a3a6b] text-xs font-bold uppercase tracking-wider shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#e85c1a] animate-pulse"></span>
                Capital Tower, Fraser Road • Patna's Direct Printing Hub
              </div>

              {/* Exact typography layout from inspiration */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-black tracking-tight leading-[1.05]">
                <span className="text-[#1a3a6b] block">WE DESIGN</span>
                <span className="text-[#1a3a6b] block">THE BEST</span>
                <span className="text-[#e85c1a] block mt-1">WE PRINT YOUR THEME.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                We combine industrial-grade production capacity with precision design to create physical branding that stands out and is built to last.
              </p>

              {/* Action buttons matching inspiration */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a
                  href="https://wa.me/919308327111?text=Hello%20Kashish%20Ad,%20I%20want%20to%20get%20an%20instant%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-black text-xs uppercase tracking-wider text-white bg-[#e85c1a] hover:bg-[#cf4e12] shadow-lg shadow-orange-500/25 active:scale-95 transition-all"
                >
                  <span>GET A QUOTE</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-[#1a3a6b] bg-white hover:bg-slate-50 border-2 border-[#1a3a6b] transition-all"
                >
                  <span>EXPLORE PRODUCTS</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Card - Interactive Hero Slider with Mobile Bottom Spacing */}
            <div className="lg:col-span-6 relative w-full mt-8 sm:mt-10 lg:mt-0 mb-6 sm:mb-8 lg:mb-0">
              <HeroSlider />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Dark Navy Stats Bar (#1a3a6b) with Colorful Modern Icons */}
      <section className="bg-[#1a3a6b] text-white py-16 sm:py-20 lg:py-24 border-y border-[#12284c] relative overflow-hidden">
        {/* Subtle decorative glow behind stats */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,#234c8a_0%,transparent_70%)] pointer-events-none opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 text-center divide-y lg:divide-y-0 lg:divide-x divide-blue-800/60">

            {/* Stat 1: 4.6 Google Reviews with Official Multi-Color Google G */}
            <div className="pt-4 lg:pt-0 flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-lg shadow-black/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {/* Official Google G Logo */}
                <svg className="w-7 h-7" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-amber-400">4.6</span>
                <span className="text-amber-400 text-xl font-bold">★</span>
              </div>
              <span className="block text-xs uppercase tracking-widest text-slate-200 font-bold mt-1">61 Google Reviews</span>
              <span className="text-[11px] text-blue-200/80 font-medium mt-0.5">Top-Rated in Patna</span>
            </div>

            {/* Stat 2: 1,00,000+ Projects Delivered with Cyan/Blue Badge */}
            <div className="pt-6 lg:pt-0 flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0284c7] to-[#38bdf8] text-white shadow-lg shadow-cyan-500/25 flex items-center justify-center mb-3">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="block font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white">1,00,000+</span>
              <span className="block text-xs uppercase tracking-widest text-[#e85c1a] font-bold mt-1">Projects Delivered</span>
              <span className="text-[11px] text-blue-200/80 font-medium mt-0.5">Retail, Corporate &amp; Gov</span>
            </div>

            {/* Stat 3: 15+ Industrial Machinery with Vibrant Orange/Amber Badge */}
            <div className="pt-6 lg:pt-0 flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#ea580c] to-[#fb923c] text-white shadow-lg shadow-orange-500/25 flex items-center justify-center mb-3">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <span className="block font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white">15+</span>
              <span className="block text-xs uppercase tracking-widest text-[#e85c1a] font-bold mt-1">Industrial Machines</span>
              <span className="text-[11px] text-blue-200/80 font-medium mt-0.5">UV, Roland &amp; Fiber Laser</span>
            </div>

            {/* Stat 4: 24 Hrs Delivery with Emerald/Lime Speed Badge */}
            <div className="pt-6 lg:pt-0 flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#059669] to-[#34d399] text-white shadow-lg shadow-emerald-500/25 flex items-center justify-center mb-3">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="block font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white">24 Hrs</span>
              <span className="block text-xs uppercase tracking-widest text-[#e85c1a] font-bold mt-1">Express Delivery</span>
              <span className="text-[11px] text-blue-200/80 font-medium mt-0.5">Same-Day Rush Dispatch</span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. "Your heavy-duty production partner." */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-36 bg-white">
        {/* Subtle Architectural Blueprint Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.5] bg-grid-pattern-subtle" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
            {/* Left text */}
            <div className="lg:col-span-6 space-y-7">
              <div className="text-xs font-black uppercase tracking-widest text-[#e85c1a]">
                COMMERCIAL FABRICATION &amp; PRINTING
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#1a3a6b] tracking-tight">
                Your heavy-duty production partner.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether you need a single illuminated glow sign for a Fraser Road storefront or a 10,000 sq.ft retail rollout across Bihar, Kashish Ad® delivers industrial precision, Pantone color accuracy, and zero middleman markups.
              </p>

              {/* Service checklist pills */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800">
                  <span className="text-[#e85c1a]">✓</span> UV Flatbed Direct Print
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800">
                  <span className="text-[#e85c1a]">✓</span> Solvent Vinyl Banners
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800">
                  <span className="text-[#e85c1a]">✓</span> 3D LED Acrylic Letters
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800">
                  <span className="text-[#e85c1a]">✓</span> SS 304 Signboards
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800">
                  <span className="text-[#e85c1a]">✓</span> CNC Laser Gates &amp; Jali
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800">
                  <span className="text-[#e85c1a]">✓</span> Rollup Display Standees
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/919308327111?text=Hello%20Kashish%20Ad,%20I%20want%20to%20discuss%20a%20project%20with%20your%20production%20team."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#e85c1a] hover:text-[#cf4e12] transition-colors"
                >
                  <span>Connect With Technical Estimator</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Right Workshop image framed with orange border accent */}
            <div className="lg:col-span-6">
              <div className="relative p-2 rounded-3xl border-2 border-[#e85c1a] bg-white shadow-xl">
                <img
                  src="/assets/images/kashish-ad-plant-workshop-inside.jpg"
                  alt="Kashish Ad Printing Plant & Machinery Workshop"
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl"
                />
                <div className="absolute top-6 right-6 bg-[#1a3a6b] text-white px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-md">
                  In-House Plant
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "Our Best Sellers" - 3x3 Grid with Generous Breathing Room */}
      <section className="py-24 sm:py-32 lg:py-36 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs font-black uppercase tracking-widest text-[#e85c1a]">
              PROVEN COMMERCIAL QUALITY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#1a3a6b] mt-2">
              Our Best Sellers
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              A focused selection of our most requested commercial digital print and signage products.
            </p>
          </div>

          {/* 3x3 Grid of 9 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group"
              >
                {/* Image */}
                <Link to={`/services/${item.id}`} className="h-56 bg-slate-100 overflow-hidden relative block">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#e85c1a] text-white shadow-sm">
                    {item.badge || 'Popular'}
                  </span>
                </Link>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <Link to={`/services/${item.id}`} className="block">
                      <h3 className="font-display font-bold text-base text-[#1a3a6b] group-hover:text-[#e85c1a] transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                    </Link>
                    <div className="mt-1 flex items-baseline gap-1">
                      <span className="text-sm font-black text-[#e85c1a]">{item.price}</span>
                      <span className="text-xs text-slate-500 font-medium">{item.unit}</span>
                    </div>
                    <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Dual Action: View Details + WhatsApp */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
                    <Link
                      to={`/services/${item.id}`}
                      className="flex-1 inline-flex items-center justify-center py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#1a3a6b] hover:text-white bg-slate-100 hover:bg-[#1a3a6b] border border-slate-200 transition-all text-center"
                    >
                      View Specs →
                    </Link>
                    <a
                      href={`https://wa.me/919308327111?text=${encodeURIComponent(`Hello Kashish Ad, I want to enquire about "${item.title}". Please provide quotation.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-[#e85c1a] hover:bg-[#cf4e12] transition-all text-center"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12 sm:mt-16">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider text-white bg-[#1a3a6b] hover:bg-[#e85c1a] shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:scale-98"
            >
              <span>VIEW COMPLETE 22+ PRODUCTS CATALOG</span>
              <span className="text-base sm:text-lg leading-none">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Dark Navy Callout Banner (#1a3a6b) */}
      <section className="bg-[#1a3a6b] text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3 text-center lg:text-left">
              <span className="inline-block px-3 py-1 rounded-md text-[11px] font-black uppercase tracking-wider bg-[#e85c1a] text-white">
                SPECIAL TRADE RATES
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-white">
                Get the Best Offers &amp; Deals
              </h2>
              <p className="text-sm text-slate-300 max-w-xl">
                Looking for wholesale commercial printing, bulk flex banners, or corporate retail signage across Bihar? Submit your requirement for prioritized quotation.
              </p>
            </div>

            {/* Quick action bar matching reference */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 p-2 rounded-2xl backdrop-blur-md border border-white/20 flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Enter Phone Number or Project..."
                  className="flex-1 px-4 py-3 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-xs font-semibold focus:outline-none"
                  id="quick-deal-input"
                />
                <a
                  href="https://wa.me/919308327111?text=Hello%20Kashish%20Ad,%20I%20saw%20your%20offers%20on%20website%20and%20want%20the%20best%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider text-white bg-[#e85c1a] hover:bg-[#cf4e12] whitespace-nowrap text-center transition-colors"
                >
                  GET DEALS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. "The complete matrix of our printing & design services" */}
      <section className="py-24 sm:py-32 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-18 sm:mb-20">
            <span className="text-xs font-black uppercase tracking-widest text-[#e85c1a]">
              CAPABILITIES DIRECTORY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#1a3a6b] mt-1">
              The complete matrix of our printing &amp; design services.
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Manufactured with zero third-party outsourcing directly in our Fraser Road, Patna facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Matrix 1 */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
              <h3 className="font-display font-bold text-base text-[#1a3a6b] pb-3 border-b-2 border-[#e85c1a]">
                Large Format &amp; Vinyl
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-700">
                <li className="flex items-center gap-2"><span className="text-[#e85c1a] font-bold">✓</span> UV Flatbed Direct on Acrylic</li>
                <li className="flex items-center gap-2"><span className="text-[#e85c1a] font-bold">✓</span> Solvent Vinyl Showroom Wraps</li>
                <li className="flex items-center gap-2"><span className="text-[#e85c1a] font-bold">✓</span> Frontlit &amp; Star Flex Banners</li>
                <li className="flex items-center gap-2"><span className="text-[#e85c1a] font-bold">✓</span> One-Way Vision Glass Film</li>
                <li className="flex items-center gap-2"><span className="text-[#e85c1a] font-bold">✓</span> 3D Custom Wallpaper Murals</li>
                <li className="flex items-center gap-2"><span className="text-[#e85c1a] font-bold">✓</span> Eco-Solvent Matte Lamination</li>
              </ul>
            </div>

            {/* Matrix 2 */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
              <h3 className="font-display font-bold text-base text-[#1a3a6b] pb-3 border-b-2 border-[#e85c1a]">
                Signage &amp; 3D Letters
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-700">
                <li className="flex items-center gap-2"><span className="text-[#e85c1a] font-bold">✓</span> Glossy LED Acrylic 3D Letters</li>
                <li className="flex items-center gap-2"><span className="text-[#e85c1a] font-bold">✓</span> SS 304 Stainless Steel Letters</li>
                <li className="flex items-center gap-2"><span className="text-[#e85c1a] font-bold">✓</span> Double-Sided Glow Sign Boards</li>
                <li className="flex items-center gap-2"><span className="text-[#e85c1a] font-bold">✓</span> Red ACP Sheet Cladding Facades</li>
                <li className="flex items-center gap-2"><span className="text-[#e85c1a] font-bold">✓</span> Titanium Gold Mirror Plating</li>
                <li className="flex items-center gap-2"><span className="text-[#e85c1a] font-bold">✓</span> Ultra-Slim Snap Light Boxes</li>
              </ul>
            </div>

            {/* Matrix 3 */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
              <h3 className="font-display font-bold text-base text-[#1a3a6b] pb-3 border-b-2 border-[#e85c1a]">
                Architectural &amp; Corporate
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-700">
                <li className="flex items-center gap-2"><span className="text-[#e85c1a] font-bold">✓</span> Fiber Laser Metal Gates &amp; Screens</li>
                <li className="flex items-center gap-2"><span className="text-[#e85c1a] font-bold">✓</span> CNC Router MDF / WPC Jali Work</li>
                <li className="flex items-center gap-2"><span className="text-[#e85c1a] font-bold">✓</span> Rollup Banner Standees (6x3 ft)</li>
                <li className="flex items-center gap-2"><span className="text-[#e85c1a] font-bold">✓</span> Die-Cut Vinyl Packaging Labels</li>
                <li className="flex items-center gap-2"><span className="text-[#e85c1a] font-bold">✓</span> Fabric Sublimation Backdrops</li>
                <li className="flex items-center gap-2"><span className="text-[#e85c1a] font-bold">✓</span> Acrylic Mandir &amp; Name Plates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. "Ready to Upgrade Your Branding?" - Centered CTA matching reference */}
      <section className="py-16 bg-[#eff4fb] border-y border-blue-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-display font-black text-[#1a3a6b]">
            Ready to Upgrade Your Branding?
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            From design proofs to fabrication and on-site elevation rigging in Patna, we handle everything under one roof.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/919308327111?text=Hello%20Kashish%20Ad,%20I%20am%20ready%20to%20upgrade%20my%20branding.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black text-xs uppercase tracking-wider text-white bg-[#e85c1a] hover:bg-[#cf4e12] shadow-lg shadow-orange-500/25 active:scale-95 transition-all"
            >
              <span>CONNECT DIRECTLY WITH WORKSHOP (09308327111)</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. "Our Client Reviews" */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-36 bg-white">
        {/* Subtle Architectural Blueprint Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.55] bg-grid-pattern-subtle" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-amber-50 border border-amber-200 shadow-2xs mb-4">
              <span className="text-xl">⭐</span>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-black text-base text-slate-900">4.6</span>
                  <div className="flex text-amber-500 text-xs">★★★★★</div>
                  <span className="text-xs font-bold text-slate-700">Google Verified</span>
                </div>
                <div className="text-[11px] text-slate-600 font-medium">Rated 4.6 out of 5 based on <strong>61 Google Reviews</strong> in Patna</div>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-[#1a3a6b] mt-1">
              Our Client Reviews
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Real feedback from local Patna businesses, retail showrooms, and coordinators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border-t-4 border-[#e85c1a] border-x border-b border-slate-200 shadow-card flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-[#e85c1a] text-sm tracking-wider">★★★★★</div>
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "Got our complete showroom LED acrylic 3D letter sign board done by Kashish Ad. The finish and brightness at night is phenomenal. Best in Fraser Road!"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1a3a6b] text-white font-bold text-xs flex items-center justify-center">
                  JH
                </div>
                <div>
                  <strong className="block text-xs text-slate-900 font-bold">Jawed Haider</strong>
                  <span className="block text-[11px] text-slate-500">Showroom Owner • Patna</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border-t-4 border-[#e85c1a] border-x border-b border-slate-200 shadow-card flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-[#e85c1a] text-sm tracking-wider">★★★★★</div>
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "High speed flex and vinyl printing. Needed urgent event hoardings and they delivered within 4 hours with crisp colors and heavy eyelet stitching."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1a3a6b] text-white font-bold text-xs flex items-center justify-center">
                  RK
                </div>
                <div>
                  <strong className="block text-xs text-slate-900 font-bold">Rehan Khan</strong>
                  <span className="block text-[11px] text-slate-500">Event Coordinator • Bihar</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border-t-4 border-[#e85c1a] border-x border-b border-slate-200 shadow-card flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-[#e85c1a] text-sm tracking-wider">★★★★★</div>
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "Their UV flatbed printer did wonders on our wooden office partitions and acrylic name plates. Highly professional team and transparent rates."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1a3a6b] text-white font-bold text-xs flex items-center justify-center">
                  PS
                </div>
                <div>
                  <strong className="block text-xs text-slate-900 font-bold">Pawan Kumar Singh</strong>
                  <span className="block text-[11px] text-slate-500">Architect &amp; Contractor • Patna</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Google Map Location Frame */}
      <section className="pb-24 sm:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#e85c1a]">STOREFRONT LOCATION</span>
              <h3 className="text-xl font-display font-black text-[#1a3a6b]">Kashish Ad® at Capital Tower, Fraser Road</h3>
            </div>
            <a
              href="https://maps.google.com/?cid=13267923724395025653"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#e85c1a] hover:underline"
            >
              Open in Google Maps App ↗
            </a>
          </div>

          <div className="h-96 rounded-3xl border-2 border-slate-200 overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2843.5510078491084!2d85.13891387416965!3d25.612511514756072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed585b8e0da1c9%3A0xb8215c141ed214f5!2sKashish%20Ad%C2%AE!5e1!3m2!1sen!2sin!4v1788667065067!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Kashish Ad Google Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <LightboxModal item={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      )}
    </div>
  );
}
