import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { COMPANY_INFO, CONTACT_INFO, LOCATION_INFO, WORKING_HOURS, TRUST_METRICS, SOCIAL_LINKS, SITE_CONFIG } from '../data/siteData';

export default function NfcVisitingCard() {
  const [copiedToast, setCopiedToast] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const [showUpiModal, setShowUpiModal] = useState(false);
  const [cardSide, setCardSide] = useState('front'); // 'front' | 'back'

  const cardLiveUrl = 'https://kashishad.in/card';
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=8&data=${encodeURIComponent(cardLiveUrl)}`;

  // Download native vCard (.vcf) for 1-tap phonebook saving
  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:Ad;Kashish;;;®
FN:Kashish Ad®
ORG:Kashish Ad (Signage & Industrial Printing Plant)
TITLE:CEO & Founder - S Haidar
TEL;TYPE=WORK,VOICE:+917488984637
TEL;TYPE=CELL,VOICE:+919308327111
EMAIL;TYPE=PREF,INTERNET:kashishadpatna@gmail.com
URL:https://kashishad.in
ADR;TYPE=WORK:;;Capital Tower, A-6 & B-16, Fraser Rd, Old Jakkanpur, Lodipur;Patna;Bihar;800001;India
NOTE:Estd 1985 (41+ Years). Bihar's premier manufacturing center for 3D LED Acrylic Letters, Signage Boards, UV Flatbed Printing & CNC Cutting at Fraser Road, Patna. GSTIN: 10AENPH7809D1ZT.
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Kashish_Ad_Patna.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setCopiedToast('Contact file (.vcf) downloaded! Open it to save to phonebook.');
    setTimeout(() => setCopiedToast(false), 4000);
  };

  // Share card via Web Share API or Clipboard
  const handleShare = async () => {
    const shareData = {
      title: 'Kashish Ad® | Official Digital Business Card',
      text: 'Connect with Kashish Ad® - Patna Signage, 3D LED Letters & Commercial Digital Printing Leader.',
      url: cardLiveUrl
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User dismissed share dialog
      }
    } else {
      navigator.clipboard.writeText(cardLiveUrl);
      setCopiedToast('Digital Card link copied: https://kashishad.in/card');
      setTimeout(() => setCopiedToast(false), 3000);
    }
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedToast(`${label} copied to clipboard!`);
    setTimeout(() => setCopiedToast(false), 3000);
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
        name: 'Kashish Ad Digital Business Card',
        item: SITE_CONFIG.getProductionUrl('/card')
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-6 sm:py-12 px-3 sm:px-6 relative overflow-hidden flex flex-col items-center justify-start">
      <SEO
        title="Kashish Ad® | Official Digital Business Card (NFC Tap)"
        description="Official Contactless Smart Business Card of Kashish Ad®. Tap or scan to save S Haidar and Kashish Ad's contact details, call directly, chat on WhatsApp, get Google Maps directions to Fraser Road, and explore 38+ signage services."
        keywords="kashish ad digital business card, kashish ad nfc card, s haidar contact patna, kashish ad fraser road patna phone, save contact kashish ad, kashishad.in"
        canonicalUrl="/card"
        structuredData={[breadcrumbSchema]}
      />

      {/* Toast Notification */}
      {copiedToast && (
        <div className="fixed top-5 z-50 max-w-sm mx-auto px-4 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <span className="text-base">✓</span>
          <span>{copiedToast}</span>
        </div>
      )}

      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#1346a8]/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-emerald-600/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Smartphone-Proportioned Executive Card Container */}
      <div className="w-full max-w-[480px] bg-slate-950/90 backdrop-blur-2xl rounded-[32px] sm:rounded-[36px] border border-slate-800 shadow-2xl overflow-hidden relative z-10">
        
        {/* 1. Header Banner & Branding Cover */}
        <div className="relative h-44 sm:h-48 bg-gradient-to-br from-[#071739] via-[#0d2c6c] to-[#1346a8] p-4 flex flex-col justify-between overflow-hidden">
          {/* Decorative Blueprint Lines */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          {/* Top Status & Share Row */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-400/40 text-emerald-300 text-[11px] font-bold backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open Now • 9 AM – 9 PM
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setShowQrModal(true)}
                className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                title="View Scannable QR Code"
                aria-label="QR Code"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </button>

              <button
                onClick={handleShare}
                className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Share Digital Card"
                aria-label="Share Card"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Official Domain Watermark */}
          <div className="relative z-10 text-right opacity-60">
            <span className="text-[11px] font-mono tracking-wider text-amber-200 font-bold">
              kashishad.in
            </span>
          </div>
        </div>

        {/* 2. Profile Avatar & Identity */}
        <div className="px-6 pb-6 pt-0 relative">
          
          {/* Overlapping Avatar Logo */}
          <div className="-mt-14 mb-4 flex items-end justify-between">
            <div className="relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white p-2.5 shadow-2xl border-4 border-slate-950 flex items-center justify-center">
                <img
                  src={COMPANY_INFO.logoIcon}
                  alt="Kashish Ad Monogram Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center text-white text-[11px] font-bold" title="Verified Business">
                ✓
              </span>
            </div>

            <div className="text-right space-y-1">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-amber-950/70 border border-amber-500/30 px-2.5 py-1 rounded-full">
                ★ 4.6 (62 Reviews)
              </span>
              <span className="block text-[10px] text-slate-400 font-mono">
                GST: {COMPANY_INFO.gstin}
              </span>
            </div>
          </div>

          {/* Business Titles with Official Raphtalia Brand Font */}
          <div className="text-left space-y-1">
            <div className="inline-flex items-start">
              <span className="font-raphtalia text-3xl sm:text-[2.65rem] font-semibold tracking-[0] text-[#dc2626] leading-none">
                Kashish Ad
              </span>
              <span className="font-sans text-xs sm:text-sm font-black text-[#dc2626] ml-1 leading-none">
                ®
              </span>
            </div>

            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#94a3b8] uppercase leading-tight block">
              — {COMPANY_INFO.tagline} —
            </span>

            <p className="text-xs sm:text-[13px] font-semibold text-sky-400 leading-snug pt-1">
              Signage, 3D LED Letters &amp; Commercial Digital Printing Plant
            </p>

            <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400 pt-1">
              <span className="font-bold text-slate-200">
                {COMPANY_INFO.founder} ({COMPANY_INFO.role})
              </span>
              <span>•</span>
              <span>Estd. 1985 (41+ Yrs)</span>
              <span>•</span>
              <span className="text-slate-300 font-medium">A-6 &amp; B-16, Capital Tower, Fraser Rd</span>
            </div>
          </div>

          {/* 3. PRIMARY ACTION: 1-TAP SAVE CONTACT BUTTON */}
          <div className="mt-5 space-y-2">
            <button
              onClick={handleSaveContact}
              className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2.5 transition-transform active:scale-98 cursor-pointer"
            >
              <svg className="w-5 h-5 text-slate-950" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-5H8l4-4 4 4h-3v5h-2z" />
              </svg>
              <span>Save Contact to Phone (.vcf)</span>
            </button>
            <p className="text-[10px] text-center text-slate-400">
              One tap adds phone numbers, WhatsApp, email, website &amp; Fraser Road factory location directly to your phonebook.
            </p>
          </div>

          {/* 4. Quick Communication Buttons Grid */}
          <div className="mt-5 grid grid-cols-4 gap-2.5 text-center">
            
            {/* Call Primary */}
            <a
              href={CONTACT_INFO.phoneTel}
              className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800/80 flex flex-col items-center justify-center gap-1.5 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                📞
              </div>
              <span className="text-[11px] font-bold text-slate-200">Call Us</span>
            </a>

            {/* WhatsApp Chat */}
            <a
              href={CONTACT_INFO.getWhatsAppUrl('Hello Kashish Ad team, I connected via your NFC Smart Visiting Card and want to inquire about printing / signage.')}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800/80 flex flex-col items-center justify-center gap-1.5 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                💬
              </div>
              <span className="text-[11px] font-bold text-emerald-300">WhatsApp</span>
            </a>

            {/* Google Maps Location */}
            <a
              href={LOCATION_INFO.googleMapsCidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800/80 flex flex-col items-center justify-center gap-1.5 transition-colors group"
              title="Navigate to Capital Tower, Fraser Road on Google Maps"
            >
              <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                📍
              </div>
              <span className="text-[11px] font-bold text-slate-200">Directions</span>
            </a>

            {/* Pay UPI */}
            <button
              onClick={() => setShowUpiModal(true)}
              className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800/80 flex flex-col items-center justify-center gap-1.5 transition-colors group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                💳
              </div>
              <span className="text-[11px] font-bold text-amber-300">Pay UPI</span>
            </button>
          </div>

          {/* 5. Interactive 3D Card Graphic (Front & Back) with Real Scannable QR */}
          <div className="mt-6 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
            <div className="flex items-center justify-between mb-3 text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Official Physical NFC Card
              </span>
              <button
                onClick={() => setCardSide(cardSide === 'front' ? 'back' : 'front')}
                className="text-[10px] font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer"
              >
                <span>Tap to Flip</span>
                <span>↻</span>
              </button>
            </div>

            {/* Card Graphic */}
            <div
              onClick={() => setCardSide(cardSide === 'front' ? 'back' : 'front')}
              className="w-full aspect-[1.586/1] rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-zinc-900 via-neutral-900 to-black border border-amber-500/40 shadow-2xl flex flex-col justify-between text-left cursor-pointer transition-all duration-300 hover:scale-[1.01]"
            >
              {cardSide === 'front' ? (
                <>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      {/* EMV Gold Chip */}
                      <div className="w-9 h-7 rounded bg-amber-400/90 border border-amber-300 flex items-center justify-center p-0.5">
                        <div className="w-full h-full border border-amber-800/40 grid grid-cols-2">
                          <span className="border-r border-amber-800/40"></span>
                          <span></span>
                        </div>
                      </div>
                      {/* Contactless waves */}
                      <svg className="w-5 h-5 text-amber-300 rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M8.5 16.5a5 5 0 010-7" strokeLinecap="round" />
                        <path d="M12 19a8.5 8.5 0 000-14" strokeLinecap="round" />
                      </svg>
                    </div>

                    <div className="text-right">
                      <div className="inline-flex items-start">
                        <span className="font-raphtalia text-2xl sm:text-3xl font-bold tracking-tight text-amber-300 leading-none">
                          Kashish Ad
                        </span>
                        <span className="font-sans text-xs font-black text-amber-300 ml-0.5 leading-none">
                          ®
                        </span>
                      </div>
                      <span className="block text-[8px] font-mono tracking-widest text-amber-400/80 mt-0.5">
                        NFC BUSINESS PASS
                      </span>
                    </div>
                  </div>

                  <div className="my-auto py-1">
                    <span className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded bg-black/40 border border-amber-400/30 text-amber-300">
                      ESTD 1985 • 41+ YRS
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-black font-display text-white tracking-tight">
                      S Haidar
                    </h3>
                    <p className="text-[11px] font-semibold text-amber-400">
                      Founder &amp; CEO
                    </p>
                    <p className="text-[10px] text-slate-300">
                      Capital Tower, A-6 &amp; B-16, Fraser Rd, Patna
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span>SCAN OR TAP</span>
                    <div className="inline-flex items-start">
                      <span className="font-raphtalia text-base sm:text-lg font-bold tracking-tight text-amber-300 leading-none">
                        Kashish Ad
                      </span>
                      <span className="font-sans text-[10px] font-black text-amber-300 ml-0.5 leading-none">
                        ®
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 my-auto">
                    <div className="text-left text-xs space-y-1">
                      <p className="font-bold text-white tracking-wide">07488984637</p>
                      <p className="font-bold text-emerald-400 tracking-wide">09308327111</p>
                      <p className="text-[10px] text-slate-300">kashishadpatna@gmail.com</p>
                      <p className="text-[10px] font-mono text-amber-300 font-bold">kashishad.in</p>
                    </div>

                    {/* REAL HIGH-PRECISION SCANNABLE QR CODE */}
                    <div className="w-18 h-18 sm:w-20 sm:h-20 p-1 bg-white rounded-xl shadow-lg flex items-center justify-center shrink-0">
                      <img
                        src={qrCodeUrl}
                        alt="Scan to open Kashish Ad Digital Card (https://kashishad.in/card)"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="text-[9px] text-slate-400 border-t border-slate-800 pt-1.5 flex justify-between">
                    <span>Direct Manufacturing Plant</span>
                    <span>Fraser Rd, Patna</span>
                  </div>
                </>
              )}
            </div>
            <p className="text-[10px] text-slate-500 mt-2">
              Flip to see real scannable QR code &amp; direct calling numbers
            </p>
          </div>

          {/* 6. Quick Direct Links & Services List */}
          <div className="mt-6 space-y-2.5 text-left">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block px-1">
              Explore Kashish Ad® Services
            </span>

            {/* Official Website */}
            <Link
              to="/"
              className="p-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 flex items-center justify-between transition-colors group"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">🌐</span>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                    Official Website (kashishad.in)
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Explore all products, company profile &amp; machinery
                  </div>
                </div>
              </div>
              <span className="text-slate-500 group-hover:text-white transition-colors">→</span>
            </Link>

            {/* 38+ Services Catalog */}
            <Link
              to="/services"
              className="p-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 flex items-center justify-between transition-colors group"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">📦</span>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                    38+ In-House Signage &amp; Print Services
                  </div>
                  <div className="text-[11px] text-slate-400">
                    3D LED letters, UV flatbed, ACP cladding, glow signs
                  </div>
                </div>
              </div>
              <span className="text-slate-500 group-hover:text-white transition-colors">→</span>
            </Link>

            {/* Industrial Machinery Tour */}
            <Link
              to="/machinery"
              className="p-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 flex items-center justify-between transition-colors group"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">🏭</span>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                    Industrial Machinery Plant (16+ Machines)
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Direct production at Fraser Road, Patna
                  </div>
                </div>
              </div>
              <span className="text-slate-500 group-hover:text-white transition-colors">→</span>
            </Link>

            {/* Completed Projects Gallery */}
            <Link
              to="/gallery"
              className="p-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 flex items-center justify-between transition-colors group"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">🖼️</span>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                    Client Works &amp; Portfolio Gallery
                  </div>
                  <div className="text-[11px] text-slate-400">
                    1,00,000+ completed commercial branding projects
                  </div>
                </div>
              </div>
              <span className="text-slate-500 group-hover:text-white transition-colors">→</span>
            </Link>

            {/* Corporate Portfolio PDF */}
            <Link
              to="/portfolio"
              className="p-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 flex items-center justify-between transition-colors group"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">📄</span>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                    Download Corporate Portfolio PDF
                  </div>
                  <div className="text-[11px] text-slate-400">
                    High-res credentials &amp; institutional client list
                  </div>
                </div>
              </div>
              <span className="text-slate-500 group-hover:text-white transition-colors">→</span>
            </Link>
          </div>

          {/* 7. Direct Contact Numbers & Verified Address */}
          <div className="mt-6 p-4 rounded-2xl bg-slate-900 border border-slate-800 text-left space-y-3">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Direct Contact &amp; Location
            </span>

            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Primary Calling:</span>
              <a href="tel:07488984637" className="font-bold text-sky-400 hover:underline">
                07488984637
              </a>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">WhatsApp / Alternate:</span>
              <a href="tel:09308327111" className="font-bold text-emerald-400 hover:underline">
                09308327111
              </a>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Email Address:</span>
              <a href="mailto:kashishadpatna@gmail.com" className="font-bold text-slate-200 hover:underline truncate max-w-[200px]">
                kashishadpatna@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Official Website:</span>
              <a href="https://kashishad.in" target="_blank" rel="noopener noreferrer" className="font-mono font-bold text-amber-300 hover:underline">
                https://kashishad.in
              </a>
            </div>

            <div className="pt-2.5 border-t border-slate-800">
              <span className="text-[10px] text-slate-400 block font-medium">
                Verified Factory &amp; Office Address:
              </span>
              <p className="text-xs text-slate-200 font-bold mt-1 leading-snug">
                Capital Tower, A-6 &amp; B-16, Fraser Rd, Old Jakkanpur, Lodipur, Patna, Bihar 800001
              </p>
              <p className="text-[11px] text-amber-300 font-medium mt-1">
                Landmark: Near Canara Bank / Chhabra Sports (Opposite Patna Junction Corridor)
              </p>

              <div className="mt-3 flex gap-2">
                <a
                  href={LOCATION_INFO.googleMapsCidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-xl bg-[#1346a8] hover:bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Open on Google Maps</span>
                  <span>📍</span>
                </a>
              </div>
            </div>
          </div>

          {/* 8. Google 5-Star Review Banner */}
          <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-blue-950/80 to-slate-900 border border-blue-800/40 text-left flex items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-1 text-amber-400 text-xs">
                ★★★★★
              </div>
              <p className="text-xs font-bold text-white mt-0.5">
                Loved our printing &amp; service?
              </p>
              <p className="text-[10px] text-slate-400">
                Leave a quick 5-star review on Google Maps
              </p>
            </div>
            <a
              href={LOCATION_INFO.googleMapsCidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shrink-0 transition-colors"
            >
              Write Review
            </a>
          </div>

          {/* 9. Social Links & Footer */}
          <div className="mt-6 pt-4 border-t border-slate-800/80 text-center space-y-3">
            <div className="flex items-center justify-center gap-4">
              <a
                href={SOCIAL_LINKS.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center text-sm transition-colors"
                title="Instagram"
              >
                📸
              </a>
              <a
                href={SOCIAL_LINKS.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center text-sm transition-colors"
                title="Facebook"
              >
                📘
              </a>
              <a
                href={CONTACT_INFO.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-emerald-600 text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center text-sm transition-colors"
                title="WhatsApp"
              >
                💬
              </a>
            </div>

            <p className="text-[10px] text-slate-500 font-mono">
              © {new Date().getFullYear()} Kashish Ad® • Fraser Road, Patna, Bihar. All Rights Reserved.
            </p>
          </div>

        </div>
      </div>

      {/* QR Code Modal for In-Person Camera Scanning */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-xs w-full text-center space-y-4 shadow-2xl">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold text-white">Scan with Camera</h3>
              <button
                onClick={() => setShowQrModal(false)}
                className="text-slate-400 hover:text-white text-base cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-3 bg-white rounded-2xl inline-block shadow-xl">
              <img
                src={qrCodeUrl}
                alt="Kashish Ad Digital Business Card QR"
                className="w-52 h-52 mx-auto object-contain"
              />
            </div>

            <p className="text-xs font-mono text-amber-300 font-bold">
              kashishad.in/card
            </p>

            <p className="text-[11px] text-slate-300 leading-snug">
              Point any smartphone camera to instantly open Kashish Ad®'s digital business card.
            </p>

            <div className="flex gap-2">
              <a
                href={qrCodeUrl}
                download="Kashish_Ad_NFC_Card_QR.png"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1"
              >
                <span>Download QR</span>
                <span>⬇</span>
              </a>

              <button
                onClick={() => setShowQrModal(false)}
                className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* UPI Payment Modal */}
      {showUpiModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-sm w-full text-center space-y-4 shadow-2xl">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold text-white">Pay via UPI / QR Code</h3>
              <button
                onClick={() => setShowUpiModal(false)}
                className="text-slate-400 hover:text-white text-base cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-left">
              <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                Bank &amp; UPI Details
              </div>
              <div className="text-xs font-mono text-emerald-400 font-bold">
                UPI ID: 9308327111@okbizaxis
              </div>
              <div className="text-[11px] text-slate-300">
                Beneficiary: Kashish Ad
              </div>
              <div className="text-[10px] text-slate-500">
                Accepts Google Pay, PhonePe, Paytm, BHIM &amp; all banking apps.
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard('9308327111@okbizaxis', 'UPI ID')}
                className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                Copy UPI ID
              </button>
              <a
                href={CONTACT_INFO.getWhatsAppUrl('Hello Kashish Ad, please share billing invoice / QR code for payment.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition-colors flex items-center justify-center gap-1"
              >
                WhatsApp Pay
              </a>
            </div>

            <button
              onClick={() => setShowUpiModal(false)}
              className="w-full py-2 text-slate-400 hover:text-white text-xs cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
