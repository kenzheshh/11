import {StrictMode, useState} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import Version2 from './Version2.tsx';
import './index.css';

function Root() {
  const [version, setVersion] = useState<'v1' | 'v2'>('v2');

  return (
    <>
      {version === 'v1' ? <App /> : <Version2 />}
      <div className="fixed bottom-4 right-4 z-[9999]">
        <button
          onClick={() => setVersion(v => v === 'v1' ? 'v2' : 'v1')}
          className="bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium border border-white/10 shadow-lg hover:bg-black transition-colors flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Switch to {version === 'v1' ? 'Version 2' : 'Version 1'}
        </button>
      </div>
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
