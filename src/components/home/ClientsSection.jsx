import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CLIENTS } from '../../data/clientsData';

export default function ClientsSection({ title, subtitle, showPortfolioCta = true }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Government & PSU', 'Healthcare & Pharma', 'Corporate & Engineering', 'Retail & Fashion'];

  const filteredClients = activeFilter === 'All'
    ? CLIENTS
    : CLIENTS.filter((c) => c.category === activeFilter);

  return (
    <section className="bg-slate-50/50 border-t border-slate-100 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#1346a8]">
            {subtitle || 'Esteemed Corporate & Institutional Clients'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 mt-2.5 tracking-tight">
            {title || "Trusted by India's Leading Brands & Public Enterprises"}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From Fortune 500 corporations and national PSUs to major retail chains and healthcare networks across Bihar, our clients rely on Kashish Ad® for precision fabrication and guaranteed turnaround.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${activeFilter === cat
                  ? 'bg-[#1346a8] text-white shadow-xs'
                  : 'bg-white border border-slate-200/80 text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-2xs'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 sm:gap-7">
          {filteredClients.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-2xl border border-slate-100 p-6 shadow-2xs hover:shadow-card-hover hover:border-blue-200/80 transition-all group flex flex-col items-center justify-between text-center"
            >
              <div className="h-20 w-full flex items-center justify-center p-3">
                <img
                  src={client.logo}
                  alt={`${client.name} official branding client of Kashish Ad Patna`}
                  className="max-h-16 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 pt-3.5 border-t border-slate-100 w-full">
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 line-clamp-1 group-hover:text-[#1346a8] transition-colors">
                  {client.name}
                </h4>
                <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                  {client.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio PDF Callout Banner */}
        {showPortfolioCta && (
          <div className="mt-16 bg-white rounded-2xl border border-slate-100 shadow-2xs p-7 sm:p-9 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5 text-left">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#1346a8] flex items-center justify-center text-2xl shrink-0 border border-blue-100 shadow-2xs">
                📄
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#1346a8]">
                  Complete 29-Page Credentials
                </span>
                <h3 className="font-display font-black text-lg sm:text-xl text-slate-900 mt-0.5">
                  Want to review our full client list &amp; fabrication sites?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl leading-relaxed">
                  Download or preview the official Kashish Ad® Portfolio PDF with detailed site photos, machinery line-up, and corporate projects.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/portfolio"
                className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#1346a8] hover:bg-[#0f3a8e] shadow-xs transition-all active:scale-95"
              >
                View Portfolio PDF &rarr;
              </Link>
              <a
                href="/assets/pdf/kashish-ad-portfolio.pdf"
                download="Kashish-Ad-Portfolio.pdf"
                className="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all active:scale-95"
              >
                Download PDF
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
