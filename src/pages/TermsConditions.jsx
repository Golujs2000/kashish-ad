import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { COMPANY_INFO, CONTACT_INFO, LOCATION_INFO } from '../data/siteData';

export default function TermsConditions() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <SEO
        title="Terms & Conditions | Kashish Ad® Patna"
        description="Commercial terms and conditions of Kashish Ad® Patna covering signage fabrication, design approval, payment terms, delivery across Bihar, and warranty guidelines."
        canonicalUrl="/terms"
        robots="index, follow"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 text-xs text-slate-500 flex items-center gap-2">
          <Link to="/" className="hover:text-[#1346a8]">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Terms &amp; Conditions</span>
        </nav>

        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <header className="border-b border-slate-100 pb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Last updated: November 10, 2026 • Governing Law: Patna Jurisdiction, Bihar, India
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">1. Commercial Agreement</h2>
            <p>
              By commissioning sign board fabrication, digital UV printing, laser cutting, or installation services with <strong>{COMPANY_INFO.fullName}</strong>, the client agrees to the standard terms outlined below.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">2. Artwork Proofing &amp; Dimensional Approval</h2>
            <p>
              Prior to laser cutting acrylic or CNC milling ACP sheets, a digital design proof specifying exact letter heights, font styles, colors, and layout dimensions will be submitted to the client via WhatsApp or email. Fabrication begins only after client approval. Kashish Ad® is not liable for spelling errors or dimension discrepancies approved by the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">3. Payment Terms &amp; GST Invoicing</h2>
            <p>
              Standard commercial orders require a 50% mobilization advance upon order confirmation, with the remaining 50% balance payable upon completion of fabrication prior to dispatch or on-site handover. Official GST tax invoices ({COMPANY_INFO.gstin}) are issued for all corporate and retail transactions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">4. Warranty Terms</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>LED Modules &amp; SMPS Power Supplies:</strong> Covered by a 2-Year limited replacement warranty against manufacturing defects (burnout, non-functioning diodes). Damage caused by external high-voltage power surges or lightning is excluded unless surge-suppression units are installed.</li>
              <li><strong>Cast Acrylic Letters &amp; ACP Sheets:</strong> Covered against sun-induced yellowing and fading for a minimum of 3 to 5 years under normal ambient Bihar conditions.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">5. On-Site Installation &amp; Structural Safety</h2>
            <p>
              The client is responsible for ensuring unobstructed facade access and provision of a dedicated 220V AC single-phase power connection at the signboard mounting location. Kashish Ad® ensures all brackets and anchor fasteners comply with local wind-load engineering safety.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">6. Jurisdiction</h2>
            <p>
              All disputes or legal claims arising out of commercial contracts shall be subject to the exclusive jurisdiction of the civil courts in <strong>Patna, Bihar, India</strong>.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}

