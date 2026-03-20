import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <Logo className="w-8 h-8" />
            <span className="font-bold text-xl tracking-tight">Wa<span className="text-brand">Base</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-brand transition-colors">Возможности</a>
            <a href="#integrations" className="text-sm font-medium text-gray-600 hover:text-brand transition-colors">Интеграции</a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-brand transition-colors">Тарифы</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Войти</button>
            <button className="bg-brand hover:bg-brand-hover text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm shadow-brand/20">
              Подключить WABA
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-1"
        >
          <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand hover:bg-gray-50">Возможности</a>
          <a href="#integrations" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand hover:bg-gray-50">Интеграции</a>
          <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand hover:bg-gray-50">Тарифы</a>
          <div className="pt-4 flex flex-col gap-2">
            <button className="w-full text-center px-4 py-2 border border-gray-200 rounded-lg text-base font-medium text-gray-700">Войти</button>
            <button className="w-full text-center bg-brand text-white px-4 py-2 rounded-lg text-base font-medium">Подключить WABA</button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
