import React from 'react';
import { Link } from 'react-router-dom';

const PORTFOLIO_SOLUTIONS = [
  { title: 'Shop Branding', image: '/assets/images/portfolio-trends-retail-storefront.png' },
  { title: 'Acrylic 3D Letters', image: '/assets/images/led-letters-hotel-the-grand.jpg' },
  { title: 'ACP Glow Sign Board', image: '/assets/images/acp-work-architectural-facade.jpg' },
  { title: 'Neon Art Sign', image: '/assets/images/neon-sign-good-vibes-rainbow.jpg' },
  { title: 'Executive Name Plates', image: '/assets/images/name-plates-acrylic-brass-studs.jpg' },
  { title: 'Projecting Lightbox Sign', image: '/assets/images/sign-boards-pizza-zone-blade.jpg' },
  { title: 'CNC Laser Cutting', image: '/assets/images/production-cnc-laser-cutting-sparks.png' },
  { title: 'Van & Fleet Branding', image: '/assets/images/portfolio-delivery-van-on-the-move.png' },
  { title: 'Flex & Hoarding Banner', image: '/assets/images/kashish-ad-flex-printing-banner.png' },
  { title: 'Customized Wallpapers', image: '/assets/images/production-wide-format-wall-graphics.png' }
];

export default function PortfolioSolutions({ onSelectPhoto }) {
  return (
    <section className="bg-[#0b1c36] text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
              Our Printing &amp; Branding Solutions
            </h2>
            <p className="text-blue-200/70 text-xs sm:text-sm mt-1">
              Real executed signage installations, 3D letters, and commercial banners across Patna.
            </p>
          </div>
          <Link
            to="/gallery"
            className="text-xs sm:text-sm font-bold text-blue-300 hover:text-white flex items-center gap-1 transition-colors shrink-0"
          >
            <span>View All Projects</span>
            <span>→</span>
          </Link>
        </div>

        {/* Thumbnail Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {PORTFOLIO_SOLUTIONS.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center group cursor-pointer"
              onClick={() => onSelectPhoto && onSelectPhoto(item)}
            >
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-white/5 shadow-md group-hover:border-blue-400 group-hover:scale-105 transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="text-[11px] font-bold text-slate-300 text-center mt-2 group-hover:text-white transition-colors line-clamp-1">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
