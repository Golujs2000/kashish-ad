import fs from 'fs';

let file = fs.readFileSync('src/data/products.js', 'utf8');

const replacements = [
  ["image: '/assets/images/uv-digital-printing-services.jpg'", "image: '/assets/images/uv-flatbed-printer-machine.jpg'"],
  ["image: '/assets/images/solvent-vinyl-printing-services.jpg'", "image: '/assets/images/locor-eco-solvent-vinyl-printer.jpg'"],
  ["image: '/assets/images/kashish-ad-patna-acrylic-sign-board.jpg'", "image: '/assets/images/kashish-ad-led-acrylic-glow-sign-board.jpg'"],
  ["image: '/assets/images/copper-laser-cutting-services.jpg'", "image: '/assets/images/stainless-steel-metal-name-plate.jpg'"],
  ["image: '/assets/images/digital-flex-banner-printing-service.jpg'", "image: '/assets/images/wide-format-flex-inkjet-plotter.jpg'"],
  ["image: '/assets/images/cloth-banner-printing-services.jpg'", "image: '/assets/images/signage-products-hexagonal-collage.jpg'"],
  ["image: '/assets/images/label-sticker-printing-services.jpg'", "image: '/assets/images/vinyl-die-cut-sticker-label-printing.jpg'"],
  ["image: '/assets/images/canvas-printing-services.jpg'", "image: '/assets/images/stretched-canvas-wall-photo-print.jpg'"],
  ["image: '/assets/images/digital-printing-services-on-garment.jpg'", "image: '/assets/images/acetek-eco-solvent-banner-printer.jpg'"],
  ["image: '/assets/images/kashish-ad-patna-uv-glass-decor.jpg'", "image: '/assets/images/acrylic-floating-poster-frame-display.jpg'"],
  ["image: '/assets/images/aluminium-laser-cutting-services.jpg'", "image: '/assets/images/metal-laser-cutting-jali-design.jpg'"],
  ["image: '/assets/images/kashish-ad-patna-flex-printing-machine-1.jpg'", "image: '/assets/images/commercial-storefront-acp-sign-board.jpg'"],
  ["image: '/assets/images/kashish-ad-patna-flex-banner-print-sample.jpg'", "image: '/assets/images/modern-double-sided-lightbox-sign.jpg'"],
  ["image: '/assets/images/metal-laser-engraving-services.jpg'", "image: '/assets/images/acrylic-corporate-name-plate-studs.jpg'"],
  ["image: '/assets/images/vinyl-digital-printing-services.jpg'", "image: '/assets/images/multi-graphic-backlit-film-display.jpg'"],
  ["image: '/assets/images/paper-catalog-printing-services.jpg'", "image: '/assets/images/printed-product-catalog-brochure.jpg'"],
  ["image: '/assets/images/printing-services-on-key-chain.jpg'", "image: '/assets/images/custom-photo-keychain-printing.jpg'"]
];

for (const [from, to] of replacements) {
  file = file.replace(from, to);
}

fs.writeFileSync('src/data/products.js', file, 'utf8');
console.log('Successfully updated all 17 product image paths!');
