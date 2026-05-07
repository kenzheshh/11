import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Heart, PhoneCall, FileCheck, Code2, Users, Receipt, HeadphonesIcon, Settings, TerminalSquare, MessageSquareCode } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function PartnershipPage() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] text-slate-300 min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-24 mt-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            {t('Для технических партнёров WhatsApp, Telegram, Instagram, MAX', 'For technical partners WhatsApp, Telegram, Instagram, MAX')}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight max-w-4xl mx-auto leading-tight">
            {t('Самый простой способ интегрировать', 'The easiest way to integrate')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">WhatsApp Business API</span>, Telegram, Instagram* {t('и MAX в ваш SaaS-сервис', 'and MAX into your SaaS service')}
          </h1>
          <p className="text-xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
            {t('Готовые интерфейсы, понятный API и документация. Подключите WABase своим клиентам за несколько дней — без блокировок, с поддержкой и закрывающими документами для бухгалтерии РК.', 'Ready-made interfaces, clear API, and documentation. Connect WABase to your clients in just a few days — without blocks, with support, and with closing documents for accounting.')}
          </p>
        </div>

        {/* 4 Selling points */}
        <div className="grid md:grid-cols-4 gap-8 mb-24">
          {[
            { icon: Zap, color: 'text-amber-400', title: t('Готовые интерфейсы, понятные API и документация:', 'Ready interfaces, clear APIs, and documentation:'), text: t('интеграцию сделает даже один разработчик', 'even a single developer can handle the integration') },
            { icon: Heart, color: 'text-rose-400', title: t('Персональный менеджер проведёт за руку', 'Personal manager will guide you'), text: t('от «куда жать» до «всё работает»', 'from "where to click" to "everything is working"') },
            { icon: HeadphonesIcon, color: 'text-blue-400', title: t('Поддержка 24/7 разберётся с вопросами', '24/7 support will answer questions'), text: t('ваших клиентов про интеграцию', 'of your clients regarding integration') },
            { icon: FileCheck, color: 'text-emerald-400', title: t('Договоры, акты и счета — на нас.', 'Contracts, acts, and invoices - on us.'), text: t('Бухгалтерия будет в восторге', 'Accounting will be thrilled') }
          ].map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors"
            >
              <item.icon className={`w-8 h-8 mb-4 ${item.color}`} />
              <p className="text-sm font-light leading-relaxed">
                <span className="font-medium text-white">{item.title}</span> {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* В цифрах */}
        <div className="mb-24">
          <h3 className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-8 border-b border-white/10 pb-4">{t('Wabase в цифрах', 'WABASE in numbers')}</h3>
          <div className="grid md:grid-cols-3 gap-6 bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 md:p-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-4">1 300+</div>
              <div className="text-white font-medium mb-2">{t('компаний используют WABase', 'companies use WABase')}</div>
              <div className="text-sm text-slate-400">{t('в Казахстане и СНГ', 'in Kazakhstan and the CIS')}</div>
            </div>
            <div className="text-center border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0">
              <div className="text-5xl font-bold text-emerald-400 mb-4">5 {t('мин', 'min')}</div>
              <div className="text-white font-medium mb-2">{t('подключение под ключ', 'turnkey connection')}</div>
              <div className="text-sm text-slate-400">{t('официальный канал Meta, без блокировок', 'official Meta channel, no blocks')}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-4">34</div>
              <div className="text-white font-medium mb-2">{t('технических партнёров', 'technical partners')}</div>
              <div className="text-sm text-slate-400">{t('CRM, ERP, отраслевые SaaS', 'CRM, ERP, industry-specific SaaS')}</div>
            </div>
          </div>
        </div>

        {/* Вознаграждение */}
        <div className="mb-24">
          <h3 className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-8 border-b border-white/10 pb-4">{t('Партнёрское вознаграждение', 'Partner reward')}</h3>
          <div className="grid md:grid-cols-2 bg-gradient-to-r from-emerald-600 to-emerald-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12 border-b md:border-b-0 md:border-r border-white/20 text-center">
              <div className="text-6xl font-bold text-white mb-4">{t('до', 'up to')} 50%</div>
              <div className="text-xl text-emerald-100 mb-4 font-medium">{t('с каждой оплаты', 'from each payment')}</div>
              <div className="text-sm text-emerald-200/80">{t('после подключения 1 пользователя', 'after connecting 1 user')}</div>
            </div>
            <div className="p-12 text-center flex flex-col justify-center">
              <div className="text-6xl font-bold text-white mb-4">10%</div>
              <div className="text-xl text-emerald-100 mb-4 font-medium">{t('с каждой оплаты шаблона WABA', 'from each WABA template payment')}</div>
              <div className="text-sm text-emerald-200/80">{t('постоянный доход — пока клиент пользуется WABase', 'constant income — as long as the client uses WABase')}</div>
            </div>
          </div>
        </div>

        {/* Условия */}
        <div className="mb-24">
          <h3 className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-8 border-b border-white/10 pb-4">{t('Условия партнёрства', 'Partnership Terms')}</h3>
          <h2 className="text-3xl font-bold text-white mb-8">{t('Что получает технический партнёр', 'What the technical partner receives')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="text-xl font-bold text-white">{t('API и готовые интерфейсы', 'API and ready interfaces')}</h4>
              </div>
              <p className="text-slate-400 font-light leading-relaxed">
                {t('REST API + webhooks, готовый виджет веб-чата для встраивания, SDK для популярных стеков. Sandbox для тестирования.', 'REST API + webhooks, ready-made web chat widget for embedding, SDK for popular stacks. Sandbox for testing.')}
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="text-xl font-bold text-white">{t('Персональный менеджер', 'Personal manager')}</h4>
              </div>
              <p className="text-slate-400 font-light leading-relaxed">
                {t('Сопровождение интеграции от первого вызова API до продакшена. Помощь с онбордингом ваших первых клиентов.', 'Support of integration from the first API call to production. Help with onboarding your first clients.')}
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <HeadphonesIcon className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="text-xl font-bold text-white">{t('Поддержка 24/7', '24/7 Support')}</h4>
              </div>
              <p className="text-slate-400 font-light leading-relaxed">
                {t('Ваши клиенты пишут в нашу поддержку — мы разбираемся с вопросами по интеграции, рассылкам, шаблонам Meta.', 'Your clients write to our support — we sort out questions on integration, newsletters, and Meta templates.')}
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Receipt className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="text-xl font-bold text-white">{t('Документы для РК', 'Documents for local accounting')}</h4>
              </div>
              <p className="text-slate-400 font-light leading-relaxed">
                {t('Договор, акты, счёт-фактуры, ЭСФ. Оплата в тенге. Закрывающие документы каждый месяц без напоминаний.', 'Contract, acts, invoices, electronic invoices. Payment in local currency. Closing documents every month without reminders.')}
              </p>
            </div>
          </div>
        </div>

        {/* Кому */}
        <div className="mb-24">
          <h3 className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-8 border-b border-white/10 pb-4">{t('Идеально подходит партнёрам', 'Ideal for partners')}</h3>
          <h2 className="text-3xl font-bold text-white mb-8">{t('Кому WABase даёт', 'To whom WABase gives')} <span className="text-emerald-400">{t('больше всего', 'the most benefit')}</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4 text-emerald-400">
                <Settings className="w-6 h-6" />
                <h4 className="font-bold text-lg text-white">CRM-системы</h4>
              </div>
              <p className="text-slate-400 text-sm font-light">
                {t('amoCRM, Bitrix24, Мегаплан, Planfix и собственные CRM. Клиенты получают встроенный канал в карточках сделок.', 'amoCRM, Bitrix24, Megaplan, Planfix, and custom CRMs. Clients get a built-in channel directly in deal cards.')}
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4 text-emerald-400">
                <TerminalSquare className="w-6 h-6" />
                <h4 className="font-bold text-lg text-white">{t('Отраслевые SaaS', 'Industry SaaS')}</h4>
              </div>
              <p className="text-slate-400 text-sm font-light">
                {t('Платформы для салонов, клиник, образования, авто и e-commerce. WhatsApp как нативная часть продукта.', 'Platforms for salons, clinics, education, auto, and e-commerce. WhatsApp as a native part of the product.')}
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4 text-emerald-400">
                <MessageSquareCode className="w-6 h-6" />
                <h4 className="font-bold text-lg text-white">{t('Чат-боты и AI-агенты', 'Chatbots and AI agents')}</h4>
              </div>
              <p className="text-slate-400 text-sm font-light">
                {t('Конструкторы ботов, AI-сервисы для автоматизации продаж и поддержки. WABase как бэкенд для WhatsApp.', 'Bot builders, AI services for chat automation and support. WABase as a backend for WhatsApp.')}
              </p>
            </div>
          </div>
        </div>

        {/* 4 Шага */}
        <div className="mb-24">
          <h3 className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-8 border-b border-white/10 pb-4">{t('Как стать партнёром', 'How to become a partner')}</h3>
          <h2 className="text-3xl font-bold text-white mb-12">4 {t('шага до', 'steps to')} <span className="text-emerald-400">{t('первого клиента', 'the first client')}</span></h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="h-1 w-full bg-emerald-500/20 absolute top-0 left-0 hidden md:block" />
              <div className="text-emerald-400 font-bold mb-4 pt-4 md:border-t-4 border-emerald-500">01</div>
              <h4 className="text-white font-bold mb-2">{t('Заявка', 'Application')}</h4>
              <p className="text-sm text-slate-400 font-light">{t('Пишете нам, обсуждаем ваш продукт и аудиторию. 30 минут разговора.', 'You write to us, we discuss your product and audience. 30 minutes of conversation.')}</p>
            </div>
            <div className="relative">
              <div className="h-1 w-full bg-emerald-500/20 absolute top-0 left-0 hidden md:block" />
              <div className="text-emerald-400 font-bold mb-4 pt-4 md:border-t-4 border-emerald-500">02</div>
              <h4 className="text-white font-bold mb-2">{t('Договор', 'Contract')}</h4>
              <p className="text-sm text-slate-400 font-light">{t('Подписываем партнёрское соглашение. Доступ к sandbox API и документации.', 'We sign a partnership agreement. Access to sandbox API and documentation.')}</p>
            </div>
            <div className="relative">
              <div className="h-1 w-full bg-emerald-500/20 absolute top-0 left-0 hidden md:block" />
              <div className="text-emerald-400 font-bold mb-4 pt-4 md:border-t-4 border-emerald-500">03</div>
              <h4 className="text-white font-bold mb-2">{t('Интеграция', 'Integration')}</h4>
              <p className="text-sm text-slate-400 font-light">{t('Ваш разработчик встраивает WABase в продукт. Менеджер сопровождает.', 'Your developer integrates WABase into your product. Manager provides support.')}</p>
            </div>
            <div className="relative">
              <div className="h-1 w-full bg-emerald-500/20 absolute top-0 left-0 hidden md:block" />
              <div className="text-emerald-400 font-bold mb-4 pt-4 md:border-t-4 border-emerald-500">04</div>
              <h4 className="text-white font-bold mb-2">{t('Запуск', 'Launch')}</h4>
              <p className="text-sm text-slate-400 font-light">{t('Подключаете первых клиентов. Получаете партнёрские выплаты ежемесячно.', 'Connect your first clients. Receive partner payouts monthly.')}</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-[#103E33] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5 shadow-2xl">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-emerald-500/20 overflow-hidden shrink-0 border-2 border-emerald-500/50 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8c1c?w=120&h=120&fit=crop&q=80" alt="Kenzhe avatar" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Кенже</h3>
              <p className="text-emerald-300 text-sm mb-4">{t('Партнёрский менеджер', 'Partnership Manager')} · WABase</p>
              <p className="text-emerald-50 max-w-md font-light leading-relaxed">
                {t('Расскажу, как интегрироваться и запустить первых клиентов. Подготовлю договор и дам доступ к sandbox в день обращения.', 'I will tell you how to integrate and launch your first clients. I will prepare the contract and provide access to the sandbox on the day of the request.')}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-auto shrink-0">
            <a href="https://wa.me/77052563483" target="_blank" rel="noreferrer" className="bg-white hover:bg-slate-100 text-[#103E33] font-bold py-3 px-8 rounded-full flex items-center justify-center gap-2 transition-colors">
              <MessageSquareCode className="w-5 h-5 text-emerald-600" /> {t('Написать в WhatsApp', 'Message on WhatsApp')}
            </a>
            <a href="https://t.me/Jyxndhos" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-full border border-white/20 flex items-center justify-center gap-2 transition-colors">
              Telegram · @Jyxndhos
            </a>
            <div className="text-center text-emerald-200/60 text-sm mt-2">
              +7 705 256 3483
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
