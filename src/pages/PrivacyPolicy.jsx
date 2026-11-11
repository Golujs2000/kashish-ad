import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { COMPANY_INFO, CONTACT_INFO, LOCATION_INFO } from '../data/siteData';

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <SEO
        title="Privacy Policy | Kashish Ad® Patna"
        description="Privacy policy and data protection terms of Kashish Ad® Patna. We respect your privacy and protect client artwork, contact numbers, and project data."
        canonicalUrl="/privacy-policy"
        robots="index, follow"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 text-xs text-slate-500 flex items-center gap-2">
          <Link to="/" className="hover:text-[#1346a8]">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Privacy Policy</span>
        </nav>

        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <header className="border-b border-slate-100 pb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Last updated: November 10, 2026 • Effective Date: January 1, 1985
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">1. Introduction</h2>
            <p>
              Welcome to <strong>{COMPANY_INFO.fullName}</strong> ("we", "our", or "us"). We operate the website <a href="https://kashishad.in" className="text-[#1346a8] hover:underline">https://kashishad.in</a> and manufacturing facilities located at {LOCATION_INFO.fullAddress}. We are dedicated to safeguarding the privacy and personal data of our customers, website visitors, and business partners.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">2. Information We Collect</h2>
            <p>We may collect and process the following information when you interact with our website or contact our workshop:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Contact Details:</strong> Name, phone number, WhatsApp contact number, and email address provided when requesting quotations.</li>
              <li><strong>Project Artwork &amp; Specifications:</strong> Vector logo files, CAD drawings, store facade photographs, and dimensional parameters shared for fabrication.</li>
              <li><strong>Billing &amp; GST Details:</strong> Legal business entity name, GSTIN ({COMPANY_INFO.gstin} matching records), and billing address for issuing official tax invoices.</li>
              <li><strong>Technical Web Analytics:</strong> Non-personally identifiable browser data, device type, IP address, and site engagement events via Google Analytics 4.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">3. How We Use Your Information</h2>
            <p>Your information is used solely for legitimate business operations:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Generating formal price quotations, 3D artwork proofs, and structural fabrication estimates.</li>
              <li>Coordinating on-site laser measurements and structural installation schedules across Patna and Bihar districts.</li>
              <li>Dispatching finished signboards via secure cargo transport and providing tracking updates.</li>
              <li>Issuing GST compliant tax invoices and warranty records.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">4. Data Protection &amp; Confidentiality</h2>
            <p>
              We maintain strict physical and digital controls at our Fraser Road headquarters. We never sell, lease, or monetize client lists, proprietary brand logos, or personal phone numbers to any third-party marketing agencies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">5. Contact Our Privacy Officer</h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to modify any project data, please contact us at:
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-800 space-y-1">
              <div><strong>Kashish Ad®</strong></div>
              <div>Address: {LOCATION_INFO.fullAddress}</div>
              <div>Phone: {CONTACT_INFO.phoneFormatted} / {CONTACT_INFO.secondaryPhoneFormatted}</div>
              <div>Email: {CONTACT_INFO.email}</div>
              <div>GSTIN: {COMPANY_INFO.gstin}</div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}

