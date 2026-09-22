import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  CONTACT_INFO,
  LOCATION_INFO,
  WORKING_HOURS
} from '../data/siteData';
import { PRODUCTS } from '../data/products';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const searchContainerRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  // Close search dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsSearchOpen(false);
    setMenuOpen(false);
    setServicesDropdown(false);
  }, [location.pathname]);

  // Real-time search suggestions
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q || q.length < 2) return [];

    return PRODUCTS.filter((item) => {
      const matchTitle = item.title?.toLowerCase().includes(q);
      const matchDesc = item.description?.toLowerCase().includes(q);
      const matchCat = item.category?.toLowerCase().includes(q);
      const matchFeatures = item.features?.some((f) => f.toLowerCase().includes(q));
      const matchMaterials = item.materials?.some((m) => m.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchCat || matchFeatures || matchMaterials;
    }).slice(0, 6);
  }, [searchQuery]);

  const handleSearchSubmit = (e) => {
    e?.preventDefault();
    const query = searchQuery.trim();
    if (query) {
      navigate(`/services?q=${encodeURIComponent(query)}`);
      setIsSearchOpen(false);
    } else {
      navigate('/services');
    }
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdown(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdown(false);
    }, 150);
  };

  const serviceCategories = [
    { label: 'Flex & Outdoor Printing', path: '/services?category=largeformat', desc: 'Frontlit/Backlit flex, Star flex & hoardings' },
    { label: 'UV Flatbed Digital Printing', path: '/services/uv-digital', desc: 'Direct print on glass, acrylic, wood & ACP' },
    { label: 'Solvent Vinyl & Fleet Wraps', path: '/services/solvent-vinyl', desc: 'Waterproof vinyl graphics & vehicle branding' },
    { label: 'Wall Wraps & 3D Wallpaper', path: '/services/wall-wraps', desc: 'Architectural wall decor & digital wall painting' },
    { label: '3D LED Acrylic Letters', path: '/services/led-acrylic-letters', desc: 'Glossy acrylic, titanium SS & halo letters' },
    { label: 'ACP Boards & Facade Cladding', path: '/services/acp-board', desc: 'Architectural ACP, video walls & display boards' },
    { label: 'Promotional Canopy & Standees', path: '/services?category=promotional', desc: 'Canopy tents, rollup standees, flags & umbrellas' },
    { label: 'In-Shop & Corporate Spaces', path: '/services/in-shop-branding', desc: 'Retail store displays, frosted film & office branding' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-xs">
        {/* 1. Slim Top Utility Strip */}
        <div className="bg-[#081a3e] text-slate-200 border-b border-blue-900/40 text-[11px] sm:text-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between gap-4">
            {/* Left: Location & In-House Production Notice */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <a
                href={LOCATION_INFO.googleMapsCidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                title="View Kashish Ad on Google Maps"
              >
                <svg className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
                <span className="font-medium hidden sm:inline">{LOCATION_INFO.shortAddress}</span>
                <span className="font-medium sm:hidden">Fraser Rd, Patna</span>
              </a>

              <span className="hidden md:inline-block w-1 h-1 rounded-full bg-slate-500" />

              <div className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-medium">Direct In-House Factory • Estd 1985 (41+ Yrs) • {WORKING_HOURS.summary}</span>
              </div>
            </div>

            {/* Right: Phone & Rating */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="hidden sm:inline-flex items-center gap-1.5 text-slate-300">
                <span className="text-amber-400 text-xs">★</span>
                <span className="font-semibold text-slate-200">4.6</span>
                <span className="text-slate-400 text-[11px]">(62 Google Reviews)</span>
              </div>

              <span className="w-px h-3 bg-blue-800/80 hidden sm:block" />

              <a
                href={CONTACT_INFO.phoneTel}
                className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white font-bold transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.4 11.4 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.58 1 1 0 01-.25 1.02l-2.2 2.19z" />
                </svg>
                <span>{CONTACT_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. Main Header Row: Logo | Centered Sleek Search Bar | Quick WhatsApp */}
        <div className="border-b border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4 lg:gap-8">
            {/* Left: Brand Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
              onClick={closeMenu}
              aria-label="Kashish Ad Home"
            >
              <img
                src="/assets/logo-icon.png"
                alt="Kashish Ad Monogram"
                className="h-9 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform shrink-0"
              />
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-start">
                  <span className="font-raphtalia text-xl sm:text-2xl font-bold tracking-[0] text-[#1346a8] leading-none">
                    Kashish Ad
                  </span>
                  <span className="font-sans text-[10px] sm:text-xs font-black text-[#1346a8] ml-0.5 leading-none">
                    ®
                  </span>
                </div>
                <span className="text-[7.5px] sm:text-[9px] font-bold tracking-[0.12em] text-[#475569] uppercase leading-tight mt-0.5">
                  — LET'S PRINT BRANDING —
                </span>
              </div>
            </Link>

            {/* Center: Sleek Search Bar Matching Reference (Rounded with circular blue search icon button) */}
            <div className="hidden md:block flex-1 max-w-xl relative" ref={searchContainerRef}>
              <form onSubmit={handleSearchSubmit} className="relative">
                <div className="relative w-full flex items-center rounded-full border border-slate-300 bg-white pl-4 pr-1.5 py-1.5 shadow-2xs">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setIsSearchOpen(true);
                    }}
                    onFocus={() => setIsSearchOpen(true)}
                    placeholder="Search 38+ services: Flex, 3D Letters, Canopy, ACP, Wall Wraps..."
                    className="w-full text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 bg-transparent border-none outline-none focus:outline-none focus:ring-0"
                    style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery('');
                        setIsSearchOpen(false);
                      }}
                      className="p-1 mr-1 text-slate-400 hover:text-slate-600 rounded-full cursor-pointer outline-none focus:outline-none"
                      style={{ outline: 'none', border: 'none' }}
                      title="Clear"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                  {/* Clean circular blue search icon button (like reference image) */}
                  <button
                    type="submit"
                    className="w-8 h-8 rounded-full bg-[#1346a8] hover:bg-[#0f3a8e] text-white flex items-center justify-center transition-colors shadow-2xs shrink-0 cursor-pointer outline-none focus:outline-none"
                    style={{ outline: 'none', border: 'none' }}
                    aria-label="Submit Search"
                    title="Search"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </form>

              {/* Instant Search Autocomplete Dropdown */}
              {isSearchOpen && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-2 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    <span>Suggested Services ({searchResults.length})</span>
                    <span className="text-[#1346a8]">Instant Match</span>
                  </div>

                  <div className="divide-y divide-slate-100 max-h-80 overflow-y-auto">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        to={`/services/${product.id}`}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="p-3 flex items-center gap-3 hover:bg-blue-50/70 transition-colors group"
                      >
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-11 h-11 rounded-lg object-cover border border-slate-200 shrink-0 bg-slate-100"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#1346a8] truncate">
                            {product.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 truncate mt-0.5">
                            {product.description}
                          </p>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 shrink-0 group-hover:bg-[#1346a8] group-hover:text-white transition-colors">
                          View →
                        </span>
                      </Link>
                    ))}
                  </div>

                  <button
                    onClick={handleSearchSubmit}
                    className="w-full py-2.5 bg-blue-50 text-center text-xs font-bold text-[#1346a8] hover:bg-blue-100 transition-colors border-t border-blue-100 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>View all matching results for &ldquo;{searchQuery}&rdquo;</span>
                    <span>→</span>
                  </button>
                </div>
              )}
            </div>

            {/* Right: Phone Number + WhatsApp Quote & Mobile Menu Toggle */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              {/* Direct Phone Number before WhatsApp Quote */}
              <a
                href={CONTACT_INFO.phoneTel}
                className="hidden sm:inline-flex items-center gap-1.5 text-slate-800 hover:text-[#1346a8] font-extrabold text-xs sm:text-[13.5px] transition-colors py-1"
                title={`Call ${CONTACT_INFO.phoneFormatted}`}
              >
                <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.4 11.4 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.58 1 1 0 01-.25 1.02l-2.2 2.19z" />
                </svg>
                <span className="tracking-wide">{CONTACT_INFO.phoneFormatted}</span>
              </a>

              <span className="w-px h-4 bg-slate-200 hidden sm:block" />

              {/* WhatsApp Quote Button */}
              <a
                href={CONTACT_INFO.getWhatsAppUrl('Hello Kashish Ad, I want to inquire about printing & signage services.')}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs transition-colors shadow-2xs"
                title="Chat on WhatsApp"
              >
                <svg className="w-4 h-4 text-[#25D366] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.158.571 4.183 1.564 5.934l-1.663 6.079 6.257-1.636c1.684.918 3.609 1.443 5.659 1.443 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>WhatsApp Quote</span>
              </a>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                className="md:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
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

          {/* Mobile Search Bar (Displayed below logo on phones) */}
          <div className="md:hidden px-4 pb-2.5 pt-0.5">
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="relative w-full flex items-center rounded-full border border-slate-300 bg-white pl-3.5 pr-1 py-1 shadow-2xs">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 38+ printing & signage services..."
                  className="w-full text-xs text-slate-900 placeholder:text-slate-400 bg-transparent border-none outline-none focus:outline-none focus:ring-0"
                  style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
                />
                <button
                  type="submit"
                  className="w-7 h-7 rounded-full bg-[#1346a8] text-white flex items-center justify-center shrink-0 cursor-pointer outline-none focus:outline-none"
                  style={{ outline: 'none', border: 'none' }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* 3. PROMINENT NAVIGATION MENU BAR (100% VISIBLE WITH ZERO OVERFLOW SCROLLBAR) */}
        <div className="hidden md:block bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between text-xs lg:text-[13.5px] font-bold" aria-label="Main Website Navigation">
              <div className="flex items-center space-x-1 lg:space-x-1.5 py-1">
                {/* Home Link */}
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg transition-colors ${isActive
                      ? 'text-[#1346a8] bg-blue-100/70 font-black'
                      : 'text-slate-700 hover:text-[#1346a8] hover:bg-white'
                    }`
                  }
                >
                  Home
                </NavLink>

                {/* All Services with Dropdown Trigger */}
                <div
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-lg transition-colors inline-flex items-center gap-1.5 ${isActive
                        ? 'text-[#1346a8] bg-blue-100/70 font-black'
                        : 'text-slate-700 hover:text-[#1346a8] hover:bg-white'
                      }`
                    }
                  >
                    <span>All Services</span>
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] font-extrabold bg-[#1346a8] text-white">
                      38+
                    </span>
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-[#1346a8]' : 'text-slate-400'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </NavLink>

                  {/* Mega Dropdown Menu */}
                  {/* Mega Dropdown Menu */}
                  {servicesDropdown && (
                    <div className="absolute top-full left-0 mt-1 w-[560px] bg-white rounded-2xl border border-slate-200 shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="px-3 py-2 bg-slate-50 rounded-xl mb-2 flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        <span>38+ In-House Printing &amp; Signage Services</span>
                        <Link to="/services" className="text-[#1346a8] hover:underline" onClick={() => setServicesDropdown(false)}>
                          View All 38+ Services →
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {/* Printing Category */}
                        <div className="space-y-1">
                          <div className="text-[10px] font-extrabold text-[#1346a8] uppercase tracking-wider px-2 py-0.5 bg-blue-50/70 rounded-md">
                            Printing &amp; Large Format
                          </div>
                          {serviceCategories.slice(0, 4).map((cat, idx) => (
                            <Link
                              key={idx}
                              to={cat.path}
                              className="block p-2 rounded-xl hover:bg-blue-50/80 transition-colors group"
                              onClick={() => setServicesDropdown(false)}
                            >
                              <div className="text-xs font-bold text-slate-900 group-hover:text-[#1346a8] flex items-center justify-between">
                                <span>{cat.label}</span>
                                <span className="text-slate-300 group-hover:text-[#1346a8] text-xs">→</span>
                              </div>
                              <div className="text-[11px] text-slate-500 truncate mt-0.5">
                                {cat.desc}
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Signage & 3D Category */}
                        <div className="space-y-1">
                          <div className="text-[10px] font-extrabold text-[#1346a8] uppercase tracking-wider px-2 py-0.5 bg-blue-50/70 rounded-md">
                            Signage &amp; 3D Fabrication
                          </div>
                          {serviceCategories.slice(4).map((cat, idx) => (
                            <Link
                              key={idx}
                              to={cat.path}
                              className="block p-2 rounded-xl hover:bg-blue-50/80 transition-colors group"
                              onClick={() => setServicesDropdown(false)}
                            >
                              <div className="text-xs font-bold text-slate-900 group-hover:text-[#1346a8] flex items-center justify-between">
                                <span>{cat.label}</span>
                                <span className="text-slate-300 group-hover:text-[#1346a8] text-xs">→</span>
                              </div>
                              <div className="text-[11px] text-slate-500 truncate mt-0.5">
                                {cat.desc}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] px-2 text-slate-500">
                        <span>Direct Factory Production • Fraser Rd, Patna</span>
                        <Link to="/services?category=largeformat" className="font-bold text-[#1346a8] hover:underline" onClick={() => setServicesDropdown(false)}>
                          All Print Solutions →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Direct High-Demand Category Shortcuts */}
                <NavLink
                  to="/services?category=largeformat"
                  className={({ isActive }) =>
                    `px-2.5 py-2 rounded-lg transition-colors inline-block ${isActive && location.search.includes('largeformat')
                      ? 'text-[#1346a8] bg-blue-100/70 font-black'
                      : 'text-slate-700 hover:text-[#1346a8] hover:bg-white'
                    }`
                  }
                >
                  Print &amp; Flex
                </NavLink>

                <NavLink
                  to="/services/led-acrylic-letters"
                  className={({ isActive }) =>
                    `px-2.5 py-2 rounded-lg transition-colors inline-block ${isActive
                      ? 'text-[#1346a8] bg-blue-100/70 font-black'
                      : 'text-slate-700 hover:text-[#1346a8] hover:bg-white'
                    }`
                  }
                >
                  3D LED Letters
                </NavLink>

                <NavLink
                  to="/services/acp-board"
                  className={({ isActive }) =>
                    `px-2.5 py-2 rounded-lg transition-colors inline-block ${isActive
                      ? 'text-[#1346a8] bg-blue-100/70 font-black'
                      : 'text-slate-700 hover:text-[#1346a8] hover:bg-white'
                    }`
                  }
                >
                  ACP &amp; Boards
                </NavLink>

                <NavLink
                  to="/services?category=promotional"
                  className={({ isActive }) =>
                    `px-2.5 py-2 rounded-lg transition-colors hidden xl:inline-block ${isActive && location.search.includes('promotional')
                      ? 'text-[#1346a8] bg-blue-100/70 font-black'
                      : 'text-slate-700 hover:text-[#1346a8] hover:bg-white'
                    }`
                  }
                >
                  Canopy &amp; Promo
                </NavLink>

                {/* Primary Site Sections */}
                <NavLink
                  to="/machinery"
                  className={({ isActive }) =>
                    `px-2.5 py-2 rounded-lg transition-colors ${isActive
                      ? 'text-[#1346a8] bg-blue-100/70 font-black'
                      : 'text-slate-700 hover:text-[#1346a8] hover:bg-white'
                    }`
                  }
                >
                  Machinery
                </NavLink>

                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    `px-2.5 py-2 rounded-lg transition-colors ${isActive
                      ? 'text-[#1346a8] bg-blue-100/70 font-black'
                      : 'text-slate-700 hover:text-[#1346a8] hover:bg-white'
                    }`
                  }
                >
                  Gallery
                </NavLink>

                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    `px-2.5 py-2 rounded-lg transition-colors ${isActive
                      ? 'text-[#1346a8] bg-blue-100/70 font-black'
                      : 'text-slate-700 hover:text-[#1346a8] hover:bg-white'
                    }`
                  }
                >
                  Portfolio
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `px-2.5 py-2 rounded-lg transition-colors ${isActive
                      ? 'text-[#1346a8] bg-blue-100/70 font-black'
                      : 'text-slate-700 hover:text-[#1346a8] hover:bg-white'
                    }`
                  }
                >
                  About Us
                </NavLink>

                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `px-2.5 py-2 rounded-lg transition-colors ${isActive
                      ? 'text-[#1346a8] bg-blue-100/70 font-black'
                      : 'text-slate-700 hover:text-[#1346a8] hover:bg-white'
                    }`
                  }
                >
                  Contact
                </NavLink>
              </div>
            </nav>
          </div>
        </div>

        {/* 4. Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-xl max-h-[80vh] overflow-y-auto">
            {/* Quick Links */}
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 pt-2">
              Main Menu
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/"
                className="px-3 py-2 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 hover:bg-blue-50 hover:text-[#1346a8]"
                onClick={closeMenu}
              >
                🏠 Home
              </Link>
              <Link
                to="/services"
                className="px-3 py-2 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 hover:bg-blue-50 hover:text-[#1346a8]"
                onClick={closeMenu}
              >
                📦 All Services (38+)
              </Link>
              <Link
                to="/machinery"
                className="px-3 py-2 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 hover:bg-blue-50 hover:text-[#1346a8]"
                onClick={closeMenu}
              >
                🏭 Machinery
              </Link>
              <Link
                to="/gallery"
                className="px-3 py-2 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 hover:bg-blue-50 hover:text-[#1346a8]"
                onClick={closeMenu}
              >
                🖼️ Gallery
              </Link>
              <Link
                to="/portfolio"
                className="px-3 py-2 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 hover:bg-blue-50 hover:text-[#1346a8]"
                onClick={closeMenu}
              >
                📄 Portfolio PDF
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 hover:bg-blue-50 hover:text-[#1346a8]"
                onClick={closeMenu}
              >
                ℹ️ About Us
              </Link>
              <Link
                to="/contact"
                className="px-3 py-2 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 hover:bg-blue-50 hover:text-[#1346a8]"
                onClick={closeMenu}
              >
                📍 Contact Us
              </Link>
            </div>

            {/* Service Categories */}
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 pt-2 border-t border-slate-100">
              Popular Service Categories
            </div>
            <div className="space-y-1">
              {serviceCategories.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#1346a8]"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a
                href={CONTACT_INFO.phoneTel}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200"
              >
                <svg className="w-4 h-4 text-[#1346a8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Hotline: {CONTACT_INFO.phoneFormatted}</span>
              </a>
              <a
                href={CONTACT_INFO.getWhatsAppUrl('Hello Kashish Ad, I want to get a quote.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-emerald-600"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.158.571 4.183 1.564 5.934l-1.663 6.079 6.257-1.636c1.684.918 3.609 1.443 5.659 1.443 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>WhatsApp Quote</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
