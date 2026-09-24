import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, CONTACT_INFO, LOCATION_INFO } from '../../data/siteData';

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden border-b border-slate-200 hero-panoramic-container min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] xl:min-h-[700px] 2xl:min-h-[740px] flex items-center"
    >
      <div className="w-full max-w-[1720px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8 sm:py-10 lg:py-14 flex items-center">
        {/* Hero Header: text content area on desktop directly over the background */}
        <div className="relative z-10 w-full lg:w-[48%] xl:w-[45%] 2xl:w-[42%] min-w-0">
          {/* Top Community Quote & GSTIN Verification */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xs text-slate-700 group hover:border-red-200 transition-colors">
              <svg className="w-4 h-4 text-red-500 shrink-0 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="text-xs sm:text-[13px] font-semibold tracking-wide italic">
                &ldquo;When you support small business, you&apos;re supporting a dream&rdquo;
              </span>
            </div>

            {/* GST Verified Badge in Hero */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50/95 backdrop-blur-md border border-emerald-300/80 text-emerald-900 text-xs font-bold shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>GST: <span className="font-mono text-emerald-950 font-black">{COMPANY_INFO.gstin}</span></span>
            </div>
          </div>

          {/* Main Headline (48-54px desktop, 34-40px mobile) */}
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] 2xl:text-[52px] text-slate-900 tracking-tight leading-[1.15]">
            Print. Brand. <span className="text-[#1346a8]">Grow.</span>
          </h1>

          {/* Subheading emphasizing Patna Signage */}
          <h2 className="mt-2.5 text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-800 tracking-tight leading-snug">
            Patna Signage, Digital Printing &amp; Branding <span className="text-[#1346a8]">Leader</span>
          </h2>

          {/* Paragraph (max-width ~600px, 15-17px) */}
          <p className="mt-3 text-xs sm:text-sm lg:text-[15px] text-slate-600 font-medium leading-relaxed max-w-lg">
            Bihar&apos;s premier manufacturing plant for Patna signage boards, 3D LED acrylic letters, glow signs, UV roll-to-roll &amp; flatbed printing, CNC cutting, ACP cladding, and fleet branding.
          </p>

          {/* 5 Circular Service Categories */}
          <div className="mt-6 sm:mt-7 grid grid-cols-5 gap-2.5 sm:gap-3.5 max-w-md">
            <Link
              to="/services/uv-digital"
              className="flex flex-col items-center group text-center"
              title="Digital & Large Format UV Printing"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#1346a8] bg-white shadow-2xs flex items-center justify-center text-[#1346a8] group-hover:bg-[#1346a8] group-hover:text-white group-hover:scale-105 transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-5h8v5zm2-7.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                </svg>
              </div>
              <span className="mt-1.5 text-[10px] sm:text-xs font-bold text-slate-700 group-hover:text-[#1346a8] transition-colors leading-tight">
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
                Patna Signage
              </span>
            </Link>

            <Link
              to="/services/solvent-vinyl"
              className="flex flex-col items-center group text-center"
              title="Shop & Office Vinyl Branding"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#1346a8] bg-white shadow-xs flex items-center justify-center text-[#1346a8] group-hover:bg-[#1346a8] group-hover:text-white group-hover:scale-105 transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 8 6.5 8s1.5.67 1.5 1.5S7.33 11 6.5 11zm3-4C8.67 7 8 6.33 8 5.5S8.67 4 9.5 4s1.5.67 1.5 1.5S10.33 7 9.5 7zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 4 14.5 4s1.5.67 1.5 1.5S15.33 7 14.5 7zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 8 17.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
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
          <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3.5">
            <a
              href={CONTACT_INFO.getWhatsAppUrl('Hello Kashish Ad, I would like to get a quote.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-sm shadow-emerald-600/20 active:scale-95 transition-all"
            >
              <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.158.571 4.183 1.564 5.934l-1.663 6.079 6.257-1.636c1.684.918 3.609 1.443 5.659 1.443 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>WhatsApp Quote</span>
              <span className="text-base">→</span>
            </a>

            <a
              href={CONTACT_INFO.phoneTel}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#1346a8] bg-white border border-[#1346a8]/20 hover:border-[#1346a8] hover:bg-slate-50 shadow-2xs active:scale-95 transition-all"
            >
              <svg className="w-4 h-4 text-[#1346a8]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.4 11.4 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.58 1 1 0 01-.25 1.02l-2.2 2.19z" />
              </svg>
              <span>Call {CONTACT_INFO.phoneFormatted}</span>
            </a>
          </div>

          {/* Full Location Address Badge */}
          <a
            href={LOCATION_INFO.googleMapsCidUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-start gap-3 text-xs text-slate-700 font-medium hover:text-[#1346a8] bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-100 shadow-2xs max-w-full transition-colors group"
            title="Open Kashish Ad on Google Maps"
          >
            <svg className="w-4 h-4 text-[#1346a8] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-tight">
                Factory &amp; Office Location
              </span>
              <span className="text-xs font-semibold text-slate-800 group-hover:text-[#1346a8] transition-colors leading-snug mt-0.5">
                {LOCATION_INFO.fullAddress}
              </span>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
