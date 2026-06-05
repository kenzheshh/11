import React from 'react';
import Logo from '../Logo';
import { useLanguage } from '../../contexts/LanguageContext';

export default function V2Footer() {
  const { t, localePath } = useLanguage();
  return (
    <footer className="bg-[#050505] text-slate-400 py-16 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[200px] bg-emerald-900/5 blur-[50px] md:blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <Logo className="w-8 h-8 text-emerald-400" />
          <span className="font-display font-bold text-2xl tracking-tight text-white">Wa<span className="text-emerald-400">Base</span></span>
        </div>
        <p className="text-sm font-light leading-relaxed max-w-xs mb-12">
          {t('Официальный WhatsApp Business API для вашего бизнеса.', 'Official WhatsApp Business API for your business.', 'La API oficial de WhatsApp Business para tu negocio.')}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 mb-16">
          <div>
            <h3 className="text-white font-semibold mb-6">{t('Продукт', 'Product', 'Producto')}</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><a href={localePath('/#features')} className="hover:text-emerald-400 transition-colors">{t('Возможности', 'Features', 'Funciones')}</a></li>
              <li><a href={localePath('/#cases')} className="hover:text-emerald-400 transition-colors">{t('Кейсы', 'Cases', 'Casos')}</a></li>
              <li><a href={localePath('/#pricing')} className="hover:text-emerald-400 transition-colors">{t('Тарифы', 'Pricing', 'Precios')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">{t('Интеграции', 'Integrations', 'Integraciones')}</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><a href={localePath('/integrations/amocrm')} className="hover:text-emerald-400 transition-colors">amoCRM</a></li>
              <li><a href={localePath('/integrations/bitrix24')} className="hover:text-emerald-400 transition-colors">Битрикс24</a></li>
              <li><a href={localePath('/integrations/1c')} className="hover:text-emerald-400 transition-colors">1С</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">{t('Сравнения', 'Compare', 'Comparativas')}</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><a href={localePath('/compare/wazzup')} className="hover:text-emerald-400 transition-colors">vs Wazzup</a></li>
              <li><a href={localePath('/compare/green-api')} className="hover:text-emerald-400 transition-colors">vs Green API</a></li>
              <li><a href={localePath('/compare/wappi')} className="hover:text-emerald-400 transition-colors">vs Wappi</a></li>
              <li><a href={localePath('/compare/radist')} className="hover:text-emerald-400 transition-colors">vs Radist</a></li>
              <li><a href={localePath('/compare/wati')} className="hover:text-emerald-400 transition-colors">vs Wati</a></li>
              <li><a href={localePath('/compare/gupshup')} className="hover:text-emerald-400 transition-colors">vs Gupshup</a></li>
              <li><a href={localePath('/compare/interakt')} className="hover:text-emerald-400 transition-colors">vs Interakt</a></li>
              <li><a href={localePath('/compare/360dialog')} className="hover:text-emerald-400 transition-colors">vs 360dialog</a></li>
              <li><a href={localePath('/compare/aisensy')} className="hover:text-emerald-400 transition-colors">vs AiSensy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">{t('Ресурсы', 'Resources', 'Recursos')}</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="/blog" className="hover:text-emerald-400 transition-colors">{t('Блог', 'Blog', 'Blog')}</a></li>
              <li><a href={localePath('/partnership/')} className="hover:text-emerald-400 transition-colors">{t('Партнёрская программа', 'Partnership program', 'Programa de socios')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">{t('Контакты', 'Contacts', 'Contacto')}</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="https://wa.me/77052563483" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">{t('Поддержка', 'Support', 'Soporte')} (WhatsApp)</a></li>
              <li><a href="https://t.me/Jyxndhos" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">Sales (Telegram)</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light">
          <p>© {new Date().getFullYear()} WaBase. {t('Все права защищены.', 'All rights reserved.', 'Todos los derechos reservados.')}</p>
          <div className="flex gap-6">
            <a href={localePath('/privacy/')} className="hover:text-emerald-400 transition-colors">{t('Политика конфиденциальности', 'Privacy policy', 'Política de privacidad')}</a>
            <a href={localePath('/terms/')} className="hover:text-emerald-400 transition-colors">{t('Условия использования', 'Terms of use', 'Términos de uso')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
