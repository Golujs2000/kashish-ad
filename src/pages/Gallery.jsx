import React, { useState, useMemo } from 'react';
import { GALLERY_ITEMS } from '../data/gallery';
import LightboxModal from '../components/LightboxModal';
import SEO from '../components/SEO';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'signboards', label: 'Sign Boards & Elevations' },
    { id: '3dletters', label: '3D Acrylic & Metal Letters' },
    { id: 'uvprint', label: 'UV Prints & Wall Graphics' },
    { id: 'cnc', label: 'CNC Laser Gates & Jali' }
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Project Portfolio & Signage Gallery Patna"
        description="View real photographs of completed signage installations, 3D acrylic LED boards, CNC gates, and UV prints manufactured by Kashish Ad® across Bihar."
        keywords="signage gallery patna, sign board photos bihar, 3d led letter work patna, kashish ad portfolio"
        canonicalUrl="http://localhost:3000/gallery"
      />
      {/* Page Hero */}
      <section className="bg-slate-50 border-b border-slate-200 py-20 sm:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1346a8] text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#1346a8] animate-pulse"></span>
            Executed Projects &amp; Installations
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#1346a8] tracking-tight max-w-3xl mx-auto">
            Our Work <span className="text-[#1346a8]">Portfolio</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Browse authentic photographs of retail shopfronts, 3D LED glow signage, UV prints, hotel elevations, and laser-cut metal architectural works completed across Patna and Bihar.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
              📍 1,00,000+ Installed Sites Across Bihar
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
              ⭐ 4.6 Google Rating (61+ Reviews)
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
              📸 100% Real Workshop &amp; Site Photos
            </span>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-16">
            {categories.map((cat) => {
              const count = cat.id === 'all'
                ? GALLERY_ITEMS.length
                : GALLERY_ITEMS.filter((it) => it.category === cat.id).length;
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

          {/* Gallery Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer flex flex-col"
                onClick={() => setSelectedItem(item)}
                title="Click to view full photo &amp; inquire"
              >
                {/* Media wrapper */}
                <div className="relative h-64 bg-slate-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#1346a8]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl bg-white text-[#1346a8] font-bold text-xs shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      🔍 Expand Photo
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#1346a8] shadow-sm border border-slate-200/60">
                    {item.category === 'signboards' && 'Sign Board'}
                    {item.category === '3dletters' && '3D Letter'}
                    {item.category === 'uvprint' && 'UV Print'}
                    {item.category === 'cnc' && 'CNC Metal'}
                  </span>
                </div>

                {/* Metadata */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-base text-[#1346a8] group-hover:text-[#0f3a8e] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium mt-1">📍 {item.location}</p>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1346a8]">
                    <span>Click to inspect &amp; inquire</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Consultation Banner in Navy #1346a8 */}
          <div className="mt-16 bg-[#1346a8] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-display font-black text-white">
                Have a custom design or architectural elevation in mind?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Send us your site photo, vector artwork, or architectural AutoCAD/PDF drawings on WhatsApp. We provide instant 3D layout visual mockups and quotation within 3 hours.
              </p>
            </div>
            <a
              href="https://wa.me/919308327111?text=Hello%20Kashish%20Ad,%20I%20have%20a%20site%20photo/artwork%20and%20need%20a%20quotation%20and%20layout."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#1346a8] hover:bg-[#0f3a8e] shadow-md shadow-blue-900/20 whitespace-nowrap active:scale-95 transition-all"
            >
              💬 Send Artwork on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <LightboxModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}
