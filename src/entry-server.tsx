import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';
import { LanguageProvider } from './contexts/LanguageContext';

/**
 * Server render entry used by prerender.js at build time.
 * Renders the canonical Russian version of a given route to an HTML string.
 * No CSS / @fontsource imports here — those belong to the client bundle.
 */
export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <LanguageProvider initialLang="ru">
          <App />
        </LanguageProvider>
      </StaticRouter>
    </StrictMode>,
  );
}
