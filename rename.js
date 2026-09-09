import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rootDir = process.cwd();

const assetsDir = path.join(rootDir, 'ASSETS');
const subdirs = fs.readdirSync(assetsDir);
const googleImgDirName = subdirs.find(d => d.includes('kashish ad'));
const srcDir = path.join(assetsDir, googleImgDirName);
const destDir = path.join(rootDir, 'public', 'assets', 'images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const map = {
  'acrylic-laser-cutting-services-s8m8l1l4.jpg': 'acrylic-laser-cutting-services.jpg',
  'aluminium-cutting-services-d1n4lsjy.jpg': 'aluminium-cutting-services.jpg',
  'aluminium-laser-cutting-services-cx1ttgt6.jpg': 'aluminium-laser-cutting-services.jpg',
  'aluminium-water-jet-cutting-services-qjefyzbz.jpg': 'aluminium-water-jet-cutting-services.jpg',
  'canvas-printing-services-bm7sspby.jpg': 'canvas-printing-services.jpg',
  'cloth-banner-printing-services-gu2n6k7o.jpg': 'cloth-banner-printing-services.jpg',
  'copper-laser-cutting-services-gtku098n.jpg': 'copper-laser-cutting-services.jpg',
  'digital-flex-banner-printing-service-o5rbvtpb.jpg': 'digital-flex-banner-printing-service.jpg',
  'digital-poster-printing-services-64xhaov8.jpg': 'digital-poster-printing-services.jpg',
  'digital-printing-services-on-garment-4983r464.jpg': 'digital-printing-services-on-garment.jpg',
  'hoarding-flex-printing-services-kj3ndyo3.jpg': 'hoarding-flex-printing-services.jpg',
  'label-sticker-printing-services-6frb78yv.jpg': 'label-sticker-printing-services.jpg',
  'lamination-printing-services-o4ufc5zg.jpg': 'lamination-printing-services.jpg',
  'metal-laser-engraving-services-y6kxqj40.jpg': 'metal-laser-engraving-services.jpg',
  'mild-steel-laser-cutting-services-qzwa3xew.jpg': 'mild-steel-laser-cutting-services.jpg',
  'paper-bill-book-printing-services-9rqqil3y.jpg': 'paper-bill-book-printing-services.jpg',
  'paper-catalog-printing-services-kyzxq5g8.jpg': 'paper-catalog-printing-services.jpg',
  'printing-services-on-key-chain-k4mh2fuw.jpg': 'printing-services-on-key-chain.jpg',
  'pvc-flex-printing-services-qv7swrxi.jpg': 'pvc-flex-printing-services.jpg',
  'solvent-vinyl-printing-services-4sq07xa5.jpg': 'solvent-vinyl-printing-services.jpg',
  'table-calendar-printing-services-fxiarcwz.jpg': 'table-calendar-printing-services.jpg',
  'uv-digital-printing-services-nktg48wh.jpg': 'uv-digital-printing-services.jpg',
  'vinyl-digital-printing-services-3bzt8qmf.jpg': 'vinyl-digital-printing-services.jpg',
  'vinyl-sticker-printing-services-6xy49yzg.jpg': 'vinyl-sticker-printing-services.jpg',
  'wide-format-digital-printing-services-jnkstpuu.jpg': 'wide-format-digital-printing-services.jpg',

  'kashish-ad-dak-bunglow-road-patna-advertising-agencies-1i9gqwfkbt.jpg': 'kashish-ad-patna-signage-facade-elevation.jpg',
  'kashish-ad-dak-bunglow-road-patna-advertising-agencies-mz8latqwqo.jpg': 'kashish-ad-patna-illuminated-sign-board.jpg',
  'kashish-ad-dak-bunglow-road-patna-advertising-agencies-b4yh2qpl9z.jpg': 'kashish-ad-patna-commercial-signage-board.jpg',
  'kashish-ad-dak-bunglow-road-patna-advertising-agencies-x8ljt5a1bj.jpg': 'kashish-ad-patna-retail-elevation-display.jpg',
  'kashish-ad-dak-bunglow-road-patna-advertising-agencies-9zdi5zimaa.jpg': 'kashish-ad-patna-storefront-board-installation.jpg',
  'kashish-ad-dak-bunglow-road-patna-advertising-agencies-zcb6ywei3z.jpg': 'kashish-ad-patna-commercial-building-signage.jpg',
  'kashish-ad-dak-bunglow-road-patna-advertising-agencies-itvqxr8um4.jpg': 'kashish-ad-patna-acrylic-led-display.jpg',
  'kashish-ad-dak-bunglow-road-patna-advertising-agencies-mvpgf36ml7.jpg': 'kashish-ad-patna-led-glow-lettering.jpg',
  'kashish-ad-dak-bunglow-road-patna-advertising-agencies-esbxgd83vi.jpg': 'kashish-ad-patna-promotional-branding-sample.jpg',

  'kashish-ad-frazer-road-patna-acrylic-sign-board-dealers-uvwdtmisf1.jpg': 'kashish-ad-patna-acrylic-sign-board.jpg',
  'kashish-ad-frazer-road-patna-flex-printing-services-wmzhz.jpg': 'kashish-ad-patna-flex-printing-machine-1.jpg',
  'kashish-ad-frazer-road-patna-flex-printing-services-ugeza.jpg': 'kashish-ad-patna-wide-flex-machine-2.jpg',
  'kashish-ad-frazer-road-patna-flex-printing-services-mw8m8.jpg': 'kashish-ad-patna-flex-banner-print-sample.jpg',
  'kashish-ad-frazer-road-patna-flex-printing-services-pj226.jpg': 'kashish-ad-patna-outdoor-flex-banner.jpg',
  'kashish-ad-frazer-road-patna-flex-printing-services-wowi3.jpg': 'kashish-ad-patna-roll-flex-banner-printing.jpg',
  'kashish-ad-frazer-road-patna-flex-printing-services-y6m3j.jpg': 'kashish-ad-patna-advertising-flex-board.jpg',
  'kashish-ad-frazer-road-patna-flex-printing-services-kc0kp.jpg': 'kashish-ad-patna-flex-banner-sample-1.jpg',

  'kashish-ad-frazer-road-patna-printing-press-ml5892hly0.jpg': 'kashish-ad-patna-commercial-printing-press.jpg',
  'kashish-ad-frazer-road-patna-printing-press-cn1oaopvyw.jpg': 'kashish-ad-patna-offset-printing-press.jpg',
  'kashish-ad-frazer-road-patna-printing-press-j8gdphhe8w.jpg': 'kashish-ad-patna-print-room-facility.jpg',
  'kashish-ad-frazer-road-patna-printing-press-06vmtj59mk.jpg': 'kashish-ad-patna-digital-print-desk.jpg',
  'kashish-ad-frazer-road-patna-printing-press-ssrnorm85o.jpg': 'kashish-ad-patna-press-machinery-hall.jpg',
  'kashish-ad-frazer-road-patna-printing-press-t52697tow1.jpg': 'kashish-ad-patna-production-workshop.jpg',
  'kashish-ad-frazer-road-patna-printing-press-02ogspjyvt.jpg': 'kashish-ad-patna-printing-press-sample-1.jpg',
  'kashish-ad-frazer-road-patna-printing-press-07y1zvak08.jpg': 'kashish-ad-patna-printing-press-sample-2.jpg',
  'kashish-ad-frazer-road-patna-printing-press-rec72ywrsy.jpg': 'kashish-ad-patna-printing-press-sample-3.jpg',

  'kashish-ad-agency-dak-bunglow-road-patna-advertising-agencies-etwni7ghyg.jpg': 'kashish-ad-patna-agency-showroom-1.jpg',
  'kashish-ad-agency-dak-bunglow-road-patna-advertising-agencies-v0y8tc449f.jpg': 'kashish-ad-patna-agency-showroom-2.jpg',
  'kashish-ad-agency-dak-bunglow-road-patna-advertising-agencies-x8kk08us1d.jpg': 'kashish-ad-patna-advertising-display-1.jpg',
  'kashish-ad-agency-dak-bunglow-road-patna-advertising-agencies-u8ht5u5txh.jpg': 'kashish-ad-patna-advertising-display-2.jpg',
  'kashish-ad-agency-dak-bunglow-road-patna-advertising-agencies-foaqgexpjn.jpg': 'kashish-ad-patna-agency-portfolio-1.jpg',
  'kashish-ad-agency-dak-bunglow-road-patna-advertising-agencies-l1ti2vv7ze.jpg': 'kashish-ad-patna-agency-portfolio-2.jpg',
  'kashish-ad-agency-dak-bunglow-road-patna-advertising-agencies-mougtgdrsp.jpg': 'kashish-ad-patna-agency-portfolio-3.jpg',
  'kashish-ad-agency-dak-bunglow-road-patna-advertising-agencies-t4x8hvfgad.jpg': 'kashish-ad-patna-agency-portfolio-4.jpg',
  'kashish-ad-patna-mn6c4.jpg': 'kashish-ad-patna-showroom-unit.jpg',
  'mp-03jgv9xo9ktfbw0-kashish-ad-77673.png': 'kashish-ad-patna-badge-logo.png',
  'jd-Ott_720x540_Thumbnail.0000006.jpg': 'kashish-ad-patna-video-thumbnail.jpg',

  'j-ccerwxop.jpg': 'kashish-ad-patna-uv-glass-decor.jpg',
  '-kjzixcnp.jpg': 'kashish-ad-patna-product-sample-1.jpg',
  'f-f56a7y7e.jpg': 'kashish-ad-patna-product-sample-2.jpg',
  'f-gtb58zzq.jpg': 'kashish-ad-patna-product-sample-3.jpg',
  'f-qahbtqzo.jpg': 'kashish-ad-patna-product-sample-4.jpg',
  'f-slravwde.jpg': 'kashish-ad-patna-product-sample-5.jpg',
  'h-2elf85zg.jpg': 'kashish-ad-patna-product-sample-6.jpg',
  'h-ziyx80ln.jpg': 'kashish-ad-patna-product-sample-7.jpg'
};

const srcFiles = fs.readdirSync(srcDir);
console.log(`Source directory has ${srcFiles.length} files`);

let renamedCount = 0;
for (const [oldName, newName] of Object.entries(map)) {
  const oldPath = path.join(srcDir, oldName);
  const newSrcPath = path.join(srcDir, newName);
  const newDestPath = path.join(destDir, newName);

  if (fs.existsSync(oldPath)) {
    // Copy to public/assets/images
    fs.copyFileSync(oldPath, newDestPath);
    // Rename in ASSETS directory
    try {
      fs.renameSync(oldPath, newSrcPath);
    } catch (e) {
      // In case of conflict, ignore
    }
    renamedCount++;
  } else if (fs.existsSync(newSrcPath)) {
    // Already renamed in source, ensure copied to destination
    fs.copyFileSync(newSrcPath, newDestPath);
    renamedCount++;
  }
}

console.log(`Successfully processed and renamed ${renamedCount} images.`);
const destFiles = fs.readdirSync(destDir);
console.log(`Destination public/assets/images now has ${destFiles.length} clean files.`);
