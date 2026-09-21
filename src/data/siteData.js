/**
 * Kashish Ad® - Master Site Data Configuration
 * Centralized repository for all company identity, contact channels, location,
 * operational hours, trust metrics, navigation links, SEO defaults, and FAQs.
 */

export const SITE_CONFIG = {
  baseUrl: 'https://kashishad.web.app',
  /**
   * Resolves an absolute canonical URL using current origin in browser or production baseUrl
   */
  resolveUrl(path = '/') {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    if (typeof window !== 'undefined' && window.location && window.location.origin) {
      // In development or custom deployment, use current origin
      return `${window.location.origin}${cleanPath}`;
    }
    return `${SITE_CONFIG.baseUrl}${cleanPath}`;
  },
  /**
   * Returns guaranteed production URL for sitemaps and external Schema.org entities
   */
  getProductionUrl(path = '/') {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${SITE_CONFIG.baseUrl}${cleanPath}`;
  }
};

export const COMPANY_INFO = {
  name: 'Kashish Ad',
  legalName: 'Kashish Ad',
  registeredSymbol: '®',
  fullName: 'Kashish Ad®',
  alternateName: 'कशिश एड(र)',
  hindiName: 'कशिश एड(र)',
  tagline: "LET'S PRINT BRANDING",
  headline: 'WE DESIGN THE BEST, WE PRINT YOUR THEME.',
  subheadline: 'We combine industrial-grade production capacity with precision design to create physical branding that stands out and is built to last.',
  shortDescription: "Patna's premier manufacturing center for high-end LED glow sign boards, 3D acrylic letters, UV flatbed printing, and CNC architectural laser cutting.",
  fullDescription: "Bihar's leading commercial digital printing house and sign board manufacturer specializing in UV flatbed printing, solvent vinyl, 3D acrylic LED letters, stainless steel signage, and CNC laser architectural cutting.",
  founder: 'S Haidar',
  role: 'CEO & Founder',
  foundedYear: 1985,
  experienceYears: `${new Date().getFullYear() - 1985}+ Years`,
  gstin: '10AENPH7809D1ZT',
  logoIcon: '/assets/logo-icon.png',
  logoFull: '/assets/logo.png',
  storefrontImage: '/assets/images/hero-showcase-storefront-facade.png',
  priceRange: 'Contact for Quote',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI, Google Pay, PhonePe, Paytm, Credit Card, Debit Card, Net Banking, Cheque, NEFT/RTGS'
};

export const CONTACT_INFO = {
  primaryPhone: '09308327111',
  primaryPhoneFormatted: '09308327111',
  primaryPhoneIntl: '+919308327111',
  secondaryPhone: '07488984637',
  secondaryPhoneFormatted: '07488984637',
  secondaryPhoneIntl: '+917488984637',
  phone: '09308327111',
  phoneFormatted: '09308327111',
  phoneIntl: '+919308327111',
  phoneTel: 'tel:09308327111',
  allPhones: ['+919308327111', '+917488984637'],
  whatsappNumber: '919308327111',
  whatsappDisplay: '09308327111',
  whatsappSecondary: '917488984637',
  email: 'kashishadpatna@gmail.com',
  emailMailto: 'mailto:kashishadpatna@gmail.com',
  /**
   * Helper to construct WhatsApp chat link with custom message
   * @param {string} [message] - Optional message payload
   * @returns {string} Fully-qualified WhatsApp deep link
   */
  getWhatsAppUrl(message = 'Hello Kashish Ad, I want to inquire about printing / signage services.') {
    return `https://wa.me/919308327111?text=${encodeURIComponent(message)}`;
  }
};

export const LOCATION_INFO = {
  shopNo: 'A-6 & B-16',
  building: 'Capital Tower',
  street: 'Fraser Rd',
  locality: 'Old Jakkanpur, Lodipur',
  city: 'Patna',
  state: 'Bihar',
  stateCode: 'BR',
  pincode: '800001',
  country: 'India',
  countryCode: 'IN',
  landmark: 'Capital Tower, Fraser Road (Near Canara Bank / Chhabra Sports, Opposite Patna Junction Corridor)',
  fullAddress: 'Capital Tower, A-6 & B-16, Fraser Rd, Old Jakkanpur, Lodipur, Patna, Bihar 800001',
  shortAddress: 'Capital Tower, Fraser Rd, Patna',
  cityState: 'Patna, Bihar',
  coordinates: {
    latitude: 25.612512,
    longitude: 85.138914
  },
  geoRegion: 'IN-BR',
  geoPlacename: 'Patna, Bihar, India',
  googleMapsCidUrl: 'https://maps.google.com/?cid=13267980838971487477',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.876316260799!2d85.13633907599026!3d25.61251671424103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed585d7b5bf3b3%3A0xb83d95b58ee11235!2sKashish%20Ad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
};

export const WORKING_HOURS = {
  summary: 'Open Mon – Sat: 9:00 AM – 9:00 PM',
  mobileSummary: 'Capital Tower, Fraser Rd, Patna • 9AM–9PM',
  weekdaysDisplay: 'Monday – Saturday: 9:00 AM – 9:00 PM',
  sundayDisplay: 'Scheduled Site Installations & Emergency Printing',
  days: 'Monday to Saturday',
  openTime: '09:00',
  closeTime: '21:00',
  schemaHours: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '21:00'
    }
  ]
};

export const SOCIAL_LINKS = {
  instagram: {
    url: 'https://www.instagram.com/kashishadpatna',
    handle: '@kashishadpatna',
    label: 'Instagram',
    title: 'Follow us on Instagram @kashishadpatna'
  },
  facebook: {
    url: 'https://www.facebook.com/kashishadpatna/',
    handle: 'kashishadpatna',
    label: 'Facebook',
    title: 'Follow us on Facebook @kashishadpatna'
  },
  whatsapp: {
    url: 'https://wa.me/919308327111',
    handle: '09308327111',
    label: 'WhatsApp',
    title: 'Order via WhatsApp'
  }
};

export const TRUST_METRICS = {
  googleRating: 4.6,
  googleRatingStars: '★★★★★',
  reviewsCount: 62,
  reviewsDisplay: '62 Verified Google Reviews',
  projectsCount: '1,00,000+',
  projectsLabel: 'Projects Built',
  machineryCount: '15+',
  machineryLabel: 'Industrial Machines',
  featuredMachineryCount: 8,
  teamMembers: 10,
  teamDisplay: 'Dedicated In-House Team of 10'
};

export const SERVICE_AREAS = [
  // Patna Localities
  { name: 'Patna', type: 'City', isHQ: true },
  { name: 'Fraser Road', type: 'Place', isHQ: true },
  { name: 'Dak Bunglow Road', type: 'Place', isHQ: false },
  { name: 'Kankarbagh', type: 'Place', isHQ: false },
  { name: 'Boring Road', type: 'Place', isHQ: false },
  { name: 'Bailey Road', type: 'Place', isHQ: false },
  { name: 'Exhibition Road', type: 'Place', isHQ: false },
  { name: 'Patna Junction', type: 'Place', isHQ: false },
  { name: 'Rajendra Nagar', type: 'Place', isHQ: false },
  { name: 'Patliputra Colony', type: 'Place', isHQ: false },
  { name: 'Danapur', type: 'Place', isHQ: false },
  { name: 'Anisabad', type: 'Place', isHQ: false },
  // Major Bihar Cities
  { name: 'Bihar', type: 'AdministrativeArea', isHQ: false },
  { name: 'Muzaffarpur', type: 'City', isHQ: false },
  { name: 'Gaya', type: 'City', isHQ: false },
  { name: 'Bhagalpur', type: 'City', isHQ: false },
  { name: 'Darbhanga', type: 'City', isHQ: false },
  { name: 'Purnia', type: 'City', isHQ: false },
  { name: 'Ara', type: 'City', isHQ: false },
  { name: 'Begusarai', type: 'City', isHQ: false },
  { name: 'Chapra', type: 'City', isHQ: false },
  { name: 'Bihar Sharif', type: 'City', isHQ: false },
  { name: 'Samastipur', type: 'City', isHQ: false },
  { name: 'Motihari', type: 'City', isHQ: false }
];

export const NAV_CONFIG = {
  mainNav: [
    { label: 'Home', path: '/' },
    { label: 'Products & Services', path: '/services', badge: '38+ Services' },
    { label: 'Machinery', path: '/machinery', badge: '8 Units' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Get a Quote', path: '/contact', isHot: true },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ],
  coreServices: [
    { label: 'UV Flatbed Digital Printing', path: '/services/uv-digital' },
    { label: 'Solvent Vinyl & Store Graphics', path: '/services/solvent-vinyl' },
    { label: '3D LED Acrylic Letters (12V)', path: '/services/led-acrylic-letters' },
    { label: 'Stainless Steel 304 Signboards', path: '/services/ss-sign-board' },
    { label: 'LED Glow Sign Boxes', path: '/services/glow-sign-board' },
    { label: 'CNC Laser Jali & Gate Cutting', path: '/services/cnc-laser-jali' },
    { label: 'Rollup Standees & Exhibition Displays', path: '/services/rollup-standee' }
  ],
  quickLinks: [
    { label: 'Home Page', path: '/' },
    { label: 'All 38+ Products & Services', path: '/services' },
    { label: 'In-House Machinery (8 Units)', path: '/machinery' },
    { label: 'Executed Projects Portfolio', path: '/gallery' },
    { label: 'Request a Quotation', path: '/contact' },
    { label: 'About Us & CEO S Haidar', path: '/about' },
    { label: 'Store Location & Directions', path: '/contact' }
  ]
};

export const SEO_DEFAULTS = {
  siteName: 'Kashish Ad®',
  title: "Kashish Ad® | Patna's Leading Digital Printing & LED Sign Board Manufacturer",
  description: "Kashish Ad® (Capital Tower, Fraser Road, Patna) is Bihar's premier digital printing and architectural sign board manufacturer. UV flatbed printing, solvent vinyl, 3D acrylic LED letters, glow signs, CNC jali gates. Call 09308327111.",
  keywords: 'digital printing patna, signage board patna, uv printing patna, led acrylic letters patna, vinyl printing bihar, glow sign board patna, kashish ad fraser road, capital tower printing, sign board manufacturer patna',
  ogImage: '/assets/images/hero-showcase-storefront-facade.png',
  author: 'Kashish Ad® (S Haidar)'
};

export const FAQ_DATA = [
  {
    question: 'Where is Kashish Ad located in Patna?',
    answer: 'Kashish Ad is located at Capital Tower, A-6 & B-16, Fraser Rd, Old Jakkanpur, Lodipur, Patna, Bihar 800001 (Near Canara Bank / Chhabra Sports, close to Dak Bunglow & Patna Junction).'
  },
  {
    question: 'What services does Kashish Ad specialize in?',
    answer: 'Kashish Ad specializes in UV Digital Flatbed Printing, Solvent Vinyl Printing, 3D Acrylic LED Letters, Stainless Steel Sign Boards, Frontlit Flex, Glow Sign Boards, Roll-up Standees, CNC Laser Jali Cutting, Custom T-Shirts, Promotional Canopies, and Corporate Mementos.'
  },
  {
    question: 'How can I place an urgent printing order at Kashish Ad?',
    answer: 'You can directly call our primary hotline at 09308327111 or WhatsApp us at 919308327111 / 917488984637 for immediate quotation, artwork review, same-day fabrication, and dispatch.'
  },
  {
    question: 'Does Kashish Ad offer delivery outside Patna across Bihar?',
    answer: 'Yes, we manufacture in-house at Fraser Road, Patna and supply signage, promotional canopies, banners, and digital prints across all districts of Bihar including Muzaffarpur, Gaya, Bhagalpur, Darbhanga, Begusarai, Ara, and Purnia.'
  }
];

export const SITE_DATA = {
  company: COMPANY_INFO,
  contact: CONTACT_INFO,
  location: LOCATION_INFO,
  hours: WORKING_HOURS,
  social: SOCIAL_LINKS,
  trust: TRUST_METRICS,
  serviceAreas: SERVICE_AREAS,
  nav: NAV_CONFIG,
  seo: SEO_DEFAULTS,
  faqs: FAQ_DATA
};

export default SITE_DATA;
