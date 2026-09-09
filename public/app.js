/**
 * KASHISH AD® - Interactive Web Engine
 * Mobile-First • WhatsApp Order Routing • Cost Estimator • Gallery Lightbox
 */

document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_NUMBER = '919308327111';

  /* ==========================================================================
     1. Mobile Drawer Menu Navigation
     ========================================================================== */
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuToggle && mobileDrawer) {
    mobileMenuToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileMenuToggle.setAttribute('aria-expanded', isOpen);
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ==========================================================================
     2. Catalog Category Filtering
     ========================================================================== */
  const catalogFilters = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  catalogFilters.forEach(button => {
    button.addEventListener('click', () => {
      catalogFilters.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================================================
     3. Project Gallery Filtering
     ========================================================================== */
  const galleryFilters = document.querySelectorAll('.g-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const gfilter = btn.getAttribute('data-gfilter');

      galleryItems.forEach(item => {
        const cat = item.getAttribute('data-gcat');
        if (gfilter === 'all' || cat === gfilter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================================================
     4. Gallery Lightbox Modal
     ========================================================================== */
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxWaBtn = document.getElementById('lightboxWaBtn');

  function openLightbox(title, imgSrc) {
    if (!lightboxModal) return;
    lightboxTitle.textContent = title;
    lightboxImg.src = imgSrc;
    lightboxImg.alt = title;

    const encodedTitle = encodeURIComponent(title);
    lightboxWaBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Kashish%20Ad,%20I%20saw%20your%20portfolio%20project:%20%22${encodedTitle}%22%20and%20would%20like%20to%20order%20something%20similar.`;

    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const title = item.getAttribute('data-title') || 'Executed Project';
      const imgSrc = item.getAttribute('data-img') || item.querySelector('img').src;
      openLightbox(title, imgSrc);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  /* ==========================================================================
     5. Interactive Price Estimator & WhatsApp Order Sender
     ========================================================================== */
  const calcService = document.getElementById('calcService');
  const calcWidth = document.getElementById('calcWidth');
  const calcHeight = document.getElementById('calcHeight');
  const calcQty = document.getElementById('calcQty');
  const calcNotes = document.getElementById('calcNotes');
  const dimRow = document.getElementById('dimRow');
  const qtyRow = document.getElementById('qtyRow');
  const estimatedTotal = document.getElementById('estimatedTotal');
  const calcSummaryText = document.getElementById('calcSummaryText');
  const btnSendCalcToWhatsApp = document.getElementById('btnSendCalcToWhatsApp');

  function updateCalculator() {
    if (!calcService) return;

    const selectedOption = calcService.options[calcService.selectedIndex];
    const unit = selectedOption.getAttribute('data-unit');
    const rate = parseFloat(selectedOption.getAttribute('data-rate')) || 45;
    const serviceName = selectedOption.text.split('(')[0].trim();

    let total = 0;
    let summary = '';
    let specDetails = '';

    if (unit === 'pc') {
      dimRow.style.display = 'none';
      qtyRow.style.display = 'block';

      const qty = parseInt(calcQty.value) || 1;
      total = Math.round(qty * rate);
      summary = `${qty} Pieces of ${serviceName}`;
      specDetails = `Quantity: ${qty} Pc`;
    } else if (unit === 'sqft') {
      dimRow.style.display = 'flex';
      qtyRow.style.display = 'none';

      const w = parseFloat(calcWidth.value) || 1;
      const h = parseFloat(calcHeight.value) || 1;
      const sqft = Math.max(1, w * h);
      total = Math.round(sqft * rate);
      summary = `${sqft} Sq. Ft (${w} ft × ${h} ft) of ${serviceName}`;
      specDetails = `Dimensions: ${w} ft × ${h} ft (${sqft} Sq.Ft)`;
    } else if (unit === 'inch') {
      // 3D acrylic letters by average height & letter count
      dimRow.style.display = 'flex';
      qtyRow.style.display = 'none';

      const letterHeightInch = parseFloat(calcHeight.value) || 12;
      const approxLetterCount = Math.max(1, parseInt(calcWidth.value) || 8);
      total = Math.round(letterHeightInch * approxLetterCount * rate);
      summary = `Approx ${approxLetterCount} Letters at ${letterHeightInch}" height (${serviceName})`;
      specDetails = `Letter Spec: ${approxLetterCount} Letters × ${letterHeightInch} Inches`;
    }

    if (estimatedTotal) estimatedTotal.textContent = total.toLocaleString('en-IN');
    if (calcSummaryText) calcSummaryText.textContent = summary;

    // Build WhatsApp Order Link
    if (btnSendCalcToWhatsApp) {
      btnSendCalcToWhatsApp.onclick = () => {
        const notes = (calcNotes.value || 'None').trim();
        const msg = 
`*New Order Estimate - Kashish Ad®*
• *Service:* ${serviceName}
• *Spec:* ${specDetails}
• *Est. Total:* ₹${total.toLocaleString('en-IN')}
• *Notes:* ${notes}

Hello Kashish Ad, please review this requirement and confirm pricing & delivery timeline.`;

        const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
        window.open(waUrl, '_blank');
      };
    }
  }

  // Calculator Event Listeners
  if (calcService) calcService.addEventListener('change', updateCalculator);
  if (calcWidth) calcWidth.addEventListener('input', updateCalculator);
  if (calcHeight) calcHeight.addEventListener('input', updateCalculator);
  if (calcQty) calcQty.addEventListener('input', updateCalculator);

  // Initial Calculation
  updateCalculator();

  /* ==========================================================================
     6. Sticky Header Shadow on Scroll
     ========================================================================== */
  const mainHeader = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      mainHeader.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.6)';
    } else {
      mainHeader.style.boxShadow = 'none';
    }
  }, { passive: true });
});
