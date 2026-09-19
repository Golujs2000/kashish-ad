import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, LOCATION_INFO } from '../../data/siteData';

export default function HeroSection() {
  return (
    <section className="relative bg-white pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Panoramic Hero Container - 16px radius, fitted to image with zero overlay layer on desktop; clean background on mobile */}
        <div
          className="relative w-full max-w-full rounded-2xl overflow-hidden shadow-card border border-slate-200/80 hero-panoramic-container aspect-auto lg:aspect-[1875/839] flex items-center"
        >
          {/* Hero Header: 40% text content area on desktop directly over the background */}
          <div className="relative z-10 w-full lg:w-[44%] xl:w-[42%] p-6 sm:p-8 lg:p-10 flex flex-col justify-center">

            {/* Main Headline (48-54px desktop, 34-40px mobile) */}
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] text-slate-900 tracking-tight leading-[1.08]">
              Print. Brand. <span className="text-[#1346a8]">Grow.</span>
            </h1>

            {/* Subheading (28-36px desktop) */}
            <h2 className="mt-2 text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-800 tracking-tight leading-snug">
              Complete Printing &amp; Branding Solutions <span className="text-[#1346a8]">in Patna</span>
            </h2>

            {/* Paragraph (max-width ~600px, 15-17px) */}
            <p className="mt-2.5 text-xs sm:text-sm lg:text-[15px] text-slate-600 font-medium leading-relaxed max-w-lg">
              From digital printing and promotional materials to 3D letters, glow sign boards, CNC cutting, ACP cladding and vehicle branding.
            </p>

            {/* 5 Circular Service Categories */}
            <div className="mt-4 sm:mt-5 grid grid-cols-5 gap-2 sm:gap-3 max-w-md">
              <Link
                to="/services/uv-digital"
                className="flex flex-col items-center group text-center"
                title="Digital & Large Format UV Printing"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#1346a8] bg-white shadow-xs flex items-center justify-center text-[#1346a8] group-hover:bg-[#1346a8] group-hover:text-white group-hover:scale-105 transition-all">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-5h8v5zm2-7.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                  </svg>
                </div>
                <span className="mt-1 text-[10px] sm:text-xs font-bold text-slate-700 group-hover:text-[#1346a8] transition-colors leading-tight">
                  Printing
                </span>
              </Link>

              <Link
                to="/services/led-acrylic-letters"
                className="flex flex-col items-center group text-center"
                title="3D LED Letters & Glow Signage"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#1346a8] bg-white shadow-xs flex items-center justify-center text-[#1346a8] group-hover:bg-[#1346a8] group-hover:text-white group-hover:scale-105 transition-all">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 3h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-1v5a1 1 0 0 1-2 0v-5H8v5a1 1 0 0 1-2 0v-5H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2v8h14V5H5zm2 2h10v4H7V7z" />
                  </svg>
                </div>
                <span className="mt-1 text-[10px] sm:text-xs font-bold text-slate-700 group-hover:text-[#1346a8] transition-colors leading-tight">
                  Signage
                </span>
              </Link>

              <Link
                to="/services/solvent-vinyl"
                className="flex flex-col items-center group text-center"
                title="Shop & Office Vinyl Branding"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#1346a8] bg-white shadow-xs flex items-center justify-center text-[#1346a8] group-hover:bg-[#1346a8] group-hover:text-white group-hover:scale-105 transition-all">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 9v6h4l5 4V5L8 9H4zm11-1.17v8.34c1.78-.96 3-2.85 3-5s-1.22-4.04-3-5.34zm0-3.83v1.86c3.48 1.45 6 4.9 6 8.96s-2.52 7.51-6 8.96V20c4.42-1.57 7.5-5.78 7.5-10.72S19.42 5.57 15 4z" />
                  </svg>
                </div>
                <span className="mt-1 text-[10px] sm:text-xs font-bold text-slate-700 group-hover:text-[#1346a8] transition-colors leading-tight">
                  Branding
                </span>
              </Link>

              <Link
                to="/services/cnc-laser-jali"
                className="flex flex-col items-center group text-center"
                title="CNC Laser & Jali Cutting"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#1346a8] bg-white shadow-xs flex items-center justify-center text-[#1346a8] group-hover:bg-[#1346a8] group-hover:text-white group-hover:scale-105 transition-all">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                  </svg>
                </div>
                <span className="mt-1 text-[10px] sm:text-xs font-bold text-slate-700 group-hover:text-[#1346a8] transition-colors leading-tight">
                  CNC Cutting
                </span>
              </Link>

              <Link
                to="/services/solvent-vinyl"
                className="flex flex-col items-center group text-center"
                title="Vehicle & Fleet Vinyl Branding"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#1346a8] bg-white shadow-xs flex items-center justify-center text-[#1346a8] group-hover:bg-[#1346a8] group-hover:text-white group-hover:scale-105 transition-all">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-5 1.5V11H3.5V6H15v3.5zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                  </svg>
                </div>
                <span className="mt-1 text-[10px] sm:text-xs font-bold text-slate-700 group-hover:text-[#1346a8] transition-colors leading-tight">
                  Vehicle Branding
                </span>
              </Link>
            </div>

            {/* Action Buttons: 12px radius, conversion-focused */}
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3">
              <a
                href={CONTACT_INFO.getWhatsAppUrl('Hello Kashish Ad, I would like to get a quote.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#1346a8] hover:bg-[#0f3a8e] shadow-sm active:scale-95 transition-all"
              >
                <span>Get a Quote</span>
                <span className="text-base">→</span>
              </a>

              <a
                href="tel:9308327111"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#1346a8] bg-white border border-[#1346a8]/30 hover:border-[#1346a8] hover:bg-slate-50 shadow-xs active:scale-95 transition-all"
              >
                <svg className="w-4 h-4 text-[#1346a8]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.4 11.4 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.58 1 1 0 01-.25 1.02l-2.2 2.19z" />
                </svg>
                <span>Call 9308327111</span>
              </a>
            </div>

            {/* Location Pill: 12px radius */}
            <a
              href={LOCATION_INFO.googleMapsCidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs text-slate-700 font-semibold hover:text-[#1346a8] bg-white/95 px-3 py-1.5 rounded-xl border border-slate-200 shadow-xs w-fit transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-[#1346a8] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              <span className="truncate">{LOCATION_INFO.fullAddress}</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
