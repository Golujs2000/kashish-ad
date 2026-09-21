import React from 'react';
import { Link } from 'react-router-dom';
import {
  COMPANY_INFO,
  CONTACT_INFO,
  LOCATION_INFO,
  SOCIAL_LINKS
} from '../data/siteData';

export default function Footer() {
  const outdoorFlexLinks = [
    { name: 'Frontlit & Backlit Flex', path: '/services/frontlit-flex' },
    { name: 'Flex Banner with MS Frame', path: '/services/flex-with-frame' },
    { name: 'Flex Printing & Mounting', path: '/services/flex-mounting' },
    { name: 'Outdoor Hoardings & Billboards', path: '/services/hoarding-printing' },
    { name: 'Solvent Vinyl Printing', path: '/services/solvent-vinyl' },
    { name: 'UV Digital Flatbed Printing', path: '/services/uv-digital' },
    { name: 'Clear Transparent Vinyl', path: '/services/clear-vinyl' },
    { name: 'Backlit Translucent Vinyl', path: '/services/backlit-vinyl' },
    { name: 'Fabric & Textile Banners', path: '/services/fabric-banner' },
  ];

  const signageBoardLinks = [
    { name: 'Glossy LED Acrylic 3D Letters', path: '/services/led-acrylic-letters' },
    { name: 'Stainless Steel Sign Board', path: '/services/ss-sign-board' },
    { name: 'LED Glow Sign Board & Box', path: '/services/glow-sign-board' },
    { name: 'ACP Sign Board & Cladding', path: '/services/acp-board' },
    { name: 'LED Slim Snap Lightbox', path: '/services/led-slim-lightbox' },
    { name: 'Digital LED Video Walls (DOOH)', path: '/services/digital-display-board' },
    { name: 'Large Illuminated Sign Structures', path: '/services/large-illuminated-signage' },
    { name: 'House & Executive Name Plates', path: '/services/name-plates' },
    { name: 'CNC Laser Jali & Safety Gates', path: '/services/cnc-laser-jali' },
    { name: 'Laser-Cut MDF & WPC Panels', path: '/services/mdf-board' },
  ];

  const promoMerchLinks = [
    { name: 'Promotional Canopy Tent & Gazebo', path: '/services/promotional-canopy' },
    { name: 'Rollup Banner Standee', path: '/services/rollup-standee' },
    { name: 'Branded Promotional Umbrellas', path: '/services/umbrella-branding' },
    { name: 'Teardrop & Feather Flags', path: '/services/promotional-flags' },
    { name: 'Custom T-Shirt & Polo Printing', path: '/services/tshirt-printing' },
    { name: 'Custom Branded Caps', path: '/services/cap-printing' },
    { name: 'Custom Ceramic Coffee Mugs', path: '/services/cup-mug-printing' },
    { name: 'Trophies, Mementos & Awards', path: '/services/trophy-memento-awards' },
    { name: 'Corporate Merchandise & Gifts', path: '/services/corporate-gifting' },
    { name: 'Bill Books & Corporate Catalogs', path: '/services/paper-stationery' },
  ];

  const corporateWallLinks = [
    { name: 'In-Shop & Retail Store Branding', path: '/services/in-shop-branding' },
    { name: 'Corporate Office Interior Branding', path: '/services/office-branding' },
    { name: 'High-Tack Vinyl Wall Wraps', path: '/services/wall-wraps' },
    { name: 'Outdoor Digital Wall Painting', path: '/services/digital-wall-painting' },
    { name: 'One-Way Vision & Frosted Film', path: '/services/glass-film' },
    { name: 'Custom Labels & Contour Stickers', path: '/services/label-sticker' },
    { name: '3D Embossed Wall Graphics', path: '/services/3d-wallpaper' },
    { name: 'Architectural UV Glass Printing', path: '/services/uv-glass' },
    { name: 'Turnkey Branding Fabrication', path: '/services/branding-fabrication' },
  ];

  const serviceAreas = [
    'Fraser Road', 'Boring Road', 'Kankarbagh', 'Bailey Road', 'Exhibition Road',
    'Danapur', 'Patliputra', 'Rajendra Nagar', 'Ashiana Nagar', 'Gandhi Maidan',
    'Anisabad', 'Saguna More', 'Digha', 'Gaya', 'Muzaffarpur', 'Bhagalpur',
    'Darbhanga', 'Purnia', 'Begusarai', 'Bihar Sharif', 'Samastipur', 'Arrah',
    'Chhapra', 'Motihari', 'Katihar', 'Sasaram', 'Dehri', 'Bettiah', 'Hajipur'
  ];

  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main 5-Column Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-slate-100">
          
          {/* Col 1: Brand Logo, Address & Contact (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group py-1" aria-label="Kashish Ad Home">
              <img
                src={COMPANY_INFO.logoIcon}
                alt="Kashish Ad Monogram"
                className="h-11 w-auto object-contain group-hover:scale-105 transition-transform shrink-0"
              />
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-start">
                  <span className="font-raphtalia text-2xl font-bold tracking-[0] text-[#1346a8] leading-tight">
                    {COMPANY_INFO.name}
                  </span>
                  <span className="font-sans text-[11px] font-black text-[#1346a8] ml-0.5 leading-none">
                    {COMPANY_INFO.registeredSymbol}
                  </span>
                </div>
                <span className="text-[9px] font-bold tracking-widest text-[#475569] uppercase leading-tight mt-0.5">
                  — {COMPANY_INFO.tagline} —
                </span>
              </div>
            </Link>

            <p className="text-xs leading-relaxed text-slate-500 max-w-sm">
              Bihar's premier direct in-house manufacturing center for 3D LED acrylic letters, architectural sign boards, UV flatbed printing, promotional merchandise, canopy tents and vehicle branding.
            </p>

            {/* Address */}
            <div className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed pt-1">
              <svg className="w-4 h-4 text-[#1346a8] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <a
                href={LOCATION_INFO.googleMapsCidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1346a8] transition-colors"
                title="View on Google Maps"
              >
                {LOCATION_INFO.fullAddress}
              </a>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="space-y-1.5 pt-1 text-xs">
              <div className="flex items-center gap-2 text-slate-800 font-bold">
                <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.4 11.4 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.58 1 1 0 01-.25 1.02l-2.2 2.19z" />
                </svg>
                <a href={CONTACT_INFO.phoneTel} className="hover:text-[#1346a8] transition-colors">
                  {CONTACT_INFO.phoneFormatted}
                </a>
                <span className="text-slate-300">|</span>
                <a href={`tel:${CONTACT_INFO.secondaryPhone}`} className="hover:text-[#1346a8] transition-colors">
                  {CONTACT_INFO.secondaryPhoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2 text-slate-600">
                <svg className="w-3.5 h-3.5 text-[#25D366] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.158.571 4.183 1.564 5.934l-1.663 6.079 6.257-1.636c1.684.918 3.609 1.443 5.659 1.443 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
                </svg>
                <a
                  href={CONTACT_INFO.getWhatsAppUrl('Hello Kashish Ad, I want to get a quote.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 font-semibold transition-colors"
                >
                  WhatsApp Quotation Hotline
                </a>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono font-bold text-slate-500">
              <span className="bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                GSTIN: {COMPANY_INFO.gstin}
              </span>
              <span className="bg-blue-50 text-[#1346a8] border border-blue-100 px-2 py-0.5 rounded">
                Estd. {COMPANY_INFO.foundedYear}
              </span>
            </div>

            {/* Social Icons */}
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

          {/* Col 2: Outdoor, Flex & Large Format (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold font-display text-slate-900 uppercase tracking-wider mb-3">
              Outdoor &amp; Flex
            </h4>
            <ul className="space-y-1.5 text-xs">
              {outdoorFlexLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-slate-600 hover:text-[#1346a8] transition-colors leading-relaxed block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: 3D Signage & Boards (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold font-display text-slate-900 uppercase tracking-wider mb-3">
              3D Signs &amp; Boards
            </h4>
            <ul className="space-y-1.5 text-xs">
              {signageBoardLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-slate-600 hover:text-[#1346a8] transition-colors leading-relaxed block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Promotional & Apparel (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold font-display text-slate-900 uppercase tracking-wider mb-3">
              Promo &amp; Apparel
            </h4>
            <ul className="space-y-1.5 text-xs">
              {promoMerchLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-slate-600 hover:text-[#1346a8] transition-colors leading-relaxed block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Corporate Spaces & Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <h4 className="text-xs font-bold font-display text-slate-900 uppercase tracking-wider mb-3">
                Corporate &amp; Wall
              </h4>
              <ul className="space-y-1.5 text-xs">
                {corporateWallLinks.slice(0, 6).map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.path} className="text-slate-600 hover:text-[#1346a8] transition-colors leading-relaxed block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold font-display text-slate-900 uppercase tracking-wider mb-2">
                Quick Navigation
              </h4>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'All Services (38+)', path: '/services' },
                  { name: 'Machinery', path: '/machinery' },
                  { name: 'Gallery', path: '/gallery' },
                  { name: 'Portfolio PDF', path: '/portfolio' },
                  { name: 'About Us', path: '/about' },
                  { name: 'Contact', path: '/contact' }
                ].map((item, idx) => (
                  <Link key={idx} to={item.path} className="text-[#1346a8] hover:underline font-semibold">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bihar Service Areas Strip (SEO Chips) */}
        <div className="py-6 border-b border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Serving Patna &amp; All 38 Districts Across Bihar:
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {serviceAreas.map((area, idx) => (
              <span
                key={idx}
                className="inline-block text-[11px] text-slate-600 bg-slate-50 border border-slate-200/80 px-2.5 py-0.5 rounded-full hover:bg-blue-50 hover:text-[#1346a8] hover:border-blue-200 transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Direct Hotline */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}&reg;. All Rights Reserved. • Capital Tower, Fraser Road, Patna, Bihar.
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <span className="font-semibold text-slate-700">Design | Print | Brand | Grow</span>
            <span>•</span>
            <a href={CONTACT_INFO.phoneTel} className="font-bold text-[#1346a8] hover:underline">
              {CONTACT_INFO.phoneFormatted}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
