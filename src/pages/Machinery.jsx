import React from 'react';
import { Link } from 'react-router-dom';
import { MACHINERY } from '../data/machinery';
import SEO from '../components/SEO';
import { SITE_CONFIG } from '../data/siteData';

export default function Machinery() {
  const machineImages = {
    'hp-latex-730': '/assets/images/machinery/hp-latex-730.jpg',
    'konica-512i-flex': '/assets/images/machinery/konica-512i-flex.jpg',
    'roland-642': '/assets/images/machinery/roland-642.jpg',
    'konica-minolta-12x18': '/assets/images/machinery/konica-minolta-12x18.jpg',
    'co2-laser-machine': '/assets/images/machinery/co2-laser-machine.jfif',
    'hp-latex-570': '/assets/images/machinery/hp-latex-570.jpg',
    'roland-print-cut': '/assets/images/machinery/roland-print-cut.jpg',
    'uv-flatbed': '/assets/images/machinery/uv-flatbed.jpg',
    'uv-roll-to-roll': '/assets/images/machinery/uv-roll-to-roll.jpg',
    'cnc-router': '/assets/images/machinery/cnc-router.jpg',
    'fiber-laser': '/assets/images/machinery/fiber-laser.jpg',
    'letter-bender': '/assets/images/machinery/letter-bender.jpg',
    'vinyl-laminator': '/assets/images/machinery/vinyl-laminator.jpg',
    'digital-cloth': '/assets/images/machinery/digital-cloth.jpg'
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
        name: 'In-House Machinery',
        item: SITE_CONFIG.getProductionUrl('/machinery')
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Industrial Printing & CNC Machinery Plant in Patna"
        description="Explore Kashish Ad's in-house machinery in Patna: UV Flatbeds, Roland Eco-Solvent plotters, Fiber Laser metal cutters, and automated CNC routers at Fraser Road."
        keywords="printing machinery patna, uv flatbed printer patna, roland eco solvent bihar, laser cutting sign board patna, kashish ad plant"
        canonicalUrl="/machinery"
        structuredData={[breadcrumbSchema]}
      />
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-slate-50 border-b border-slate-200 py-16 sm:py-20">
        {/* Architectural Blueprint Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.6] bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1346a8] text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#1346a8] animate-pulse"></span>
            Advanced In-House Production Facility
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#1346a8] tracking-tight max-w-3xl mx-auto">
            Our Printing &amp; Fabrication <span className="text-[#1346a8]">Machinery</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            At Kashish Ad®, we believe true craftsmanship begins with uncompromising technology. Our production plant at Fraser Road, Patna is equipped with heavy-duty Japanese and industrial-grade machines capable of 24/7 high-volume runs.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
              ⚙️ 15+ Dedicated Industrial Machines
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
              ⏱️ 24/7 Production Capacity
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
              🎯 0.01mm Laser Precision
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
              🌿 Odorless &amp; Eco-Friendly Inks
            </span>
          </div>
        </div>
      </section>

      {/* Machinery Showcase List */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200 mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#1346a8]">Zero Outsourcing</span>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-[#1346a8] mt-1">
                Built On State-of-the-Art Hardware
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
              By owning and operating each machine directly, we guarantee unmatched color fidelity, tighter tolerances, lightning turnaround, and wholesale competitive pricing for all clients in Bihar.
            </p>
          </div>

          <div className="space-y-12">
            {MACHINERY.map((machine, index) => {
              const imageSrc = machine.image || machineImages[machine.id] || '/assets/images/kashish-ad-production-services-grid.png';
              const waMsg = encodeURIComponent(
                `Hello Kashish Ad®, I am interested in printing/fabrication using your "${machine.name}" (${machine.type}). Please provide details.`
              );

              return (
                <div
                  key={machine.id}
                  id={machine.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Media column */}
                    <div className="lg:col-span-5 relative h-72 lg:h-auto bg-slate-100 overflow-hidden">
                      <img
                        src={imageSrc}
                        alt={machine.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#1346a8] text-white shadow-md">
                        {machine.badge}
                      </span>
                      <div className="absolute bottom-4 right-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-[#1346a8] font-display font-black text-xl flex items-center justify-center shadow-md">
                        0{index + 1}
                      </div>
                    </div>

                    {/* Content column */}
                    <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                      <div>
                        <div className="inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#f0f7ff] text-[#1346a8] mb-2">
                          {machine.type}
                        </div>
                        <h3 className="text-2xl font-display font-black text-slate-900">{machine.name}</h3>
                        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">{machine.description}</p>

                        {/* Specs grid */}
                        <div className="mt-6 pt-6 border-t border-slate-100">
                          <h4 className="text-[11px] font-black uppercase tracking-widest text-[#1346a8] mb-3">
                            Technical Specifications
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {Object.entries(machine.specs).map(([specKey, specVal]) => (
                              <div key={specKey} className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <span className="block text-[11px] font-bold text-slate-500">{specKey}</span>
                                <span className="block text-xs font-semibold text-slate-800 mt-0.5">{specVal}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
                        <a
                          href={`https://wa.me/919308327111?text=${waMsg}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#1346a8] hover:bg-[#0f3a8e] shadow-sm shadow-blue-900/20 active:scale-95 transition-all"
                        >
                          <span>💬 Inquire for This Machine</span>
                        </a>
                        <Link
                          to="/services"
                          className="px-5 py-2.5 rounded-xl font-bold text-xs text-[#1346a8] bg-slate-100 hover:bg-[#f0f7ff] border border-slate-200 transition-colors"
                        >
                          Explore Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facility Standards */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="font-bold text-sm text-[#1346a8]">Color Calibration</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Every print matches your brand's Pantone and CMYK profiles accurately under D50 daylight standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-sm text-[#1346a8]">Dual Power Backup</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Equipped with dual industrial silent gensets ensuring uninterrupted 24-hour manufacturing cycles.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="text-3xl mb-3">🧼</div>
              <h3 className="font-bold text-sm text-[#1346a8]">Clean Room Zone</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                UV flatbed and vinyl lamination operate in temperature-regulated clean zones eliminating dust bubbles.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="text-3xl mb-3">🚚</div>
              <h3 className="font-bold text-sm text-[#1346a8]">Rigid Crate Packaging</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Finished 3D letters and delicate signage are protected in bubble-wrapped wooden crates for zero damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Production Video & Plant Facility */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Workshop Demonstration
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-[#1346a8]">
              Watch Our <span className="text-[#1346a8]">Fabrication in Action</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              See how our technicians operate precision cutting and printing machinery at our Fraser Road plant in Patna.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Real Video Player */}
            <div className="lg:col-span-7 bg-black rounded-2xl overflow-hidden shadow-card border-2 border-[#1346a8]/20 relative aspect-video flex items-center justify-center">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                poster="/assets/images/kashish-ad-production-services-grid.png"
              >
                <source src="/assets/videos/kashish-ad-shop-overview-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Official Plant Banner & Capabilities */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-black">
                <img
                  src="/assets/images/kashish-ad-complete-signage-solution-banner.png"
                  alt="Kashish Ad In-House Plant Machinery Banner"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2 font-bold text-[#1346a8]">
                  <span className="text-[#1346a8] text-base">★</span>
                  <span>Registered GSTIN: 10AENPH7809D1ZT</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Every order is manufactured directly on-site with certified 1.5 kW Fiber Lasers, ColorJet UV Flatbeds, and heavy CNC routers. Zero sub-contracting ensures verified quality and lowest factory rates.
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href="https://wa.me/919308327111?text=Hello%20Kashish%20Ad,%20I%20watched%20your%20workshop%20video%20and%20want%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25d366] hover:bg-[#1da851] text-white font-bold text-xs"
                  >
                    💬 WhatsApp Video Inquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Visit Banner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1346a8] text-white rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-2 max-w-xl text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-display font-black text-white">
                Experience Our Workshop in Person
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Visit Kashish Ad® at Capital Tower, Fraser Road, Patna. Inspect sample media swatches, evaluate LED brightness samples, and meet our fabrication technicians before confirming your project.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
              <a
                href="https://wa.me/919308327111?text=Hello%20Kashish%20Ad,%20I%20would%20like%20to%20schedule%20a%20visit%20to%20your%20workshop%20at%20Capital%20Tower,%20Patna."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#1346a8] hover:bg-[#0f3a8e] shadow-md text-center transition-all"
              >
                💬 Book Workshop Tour
              </a>
              <a
                href="tel:09308327111"
                className="px-6 py-3 rounded-xl font-bold text-xs text-white bg-white/10 hover:bg-white/20 border border-white/20 text-center transition-colors"
              >
                📞 Call: 09308327111
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
