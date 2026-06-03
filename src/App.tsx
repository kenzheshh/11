/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import V2Hero from './components/v2/V2Hero';
import V2Navbar from './components/v2/V2Navbar';
import V2Footer from './components/v2/V2Footer';
import AmoModal from './components/AmoModal';

import { LanguageProvider } from './contexts/LanguageContext';

// Lazy load below-the-fold components
const V2Transformation = lazy(() => import('./components/v2/V2Transformation'));
const V2FeaturesCarousel = lazy(() => import('./components/v2/V2FeaturesCarousel'));
const V2Process = lazy(() => import('./components/v2/V2Process'));
const V2Coexistence = lazy(() => import('./components/v2/V2Coexistence'));
const V2Testimonials = lazy(() => import('./components/v2/V2Testimonials'));
const V2Pricing = lazy(() => import('./components/v2/V2Pricing'));
const PartnershipPage = lazy(() => import('./components/v2/PartnershipPage'));

function HomePage() {
  return (
    <main>
      <V2Hero />
      <Suspense fallback={<div className="min-h-screen bg-[#050505]" />}>
        <V2Transformation />
        <V2FeaturesCarousel />
        <V2Process />
        <V2Coexistence />
        <V2Testimonials />
        <V2Pricing />
      </Suspense>
    </main>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsModalOpen(true);
    window.addEventListener('open-amo-modal', handleOpen);
    return () => window.removeEventListener('open-amo-modal', handleOpen);
  }, []);

  return (
    <LanguageProvider>
      <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-emerald-500 selection:text-white">
        <Suspense fallback={<div className="min-h-screen bg-[#050505]" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/partnership" element={<PartnershipPage />} />
          </Routes>
        </Suspense>
        <V2Footer />
        <V2Navbar />
        
        <AmoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </LanguageProvider>
  );
}
