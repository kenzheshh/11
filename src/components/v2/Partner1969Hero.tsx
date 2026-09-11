import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { MessageSquareCode, ArrowRight, Sparkles } from 'lucide-react';

export default function Partner1969Hero() {
  const { t } = useLanguage();
  const waText = encodeURIComponent('Здравствуйте! Я от Бюро 1969, хочу подключить WhatsApp Business API.');
  const waLink = `https://wa.me/77017433301?text=${waText}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden bg-grid-pattern">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(6,78,59,0.18)_0%,_rgba(2,44,34,0.1)_50%,_#050505_100%)]" />
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-600/10 blur-[60px] md:blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-900/10 blur-[60px] md:blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 md:px-16 max-w-7xl mx-auto w-full py-24 md:py-32">
        <div className="max-w-4xl flex flex-col items-center">
          {/* Partner Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md mb-6 md:mb-8 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs md:text-sm font-semibold text-emerald-300 uppercase tracking-wide">
              WaBase × Бюро 1969
            </span>
            <span className="text-emerald-500/40">|</span>
            <span className="text-xs md:text-sm text-slate-300 font-medium">
              {t('Спецпредложение для клиентов', 'Special offer for clients')}
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl lg:text-[80px] font-bold tracking-tighter mb-6 md:mb-8 leading-[1.1]">
            {t('Массовые рассылки WhatsApp', 'Bulk WhatsApp messaging')}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400">
              {t('без блокировки', 'without blocks')}
            </span>
          </h1>

          <p className="text-base md:text-2xl text-slate-300 mb-8 md:mb-12 leading-relaxed max-w-2xl font-light">
            {t(
              'Эксклюзивные условия и приоритетное подключение для клиентов Бюро 1969. Подключитесь и перестаньте терять клиентов из-за блокировок.',
              'Exclusive terms and priority onboarding for Bureau 1969 clients. Connect and stop losing leads due to bans.'
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-amo-modal'))}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t('Начать бесплатно', 'Start for free')}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium text-lg border border-white/20 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2.5 backdrop-blur-md"
            >
              <MessageSquareCode className="w-5 h-5 text-emerald-400" />
              <span>{t('Написать в WhatsApp', 'Message on WhatsApp')}</span>
            </a>
          </div>

          {/* Perks quick list */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-2xl w-full">
            <div className="flex items-center gap-2.5 text-sm text-slate-300">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t('0 ₸ за подключение', '0 ₸ onboarding fee')}</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-slate-300">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t('Помощь с верификацией Meta', 'Meta verification help')}</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-slate-300">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t('Приоритетная поддержка', 'Priority support')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
