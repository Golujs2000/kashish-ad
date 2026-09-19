import React, { useEffect } from 'react';
import {
  SITE_CONFIG,
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
 * Advanced Local, Technical & Structured Data SEO Component
 * Automatically injects & manages:
 * - Document <title>
 * - Standard Search Meta: description, keywords, robots, author
 * - Geo Meta Tags for Patna, Bihar Local SEO
 * - Open Graph & Twitter Cards with verified image dimensions
 * - Canonical link resolution
 * - Schema.org JSON-LD (Multi-type LocalBusiness/PrintShop, WebSite, Product, BreadcrumbList, FAQs)
 */
export default function SEO({
  title,
  description,
  keywords,
  canonicalUrl,
  canonical, // Support alias
  ogImage = SEO_DEFAULTS.ogImage,
  ogType = 'website',
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  structuredData = null,
  schema = null // Support alias
}) {
  const siteName = SEO_DEFAULTS.siteName;
  const defaultTitle = SEO_DEFAULTS.title;
  const defaultDesc = SEO_DEFAULTS.description;
  const defaultKeywords = SEO_DEFAULTS.keywords;

  const finalTitle = title ? (title.includes(siteName) ? title : `${title} | ${siteName} Patna`) : defaultTitle;
  const finalDesc = description || defaultDesc;
  const finalKeywords = keywords || defaultKeywords;
  const finalRobots = robots;

  // Resolve Canonical URL safely
  const rawCanonical = canonicalUrl || canonical;
  let finalCanonical = '';
  if (rawCanonical) {
    if (rawCanonical.startsWith('http')) {
      finalCanonical = rawCanonical;
    } else {
      finalCanonical = SITE_CONFIG.resolveUrl(rawCanonical);
    }
  } else if (typeof window !== 'undefined') {
    finalCanonical = `${window.location.origin}${window.location.pathname}`;
  } else {
    finalCanonical = SITE_CONFIG.getProductionUrl('/');
  }

  // Resolve OG Image URL safely
  const resolvedOgImage = ogImage.startsWith('http')
    ? ogImage
    : SITE_CONFIG.getProductionUrl(ogImage);

  const activeStructuredData = structuredData || schema;

  useEffect(() => {
    // 1. Set Document Title
    document.title = finalTitle;

    // Helper to update or create meta tags
    const setMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.head.querySelector(`meta[${attr}="${name}"]`);
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
    setMeta('robots', finalRobots);
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
    setMeta('og:url', finalCanonical, true);
    if (resolvedOgImage) {
      setMeta('og:image', resolvedOgImage, true);
      setMeta('og:image:secure_url', resolvedOgImage, true);
      setMeta('og:image:alt', `${COMPANY_INFO.fullName} - Signage & Digital Printing Patna`, true);
    }

    // 5. Twitter Card Tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', finalTitle);
    setMeta('twitter:description', finalDesc);
    if (resolvedOgImage) {
      setMeta('twitter:image', resolvedOgImage);
    }

    // 6. Canonical Link
    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', finalCanonical);

    // 7. Base Multi-Type LocalBusiness & PrintShop Schema
    const productionOrigin = SITE_CONFIG.getProductionUrl('');
    const baseLocalBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'PrintShop', 'ProfessionalService'],
      '@id': `${productionOrigin}/#localbusiness`,
      name: COMPANY_INFO.fullName,
      alternateName: [COMPANY_INFO.alternateName, 'Kashish Ad Patna', 'Kashish Advertisement'],
      legalName: COMPANY_INFO.legalName,
      description: COMPANY_INFO.fullDescription,
      url: productionOrigin,
      telephone: CONTACT_INFO.allPhones,
      email: CONTACT_INFO.email,
      priceRange: COMPANY_INFO.priceRange,
      currenciesAccepted: COMPANY_INFO.currenciesAccepted,
      paymentAccepted: COMPANY_INFO.paymentAccepted,
      image: [
        `${productionOrigin}${COMPANY_INFO.logoFull}`,
        `${productionOrigin}${COMPANY_INFO.storefrontImage}`
      ],
      logo: `${productionOrigin}${COMPANY_INFO.logoFull}`,
      sameAs: [
        SOCIAL_LINKS.instagram.url,
        SOCIAL_LINKS.facebook.url,
        LOCATION_INFO.googleMapsCidUrl
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
        name: COMPANY_INFO.founder,
        jobTitle: COMPANY_INFO.role
      },
      foundingDate: `${COMPANY_INFO.foundedYear}-01-01`,
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

    // 8. Base WebSite Schema with Potential Search Action
    const webSiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${productionOrigin}/#website`,
      url: productionOrigin,
      name: COMPANY_INFO.fullName,
      alternateName: 'Kashish Ad Patna',
      publisher: {
        '@id': `${productionOrigin}/#localbusiness`
      }
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

    const schemasToInject = [
      baseLocalBusinessSchema,
      webSiteSchema,
      ...(activeStructuredData
        ? (Array.isArray(activeStructuredData) ? activeStructuredData : [activeStructuredData])
        : [])
    ];

    scriptTag.textContent = JSON.stringify(schemasToInject);

    return () => {
      // Optional cleanup on unmount
    };
  }, [finalTitle, finalDesc, finalKeywords, finalRobots, finalCanonical, resolvedOgImage, ogType, activeStructuredData]);

  return null;
}
