import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactMapSection() {
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingContact(true);
    try {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm)
      });
    } catch (err) {
      console.warn('Inquiry API Notice:', err);
    }
    setContactSubmitted(true);
    setIsSubmittingContact(false);
    const waText = encodeURIComponent(
      `Hello Kashish Ad®, I am submitting an inquiry from the homepage:\nName: ${contactForm.name}\nPhone: ${contactForm.phone}\nRequirement: ${contactForm.message}`
    );
    window.open(`https://wa.me/919308327111?text=${waText}`, '_blank');
  };

  return (
    <section id="home-contact" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1346a8] text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#1346a8] animate-pulse"></span>
            Direct Workshop &amp; Showroom Access
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 tracking-tight">
            Contact Us &amp; Visit Our Workshop <span className="text-[#1346a8]">in Patna</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Drop by our Fraser Road production unit at Capital Tower to inspect real material samples, talk directly to our signage fabrication engineers, or reach our direct order desk for fast turnaround.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (5 Cols): Touchpoints + Quick Inquiry Form */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Address Card */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-[#1346a8] flex items-center justify-center text-lg shrink-0">
                📍
              </div>
              <div>
                <h3 className="font-bold text-[#1346a8] text-sm">Workshop &amp; Storefront Address</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  <strong>Kashish Ad®</strong><br />
                  Capital Tower, A-6 &amp; B-16, Fraser Rd,<br />
                  Old Jakkanpur, Lodipur, Patna, Bihar 800001
                </p>
                <span className="inline-block mt-2 px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-slate-50 border border-slate-200 text-slate-700">
                  Landmark: Fraser Road, near Canara Bank (5 min from Patna Jn)
                </span>
              </div>
            </div>

            {/* Direct Hotline & WhatsApp Card */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-[#1346a8] flex items-center justify-center text-lg shrink-0">
                📞
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#1346a8] text-sm">Direct Phone &amp; WhatsApp Hotline</h3>
                <p className="mt-1">
                  <a href="tel:09308327111" className="text-lg font-display font-black text-[#1346a8] hover:underline">
                    09308327111
                  </a>
                </p>
                <p className="text-xs text-slate-500 mt-0.5">Instant quotes, site inspection booking &amp; artwork reviews.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href="https://wa.me/919308327111?text=Hello%20Kashish%20Ad,%20I%20am%20visiting%20your%20website%20and%20want%20to%20inquire%20about%20printing%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-brand-whatsapp hover:bg-brand-whatsapp-hover shadow-xs active:scale-95 transition-all"
                  >
                    💬 Chat on WhatsApp
                  </a>
                  <a
                    href="tel:09308327111"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#1346a8] bg-blue-50 hover:bg-blue-100 border border-blue-200 active:scale-95 transition-all"
                  >
                    📞 Call 09308327111
                  </a>
                </div>
              </div>
            </div>

            {/* Hours & Email Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-base">🕒</span>
                  <h3 className="font-bold text-[#1346a8] text-xs uppercase tracking-wider">Working Hours</h3>
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  <strong>Mon – Sat:</strong> 9 AM – 9 PM<br />
                  <strong>Sunday:</strong> Site Installations
                </p>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-base">✉️</span>
                  <h3 className="font-bold text-[#1346a8] text-xs uppercase tracking-wider">Official Email</h3>
                </div>
                <a
                  href="mailto:kashishadpatna@gmail.com"
                  className="text-xs font-bold text-[#1346a8] hover:underline break-all block"
                >
                  kashishadpatna@gmail.com
                </a>
                <span className="text-[10px] text-slate-400 block mt-1">Send CDR / PDF Artwork</span>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
              <h3 className="font-bold text-sm text-[#1346a8] mb-0.5">Quick Project Inquiry</h3>
              <p className="text-xs text-slate-500 mb-3">Leave your details below — our desk replies on WhatsApp in 10 mins.</p>
              {contactSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl text-xs text-emerald-800 text-center font-bold">
                  ✅ Thank you! Inquiry launched in WhatsApp.
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-2.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1346a8]"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Mobile Number *"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1346a8]"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Requirement (e.g. 10x4 ft LED Sign, Flex Banner, UV Print)..."
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1346a8]"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  />
                  <button
                    type="submit"
                    disabled={isSubmittingContact}
                    className="w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#1346a8] hover:bg-[#0f3a8e] active:scale-98 transition-all shadow-sm"
                  >
                    {isSubmittingContact ? 'Connecting...' : 'Submit & Connect on WhatsApp →'}
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Column (7 Cols): Embedded Interactive Google Map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-card overflow-hidden flex-1 flex flex-col min-h-[460px] sm:min-h-[520px]">
              
              {/* Map Header Bar */}
              <div className="p-4 sm:px-6 bg-slate-100/80 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-800">
                    Live Workshop Map Location • Capital Tower, Fraser Road
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?cid=13267923724395025653"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-[#1346a8] hover:bg-[#0f3a8e] transition-colors shadow-xs"
                >
                  <span>Open in Google Maps App</span>
                  <span>↗</span>
                </a>
              </div>

              {/* Google Maps Iframe */}
              <div className="flex-1 w-full relative min-h-[380px] sm:min-h-[440px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2843.5510078491084!2d85.13891387416965!3d25.612511514756072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed585b8e0da1c9%3A0xb8215c141ed214f5!2sKashish%20Ad%C2%AE!5e1!3m2!1sen!2sin!4v1788667065067!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="w-full h-full border-0 absolute inset-0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Kashish Ad Google Maps Location"
                ></iframe>
              </div>

              {/* Map Footer Bar */}
              <div className="p-3.5 sm:px-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2 shrink-0">
                <span className="font-semibold text-slate-700">
                  📍 Fraser Road • Near Canara Bank • Patna 800001
                </span>
                <Link
                  to="/contact"
                  className="font-bold text-[#1346a8] hover:underline"
                >
                  Full Contact &amp; Directions Guide →
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
