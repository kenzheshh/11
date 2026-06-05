import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MessageSquareCode, CheckCircle2, ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type L = { ru: string; en: string };

interface Integration {
  slug: string;
  name: string; // brand label, kept untranslated (e.g. "amoCRM")
  h1: L;
  intro: L;
  benefits: L[];
  steps: L[];
  cta: L;
  faq?: { q: L; a: L }[];
}

// Data-driven so new integration landing pages are one config entry + one
// prerender route + one footer link. The pilot is amoCRM (highest commercial
// intent in the keyword data); Bitrix24 / 1С / Kaspi follow the same shape.
const INTEGRATIONS: Record<string, Integration> = {
  amocrm: {
    slug: 'amocrm',
    name: 'amoCRM',
    h1: { ru: 'Интеграция WhatsApp с amoCRM', en: 'WhatsApp integration with amoCRM' },
    intro: {
      ru: 'Подключите официальный WhatsApp Business API прямо в amoCRM. Все диалоги — в карточках сделок, без блокировок и «серых» решений.',
      en: 'Connect the official WhatsApp Business API right inside amoCRM. Every conversation lives in the deal card — no bans, no grey workarounds.',
    },
    benefits: [
      {
        ru: 'Диалоги в карточке сделки — вся переписка, история и теги привязаны к клиенту.',
        en: 'Chats in the deal card — all history and tags tied to the customer.',
      },
      {
        ru: 'Массовые рассылки по шаблонам Meta прямо из amoCRM — без риска бана.',
        en: 'Bulk template broadcasts straight from amoCRM — without ban risk.',
      },
      {
        ru: 'Несколько менеджеров на одном номере: распределение чатов и контроль.',
        en: 'Multiple managers on one number: chat routing and oversight.',
      },
      {
        ru: 'Чат-боты и автоворонки: автоответы, квалификация лидов, напоминания.',
        en: 'Chatbots and auto-funnels: auto-replies, lead qualification, reminders.',
      },
    ],
    steps: [
      {
        ru: 'Подключаем ваш номер к WhatsApp Business API (WABA) — от 5 минут.',
        en: 'We connect your number to WhatsApp Business API (WABA) — in about 5 minutes.',
      },
      {
        ru: 'Ставим виджет WaBase в amoCRM и привязываем воронки.',
        en: 'We install the WaBase widget in amoCRM and wire up your pipelines.',
      },
      {
        ru: 'Пишете и отвечаете клиентам в WhatsApp прямо из сделок.',
        en: 'You message and reply to customers on WhatsApp directly from deals.',
      },
    ],
    cta: { ru: 'Подключить WhatsApp к amoCRM', en: 'Connect WhatsApp to amoCRM' },
    faq: [
      {
        q: { ru: 'Можно ли отправлять рассылки из amoCRM?', en: 'Can I send broadcasts from amoCRM?' },
        a: {
          ru: 'Да — массовые рассылки по согласованным шаблонам Meta прямо из amoCRM, без риска блокировки номера.',
          en: 'Yes — bulk broadcasts using approved Meta templates straight from amoCRM, without risking a number ban.',
        },
      },
      {
        q: { ru: 'Заблокируют ли номер при рассылке через amoCRM?', en: 'Will the number get blocked when broadcasting via amoCRM?' },
        a: {
          ru: 'Нет. WaBase работает через официальный WhatsApp Business API: рассылки по шаблонам не приводят к блокировкам, в отличие от «серых» решений.',
          en: 'No. WaBase runs on the official WhatsApp Business API: template broadcasts don’t cause blocks, unlike grey solutions.',
        },
      },
      {
        q: { ru: 'Сколько занимает подключение к amoCRM?', en: 'How long does the amoCRM connection take?' },
        a: {
          ru: 'Обычно от 5 минут до пары часов: подключаем номер к WABA, ставим виджет и привязываем воронки.',
          en: 'Usually from 5 minutes to a couple of hours: we connect the number to WABA, install the widget and link your pipelines.',
        },
      },
      {
        q: { ru: 'Сохраняется ли история переписки в карточке сделки?', en: 'Is chat history saved in the deal card?' },
        a: {
          ru: 'Да, вся переписка, теги и история диалога привязаны к карточке клиента в amoCRM.',
          en: 'Yes, all chats, tags and conversation history are tied to the customer’s card in amoCRM.',
        },
      },
    ],
  },
};

export default function IntegrationPage() {
  const { lang, t, localePath } = useLanguage();
  const { slug } = useParams();
  const cfg = slug ? INTEGRATIONS[slug] : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!cfg) {
    return (
      <div className="bg-[#050505] text-slate-300 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <p className="text-lg mb-6">{t('Интеграция не найдена.', 'Integration not found.')}</p>
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
          {t('Интеграция', 'Integration')} · {cfg.name}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">{pick(cfg.h1)}</h1>
        <p className="text-lg text-slate-400 font-light leading-relaxed max-w-2xl mb-12">{pick(cfg.intro)}</p>

        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {cfg.benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-5">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-slate-300 font-light leading-relaxed">{pick(b)}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-8">{t('Как подключить', 'How it works')}</h2>
        <div className="space-y-6 mb-16">
          {cfg.steps.map((s, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-9 h-9 shrink-0 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold flex items-center justify-center">
                {i + 1}
              </div>
              <p className="text-slate-300 font-light leading-relaxed pt-1">{pick(s)}</p>
            </div>
          ))}
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
                    {/* grid-rows trick keeps the answer in the DOM for crawlers while collapsing height */}
                    <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-slate-400 font-light leading-relaxed">{pick(f.a)}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* FAQPage JSON-LD — rendered here so it lands in the prerendered HTML,
                localized, and always matches the visible Q&A above. */}
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
            {t('Подключим WhatsApp к', 'Connect WhatsApp to')} {cfg.name} {t('за 5 минут', 'in 5 minutes')}
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
