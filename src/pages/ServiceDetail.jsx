import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import SEO from '../components/SEO';
import { SITE_CONFIG } from '../data/siteData';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const product = PRODUCTS.find((p) => p.id === serviceId);

  // Inquiry form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Patna',
    dimensions: '',
    quantity: '1',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
        <SEO title="Service Not Found" description="The requested printing or signage service was not found." robots="noindex, follow" />
        <div className="max-w-md w-full text-center bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-5xl mb-4">🔍</div>
          <h1 className="text-2xl font-display font-black text-[#1346a8]">Service Not Found</h1>
          <p className="text-sm text-slate-600 mt-2">
            The printing or signage solution you are looking for is not listed or has moved.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/services"
              className="px-5 py-2.5 rounded-xl bg-[#1346a8] text-white font-bold text-xs hover:bg-[#0f3a8e] transition-colors"
            >
              Browse All 17 Services
            </Link>
            <Link
              to="/"
              className="px-5 py-2.5 rounded-xl bg-[#1346a8] text-white font-bold text-xs hover:bg-[#0b1c36] transition-colors"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Related products from same category or others
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);
  const fallbackRelated = relatedProducts.length < 3
    ? [...relatedProducts, ...PRODUCTS.filter((p) => p.id !== product.id && p.category !== product.category)].slice(0, 3)
    : relatedProducts;

  const waOrderMsg = encodeURIComponent(
    `Hello Kashish Ad® (Patna), I want to order / enquire about "${product.title}" (${product.price} ${product.unit}). Please share pricing and fabrication turnaround time.`
  );

  const handleSubmitInquiry = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          service: `${product.title} (Qty: ${formData.quantity}, Dim: ${formData.dimensions || 'N/A'})`,
          city: formData.city,
          message: formData.message
        })
      });
      setFormSubmitted(true);
    } catch (err) {
      console.error('Inquiry error:', err);
      // Even if network glitch, treat as submitted
      setFormSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  // Structured Data Schemas for Local & Technical SEO
  const productPriceNumber = product.price ? product.price.replace(/[^0-9]/g, '') : '';
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    image: SITE_CONFIG.getProductionUrl(product.image),
    description: product.description,
    sku: `KASHISH-${product.id.toUpperCase()}`,
    brand: {
      '@type': 'Brand',
      name: 'Kashish Ad®'
    },
    offers: {
      '@type': 'Offer',
      url: SITE_CONFIG.getProductionUrl(`/services/${product.id}`),
      priceCurrency: 'INR',
      price: productPriceNumber || '100',
      priceValidUntil: '2027-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Kashish Ad®'
      }
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_CONFIG.getProductionUrl('/')
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: SITE_CONFIG.getProductionUrl('/services')
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.title,
        item: SITE_CONFIG.getProductionUrl(`/services/${product.id}`)
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title={`${product.title} in Patna | Best Price & Specs`}
        description={`${product.title} in Patna by Kashish Ad®: ${product.description} Rate: ${product.price} ${product.unit}. Same-day printing at Fraser Road, Patna. Call 09308327111.`}
        keywords={`${product.title} patna, ${product.title} bihar, sign board patna, digital printing capital tower fraser road, kashish ad 09308327111`}
        canonicalUrl={`/services/${product.id}`}
        ogImage={product.image}
        ogType="product"
        structuredData={[productSchema, breadcrumbSchema]}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center flex-wrap gap-2 text-xs text-slate-500 font-medium">
            <li>
              <Link to="/" className="hover:text-[#1346a8] transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/services" className="hover:text-[#1346a8] transition-colors">Services &amp; Products</Link>
            </li>
            <li>/</li>
            <li className="text-[#1346a8] font-bold truncate max-w-xs sm:max-w-md">
              {product.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Main Service Presentation Hero */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Col: High-Res Image & Visual Badges (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md aspect-4/3 sm:aspect-square">
                <img
                  src={product.image}
                  alt={`${product.title} manufactured by Kashish Ad Patna`}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1346a8] text-white shadow-md">
                    {product.badge}
                  </span>
                )}
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl text-white text-[11px] flex items-center justify-between">
                  <span>📍 Capital Tower, Fraser Rd, Patna</span>
                  <span className="font-semibold text-emerald-400">● In Stock / Machine Ready</span>
                </div>
              </div>

              {/* Quality & Machine Badges */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                  <span className="text-xl">🏭</span>
                  <div className="text-left">
                    <div className="text-[11px] font-bold text-[#1346a8] uppercase">In-House Machines</div>
                    <div className="text-[10px] text-slate-500">Zero third-party delay</div>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                  <span className="text-xl">⚡</span>
                  <div className="text-left">
                    <div className="text-[11px] font-bold text-[#1346a8] uppercase">Express Dispatch</div>
                    <div className="text-[10px] text-slate-500">{product.turnaround || '24-48 Hours'}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Product Information & Action CTA (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1346a8]"></span>
                  {product.category === 'largeformat' && 'Large Format Digital Printing'}
                  {product.category === 'signage' && '3D Signage & Architectural Letters'}
                  {product.category === 'promotional' && 'Outdoor & Promotional Media'}
                  {product.category === 'corporate' && 'Labels & Corporate Branding'}
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 tracking-tight leading-tight">
                  {product.title}
                </h1>

                {/* Price & Turnaround Bar */}
                <div className="mt-4 p-4 rounded-2xl bg-[#f0f7ff] border border-blue-100 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block">
                      Direct Manufacturer Pricing
                    </span>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      <span className="text-2xl sm:text-3xl font-black font-display text-[#1346a8]">
                        {product.price}
                      </span>
                      <span className="text-sm font-semibold text-slate-600">
                        {product.unit}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col text-right">
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Turnaround Time</span>
                    <span className="text-xs font-bold text-[#1346a8] mt-0.5">{product.turnaround || 'Same Day / 24h'}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-5 text-sm sm:text-base text-slate-700 leading-relaxed">
                  {product.description}
                </p>

                {/* Key Bullet Features */}
                {product.features && (
                  <div className="mt-6 space-y-2.5">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Key Highlights &amp; Features:
                    </h2>
                    <ul className="space-y-2">
                      {product.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                          <span className="text-[#1346a8] font-bold text-base leading-none shrink-0">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Immediate CTA Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3.5">
                <a
                  href={`https://wa.me/919308327111?text=${waOrderMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#1346a8] hover:bg-[#0f3a8e] shadow-md shadow-blue-900/20 active:scale-95 transition-all text-center"
                >
                  <span className="text-base">💬</span>
                  <span>Order via WhatsApp</span>
                </a>
                <a
                  href="tel:09308327111"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#1346a8] hover:bg-[#0b1c36] shadow-md shadow-navy-500/20 active:scale-95 transition-all text-center"
                >
                  <span className="text-base">📞</span>
                  <span>Call Hotline: 09308327111</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Specifications & Technical Breakdown */}
      {product.specs && (
        <section className="py-12 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1346a8]">Engineered Precision</span>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900 mt-1">
                Technical Specifications &amp; Parameters
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                All production for {product.title} adheres to strict industrial standards using calibrated CNC and Japanese print engines at our Fraser Road facility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(product.specs).map(([label, value], idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{label}</div>
                  <div className="text-sm font-bold text-slate-900 mt-1">{value}</div>
                </div>
              ))}
              {product.lifespan && (
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Durability Rating</div>
                  <div className="text-sm font-bold text-emerald-600 mt-1">{product.lifespan}</div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Materials & Applications Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Compatible Materials */}
            {product.materials && product.materials.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🧱</span>
                  <h3 className="text-lg font-bold font-display text-slate-900">
                    Supported Substrates &amp; Materials
                  </h3>
                </div>
                <p className="text-xs text-slate-600 mb-4">
                  We maintain certified inventory of raw substrates ready for instantaneous processing:
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((mat, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Practical Real-World Applications */}
            {product.applications && product.applications.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🏢</span>
                  <h3 className="text-lg font-bold font-display text-slate-900">
                    Popular Business Applications
                  </h3>
                </div>
                <p className="text-xs text-slate-600 mb-4">
                  Widely deployed across Patna retail stores, hospitals, corporate towers, and residential elevations:
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-[#1346a8] text-xs font-semibold"
                    >
                      📍 {app}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Instant Custom Quote Form for This Service */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-6 sm:p-10">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1346a8] text-xs font-bold uppercase tracking-wider">
                Direct Work Order
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900 mt-2">
                Request a Custom Quote for {product.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Specify your custom dimensions, required material, or upload draft vectors. Our fabrication desk will respond in under 15 minutes.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200">
                <div className="text-4xl mb-3">✅</div>
                <h3 className="text-xl font-bold text-emerald-900">Inquiry Received Successfully!</h3>
                <p className="text-xs text-emerald-800 mt-2 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. S Haidar and the Kashish Ad® production team have received your request for <strong>{product.title}</strong>.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/919308327111?text=${encodeURIComponent(`Hi Kashish Ad, I just submitted an inquiry on the website for ${product.title} under name ${formData.name} (${formData.phone}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#1346a8] text-white font-bold text-xs"
                  >
                    Open in WhatsApp for Instant Follow-up
                  </a>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-200 text-slate-800 font-bold text-xs"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#1346a8]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mobile / WhatsApp No *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 09308327111"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#1346a8]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">City / Delivery Location</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#1346a8]"
                      placeholder="e.g. Fraser Rd, Patna"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Dimensions (W × H)</label>
                    <input
                      type="text"
                      placeholder="e.g. 10 ft × 4 ft"
                      value={formData.dimensions}
                      onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#1346a8]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Estimated Quantity</label>
                    <input
                      type="text"
                      placeholder="e.g. 5 Pcs / 100 Sq.ft"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#1346a8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Additional Project Details</label>
                  <textarea
                    rows={3}
                    placeholder="Describe specific finishes, base material, lighting requirements, or emergency turnaround deadlines..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#1346a8]"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#1346a8] hover:bg-[#0f3a8e] transition-colors shadow-md shadow-blue-900/20"
                  >
                    {loading ? 'Submitting Inquiry...' : `Submit Quote Request for ${product.title}`}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Related Services in Patna */}
      <section className="py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1346a8]">Explore Alternatives</span>
              <h2 className="text-xl sm:text-2xl font-display font-black text-slate-900 mt-1">
                Other Popular Digital Printing &amp; Signage
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs font-bold text-[#1346a8] hover:underline"
            >
              View Full Catalog (17 Products) →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fallbackRelated.map((rel) => (
              <Link
                key={rel.id}
                to={`/services/${rel.id}`}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-card transition-all flex flex-col"
              >
                <div className="relative h-44 bg-slate-100 overflow-hidden">
                  <img
                    src={rel.image}
                    alt={rel.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-white/95 text-[11px] font-bold text-[#1346a8] shadow-xs">
                    {rel.price} {rel.unit}
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#1346a8] transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {rel.description}
                    </p>
                  </div>
                  <div className="mt-3 text-xs font-bold text-[#1346a8] flex items-center gap-1">
                    <span>View Specifications</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
