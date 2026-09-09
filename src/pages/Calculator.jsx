import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const SERVICES_RATES = [
  {
    id: 'solvent-vinyl',
    name: 'Solvent Vinyl Printing',
    unitType: 'area', // sq.ft
    rateMin: 40,
    rateMax: 50,
    unitLabel: 'sq.ft',
    defaultW: 8,
    defaultH: 4,
    finishes: [
      { name: 'Standard Gloss Finish', extra: 0 },
      { name: 'Matte Anti-Glare Lamination', extra: 10 },
      { name: 'Heavy Protective Lamination (Outdoor)', extra: 15 }
    ]
  },
  {
    id: 'uv-digital',
    name: 'UV Digital Printing (Flatbed / Rigid)',
    unitType: 'area',
    rateMin: 65,
    rateMax: 85,
    unitLabel: 'sq.ft',
    defaultW: 4,
    defaultH: 2,
    finishes: [
      { name: 'Direct CMYK on Acrylic/Foam', extra: 0 },
      { name: 'CMYK + White Undercoat (Clear Glass)', extra: 20 },
      { name: 'CMYK + Embossed 3D Gloss Varnish', extra: 35 }
    ]
  },
  {
    id: 'flex-banner',
    name: 'Frontlit Flex Banner',
    unitType: 'area',
    rateMin: 10,
    rateMax: 15,
    unitLabel: 'sq.ft',
    defaultW: 10,
    defaultH: 5,
    finishes: [
      { name: 'Normal Standard Flex (240 GSM)', extra: 0 },
      { name: 'Star Heavy Flex (340 GSM)', extra: 5 },
      { name: 'Blackout Flex (Zero Show-through)', extra: 10 }
    ]
  },
  {
    id: 'glow-sign-board',
    name: 'Backlit LED Glow Sign Board',
    unitType: 'area',
    rateMin: 120,
    rateMax: 160,
    unitLabel: 'sq.ft',
    defaultW: 8,
    defaultH: 3,
    finishes: [
      { name: 'Heavy MS Frame + Tube/LED', extra: 0 },
      { name: 'Powder-Coated Frame + High-Lumen Waterproof LEDs', extra: 30 },
      { name: 'Double-Sided Projecting Glow Sign', extra: 50 }
    ]
  },
  {
    id: 'led-acrylic-letters',
    name: 'LED 3D Acrylic Letters (Channel)',
    unitType: 'letter', // letter height in inches
    rateMin: 85,
    rateMax: 120,
    unitLabel: 'inch height per letter',
    defaultW: 12, // average letter height in inches
    defaultH: 10, // number of letters
    finishes: [
      { name: 'Standard Front-Lit LED (Warm/Cool)', extra: 0 },
      { name: 'Dual Lit (Front + Back Halo Glow)', extra: 35 },
      { name: 'Mirror Titanium Gold SS Returns', extra: 50 }
    ]
  },
  {
    id: 'ss-sign-board',
    name: 'SS 304 Stainless Steel Letters',
    unitType: 'letter',
    rateMin: 110,
    rateMax: 150,
    unitLabel: 'inch height per letter',
    defaultW: 12,
    defaultH: 8,
    finishes: [
      { name: 'Brushed Hairline Finish SS 304', extra: 0 },
      { name: 'Mirror Polish SS 304 Finish', extra: 15 },
      { name: 'Titanium Gold / Rose Gold Vacuum Plated', extra: 40 }
    ]
  },
  {
    id: 'rollup-standee',
    name: 'Rollup Banner Standee (6 × 3 ft)',
    unitType: 'piece',
    rateMin: 1100,
    rateMax: 1400,
    unitLabel: 'piece',
    defaultW: 6,
    defaultH: 3,
    finishes: [
      { name: 'Aluminum Economy Stand + Star Flex', extra: 0 },
      { name: 'Heavy Base Stand + Non-Tearable Pet Film', extra: 350 },
      { name: 'Luxury Broad Base Standee', extra: 600 }
    ]
  },
  {
    id: 'one-way-vision',
    name: 'One-Way Vision Glass Film',
    unitType: 'area',
    rateMin: 50,
    rateMax: 65,
    unitLabel: 'sq.ft',
    defaultW: 6,
    defaultH: 4,
    finishes: [
      { name: 'Standard Perforated Vinyl', extra: 0 },
      { name: 'UV Resistant Exterior Lamination', extra: 15 }
    ]
  },
  {
    id: 'cnc-router-jali',
    name: 'CNC Cut MDF / WPC Architectural Jali',
    unitType: 'area',
    rateMin: 75,
    rateMax: 110,
    unitLabel: 'sq.ft',
    defaultW: 8,
    defaultH: 4,
    finishes: [
      { name: 'Raw Precision CNC Routed', extra: 0 },
      { name: 'Primed & PU Painted Finish', extra: 45 }
    ]
  },
  {
    id: 'tshirt-printing',
    name: 'Custom T-Shirt & Corporate Apparel Printing',
    unitType: 'piece',
    rateMin: 140,
    rateMax: 220,
    unitLabel: 'piece',
    defaultW: 1,
    defaultH: 1,
    finishes: [
      { name: 'Standard Cotton Round Neck (Screen/DTG)', extra: 0 },
      { name: 'Dri-FIT Sports Collar Polo', extra: 60 },
      { name: 'Heavy 220 GSM Bio-Washed Cotton Polo', extra: 90 }
    ]
  },
  {
    id: 'promotional-canopy',
    name: 'Promotional Canopy Tent & Gazebo (6×6 & 4×4 ft)',
    unitType: 'piece',
    rateMin: 2400,
    rateMax: 3200,
    unitLabel: 'complete tent set',
    defaultW: 6,
    defaultH: 6,
    finishes: [
      { name: '6x6 ft MS Iron Frame + Star Flex Roof', extra: 0 },
      { name: '6x6 ft Aluminum Frame + 600D Oxford Fabric', extra: 800 },
      { name: 'Full 3-Side Printed Wall Enclosure', extra: 650 }
    ]
  },
  {
    id: 'cup-mug-printing',
    name: 'Custom Ceramic Coffee Mugs & Cup Printing',
    unitType: 'piece',
    rateMin: 90,
    rateMax: 140,
    unitLabel: 'piece',
    defaultW: 1,
    defaultH: 1,
    finishes: [
      { name: 'Standard 11oz White Ceramic Mug', extra: 0 },
      { name: 'Dual-Tone Color Inside Mug', extra: 25 },
      { name: 'Magic Thermosensitive Heat-Reveal Mug', extra: 65 }
    ]
  },
  {
    id: 'trophy-memento-awards',
    name: 'Custom Trophies, Mementos & Awards',
    unitType: 'piece',
    rateMin: 350,
    rateMax: 850,
    unitLabel: 'piece',
    defaultW: 1,
    defaultH: 1,
    finishes: [
      { name: 'Custom Laser-Cut Acrylic + Direct UV Print', extra: 0 },
      { name: 'Teak Wooden Base + Brass Golden Plaque', extra: 150 },
      { name: 'Heavy Optical K9 Crystal Award with Velvet Box', extra: 450 }
    ]
  }
];

export default function Calculator() {
  const [searchParams] = useSearchParams();
  const initialProductId = searchParams.get('product') || 'solvent-vinyl';

  const [selectedServiceId, setSelectedServiceId] = useState(initialProductId);
  const [width, setWidth] = useState(8);
  const [height, setHeight] = useState(4);
  const [quantity, setQuantity] = useState(1);
  const [selectedFinishIdx, setSelectedFinishIdx] = useState(0);
  const [customerCity, setCustomerCity] = useState('Patna');
  const [customerNotes, setCustomerNotes] = useState('');

  // Sync service if URL param updates
  useEffect(() => {
    const p = searchParams.get('product');
    if (p && SERVICES_RATES.some((s) => s.id === p)) {
      setSelectedServiceId(p);
    }
  }, [searchParams]);

  const activeService = useMemo(() => {
    return SERVICES_RATES.find((s) => s.id === selectedServiceId) || SERVICES_RATES[0];
  }, [selectedServiceId]);

  // Set default dimensions when switching service
  useEffect(() => {
    setWidth(activeService.defaultW);
    setHeight(activeService.defaultH);
    setSelectedFinishIdx(0);
  }, [selectedServiceId, activeService]);

  // Compute calculations
  const calculation = useMemo(() => {
    const selectedFinish = activeService.finishes[selectedFinishIdx] || activeService.finishes[0];
    const extraRate = selectedFinish.extra;

    let computedUnits = 0;
    let unitDesc = '';

    if (activeService.unitType === 'area') {
      computedUnits = Number(width || 0) * Number(height || 0);
      unitDesc = `${computedUnits.toFixed(1)} Sq.ft`;
    } else if (activeService.unitType === 'letter') {
      computedUnits = Number(width || 0) * Number(height || 0);
      unitDesc = `${height} letters @ ${width}" height (${computedUnits} total inches)`;
    } else if (activeService.unitType === 'piece') {
      computedUnits = 1;
      unitDesc = `Standard 6x3 ft Standee`;
    }

    const qty = Number(quantity || 1);
    const minUnitCost = (activeService.rateMin + extraRate);
    const maxUnitCost = (activeService.rateMax + extraRate);

    const totalMin = Math.round(computedUnits * minUnitCost * qty);
    const totalMax = Math.round(computedUnits * maxUnitCost * qty);

    return {
      computedUnits,
      unitDesc,
      selectedFinish,
      totalMin,
      totalMax,
      qty
    };
  }, [activeService, width, height, quantity, selectedFinishIdx]);

  // Pre-filled WhatsApp message
  const whatsappUrl = useMemo(() => {
    const msg = 
`Hello Kashish Ad®, I calculated an estimated quote on your website:
------------------------------------------
📦 Service: ${activeService.name}
📏 Size/Units: ${calculation.unitDesc}
✨ Finish: ${calculation.selectedFinish.name}
🔢 Quantity: ${calculation.qty}
💰 Estimated Total: ₹${calculation.totalMin.toLocaleString()} – ₹${calculation.totalMax.toLocaleString()}
📍 Delivery/Site City: ${customerCity}
${customerNotes ? `📝 Note: ${customerNotes}\n` : ''}------------------------------------------
Please confirm availability and the earliest fabrication/dispatch date.`;

    return `https://wa.me/919308327111?text=${encodeURIComponent(msg)}`;
  }, [activeService, calculation, customerCity, customerNotes]);

  return (
    <div className="bg-white min-h-screen">
      {/* Page Hero */}
      <section className="bg-slate-50 border-b border-slate-200 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#e85c1a] text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#e85c1a] animate-pulse"></span>
            Transparent Factory Direct Pricing
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#1a3a6b] tracking-tight max-w-3xl mx-auto">
            Digital Printing &amp; Signage <span className="text-[#e85c1a]">Rate Calculator</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Configure your exact dimensions, select premium finishes, and calculate an instant factory-direct estimated quote. Send it directly to our Fraser Road workshop on WhatsApp with one click!
          </p>
        </div>
      </section>

      {/* Main Calculator Body */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls Form Card */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-card space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-display font-black text-[#1a3a6b]">
                  1. Select Service &amp; Dimensions
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">Customize your project specs below to see live pricing.</p>
              </div>

              {/* Service Picker */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2" htmlFor="calc-service">
                  Product / Service
                </label>
                <select
                  id="calc-service"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#e85c1a]"
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                >
                  {SERVICES_RATES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} (from ₹{s.rateMin} / {s.unitLabel})
                    </option>
                  ))}
                </select>
              </div>

              {/* Dynamic Dimension Inputs */}
              {activeService.unitType === 'area' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2" htmlFor="calc-width">
                      Width (Feet)
                    </label>
                    <input
                      id="calc-width"
                      type="number"
                      min="1"
                      step="0.5"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#e85c1a]"
                      value={width}
                      onChange={(e) => setWidth(Math.max(0.1, parseFloat(e.target.value) || 0))}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2" htmlFor="calc-height">
                      Height (Feet)
                    </label>
                    <input
                      id="calc-height"
                      type="number"
                      min="1"
                      step="0.5"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#e85c1a]"
                      value={height}
                      onChange={(e) => setHeight(Math.max(0.1, parseFloat(e.target.value) || 0))}
                    />
                  </div>
                </div>
              )}

              {activeService.unitType === 'letter' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2" htmlFor="calc-letter-height">
                      Letter Height (Inches)
                    </label>
                    <input
                      id="calc-letter-height"
                      type="number"
                      min="4"
                      max="72"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#e85c1a]"
                      value={width}
                      onChange={(e) => setWidth(Math.max(1, parseInt(e.target.value) || 0))}
                    />
                    <span className="text-[11px] text-slate-400 mt-1 block">e.g. 10", 12", 18" standard</span>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2" htmlFor="calc-letter-count">
                      Total Letter Count
                    </label>
                    <input
                      id="calc-letter-count"
                      type="number"
                      min="1"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#e85c1a]"
                      value={height}
                      onChange={(e) => setHeight(Math.max(1, parseInt(e.target.value) || 0))}
                    />
                    <span className="text-[11px] text-slate-400 mt-1 block">Characters in board name</span>
                  </div>
                </div>
              )}

              {activeService.unitType === 'piece' && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700">
                  Standard Rollup Display: <strong>6 ft (H) × 3 ft (W)</strong> anodized aluminum stand with padded carrying bag.
                </div>
              )}

              {/* Finish Options */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Select Media Finish &amp; Quality
                </label>
                <div className="space-y-2">
                  {activeService.finishes.map((f, idx) => (
                    <label
                      key={idx}
                      className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                        selectedFinishIdx === idx
                          ? 'border-[#e85c1a] bg-orange-50/50 shadow-2xs'
                          : 'border-slate-200 bg-white hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="finish"
                          className="w-4 h-4 text-[#e85c1a] focus:ring-[#e85c1a]"
                          checked={selectedFinishIdx === idx}
                          onChange={() => setSelectedFinishIdx(idx)}
                        />
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">{f.name}</span>
                      </div>
                      <span className="text-xs font-bold text-[#e85c1a] font-mono">
                        {f.extra > 0 ? `+₹${f.extra} / ${activeService.unitLabel}` : 'Included'}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Quantity & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2" htmlFor="calc-quantity">
                    Quantity / Sets
                  </label>
                  <input
                    id="calc-quantity"
                    type="number"
                    min="1"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#e85c1a]"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2" htmlFor="calc-city">
                    Installation / Delivery City
                  </label>
                  <select
                    id="calc-city"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#e85c1a]"
                    value={customerCity}
                    onChange={(e) => setCustomerCity(e.target.value)}
                  >
                    <option value="Patna">Patna (Local Pickup / Delivery)</option>
                    <option value="Muzaffarpur">Muzaffarpur</option>
                    <option value="Gaya">Gaya</option>
                    <option value="Bhagalpur">Bhagalpur</option>
                    <option value="Darbhanga">Darbhanga</option>
                    <option value="Begusarai">Begusarai</option>
                    <option value="Other Bihar District">Other Bihar District</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2" htmlFor="calc-notes">
                  Project Notes / Specifications (Optional)
                </label>
                <textarea
                  id="calc-notes"
                  rows="2"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#e85c1a]"
                  placeholder="e.g. Need by Thursday evening, or vector CDR / AI file ready..."
                  value={customerNotes}
                  onChange={(e) => setCustomerNotes(e.target.value)}
                ></textarea>
              </div>
            </div>

            {/* Summary Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-card">
                <span className="text-[11px] font-black uppercase tracking-widest text-[#e85c1a]">
                  Estimated Factory Quote
                </span>
                <h3 className="text-xl font-display font-black text-[#1a3a6b] mt-1">
                  {activeService.name}
                </h3>

                <div className="mt-6 space-y-3 text-xs sm:text-sm border-t border-slate-200 pt-4">
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Configured Metric:</span>
                    <strong className="text-slate-900">{calculation.unitDesc}</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Finish / Grade:</span>
                    <strong className="text-slate-900">{calculation.selectedFinish.name}</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Order Quantity:</span>
                    <strong className="text-slate-900">{calculation.qty} Unit(s)</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Delivery Location:</span>
                    <strong className="text-slate-900">{customerCity}</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Workshop Origin:</span>
                    <strong className="text-slate-900">Fraser Road, Patna</strong>
                  </div>
                </div>

                {/* Price Output Box */}
                <div className="mt-6 bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-2xs">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Estimated Total Price:
                  </span>
                  <div className="text-3xl font-display font-black text-[#e85c1a]">
                    ₹{calculation.totalMin.toLocaleString()} – ₹{calculation.totalMax.toLocaleString()}*
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    *Excludes 18% GST and installation scaffolding if required.
                  </span>
                </div>

                {/* Actions */}
                <div className="mt-6 space-y-2.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider text-white bg-[#e85c1a] hover:bg-[#cf4e12] shadow-md shadow-orange-500/20 active:scale-95 transition-all text-center"
                  >
                    <span>💬 Send Quote to WhatsApp</span>
                  </a>
                  <a
                    href="tel:09308327111"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs text-[#1a3a6b] bg-white hover:bg-slate-100 border border-slate-200 transition-colors text-center"
                  >
                    <span>📞 Confirm Immediately: 09308327111</span>
                  </a>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <span>⚡</span> <span><strong>Speed:</strong> Same day or 24-hr turnaround</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>🎨</span> <span><strong>Files:</strong> CDR, AI, PDF, PSD, TIFF supported</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>🛡️</span> <span><strong>Quality:</strong> Fade-proof outdoor pigments</span>
                  </div>
                </div>
              </div>

              {/* Helpful Tip */}
              <div className="bg-orange-50/50 border border-orange-200/60 rounded-2xl p-5 text-xs text-slate-700 leading-relaxed">
                <strong className="text-[#e85c1a] block mb-1">💡 Tip for Complex Facades</strong>
                Prices for multi-story building elevations, ACP sheet cladding structures, and titanium 3D architectural gates depend on structural scaffolding. WhatsApp us your facade photo for a turnkey quote with installation.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
