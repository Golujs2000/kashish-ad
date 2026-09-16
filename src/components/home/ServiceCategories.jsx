import React from 'react';
import { Link } from 'react-router-dom';

const SERVICE_CATEGORIES = [
  {
    id: 'digital-printing',
    title: 'Digital Printing',
    description: 'Business cards, brochures, flyers, leaflets, posters, bill books and more.',
    image: '/assets/images/hero-showcase-wide-format-printer.png',
    link: '/services?category=digital'
  },
  {
    id: '3d-letters',
    title: '3D Letter & Signage',
    description: 'Acrylic letters, steel letters, ACP & flex glow sign boards.',
    image: '/assets/images/led-letters-hotel-the-grand.jpg',
    link: '/services?category=signage'
  },
  {
    id: 'shop-branding',
    title: 'Shop & Office Branding',
    description: 'Complete branding for shops, showrooms and offices.',
    image: '/assets/images/portfolio-trends-retail-storefront.png',
    link: '/services?category=branding'
  },
  {
    id: 'cnc-cutting',
    title: 'CNC Cutting',
    description: 'CNC steel design cutting and CNC router cutting.',
    image: '/assets/images/production-cnc-laser-cutting-sparks.png',
    link: '/machinery'
  },
  {
    id: 'vehicle-branding',
    title: 'Vehicle Branding',
    description: 'Van and vehicle branding with customized graphics.',
    image: '/assets/images/portfolio-delivery-van-on-the-move.png',
    link: '/services?category=vehicle'
  },
  {
    id: 'uv-vinyl',
    title: 'UV & Vinyl Printing',
    description: 'UV printing, vinyl printing, wall graphics and more.',
    image: '/assets/images/production-wide-format-wall-graphics.png',
    link: '/services?category=uv'
  }
];

export default function ServiceCategories() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
            Everything You Need to Build Your Brand
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Professional printing, signage and branding solutions for businesses, offices, shops and events.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICE_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-[#1346a8]/40 hover:shadow-card-hover transition-all duration-300 flex flex-col group"
            >
              <div className="aspect-video bg-slate-100 overflow-hidden relative">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold font-display text-slate-900 group-hover:text-[#1346a8] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    {cat.description}
                  </p>
                </div>
                <Link
                  to={cat.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1346a8] group-hover:text-[#0f3a8e] mt-4 pt-2 border-t border-slate-100"
                >
                  <span>Explore</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
