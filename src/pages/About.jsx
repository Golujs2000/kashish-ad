import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function About() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Kashish Ad',
    description: 'Learn about Kashish Ad, Patna\'s foremost digital printing and sign board fabrication company founded by S Haidar in 1999.',
    url: 'http://localhost:3000/about'
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="About Kashish Ad | Patna Digital Printing & Signage Pioneer"
        description="Learn about Kashish Ad - Patna's premier digital printing and architectural sign board manufacturer founded in 1999 by CEO S Haidar. Located at Capital Tower, Fraser Road."
        keywords="about kashish ad, s haidar patna, printing press fraser road patna, signage manufacturer bihar"
        canonicalUrl="http://localhost:3000/about"
        structuredData={[aboutSchema]}
      />
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-slate-50 border-b border-slate-200 py-16 sm:py-20">
        {/* Architectural Blueprint Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.6] bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#e85c1a] text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#e85c1a] animate-pulse"></span>
            Established 1999 • Patna, Bihar
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#1a3a6b] tracking-tight max-w-3xl mx-auto">
            About <span className="text-[#e85c1a] font-raphtalia tracking-wide">Kashish Ad</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Founded under the visionary leadership of <strong>CEO S Haidar</strong>, Kashish Ad has grown into Patna's premier digital printing and architectural 3D signage manufacturing enterprise, combining industrial-grade technology with handcrafted precision.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
              ⭐ 4.6 Google Rating (61 Reviews)
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
              📜 GSTIN: 10AENPH7809D1ZT
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
              👥 Dedicated In-House Team of 10
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
              📍 Capital Tower, Fraser Road
            </span>
          </div>
        </div>
      </section>

      {/* Story & Facility Overview */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-black uppercase tracking-widest text-[#e85c1a]">Our Journey</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-[#1a3a6b] leading-tight">
                Setting the Standard for Commercial Branding in Bihar
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                Since our GST registration in <strong>1999</strong>, Kashish Ad has operated with a singular focus: bringing world-class commercial printing, precision laser cutting, and architectural glow signage directly to businesses, institutions, and retailers across Bihar.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Operating from our multi-unit facility at <strong>Capital Tower, A-6 &amp; B-16, Fraser Road</strong>, we have invested continuously in cutting-edge machinery — including Japanese Roland print-and-cut plotters, heavy-duty industrial UV flatbeds, fiber metal lasers, and CNC routing centers.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                By keeping all fabrication, cutting, printing, and wiring strictly in-house, we eliminate third-party delays and middleman markups, passing on superior quality and factory-direct savings to our clients.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                  <span className="block font-display font-black text-2xl sm:text-3xl text-[#e85c1a]">1999</span>
                  <span className="block text-xs font-bold text-slate-500 mt-1">Year Established</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                  <span className="block font-display font-black text-2xl sm:text-3xl text-[#1a3a6b]">1,00,000+</span>
                  <span className="block text-xs font-bold text-slate-500 mt-1">Projects Built</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                  <span className="block font-display font-black text-2xl sm:text-3xl text-[#1a3a6b]">15+</span>
                  <span className="block text-xs font-bold text-slate-500 mt-1">Industrial Machines</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                  <span className="block font-display font-black text-2xl sm:text-3xl text-emerald-600">4.6★</span>
                  <span className="block text-xs font-bold text-slate-500 mt-1">Google Rating</span>
                </div>
              </div>
            </div>

            {/* Media column */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl border-2 border-slate-200 p-3 shadow-card overflow-hidden">
                <img
                  src="/assets/images/kashish-ad-capital-tower-storefront.jpg"
                  alt="Kashish Ad Storefront at Capital Tower Patna"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="p-4">
                  <h4 className="font-bold text-[#1a3a6b] text-sm">Kashish Ad Primary Workshop &amp; Showroom</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Capital Tower, Fraser Road, Patna</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statutory Profile */}
      <section className="bg-slate-50 border-y border-slate-200 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#e85c1a]">
              Government &amp; Corporate Verification
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-[#1a3a6b] mt-1">
              Verified Statutory Profile
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              We operate with 100% statutory transparency and compliance, ensuring verified B2B invoicing with GST input tax credit eligibility for all corporate and institutional clients.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-card p-6 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Legal Entity Name</span>
                <span className="block text-base font-bold text-[#1a3a6b] mt-1">Kashish Ad</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Company CEO / Proprietor</span>
                <span className="block text-base font-bold text-[#1a3a6b] mt-1">S Haidar</span>
              </div>
              <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200">
                <span className="block text-[11px] font-bold text-[#e85c1a] uppercase tracking-wider">GST Identification Number</span>
                <span className="block text-lg font-black font-mono text-[#e85c1a] mt-1">10AENPH7809D1ZT</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">GST Registration Date</span>
                <span className="block text-base font-bold text-[#1a3a6b] mt-1">1999</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Legal Status of Firm</span>
                <span className="block text-base font-bold text-[#1a3a6b] mt-1">Proprietorship</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Nature of Business</span>
                <span className="block text-base font-bold text-[#1a3a6b] mt-1">Trader - Retailer &amp; Supplier of Services</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Team Strength</span>
                <span className="block text-base font-bold text-[#1a3a6b] mt-1">Upto 10 Skilled Technicians &amp; Engineers</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Primary Operational Hotline</span>
                <span className="block text-base font-bold text-[#1a3a6b] mt-1">09308327111</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 sm:col-span-2">
                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Official Email</span>
                <a href="mailto:kashishadpatna@gmail.com" className="block text-base font-bold text-[#1a3a6b] hover:text-[#e85c1a] mt-1 break-all transition-colors">
                  kashishadpatna@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#e85c1a]">Why Clients Trust Us</span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-[#1a3a6b] mt-1">
              Our Operational Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-sm text-[#1a3a6b]">Precision Engineering</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                From 0.01mm fiber laser kerfs to automated channel letter bending, our work delivers millimeter-perfect alignment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="text-3xl mb-3">☀️</div>
              <h3 className="font-bold text-sm text-[#1a3a6b]">Weather &amp; Fade Resilience</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Outdoor UV-LED pigments and SS 304 alloys that withstand Patna's scorching summers and monsoon rains.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-sm text-[#1a3a6b]">Fast Turnaround Times</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                With dual shifts and in-house inventory, we execute urgent flex banners and signage on guaranteed timelines.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-bold text-sm text-[#1a3a6b]">Direct WhatsApp Hotline</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Chat directly on <strong>09308327111</strong> for instant file verification, proof approvals, and live dispatch updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA in Navy #1a3a6b */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a3a6b] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-display font-black text-white">
                Ready to Elevate Your Business Identity?
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Whether you need a single illuminated glow sign board or a statewide rollout across Bihar, CEO S Haidar and the Kashish Ad team are ready to assist you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
              <a
                href="https://wa.me/919308327111?text=Hello%20CEO%20S%20Haidar%20/%20Kashish%20Ad,%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#e85c1a] hover:bg-[#cf4e12] shadow-md shadow-orange-500/30 text-center transition-all"
              >
                💬 WhatsApp CEO / Workshop
              </a>
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl font-bold text-xs text-white bg-white/10 hover:bg-white/20 border border-white/20 text-center transition-colors"
              >
                View Location &amp; Maps
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
