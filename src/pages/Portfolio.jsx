import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { SITE_CONFIG, COMPANY_INFO, CONTACT_INFO } from '../data/siteData';
import ClientsSection from '../components/home/ClientsSection';

export default function Portfolio() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const pdfUrl = '/assets/pdf/kashish-ad-portfolio.pdf';

  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Kashish Ad® Official Fabrication & Printing Portfolio',
    creator: {
      '@type': 'Organization',
      name: 'Kashish Ad®',
      url: SITE_CONFIG.getProductionUrl('/')
    },
    description: 'Official corporate portfolio of Kashish Ad®, showcasing 41+ years (Estd 1985) of architectural sign boards, UV flatbed printing, 3D LED channel letters, ACP cladding, and large-format digital printing across Bihar.',
    url: SITE_CONFIG.getProductionUrl('/portfolio')
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_CONFIG.getProductionUrl('/')
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Portfolio',
        item: SITE_CONFIG.getProductionUrl('/portfolio')
      }
    ]
  };

  const portfolioFeatures = [
    {
      title: '3D LED & Acrylic Letters',
      desc: 'Channel letters, neon flex, titanium gold SS letters, and illuminated storefront elevations.'
    },
    {
      title: 'Architectural ACP Cladding',
      desc: 'Heavy-gauge CNC router grooved Aluminum Composite Panels and complete showroom facades.'
    },
    {
      title: 'UV Flatbed & Eco-Solvent',
      desc: 'Direct industrial printing on acrylic, glass, wood, sunboard, and star flex vinyl with zero fading.'
    },
    {
      title: 'CNC Laser Jali & Metal Cutting',
      desc: 'Intricate architectural steel, brass, MDF and WPC decorative panels and security gates.'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Official Portfolio PDF | Kashish Ad® Patna - 41+ Years Experience"
        description="Browse and download the official Kashish Ad® Portfolio PDF. Explore our completed 3D LED glow signage, architectural ACP cladding, UV flatbed prints, and corporate branding across Bihar."
        keywords="kashish ad portfolio, kashish ad pdf, sign board portfolio patna, digital printing portfolio bihar, 3d signage catalogue patna"
        canonicalUrl="/portfolio"
        structuredData={[portfolioSchema, breadcrumbSchema]}
      />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-slate-50 border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1346a8] text-xs font-bold uppercase tracking-wider mb-5">
            <span className="w-2 h-2 rounded-full bg-[#1346a8] animate-pulse"></span>
            Estd 1985 • 41+ Years of Fabrication Excellence
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight max-w-3xl mx-auto">
            Official <span className="inline-flex items-start text-[#1346a8]"><span className="font-raphtalia tracking-[0]">Kashish Ad</span><span className="font-sans text-base sm:text-lg font-black ml-0.5 leading-none text-[#1346a8]">®</span></span> Portfolio
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Explore our comprehensive company credentials, completed landmark branding projects, industrial machinery capabilities, and premium signage fabrication catalogue across Bihar.
          </p>

          {/* Quick Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={pdfUrl}
              download="Kashish-Ad-Portfolio.pdf"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#1346a8] hover:bg-[#0f3a8e] shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download PDF (9.5 MB)</span>
            </a>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-slate-800 bg-white border border-slate-300 hover:border-[#1346a8] hover:text-[#1346a8] shadow-xs transition-all active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>Open in New Window</span>
            </a>

            <a
              href={CONTACT_INFO.getWhatsAppUrl('Hello Kashish Ad, I reviewed your official Portfolio PDF and would like to discuss a project.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-[#25D366] bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-all active:scale-95"
            >
              <span className="text-base">💬</span>
              <span>Inquire on WhatsApp</span>
            </a>
          </div>

          {/* Key Specs Pill */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-semibold text-slate-600">
            <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
              📄 Official Company Dossier
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
              🏭 Direct In-House Production
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
              🏢 Capital Tower, Fraser Road, Patna
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
              📜 GST: 10AENPH7809D1ZT
            </span>
          </div>
        </div>
      </section>

      {/* Main Interactive PDF Viewer Section */}
      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-2xl border border-slate-800">
          
          {/* Top Viewer Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-3 border-b border-slate-800 text-white px-2">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
              <span className="text-xs font-mono font-bold text-slate-300 ml-2">Kashish_Ad_Portfolio.pdf</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors inline-flex items-center gap-1.5"
                title={isFullscreen ? 'Standard View' : 'Expand View'}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  {isFullscreen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9L4 4m0 0l5 0m-5 0l0 5m11 0l5-5m0 0l-5 0m5 0l0 5m-5 11l5 5m0 0l-5 0m5 0l0-5m-11 0l-5 5m0 0l5 0m-5 0l0-5" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  )}
                </svg>
                <span>{isFullscreen ? 'Exit Expand' : 'Expand Height'}</span>
              </button>

              <a
                href={pdfUrl}
                download="Kashish-Ad-Portfolio.pdf"
                className="px-3 py-1.5 rounded-lg bg-[#1346a8] hover:bg-[#0f3a8e] text-white text-xs font-semibold transition-colors inline-flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download</span>
              </a>
            </div>
          </div>

          {/* Embedded Viewer Container */}
          <div
            className={`w-full rounded-xl overflow-hidden bg-slate-950 transition-all duration-300 relative ${
              isFullscreen ? 'h-[90vh]' : 'h-[650px] sm:h-[800px] lg:h-[920px]'
            }`}
          >
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=1&statusbar=1&view=FitH`}
              title="Kashish Ad Official Portfolio PDF"
              className="w-full h-full border-0 rounded-xl bg-white"
            />
          </div>

          {/* Mobile Fallback helper message */}
          <div className="mt-3.5 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 px-2">
            <p>
              💡 <span className="font-medium text-slate-300">Viewing tip:</span> You can scroll directly within the document, zoom in/out, or save the PDF for offline sharing with your management team.
            </p>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#38bdf8] hover:underline font-semibold shrink-0"
            >
              Direct Link &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-14 sm:py-18 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-[#1346a8]">
              Fabrication Highlights
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900 mt-1">
              What You Will Discover Inside
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              A curated look into our turnkey signage fabrication and large-format printing capabilities executed across Bihar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioFeatures.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1346a8] font-black flex items-center justify-center text-base mb-4 border border-blue-100">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Esteemed Corporate & Institutional Clients */}
      <ClientsSection
        title="Esteemed Corporate & Institutional Clients"
        subtitle="Trusted Partnerships Across Bihar"
        showPortfolioCta={false}
      />

      {/* Call to Action Bar */}
      <section className="bg-[#081a3e] py-14 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-black">
            Ready to Fabricate Your Brand's Next Milestone?
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
            From single retail store elevations to state-wide corporate campaigns, consult directly with our master fabricators at Fraser Road, Patna.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-[#1346a8] hover:bg-[#0f3a8e] font-bold text-sm text-white shadow-md transition-all active:scale-95"
            >
              Get In Touch
            </Link>
            <a
              href="tel:09308327111"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 font-bold text-sm text-white transition-all active:scale-95"
            >
              Call 09308327111
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
