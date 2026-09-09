import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Top Announcement Bar in Navy #1a3a6b */}
      <div className="bg-[#1a3a6b] text-white/90 text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-[#12284c]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Mobile status / Desktop full announcement */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium truncate">
            <span className="w-2 h-2 rounded-full bg-[#e85c1a] animate-pulse shrink-0"></span>
            <span className="sm:hidden font-semibold truncate">
              Capital Tower, Fraser Rd, Patna • <span className="text-[#e85c1a]">9AM–9PM</span>
            </span>
            <span className="hidden sm:inline">
              Open Mon – Sat: <strong className="text-white font-semibold">9:00 AM – 9:00 PM</strong> | Capital Tower, Fraser Rd, Patna
            </span>
          </div>

          {/* Right side icons & hotline */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Social Profiles */}
            <div className="hidden md:flex items-center gap-2 border-r border-blue-900/60 pr-3">
              <a
                href="https://www.instagram.com/kashishadpatna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#e85c1a] transition-colors p-1"
                aria-label="Kashish Ad Instagram"
                title="Follow us on Instagram @kashishadpatna"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/kashishadpatna/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#e85c1a] transition-colors p-1"
                aria-label="Kashish Ad Facebook"
                title="Follow us on Facebook @kashishadpatna"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>

            <a
              href="mailto:kashishadpatna@gmail.com"
              className="hidden lg:flex items-center gap-1.5 text-white/90 hover:text-[#e85c1a] transition-colors"
              title="Email kashishadpatna@gmail.com"
            >
              <svg className="w-3.5 h-3.5 text-[#e85c1a]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>kashishadpatna@gmail.com</span>
            </a>
            <span className="bg-[#102447] text-white/90 border border-blue-900/60 px-2 py-0.5 rounded text-[11px] font-mono tracking-wider hidden sm:inline-block">
              GSTIN: 10AENPH7809D1ZT
            </span>
            <a
              href="tel:09308327111"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 sm:bg-transparent text-white font-bold hover:text-[#e85c1a] transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-[#e85c1a]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.4 11.4 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.58 1 1 0 01-.25 1.02l-2.2 2.19z" />
              </svg>
              <span>09308327111</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between">
          {/* Brand Logo: Icon + KASHISH AD (Enlarged and lengthened on mobile) */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3.5 group py-1 shrink-0" onClick={closeMenu} aria-label="Kashish Ad Home">
            <img
              src="/assets/logo-icon.png"
              alt="Kashish Ad Monogram"
              className="h-11 sm:h-12 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform shrink-0"
            />
            <div className="flex flex-col justify-center">
              <span className="font-raphtalia text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.14em] text-[#1a3a6b] leading-none">
                Kashish Ad®
              </span>
              <span className="text-[8.5px] sm:text-[9.5px] md:text-[10.5px] font-bold tracking-[0.18em] text-[#475569] uppercase leading-tight mt-1">
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
                  ? 'text-[#1a3a6b] bg-[#eff4fb]'
                  : 'text-slate-700 hover:text-[#e85c1a] hover:bg-slate-50'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${isActive
                  ? 'text-[#1a3a6b] bg-[#eff4fb]'
                  : 'text-slate-700 hover:text-[#e85c1a] hover:bg-slate-50'
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/machinery"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${isActive
                  ? 'text-[#1a3a6b] bg-[#eff4fb]'
                  : 'text-slate-700 hover:text-[#e85c1a] hover:bg-slate-50'
                }`
              }
            >
              Machinery
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${isActive
                  ? 'text-[#1a3a6b] bg-[#eff4fb]'
                  : 'text-slate-700 hover:text-[#e85c1a] hover:bg-slate-50'
                }`
              }
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${isActive
                  ? 'text-[#1a3a6b] bg-[#eff4fb]'
                  : 'text-slate-700 hover:text-[#e85c1a] hover:bg-slate-50'
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${isActive
                  ? 'text-[#1a3a6b] bg-[#eff4fb]'
                  : 'text-slate-700 hover:text-[#e85c1a] hover:bg-slate-50'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Desktop CTAs & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:09308327111"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all shadow-2xs"
              title="Call Kashish Ad"
            >
              <svg className="w-3.5 h-3.5 text-[#e85c1a]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.4 11.4 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.58 1 1 0 01-.25 1.02l-2.2 2.19z" />
              </svg>
              <span>09308327111</span>
            </a>

            {/* Vibrant Orange Accent Button */}
            <a
              href="https://wa.me/919308327111?text=Hello%20Kashish%20Ad,%20I%20want%20to%20get%20a%20quote%20/%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#e85c1a] hover:bg-[#cf4e12] transition-all shadow-md shadow-orange-500/20 hover:scale-105 active:scale-95"
            >
              <span>GET A QUOTE</span>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
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

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-xl">
            <NavLink
              to="/"
              end
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-[#eff4fb] hover:text-[#1a3a6b]"
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-[#eff4fb] hover:text-[#1a3a6b]"
              onClick={closeMenu}
            >
              Services & Products
            </NavLink>
            <NavLink
              to="/machinery"
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-[#eff4fb] hover:text-[#1a3a6b]"
              onClick={closeMenu}
            >
              Machinery Plant
            </NavLink>
            <NavLink
              to="/gallery"
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-[#eff4fb] hover:text-[#1a3a6b]"
              onClick={closeMenu}
            >
              Executed Projects
            </NavLink>
            <NavLink
              to="/about"
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-[#eff4fb] hover:text-[#1a3a6b]"
              onClick={closeMenu}
            >
              About Kashish Ad
            </NavLink>
            <NavLink
              to="/contact"
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-[#eff4fb] hover:text-[#1a3a6b]"
              onClick={closeMenu}
            >
              Contact & Store Location
            </NavLink>

            {/* Social Follow in Mobile Drawer */}
            <div className="pt-3 pb-1 border-t border-slate-100 flex items-center justify-between px-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Follow Us:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/kashishadpatna"
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
                  href="https://www.facebook.com/kashishadpatna/"
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
                href="tel:09308327111"
                className="w-full text-center py-2.5 rounded-xl font-bold text-xs text-slate-800 bg-slate-100 border border-slate-200"
              >
                Call: 09308327111
              </a>
              <a
                href="https://wa.me/919308327111?text=Hello%20Kashish%20Ad,%20I%20want%20to%20get%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-white bg-[#e85c1a]"
              >
                GET A QUOTE (09308327111)
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
