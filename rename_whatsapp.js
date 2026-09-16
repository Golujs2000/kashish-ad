import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const assetsDir = path.join(rootDir, 'ASSETS');
const pubImgDir = path.join(rootDir, 'public', 'assets', 'images');
const pubVideoDir = path.join(rootDir, 'public', 'assets', 'videos');

if (!fs.existsSync(pubImgDir)) {
  fs.mkdirSync(pubImgDir, { recursive: true });
}
if (!fs.existsSync(pubVideoDir)) {
  fs.mkdirSync(pubVideoDir, { recursive: true });
}

const map = {
  'WhatsApp Image 2026-09-07 at 3.07.40 PM.jpeg': 'kashish-ad-aakash-deep-3d-led-glow-sign-board.jpg',
  'WhatsApp Image 2026-09-07 at 3.07.41 PM.jpeg': 'kashish-ad-hanzala-hajj-umrah-storefront-sign-board.jpg',
  'WhatsApp Image 2026-09-07 at 3.08.44 PM.jpeg': 'kashish-ad-rasmalai-the-mithai-shop-3d-led-sign-board.jpg',
  'WhatsApp Image 2026-09-07 at 3.09.41 PM.jpeg': 'kashish-ad-bssa-sports-complex-illuminated-signage.jpg',
  'WhatsApp Image 2026-09-07 at 3.54.20 PM.jpeg': 'kashish-ad-machinery-services-black-banner.jpg',
  'WhatsApp Image 2026-09-07 at 3.55.34 PM.jpeg': 'kashish-ad-red-storefront-facade-elevation-mockup.jpg',
  'WhatsApp Image 2026-09-07 at 3.56.59 PM.jpeg': 'kashish-ad-work-in-progress-site-branding-banner.jpg',
  'WhatsApp Image 2026-09-07 at 3.59.29 PM.jpeg': 'kashish-ad-flex-print-laser-cutting-horizontal-banner.jpg',
  'WhatsApp Image 2026-09-07 at 4.01.26 PM.jpeg': 'kashish-ad-yahan-flex-print-laser-cutting-banner.jpg',
  'WhatsApp Image 2026-09-07 at 4.04.30 PM.jpeg': 'kashish-ad-1.5kw-fiber-laser-cutting-machine.jpg',
  'WhatsApp Image 2026-09-07 at 4.06.35 PM.jpeg': 'kashish-ad-uv-flatbed-printing-machine.jpg',
  'WhatsApp Video 2026-09-07 at 3.32.20 PM.mp4': 'kashish-ad-workshop-fabrication-video.mp4',

  // 2026-09-10 Batch
  'WhatsApp Image 2026-09-10 at 11.40.13 AM.jpeg': 'kashish-ad-lets-print-branding-horizontal-banner.jpg',
  'WhatsApp Image 2026-09-10 at 11.40.14 AM.jpeg': 'kashish-ad-lets-print-branding-horizontal-banner-alt.jpg',
  'WhatsApp Image 2026-09-10 at 11.40.15 AM (1).jpeg': 'kashish-ad-lets-print-branding-display-mockup.jpg',
  'WhatsApp Image 2026-09-10 at 11.40.15 AM.jpeg': 'kashish-ad-brand-monogram-square-logo.jpg',
  'WhatsApp Video 2026-09-10 at 11.39.54 AM.mp4': 'kashish-ad-patna-signage-storefront-elevation-video.mp4',
  'WhatsApp Video 2026-09-10 at 11.40.11 AM.mp4': 'kashish-ad-showroom-interior-trophy-neon-tour-video.mp4',
  'WhatsApp Video 2026-09-10 at 11.40.12 AM.mp4': 'kashish-ad-storefront-entrance-walkthrough-video.mp4',
  'WhatsApp Video 2026-09-10 at 11.40.13 AM.mp4': 'kashish-ad-reception-desk-acrylic-nameplate-video.mp4'
};

console.log('Renaming WhatsApp files in ASSETS and syncing to public assets...\n');

let renamedCount = 0;
for (const [oldName, newName] of Object.entries(map)) {
  const oldPath = path.join(assetsDir, oldName);
  const newPath = path.join(assetsDir, newName);

  if (fs.existsSync(oldPath)) {
    // Rename in ASSETS directory
    fs.renameSync(oldPath, newPath);
    console.log(`✓ Renamed in ASSETS:\n  "${oldName}"\n  -> "${newName}"\n`);
    renamedCount++;

    // Copy to public/assets for web application use
    const isVideo = newName.endsWith('.mp4');
    const targetDir = isVideo ? pubVideoDir : pubImgDir;
    const destPath = path.join(targetDir, newName);
    fs.copyFileSync(newPath, destPath);
    console.log(`  Synced to ${path.relative(rootDir, destPath)}\n`);
  } else if (fs.existsSync(newPath)) {
    console.log(`- Already renamed: "${newName}"`);
  } else {
    console.warn(`! File not found: "${oldName}"`);
  }
}

console.log(`\nCompleted: ${renamedCount} files renamed and synchronized.`);
