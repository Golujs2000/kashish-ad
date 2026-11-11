import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { EDITORIAL_GUIDES } from '../data/guidesData';
import { COMPANY_INFO, CONTACT_INFO, LOCATION_INFO } from '../data/siteData';
import { trackPhoneCall, trackWhatsAppClick } from '../utils/analytics';

export default function GuideDetail() {
  const { guideSlug } = useParams();
  const guide = EDITORIAL_GUIDES.find((g) => g.slug === guideSlug);

  if (!guide) {
    return <Navigate to="/guides" replace />;
  }

  // Schema.org Article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.metaDescription,
    image: 'https://kashishad.in/assets/images/hero-showcase-storefront-facade.png',
    datePublished: guide.publishDate,
    dateModified: guide.lastUpdated,
    author: {
      '@type': 'Person',
      name: 'S Haidar',
      jobTitle: 'Founder & CEO',
      worksFor: {
        '@type': 'Organization',
        name: COMPANY_INFO.fullName
      }
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_INFO.fullName,
      logo: {
        '@type': 'ImageObject',
        url: 'https://kashishad.in/assets/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://kashishad.in/guides/${guide.slug}`
    }
  };

  // FAQ Schema if guide has FAQs
  const faqSchema = guide.faqs && guide.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  } : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://kashishad.in/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Guides',
        item: 'https://kashishad.in/guides'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: guide.title,
        item: `https://kashishad.in/guides/${guide.slug}`
      }
    ]
  };

  const otherGuides = EDITORIAL_GUIDES.filter((g) => g.slug !== guide.slug);

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <SEO
        title={guide.metaTitle}
        description={guide.metaDescription}
        keywords="sign board price per square foot patna, led sign board cost patna, uv printing in patna, shop signboard permission bihar, kashish ad"
        canonicalUrl={`/guides/${guide.slug}`}
        structuredData={[articleSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 text-xs text-slate-500 flex items-center gap-2">
          <Link to="/" className="hover:text-[#1346a8]">Home</Link>
          <span>/</span>
          <Link to="/guides" className="hover:text-[#1346a8]">Guides</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold truncate max-w-xs">{guide.title}</span>
        </nav>

        {/* Article Header */}
        <header className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 mb-4">
            <span className="font-bold text-[#1346a8] bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
              {guide.category}
            </span>
            <span>Published: {guide.publishDate} • Updated: {guide.lastUpdated}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {guide.title}
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            {guide.summary}
          </p>

          {/* Author Badge */}
          <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#1346a8] text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                SH
              </div>
              <div>
                <div className="font-extrabold text-slate-900 text-sm">{guide.author}</div>
                <div className="text-xs text-slate-500">{guide.authorRole}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link
                to="/calculator"
                className="px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#1346a8] font-bold text-xs border border-blue-200 transition-all"
              >
                Online Price Calculator →
              </Link>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-6 mb-10">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-[#1346a8] mb-3">
            Table of Contents
          </h2>
          <ul className="space-y-1.5 text-xs sm:text-sm">
            {guide.tableOfContents.map((toc) => (
              <li key={toc.id}>
                <a
                  href={`#${toc.id}`}
                  className="font-medium text-slate-700 hover:text-[#1346a8] hover:underline"
                >
                  {toc.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Article Content Blocks */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-10">
          {guide.contentBlocks.map((block) => (
            <section key={block.id} id={block.id} className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {block.heading}
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {block.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {/* Responsive Data Table if block has one */}
              {block.table && (
                <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        {block.table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="p-3 whitespace-nowrap">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {block.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className={`p-3 ${cIdx === 0 ? 'font-bold text-slate-900' : ''} ${cIdx === 1 ? 'font-semibold text-[#1346a8]' : ''}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}

          {/* Guide FAQs */}
          {guide.faqs && guide.faqs.length > 0 && (
            <section id="faqs" className="scroll-mt-24 pt-6 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {guide.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">{faq.question}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Conversion CTA Box inside Guide */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-white text-center">
            <h3 className="text-xl sm:text-2xl font-black">Ready to Order Your Signboard in Patna?</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Get an accurate quotation tailored to your exact store width and letter height directly from our Fraser Road production desk.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={CONTACT_INFO.getWhatsAppUrl(`Hello Kashish Ad, I read your guide "${guide.title}" and would like a custom quote.`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick(`guide_${guide.slug}`)}
                className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>WhatsApp Quote ({CONTACT_INFO.whatsappDisplay})</span>
              </a>
              <a
                href={CONTACT_INFO.phoneTel}
                onClick={() => trackPhoneCall(`guide_${guide.slug}`, CONTACT_INFO.phoneFormatted)}
                className="px-5 py-3 rounded-xl bg-white text-slate-950 font-bold text-xs sm:text-sm hover:bg-slate-100 transition-all"
              >
                Call {CONTACT_INFO.phoneFormatted}
              </a>
              <Link
                to="/calculator"
                className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all"
              >
                Use Interactive Price Calculator
              </Link>
            </div>
          </div>
        </div>

        {/* Read Next Guides */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
          <h3 className="text-base font-black text-slate-900 uppercase tracking-wider mb-4">
            Related Industry Guides
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherGuides.map((other) => (
              <Link
                key={other.slug}
                to={`/guides/${other.slug}`}
                className="p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/40 transition-all block group"
              >
                <div className="text-xs font-bold text-[#1346a8] mb-1">{other.category}</div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-[#1346a8] transition-colors leading-snug">
                  {other.title} →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

