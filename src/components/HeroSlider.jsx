import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalSlides = 4;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play timer (5 seconds)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, currentSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div
      className="relative w-full rounded-2xl sm:rounded-3xl border-2 border-[#1a3a6b]/15 bg-white shadow-2xl overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Kashish Ad Hero Showcase Slider"
    >
      {/* Slides Container with Generous White Space */}
      <div className="relative overflow-hidden w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex flex-col justify-between bg-gradient-to-b from-white via-slate-50/40 to-slate-100/60">

        {/* =========================================================================
            SLIDE 1: "YOUR BRAND. EVERYWHERE." (Inspired by Shyam Advertising Slide 1)
           ========================================================================= */}
        <div
          className={`transition-opacity duration-700 ease-in-out ${currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none absolute inset-0 z-0'
            } p-5 sm:p-7 lg:p-8 flex flex-col justify-between h-full`}
        >
          {/* Top Brand & Header Section */}
          <div>
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5 mb-3">
              <div className="flex items-center gap-2">
                <img
                  src="/assets/logo-icon.png"
                  alt="Kashish Ad"
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <div className="inline-flex items-start">
                    <span className="text-sm sm:text-base font-raphtalia font-bold tracking-wider text-[#1a3a6b] uppercase block leading-none">
                      Kashish Ad
                    </span>
                    <span className="font-sans text-[9px] sm:text-[10px] font-black text-[#1a3a6b] ml-0.5 leading-none">
                      ®
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-[#e85c1a] tracking-widest uppercase block">
                    Quality • Trust • Commitment
                  </span>
                </div>
              </div>

              {/* Decorative Dot Grid */}
              <div className="hidden sm:grid grid-cols-4 gap-1 opacity-25">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-slate-700"></div>
                ))}
              </div>
            </div>

            {/* Main Headline */}
            <div className="mb-4 sm:mb-5">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black font-display tracking-tight text-[#1a3a6b] uppercase leading-none">
                Your Brand. <span className="text-[#e85c1a]">Everywhere.</span>
              </h2>
              <h3 className="text-[10px] sm:text-xs font-bold text-[#1a3a6b]/80 uppercase tracking-wider mt-1.5">
                Complete Advertising Solutions That Get You Noticed
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                From creative concept to precision CNC fabrication & on-site installation, we create impactful signage that commands attention across Bihar.
              </p>
            </div>

            {/* 4 Pillars Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="bg-[#eff4fb] border border-blue-100 rounded-xl p-2 sm:p-2.5 text-center">
                <div className="text-[#1a3a6b] font-bold text-[10px] sm:text-[11px] uppercase">Creative Design</div>
                <div className="text-[9px] text-slate-500">Custom 2D/3D Mockups</div>
              </div>
              <div className="bg-[#eff4fb] border border-blue-100 rounded-xl p-2 sm:p-2.5 text-center">
                <div className="text-[#1a3a6b] font-bold text-[10px] sm:text-[11px] uppercase">Premium Quality</div>
                <div className="text-[9px] text-slate-500">Long-Life Cast Acrylic</div>
              </div>
              <div className="bg-[#eff4fb] border border-blue-100 rounded-xl p-2 sm:p-2.5 text-center">
                <div className="text-[#1a3a6b] font-bold text-[10px] sm:text-[11px] uppercase">Direct Factory</div>
                <div className="text-[9px] text-slate-500">Capital Tower Setup</div>
              </div>
              <div className="bg-[#eff4fb] border border-blue-100 rounded-xl p-2 sm:p-2.5 text-center">
                <div className="text-[#1a3a6b] font-bold text-[10px] sm:text-[11px] uppercase">Installation</div>
                <div className="text-[9px] text-slate-500">Turnkey Setup Bihar</div>
              </div>
            </div>

            {/* 8-Tile Product Grid Showcase */}
            <div className="grid grid-cols-4 gap-2 sm:gap-2.5 mb-2">
              <div className="group relative rounded-lg overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-100">
                <img
                  src="/assets/images/lux-venus-3d-led-glow-sign-board.jpg"
                  alt="LED Signage"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[#1a3a6b]/95 text-white text-[8px] sm:text-[9px] font-bold uppercase text-center py-0.5 tracking-wider">
                  LED Signage
                </div>
              </div>

              <div className="group relative rounded-lg overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-100">
                <img
                  src="/assets/images/3d-acrylic-glow-letter-r.jpg"
                  alt="Acrylic Letters"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[#e85c1a] text-white text-[8px] sm:text-[9px] font-bold uppercase text-center py-0.5 tracking-wider">
                  Acrylic Letters
                </div>
              </div>

              <div className="group relative rounded-lg overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-100">
                <img
                  src="/assets/images/kashish-ad-aakash-deep-3d-led-glow-sign-board.jpg"
                  alt="Light Boards"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[#1a3a6b]/95 text-white text-[8px] sm:text-[9px] font-bold uppercase text-center py-0.5 tracking-wider">
                  Light Boards
                </div>
              </div>

              <div className="group relative rounded-lg overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-100">
                <img
                  src="/assets/images/kashish-ad-work-in-progress-site-branding-banner.jpg"
                  alt="Canopies"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[#e85c1a] text-white text-[8px] sm:text-[9px] font-bold uppercase text-center py-0.5 tracking-wider">
                  Canopies
                </div>
              </div>

              <div className="group relative rounded-lg overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-100">
                <img
                  src="/assets/images/kashish-ad-rasmalai-the-mithai-shop-3d-led-sign-board.jpg"
                  alt="Letter Boards"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[#1a3a6b]/95 text-white text-[8px] sm:text-[9px] font-bold uppercase text-center py-0.5 tracking-wider">
                  Letter Boards
                </div>
              </div>

              <div className="group relative rounded-lg overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-100">
                <img
                  src="/assets/images/kashish-ad-hanzala-hajj-umrah-storefront-sign-board.jpg"
                  alt="Storefront Signs"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[#e85c1a] text-white text-[8px] sm:text-[9px] font-bold uppercase text-center py-0.5 tracking-wider">
                  Storefront Signs
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Contact Strip (Dark Blue Navy bar matching reference) */}
          <div className="mt-3 bg-[#102447] text-white rounded-xl p-2 sm:p-2.5 flex flex-wrap items-center justify-between gap-2 border border-blue-900/40">
            <a
              href="tel:09308327111"
              className="flex items-center gap-2 hover:text-[#e85c1a] transition-colors"
            >
              <div className="w-6 h-6 rounded-md bg-[#e85c1a] flex items-center justify-center text-white text-xs">
                📞
              </div>
              <div className="text-left">
                <span className="text-[8px] text-slate-300 uppercase tracking-widest block leading-none">Call Us Now</span>
                <span className="text-[11px] sm:text-xs font-bold">09308327111</span>
              </div>
            </a>

            <div className="hidden sm:flex items-center gap-2 text-slate-300 text-[10px]">
              <div className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center text-white text-[10px]">
                📍
              </div>
              <span>Capital Tower, Fraser Rd, Patna</span>
            </div>

            <Link
              to="/services"
              className="text-[10px] sm:text-xs font-bold text-[#e85c1a] hover:underline flex items-center gap-1"
            >
              <span>Explore All Products</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* =========================================================================
            SLIDE 2: "PRINTING WITHOUT LIMITS." (Inspired by Shyam Advertising Slide 3)
           ========================================================================= */}
        <div
          className={`transition-opacity duration-700 ease-in-out ${currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none absolute inset-0 z-0'
            } p-5 sm:p-7 lg:p-8 flex flex-col justify-between h-full`}
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#e85c1a] text-white font-black text-[10px] tracking-wider uppercase">
                  DIRECT FACTORY
                </span>
                <span className="text-[11px] font-bold text-[#1a3a6b]">Kashish Ad® Industrial Workshop</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">Same-Day Fabrication</span>
            </div>

            {/* Headline */}
            <div className="mb-2.5">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black font-display tracking-tight text-[#1a3a6b] uppercase leading-none">
                Printing <span className="text-[#e85c1a]">Without Limits.</span>
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-1">
                Advanced UV Flatbed, Eco-Solvent & Laser Technology with Unmatched Color Precision.
              </p>
            </div>

            {/* Center Visual: Large Format Printer Machinery */}
            <div className="relative rounded-xl overflow-hidden border border-slate-200 aspect-[16/8] sm:aspect-[16/7] bg-slate-900 mb-2.5 shadow-md">
              <img
                src="/assets/images/kashish-ad-machinery-services-black-banner.jpg"
                alt="Kashish Ad In-House Plant Machinery & Equipment"
                className="w-full h-full object-contain bg-black"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-2.5 text-white">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[11px] sm:text-xs font-bold tracking-wide">
                    1.5 kW Fiber Laser, UV Flatbed & 10ft Solvent In Active Operation
                  </span>
                </div>
              </div>
            </div>

            {/* "What We Print" Row of Badges */}
            <div className="grid grid-cols-5 gap-1 sm:gap-1.5 mb-2.5 text-center">
              <div className="bg-white border border-slate-200 rounded-lg p-1 shadow-xs">
                <div className="text-[9px] sm:text-[10px] font-black text-[#1a3a6b] uppercase">Flex</div>
                <div className="text-[8px] text-slate-500 hidden sm:block">Durable Banners</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-1 shadow-xs">
                <div className="text-[9px] sm:text-[10px] font-black text-[#1a3a6b] uppercase">Vinyl</div>
                <div className="text-[8px] text-slate-500 hidden sm:block">Vehicle & Wall</div>
              </div>
              <div className="bg-white border border-[#e85c1a]/30 bg-orange-50/50 rounded-lg p-1 shadow-xs">
                <div className="text-[9px] sm:text-[10px] font-black text-[#e85c1a] uppercase">UV Print</div>
                <div className="text-[8px] text-slate-500 hidden sm:block">Acrylic, Wood, ACP</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-1 shadow-xs">
                <div className="text-[9px] sm:text-[10px] font-black text-[#1a3a6b] uppercase">Acrylic 3D</div>
                <div className="text-[8px] text-slate-500 hidden sm:block">LED Letters</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-1 shadow-xs">
                <div className="text-[9px] sm:text-[10px] font-black text-[#1a3a6b] uppercase">Glow Sign</div>
                <div className="text-[8px] text-slate-500 hidden sm:block">Storefront Boards</div>
              </div>
            </div>

            {/* Feature Checkpoints */}
            <div className="grid grid-cols-2 gap-2 text-[10px] sm:text-[11px] text-slate-700 font-semibold">
              <div className="flex items-center gap-1.5">
                <span className="text-[#e85c1a] font-bold">✓</span>
                <span>Latest High-Precision Plotters</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#e85c1a] font-bold">✓</span>
                <span>Direct Factory Wholesale Pricing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#e85c1a] font-bold">✓</span>
                <span>Vibrant & 3+ Year UV-Resistant Inks</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#e85c1a] font-bold">✓</span>
                <span>Fast 24-48h Delivery Across Bihar</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-3 bg-[#102447] text-white rounded-xl p-2 sm:p-2.5 flex items-center justify-between text-xs">
            <span className="text-slate-300 text-[10px] sm:text-xs">
              Direct Production Unit: <strong>Capital Tower, A-6 & B-16, Fraser Rd, Patna</strong>
            </span>
            <a
              href="https://wa.me/919308327111?text=Hello%20Kashish%20Ad,%20I%20want%20to%20order%20urgent%20printing."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25d366] hover:bg-[#1da851] text-white font-bold px-2.5 py-1 rounded text-[10px] sm:text-xs uppercase flex items-center gap-1"
            >
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* =========================================================================
            SLIDE 3: "WE DESIGN. WE PRINT. WE GROW." (Inspired by Shyam Advertising Slide 4)
           ========================================================================= */}
        <div
          className={`transition-opacity duration-700 ease-in-out ${currentSlide === 2 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none absolute inset-0 z-0'
            } p-5 sm:p-7 lg:p-8 flex flex-col justify-between h-full`}
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#e85c1a] flex items-center justify-center text-white font-bold text-xs">
                  ★
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-black text-[#1a3a6b] uppercase block">
                    Kashish Ad® Brand Growth
                  </span>
                  <span className="text-[9px] text-slate-500">Patna's Preferred Signage Partner</span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                10,000+ Projects Done
              </span>
            </div>

            {/* Headline */}
            <div className="mb-3">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black font-display tracking-tight text-[#1a3a6b] uppercase leading-none">
                We Design. <span className="text-[#e85c1a]">We Print.</span> We Grow.
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-1">
                Elevate your brand visibility with turnkey storefront facades, 3D illuminated letters, and corporate exhibition branding.
              </p>
            </div>

            {/* Showcase Visual Collage */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="relative rounded-xl overflow-hidden border border-slate-200 aspect-[4/3]">
                <img
                  src="/assets/images/kashish-ad-rasmalai-the-mithai-shop-3d-led-sign-board.jpg"
                  alt="Rasmalai 3D LED Board"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[#1a3a6b]/90 text-white text-[8px] font-bold text-center py-0.5 uppercase">
                  3D Glow Sign
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-slate-200 aspect-[4/3]">
                <img
                  src="/assets/images/kashish-ad-aakash-deep-3d-led-glow-sign-board.jpg"
                  alt="Aakash Deep 3D Acrylic Letters"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[#e85c1a]/95 text-white text-[8px] font-bold text-center py-0.5 uppercase">
                  Acrylic 3D Letters
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-slate-200 aspect-[4/3]">
                <img
                  src="/assets/images/kashish-ad-bssa-sports-complex-illuminated-signage.jpg"
                  alt="BSSA Sports Complex Illuminated Sign"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[#1a3a6b]/90 text-white text-[8px] font-bold text-center py-0.5 uppercase">
                  Monumental Signage
                </div>
              </div>
            </div>

            {/* 5 Core Guarantee Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
              <div className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-[#e85c1a] font-bold text-sm">🛡️</span>
                <div>
                  <div className="text-[10px] font-bold text-[#1a3a6b] uppercase leading-tight">High Quality</div>
                  <div className="text-[8px] text-slate-500">Premium Raw Materials</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-[#e85c1a] font-bold text-sm">⏱️</span>
                <div>
                  <div className="text-[10px] font-bold text-[#1a3a6b] uppercase leading-tight">On-Time Delivery</div>
                  <div className="text-[8px] text-slate-500">Strict Timelines Kept</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50 border border-slate-200 col-span-2 sm:col-span-1">
                <span className="text-[#e85c1a] font-bold text-sm">🤝</span>
                <div>
                  <div className="text-[10px] font-bold text-[#1a3a6b] uppercase leading-tight">Trusted Service</div>
                  <div className="text-[8px] text-slate-500">8+ Years in Patna</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Strip */}
          <div className="mt-3 bg-[#102447] text-white rounded-xl p-2 sm:p-2.5 flex items-center justify-between text-xs">
            <span className="text-slate-300 text-[10px] sm:text-xs">
              Call Hotline: <strong className="text-white">09308327111</strong>
            </span>
            <Link
              to="/gallery"
              className="bg-[#e85c1a] hover:bg-[#cf4e12] text-white font-bold px-3 py-1 rounded text-[10px] sm:text-xs uppercase"
            >
              View Recent Works
            </Link>
          </div>
        </div>

        {/* =========================================================================
            SLIDE 4: "CAPITAL TOWER PRODUCTION FACILITY"
           ========================================================================= */}
        <div
          className={`transition-opacity duration-700 ease-in-out ${currentSlide === 3 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none absolute inset-0 z-0'
            } p-5 sm:p-7 lg:p-8 flex flex-col justify-between h-full`}
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-xs sm:text-sm font-black text-[#1a3a6b] uppercase">
                  Direct Factory & Workshop Tour
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-blue-100 text-[#1a3a6b] text-[10px] font-bold">
                Fraser Road, Patna
              </span>
            </div>

            {/* Headline */}
            <div className="mb-2.5">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black font-display tracking-tight text-[#1a3a6b] uppercase leading-none">
                In-House <span className="text-[#e85c1a]">Plant & Storefront</span>
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-1">
                Zero outsourcing. Visit our workshop at Capital Tower (A-6 & B-16) to inspect live samples, acrylic testing walls, and machine operations.
              </p>
            </div>

            {/* Split Visual: Storefront Facade + On-Site Installation */}
            <div className="grid grid-cols-2 gap-2 mb-2.5">
              <div className="relative rounded-xl overflow-hidden border border-slate-200 aspect-[4/3]">
                <img
                  src="/assets/images/kashish-ad-red-storefront-facade-elevation-mockup.jpg"
                  alt="Kashish Ad Storefront Facade 3D Elevation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/75 text-white text-[9px] font-bold text-center py-1 uppercase">
                  Storefront Facade Design
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-slate-200 aspect-[4/3]">
                <img
                  src="/assets/images/kashish-ad-work-in-progress-site-branding-banner.jpg"
                  alt="Kashish Ad Installation Team at Capital Tower"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/75 text-white text-[9px] font-bold text-center py-1 uppercase">
                  On-Site Installation Team
                </div>
              </div>
            </div>

            {/* Key Capabilities */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 space-y-1 text-[10px] sm:text-[11px] text-slate-700">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#1a3a6b]">CNC Metal & Acrylic Laser Bed:</span>
                <span className="font-semibold text-slate-600">Precision Cutting to 0.1mm</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#1a3a6b]">UV Flatbed Printing:</span>
                <span className="font-semibold text-slate-600">Glass, Wood, Acrylic, Metal</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#1a3a6b]">Eco-Solvent & Flex:</span>
                <span className="font-semibold text-slate-600">High-speed 10ft Width Rollers</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-3 bg-[#102447] text-white rounded-xl p-2 sm:p-2.5 flex items-center justify-between text-xs">
            <span className="text-slate-300 text-[10px] sm:text-xs">
              Near Chhabra Sports, Fraser Rd, Patna
            </span>
            <Link
              to="/machinery"
              className="bg-[#e85c1a] hover:bg-[#cf4e12] text-white font-bold px-3 py-1 rounded text-[10px] sm:text-xs uppercase"
            >
              Explore Machinery
            </Link>
          </div>
        </div>

      </div>

      {/* =========================================================================
          SLIDER CONTROLS BAR (Matches Shyam Advertising navigation exactly)
          Orange Left Button [<] | Dash/Dot Indicators | Orange Right Button [>]
         ========================================================================= */}
      <div className="bg-[#102447] px-3 py-2 flex items-center justify-between border-t border-blue-900/60 z-20 relative">
        {/* Left Orange Arrow Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-[#e85c1a] hover:bg-[#cf4e12] text-white flex items-center justify-center shadow-md active:scale-95 transition-transform"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dash / Bar Indicators */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {[...Array(totalSlides)].map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={currentSlide === idx ? 'true' : 'false'}
              className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx
                  ? 'w-7 sm:w-9 bg-[#e85c1a] shadow-sm'
                  : 'w-2 sm:w-2.5 bg-slate-500/70 hover:bg-slate-400'
                }`}
            />
          ))}
        </div>

        {/* Right Orange Arrow Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Slide"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-[#e85c1a] hover:bg-[#cf4e12] text-white flex items-center justify-center shadow-md active:scale-95 transition-transform"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
