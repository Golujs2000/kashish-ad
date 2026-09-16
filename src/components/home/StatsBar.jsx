import React from 'react';

export default function StatsBar() {
  return (
    <section className="bg-white border-y border-slate-200 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 text-center">
          
          {/* Stat 1: 4.6 Google Rating */}
          <div className="pt-3 sm:pt-0">
            <div className="flex items-baseline justify-center gap-1.5">
              <span className="font-display font-black text-3xl sm:text-4xl text-[#1346a8]">4.6</span>
              <span className="text-amber-500 text-2xl font-bold">★</span>
            </div>
            <div className="text-sm font-bold text-slate-800 mt-1">61 Google Reviews</div>
            <div className="text-xs text-slate-500 font-medium">Top-Rated in Patna</div>
          </div>

          {/* Stat 2: 1,00,000+ Projects */}
          <div className="pt-3 sm:pt-0">
            <div className="font-display font-black text-3xl sm:text-4xl text-[#1346a8]">1,00,000+</div>
            <div className="text-sm font-bold text-slate-800 mt-1">Projects Delivered</div>
            <div className="text-xs text-slate-500 font-medium">Retail, Corporate &amp; Gov</div>
          </div>

          {/* Stat 3: 15+ Machines */}
          <div className="pt-3 sm:pt-0">
            <div className="font-display font-black text-3xl sm:text-4xl text-[#1346a8]">15+</div>
            <div className="text-sm font-bold text-slate-800 mt-1">Industrial Machines</div>
            <div className="text-xs text-slate-500 font-medium">UV, Roland &amp; Fiber Laser</div>
          </div>

          {/* Stat 4: 24 Hrs Delivery */}
          <div className="pt-3 sm:pt-0">
            <div className="font-display font-black text-3xl sm:text-4xl text-[#1346a8]">24 Hrs</div>
            <div className="text-sm font-bold text-slate-800 mt-1">Express Delivery</div>
            <div className="text-xs text-slate-500 font-medium">Same-Day Rush Dispatch</div>
          </div>

        </div>
      </div>
    </section>
  );
}
