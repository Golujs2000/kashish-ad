/**
 * Kashish Ad® - Conversion Rate & Analytics Tracker
 * Handles Google Analytics 4 (GA4), Google Tag Manager (GTM),
 * and custom business conversion events safely.
 */

export const trackEvent = (eventName, params = {}) => {
  try {
    // 1. Google Analytics (gtag.js)
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
    // 2. Google Tag Manager (dataLayer)
    if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...params,
        timestamp: new Date().toISOString()
      });
    }
    // 3. Optional local debug logging
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics Event] ${eventName}:`, params);
    }
  } catch (error) {
    // Fail silently in production to never break user experience
  }
};

/**
 * Track phone call initiation
 */
export const trackPhoneCall = (source = 'general', phoneNumber = '07488984637') => {
  trackEvent('phone_call_click', {
    event_category: 'Contact',
    event_label: `${source} - ${phoneNumber}`,
    source_location: source,
    phone_number: phoneNumber,
    value: 50 // High intent conversion
  });
};

/**
 * Track WhatsApp chat initiation
 */
export const trackWhatsAppClick = (source = 'general', message = '') => {
  trackEvent('whatsapp_click', {
    event_category: 'Contact',
    event_label: `${source} - WhatsApp Chat`,
    source_location: source,
    initial_message: message.substring(0, 100),
    value: 40
  });
};

/**
 * Track Quote / Contact form submission
 */
export const trackQuoteSubmission = (formName = 'contact_form', serviceInterest = '') => {
  trackEvent('generate_lead', {
    event_category: 'Leads',
    event_label: `${formName} - ${serviceInterest}`,
    form_name: formName,
    service_interest: serviceInterest,
    value: 100
  });
};

/**
 * Track price calculator interaction
 */
export const trackCalculatorEstimate = (serviceName, sqft, totalEstimate) => {
  trackEvent('calculator_estimate_calculated', {
    event_category: 'Engagement',
    event_label: `${serviceName} - ${sqft} sqft - Rs ${totalEstimate}`,
    service_name: serviceName,
    dimensions_sqft: sqft,
    estimated_amount: totalEstimate,
    value: 20
  });
};

/**
 * Track directions to shop click
 */
export const trackGetDirections = (source = 'map_section') => {
  trackEvent('get_directions_click', {
    event_category: 'Local_Intent',
    event_label: `Directions from ${source}`,
    source_location: source,
    destination: 'Capital Tower Fraser Road Patna'
  });
};

export default {
  trackEvent,
  trackPhoneCall,
  trackWhatsAppClick,
  trackQuoteSubmission,
  trackCalculatorEstimate,
  trackGetDirections
};

