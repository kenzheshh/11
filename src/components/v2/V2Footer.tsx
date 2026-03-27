import React from 'react';
import Logo from '../Logo';

export default function V2Footer() {
  return (
    <footer className="bg-[#050505] text-slate-400 py-16 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[200px] bg-emerald-900/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Logo className="w-8 h-8 text-emerald-400" />
              <span className="font-display font-bold text-2xl tracking-tight text-white">Wa<span className="text-emerald-400">Base</span></span>
            </div>
            <p className="text-sm font-light leading-relaxed">
              Официальный WhatsApp Business API для вашего бизнеса. Без блокировок.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Продукт</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Возможности</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Интеграции</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Тарифы</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Безопасность</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Ресурсы</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Документация</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Кейсы</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">База знаний</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Контакты</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Поддержка</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Sales</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Партнерская программа</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light">
          <p>© {new Date().getFullYear()} WaBase. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-400 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
