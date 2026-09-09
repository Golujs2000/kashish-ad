import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#102447] text-slate-300 border-t border-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Col with Crisp Logo & Google Review Trust Badge */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group py-1" aria-label="Kashish Ad Home">
              <img
                src="/assets/logo-icon.png"
                alt="Kashish Ad Monogram"
                className="h-11 w-auto object-contain brightness-0 invert group-hover:scale-105 transition-transform shrink-0"
              />
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-start">
                  <span className="font-raphtalia text-xl sm:text-2xl font-bold tracking-[0.14em] text-white leading-tight">
                    Kashish Ad
                  </span>
                  <span className="font-sans text-[10px] sm:text-[11px] font-black text-white ml-0.5 leading-none">
                    ®
                  </span>
                </div>
                <span className="text-[9px] font-bold tracking-widest text-slate-300 uppercase leading-tight mt-0.5">
                  — LET'S PRINT BRANDING —
                </span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed text-slate-300">
              Patna's premier manufacturing center for high-end LED glow sign boards, 3D acrylic letters, UV flatbed printing, and CNC architectural laser cutting.
            </p>

            {/* Google Reviews Trust Card in Footer */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                {/* Multi-Color Google G */}
                <svg className="w-5 h-5" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-amber-400 text-xs">★★★★★</span>
                  <span className="text-xs font-black text-white">4.6</span>
                </div>
                <div className="text-[11px] text-slate-300 font-medium">61 Verified Google Reviews</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-white/10 border border-white/20 text-white">
                GSTIN: 10AENPH7809D1ZT
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#e85c1a] text-white">
                Estd. 2017
              </span>
            </div>

            {/* Social Follow Links */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.instagram.com/kashishadpatna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-600/30 to-pink-600/30 hover:from-purple-600/50 hover:to-pink-600/50 border border-pink-500/30 text-white text-xs font-semibold transition-all hover:scale-105"
                  title="Follow Kashish Ad on Instagram @kashishadpatna"
                >
                  <svg className="w-4 h-4 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/kashishadpatna/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 text-white text-xs font-semibold transition-all hover:scale-105"
                  title="Follow Kashish Ad on Facebook @kashishadpatna"
                >
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Core Services with Colorful Bullet Arrows */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#e85c1a] mb-4">
              Our Core Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/services/uv-digital" className="hover:text-[#e85c1a] transition-colors flex items-center gap-1.5">
                  <span className="text-[#e85c1a] font-bold">›</span>
                  <span>UV Flatbed Digital Printing</span>
                </Link>
              </li>
              <li>
                <Link to="/services/solvent-vinyl" className="hover:text-[#e85c1a] transition-colors flex items-center gap-1.5">
                  <span className="text-[#e85c1a] font-bold">›</span>
                  <span>Solvent Vinyl &amp; Store Graphics</span>
                </Link>
              </li>
              <li>
                <Link to="/services/led-acrylic-letters" className="hover:text-[#e85c1a] transition-colors flex items-center gap-1.5">
                  <span className="text-[#e85c1a] font-bold">›</span>
                  <span>3D LED Acrylic Letters (12V)</span>
                </Link>
              </li>
              <li>
                <Link to="/services/ss-sign-board" className="hover:text-[#e85c1a] transition-colors flex items-center gap-1.5">
                  <span className="text-[#e85c1a] font-bold">›</span>
                  <span>Stainless Steel 304 Signboards</span>
                </Link>
              </li>
              <li>
                <Link to="/services/glow-sign-board" className="hover:text-[#e85c1a] transition-colors flex items-center gap-1.5">
                  <span className="text-[#e85c1a] font-bold">›</span>
                  <span>LED Glow Sign Boxes</span>
                </Link>
              </li>
              <li>
                <Link to="/services/cnc-laser-jali" className="hover:text-[#e85c1a] transition-colors flex items-center gap-1.5">
                  <span className="text-[#e85c1a] font-bold">›</span>
                  <span>CNC Laser Jali &amp; Gate Cutting</span>
                </Link>
              </li>
              <li>
                <Link to="/services/rollup-standee" className="hover:text-[#e85c1a] transition-colors flex items-center gap-1.5">
                  <span className="text-[#e85c1a] font-bold">›</span>
                  <span>Rollup Standees &amp; Exhibition Displays</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Navigation with Colorful Bullet Arrows */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#e85c1a] mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/" className="hover:text-[#e85c1a] transition-colors flex items-center gap-1.5">
                  <span className="text-[#e85c1a] font-bold">›</span>
                  <span>Home Page</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#e85c1a] transition-colors flex items-center gap-1.5">
                  <span className="text-[#e85c1a] font-bold">›</span>
                  <span>All 17 Products &amp; Services</span>
                </Link>
              </li>
              <li>
                <Link to="/machinery" className="hover:text-[#e85c1a] transition-colors flex items-center gap-1.5">
                  <span className="text-[#e85c1a] font-bold">›</span>
                  <span>In-House Machinery (8 Units)</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#e85c1a] transition-colors flex items-center gap-1.5">
                  <span className="text-[#e85c1a] font-bold">›</span>
                  <span>Executed Projects Portfolio</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#e85c1a] transition-colors flex items-center gap-1.5">
                  <span className="text-[#e85c1a] font-bold">›</span>
                  <span>About Us &amp; CEO S Haidar</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#e85c1a] transition-colors flex items-center gap-1.5">
                  <span className="text-[#e85c1a] font-bold">›</span>
                  <span>Store Location &amp; Directions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details with Colorful Icons */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#e85c1a] mb-4">
              Contact &amp; Workshop
            </h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              {/* Address with Colorful Location Icon */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#e85c1a]/20 border border-[#e85c1a]/40 text-[#e85c1a] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                  </svg>
                </div>
                <p className="leading-relaxed">
                  <strong className="text-white block">Capital Tower, A-6 &amp; B-16</strong>
                  Fraser Rd, Old Jakkanpur, Lodipur, Patna, Bihar 800001
                </p>
              </div>

              {/* Phone with Sky Blue Call Icon */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-sky-500/20 border border-sky-500/40 text-sky-400 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.4 11.4 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.58 1 1 0 01-.25 1.02l-2.2 2.19z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Direct Hotline:</span>
                  <a href="tel:09308327111" className="font-bold text-white hover:text-[#e85c1a] transition-colors">
                    09308327111
                  </a>
                </div>
              </div>

              {/* WhatsApp with Official Green Icon */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.19 8.19 0 01-5.82 2.42c-1.46 0-2.88-.39-4.14-1.13l-.3-.18-3.08.81.82-3-.19-.31a8.21 8.21 0 01-1.26-4.43c0-4.54 3.7-8.24 8.24-8.24z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">WhatsApp Orders:</span>
                  <a
                    href="https://wa.me/919308327111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-400 hover:underline"
                  >
                    09308327111
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-400 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Official Email:</span>
                  <a
                    href="mailto:kashishadpatna@gmail.com"
                    className="font-bold text-white hover:text-[#e85c1a] transition-colors break-all"
                  >
                    kashishadpatna@gmail.com
                  </a>
                </div>
              </div>

              {/* Working Hours with Amber Clock Icon */}
              <div className="flex items-center gap-3 pt-1">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div className="text-[11px] text-slate-300">
                  <span className="font-semibold text-white block">Mon – Sat: 9:00 AM – 9:00 PM</span>
                  <span>Sunday by appointment • Emergency rush orders</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blue-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2026 <strong className="text-white">Kashish Ad®</strong>. All Rights Reserved. CEO: S Haidar.</p>
          <div className="flex items-center gap-4 font-mono text-slate-400 text-[11px]">
            <span>Capital Tower, Fraser Road, Patna</span>
            <span>•</span>
            <span className="text-white font-bold">09308327111</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
