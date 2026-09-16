import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import SEO from '../components/SEO';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Products & Services' },
    { id: 'largeformat', label: 'UV & Large Format' },
    { id: 'signage', label: '3D Letters & Sign Boards' },
    { id: 'promotional', label: 'Promotional & Outdoor' },
    { id: 'corporate', label: 'Labels & Corporate' }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCat = activeCategory === 'all' || p.category === activeCategory;
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.features && p.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Schema for Breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'http://localhost:3000/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services & Products',
        item: 'http://localhost:3000/services'
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Printing & Signage Services Catalog Patna (22+ Products)"
        description="Browse Kashish Ad's complete digital printing, promotional merchandise, and signage board catalog in Patna. UV printing, solvent vinyl, 3D acrylic LED letters, custom T-shirts, canopies, coffee mugs, trophies. Fraser Road Patna hotline: 09308327111."
        keywords="printing services patna, sign board manufacturer patna, tshirt printing patna, canopy tent patna, uv printing services patna, solvent vinyl banner patna, led acrylic sign patna, kashish ad fraser road"
        canonicalUrl="http://localhost:3000/services"
        structuredData={[breadcrumbSchema]}
      />

      {/* Services Hero */}
      <section className="relative overflow-hidden bg-slate-50 border-b border-slate-200 py-16 sm:py-20">
        {/* Architectural Blueprint Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.6] bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1346a8] text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#1346a8] animate-pulse"></span>
            22+ Commercial Printing, Canopy &amp; Merchandise Solutions
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#1346a8] tracking-tight max-w-3xl mx-auto">
            Digital Printing, Signage &amp; <span className="text-slate-900">Merchandise Catalog</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore our complete industrial printing range — from instant UV flatbed curing to architectural SS 3D letters, solvent vinyl banners, and custom corporate labels. Manufactured in-house at Fraser Road, Patna.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
              ⚡ Same Day Printing Available
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
              🛡️ ISO &amp; Greenguard Certified Inks
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
              🏭 100% In-House Machine Fabrication
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
              📦 Free Delivery Across Patna on Bulk Orders
            </span>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls Bar: Category Tabs & Search */}
          <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const count = cat.id === 'all' 
                  ? PRODUCTS.length 
                  : PRODUCTS.filter(p => p.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                      activeCategory === cat.id
                        ? 'bg-[#1346a8] text-white shadow-md'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[11px] px-2 py-0.5 rounded-full font-mono ${
                        activeCategory === cat.id
                          ? 'bg-[#1346a8] text-white'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Box */}
            <div className="relative min-w-[280px]">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                🔍
              </span>
              <input
                type="text"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#1346a8] focus:border-transparent transition-all"
                placeholder="Search products (UV, Vinyl, Acrylic)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 text-sm"
                  onClick={() => setSearchQuery('')}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Results Summary */}
          <div className="text-xs text-slate-500 mb-6 font-medium">
            Showing <strong className="text-slate-900">{filteredProducts.length}</strong> of {PRODUCTS.length} products
            {searchQuery && <span> matching "<em>{searchQuery}</em>"</span>}
          </div>

          {/* Quick Services Showcase Banner */}
          {!searchQuery && activeCategory === 'all' && (
            <div className="mb-10 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 p-1">
              <img
                src="/assets/images/kashish-ad-header-branding-strip.jpg"
                alt="Kashish Ad Complete Signage & Printing Solutions Banner"
                className="w-full h-auto max-h-36 sm:max-h-48 object-cover rounded-xl"
                loading="lazy"
              />
              <div className="p-3 bg-white/95 backdrop-blur-sm rounded-xl mt-1 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-[#1346a8]">
                  <span className="text-[#1346a8]">★</span>
                  <span>Popular Quick Picks:</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    to="/services/tshirt-printing"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-[#1346a8] font-bold hover:bg-[#1346a8] hover:text-white transition-colors"
                  >
                    👕 T-Shirt Printing
                  </Link>
                  <Link
                    to="/services/promotional-canopy"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-[#1346a8] font-bold hover:bg-[#1346a8] hover:text-white transition-colors"
                  >
                    🎪 Promo Canopy
                  </Link>
                  <Link
                    to="/services/cup-mug-printing"
                    className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold hover:bg-emerald-600 hover:text-white transition-colors"
                  >
                    ☕ Photo Mugs
                  </Link>
                  <Link
                    to="/services/trophy-memento-awards"
                    className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 font-bold hover:bg-amber-600 hover:text-white transition-colors"
                  >
                    🏆 Trophies &amp; Awards
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => {
                const waMessage = encodeURIComponent(
                  `Hello Kashish Ad®, I want to order / enquire about "${product.title}" (Price: ${product.price} ${product.unit}). Please share details and turnaround time.`
                );

                return (
                  <article
                    key={product.id}
                    className="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden group"
                    id={`product-${product.id}`}
                  >
                    {/* Media Thumbnail */}
                    <Link to={`/services/${product.id}`} className="relative h-56 bg-slate-100 overflow-hidden block">
                      <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {product.badge && (
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#1346a8] text-white shadow-md">
                          {product.badge}
                        </span>
                      )}
                      <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md flex items-baseline gap-1">
                        <span className="text-sm font-black text-[#1346a8] font-display">{product.price}</span>
                        <span className="text-xs font-semibold text-slate-600">{product.unit}</span>
                      </div>
                    </Link>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          {product.category === 'largeformat' && 'Large Format Printing'}
                          {product.category === 'signage' && '3D Signage & Lettering'}
                          {product.category === 'promotional' && 'Outdoor & Promotional'}
                          {product.category === 'corporate' && 'Labels & Corporate Stationery'}
                        </span>
                        <Link to={`/services/${product.id}`} className="block">
                          <h2 className="mt-1 text-base font-bold font-display text-slate-900 group-hover:text-[#1346a8] transition-colors">
                            {product.title}
                          </h2>
                        </Link>
                        <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                          {product.description}
                        </p>

                        {product.features && (
                          <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600">
                            {product.features.slice(0, 3).map((feat, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-[#1346a8] font-bold">✓</span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Action buttons */}
                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                        <a
                          href={`https://wa.me/919308327111?text=${waMessage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs text-white bg-[#1346a8] hover:bg-[#0f3a8e] shadow-sm shadow-blue-900/20 active:scale-95 transition-all"
                        >
                          <span>💬 WhatsApp</span>
                        </a>
                        <Link
                          to={`/services/${product.id}`}
                          className="py-2.5 px-3 rounded-xl font-bold text-xs text-[#1346a8] bg-slate-100 hover:bg-[#f0f7ff] border border-slate-200 transition-colors text-center inline-flex items-center gap-1"
                        >
                          <span>View Details</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-lg font-bold text-[#1346a8]">No products found</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                We couldn't find any products matching your search criteria. Try a different keyword or category.
              </p>
              <button
                className="mt-4 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#1346a8]"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bulk Order Banner in Navy #1346a8 */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1346a8] text-white rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1346a8] text-white">
                Special Trade Discounts
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-white">
                Looking for Wholesale B2B Printing or Corporate Signage?
              </h2>
              <p className="text-sm text-slate-200 leading-relaxed">
                We offer tiered corporate discounts for event agencies, architects, franchise retail chains, and government departments across Patna, Gaya, Muzaffarpur, Bhagalpur, and all Bihar districts.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-slate-300 justify-center lg:justify-start">
                <span>✓ Dedicated Account Manager</span>
                <span>✓ Priority Fabrication Queue</span>
                <span>✓ Bulk Slab Pricing</span>
                <span>✓ Official GST Invoicing</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0">
              <a
                href="https://wa.me/919308327111?text=Hello%20Kashish%20Ad,%20I%20have%20a%20bulk/corporate%20printing%20requirement.%20Please%20connect%20with%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#1346a8] hover:bg-[#0f3a8e] shadow-md shadow-blue-900/20 text-center transition-all"
              >
                Request Corporate Quote
              </a>
              <a
                href="tel:09308327111"
                className="text-center text-xs font-semibold text-slate-200 hover:text-white py-1"
              >
                Or Call Hotline: <strong className="text-white font-bold">09308327111</strong>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
