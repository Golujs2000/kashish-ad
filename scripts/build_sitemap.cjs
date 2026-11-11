const fs = require('fs');
const path = require('path');

async function generate() {
  const productsFilePath = path.join(__dirname, '..', 'src', 'data', 'products.js');
  const locationsFilePath = path.join(__dirname, '..', 'src', 'data', 'locationsData.js');
  const guidesFilePath = path.join(__dirname, '..', 'src', 'data', 'guidesData.js');

  const { PRODUCTS } = await import('file:///' + productsFilePath.replace(/\\/g, '/'));
  const { BIHAR_LOCATIONS } = await import('file:///' + locationsFilePath.replace(/\\/g, '/'));
  const { EDITORIAL_GUIDES } = await import('file:///' + guidesFilePath.replace(/\\/g, '/'));

  const baseUrl = 'https://kashishad.in';
  const today = '2026-11-10';

  const corePages = [
    { loc: '/', priority: '1.0', changefreq: 'daily' },
    { loc: '/services', priority: '0.95', changefreq: 'daily' },
    { loc: '/calculator', priority: '0.90', changefreq: 'weekly' },
    { loc: '/locations', priority: '0.90', changefreq: 'weekly' },
    { loc: '/guides', priority: '0.90', changefreq: 'weekly' },
    { loc: '/reviews', priority: '0.85', changefreq: 'weekly' },
    { loc: '/faqs', priority: '0.85', changefreq: 'weekly' },
    { loc: '/machinery', priority: '0.85', changefreq: 'weekly' },
    { loc: '/gallery', priority: '0.85', changefreq: 'weekly' },
    { loc: '/portfolio', priority: '0.80', changefreq: 'monthly' },
    { loc: '/about', priority: '0.80', changefreq: 'monthly' },
    { loc: '/contact', priority: '0.85', changefreq: 'monthly' },
    { loc: '/card', priority: '0.85', changefreq: 'weekly' },
    { loc: '/html-sitemap', priority: '0.70', changefreq: 'monthly' },
    { loc: '/privacy-policy', priority: '0.50', changefreq: 'yearly' },
    { loc: '/terms', priority: '0.50', changefreq: 'yearly' }
  ];

  function escapeXml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n\n`;

  xml += `  <!-- 1. Core Main Pages (${corePages.length} Pages) -->\n`;
  for (const page of corePages) {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}${page.loc}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `\n  <!-- 2. Bihar Regional District & City Hubs (${BIHAR_LOCATIONS.length} Locations) -->\n`;
  for (const loc of BIHAR_LOCATIONS) {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}/locations/${loc.id}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.85</priority>\n`;
    xml += `    <image:image>\n`;
    xml += `      <image:loc>${baseUrl}/assets/images/hero-showcase-storefront-facade.png</image:loc>\n`;
    xml += `      <image:title>${escapeXml(loc.name + ' Sign Board Manufacturer - Kashish Ad®')}</image:title>\n`;
    xml += `      <image:caption>${escapeXml(loc.overview)}</image:caption>\n`;
    xml += `    </image:image>\n`;
    xml += `  </url>\n`;
  }

  xml += `\n  <!-- 3. Commercial & Technical Guides (${EDITORIAL_GUIDES.length} Articles) -->\n`;
  for (const guide of EDITORIAL_GUIDES) {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}/guides/${guide.slug}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.85</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `\n  <!-- 4. Individual Commercial Service & Product Pages (${PRODUCTS.length} Products) -->\n`;
  for (const p of PRODUCTS) {
    const rawImg = p.image || '';
    const imgUrl = rawImg ? (rawImg.startsWith('http') ? rawImg.replace('https://kashishad.web.app', baseUrl) : `${baseUrl}${rawImg.startsWith('/') ? '' : '/'}${rawImg}`) : '';
    const title = p.title ? `${p.title} in Patna` : 'Signage Manufacturer in Patna';
    const desc = p.description || '';

    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}/services/${p.id}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.85</priority>\n`;
    if (imgUrl) {
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${escapeXml(imgUrl)}</image:loc>\n`;
      xml += `      <image:title>${escapeXml(title)}</image:title>\n`;
      xml += `      <image:caption>${escapeXml(desc)}</image:caption>\n`;
      xml += `    </image:image>\n`;
    }
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;

  const publicSitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  const distSitemapPath = path.join(__dirname, '..', 'dist', 'sitemap.xml');

  fs.writeFileSync(publicSitemapPath, xml, 'utf8');
  if (fs.existsSync(path.join(__dirname, '..', 'dist'))) {
    fs.writeFileSync(distSitemapPath, xml, 'utf8');
  }

  const totalUrls = corePages.length + BIHAR_LOCATIONS.length + EDITORIAL_GUIDES.length + PRODUCTS.length;
  console.log(`Successfully generated master sitemap.xml with ${totalUrls} high-value URLs!`);
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
