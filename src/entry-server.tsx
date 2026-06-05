import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';
import { LanguageProvider } from './contexts/LanguageContext';

/**
 * Server render entry used by prerender.js at build time.
 * Renders a given route to an HTML string. The language is derived from the URL
 * prefix (/en) inside LanguageProvider, so `/partnership` renders Russian and
 * `/en/partnership` renders English from the same component tree.
 * No CSS / @fontsource imports here — those belong to the client bundle.
 */
export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </StaticRouter>
    </StrictMode>,
  );
}
