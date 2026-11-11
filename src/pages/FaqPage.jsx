import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { COMPANY_INFO, CONTACT_INFO, FAQ_DATA } from '../data/siteData';
import { trackPhoneCall, trackWhatsAppClick } from '../utils/analytics';

const EXTENDED_FAQS = [
  ...FAQ_DATA,
  {
    category: 'Signage & Materials',
    question: 'What is the difference between Cast Acrylic and Extruded Acrylic for sign boards?',
    answer: 'At Kashish Ad®, we exclusively fabricate 3D letters using genuine Cast Acrylic. Unlike cheap extruded acrylic which turns yellow, brittle, and cracks after 1 summer in Patna, cast acrylic maintains 93% optical clarity, higher heat tolerance, and zero discoloration for 7+ years.'
  },
  {
    category: 'Signage & Materials',
    question: 'Which grade of stainless steel do you use for outdoor signboards?',
    answer: 'We use industrial SS 304 (marine-grade available on request) with titanium PVD gold, rose gold, or brushed matte finishes. Grade 304 contains 18% chromium and 8% nickel, completely preventing rust even during heavy Bihar monsoons.'
  },
  {
    category: 'Pricing & Billing',
    question: 'Do you provide a formal GST tax invoice for corporate and institutional orders?',
    answer: `Yes, 100%! Kashish Ad® is a registered manufacturer with GSTIN: ${COMPANY_INFO.gstin}. Every corporate client, hospital, educational institution, and banking firm receives an official GST tax invoice for seamless input tax credit (ITC) claims.`
  },
  {
    category: 'Pricing & Billing',
    question: 'How do you accept payments for sign board orders?',
    answer: 'We accept all standard payment methods including UPI (Google Pay, PhonePe, Paytm, BHIM), RTGS/NEFT bank transfers, Cheque, and corporate purchase orders.'
  },
  {
    category: 'Installation & Delivery',
    question: 'Do you provide structural erection and scaffolding for high-rise elevations in Patna?',
    answer: 'Yes. Our experienced in-house installation team is equipped with safety harnesses, heavy scaffolding, aluminum ladders, and structural welding equipment for rooftop hoardings, 2nd/3rd-floor building elevations, and shopping mall frontages across Patna.'
  },
  {
    category: 'Maintenance & Power',
    question: 'How much electricity does a 3D LED acrylic signboard consume?',
    answer: 'Because we install energy-efficient 12V DC Samsung/LG LED modules (0.72W to 1.2W per module), a typical 10-foot storefront sign board consumes less than 80 to 120 Watts of power — costing approximately ₹15 to ₹25 per night in electricity.'
  }
];

export default function FaqPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Signage & Materials', 'Pricing & Billing', 'Installation & Delivery', 'Maintenance & Power'];

  const filteredFaqs = EXTENDED_FAQS.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(search.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: EXTENDED_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <SEO
        title="Sign Board & Digital Printing FAQs | Kashish Ad® Patna"
        description="Got questions about sign board prices, 3D acrylic letters, UV printing, delivery across Bihar, or GST invoices? Browse comprehensive answers from Kashish Ad®."
        keywords="sign board faq patna, 3d led letters price questions, glow sign board warranty patna, kashish ad faqs"
        canonicalUrl="/faqs"
        structuredData={faqSchema}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 text-xs text-slate-500 flex items-center gap-2">
          <Link to="/" className="hover:text-[#1346a8]">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">FAQs</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1346a8] bg-blue-100 px-3 py-1 rounded-full">
            Help &amp; Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-3">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Everything you need to know about sign board design, manufacturing materials, pricing calculations, delivery turnaround, and on-site installation across Bihar.
          </p>

          {/* Search Box */}
          <div className="mt-6">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by keyword (e.g. price, acrylic, delivery, warranty)..."
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1346a8] shadow-2xs bg-white text-slate-900"
            />
          </div>

          {/* Category Pills */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#1346a8] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs">
              <h2 className="text-sm sm:text-base font-bold text-slate-900 mb-2 flex items-start gap-2.5">
                <span className="text-[#1346a8] font-black shrink-0">Q.</span>
                <span>{faq.question}</span>
              </h2>
              <div className="pl-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-slate-200 text-center shadow-2xs">
          <h3 className="text-lg font-bold text-slate-900">Still Have a Specific Question?</h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Our team is available Monday through Saturday (9 AM – 9 PM) at our Fraser Road shop.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={CONTACT_INFO.getWhatsAppUrl('Hello Kashish Ad, I have a question regarding sign boards.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('faqs_bottom_cta')}
              className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs shadow-sm transition-all"
            >
              Ask on WhatsApp
            </a>
            <a
              href={CONTACT_INFO.phoneTel}
              onClick={() => trackPhoneCall('faqs_bottom_cta', CONTACT_INFO.phoneFormatted)}
              className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-all"
            >
              Call {CONTACT_INFO.phoneFormatted}
            </a>
            <Link
              to="/calculator"
              className="px-5 py-2.5 rounded-xl bg-blue-50 text-[#1346a8] font-bold text-xs hover:bg-blue-100 border border-blue-200 transition-all"
            >
              Check Price Calculator →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

