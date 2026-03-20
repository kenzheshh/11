/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import V2Experience from './components/v2/V2Experience';
import V2Steps from './components/v2/V2Steps';
import V2Pricing from './components/v2/V2Pricing';
import V2Navbar from './components/v2/V2Navbar';
import V2Footer from './components/v2/V2Footer';

export default function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-emerald-500 selection:text-white">
      <V2Navbar />
      <main>
        <V2Experience />
        <V2Steps />
        <V2Pricing />
      </main>
      <V2Footer />
    </div>
  );
}
