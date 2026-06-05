/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import V2Hero from './components/v2/V2Hero';
import V2Transformation from './components/v2/V2Transformation';
import V2FeaturesCarousel from './components/v2/V2FeaturesCarousel';
import V2Process from './components/v2/V2Process';
import V2Coexistence from './components/v2/V2Coexistence';
import V2Testimonials from './components/v2/V2Testimonials';
import V2Pricing from './components/v2/V2Pricing';
import V2FAQ from './components/v2/V2FAQ';
import V2Navbar from './components/v2/V2Navbar';
import V2Footer from './components/v2/V2Footer';

import PartnershipPage from './components/v2/PartnershipPage';
import LegalPage from './components/LegalPage';
import IntegrationPage from './components/IntegrationPage';
import ComparisonPage from './components/ComparisonPage';

// Modal + AmoCRM form are only needed once a CTA is clicked — keep them out of
// the initial bundle and the prerendered HTML.
const AmoModal = lazy(() => import('./components/AmoModal'));

function HomePage() {
  return (
    <main>
      <V2Hero />
      <V2Transformation />
      <V2FeaturesCarousel />
      <V2Process />
      <V2Coexistence />
      <V2Testimonials />
      <V2FAQ />
      <V2Pricing />
    </main>
  );
}


export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Mount the modal lazily only after it has been requested at least once.
  const [modalRequested, setModalRequested] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setModalRequested(true);
      setIsModalOpen(true);
    };
    window.addEventListener('open-amo-modal', handleOpen);
    return () => window.removeEventListener('open-amo-modal', handleOpen);
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-emerald-500 selection:text-white">
      {/* Each page is served at its Russian path and an /en-prefixed English twin.
          LanguageContext reads the /en prefix to choose the language, so the same
          component renders RU on `/partnership` and EN on `/en/partnership`. */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/partnership" element={<PartnershipPage />} />
        <Route path="/privacy" element={<LegalPage kind="privacy" />} />
        <Route path="/terms" element={<LegalPage kind="terms" />} />
        <Route path="/integrations/:slug" element={<IntegrationPage />} />
        <Route path="/compare/:slug" element={<ComparisonPage />} />
        <Route path="/en" element={<HomePage />} />
        <Route path="/en/partnership" element={<PartnershipPage />} />
        <Route path="/en/privacy" element={<LegalPage kind="privacy" />} />
        <Route path="/en/terms" element={<LegalPage kind="terms" />} />
        <Route path="/en/integrations/:slug" element={<IntegrationPage />} />
        <Route path="/en/compare/:slug" element={<ComparisonPage />} />
      </Routes>
      <V2Footer />
      <V2Navbar />

      {modalRequested && (
        <Suspense fallback={null}>
          <AmoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}
