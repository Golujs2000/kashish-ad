import React, { useEffect } from 'react';

export default function LightboxModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!item) return null;

  const waMessage = encodeURIComponent(
    `Hello Kashish Ad, I saw your portfolio work: "${item.title}" and would like to get a quote / place an order for similar work.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative z-10 max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-brand-red shadow-md transition-all text-xl font-bold"
          onClick={onClose}
          aria-label="Close Preview"
        >
          &times;
        </button>

        {/* Full Image */}
        <div className="max-h-[70vh] bg-slate-100 flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full max-h-[70vh] object-contain"
          />
        </div>

        {/* Caption & WhatsApp Action */}
        <div className="p-4 sm:p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100">
          <div>
            <h4 className="font-display font-bold text-lg text-slate-900">{item.title}</h4>
            <p className="text-xs text-slate-500 font-medium mt-0.5">📍 {item.location}</p>
          </div>
          <a
            href={`https://wa.me/919308327111?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-brand-whatsapp hover:bg-brand-whatsapp-hover transition-all shadow-md shadow-emerald-500/20 active:scale-95"
          >
            <span>💬 Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
