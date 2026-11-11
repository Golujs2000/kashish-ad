import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Machinery from './pages/Machinery';
import Gallery from './pages/Gallery';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Calculator from './pages/Calculator';
import NfcVisitingCard from './pages/NfcVisitingCard';
import Locations from './pages/Locations';
import LocationDetail from './pages/LocationDetail';
import Guides from './pages/Guides';
import GuideDetail from './pages/GuideDetail';
import FaqPage from './pages/FaqPage';
import Reviews from './pages/Reviews';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import SitemapPage from './pages/SitemapPage';
import NotFound from './pages/NotFound';

// Scroll to top automatically on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/machinery" element={<Machinery />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/card" element={<NfcVisitingCard />} />
          <Route path="/nfc" element={<Navigate to="/card" replace />} />
          <Route path="/vcard" element={<Navigate to="/card" replace />} />
          <Route path="/nfc-visiting-card" element={<Navigate to="/card" replace />} />
          <Route path="/nfc-card" element={<Navigate to="/card" replace />} />
          <Route path="/services/nfc-visiting-card" element={<Navigate to="/card" replace />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:cityId" element={<LocationDetail />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/:guideSlug" element={<GuideDetail />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/faq" element={<Navigate to="/faqs" replace />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/testimonials" element={<Navigate to="/reviews" replace />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/terms-conditions" element={<Navigate to="/terms" replace />} />
          <Route path="/html-sitemap" element={<SitemapPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileStickyBar />
      <FloatingWhatsApp />
    </div>
  );
}
