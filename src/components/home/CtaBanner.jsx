import React from 'react';
import { CONTACT_INFO } from '../../data/siteData';

export default function CtaBanner() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#f0f7ff]/80 border border-blue-100 p-8 sm:p-12 lg:p-14 shadow-2xs overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Graphic: Printed Collateral Stack */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <img
                src="/assets/images/kashish-ad-complete-signage-solution-banner.png"
                alt="Kashish Ad Complete Signage & Printing Solution"
                className="max-h-48 sm:max-h-56 w-auto object-contain drop-shadow-md rounded-2xl border border-blue-200/60"
              />
            </div>

            {/* Center Content */}
            <div className="lg:col-span-5 space-y-2 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900 tracking-tight">
                Have a Printing or Branding Requirement?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Tell us what you need. Our team can help you choose the right material, size, printing method and finishing for your project.
              </p>
              <div className="font-script text-2xl sm:text-3xl text-[#1346a8] font-bold pt-1">
                Let's Create Something That Gets Noticed.
              </div>
            </div>

            {/* Right CTA Buttons */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center gap-3">
              <a
                href={CONTACT_INFO.getWhatsAppUrl('Hello Kashish Ad, I want to request a quote.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#1346a8] hover:bg-[#0f3a8e] transition-all shadow-md shadow-blue-900/20 active:scale-95"
              >
                <span>Request a Quote</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/assets/documents/Kashish-Ad-Portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Kashish-Ad-Portfolio.pdf"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-[#1346a8] bg-white border border-[#1346a8]/30 hover:bg-blue-50 transition-all shadow-xs active:scale-95"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                <span>Download Portfolio PDF</span>
              </a>

              <a
                href={CONTACT_INFO.phoneTel}
                className="flex items-center gap-2 text-sm sm:text-base font-black text-slate-900 hover:text-[#1346a8] transition-colors"
              >
                <svg className="w-4 h-4 text-[#1346a8]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.4 11.4 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.58 1 1 0 01-.25 1.02l-2.2 2.19z" />
                </svg>
                <span>{CONTACT_INFO.phoneFormatted}</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
