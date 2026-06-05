// Build-time prerender (SSG).
// Renders each route × language to static HTML and writes per-route files into dist/.
// Run after `vite build` (client) and `vite build --ssr` (server). See package.json.
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const DIST = toAbsolute('dist');
const SSR_DIR = toAbsolute('dist-ssr');
const SITE = 'https://wabase.ai';

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

// Languages we prerender. Each gets its own crawlable URL: RU at the root, EN under
// /en/. `prefix` is the URL/router prefix, `dir` the output subdirectory.
const LANGS = [
  { code: 'ru', prefix: '', dir: '', htmlLang: 'ru', ogLocale: 'ru_RU' },
  { code: 'en', prefix: '/en', dir: 'en', htmlLang: 'en', ogLocale: 'en_US' },
];

// Absolute, trailing-slashed canonical URL for a route in a given language.
const absUrl = (prefix, base) => `${SITE}${prefix}${base === '/' ? '/' : base + '/'}`;
// Path the router matches for a route in a given language.
const routerPath = (prefix, base) => prefix + (base === '/' ? '' : base) || '/';

// English FAQ JSON-LD — mirrors the visible English V2FAQ so the structured data
// matches what an English visitor sees. (The Russian block lives in index.html.)
const EN_FAQ_LD =
  '<script type="application/ld+json">' +
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is WhatsApp Business API (WABA)?', acceptedAnswer: { '@type': 'Answer', text: 'Meta’s official interface for bulk messaging, chatbots and CRM integration. Unlike the regular app, WABA isn’t blocked for broadcasts and supports multiple agents at once.' } },
      { '@type': 'Question', name: 'Can the number get blocked when sending broadcasts?', acceptedAnswer: { '@type': 'Answer', text: 'No. WABA is Meta’s official channel: broadcasts using approved templates don’t cause blocks, unlike the regular WhatsApp app and grey solutions.' } },
      { '@type': 'Question', name: 'How much do onboarding and messages cost?', acceptedAnswer: { '@type': 'Answer', text: 'The platform is billed by your chosen plan. Additionally, Meta charges per initiated 24-hour conversation; incoming messages from customers are free.' } },
      { '@type': 'Question', name: 'How long does connection take?', acceptedAnswer: { '@type': 'Answer', text: 'Turnkey — from 5 minutes to a couple of hours. We help with business verification, templates and CRM integration.' } },
      { '@type': 'Question', name: 'Is there CRM integration?', acceptedAnswer: { '@type': 'Answer', text: 'Yes: amoCRM, Bitrix24 and others via API or widget. Conversations, chat history and tags are available right in the deal card.' } },
      { '@type': 'Question', name: 'How is WABA different from the WhatsApp Business app?', acceptedAnswer: { '@type': 'Answer', text: 'The app is for manual chats from one phone. WABA (Cloud API) is for automation: bulk messaging, chatbots, multiple agents and CRM. Both can run on the same number (Coexistence).' } },
    ],
  }) +
  '</script>';

// Per-route <head> overrides so each route/language gets its own title /
// description / canonical instead of inheriting the home page's. `title`/
// `description` may be null to keep the template's (hand-tuned RU home) values.
function applyMeta(html, meta) {
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
  // Self-canonical + matching og:url for every page.
  html = html
    .replace(/(<link rel="canonical" href=")[^"]*(">)/, `$1${meta.canonical}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(">)/, `$1${meta.canonical}$2`);
  if (meta.robots) {
    html = html.replace(/(<meta name="robots" content=")[^"]*(">)/, `$1${meta.robots}$2`);
  }
  return html;
}

const routes = [
  {
    base: '/',
    out: 'index.html',
    // home keeps the visible FAQ → localized FAQ JSON-LD per language
    titles: {
      ru: null, // keep the template's hand-tuned RU title / OG copy
      en: 'WABase — WhatsApp Business API for business in Kazakhstan',
    },
    descriptions: {
      ru: null,
      en: 'Connect WhatsApp Business API (WABA) for broadcasts, chatbots and sales automation. CRM integration in 5 minutes. No bans. Official provider.',
    },
  },
  {
    base: '/partnership',
    out: 'partnership/index.html',
    dropFaqLd: true, // no visible FAQ on this route
    titles: {
      ru: 'Партнёрская программа WABase — WhatsApp Business API для SaaS и CRM',
      en: 'WABase Partner Program — WhatsApp Business API for SaaS and CRM',
    },
    descriptions: {
      ru: 'Технологическое партнёрство WABase: готовый API и интерфейсы WhatsApp Business API для вашего SaaS, персональный менеджер, поддержка 24/7, закрывающие документы для РК и до 50% вознаграждения.',
      en: 'WABase technology partnership: ready-made WhatsApp Business API and interfaces for your SaaS, a dedicated manager, 24/7 support, closing documents and up to 50% revenue share.',
    },
    breadcrumb: {
      ru: ['Главная', 'Партнёрская программа'],
      en: ['Home', 'Partner Program'],
    },
  },
  {
    // Programmatic SEO pilot: WhatsApp + amoCRM integration landing page.
    // New integrations are one more entry here + one in INTEGRATIONS (component).
    base: '/integrations/amocrm',
    out: 'integrations/amocrm/index.html',
    dropFaqLd: true,
    titles: {
      ru: 'Интеграция WhatsApp с amoCRM — официальный WABA | WaBase',
      en: 'WhatsApp integration with amoCRM — official WABA | WaBase',
    },
    descriptions: {
      ru: 'Подключите WhatsApp Business API к amoCRM: диалоги в карточке сделки, рассылки по шаблонам, чат-боты. Без блокировок, официальный канал Meta. Казахстан.',
      en: 'Connect WhatsApp Business API to amoCRM: chats in the deal card, template broadcasts, chatbots. No bans, official Meta channel. Kazakhstan.',
    },
    breadcrumb: {
      ru: ['Главная', 'Интеграция WhatsApp + amoCRM'],
      en: ['Home', 'WhatsApp + amoCRM integration'],
    },
  },
  {
    base: '/integrations/bitrix24',
    out: 'integrations/bitrix24/index.html',
    dropFaqLd: true,
    titles: {
      ru: 'Интеграция WhatsApp с Битрикс24 — официальный WABA | WaBase',
      en: 'WhatsApp integration with Bitrix24 — official WABA | WaBase',
    },
    descriptions: {
      ru: 'Подключите WhatsApp Business API к Битрикс24: открытые линии, диалоги в карточках лидов и сделок, рассылки по шаблонам. Без блокировок. Казахстан.',
      en: 'Connect WhatsApp Business API to Bitrix24: Open Channels, chats in lead and deal cards, template broadcasts. No bans. Kazakhstan.',
    },
    breadcrumb: {
      ru: ['Главная', 'Интеграция WhatsApp + Битрикс24'],
      en: ['Home', 'WhatsApp + Bitrix24 integration'],
    },
  },
  {
    base: '/integrations/1c',
    out: 'integrations/1c/index.html',
    dropFaqLd: true,
    titles: {
      ru: 'Интеграция WhatsApp с 1С — уведомления через WABA | WaBase',
      en: 'WhatsApp integration with 1C — notifications via WABA | WaBase',
    },
    descriptions: {
      ru: 'Отправляйте уведомления из 1С в WhatsApp через официальный API: статусы заказов, оплаты, напоминания. Без блокировок номера. Казахстан.',
      en: 'Send notifications from 1C to WhatsApp via the official API: order statuses, payments, reminders. No number bans. Kazakhstan.',
    },
    breadcrumb: {
      ru: ['Главная', 'Интеграция WhatsApp + 1С'],
      en: ['Home', 'WhatsApp + 1C integration'],
    },
  },
  {
    base: '/compare/wazzup',
    out: 'compare/wazzup/index.html',
    dropFaqLd: true,
    titles: {
      ru: 'WaBase или Wazzup — сравнение WABA-провайдеров | WaBase',
      en: 'WaBase or Wazzup — WABA provider comparison | WaBase',
    },
    descriptions: {
      ru: 'Чем WaBase отличается от Wazzup: официальный WhatsApp Business API, закрывающие документы для РК в тенге, локальная поддержка, партнёрская программа.',
      en: 'How WaBase differs from Wazzup: official WhatsApp Business API, accounting documents for Kazakhstan in KZT, local support, partner program.',
    },
    breadcrumb: {
      ru: ['Главная', 'WaBase или Wazzup'],
      en: ['Home', 'WaBase vs Wazzup'],
    },
  },
  {
    base: '/compare/green-api',
    out: 'compare/green-api/index.html',
    dropFaqLd: true,
    titles: {
      ru: 'WaBase или Green API — официальный WABA или шлюз | WaBase',
      en: 'WaBase or Green API — official WABA vs gateway | WaBase',
    },
    descriptions: {
      ru: 'WaBase — официальный WhatsApp Business API, Green API подключает обычный WhatsApp через шлюз. Сравнение по риску блокировок, рассылкам и поддержке.',
      en: 'WaBase is the official WhatsApp Business API; Green API connects regular WhatsApp via a gateway. Comparison by ban risk, broadcasts and support.',
    },
    breadcrumb: {
      ru: ['Главная', 'WaBase или Green API'],
      en: ['Home', 'WaBase vs Green API'],
    },
  },
  {
    base: '/compare/wappi',
    out: 'compare/wappi/index.html',
    dropFaqLd: true,
    titles: {
      ru: 'WaBase или Wappi — сравнение провайдеров WhatsApp | WaBase',
      en: 'WaBase or Wappi — WhatsApp provider comparison | WaBase',
    },
    descriptions: {
      ru: 'Сравнение WaBase и Wappi: официальный WhatsApp Business API, рассылки без блокировок, интеграции с CRM, документы и поддержка в Казахстане.',
      en: 'WaBase vs Wappi: official WhatsApp Business API, broadcasts without bans, CRM integrations, documents and support in Kazakhstan.',
    },
    breadcrumb: {
      ru: ['Главная', 'WaBase или Wappi'],
      en: ['Home', 'WaBase vs Wappi'],
    },
  },
  {
    base: '/compare/radist',
    out: 'compare/radist/index.html',
    dropFaqLd: true,
    titles: {
      ru: 'WaBase или Radist — сравнение WABA-провайдеров | WaBase',
      en: 'WaBase or Radist — WABA provider comparison | WaBase',
    },
    descriptions: {
      ru: 'Чем WaBase отличается от Radist: официальный WhatsApp Business API, закрывающие документы для РК, локальная поддержка, партнёрская программа.',
      en: 'How WaBase differs from Radist: official WhatsApp Business API, accounting documents for Kazakhstan, local support, partner program.',
    },
    breadcrumb: {
      ru: ['Главная', 'WaBase или Radist'],
      en: ['Home', 'WaBase vs Radist'],
    },
  },
  {
    base: '/privacy',
    out: 'privacy/index.html',
    robots: 'noindex, follow', // draft until reviewed by a lawyer
    dropFaqLd: true,
    titles: {
      ru: 'Политика конфиденциальности — WABase',
      en: 'Privacy Policy — WABase',
    },
    descriptions: {
      ru: 'Как WABase обрабатывает и защищает персональные данные пользователей сайта wabase.ai и сервиса WhatsApp Business API.',
      en: 'How WABase processes and protects personal data of wabase.ai users and the WhatsApp Business API service.',
    },
  },
  {
    base: '/terms',
    out: 'terms/index.html',
    robots: 'noindex, follow', // draft until reviewed by a lawyer
    dropFaqLd: true,
    titles: {
      ru: 'Условия использования — WABase',
      en: 'Terms of Use — WABase',
    },
    descriptions: {
      ru: 'Условия использования сайта wabase.ai и сервиса подключения WhatsApp Business API WABase.',
      en: 'Terms of use for the wabase.ai website and the WABase WhatsApp Business API service.',
    },
  },
];

// hreflang block (same for every language version of a route): lists each language
// version + x-default → the Russian default. Lets Google serve the right language.
function hreflangFor(route) {
  return [
    ...LANGS.map(
      (l) => `<link rel="alternate" hreflang="${l.code}" href="${absUrl(l.prefix, route.base)}">`,
    ),
    `<link rel="alternate" hreflang="x-default" href="${absUrl('', route.base)}">`,
  ].join('\n    ');
}

for (const route of routes) {
  for (const L of LANGS) {
    const appHtml = render(routerPath(L.prefix, route.base));
    let html = template.replace('<!--app-html-->', appHtml);

    // Per-language <html lang>, content-language and og:locale.
    html = html
      .replace('<html lang="ru">', `<html lang="${L.htmlLang}">`)
      .replace(/(<meta http-equiv="content-language" content=")[^"]*(">)/, `$1${L.htmlLang}$2`)
      .replace(/(<meta property="og:locale" content=")[^"]*(">)/, `$1${L.ogLocale}$2`);

    html = applyMeta(html, {
      title: route.titles[L.code],
      description: route.descriptions[L.code],
      canonical: absUrl(L.prefix, route.base),
      robots: route.robots,
    });

    // hreflang alternates for this route.
    html = html.replace('</head>', `    ${hreflangFor(route)}\n  </head>`);

    // FAQ JSON-LD is wrapped in <!--faq-ld:start/end--> in the template (RU). Keep it
    // only where a visible FAQ exists (home); swap in the English block on /en.
    if (route.dropFaqLd) {
      html = html.replace(/<!--faq-ld:start-->[\s\S]*?<!--faq-ld:end-->\s*/, '');
    } else if (L.code === 'en') {
      html = html.replace(/<!--faq-ld:start-->[\s\S]*?<!--faq-ld:end-->/, EN_FAQ_LD);
    } else {
      html = html.replace('<!--faq-ld:start-->', '').replace('<!--faq-ld:end-->', '');
    }

    // BreadcrumbList (localized) for routes that declare one.
    if (route.breadcrumb) {
      const [home, leaf] = route.breadcrumb[L.code];
      const ld = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: home, item: absUrl(L.prefix, '/') },
          { '@type': 'ListItem', position: 2, name: leaf, item: absUrl(L.prefix, route.base) },
        ],
      };
      html = html.replace(
        '</head>',
        `  <script type="application/ld+json">${JSON.stringify(ld)}</script>\n  </head>`,
      );
    }

    const outFile = path.join(DIST, L.dir, route.out);
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, html);
    console.log('pre-rendered:', path.join(L.dir, route.out));
  }
}
