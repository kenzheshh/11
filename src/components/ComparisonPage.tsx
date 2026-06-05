import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MessageSquareCode, ChevronDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type L = { ru: string; en: string };

interface Comparison {
  slug: string;
  competitor: string; // brand label, e.g. "Wazzup"
  h1: L;
  intro: L;
  rows: { feature: L; wabase: L; them: L }[];
  cta: L;
  faq?: { q: L; a: L }[];
}

// Honest, defensible competitor comparisons. WaBase cells assert our own
// verifiable features; competitor cells stay factual/neutral. New comparison =
// one config entry + one prerender route + one footer link.

// Builder for global competitors (Wati, Gupshup, …). Rows stay conservative:
// WaBase cells are our verifiable features; competitor cells are neutral
// ("varies" / "check") rather than unverified specifics about a third party.
const globalComparison = (brand: string, intro: L): Comparison => ({
  slug: brand.toLowerCase(),
  competitor: brand,
  h1: {
    ru: `WaBase или ${brand} — сравнение WhatsApp Business API`,
    en: `WaBase vs ${brand} — WhatsApp Business API comparison`,
  },
  intro,
  rows: [
    { feature: { ru: 'Официальный WhatsApp Business API', en: 'Official WhatsApp Business API' }, wabase: { ru: 'Да', en: 'Yes' }, them: { ru: 'Да', en: 'Yes' } },
    { feature: { ru: 'Интеграции amoCRM и Битрикс24', en: 'amoCRM & Bitrix24 integrations' }, wabase: { ru: 'Да', en: 'Yes' }, them: { ru: 'Зависит от тарифа', en: 'Varies by plan' } },
    { feature: { ru: 'Личный онбординг и поддержка 24/7', en: 'Hands-on onboarding & 24/7 support' }, wabase: { ru: 'Да', en: 'Yes' }, them: { ru: 'Зависит от тарифа', en: 'Varies by plan' } },
    { feature: { ru: 'Партнёрская программа', en: 'Partner / reseller program' }, wabase: { ru: 'До 50% вознаграждения', en: 'Up to 50% revenue share' }, them: { ru: 'Уточняйте у провайдера', en: 'Check with provider' } },
  ],
  cta: { ru: 'Перейти на WaBase', en: 'Get started with WaBase' },
  faq: [
    {
      q: { ru: `Чем WaBase отличается от ${brand}?`, en: `What is the difference between WaBase and ${brand}?` },
      a: {
        ru: `Оба используют официальный WhatsApp Business API. WaBase добавляет личный онбординг, интеграции с amoCRM и Битрикс24 и партнёрскую программу.`,
        en: `Both use the official WhatsApp Business API. WaBase adds hands-on onboarding, amoCRM and Bitrix24 integrations and a partner program.`,
      },
    },
    {
      q: { ru: `Можно ли перейти с ${brand} на WaBase?`, en: `Can I migrate from ${brand} to WaBase?` },
      a: {
        ru: 'Да. Поможем перенести номер WABA и заново подключить ваши интеграции.',
        en: 'Yes. We help migrate your WABA number and reconnect your integrations.',
      },
    },
  ],
});

const COMPARISONS: Record<string, Comparison> = {
  wazzup: {
    slug: 'wazzup',
    competitor: 'Wazzup',
    h1: { ru: 'WaBase или Wazzup — сравнение для Казахстана', en: 'WaBase or Wazzup — a comparison for Kazakhstan' },
    intro: {
      ru: 'Wazzup и WaBase — оба работают через официальный WhatsApp Business API. Главные различия — локальная поддержка и закрывающие документы для Казахстана.',
      en: 'Both Wazzup and WaBase run on the official WhatsApp Business API. The main differences are local support and accounting documents for Kazakhstan.',
    },
    rows: [
      { feature: { ru: 'Официальный WhatsApp Business API', en: 'Official WhatsApp Business API' }, wabase: { ru: 'Да', en: 'Yes' }, them: { ru: 'Да', en: 'Yes' } },
      { feature: { ru: 'Документы для РК (тенге, ЭСФ, закрывающие)', en: 'Documents for Kazakhstan (KZT, e-invoices)' }, wabase: { ru: 'Да, локально', en: 'Yes, local' }, them: { ru: 'Ориентация на РФ', en: 'RU-focused' } },
      { feature: { ru: 'Интеграции amoCRM и Битрикс24', en: 'amoCRM and Bitrix24 integrations' }, wabase: { ru: 'Да', en: 'Yes' }, them: { ru: 'Да', en: 'Yes' } },
      { feature: { ru: 'Партнёрская программа', en: 'Partner program' }, wabase: { ru: 'До 50% вознаграждения', en: 'Up to 50% revenue share' }, them: { ru: 'Уточняйте у провайдера', en: 'Check with provider' } },
    ],
    cta: { ru: 'Перейти на WaBase', en: 'Switch to WaBase' },
    faq: [
      {
        q: { ru: 'Чем WaBase отличается от Wazzup?', en: 'How is WaBase different from Wazzup?' },
        a: {
          ru: 'Оба используют официальный WhatsApp Business API. WaBase ориентирован на Казахстан: договоры и закрывающие документы в тенге, локальная поддержка и партнёрская программа.',
          en: 'Both use the official WhatsApp Business API. WaBase is focused on Kazakhstan: contracts and closing documents in KZT, local support and a partner program.',
        },
      },
      {
        q: { ru: 'Можно ли перейти с Wazzup на WaBase?', en: 'Can I switch from Wazzup to WaBase?' },
        a: {
          ru: 'Да. Поможем перенести номер WABA и заново настроить интеграцию с вашей CRM.',
          en: 'Yes. We help migrate your WABA number and reconnect the integration with your CRM.',
        },
      },
    ],
  },

  'green-api': {
    slug: 'green-api',
    competitor: 'Green API',
    h1: { ru: 'WaBase или Green API — официальный WABA против шлюза', en: 'WaBase or Green API — official WABA vs a gateway' },
    intro: {
      ru: 'Green API подключает обычный WhatsApp через шлюз, WaBase — официальный WhatsApp Business API от Meta. Это ключевая разница в надёжности и риске блокировок.',
      en: 'Green API connects a regular WhatsApp account through a gateway; WaBase is the official WhatsApp Business API from Meta. That is the key difference in reliability and ban risk.',
    },
    rows: [
      { feature: { ru: 'Официальный канал Meta (Cloud API)', en: 'Official Meta channel (Cloud API)' }, wabase: { ru: 'Да', en: 'Yes' }, them: { ru: 'Нет, через шлюз', en: 'No, via gateway' } },
      { feature: { ru: 'Риск блокировки за рассылки', en: 'Ban risk for broadcasts' }, wabase: { ru: 'Нет (шаблоны Meta)', en: 'No (Meta templates)' }, them: { ru: 'Есть', en: 'Present' } },
      { feature: { ru: 'Массовые рассылки', en: 'Bulk broadcasts' }, wabase: { ru: 'Да, по шаблонам', en: 'Yes, by template' }, them: { ru: 'С ограничениями', en: 'With limitations' } },
      { feature: { ru: 'Документы и поддержка в РК', en: 'Documents and support in Kazakhstan' }, wabase: { ru: 'Да', en: 'Yes' }, them: { ru: 'Уточняйте', en: 'Check' } },
    ],
    cta: { ru: 'Подключить официальный WABA', en: 'Connect official WABA' },
    faq: [
      {
        q: { ru: 'В чём разница между WaBase и Green API?', en: 'What is the difference between WaBase and Green API?' },
        a: {
          ru: 'WaBase — официальный WhatsApp Business API (Meta Cloud API). Green API подключает обычный WhatsApp через шлюз. Официальный канал не блокируется за рассылки по согласованным шаблонам.',
          en: 'WaBase is the official WhatsApp Business API (Meta Cloud API). Green API connects a regular WhatsApp account via a gateway. The official channel is not blocked for broadcasts using approved templates.',
        },
      },
      {
        q: { ru: 'Могут ли заблокировать номер на шлюзе?', en: 'Can the number be blocked on a gateway?' },
        a: {
          ru: 'При массовых рассылках через неофициальный шлюз риск блокировки выше. Официальный WhatsApp Business API в WaBase такого риска по шаблонам не несёт.',
          en: 'For mass broadcasts through an unofficial gateway the ban risk is higher. The official WhatsApp Business API in WaBase does not carry that risk for template messages.',
        },
      },
    ],
  },

  wappi: {
    slug: 'wappi',
    competitor: 'Wappi',
    h1: { ru: 'WaBase или Wappi — сравнение провайдеров WhatsApp', en: 'WaBase or Wappi — a comparison of WhatsApp providers' },
    intro: {
      ru: 'Если вы выбираете провайдера для WhatsApp, главное — официальный канал Meta и локальная поддержка. Ниже честное сравнение WaBase и Wappi.',
      en: 'When choosing a WhatsApp provider, what matters is the official Meta channel and local support. Below is a fair comparison of WaBase and Wappi.',
    },
    rows: [
      { feature: { ru: 'Официальный WhatsApp Business API', en: 'Official WhatsApp Business API' }, wabase: { ru: 'Да', en: 'Yes' }, them: { ru: 'Уточняйте тариф', en: 'Depends on plan' } },
      { feature: { ru: 'Рассылки без риска блокировок', en: 'Broadcasts without ban risk' }, wabase: { ru: 'Да, по шаблонам Meta', en: 'Yes, by Meta template' }, them: { ru: 'Зависит от способа', en: 'Depends on method' } },
      { feature: { ru: 'Интеграции с CRM', en: 'CRM integrations' }, wabase: { ru: 'amoCRM, Битрикс24, API', en: 'amoCRM, Bitrix24, API' }, them: { ru: 'API', en: 'API' } },
      { feature: { ru: 'Документы и поддержка в РК', en: 'Documents and support in Kazakhstan' }, wabase: { ru: 'Да', en: 'Yes' }, them: { ru: 'Ориентация на РФ', en: 'RU-focused' } },
    ],
    cta: { ru: 'Перейти на WaBase', en: 'Switch to WaBase' },
    faq: [
      {
        q: { ru: 'Что выбрать — WaBase или Wappi?', en: 'WaBase or Wappi — which to choose?' },
        a: {
          ru: 'Для официальных рассылок без риска блокировок и с закрывающими документами в Казахстане подойдёт WaBase на официальном WhatsApp Business API.',
          en: 'For official broadcasts without ban risk and with accounting documents in Kazakhstan, WaBase on the official WhatsApp Business API is a good fit.',
        },
      },
    ],
  },

  radist: {
    slug: 'radist',
    competitor: 'Radist',
    h1: { ru: 'WaBase или Radist — сравнение для Казахстана', en: 'WaBase or Radist — a comparison for Kazakhstan' },
    intro: {
      ru: 'Radist и WaBase — официальные провайдеры WhatsApp Business API. Различия — в локальной поддержке и документах для бизнеса в Казахстане.',
      en: 'Radist and WaBase are both official WhatsApp Business API providers. The differences are in local support and documents for business in Kazakhstan.',
    },
    rows: [
      { feature: { ru: 'Официальный WhatsApp Business API', en: 'Official WhatsApp Business API' }, wabase: { ru: 'Да', en: 'Yes' }, them: { ru: 'Да', en: 'Yes' } },
      { feature: { ru: 'Документы для РК (тенге, ЭСФ)', en: 'Documents for Kazakhstan (KZT, e-invoices)' }, wabase: { ru: 'Да, локально', en: 'Yes, local' }, them: { ru: 'Ориентация на РФ', en: 'RU-focused' } },
      { feature: { ru: 'Интеграции amoCRM и Битрикс24', en: 'amoCRM and Bitrix24 integrations' }, wabase: { ru: 'Да', en: 'Yes' }, them: { ru: 'Да', en: 'Yes' } },
      { feature: { ru: 'Партнёрская программа', en: 'Partner program' }, wabase: { ru: 'До 50% вознаграждения', en: 'Up to 50% revenue share' }, them: { ru: 'Уточняйте у провайдера', en: 'Check with provider' } },
    ],
    cta: { ru: 'Перейти на WaBase', en: 'Switch to WaBase' },
    faq: [
      {
        q: { ru: 'Чем WaBase отличается от Radist?', en: 'How is WaBase different from Radist?' },
        a: {
          ru: 'Оба — официальные провайдеры WhatsApp Business API. WaBase ориентирован на Казахстан: документы в тенге, локальная поддержка и партнёрская программа.',
          en: 'Both are official WhatsApp Business API providers. WaBase is focused on Kazakhstan: documents in KZT, local support and a partner program.',
        },
      },
    ],
  },

  // --- Global competitors (English-primary targets: "<brand> alternative") ---
  wati: globalComparison('Wati', {
    ru: 'Wati — популярная платформа WhatsApp Business API для малого и среднего бизнеса. Если выбираете между Wati и WaBase — честное сравнение по ключевым параметрам.',
    en: 'Wati is a popular WhatsApp Business API platform for small and mid-sized teams. If you are weighing it against WaBase, here is a fair side-by-side.',
  }),
  gupshup: globalComparison('Gupshup', {
    ru: 'Gupshup — корпоративная платформа диалоговых коммуникаций. WaBase делает упор на официальный WhatsApp Business API с личным онбордингом и интеграциями CRM.',
    en: 'Gupshup is an enterprise conversational messaging platform. WaBase focuses on the official WhatsApp Business API with hands-on onboarding and CRM integrations.',
  }),
  interakt: globalComparison('Interakt', {
    ru: 'Interakt — инструмент для работы с WhatsApp для малого бизнеса и e-commerce. Сравните с WaBase по официальному API, интеграциям и поддержке.',
    en: 'Interakt is a WhatsApp engagement tool aimed at SMBs and e-commerce. Compare it with WaBase on the official API, integrations and support.',
  }),
  '360dialog': globalComparison('360dialog', {
    ru: '360dialog — официальный BSP с упором на API. WaBase даёт управляемое подключение с интеграциями CRM и поддержкой поверх официального API.',
    en: '360dialog is an API-first official WhatsApp BSP. WaBase offers a managed setup with CRM integrations and support on top of the official API.',
  }),
  aisensy: globalComparison('AiSensy', {
    ru: 'AiSensy — доступная платформа WhatsApp-маркетинга и рассылок. Сравните с WaBase по официальному API, интеграциям и поддержке.',
    en: 'AiSensy is an affordable WhatsApp marketing and broadcast platform. Compare it with WaBase on the official API, integrations and support.',
  }),
};

export default function ComparisonPage() {
  const { lang, t, localePath } = useLanguage();
  const { slug } = useParams();
  const cfg = slug ? COMPARISONS[slug] : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!cfg) {
    return (
      <div className="bg-[#050505] text-slate-300 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <p className="text-lg mb-6">{t('Сравнение не найдено.', 'Comparison not found.')}</p>
        <a href={localePath('/')} className="text-emerald-400 hover:text-emerald-300">
          ← {t('На главную', 'Home')}
        </a>
      </div>
    );
  }

  const pick = (l: L) => (lang === 'ru' ? l.ru : l.en);
  const openModal = () => window.dispatchEvent(new CustomEvent('open-amo-modal'));

  return (
    <div className="bg-[#050505] text-slate-300 min-h-screen pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <a href={localePath('/')} className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors mb-8">
          ← {t('На главную', 'Home')}
        </a>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
          {t('Сравнение', 'Comparison')} · WaBase {t('и', 'vs')} {cfg.competitor}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">{pick(cfg.h1)}</h1>
        <p className="text-lg text-slate-400 font-light leading-relaxed max-w-2xl mb-12">{pick(cfg.intro)}</p>

        <div className="overflow-x-auto mb-16 rounded-2xl border border-white/10">
          <table className="w-full text-left border-collapse min-w-[480px]">
            <thead>
              <tr className="bg-white/5">
                <th className="p-4 text-sm font-semibold text-slate-300">{t('Параметр', 'Feature')}</th>
                <th className="p-4 text-sm font-bold text-emerald-400">WaBase</th>
                <th className="p-4 text-sm font-semibold text-slate-300">{cfg.competitor}</th>
              </tr>
            </thead>
            <tbody>
              {cfg.rows.map((r, i) => (
                <tr key={i} className="border-t border-white/10">
                  <td className="p-4 text-sm text-slate-300 font-light">{pick(r.feature)}</td>
                  <td className="p-4 text-sm text-white font-medium">{pick(r.wabase)}</td>
                  <td className="p-4 text-sm text-slate-400 font-light">{pick(r.them)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {cfg.faq && cfg.faq.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">{t('Частые вопросы', 'Frequently asked questions')}</h2>
            <div className="space-y-4">
              {cfg.faq.map((f, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 text-left p-5"
                    >
                      <span className="text-base font-semibold text-white">{pick(f.q)}</span>
                      <ChevronDown className={`w-5 h-5 shrink-0 text-emerald-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-slate-400 font-light leading-relaxed">{pick(f.a)}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: cfg.faq.map((f) => ({
                    '@type': 'Question',
                    name: pick(f.q),
                    acceptedAnswer: { '@type': 'Answer', text: pick(f.a) },
                  })),
                }),
              }}
            />
          </div>
        )}

        <div className="bg-[#103E33] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5">
          <p className="text-xl font-bold text-white text-center md:text-left">
            {t('Подключим официальный WhatsApp Business API за 5 минут', 'We connect the official WhatsApp Business API in 5 minutes')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button onClick={openModal} className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 px-7 rounded-full flex items-center justify-center gap-2 transition-colors">
              {pick(cfg.cta)} <ArrowRight className="w-4 h-4" />
            </button>
            <a href="https://wa.me/77052563483" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-7 rounded-full border border-white/20 flex items-center justify-center gap-2 transition-colors">
              <MessageSquareCode className="w-4 h-4 text-emerald-400" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
