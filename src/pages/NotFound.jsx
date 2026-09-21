import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { CONTACT_INFO } from '../data/siteData';

export default function NotFound() {
  return (
    <div className="bg-slate-50 min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <SEO
        title="404 - Page Not Found | Kashish Ad® Patna"
        description="The page you are looking for does not exist or has been moved. Explore our commercial printing, 3D sign boards, and price calculator in Patna."
        robots="noindex, follow"
      />

      <div className="max-w-2xl w-full text-center bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-50 border border-blue-100 text-[#1346a8] font-display font-black text-4xl mb-6 shadow-2xs">
          404
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 tracking-tight">
          Page Not Found
        </h1>

        <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          The requested URL was moved, renamed, or does not exist. You can browse our 38+ printing and signage solutions below or request a custom quotation.
        </p>

        {/* Suggested Pathways */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          <Link
            to="/services"
            className="p-4 rounded-2xl border border-slate-200 hover:border-[#1346a8] hover:bg-blue-50/40 transition-all group"
          >
            <div className="font-bold text-slate-900 text-sm group-hover:text-[#1346a8] flex items-center justify-between">
              <span>📦 All Products &amp; Services</span>
              <span className="text-slate-400 group-hover:translate-x-1 transition-transform">→</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">UV flatbed, 3D acrylic letters, vinyl banners &amp; glow signs.</p>
          </Link>

          <Link
            to="/contact"
            className="p-4 rounded-2xl border border-slate-200 hover:border-[#1346a8] hover:bg-blue-50/40 transition-all group"
          >
            <div className="font-bold text-slate-900 text-sm group-hover:text-[#1346a8] flex items-center justify-between">
              <span>💬 Request a Quote</span>
              <span className="text-slate-400 group-hover:translate-x-1 transition-transform">→</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">Get fast customized pricing for bulk printing &amp; signage.</p>
          </Link>

          <Link
            to="/machinery"
            className="p-4 rounded-2xl border border-slate-200 hover:border-[#1346a8] hover:bg-blue-50/40 transition-all group"
          >
            <div className="font-bold text-slate-900 text-sm group-hover:text-[#1346a8] flex items-center justify-between">
              <span>⚙️ In-House Machinery</span>
              <span className="text-slate-400 group-hover:translate-x-1 transition-transform">→</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">Industrial Roland, UV flatbed &amp; CNC fiber laser plant.</p>
          </Link>

          <Link
            to="/contact"
            className="p-4 rounded-2xl border border-slate-200 hover:border-[#1346a8] hover:bg-blue-50/40 transition-all group"
          >
            <div className="font-bold text-slate-900 text-sm group-hover:text-[#1346a8] flex items-center justify-between">
              <span>📍 Workshop Location</span>
              <span className="text-slate-400 group-hover:translate-x-1 transition-transform">→</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">Capital Tower, Fraser Road, Patna (Live Google Map).</p>
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#1346a8] hover:bg-[#0f3a8e] text-white font-bold text-sm shadow-sm transition-all active:scale-95"
          >
            🏠 Return to Homepage
          </Link>
          <a
            href={CONTACT_INFO.getWhatsAppUrl('Hello Kashish Ad, I reached an unlinked page on your website and need assistance.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all active:scale-95"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
