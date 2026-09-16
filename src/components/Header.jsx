import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  COMPANY_INFO,
  CONTACT_INFO,
  LOCATION_INFO,
  WORKING_HOURS,
  SOCIAL_LINKS
} from '../data/siteData';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Main Sticky Header with Top Bar and Navigation */}
      <header className="sticky top-0 z-40 shadow-sm">
        {/* 1. Top Utility & Announcement Bar */}
        <div className="bg-[#081a3e] text-slate-200 border-b border-blue-900/40 text-[11px] sm:text-xs">
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-1.5 sm:py-1.5 flex items-center justify-between gap-3">
            {/* Left: Location & Hours */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <a
                href={LOCATION_INFO.googleMapsCidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                title="View Kashish Ad on Google Maps"
              >
                <svg className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
                <span className="font-medium hidden xs:inline">{LOCATION_INFO.shortAddress}</span>
                <span className="font-medium xs:hidden">Patna, Bihar</span>
              </a>

              <span className="hidden md:inline-block w-1 h-1 rounded-full bg-slate-500" />

              <div className="hidden sm:inline-flex items-center gap-1.5 text-slate-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-medium">{WORKING_HOURS.summary}</span>
              </div>
            </div>

            {/* Middle: Highlights / Trust (Tablets & Desktop) */}
            <div className="hidden lg:flex items-center gap-3 text-slate-300 text-xs">
              <span className="inline-flex items-center gap-1 font-semibold text-amber-300">
                <span>★</span> 4.6 Google Rating
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 font-medium">In-House Manufacturing</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 font-mono text-[10.5px]">GST: {COMPANY_INFO.gstin}</span>
            </div>

            {/* Right: Hotline, WhatsApp, & PDF */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <a
                href={CONTACT_INFO.phoneTel}
                className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white font-bold transition-colors"
                title="Direct Phone Call"
              >
                <svg className="w-3.5 h-3.5 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.4 11.4 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.58 1 1 0 01-.25 1.02l-2.2 2.19z" />
                </svg>
                <span className="tracking-wider">{CONTACT_INFO.phoneFormatted}</span>
              </a>

              <span className="w-px h-3 bg-blue-800/80 hidden sm:block" />

              <a
                href={CONTACT_INFO.getWhatsAppUrl('Hello Kashish Ad, I want to inquire about signage/printing.')}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-[#25D366] hover:text-emerald-300 font-bold transition-colors"
                title="Chat on WhatsApp"
              >
                <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.158.571 4.183 1.564 5.934l-1.663 6.079 6.257-1.636c1.684.918 3.609 1.443 5.659 1.443 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>WhatsApp</span>
              </a>

              <span className="w-px h-3 bg-blue-800/80 hidden md:block" />

              <a
                href="/assets/documents/Kashish-Ad-Portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Kashish-Ad-Portfolio.pdf"
                className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-900/60 hover:bg-blue-800 text-blue-100 hover:text-white border border-blue-700/50 font-semibold transition-all text-[10.5px]"
                title="Download Official PDF Portfolio"
              >
                <svg className="w-3 h-3 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                  <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Portfolio PDF</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. Main Navigation Bar */}
        <div className="bg-white/95 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between">
          {/* Brand Logo: Icon + KASHISH AD */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3.5 group py-1 shrink-0" onClick={closeMenu} aria-label="Kashish Ad Home">
            <img
              src="/assets/logo-icon.png"
              alt="Kashish Ad Monogram"
              className="h-9 sm:h-12 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform shrink-0"
            />
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-start">
                <span className="font-raphtalia text-xl sm:text-3xl md:text-4xl font-bold tracking-[0] text-[#1346a8] leading-none">
                  Kashish Ad
                </span>
                <span className="font-sans text-[10px] sm:text-xs md:text-sm font-black text-[#1346a8] ml-0.5 leading-none">
                  ®
                </span>
              </div>
              <span className="text-[7.5px] sm:text-[9.5px] md:text-[10.5px] font-bold tracking-[0.12em] text-[#475569] uppercase leading-tight mt-0.5">
                — LET'S PRINT BRANDING —
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${isActive
                  ? 'text-[#1346a8] bg-[#f0f7ff]'
                  : 'text-slate-700 hover:text-[#1346a8] hover:bg-slate-50'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${isActive
                  ? 'text-[#1346a8] bg-[#f0f7ff]'
                  : 'text-slate-700 hover:text-[#1346a8] hover:bg-slate-50'
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${isActive
                  ? 'text-[#1346a8] bg-[#f0f7ff]'
                  : 'text-slate-700 hover:text-[#1346a8] hover:bg-slate-50'
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/machinery"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${isActive
                  ? 'text-[#1346a8] bg-[#f0f7ff]'
                  : 'text-slate-700 hover:text-[#1346a8] hover:bg-slate-50'
                }`
              }
            >
              Machinery
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${isActive
                  ? 'text-[#1346a8] bg-[#f0f7ff]'
                  : 'text-slate-700 hover:text-[#1346a8] hover:bg-slate-50'
                }`
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${isActive
                  ? 'text-[#1346a8] bg-[#f0f7ff]'
                  : 'text-slate-700 hover:text-[#1346a8] hover:bg-slate-50'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Desktop CTAs & Mobile Hamburger */}
          <div className="flex items-center gap-2.5">
            <a
              href={CONTACT_INFO.phoneTel}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 transition-all shadow-2xs"
              title="Call Kashish Ad"
            >
              <svg className="w-3.5 h-3.5 text-[#1346a8]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.4 11.4 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.58 1 1 0 01-.25 1.02l-2.2 2.19z" />
              </svg>
              <span>{CONTACT_INFO.phoneFormatted}</span>
            </a>

            {/* Solid Royal Blue Action Button */}
            <a
              href={CONTACT_INFO.getWhatsAppUrl('Hello Kashish Ad, I want to get a quote / place an order.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide text-white bg-[#1346a8] hover:bg-[#0f3a8e] transition-all shadow-md shadow-blue-900/20 active:scale-95"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Get a Quote</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-xl">
            <NavLink
              to="/"
              end
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-[#f0f7ff] hover:text-[#1346a8]"
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-[#f0f7ff] hover:text-[#1346a8]"
              onClick={closeMenu}
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-[#f0f7ff] hover:text-[#1346a8]"
              onClick={closeMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/machinery"
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-[#f0f7ff] hover:text-[#1346a8]"
              onClick={closeMenu}
            >
              Machinery
            </NavLink>
            <NavLink
              to="/gallery"
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-[#f0f7ff] hover:text-[#1346a8]"
              onClick={closeMenu}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-[#f0f7ff] hover:text-[#1346a8]"
              onClick={closeMenu}
            >
              Contact
            </NavLink>

            {/* Social Follow in Mobile Drawer */}
            <div className="pt-3 pb-1 border-t border-slate-100 flex items-center justify-between px-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Follow Us:</span>
              <div className="flex items-center gap-3">
                <a
                  href={SOCIAL_LINKS.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-pink-50 text-pink-700 text-xs font-bold border border-pink-200"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Instagram</span>
                </a>
                <a
                  href={SOCIAL_LINKS.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={CONTACT_INFO.phoneTel}
                className="w-full text-center py-2.5 rounded-xl font-bold text-xs text-slate-800 bg-slate-100 border border-slate-200"
              >
                Call: {CONTACT_INFO.phoneFormatted}
              </a>
              <a
                href={CONTACT_INFO.getWhatsAppUrl('Hello Kashish Ad, I want to get a quote.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-xl font-bold text-xs tracking-wider text-white bg-[#1346a8]"
              >
                Get a Quote ({CONTACT_INFO.phoneFormatted})
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
