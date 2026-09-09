import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const pubDir = path.join(rootDir, 'public', 'assets', 'images');
const assetsDir = path.join(rootDir, 'ASSETS');
const subdirs = fs.readdirSync(assetsDir);
const googleImgDirName = subdirs.find(d => d.includes('kashish ad'));
const srcDir = path.join(assetsDir, googleImgDirName);

// Exact visual map: currentName -> accurateName
export const accurateMap = {
  // Machines & Equipment
  'solvent-vinyl-printing-services.jpg': 'uv-flatbed-printer-machine.jpg', // HandTop UV Flatbed
  'digital-flex-banner-printing-service.jpg': 'roll-vinyl-lamination-machine.jpg', // Matrix Duo Laminator
  'digital-printing-services-on-garment.jpg': 'locor-eco-solvent-vinyl-printer.jpg', // Locor wide-format
  'vinyl-digital-printing-services.jpg': 'acetek-eco-solvent-banner-printer.jpg', // Acetek printer
  'vinyl-sticker-printing-services.jpg': 'roland-truevis-print-cut-machine.jpg', // Roland TrueVIS
  'lamination-printing-services.jpg': 'hp-latex-wide-format-banner-printer.jpg', // HP Latex printer
  'table-calendar-printing-services.jpg': 'wide-format-flex-inkjet-plotter.jpg', // Wide format inkjet
  'label-sticker-printing-services.jpg': 'wide-format-digital-color-plotter.jpg', // Color plotter
  'kashish-ad-patna-flex-banner-sample-1.jpg': 'desktop-mini-laser-engraver.jpg', // 500mW mini laser
  'kashish-ad-patna-video-thumbnail.jpg': 'kashish-ad-roland-printer-in-action.jpg', // Roland inside Kashish shop

  // CNC & Laser Cutting
  'hoarding-flex-printing-services.jpg': 'acrylic-sheet-laser-cutting.jpg', // Laser cutting acrylic
  'copper-laser-cutting-services.jpg': 'metal-laser-cutting-jali-design.jpg', // Intricate jali cutting
  'acrylic-laser-cutting-services.jpg': 'fiber-laser-sheet-cutting-machine.jpg', // Fiber laser scrollwork
  'aluminium-cutting-services.jpg': 'cnc-laser-metal-perforation-cutting.jpg', // Nozzle cutting holes
  'aluminium-laser-cutting-services.jpg': 'precision-laser-engraving-wood-metal.jpg', // Filigree laser
  'aluminium-water-jet-cutting-services.jpg': 'stainless-steel-laser-cutting-bed.jpg', // SS laser bed
  'metal-laser-engraving-services.jpg': 'cnc-abrasive-water-jet-cutting.jpg', // Water jet submerged
  'mild-steel-laser-cutting-services.jpg': 'cnc-milling-router-jali-cutting.jpg', // CNC router spindle

  // Signage, 3D Letters & Glow Boards
  'kashish-ad-patna-acrylic-led-display.jpg': 'kashish-ad-led-acrylic-glow-sign-board.jpg', // Shahi Mahal 3D sign
  'kashish-ad-patna-led-glow-lettering.jpg': 'lux-venus-3d-led-glow-sign-board.jpg', // Lux Venus 3D sign
  'kashish-ad-patna-outdoor-flex-banner.jpg': '3d-channel-letters-acrylic-trim-cap.jpg', // 3D channel letters
  'kashish-ad-patna-commercial-building-signage.jpg': 'commercial-storefront-acp-sign-board.jpg', // Raza Market sign
  'kashish-ad-patna-product-sample-2.jpg': 'acrylic-corporate-name-plate-studs.jpg', // Acrylic name plate studs
  'kashish-ad-patna-product-sample-3.jpg': 'custom-neon-sign-board-red.jpg', // Black Friday red neon
  'kashish-ad-patna-product-sample-4.jpg': 'acrylic-floating-poster-frame-display.jpg', // Acrylic poster frame
  'kashish-ad-patna-product-sample-5.jpg': 'outdoor-neon-blade-projecting-sign.jpg', // Weekend neon blade
  'kashish-ad-patna-product-sample-6.jpg': 'modern-double-sided-lightbox-sign.jpg', // Simple lightbox sign
  'kashish-ad-patna-product-sample-7.jpg': '3d-acrylic-glow-letter-r.jpg', // 3D glowing "R"
  'kashish-ad-patna-uv-glass-decor.jpg': 'stainless-steel-metal-name-plate.jpg', // SS Coffee shop plate
  'kashish-ad-patna-agency-portfolio-3.jpg': 'laser-cut-mdf-jali-backlit-panel.jpg', // Backlit MDF jali
  'kashish-ad-patna-production-workshop.jpg': 'laser-cut-wooden-jali-wall-decor.jpg', // Wooden jali decor

  // Posters, Lightboxes & Hoardings
  'uv-digital-printing-services.jpg': 'outdoor-hoarding-billboard-structure.jpg', // Toothpaste billboard
  'kashish-ad-patna-printing-press-sample-2.jpg': 'highway-advertising-hoarding-night.jpg', // Night highway billboard
  'kashish-ad-patna-promotional-branding-sample.jpg': 'rooftop-unipole-hoarding-billboard.jpg', // Banshi Sha rooftop
  'kashish-ad-patna-agency-portfolio-4.jpg': 'restaurant-sweets-backlit-lightbox-poster.jpg', // Sweets lightbox
  'kashish-ad-patna-agency-showroom-1.jpg': 'bridal-jewelry-backlit-display-board.jpg', // Bridal lightbox
  'kashish-ad-patna-agency-showroom-2.jpg': 'multi-graphic-backlit-film-display.jpg', // Multi-graphic film
  'kashish-ad-patna-commercial-printing-press.jpg': 'commercial-backlit-glow-sign-film.jpg', // Backlit film duplicate
  'kashish-ad-patna-press-machinery-hall.jpg': 'restaurant-menu-backlit-display-board.jpg', // Menu lightbox
  'printing-services-on-key-chain.jpg': 'framed-wall-poster-printing.jpg', // Framed Football poster

  // Commercial Printing & Paper Products
  'canvas-printing-services.jpg': 'paper-bill-book-invoice-printing.jpg', // Bill book / Invoice pad
  'paper-bill-book-printing-services.jpg': 'printed-product-catalog-brochure.jpg', // Hardcover product catalog
  'paper-catalog-printing-services.jpg': 'spiral-desk-table-calendar-printing.jpg', // Desk calendar
  'kashish-ad-patna-printing-press-sample-3.jpg': 'visiting-business-card-printing.jpg', // Visiting business card
  'digital-poster-printing-services.jpg': 'digital-color-document-printer.jpg', // HP LaserJet printer
  'kashish-ad-patna-product-sample-1.jpg': 'stretched-canvas-wall-photo-print.jpg', // Canvas wall photo print
  'cloth-banner-printing-services.jpg': 'custom-photo-keychain-printing.jpg', // Photo keychain

  // Stickers & Labels
  'pvc-flex-printing-services.jpg': 'vinyl-die-cut-sticker-label-printing.jpg', // Round decals/stickers
  'wide-format-digital-printing-services.jpg': 'industrial-roll-label-printing-machine.jpg', // Roll label printer

  // Real Kashish Ad Facility & Promotional Media
  'kashish-ad-patna-illuminated-sign-board.jpg': 'kashish-ad-capital-tower-storefront.jpg', // Daytime entrance
  'kashish-ad-patna-storefront-board-installation.jpg': 'kashish-ad-night-storefront-entrance.jpg', // Night entrance
  'kashish-ad-patna-commercial-signage-board.jpg': 'kashish-ad-plant-workshop-inside.jpg', // Inside workshop
  'kashish-ad-patna-signage-facade-elevation.jpg': 'kashish-ad-office-design-desk-and-laser.jpg', // Office desk & laser
  'kashish-ad-patna-retail-elevation-display.jpg': 'kashish-ad-led-letters-testing-wall.jpg', // Letters testing wall
  'kashish-ad-patna-acrylic-sign-board.jpg': 'graphic-design-workstation.jpg', // Workstation
  'kashish-ad-patna-flex-printing-machine-1.jpg': 'kashish-ad-official-workshop-banner.jpg', // Official red banner
  'kashish-ad-patna-wide-flex-machine-2.jpg': 'kashish-ad-wide-workshop-banner.jpg', // Wide red banner
  'kashish-ad-patna-printing-press-sample-1.jpg': 'kashish-ad-services-overview-banner.jpg', // Banner overview
  'kashish-ad-patna-advertising-display-1.jpg': 'kashish-ad-nine-machines-branding-banner.jpg', // 9 machines banner
  'kashish-ad-patna-offset-printing-press.jpg': 'kashish-ad-nine-machines-plant-poster.jpg', // 9 machines poster
  'kashish-ad-patna-advertising-display-2.jpg': 'kashish-ad-eight-machines-poster.jpg', // 8 machines poster
  'kashish-ad-patna-agency-portfolio-1.jpg': 'kashish-ad-eight-machines-illuminated-lightbox.jpg', // 8 machines lightbox
  'kashish-ad-patna-agency-portfolio-2.jpg': 'kashish-ad-machines-showcase-display.jpg', // Showcase poster
  'kashish-ad-patna-digital-print-desk.jpg': 'kashish-ad-production-plant-poster.jpg', // Production poster
  'kashish-ad-patna-print-room-facility.jpg': 'kashish-ad-lightbox-display-board.jpg', // Lightbox board
  'kashish-ad-patna-advertising-flex-board.jpg': 'kashish-ad-all-machinery-collage.jpg', // Machinery collage
  'kashish-ad-patna-flex-banner-print-sample.jpg': 'kashish-ad-plant-equipment-diagram.jpg', // Equipment diagram
  'kashish-ad-patna-roll-flex-banner-printing.jpg': 'signage-products-hexagonal-collage.jpg', // Products collage
  'kashish-ad-patna-showroom-unit.jpg': 'kashish-ad-services-rates-flyer.jpg', // Rates flyer
  'kashish-ad-patna-badge-logo.png': 'kashish-ad-justdial-contact-card.png' // Justdial card
};

let count = 0;
for (const [currentName, accurateName] of Object.entries(accurateMap)) {
  const currentPub = path.join(pubDir, currentName);
  const accuratePub = path.join(pubDir, accurateName);
  
  if (fs.existsSync(currentPub)) {
    fs.copyFileSync(currentPub, accuratePub);
    count++;
  }
  
  const currentSrc = path.join(srcDir, currentName);
  const accurateSrc = path.join(srcDir, accurateName);
  if (fs.existsSync(currentSrc)) {
    fs.copyFileSync(currentSrc, accurateSrc);
  }
}

console.log(`Copied and accurately named ${count} images.`);
