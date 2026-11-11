import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { EDITORIAL_GUIDES } from '../data/guidesData';
import { COMPANY_INFO, CONTACT_INFO } from '../data/siteData';

export default function Guides() {
  const guidesSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Patna Signage & Commercial Printing Guides | Kashish Ad®',
    description: 'Expert commercial signage, LED letter cost breakdowns, printing technology comparisons, and Bihar municipal bylaws guides written by industry specialists.',
    url: 'https://kashishad.in/guides',
    publisher: {
      '@type': 'Organization',
      name: COMPANY_INFO.fullName,
      url: 'https://kashishad.in'
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <SEO
        title="Signage & LED Sign Board Guides (Patna, Bihar) | Kashish Ad®"
        description="Expert guides on LED sign board price per sq ft in Patna, UV flatbed vs solvent vinyl comparison, and municipal bylaws for commercial shop signs in Bihar."
        keywords="sign board price per square foot patna, led sign board cost patna, uv printing guide patna, shop sign board rules bihar, kashish ad guides"
        canonicalUrl="/guides"
        structuredData={guidesSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 text-xs text-slate-500 flex items-center gap-2">
          <Link to="/" className="hover:text-[#1346a8]">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Guides &amp; Resources</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1346a8] text-xs font-bold uppercase tracking-wider mb-4">
            <span>Authoritative Industry Knowledge</span>
            <span>•</span>
            <span>E-E-A-T Verified</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Commercial Signage &amp; Printing Guides
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Transparent pricing analyses, material durability evaluations, and regulatory compliance insights written by <strong>S Haidar (CEO of Kashish Ad®)</strong> with 40+ years of active fabrication experience across Bihar.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EDITORIAL_GUIDES.map((guide) => (
            <article
              key={guide.slug}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-bold text-[#1346a8] bg-blue-50 px-2.5 py-1 rounded-full">
                    {guide.category}
                  </span>
                  <span>{guide.readTime}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#1346a8] transition-colors leading-snug">
                  <Link to={`/guides/${guide.slug}`}>
                    {guide.title}
                  </Link>
                </h2>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {guide.summary}
                </p>

                {/* Author Info */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1346a8] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    SH
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-slate-900">{guide.author.split('(')[0]}</div>
                    <div className="text-slate-500 text-[11px]">{guide.lastUpdated}</div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={`/guides/${guide.slug}`}
                  className="text-xs font-bold text-[#1346a8] group-hover:text-blue-800 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Read Complete Guide</span>
                  <span>→</span>
                </Link>
                <Link
                  to="/calculator"
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                >
                  Estimate Cost
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Contact Help */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200 text-center max-w-2xl mx-auto shadow-2xs">
          <h3 className="text-lg font-bold text-slate-900">Have a Specific Question About Your Signboard Project?</h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Speak directly with our senior signage engineers at Capital Tower, Fraser Road, Patna.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href={CONTACT_INFO.phoneTel}
              className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-all"
            >
              Call {CONTACT_INFO.phoneFormatted}
            </a>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-blue-50 text-[#1346a8] font-bold text-xs hover:bg-blue-100 transition-all border border-blue-200"
            >
              Visit Fraser Road Workshop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

