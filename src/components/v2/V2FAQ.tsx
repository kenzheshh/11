import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function V2FAQ() {
  const { t } = useLanguage();

  const items = [
    {
      q: t('Что такое WhatsApp Business API (WABA)?', 'What is WhatsApp Business API (WABA)?'),
      a: t(
        'Официальный интерфейс Meta для массовых рассылок, чат-ботов и интеграции WhatsApp с CRM. В отличие от обычного приложения, WABA не блокируется за рассылки и поддерживает несколько операторов одновременно.',
        'Meta’s official interface for bulk messaging, chatbots and CRM integration. Unlike the regular app, WABA isn’t blocked for broadcasts and supports multiple agents at once.',
      ),
    },
    {
      q: t('Могут ли заблокировать номер при рассылках?', 'Can the number get blocked when sending broadcasts?'),
      a: t(
        'Нет. WABA — официальный канал Meta: рассылки по согласованным шаблонам не приводят к блокировкам, в отличие от обычного WhatsApp и «серых» решений.',
        'No. WABA is Meta’s official channel: broadcasts using approved templates don’t cause blocks, unlike the regular WhatsApp app and grey solutions.',
      ),
    },
    {
      q: t('Сколько стоит подключение и сообщения?', 'How much do onboarding and messages cost?'),
      a: t(
        'Платформа — по выбранному тарифу. Дополнительно Meta берёт плату за каждый начатый 24-часовой диалог; входящие сообщения от клиентов бесплатны.',
        'The platform is billed by your chosen plan. Additionally, Meta charges per initiated 24-hour conversation; incoming messages from customers are free.',
      ),
    },
    {
      q: t('Сколько занимает подключение?', 'How long does connection take?'),
      a: t(
        'Под ключ — от 5 минут до пары часов. Помогаем с верификацией бизнеса, шаблонами и интеграцией с вашей CRM.',
        'Turnkey — from 5 minutes to a couple of hours. We help with business verification, templates and CRM integration.',
      ),
    },
    {
      q: t('Есть ли интеграция с CRM?', 'Is there CRM integration?'),
      a: t(
        'Да: amoCRM, Bitrix24 и другие через API или виджет. Диалоги, история переписки и теги доступны прямо в карточке сделки.',
        'Yes: amoCRM, Bitrix24 and others via API or widget. Conversations, chat history and tags are available right in the deal card.',
      ),
    },
    {
      q: t('Чем WABA отличается от приложения WhatsApp Business?', 'How is WABA different from the WhatsApp Business app?'),
      a: t(
        'Приложение — для ручного общения с одного телефона. WABA (Cloud API) — для автоматизации: массовые рассылки, чат-боты, несколько операторов и CRM. Оба варианта можно использовать на одном номере (Coexistence).',
        'The app is for manual chats from one phone. WABA (Cloud API) is for automation: bulk messaging, chatbots, multiple agents and CRM. Both can run on the same number (Coexistence).',
      ),
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#050505] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {t('Частые вопросы', 'Frequently asked questions')}
          </h2>
          <p className="text-lg text-slate-400 font-light">
            {t('Коротко о WhatsApp Business API и подключении.', 'Quick answers about WhatsApp Business API and onboarding.')}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6"
                >
                  <span className="text-base md:text-lg font-semibold text-white">{it.q}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-emerald-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {/* grid-rows trick keeps the answer text in the DOM (for SEO/crawlers) while collapsing height */}
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-slate-400 font-light leading-relaxed">{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
