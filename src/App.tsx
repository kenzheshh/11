/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientMarquee from './components/ClientMarquee';
import TransformationEffect from './components/TransformationEffect';
import CoexistenceEffect from './components/CoexistenceEffect';
import ParallaxFunnelEffect from './components/ParallaxFunnelEffect';
import AIFeatures from './components/AIFeatures';
import Integrations from './components/Integrations';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MeshGradientBackground from './components/MeshGradientBackground';
import ConnectingLine from './components/ConnectingLine';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-gray-900 selection:bg-brand/20 selection:text-brand-hover relative z-0">
      <MeshGradientBackground />
      <ConnectingLine />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ClientMarquee />
        <TransformationEffect />
        <CoexistenceEffect />
        <ParallaxFunnelEffect />
        <AIFeatures />
        <Testimonials />
        <Integrations />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
