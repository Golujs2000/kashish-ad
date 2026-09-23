import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const ALL_SERVICES = [
  {
    id: 'uv-digital',
    title: 'UV Digital Flatbed Printing',
    category: 'largeformat',
    categoryName: 'UV Printing',
    description: 'Direct high-precision UV printing on acrylic, glass, wood, sunboard, leather & metal plates with zero fading.',
    badge: 'Best Seller',
    turnaround: 'Same Day / 24h',
    image: '/assets/images/services/thumb-uv-digital.jpg',
    link: '/services/uv-digital'
  },
  {
    id: 'led-acrylic-letters',
    title: 'Glossy LED Acrylic 3D Letters',
    category: 'signage',
    categoryName: '3D Letters',
    description: 'Custom 3D illuminated letters with waterproof Samsung LEDs and sharp channel bending for modern facades.',
    badge: 'Premium',
    turnaround: '2-3 Days',
    image: '/assets/images/services/thumb-led-acrylic-letters.jpg',
    link: '/services/led-acrylic-letters'
  },
  {
    id: 'ss-sign-board',
    title: 'Stainless Steel Sign Board',
    category: 'signage',
    categoryName: 'SS Signage',
    description: 'Architectural SS 304 anti-rust laser-cut and titanium gold boards built for long-term outdoor corporate elevations.',
    badge: 'Heavy Duty',
    turnaround: '3-4 Days',
    image: '/assets/images/services/thumb-ss-sign-board.jpg',
    link: '/services/ss-sign-board'
  },
  {
    id: 'glow-sign-board',
    title: 'LED Glow Sign Board & Box',
    category: 'signage',
    categoryName: 'Signboard',
    description: 'High-impact backlit flex & acrylic signboards with heavy-gauge MS metal frame and high-lumen weatherproof LEDs.',
    badge: 'Popular',
    turnaround: 'Same Day / 24h',
    image: '/assets/images/services/thumb-glow-sign-board.jpg',
    link: '/services/glow-sign-board'
  },
  {
    id: 'solvent-vinyl',
    title: 'Solvent Vinyl Printing & Wraps',
    category: 'largeformat',
    categoryName: 'Vinyl & Wraps',
    description: 'High-definition waterproof vinyl graphics for retail storefront facades, fleet vehicle wraps and showroom walls.',
    badge: 'Waterproof',
    turnaround: 'Same Day',
    image: '/assets/images/services/thumb-solvent-vinyl.jpg',
    link: '/services/solvent-vinyl'
  },
  {
    id: 'frontlit-flex',
    title: 'Frontlit & Backlit Flex Banner',
    category: 'largeformat',
    categoryName: 'Flex Banners',
    description: 'Cost-effective industrial flex printing from 240 to 440 GSM Star flex with welded hems and heavy brass eyelets.',
    badge: 'Speed Dispatch',
    turnaround: '2-4 Hours',
    image: '/assets/images/services/thumb-frontlit-flex.jpg',
    link: '/services/frontlit-flex'
  },
  {
    id: 'cnc-laser-jali',
    title: 'CNC Laser Jali & Gate Cutting',
    category: 'cnc',
    categoryName: 'CNC & Laser',
    description: 'Precision architectural patterns cut on MS steel, SS 304, brass, WPC and MDF for gates, railings & partitions.',
    badge: 'Architectural',
    turnaround: '3-5 Days',
    image: '/assets/images/services/thumb-cnc-laser-jali.jpg',
    link: '/services/cnc-laser-jali'
  },
  {
    id: 'rollup-standee',
    title: 'Rollup Banner Standee (6×3 ft)',
    category: 'promotional',
    categoryName: 'Exhibitions',
    description: 'Retractable portable aluminum banner stand with anti-curl synthetic non-tear media and padded canvas carry bag.',
    badge: 'Portable',
    turnaround: 'Ready in 3h',
    image: '/assets/images/services/thumb-rollup-standee.jpg',
    link: '/services/rollup-standee'
  },
  {
    id: 'acp-board',
    title: 'ACP Sign Board & Cladding',
    category: 'signage',
    categoryName: 'ACP Work',
    description: 'Modern aluminum composite panel facade cladding, precision groove routing, and 3D illuminated letters.',
    badge: 'Commercial',
    turnaround: '2-4 Days',
    image: '/assets/images/services/thumb-acp-board.jpg',
    link: '/services/acp-board'
  },
  {
    id: 'in-shop-branding',
    title: 'In-Shop & Retail Store Branding',
    category: 'corporate',
    categoryName: 'Retail Branding',
    description: 'Turnkey retail branding, wall graphics, promotional pillars, cash counters, and point-of-sale display fabrication.',
    badge: 'Turnkey',
    turnaround: 'Site Survey + 2d',
    image: '/assets/images/services/thumb-in-shop-branding.jpg',
    link: '/services/in-shop-branding'
  },
  {
    id: '3d-wallpaper',
    title: 'Customize Wallpapers Design & Printing',
    category: 'largeformat',
    categoryName: 'Wall Graphics',
    description: 'Bespoke custom wallpaper design, textured 3D printing and odorless eco-latex seamless murals for home and office.',
    badge: 'Custom Design',
    turnaround: '24-48 Hours',
    image: '/assets/images/services/thumb-3d-wallpaper.jpg',
    link: '/services/3d-wallpaper'
  },
  {
    id: 'promotional-canopy',
    title: 'Promotional Canopy Tent & Gazebo',
    category: 'promotional',
    categoryName: 'Outdoor Events',
    description: 'Heavy iron frame 6×6 ft & 4×4 ft foldable canopy tent with waterproof branded flex/fabric for outdoor activations.',
    badge: 'Outdoor Event',
    turnaround: 'Same Day / 24h',
    image: '/assets/images/services/thumb-promotional-canopy.jpg',
    link: '/services/promotional-canopy'
  },
  {
    id: 'clipon-board-works',
    title: 'Clipon Board Works (LED Slim Lightbox)',
    category: 'signage',
    categoryName: 'Clipon Boards',
    description: 'Custom Clipon Board Works and ultra-thin aluminum snap-frame LED lightboxes for instant poster and menu changes.',
    badge: 'Clipon Snap',
    turnaround: '24-48 Hours',
    image: '/assets/images/services/thumb-led-slim-lightbox.jpg',
    link: '/services/clipon-board-works'
  },
  {
    id: 'name-plates',
    title: 'House & Executive Name Plates',
    category: 'corporate',
    categoryName: 'Name Plates',
    description: 'Laser-etched acrylic, brass stud, and titanium gold outdoor resistant name plates for residences and cabins.',
    badge: 'Designer',
    turnaround: '2 Days',
    image: '/assets/images/services/thumb-name-plates.jpg',
    link: '/services/name-plates'
  },
  {
    id: 'glass-film',
    title: 'Frosted Glass Film & Vision',
    category: 'corporate',
    categoryName: 'Glass Graphics',
    description: 'One-way vision mesh and frosted privacy films with custom laser computer plot cutting for cabins & conference rooms.',
    badge: 'Privacy Film',
    turnaround: 'Same Day',
    image: '/assets/images/services/thumb-glass-film.jpg',
    link: '/services/glass-film'
  },
  {
    id: 'paper-stationery',
    title: 'Bill Books, Catalogs & Stationery',
    category: 'corporate',
    categoryName: 'Commercial Print',
    description: 'Offset and multi-color digital printing for company letterheads, GST bill books, marketing brochures and catalogs.',
    badge: 'Bulk Print',
    turnaround: '24 Hours',
    image: '/assets/images/services/thumb-paper-stationery.jpg',
    link: '/services/paper-stationery'
  }
];

const CATEGORY_TABS = [
  { id: 'all', label: 'All Services (12)' },
  { id: 'signage', label: '3D Signage & Boards' },
  { id: 'largeformat', label: 'UV, Vinyl & Flex' },
  { id: 'promotional', label: 'Promotional & Canopy' },
  { id: 'corporate', label: 'Retail & Office Branding' },
  { id: 'cnc', label: 'CNC & Architectural' }
];

export default function ServiceCategories() {
  const [activeTab, setActiveTab] = useState('all');

  // When 'all' is selected, show minimum 12 services in rows of 4 (12 / 4 = 3 rows)
  const displayedServices = useMemo(() => {
    if (activeTab === 'all') {
      return ALL_SERVICES.slice(0, 12);
    }
    return ALL_SERVICES.filter((s) => s.category === activeTab);
  }, [activeTab]);

  return (
    <section className="py-20 sm:py-28 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-blue-50 border border-blue-200/80 mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#1346a8] animate-pulse"></span>
            <span className="text-xs font-bold text-[#1346a8] uppercase tracking-wider">
              Our Core Services &amp; Products
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight">
            Everything You Need to Build Your Brand
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Patna&apos;s widest range of in-house digital printing, 3D architectural signage, ACP facades &amp; turnkey promotional solutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${activeTab === tab.id
                  ? 'bg-[#1346a8] text-white shadow-md shadow-blue-900/15 scale-[1.02]'
                  : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80 shadow-2xs'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 4 Services in One Row Responsive Grid (12 services minimum) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-100 hover:border-blue-200/80 shadow-2xs hover:shadow-card-hover transition-all duration-300 flex flex-col group hover:-translate-y-1 overflow-hidden"
            >
              {/* Image thumbnail with badges */}
              <Link
                to={service.link}
                className="aspect-[16/10] bg-slate-100 overflow-hidden relative block"
                title={service.title}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#1346a8] shadow-xs backdrop-blur-xs">
                    {service.badge}
                  </span>
                </div>
                {service.turnaround && (
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-900/80 text-white backdrop-blur-xs flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      {service.turnaround}
                    </span>
                  </div>
                )}
              </Link>

              {/* Card Body with spacious internal padding */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold text-[#1346a8] uppercase tracking-wider">
                      {service.categoryName}
                    </span>
                  </div>
                  <Link to={service.link} className="block">
                    <h3 className="text-base font-bold font-display text-slate-900 group-hover:text-[#1346a8] transition-colors line-clamp-1">
                      {service.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-500 leading-relaxed mt-2 line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Card Footer with Explore & WhatsApp links */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1346a8] group-hover:text-[#0f3a8e]"
                  >
                    <span>Explore</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                  <a
                    href={`https://wa.me/919308327111?text=${encodeURIComponent(`Hi Kashish Ad, I want a quote for ${service.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-emerald-600 hover:text-emerald-700 hover:underline flex items-center gap-1"
                    title="Get instant WhatsApp quote"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Quote</span>
                    <span>💬</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All 38+ Services & Products CTA Button */}
        <div className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider text-white bg-[#1346a8] hover:bg-[#0f3a8e] shadow-md shadow-blue-900/20 active:scale-95 transition-all"
          >
            <span>Explore All 38+ Services &amp; Products</span>
            <span className="text-base">→</span>
          </Link>
          <a
            href="https://wa.me/919308327111?text=Hi%20Kashish%20Ad,%20I%20need%20a%20custom%20branding%20quote%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-700 bg-white hover:bg-slate-100 border border-slate-200/80 shadow-2xs transition-all"
          >
            <span>💬 WhatsApp Direct Inquiry</span>
          </a>
        </div>
      </div>
    </section>
  );
}
