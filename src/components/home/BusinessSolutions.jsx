import React from 'react';
import { Link } from 'react-router-dom';

const BUSINESS_SOLUTIONS = [
  {
    title: 'Retail Stores',
    description: 'In-shop branding, retail displays & storefront graphics.',
    link: '/services/in-shop-branding',
    icon: (
      <svg className="w-8 h-8 text-[#1346a8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 21h18M3 7v14M21 7v14M3 7l9-4 9 4M7 21v-7a2 2 0 012-2h6a2 2 0 012 2v7" />
      </svg>
    )
  },
  {
    title: 'Corporate Offices',
    description: 'Turnkey interior branding, frosted glass film & wall graphics.',
    link: '/services/office-branding',
    icon: (
      <svg className="w-8 h-8 text-[#1346a8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: 'Showrooms',
    description: 'ACP facade cladding, 3D LED letters & display boards.',
    link: '/services/acp-board',
    icon: (
      <svg className="w-8 h-8 text-[#1346a8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        <rect x="2" y="3" width="20" height="18" rx="2" />
      </svg>
    )
  },
  {
    title: 'Businesses on the Move',
    description: 'Vehicle fleet branding & high-tack vinyl mobile wraps.',
    link: '/services/solvent-vinyl',
    icon: (
      <svg className="w-8 h-8 text-[#1346a8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    )
  },
  {
    title: 'Events & Expos',
    description: 'Promotional canopy tents, rollup standees & flex banners.',
    link: '/services/promotional-canopy',
    icon: (
      <svg className="w-8 h-8 text-[#1346a8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 8a3 3 0 00-3-3m0 6a3 3 0 003-3m0 0h2a1 1 0 011 1v1a1 1 0 01-1 1h-2" />
        <path d="M11 6a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

export default function BusinessSolutions() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900 tracking-tight">
              Branding Solutions for Every Business
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Tailored printing and signage for different industries and commercial requirements.
            </p>
          </div>
          <Link
            to="/services"
            className="text-xs sm:text-sm font-bold text-[#1346a8] hover:underline inline-flex items-center gap-1 shrink-0"
          >
            <span>Explore All 38+ Services</span>
            <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {BUSINESS_SOLUTIONS.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#1346a8]/40 hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="mb-4 p-2.5 rounded-xl bg-[#f0f7ff] w-fit group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-[#1346a8] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-[#1346a8] group-hover:text-[#0f3a8e]">
                <span>View Products</span>
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
