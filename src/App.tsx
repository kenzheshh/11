/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import V2Hero from './components/v2/V2Hero';
import V2Transformation from './components/v2/V2Transformation';
import V2FeaturesCarousel from './components/v2/V2FeaturesCarousel';
import V2Process from './components/v2/V2Process';
import V2Coexistence from './components/v2/V2Coexistence';
import V2Testimonials from './components/v2/V2Testimonials';
import V2Pricing from './components/v2/V2Pricing';
import V2Navbar from './components/v2/V2Navbar';
import V2Footer from './components/v2/V2Footer';
import AmoModal from './components/AmoModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsModalOpen(true);
    window.addEventListener('open-amo-modal', handleOpen);
    return () => window.removeEventListener('open-amo-modal', handleOpen);
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-emerald-500 selection:text-white">
      <main>
        <V2Hero />
        <V2Transformation />
        <V2FeaturesCarousel />
        <V2Process />
        <V2Coexistence />
        <V2Testimonials />
        <V2Pricing />
      </main>
      <V2Footer />
      <V2Navbar />
      
      <AmoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
