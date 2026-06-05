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

// Per-route <head> overrides so each route gets its own title / description /
// canonical / OG instead of inheriting the home page's (otherwise /partnership
// canonicalises to "/" and reads as a duplicate of the home page).
function applyMeta(html, meta) {
  if (!meta) return html;
  if (meta.title) {
    html = html
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`)
      .replace(/(<meta property="og:title" content=")[^"]*(">)/, `$1${meta.title}$2`)
      .replace(/(<meta name="twitter:title" content=")[^"]*(">)/, `$1${meta.title}$2`);
  }
  if (meta.description) {
    html = html
      .replace(/(<meta name="description" content=")[^"]*(">)/, `$1${meta.description}$2`)
      .replace(/(<meta property="og:description" content=")[^"]*(">)/, `$1${meta.description}$2`)
      .replace(/(<meta name="twitter:description" content=")[^"]*(">)/, `$1${meta.description}$2`);
  }
  if (meta.canonical) {
    html = html
      .replace(/(<link rel="canonical" href=")[^"]*(">)/, `$1${meta.canonical}$2`)
      .replace(/(<meta property="og:url" content=")[^"]*(">)/, `$1${meta.canonical}$2`);
  }
  if (meta.robots) {
    html = html.replace(/(<meta name="robots" content=")[^"]*(">)/, `$1${meta.robots}$2`);
  }
  return html;
}

const routes = [
  { path: '/', out: 'index.html', meta: null }, // home keeps the template defaults
  {
    path: '/partnership',
    out: 'partnership/index.html',
    meta: {
      title: 'Партнёрская программа WABase — WhatsApp Business API для SaaS и CRM',
      description:
        'Технологическое партнёрство WABase: готовый API и интерфейсы WhatsApp Business API для вашего SaaS, персональный менеджер, поддержка 24/7, закрывающие документы для РК и до 50% вознаграждения.',
      canonical: 'https://wabase.ai/partnership/',
      dropFaqLd: true, // no visible FAQ on this route
      extraJsonLd:
        '<script type="application/ld+json">' +
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {'@type': 'ListItem', position: 1, name: 'Главная', item: 'https://wabase.ai/'},
            {'@type': 'ListItem', position: 2, name: 'Партнёрская программа', item: 'https://wabase.ai/partnership/'},
          ],
        }) +
        '</script>',
    },
  },
  {
    path: '/privacy',
    out: 'privacy/index.html',
    meta: {
      title: 'Политика конфиденциальности — WABase',
      description: 'Как WABase обрабатывает и защищает персональные данные пользователей сайта wabase.ai и сервиса WhatsApp Business API.',
      canonical: 'https://wabase.ai/privacy/',
      robots: 'noindex, follow', // draft until reviewed by a lawyer
      dropFaqLd: true,
    },
  },
  {
    path: '/terms',
    out: 'terms/index.html',
    meta: {
      title: 'Условия использования — WABase',
      description: 'Условия использования сайта wabase.ai и сервиса подключения WhatsApp Business API WABase.',
      canonical: 'https://wabase.ai/terms/',
      robots: 'noindex, follow', // draft until reviewed by a lawyer
      dropFaqLd: true,
    },
  },
];

for (const route of routes) {
  const appHtml = render(route.path);
  let html = template.replace('<!--app-html-->', appHtml);
  html = applyMeta(html, route.meta);

  // FAQ JSON-LD is wrapped in <!--faq-ld:start/end--> in the template; keep it
  // only where a visible FAQ exists (home), strip it on other routes.
  if (route.meta?.dropFaqLd) {
    html = html.replace(/<!--faq-ld:start-->[\s\S]*?<!--faq-ld:end-->\s*/, '');
  } else {
    html = html.replace('<!--faq-ld:start-->', '').replace('<!--faq-ld:end-->', '');
  }

  if (route.meta?.extraJsonLd) {
    html = html.replace('</head>', `  ${route.meta.extraJsonLd}\n  </head>`);
  }

  const outFile = path.join(DIST, route.out);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html);
  console.log('pre-rendered:', route.out);
}
