import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const BANNERS = [
  {
    id: '3d-letter',
    title: '3D Letter & Architectural LED Signage',
    subtitle: 'Turn Ideas Into Impact • Acrylic • LED • Steel Letters',
    image: '/assets/images/kashish-ad-3d-letter-banner.png',
    mobileImage: '/assets/images/kashish-ad-3d-letter-banner-mobile.png',
    link: '/services/led-acrylic-letters',
    accentColor: '#1346a8',
    category: '3D Letters'
  },
  {
    id: 'cnc-cutting',
    title: 'Precision CNC Router & Laser Cutting Services',
    subtitle: 'Precision Creates Possibilities • Acrylic • MDF • ACP • Wood',
    image: '/assets/images/kashish-ad-cnc-cutting-banner.png',
    mobileImage: '/assets/images/kashish-ad-cnc-cutting-banner-mobile.png',
    link: '/services/cnc-laser-jali',
    accentColor: '#1346a8',
    category: 'CNC & Laser Cutting'
  },
  {
    id: 'flex-printing',
    title: 'Large Format Flex, Vinyl & Backlit Printing',
    subtitle: 'Bigger Visibility • Stronger Brands • High Quality & Fast Turnaround',
    image: '/assets/images/kashish-ad-flex-printing-banner.png',
    mobileImage: '/assets/images/kashish-ad-flex-printing-banner.png',
    link: '/services/frontlit-flex',
    accentColor: '#1346a8',
    category: 'Flex & Digital Printing'
  }
];

export default function HeroBannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const total = BANNERS.length;

  const nextBanner = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevBanner = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goToBanner = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextBanner();
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      nextBanner();
    } else if (diff < -45) {
      prevBanner();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl shadow-card border border-slate-200 bg-slate-900 group select-none transition-all duration-300 hover:shadow-card-hover"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Kashish Ad Feature Banners"
    >
      {/* Banner aspect ratio wrapper: Responsive height for mobile and desktop */}
      <div className="relative w-full aspect-[2/1] sm:aspect-[1944/265] min-h-[160px] sm:min-h-[110px] md:min-h-[135px] lg:min-h-[155px] bg-slate-950 overflow-hidden">
        {BANNERS.map((banner, index) => {
          const isActive = index === currentIndex;
          return (
            <Link
              key={banner.id}
              to={banner.link}
              title={`${banner.title} - Click to explore services`}
              className={`absolute inset-0 w-full h-full block transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 pointer-events-none z-0'
              }`}
            >
              <picture className="w-full h-full block">
                {banner.mobileImage && (
                  <source media="(max-width: 639px)" srcSet={banner.mobileImage} />
                )}
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover sm:object-fill block select-none"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  draggable={false}
                />
              </picture>
            </Link>
          );
        })}
      </div>

      {/* Navigation Controls: Previous button */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          prevBanner();
        }}
        aria-label="Previous Banner"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-[#1346a8] text-white/90 hover:text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 sm:opacity-70 hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Navigation Controls: Next button */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          nextBanner();
        }}
        aria-label="Next Banner"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-[#1346a8] text-white/90 hover:text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 sm:opacity-70 hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/10">
        {BANNERS.map((banner, index) => (
          <button
            key={banner.id}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              goToBanner(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentIndex === index
                ? 'w-5 sm:w-6 h-1.5 sm:h-2 bg-white'
                : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
