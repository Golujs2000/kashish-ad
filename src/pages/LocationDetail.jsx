import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { BIHAR_LOCATIONS } from '../data/locationsData';
import { COMPANY_INFO, CONTACT_INFO, LOCATION_INFO } from '../data/siteData';
import { trackPhoneCall, trackWhatsAppClick } from '../utils/analytics';

export default function LocationDetail() {
  const { cityId } = useParams();
  const location = BIHAR_LOCATIONS.find((loc) => loc.id === cityId);

  if (!location) {
    return <Navigate to="/locations" replace />;
  }

  // Schema.org structured data
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${COMPANY_INFO.fullName} - ${location.name} Signage Services`,
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
    geo: {
      '@type': 'GeoCoordinates',
      latitude: LOCATION_INFO.coordinates.latitude,
      longitude: LOCATION_INFO.coordinates.longitude
    },
    areaServed: {
      '@type': 'City',
      name: location.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Bihar'
      }
    },
    priceRange: '₹₹',
    url: `https://kashishad.in/locations/${location.id}`
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.localFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

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
        name: 'Locations',
        item: 'https://kashishad.in/locations'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${location.name} Signage`,
        item: `https://kashishad.in/locations/${location.id}`
      }
    ]
  };

  // Other cities for internal linking
  const otherLocations = BIHAR_LOCATIONS.filter((l) => l.id !== location.id);

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <SEO
        title={location.metaTitle}
        description={location.metaDescription}
        keywords={`sign board in ${location.name.toLowerCase()}, led sign board ${location.name.toLowerCase()}, sign board maker ${location.name.toLowerCase()}, printing service ${location.name.toLowerCase()}, acp board ${location.name.toLowerCase()}`}
        canonicalUrl={`/locations/${location.id}`}
        structuredData={[localBusinessSchema, faqSchema, breadcrumbSchema]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 text-xs text-slate-500 flex items-center gap-2">
          <Link to="/" className="hover:text-[#1346a8]">Home</Link>
          <span>/</span>
          <Link to="/locations" className="hover:text-[#1346a8]">Locations</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">{location.name}</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-[#1346a8]">
              {location.isHQ ? 'State Headquarters & Manufacturing Unit' : `Commercial Signage Hub • ${location.distanceFromPatnaKm} km from Patna`}
            </span>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              ⚡ Dispatch: {location.dispatchTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {location.h1Heading}
          </h1>
          <p className="mt-2 text-sm sm:text-base font-bold text-[#1346a8]">
            {location.tagline}
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            {location.overview}
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <div className="text-xs text-slate-500 font-medium">Production Facility</div>
              <div className="text-sm font-bold text-slate-900">Capital Tower, Fraser Rd</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Delivered Projects</div>
              <div className="text-sm font-bold text-[#1346a8]">{location.projectsCount}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Turnaround Time</div>
              <div className="text-sm font-bold text-slate-900">{location.dispatchTime.split(' ')[0]} {location.dispatchTime.split(' ')[1]}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Client Rating</div>
              <div className="text-sm font-bold text-emerald-600">{location.rating}</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={CONTACT_INFO.getWhatsAppUrl(`Hello Kashish Ad, I am looking for a sign board quote for my business in ${location.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick(`location_detail_${location.id}`)}
              className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-md transition-all"
            >
              <span>Order on WhatsApp for {location.name}</span>
            </a>
            <a
              href={CONTACT_INFO.phoneTel}
              onClick={() => trackPhoneCall(`location_detail_${location.id}`, CONTACT_INFO.phoneFormatted)}
              className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all"
            >
              <span>Call Hotline: {CONTACT_INFO.phoneFormatted}</span>
            </a>
            <Link
              to="/calculator"
              className="px-5 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#1346a8] font-bold text-xs sm:text-sm border border-blue-200 transition-all"
            >
              Calculate Estimated Cost →
            </Link>
          </div>
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Commercial Zones */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Key Commercial Hubs &amp; Markets Served in {location.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                Kashish Ad® delivers retail sign boards, multi-level showroom elevations, and hospital wayfinding signs across all major trading centers in {location.name}:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {location.keyCommercialZones.map((zone, i) => (
                  <li key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-800 flex items-center gap-2">
                    <span className="text-blue-600 font-bold shrink-0">📍</span>
                    <span className="font-medium">{zone}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Signage in this Location */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Recommended Signage Solutions for {location.name} Businesses
              </h2>
              <div className="space-y-4">
                {location.popularSignage.map((sig, i) => (
                  <div key={i} className="p-4 rounded-xl border border-slate-100 hover:border-blue-200 bg-slate-50/60 hover:bg-white transition-all">
                    <div className="flex items-center justify-between gap-2">
                      <Link to={sig.link} className="text-sm font-extrabold text-slate-900 hover:text-[#1346a8] transition-colors">
                        {sig.name} →
                      </Link>
                      <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">High Demand</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">{sig.reason}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Logistics & Delivery Execution */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                Fabrication, Packaging &amp; On-Site Installation Logistics
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {location.deliveryAndInstallation}
              </p>
              <div className="mt-4 p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/60 text-xs text-emerald-900">
                <strong>Zero-Transit-Damage Guarantee:</strong> Every consignment shipped outside Patna is secured in custom wooden framing with 5mm bubble wrap, thermocol padding, and shock-resistant corner guards.
              </div>
            </div>

            {/* Local FAQs */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
                Frequently Asked Questions for {location.name} Signage
              </h2>
              <div className="space-y-4">
                {location.localFaqs.map((faq, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">{faq.question}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-6">
            {/* Quick Order Card */}
            <div className="bg-gradient-to-br from-[#1346a8] to-blue-900 text-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-black tracking-tight">Need a Custom Sign in {location.name}?</h3>
              <p className="text-xs text-blue-100 mt-2 leading-relaxed">
                Send your shopfront photo and approximate dimensions. We will generate a digital 3D preview and factory-direct price quotation within 30 minutes!
              </p>
              <div className="mt-5 space-y-2.5">
                <a
                  href={CONTACT_INFO.getWhatsAppUrl(`Hi Kashish Ad, please share an estimate for my signboard in ${location.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick(`sidebar_${location.id}`)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href={CONTACT_INFO.phoneTel}
                  onClick={() => trackPhoneCall(`sidebar_${location.id}`, CONTACT_INFO.phoneFormatted)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <span>Call {CONTACT_INFO.phoneFormatted}</span>
                </a>
              </div>
            </div>

            {/* Other Bihar Cities Cross-linking */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                Other Locations Served Across Bihar
              </h3>
              <ul className="space-y-2">
                {otherLocations.map((other) => (
                  <li key={other.id}>
                    <Link
                      to={`/locations/${other.id}`}
                      className="text-xs font-semibold text-slate-700 hover:text-[#1346a8] flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <span>{other.name}</span>
                      <span className="text-[11px] text-slate-400">{other.isHQ ? 'HQ' : `${other.distanceFromPatnaKm} km`}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-3 border-t border-slate-100 text-center">
                <Link to="/locations" className="text-xs font-bold text-[#1346a8] hover:underline">
                  View All Locations Served →
                </Link>
              </div>
            </div>

            {/* Factory Trust & Address */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs text-xs text-slate-600 space-y-2">
              <div className="font-bold text-slate-900">Manufacturing Headquarters:</div>
              <div>Capital Tower, Shop A-6 &amp; B-16, Fraser Road, Patna, Bihar 800001</div>
              <div className="pt-2 border-t border-slate-100 text-slate-500">
                GSTIN: <span className="font-mono font-semibold text-slate-700">{COMPANY_INFO.gstin}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

