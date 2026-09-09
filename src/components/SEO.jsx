import React, { useEffect } from 'react';

/**
 * Advanced Local & Technical SEO Component
 * Automatically injects:
 * - Document <title>
 * - Standard Meta: description, keywords, robots
 * - Geo Meta Tags for Patna, Bihar Local SEO
 * - Open Graph & Twitter Cards
 * - Canonical link
 * - Schema.org JSON-LD (LocalBusiness, Product, Breadcrumbs, FAQs)
 */
export default function SEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/assets/images/kashish-ad-capital-tower-storefront.jpg',
  ogType = 'website',
  structuredData = null
}) {
  const siteName = 'Kashish Ad®';
  const defaultTitle = "Kashish Ad® | Patna's Leading Digital Printing & LED Sign Board Manufacturer";
  const defaultDesc = 'Kashish Ad® (Capital Tower, Fraser Road, Patna) is Bihar\'s premier digital printing and architectural sign board manufacturer. UV flatbed printing, solvent vinyl, 3D acrylic LED letters, glow signs, CNC jali gates. Call 09308327111.';
  const defaultKeywords = 'digital printing patna, signage board patna, uv printing patna, led acrylic letters patna, vinyl printing bihar, glow sign board patna, kashish ad fraser road, capital tower printing';

  const finalTitle = title ? `${title} | ${siteName} Patna` : defaultTitle;
  const finalDesc = description || defaultDesc;
  const finalKeywords = keywords || defaultKeywords;

  useEffect(() => {
    // 1. Set Document Title
    document.title = finalTitle;

    // Helper to update or create meta tags
    const setMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Search Meta
    setMeta('description', finalDesc);
    setMeta('keywords', finalKeywords);
    setMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMeta('author', 'Kashish Ad® (S Haidar)');

    // 3. Local SEO Geo Tags for Patna, Bihar
    setMeta('geo.region', 'IN-BR');
    setMeta('geo.placename', 'Patna, Bihar, India');
    setMeta('geo.position', '25.612512;85.138914');
    setMeta('ICBM', '25.612512, 85.138914');

    // 4. Open Graph Tags
    setMeta('og:locale', 'en_IN', true);
    setMeta('og:type', ogType, true);
    setMeta('og:title', finalTitle, true);
    setMeta('og:description', finalDesc, true);
    setMeta('og:site_name', 'Kashish Ad® Patna', true);
    const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : 'http://localhost:3000');
    setMeta('og:url', currentUrl, true);
    if (ogImage) {
      setMeta('og:image', ogImage, true);
    }

    // 5. Twitter Card Tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', finalTitle);
    setMeta('twitter:description', finalDesc);
    if (ogImage) {
      setMeta('twitter:image', ogImage);
    }

    // 6. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // 7. Base LocalBusiness Schema (Always Active)
    const baseLocalBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'http://localhost:3000/#localbusiness',
      name: 'Kashish Ad®',
      legalName: 'Kashish Ad',
      description: "Patna's leading commercial digital printing house and sign board manufacturer specializing in UV flatbed printing, 3D acrylic LED letters, solvent vinyl, and architectural signage.",
      url: 'http://localhost:3000',
      telephone: '+919308327111',
      email: 'kashishadpatna@gmail.com',
      priceRange: '₹40 - ₹5000',
      image: [
        'http://localhost:3000/assets/logo.png',
        'http://localhost:3000/assets/images/kashish-ad-capital-tower-storefront.jpg'
      ],
      sameAs: [
        'https://www.instagram.com/kashishadpatna',
        'https://www.facebook.com/kashishadpatna/'
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Capital Tower, A-6 & B-16, Fraser Rd, Old Jakkanpur, Lodipur',
        addressLocality: 'Patna',
        addressRegion: 'Bihar',
        postalCode: '800001',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 25.612512,
        longitude: 85.138914
      },
      hasMap: 'https://maps.google.com/?cid=13267980838971487477',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:00',
          closes: '20:30'
        }
      ],
      founder: {
        '@type': 'Person',
        name: 'S Haidar'
      },
      taxID: '10AENPH7809D1ZT',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.6',
        reviewCount: '61',
        bestRating: '5',
        worstRating: '1'
      },
      areaServed: [
        { '@type': 'City', name: 'Patna' },
        { '@type': 'AdministrativeArea', name: 'Bihar' },
        { '@type': 'City', name: 'Muzaffarpur' },
        { '@type': 'City', name: 'Gaya' },
        { '@type': 'City', name: 'Bhagalpur' },
        { '@type': 'City', name: 'Darbhanga' }
      ]
    };

    // Inject JSON-LD Schema
    const scriptId = 'kashish-structured-data';
    let scriptTag = document.getElementById(scriptId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemasToInject = structuredData 
      ? [baseLocalBusinessSchema, ...(Array.isArray(structuredData) ? structuredData : [structuredData])]
      : [baseLocalBusinessSchema];

    scriptTag.textContent = JSON.stringify(schemasToInject);

    return () => {
      // Cleanup custom schemas on unmount if necessary
    };
  }, [finalTitle, finalDesc, finalKeywords, canonicalUrl, ogImage, ogType, structuredData]);

  return null;
}
