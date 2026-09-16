import React from 'react';
import { Link } from 'react-router-dom';
import {
  COMPANY_INFO,
  CONTACT_INFO,
  LOCATION_INFO,
  SOCIAL_LINKS
} from '../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Col 1: Brand Logo & Tagline (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group py-1" aria-label="Kashish Ad Home">
              <img
                src={COMPANY_INFO.logoIcon}
                alt="Kashish Ad Monogram"
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform shrink-0"
              />
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-start">
                  <span className="font-raphtalia text-2xl sm:text-3xl font-bold tracking-[0] text-[#1346a8] leading-tight">
                    {COMPANY_INFO.name}
                  </span>
                  <span className="font-sans text-[11px] sm:text-xs font-black text-[#1346a8] ml-0.5 leading-none">
                    {COMPANY_INFO.registeredSymbol}
                  </span>
                </div>
                <span className="text-[9.5px] font-bold tracking-widest text-[#475569] uppercase leading-tight mt-0.5">
                  — {COMPANY_INFO.tagline} —
                </span>
              </div>
            </Link>

            <p className="text-xs leading-relaxed text-slate-500 max-w-sm">
              Patna's premier manufacturing center for digital printing, LED 3D letters, solvent vinyl, ACP cladding and architectural signage fabrication.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs font-mono font-bold text-slate-500">
              <span className="bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                GSTIN: {COMPANY_INFO.gstin}
              </span>
              <span className="bg-blue-50 text-[#1346a8] border border-blue-100 px-2 py-0.5 rounded">
                Estd. {COMPANY_INFO.foundedYear}
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold font-display text-slate-900 tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Machinery', path: '/machinery' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact', path: '/contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-slate-600 hover:text-[#1346a8] font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Services (3 cols on lg - 2 subcolumns) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold font-display text-slate-900 tracking-wider mb-4">
              Our Services
            </h4>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs">
              <div>
                <ul className="space-y-2">
                  {[
                    'Digital Printing',
                    'Flex Printing',
                    'UV Printing',
                    '3D Letters',
                    'Glow Sign Boards',
                    'CNC Cutting'
                  ].map((s, idx) => (
                    <li key={idx}>
                      <Link to="/services" className="text-slate-600 hover:text-[#1346a8] font-medium transition-colors">
                        {s}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  {[
                    'ACP Cladding',
                    'Shop Branding',
                    'Vehicle Branding',
                    'Vinyl Printing',
                    'Customized Wallpapers',
                    'Printing & Advertising'
                  ].map((s, idx) => (
                    <li key={idx}>
                      <Link to="/services" className="text-slate-600 hover:text-[#1346a8] font-medium transition-colors">
                        {s}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Col 4: Get In Touch (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-display text-slate-900 tracking-wider mb-4">
              Get In Touch
            </h4>
            
            <div className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
              <svg className="w-4 h-4 text-[#1346a8] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Capital Tower, A-6 &amp; B-16, Fraser Road, Old Jakkanpur, Lodipur, Patna, Bihar 800001</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-800 font-bold">
              <svg className="w-4 h-4 text-[#1346a8] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.4 11.4 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.58 1 1 0 01-.25 1.02l-2.2 2.19z" />
              </svg>
              <a href={CONTACT_INFO.phoneTel} className="hover:text-[#1346a8] transition-colors">
                {CONTACT_INFO.phoneFormatted}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-600">
              <svg className="w-4 h-4 text-[#1346a8] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#1346a8] transition-colors">
                {CONTACT_INFO.email}
              </a>
            </div>

            {/* Social Icons matching reference */}
            <div className="pt-2 flex items-center gap-2">
              <a
                href={SOCIAL_LINKS.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-xs"
                title="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href={SOCIAL_LINKS.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-xs"
                title="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@kashishadpatna"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-xs"
                title="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/kashishad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-xs"
                title="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Slogan */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}&reg;. All Rights Reserved.
          </div>
          <div className="font-semibold text-slate-600 tracking-wider">
            Design | Print | Brand | Grow
          </div>
        </div>
      </div>
    </footer>
  );
}
