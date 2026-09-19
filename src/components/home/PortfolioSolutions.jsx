import React from 'react';
import { Link } from 'react-router-dom';

const PORTFOLIO_SOLUTIONS = [
  { title: 'Shop Branding', image: '/assets/images/portfolio-trends-retail-storefront.png', serviceUrl: '/services/solvent-vinyl' },
  { title: 'Acrylic 3D Letters', image: '/assets/images/led-letters-hotel-the-grand.jpg', serviceUrl: '/services/led-acrylic-letters' },
  { title: 'ACP Glow Sign Board', image: '/assets/images/acp-work-architectural-facade.jpg', serviceUrl: '/services/glow-sign-board' },
  { title: 'Neon Art Sign', image: '/assets/images/neon-sign-good-vibes-rainbow.jpg', serviceUrl: '/services/large-illuminated-signage' },
  { title: 'Executive Name Plates', image: '/assets/images/name-plates-acrylic-brass-studs.jpg', serviceUrl: '/services/name-plates' },
  { title: 'Projecting Lightbox Sign', image: '/assets/images/sign-boards-pizza-zone-blade.jpg', serviceUrl: '/services/led-slim-lightbox' },
  { title: 'CNC Laser Cutting', image: '/assets/images/production-cnc-laser-cutting-sparks.png', serviceUrl: '/services/cnc-laser-jali' },
  { title: 'Van & Fleet Branding', image: '/assets/images/portfolio-delivery-van-on-the-move.png', serviceUrl: '/services/solvent-vinyl' },
  { title: 'Flex & Hoarding Banner', image: '/assets/images/kashish-ad-flex-printing-banner.png', serviceUrl: '/services/frontlit-flex' },
  { title: 'Customized Wallpapers', image: '/assets/images/production-wide-format-wall-graphics.png', serviceUrl: '/services/3d-wallpaper' }
];

export default function PortfolioSolutions({ onSelectPhoto }) {
  return (
    <section className="bg-[#0b1c36] text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
              Our Printing &amp; Branding Solutions
            </h2>
            <p className="text-blue-200/70 text-xs sm:text-sm mt-1">
              Real executed signage installations, 3D letters, and commercial banners across Patna.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/services"
              className="text-xs font-bold text-white bg-[#1346a8] hover:bg-[#0f3a8e] px-4 py-2 rounded-xl transition-all shadow-sm"
            >
              Explore All Services →
            </Link>
            <Link
              to="/gallery"
              className="text-xs font-bold text-blue-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>View Gallery</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Thumbnail Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {PORTFOLIO_SOLUTIONS.map((item, idx) => (
            <Link
              key={idx}
              to={item.serviceUrl}
              className="flex flex-col items-center group cursor-pointer"
              title={`View ${item.title} service details`}
            >
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-white/5 shadow-md group-hover:border-blue-400 group-hover:scale-105 transition-all duration-300 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white bg-[#1346a8] px-2 py-1 rounded-md shadow-xs">
                    View Specs →
                  </span>
                </div>
              </div>
              <span className="text-[11px] font-bold text-slate-300 text-center mt-2 group-hover:text-white transition-colors line-clamp-1">
                {item.title}
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom CTA to explore all solutions */}
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 shadow-sm active:scale-95 transition-all"
          >
            <span>View All Printing &amp; Branding Solutions</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
