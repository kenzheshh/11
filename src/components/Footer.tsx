import Logo from './Logo';
import { CreditCard, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Logo className="w-8 h-8" />
              <span className="font-bold text-xl tracking-tight text-white">Wa<span className="text-brand">Base</span></span>
            </div>
            <p className="text-sm max-w-xs">
              Официальный провайдер WhatsApp Business API. Надежное решение для бизнеса в Казахстане и СНГ.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold">Способы оплаты</h4>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-700">
                <div className="w-5 h-5 bg-[#F14635] rounded-full flex items-center justify-center text-white font-bold text-[10px] leading-none tracking-tighter">K</div>
                <span className="text-sm font-medium text-white">Kaspi Pay</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-700">
                <CreditCard size={16} className="text-blue-400" />
                <span className="text-sm font-medium text-white">Visa / Mastercard</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-700">
                <FileText size={16} className="text-emerald-400" />
                <span className="text-sm font-medium text-white">Счет для ТОО/ИП (ЭДО)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Возможности</a>
            <a href="#" className="hover:text-white transition-colors">Интеграции</a>
            <a href="#" className="hover:text-white transition-colors">Тарифы</a>
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
          </div>

          <div className="text-sm">
            &copy; {new Date().getFullYear()} WaBase. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
}
