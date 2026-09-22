import React from 'react';

export default function StatsBar() {
  return (
    <section className="bg-white border-y border-slate-100 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 text-center">
          
          {/* Stat 1: 4.6 Google Rating */}
          <div className="pt-4 sm:pt-0 sm:px-4">
            <div className="flex items-baseline justify-center gap-1.5">
              <span className="font-display font-black text-3xl sm:text-4xl text-[#1346a8]">4.6</span>
              <span className="text-amber-500 text-2xl font-bold">★</span>
            </div>
            <div className="text-sm font-bold text-slate-800 mt-1.5">62 Google Reviews</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">Top-Rated in Patna</div>
          </div>

          {/* Stat 2: 1,00,000+ Projects */}
          <div className="pt-4 sm:pt-0 sm:px-4">
            <div className="font-display font-black text-3xl sm:text-4xl text-[#1346a8]">1,00,000+</div>
            <div className="text-sm font-bold text-slate-800 mt-1.5">Projects Delivered</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">Retail, Corporate &amp; Gov</div>
          </div>

          {/* Stat 3: 15+ Machines */}
          <div className="pt-4 sm:pt-0 sm:px-4">
            <div className="font-display font-black text-3xl sm:text-4xl text-[#1346a8]">15+</div>
            <div className="text-sm font-bold text-slate-800 mt-1.5">Industrial Machines</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">UV, Roland &amp; Fiber Laser</div>
          </div>

          {/* Stat 4: 24 Hrs Delivery */}
          <div className="pt-4 sm:pt-0 sm:px-4">
            <div className="font-display font-black text-3xl sm:text-4xl text-[#1346a8]">24 Hrs</div>
            <div className="text-sm font-bold text-slate-800 mt-1.5">Express Delivery</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">Same-Day Rush Dispatch</div>
          </div>

        </div>
      </div>
    </section>
  );
}
