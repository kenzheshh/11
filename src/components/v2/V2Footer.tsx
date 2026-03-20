import React from 'react';
import Logo from '../Logo';

export default function V2Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Logo className="w-6 h-6 text-emerald-400" />
              <span className="font-bold text-lg tracking-tight text-white">Wa<span className="text-emerald-400">Base</span></span>
            </div>
            <p className="text-sm">
              Официальный WhatsApp Business API для вашего бизнеса. Без банов, с интеллектом.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Возможности</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Интеграции</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Тарифы</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Безопасность</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Ресурсы</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Документация</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Кейсы</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">База знаний</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Поддержка</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Sales</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Партнерская программа</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} WaBase. Все права защищены.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-emerald-400 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
