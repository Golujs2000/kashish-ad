import React from 'react';
import { Link } from 'react-router-dom';

const PORTFOLIO_SOLUTIONS = [
  { title: 'In-Shop Retail Branding', image: '/assets/images/portfolio-trends-retail-storefront.png', serviceUrl: '/services/in-shop-branding' },
  { title: '3D LED Acrylic Letters', image: '/assets/images/led-letters-hotel-the-grand.jpg', serviceUrl: '/services/led-acrylic-letters' },
  { title: 'ACP Sign Board & Cladding', image: '/assets/images/services/thumb-acp-board.jpg', serviceUrl: '/services/acp-board' },
  { title: 'LED Glow Sign Board', image: '/assets/images/sign-boards-pizza-zone-blade.jpg', serviceUrl: '/services/glow-sign-board' },
  { title: 'Executive Name Plates', image: '/assets/images/name-plates-acrylic-brass-studs.jpg', serviceUrl: '/services/name-plates' },
  { title: 'Promotional Canopy Tent', image: '/assets/images/services/thumb-promotional-canopy.jpg', serviceUrl: '/services/promotional-canopy' },
  { title: 'CNC Laser Jali Cutting', image: '/assets/images/production-cnc-laser-cutting-sparks.png', serviceUrl: '/services/cnc-laser-jali' },
  { title: 'Vehicle Fleet Branding', image: '/assets/images/portfolio-delivery-van-on-the-move.png', serviceUrl: '/services/solvent-vinyl' },
  { title: 'Flex Banners & Hoardings', image: '/assets/images/kashish-ad-flex-printing-banner.png', serviceUrl: '/services/frontlit-flex' },
  { title: 'Customized 3D Wallpapers', image: '/assets/images/production-wide-format-wall-graphics.png', serviceUrl: '/services/3d-wallpaper' }
];

export default function PortfolioSolutions({ onSelectPhoto }) {
  return (
    <section className="bg-[#0b1c36] text-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white tracking-tight">
              Our Printing &amp; Branding Solutions
            </h2>
            <p className="text-blue-200/70 text-xs sm:text-sm mt-2 max-w-xl">
              Real executed signage installations, 3D letters, and commercial banners across Patna.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/services"
              className="text-xs font-bold text-white bg-[#1346a8] hover:bg-[#0f3a8e] px-4.5 py-2.5 rounded-xl transition-all shadow-sm"
            >
              Explore All Services →
            </Link>
            <Link
              to="/gallery"
              className="text-xs font-bold text-blue-300 hover:text-white flex items-center gap-1.5 transition-colors px-2 py-1"
            >
              <span>View Gallery</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Thumbnail Cards Grid with spacious gaps */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {PORTFOLIO_SOLUTIONS.map((item, idx) => (
            <Link
              key={idx}
              to={item.serviceUrl}
              className="flex flex-col items-center group cursor-pointer"
              title={`View ${item.title} service details`}
            >
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-md group-hover:border-blue-400/80 group-hover:scale-[1.03] transition-all duration-300 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-blue-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-2xs">
                  <span className="text-[10px] font-bold text-white bg-[#1346a8] px-2.5 py-1 rounded-md shadow-xs">
                    View Specs →
                  </span>
                </div>
              </div>
              <span className="text-[11.5px] font-semibold text-slate-300 text-center mt-2.5 group-hover:text-white transition-colors line-clamp-1">
                {item.title}
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom CTA to explore all solutions */}
        <div className="mt-14 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 shadow-sm active:scale-95 transition-all"
          >
            <span>View All Printing &amp; Branding Solutions</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
