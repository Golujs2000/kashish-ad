import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { COMPANY_INFO, CONTACT_INFO, LOCATION_INFO, TRUST_METRICS } from '../data/siteData';

const VERIFIED_REVIEWS = [
  {
    id: 1,
    name: 'Alok Kumar Verma',
    business: 'Jewellery Showroom Owner',
    location: 'Fraser Road, Patna',
    rating: 5,
    date: '2 months ago',
    service: '3D LED Acrylic Letters & ACP Facade',
    review: 'Kashish Ad fabricated our gold titanium 3D letter storefront at Fraser Road. The finish is immaculate and the Samsung LED modules are extremely bright even during rainy evenings. Highly recommended for commercial elevation in Patna!'
  },
  {
    id: 2,
    name: 'Dr. R. K. Choudhary',
    business: 'Consultant Neurosurgeon',
    location: 'Kankarbagh, Patna',
    rating: 5,
    date: '3 months ago',
    service: 'SS 304 Doctor Chamber Plates & Glow Sign',
    review: 'Ordered multiple SS 304 acid-etched clinic nameplates and an outdoor glow sign box for our Kankarbagh hospital. Same-day design proofing and flawless installation. Very professional team.'
  },
  {
    id: 3,
    name: 'Manish Pandey',
    business: 'Multi-Brand Electronics',
    location: 'Motijheel, Muzaffarpur',
    rating: 5,
    date: '1 month ago',
    service: 'ACP Glow Sign Board & Flex Mounting',
    review: 'We ordered our shopfront signboard from Muzaffarpur via WhatsApp. The finished sign was dispatched in a heavy wooden crate with zero damage and installed on-site within 24 hours. Factory-direct pricing without distributor commission!'
  },
  {
    id: 4,
    name: 'Pooja Singh',
    business: 'Boutique & Fashion Studio',
    location: 'Boring Road, Patna',
    rating: 5,
    date: '4 months ago',
    service: 'Rose Gold 3D Backlit Letters & Glass Film',
    review: 'Our boutique signboard on Boring Road was designed and produced by S Haidar ji’s team. The halo backlighting creates a luxurious ambiance. Truly the best signage manufacturer in Bihar.'
  },
  {
    id: 5,
    name: 'Vikas Agarwal',
    business: 'Hotel & Restaurant General Manager',
    location: 'Bodh Gaya, Gaya',
    rating: 5,
    date: '5 months ago',
    service: 'Titanium Gold PVD Entrance Sign & Jali Partitions',
    review: 'Outstanding architectural signage work for our hotel in Bodh Gaya. Laser cutting precision and gold titanium finish exceeded our expectations. Solid 5 stars.'
  },
  {
    id: 6,
    name: 'Suresh Kumar',
    business: 'Event & Exhibition Organizer',
    location: 'Dak Bunglow, Patna',
    rating: 4.5,
    date: '2 weeks ago',
    service: 'Rollup Standees & UV Satin Fabric Banners',
    review: 'Urgent requirement for 25 rollup standees for a corporate summit at Gyan Bhawan. Kashish Ad printed and delivered the complete batch in under 6 hours. Lifesaver printing service in Patna!'
  }
];

export default function Reviews() {
  const [filterService, setFilterService] = useState('All');

  const services = ['All', '3D LED Acrylic Letters & ACP Facade', 'SS 304 Doctor Chamber Plates & Glow Sign', 'Rollup Standees & UV Satin Fabric Banners'];

  const filteredReviews = VERIFIED_REVIEWS.filter((r) =>
    filterService === 'All' || r.service.includes(filterService)
  );

  const reviewsSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_INFO.fullName,
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.6',
      reviewCount: '62',
      bestRating: '5',
      worstRating: '1'
    },
    review: VERIFIED_REVIEWS.map((rev) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: rev.name
      },
      datePublished: '2026-10-01',
      reviewBody: rev.review,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: rev.rating.toString(),
        bestRating: '5'
      }
    }))
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <SEO
        title="Verified Client Reviews & Testimonials | Kashish Ad® Patna"
        description="Read 62+ verified Google reviews for Kashish Ad® Patna. Rated 4.6★ for 3D LED sign boards, acrylic letters, UV printing, and ACP facades across Bihar."
        keywords="kashish ad reviews, sign board maker patna reviews, best sign board in patna, 3d led letters patna rating"
        canonicalUrl="/reviews"
        structuredData={reviewsSchema}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 text-xs text-slate-500 flex items-center gap-2">
          <Link to="/" className="hover:text-[#1346a8]">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Client Reviews</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Verified Customer Proof</span>
            <span>•</span>
            <span>62 Google Reviews</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Client Reviews &amp; Testimonials
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Discover why retail showroom owners, doctors, hoteliers, and corporate leaders across Patna and Bihar trust Kashish Ad® for their commercial signboards.
          </p>

          {/* Rating Summary Card */}
          <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-100 max-w-md mx-auto flex items-center justify-around gap-4">
            <div>
              <div className="text-4xl sm:text-5xl font-black text-slate-900">4.6</div>
              <div className="text-amber-400 text-base mt-1">★★★★★</div>
              <div className="text-xs text-slate-500 mt-0.5">Google Rating</div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-[#1346a8]">62+</div>
              <div className="text-xs font-bold text-slate-700 mt-1">Verified Reviews</div>
              <div className="text-xs text-slate-500 mt-0.5">Fraser Road Store</div>
            </div>
          </div>

          {/* Google Review CTA Button */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={LOCATION_INFO.googleMapsCidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#1346a8] hover:bg-blue-800 text-white font-bold text-xs shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>View All Reviews on Google Maps →</span>
            </a>
            <a
              href={LOCATION_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-all"
            >
              Get Directions to Store
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-amber-400 text-sm">
                    {'★'.repeat(Math.floor(rev.rating))}
                    {rev.rating % 1 !== 0 && '★'}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.review}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="font-extrabold text-slate-900 text-xs sm:text-sm">{rev.name}</div>
                <div className="text-xs text-slate-500">{rev.business} • {rev.location}</div>
                <div className="text-[11px] font-semibold text-[#1346a8] mt-1 bg-blue-50 px-2 py-0.5 rounded inline-block">
                  {rev.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact CTA */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200 text-center max-w-2xl mx-auto shadow-2xs">
          <h3 className="text-lg font-black text-slate-900">Experience the Kashish Ad® Quality for Yourself</h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Visit our Capital Tower workshop to inspect real letter samples or order online via WhatsApp with same-day digital 3D proofing.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={CONTACT_INFO.getWhatsAppUrl('Hello Kashish Ad, I want to discuss a new signboard project.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs hover:bg-emerald-600 transition-all shadow-sm"
            >
              Order on WhatsApp
            </a>
            <Link
              to="/calculator"
              className="px-5 py-2.5 rounded-xl bg-blue-50 text-[#1346a8] font-bold text-xs hover:bg-blue-100 border border-blue-200 transition-all"
            >
              Try Instant Price Calculator
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

