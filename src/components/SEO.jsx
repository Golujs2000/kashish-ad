import React, { useEffect } from 'react';
import {
  COMPANY_INFO,
  CONTACT_INFO,
  LOCATION_INFO,
  WORKING_HOURS,
  SOCIAL_LINKS,
  TRUST_METRICS,
  SERVICE_AREAS,
  SEO_DEFAULTS
} from '../data/siteData';

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
  ogImage = SEO_DEFAULTS.ogImage,
  ogType = 'website',
  structuredData = null
}) {
  const siteName = SEO_DEFAULTS.siteName;
  const defaultTitle = SEO_DEFAULTS.title;
  const defaultDesc = SEO_DEFAULTS.description;
  const defaultKeywords = SEO_DEFAULTS.keywords;

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
    setMeta('author', SEO_DEFAULTS.author);

    // 3. Local SEO Geo Tags for Patna, Bihar
    setMeta('geo.region', LOCATION_INFO.geoRegion);
    setMeta('geo.placename', LOCATION_INFO.geoPlacename);
    setMeta('geo.position', `${LOCATION_INFO.coordinates.latitude};${LOCATION_INFO.coordinates.longitude}`);
    setMeta('ICBM', `${LOCATION_INFO.coordinates.latitude}, ${LOCATION_INFO.coordinates.longitude}`);

    // 4. Open Graph Tags
    setMeta('og:locale', 'en_IN', true);
    setMeta('og:type', ogType, true);
    setMeta('og:title', finalTitle, true);
    setMeta('og:description', finalDesc, true);
    setMeta('og:site_name', `${COMPANY_INFO.fullName} Patna`, true);
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
      name: COMPANY_INFO.fullName,
      legalName: COMPANY_INFO.legalName,
      description: COMPANY_INFO.fullDescription,
      url: 'http://localhost:3000',
      telephone: CONTACT_INFO.phoneIntl,
      email: CONTACT_INFO.email,
      priceRange: COMPANY_INFO.priceRange,
      image: [
        `http://localhost:3000${COMPANY_INFO.logoFull}`,
        `http://localhost:3000${COMPANY_INFO.storefrontImage}`
      ],
      sameAs: [
        SOCIAL_LINKS.instagram.url,
        SOCIAL_LINKS.facebook.url
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${LOCATION_INFO.building}, ${LOCATION_INFO.shopNo}, ${LOCATION_INFO.street}, ${LOCATION_INFO.locality}`,
        addressLocality: LOCATION_INFO.city,
        addressRegion: LOCATION_INFO.state,
        postalCode: LOCATION_INFO.pincode,
        addressCountry: LOCATION_INFO.countryCode
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: LOCATION_INFO.coordinates.latitude,
        longitude: LOCATION_INFO.coordinates.longitude
      },
      hasMap: LOCATION_INFO.googleMapsCidUrl,
      openingHoursSpecification: WORKING_HOURS.schemaHours.map(h => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: h.dayOfWeek,
        opens: h.opens,
        closes: h.closes
      })),
      founder: {
        '@type': 'Person',
        name: COMPANY_INFO.founder
      },
      taxID: COMPANY_INFO.gstin,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: String(TRUST_METRICS.googleRating),
        reviewCount: String(TRUST_METRICS.reviewsCount),
        bestRating: '5',
        worstRating: '1'
      },
      areaServed: SERVICE_AREAS.map(a => ({
        '@type': a.type,
        name: a.name
      }))
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
