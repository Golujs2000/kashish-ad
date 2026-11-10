const fs = require('fs');
const path = require('path');

// Read products.js
const productsFilePath = path.join(__dirname, 'src', 'data', 'products.js');
const productsFileContent = fs.readFileSync(productsFilePath, 'utf8');

// Parse products using dynamic import
async function generate() {
  const fileUrl = 'file:///' + productsFilePath.replace(/\\/g, '/');
  const { PRODUCTS } = await import(fileUrl);
  
  const baseUrl = 'https://kashishad.in';
  const today = '2026-11-10';

  const corePages = [
    { loc: '/', priority: '1.0', changefreq: 'daily' },
    { loc: '/services', priority: '0.95', changefreq: 'daily' },
    { loc: '/calculator', priority: '0.90', changefreq: 'weekly' },
    { loc: '/machinery', priority: '0.85', changefreq: 'weekly' },
    { loc: '/gallery', priority: '0.85', changefreq: 'weekly' },
    { loc: '/contact', priority: '0.85', changefreq: 'monthly' },
    { loc: '/about', priority: '0.80', changefreq: 'monthly' },
    { loc: '/card', priority: '0.85', changefreq: 'weekly' }
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
  xml += `  <!-- Core Main Pages -->\n`;

  for (const page of corePages) {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}${page.loc}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `\n  <!-- Individual Service & Product Detail Pages (${PRODUCTS.length} Products) -->\n`;

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

  const publicSitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
  const distSitemapPath = path.join(__dirname, 'dist', 'sitemap.xml');

  fs.writeFileSync(publicSitemapPath, xml, 'utf8');
  if (fs.existsSync(path.join(__dirname, 'dist'))) {
    fs.writeFileSync(distSitemapPath, xml, 'utf8');
  }

  console.log(`Successfully wrote sitemap.xml with ${corePages.length + PRODUCTS.length} URLs!`);
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
