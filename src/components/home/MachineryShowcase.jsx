import React from 'react';
import { Link } from 'react-router-dom';
import { MACHINERY } from '../../data/machinery';

const MACHINE_IMAGES = {
  'hp-latex-570': '/assets/images/machinery/hp-latex-570.jpg',
  'roland-print-cut': '/assets/images/machinery/roland-print-cut.jpg',
  'uv-flatbed': '/assets/images/machinery/uv-flatbed.jpg',
  'cnc-router': '/assets/images/machinery/cnc-router.jpg',
  'fiber-laser': '/assets/images/machinery/fiber-laser.jpg',
  'letter-bender': '/assets/images/machinery/letter-bender.jpg',
  'vinyl-laminator': '/assets/images/machinery/vinyl-laminator.jpg',
  'digital-cloth': '/assets/images/machinery/digital-cloth.jpg'
};

export default function MachineryShowcase() {
  return (
    <section id="home-machinery" className="py-20 sm:py-28 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#1346a8] text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#1346a8] animate-pulse"></span>
              In-House Production Plant • Zero Outsourcing
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 tracking-tight">
              Equipped With 15+ Advanced Industrial Machines
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              We don't broker your orders to third parties. Our dedicated factory at Fraser Road, Patna houses over 15 industrial-grade machines capable of 24/7 rush production with microscopic 0.01mm laser accuracy.
            </p>
          </div>

          <Link
            to="/machinery"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl font-bold text-xs text-white bg-[#1346a8] hover:bg-[#0f3a8e] shadow-sm shadow-blue-900/20 active:scale-95 transition-all shrink-0 self-start md:self-auto"
          >
            <span>Explore All 15+ Machines</span>
            <span>→</span>
          </Link>
        </div>

        {/* 4 Plant Metric Pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14 sm:mb-16">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-2xs">
            <div className="text-2xl mb-2">⚙️</div>
            <div className="font-display font-black text-xl sm:text-2xl text-[#1346a8]">15+ Units</div>
            <div className="text-xs font-bold text-slate-800 mt-1">Industrial Plant Fleet</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Japanese, German &amp; CNC</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-2xs">
            <div className="text-2xl mb-2">⏱️</div>
            <div className="font-display font-black text-xl sm:text-2xl text-[#1346a8]">24/7 Hours</div>
            <div className="text-xs font-bold text-slate-800 mt-1">Continuous Production</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Dual silent power backup</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-2xs">
            <div className="text-2xl mb-2">🎯</div>
            <div className="font-display font-black text-xl sm:text-2xl text-[#1346a8]">0.01 mm</div>
            <div className="text-xs font-bold text-slate-800 mt-1">Laser Cut Tolerance</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Burr-free architectural edges</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-2xs">
            <div className="text-2xl mb-2">🌿</div>
            <div className="font-display font-black text-xl sm:text-2xl text-[#1346a8]">3+ Years</div>
            <div className="text-xs font-bold text-slate-800 mt-1">Outdoor UV Inks</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Fade-proof &amp; odorless</div>
          </div>
        </div>

        {/* Machine Showcase Grid (Top 6 Workhorses) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {MACHINERY.slice(0, 6).map((m, idx) => {
            const imgSrc = m.image || MACHINE_IMAGES[m.id] || '/assets/images/kashish-ad-production-services-grid.png';
            return (
              <div
                key={m.id}
                className="bg-white rounded-2xl border border-slate-100 hover:border-blue-200/80 overflow-hidden shadow-2xs hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden">
                  <img
                    src={imgSrc}
                    alt={m.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-wider bg-[#1346a8] text-white shadow-sm">
                    {m.badge}
                  </span>
                  <span className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-lg bg-white/95 backdrop-blur-md text-[11px] font-mono font-black text-[#1346a8] shadow-xs">
                    #{idx + 1}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {m.type}
                    </div>
                    <h3 className="text-base sm:text-lg font-display font-black text-slate-900 mt-1.5 group-hover:text-[#1346a8] transition-colors">
                      {m.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                      {m.description}
                    </p>

                    {/* Quick Specs Snippet */}
                    <div className="mt-5 pt-3.5 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px]">
                      {Object.entries(m.specs).slice(0, 2).map(([k, v], sIdx) => (
                        <div key={sIdx} className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-100">
                          <span className="block text-[10px] font-bold text-slate-400 uppercase">{k}</span>
                          <span className="block font-semibold text-slate-800 truncate mt-0.5">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/machinery#${m.id}`}
                      className="text-xs font-bold text-[#1346a8] hover:text-[#0f3a8e]"
                    >
                      View Specs &amp; Video →
                    </Link>
                    <a
                      href={`https://wa.me/919308327111?text=${encodeURIComponent(`Hello Kashish Ad, I am inquiring about printing/cutting on your ${m.name}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-brand-whatsapp hover:bg-brand-whatsapp-hover transition-colors shadow-2xs"
                    >
                      <span>💬 Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
