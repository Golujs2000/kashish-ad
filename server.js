import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// In-memory inquiry store
const inquiries = [];

// API Endpoints
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    brand: 'Kashish Ad®',
    brandHindi: 'कशिश एड(र)',
    ceo: 'S Haidar',
    gstin: '10AENPH7809D1ZT',
    phone: '07488984637',
    address: 'Capital Tower, A-6 & B-16, Fraser Rd, Old Jakkanpur, Lodipur, Patna, Bihar 800001',
    port: PORT,
    timestamp: new Date().toISOString()
  });
});

app.get('/api/info', (req, res) => {
  res.json({
    name: 'Kashish Ad®',
    legalStatus: 'Proprietorship',
    ceo: 'S Haidar',
    gstin: '10AENPH7809D1ZT',
    gstRegistrationDate: '2017',
    natureOfBusiness: 'Trader - Retailer & Supplier of Services',
    teamSize: 'Upto 10 People',
    phone: '07488984637',
    whatsapp: '917488984637',
    rating: 4.6,
    reviewsCount: 61,
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.79281733723!2d85.13890925243263!3d25.612510435198413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed585b8e0da1c9%3A0xb8215c141ed214f5!2sKashish%20Ad%C2%AE!5e1!3m2!1sen!2sin!4v1790236050239!5m2!1sen!2sin'
  });
});

app.post('/api/inquiry', (req, res) => {
  const { name, phone, service, city, message } = req.body || {};
  const inquiry = {
    id: Date.now(),
    name: name || 'Anonymous',
    phone: phone || 'N/A',
    service: service || 'General',
    city: city || 'Patna',
    message: message || '',
    receivedAt: new Date().toISOString()
  };
  inquiries.push(inquiry);
  console.log(`[INQUIRY RECEIVED] From: ${inquiry.name} (${inquiry.phone}) for ${inquiry.service}`);
  res.status(201).json({ success: true, message: 'Inquiry registered successfully', inquiryId: inquiry.id });
});

app.get('/api/inquiries', (req, res) => {
  res.json({ total: inquiries.length, inquiries });
});

// Security & SEO Headers Middleware
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Serve frontend static files from dist directory with optimized caching
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath, {
  maxAge: '7d',
  setHeaders: (res, filePath) => {
    // Hashed production Vite assets get long-term caching
    if (filePath.includes(`${path.sep}assets${path.sep}`)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    }
  }
}));

// Explicit SEO endpoints
app.get('/sitemap.xml', (req, res) => {
  res.header('Content-Type', 'application/xml');
  res.sendFile(path.join(distPath, 'sitemap.xml'));
});

app.get('/robots.txt', (req, res) => {
  res.header('Content-Type', 'text/plain');
  res.sendFile(path.join(distPath, 'robots.txt'));
});

// Fallback for React Router SPA routes
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 Kashish Ad® Server running at http://localhost:${PORT}`);
  console.log(`📍 Capital Tower, Fraser Road, Patna, Bihar 800001`);
  console.log(`📞 Phone & WhatsApp: 09308327111 / 07488984637`);
  console.log(`=======================================================`);
});
