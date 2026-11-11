import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { BIHAR_LOCATIONS } from '../data/locationsData';
import { COMPANY_INFO, CONTACT_INFO, LOCATION_INFO, TRUST_METRICS } from '../data/siteData';
import { trackPhoneCall, trackWhatsAppClick } from '../utils/analytics';

export default function Locations() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLocations = BIHAR_LOCATIONS.filter((loc) =>
    loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    loc.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
    loc.overview.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const locationsSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_INFO.fullName,
    legalName: COMPANY_INFO.legalName,
    alternateName: 'Patna Signage & Bihar Sign Board Manufacturer',
    image: 'https://kashishad.in/assets/images/hero-showcase-storefront-facade.png',
    telephone: CONTACT_INFO.phoneIntl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${LOCATION_INFO.building}, ${LOCATION_INFO.shopNo}, ${LOCATION_INFO.street}`,
      addressLocality: LOCATION_INFO.city,
      addressRegion: LOCATION_INFO.state,
      postalCode: LOCATION_INFO.pincode,
      addressCountry: 'IN'
    },
    areaServed: BIHAR_LOCATIONS.map((loc) => ({
      '@type': 'City',
      name: loc.name
    })),
    priceRange: '₹₹'
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <SEO
        title="Sign Board Manufacturer in Patna & Across Bihar | Service Areas"
        description="Kashish Ad® manufactures commercial sign boards, 3D LED acrylic letters, and UV prints in Patna (Fraser Rd) with installation across Muzaffarpur, Gaya, Darbhanga, Bhagalpur, Begusarai and all Bihar districts."
        keywords="sign board manufacturer in patna, sign board maker bihar, led sign board muzaffarpur, sign board gaya, sign board darbhanga, sign board bhagalpur, patna signage"
        canonicalUrl="/locations"
        structuredData={locationsSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumbs */}
        <nav className="mb-6 text-xs text-slate-500 flex items-center gap-2">
          <Link to="/" className="hover:text-[#1346a8]">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Locations Served</span>
        </nav>

        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1346a8] text-xs font-bold uppercase tracking-wider mb-4">
            <span>Bihar Statewide Coverage</span>
            <span>•</span>
            <span>Patna HQ + 38 Districts</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Sign Board Manufacturer in Patna &amp; Across Bihar
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Headquartered at <strong>Capital Tower, Fraser Road, Patna</strong>, Kashish Ad® operates Bihar’s most advanced in-house signage production plant. We fabricate, crate, and dispatch premium 3D LED letters, ACP facades, and digital UV prints across every major commercial hub in Bihar with guaranteed structural safety and express turnaround.
          </p>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
              <div className="text-xl sm:text-2xl font-black text-[#1346a8]">Patna HQ</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Fraser Rd Factory</div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
              <div className="text-xl sm:text-2xl font-black text-[#1346a8]">38 Districts</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Bihar Delivery</div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
              <div className="text-xl sm:text-2xl font-black text-[#1346a8]">16+ Units</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Heavy Machinery</div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
              <div className="text-xl sm:text-2xl font-black text-[#1346a8]">1,00,000+</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Delivered Projects</div>
            </div>
          </div>

          {/* Search Filter */}
          <div className="mt-8 relative max-w-md mx-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search your district or city (e.g., Muzaffarpur, Gaya)..."
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1346a8] shadow-2xs bg-white text-slate-900"
            />
          </div>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredLocations.map((loc) => (
            <div
              key={loc.id}
              className={`bg-white rounded-2xl border transition-all duration-300 hover:shadow-xl flex flex-col justify-between overflow-hidden ${
                loc.isHQ ? 'border-[#1346a8] ring-2 ring-blue-500/20 shadow-md' : 'border-slate-200 shadow-sm'
              }`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                    loc.isHQ ? 'bg-[#1346a8] text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {loc.isHQ ? 'Headquarters & Factory' : `${loc.distanceFromPatnaKm} km from Patna`}
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    {loc.dispatchTime.split(' ')[0]} {loc.dispatchTime.split(' ')[1]}
                  </span>
                </div>

                <h2 className="text-2xl font-extrabold text-slate-900 hover:text-[#1346a8] transition-colors">
                  <Link to={`/locations/${loc.id}`}>
                    {loc.name}
                  </Link>
                </h2>
                <p className="text-xs font-semibold text-[#1346a8] mt-1">{loc.tagline}</p>
                <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                  {loc.overview}
                </p>

                {/* Popular Signage Types */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    In-Demand Commercial Signage:
                  </div>
                  <ul className="space-y-1.5">
                    {loc.popularSignage.slice(0, 3).map((sig, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-center gap-1.5">
                        <span className="text-[#1346a8] font-bold">✓</span>
                        <Link to={sig.link} className="hover:text-[#1346a8] hover:underline font-medium">
                          {sig.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
                <Link
                  to={`/locations/${loc.id}`}
                  className="text-xs font-bold text-[#1346a8] hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                >
                  <span>Explore {loc.name} Hub</span>
                  <span>→</span>
                </Link>
                <a
                  href={CONTACT_INFO.getWhatsAppUrl(`Hello Kashish Ad, I am looking for signage fabrication in ${loc.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick(`locations_hub_${loc.id}`)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-2xs"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Statewide Turnkey Installation Banner */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-400 bg-blue-950/80 px-3.5 py-1 rounded-full border border-blue-500/30">
              Turnkey Bihar Signage Logistics
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mt-4 tracking-tight leading-snug">
              Need Direct Delivery or On-Site Mounting Outside Patna?
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              We pack every 3D sign in heavy wooden crates with corner guards and shock-absorbing foam. Our technician team travels with structural welding gear for turnkey ACP elevation and high-rise mounting anywhere in Bihar.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href={CONTACT_INFO.phoneTel}
                onClick={() => trackPhoneCall('locations_cta_bar', CONTACT_INFO.phoneFormatted)}
                className="px-6 py-3 rounded-xl bg-white text-slate-950 font-bold text-xs sm:text-sm hover:bg-slate-100 transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Call Factory Hotline: {CONTACT_INFO.phoneFormatted}</span>
              </a>
              <Link
                to="/calculator"
                className="px-6 py-3 rounded-xl bg-[#1346a8] text-white font-bold text-xs sm:text-sm hover:bg-blue-600 transition-all border border-blue-400/30"
              >
                Instant Price Calculator →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

