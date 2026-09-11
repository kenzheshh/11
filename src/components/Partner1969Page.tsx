import React, { useEffect } from 'react';
import Partner1969Hero from './v2/Partner1969Hero';
import V2Transformation from './v2/V2Transformation';
import V2FeaturesCarousel from './v2/V2FeaturesCarousel';
import V2Process from './v2/V2Process';
import V2Coexistence from './v2/V2Coexistence';
import V2Testimonials from './v2/V2Testimonials';
import V2FAQ from './v2/V2FAQ';
import Partner1969Pricing from './v2/Partner1969Pricing';

export default function Partner1969Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'WaBase × Бюро 1969 — Специальные условия WhatsApp Business API';
  }, []);

  return (
    <main>
      <Partner1969Hero />
      <V2Transformation />
      <V2FeaturesCarousel />
      <V2Process />
      <V2Coexistence />
      <V2Testimonials />
      <V2FAQ />
      <Partner1969Pricing />
    </main>
  );
}
