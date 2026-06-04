<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/68d42b5e-c83e-4f43-91ea-51bd0147a10f

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Архитектура и сборка

**Это SSG (пререндеринг на сборке), а не SSR.** HTML генерируется один раз при
`npm run build` и потом раздаётся как статика с CDN (Netlify). Живого
серверного рендеринга на каждый запрос нет.

Цепочка `npm run build`:
1. `build:client` — Vite собирает клиентский бандл в `dist/` (с маркером
   `<!--app-html-->` внутри `#root`).
2. `build:server` — Vite собирает SSR-энтрипоинт `src/entry-server.tsx` в `dist-ssr/`.
3. `prerender` — `prerender.js` прогоняет маршруты `/` и `/partnership` через
   `renderToString` и записывает готовый HTML в `dist/index.html` и
   `dist/partnership/index.html`. В браузере React **гидрирует** эту статику
   (`main.tsx` → `hydrateRoot`).

Пререндер отдаёт канонический **русский** «скелет» страницы; динамика (гео,
курсы валют, форма AmoCRM, переключение языка) подтягивается уже на клиенте
через `useEffect` после гидрации.

> ⚠️ **`server.ts` — это НЕ SSR-сервер.** Он используется только для локальной
> разработки (`npm run dev` → Express + Vite middleware в SPA-режиме, без
> рендеринга на сервере) и на Netlify не запускается вообще (там раздаётся
> статика из `dist/`). В dev `main.tsx` уходит в ветку `createRoot`, в проде —
> в `hydrateRoot` (выбор по наличию пререндеренной разметки в `#root`).

> Примечание: шаг с `GEMINI_API_KEY` выше — наследие шаблона AI Studio; в коде
> лендинга эта переменная не используется.
