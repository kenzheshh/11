// Build-time prerender (SSG).
// Renders each route to static HTML and writes per-route files into dist/.
// Run after `vite build` (client) and `vite build --ssr` (server). See package.json.
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const DIST = toAbsolute('dist');
const SSR_DIR = toAbsolute('dist-ssr');

// Locate the compiled server entry (filename may carry a hash depending on config).
const ssrEntryName =
  fs.readdirSync(SSR_DIR).find((f) => /^entry-server.*\.js$/.test(f));
if (!ssrEntryName) {
  throw new Error(`Could not find entry-server*.js in ${SSR_DIR}`);
}
const { render } = await import(url.pathToFileURL(path.join(SSR_DIR, ssrEntryName)).href);

// Preload the above-the-fold Cyrillic body fonts (RU is the canonical audience).
// Hashes change per build, so resolve the real filenames from dist/assets.
const assetsDir = path.join(DIST, 'assets');
const fontFiles = fs.existsSync(assetsDir) ? fs.readdirSync(assetsDir) : [];
const preloadFonts = ['inter-cyrillic-400', 'inter-cyrillic-600']
  .map((stem) => fontFiles.find((f) => f.startsWith(stem) && f.endsWith('.woff2')))
  .filter(Boolean)
  .map(
    (f) =>
      `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin>`,
  )
  .join('\n    ');

let template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');
if (preloadFonts) {
  template = template.replace('</head>', `    ${preloadFonts}\n  </head>`);
}

const routes = [
  { path: '/', out: 'index.html' },
  { path: '/partnership', out: 'partnership/index.html' },
];

for (const route of routes) {
  const appHtml = render(route.path);
  const html = template.replace('<!--app-html-->', appHtml);
  const outFile = path.join(DIST, route.out);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html);
  console.log('pre-rendered:', route.out);
}
