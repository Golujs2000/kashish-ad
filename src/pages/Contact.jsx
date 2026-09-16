import React, { useState } from 'react';
import SEO from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'UV Digital Printing',
    city: 'Patna',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Post to Express backend API
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } catch (err) {
      console.warn('Backend API endpoint call notice:', err);
    }

    setSubmitted(true);
    setIsSubmitting(false);

    // Open WhatsApp with pre-filled details
    const waText = encodeURIComponent(
      `Hello Kashish Ad®, I am submitting an inquiry from your website:\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nCity: ${formData.city}\nRequirement: ${formData.message}`
    );
    window.open(`https://wa.me/919308327111?text=${waText}`, '_blank');
  };

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Kashish Ad® Patna',
    description: 'Contact Kashish Ad® for instant commercial digital printing quotes, signage board consultation, and workshop visits in Fraser Road, Patna.',
    url: 'http://localhost:3000/contact'
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Contact & Location in Patna | Call 09308327111"
        description="Visit or contact Kashish Ad® at Capital Tower, Fraser Road, Patna. Hotline: 09308327111. Get directions, WhatsApp order desk, and B2B corporate consultation."
        keywords="contact kashish ad, kashish ad phone number 09308327111, capital tower fraser road patna, print shop near me patna"
        canonicalUrl="http://localhost:3000/contact"
        structuredData={[contactSchema]}
      />
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-slate-50 border-b border-slate-200 py-16 sm:py-20">
        {/* Architectural Blueprint Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.6] bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1346a8] text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#1346a8] animate-pulse"></span>
            Direct Workshop Hotline: 09308327111
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#1346a8] tracking-tight max-w-3xl mx-auto">
            Contact &amp; Visit <span className="inline-flex items-start text-[#1346a8]"><span className="font-raphtalia tracking-[0]">Kashish Ad</span><span className="font-sans text-base sm:text-lg font-black ml-0.5 leading-none">®</span></span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Get in touch directly with our Fraser Road printing and signage team. Visit our showroom and production units at Capital Tower, Patna, or chat with us on WhatsApp for rapid turnaround.
          </p>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Info & Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#1346a8]">Direct Touchpoints</span>
                <h2 className="text-2xl sm:text-3xl font-display font-black text-[#1346a8] mt-1">
                  We're Here to Help
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Speak directly with our fabrication engineers and estimators for quick quotations, artwork file reviews, or site inspection requests.
                </p>
              </div>

              <div className="space-y-4">
                {/* Address */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#1346a8] flex items-center justify-center text-lg shrink-0 shadow-2xs">
                    📍
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1346a8] text-sm">Workshop &amp; Showroom Address</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      <strong>Kashish Ad®</strong><br />
                      Capital Tower, A-6 &amp; B-16, Fraser Rd,<br />
                      Old Jakkanpur, Lodipur, Patna, Bihar 800001
                    </p>
                    <span className="inline-block mt-2 px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-white border border-slate-200 text-slate-700">
                      Landmark: Fraser Road, near Canara Bank
                    </span>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#1346a8] flex items-center justify-center text-lg shrink-0 shadow-2xs">
                    📞
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#1346a8] text-sm">Phone Hotline &amp; WhatsApp</h4>
                    <p className="mt-1">
                      <a href="tel:09308327111" className="text-lg font-display font-black text-[#1346a8] hover:underline">
                        09308327111
                      </a>
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">Available for urgent quotes, order status, and artwork dispatch.</p>
                    <a
                      href="https://wa.me/919308327111?text=Hello%20Kashish%20Ad,%20I%20would%20like%20to%20enquire%20about%20your%20printing%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#1346a8] hover:bg-[#0f3a8e] shadow-sm active:scale-95 transition-all"
                    >
                      💬 Chat on WhatsApp (09308327111)
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#1346a8] flex items-center justify-center text-lg shrink-0 shadow-2xs">
                    ✉️
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#1346a8] text-sm">Official Email Address</h4>
                    <p className="mt-1">
                      <a href="mailto:kashishadpatna@gmail.com" className="text-base sm:text-lg font-bold text-[#1346a8] hover:text-[#0f3a8e] transition-colors break-all">
                        kashishadpatna@gmail.com
                      </a>
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">Send drawings, vector CDR/PDF artwork, and B2B corporate RFQs.</p>
                    <a
                      href="mailto:kashishadpatna@gmail.com"
                      className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#1346a8] bg-white border border-slate-200 hover:bg-slate-50 shadow-2xs active:scale-95 transition-all"
                    >
                      ✉️ Send Email Inquiry
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#1346a8] flex items-center justify-center text-lg shrink-0 shadow-2xs">
                    🕒
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1346a8] text-sm">Operating Working Hours</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      <strong>Monday – Saturday:</strong> 9:00 AM – 9:00 PM<br />
                      <strong>Sunday:</strong> Scheduled Site Installations &amp; Emergency Printing
                    </p>
                  </div>
                </div>

                {/* Statutory */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#1346a8] flex items-center justify-center text-lg shrink-0 shadow-2xs">
                    📜
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1346a8] text-sm">GST &amp; Business Credentials</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      <strong>GSTIN:</strong> 10AENPH7809D1ZT<br />
                      <strong>CEO:</strong> S Haidar • <strong>Est.</strong> 2017
                    </p>
                  </div>
                </div>

                {/* Official Social Media Channels */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#1346a8] flex items-center justify-center text-lg shrink-0 shadow-2xs">
                    🌐
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#1346a8] text-sm">Official Social Channels</h4>
                    <p className="text-xs text-slate-500 mt-0.5 mb-3">
                      Follow our daily live shop runs, machine demos, and completed client signage across Bihar.
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      <a
                        href="https://www.instagram.com/kashishadpatna"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold shadow-sm hover:opacity-95 transition-opacity"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        <span>@kashishadpatna</span>
                      </a>
                      <a
                        href="https://www.facebook.com/kashishadpatna/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1877f2] text-white text-xs font-bold shadow-sm hover:opacity-95 transition-opacity"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        <span>Facebook Page</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-card">
                <h3 className="text-xl font-display font-black text-[#1346a8]">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs text-slate-500 mt-1 mb-6">
                  Fill in your project requirements below. Submitting will register your inquiry and launch a pre-filled WhatsApp chat for instant response.
                </p>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                    <div className="text-3xl">✅</div>
                    <h4 className="font-bold text-slate-900 text-base">Inquiry Received!</h4>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto">
                      Thank you for contacting Kashish Ad®. A representative is reviewing your details. You can also chat directly on WhatsApp.
                    </p>
                    <a
                      href="https://wa.me/919308327111"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-brand-whatsapp hover:bg-brand-whatsapp-hover"
                    >
                      Continue in WhatsApp
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1" htmlFor="contact-name">
                        Your Full Name / Company Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#1346a8]"
                        placeholder="e.g. Rahul Kumar or Sharma Retail Ltd."
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1" htmlFor="contact-phone">
                        Mobile Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#1346a8]"
                        placeholder="e.g. 09308327111"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1" htmlFor="contact-service">
                          Interested Service
                        </label>
                        <select
                          id="contact-service"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1346a8]"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        >
                          <option value="UV Digital Printing">UV Digital Flatbed Printing</option>
                          <option value="Solvent Vinyl Printing">Solvent Vinyl Printing</option>
                          <option value="LED Acrylic 3D Letters">LED Acrylic 3D Letters</option>
                          <option value="Stainless Steel Sign Board">Stainless Steel Sign Board</option>
                          <option value="Rollup Banner Standee">Rollup Banner Standee</option>
                          <option value="CNC Laser Gate / Jali">CNC Laser Gate / Jali</option>
                          <option value="One-Way Vision Glass Film">One-Way Vision Glass Film</option>
                          <option value="Bulk B2B Printing">Bulk B2B Printing</option>
                          <option value="Other Custom Job">Other Custom Job</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1" htmlFor="contact-city">
                          Your City / District
                        </label>
                        <input
                          id="contact-city"
                          type="text"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#1346a8]"
                          placeholder="e.g. Patna, Muzaffarpur"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1" htmlFor="contact-message">
                        Requirement Details (Sizes, Quantities, Target Date)
                      </label>
                      <textarea
                        id="contact-message"
                        rows="4"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1346a8]"
                        placeholder="e.g. Need 10x4 ft backlit glow sign board with installation in Fraser Road area..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider text-white bg-[#1346a8] hover:bg-[#0f3a8e] shadow-md shadow-blue-900/20 active:scale-98 transition-all text-center"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit & Connect on WhatsApp →'}
                    </button>
                    <p className="text-[11px] text-slate-400 text-center">
                      🔒 Your contact details are kept strictly confidential for quotation only.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#1346a8]">Directions to Our Storefront</span>
              <h2 className="text-2xl font-display font-black text-[#1346a8] mt-0.5">
                Visit Kashish Ad® on Google Maps
              </h2>
            </div>
            <a
              href="https://maps.google.com/?cid=13267923724395025653"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-bold text-[#1346a8] bg-slate-100 hover:bg-[#f0f7ff] border border-slate-200 transition-colors"
            >
              Open in Google Maps App ↗
            </a>
          </div>

          <div className="rounded-3xl border-2 border-slate-200 overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2843.5510078491084!2d85.13891387416965!3d25.612511514756072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed585b8e0da1c9%3A0xb8215c141ed214f5!2sKashish%20Ad%C2%AE!5e1!3m2!1sen!2sin!4v1788667065067!5m2!1sen!2sin"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Kashish Ad Google Maps Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
