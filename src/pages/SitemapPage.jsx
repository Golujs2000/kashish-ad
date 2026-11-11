import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { PRODUCTS } from '../data/products';
import { BIHAR_LOCATIONS } from '../data/locationsData';
import { EDITORIAL_GUIDES } from '../data/guidesData';
import { COMPANY_INFO } from '../data/siteData';

export default function SitemapPage() {
  const corePages = [
    { title: 'Home Page', path: '/' },
    { title: 'All Products & Services', path: '/services' },
    { title: 'Signage Price Calculator', path: '/calculator' },
    { title: 'In-House Machinery (16+ Units)', path: '/machinery' },
    { title: 'Portfolio & Executed Projects', path: '/portfolio' },
    { title: 'Project Image Gallery', path: '/gallery' },
    { title: 'NFC Smart Business Card', path: '/card' },
    { title: 'About Us & Leadership', path: '/about' },
    { title: 'Store Location & Contact', path: '/contact' },
    { title: 'Frequently Asked Questions (FAQs)', path: '/faqs' },
    { title: 'Client Reviews & Testimonials', path: '/reviews' },
    { title: 'Bihar Locations Served', path: '/locations' },
    { title: 'Commercial Signage Guides', path: '/guides' },
    { title: 'Privacy Policy', path: '/privacy-policy' },
    { title: 'Terms & Conditions', path: '/terms' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <SEO
        title="HTML Sitemap & Complete Site Directory | Kashish Ad® Patna"
        description="Browse the complete directory of all 38+ sign board services, Bihar district hubs, pricing guides, and technical machinery pages of Kashish Ad® Patna."
        canonicalUrl="/sitemap"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 text-xs text-slate-500 flex items-center gap-2">
          <Link to="/" className="hover:text-[#1346a8]">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">HTML Sitemap</span>
        </nav>

        <header className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1346a8] bg-blue-100 px-3 py-1 rounded-full">
            Crawlable Site Architecture
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            HTML Sitemap &amp; Directory
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            A comprehensive, search engine-friendly overview of every page, product, regional location, and educational guide on {COMPANY_INFO.fullName}.
          </p>
        </header>

        <div className="space-y-8">
          {/* 1. Core Pages */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
            <h2 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-3 mb-4 flex items-center gap-2">
              <span className="text-[#1346a8]">01.</span> Main Website Sections ({corePages.length} Pages)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {corePages.map((page, idx) => (
                <Link
                  key={idx}
                  to={page.path}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 text-xs font-bold text-slate-800 hover:text-[#1346a8] transition-all flex items-center justify-between"
                >
                  <span>{page.title}</span>
                  <span className="text-slate-400 text-xs">→</span>
                </Link>
              ))}
            </div>
          </div>

          {/* 2. All 38 Individual Services */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
            <h2 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-3 mb-4 flex items-center gap-2">
              <span className="text-[#1346a8]">02.</span> All 38 Individual Commercial Services &amp; Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {PRODUCTS.map((prod) => (
                <Link
                  key={prod.id}
                  to={`/services/${prod.id}`}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 text-xs font-bold text-slate-800 hover:text-[#1346a8] transition-all flex items-center justify-between"
                >
                  <span className="truncate pr-2">{prod.title}</span>
                  <span className="text-slate-400 text-xs shrink-0">→</span>
                </Link>
              ))}
            </div>
          </div>

          {/* 3. Bihar District & City Hubs */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
            <h2 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-3 mb-4 flex items-center gap-2">
              <span className="text-[#1346a8]">03.</span> Bihar District &amp; City Hubs ({BIHAR_LOCATIONS.length} Locations)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {BIHAR_LOCATIONS.map((loc) => (
                <Link
                  key={loc.id}
                  to={`/locations/${loc.id}`}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 text-xs font-bold text-slate-800 hover:text-[#1346a8] transition-all flex items-center justify-between"
                >
                  <span>{loc.name} Signage Hub</span>
                  <span className="text-[11px] text-slate-400 font-semibold">{loc.isHQ ? 'Patna HQ' : `${loc.distanceFromPatnaKm} km`}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* 4. Editorial & Cost Guides */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
            <h2 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-3 mb-4 flex items-center gap-2">
              <span className="text-[#1346a8]">04.</span> In-Depth Commercial Signage Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {EDITORIAL_GUIDES.map((guide) => (
                <Link
                  key={guide.slug}
                  to={`/guides/${guide.slug}`}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 text-xs font-bold text-slate-800 hover:text-[#1346a8] transition-all flex items-center justify-between"
                >
                  <span className="truncate pr-2">{guide.title}</span>
                  <span className="text-slate-400 text-xs shrink-0">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

