import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from '../Logo';

export default function V2Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <Logo className="w-8 h-8 text-emerald-400" />
            <span className="font-bold text-xl tracking-tight text-white">Wa<span className="text-emerald-400">Base</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">Возможности</a>
            <a href="#integrations" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">Интеграции</a>
            <a href="#pricing" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">Тарифы</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Войти</button>
            <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              Попробовать бесплатно
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
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
          className="md:hidden bg-slate-900 border-b border-white/5 px-4 pt-2 pb-4 space-y-1"
        >
          <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-800">Возможности</a>
          <a href="#integrations" className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-800">Интеграции</a>
          <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-800">Тарифы</a>
          <div className="pt-4 flex flex-col gap-2">
            <button className="w-full text-center px-4 py-2 border border-slate-700 rounded-lg text-base font-medium text-slate-300">Войти</button>
            <button className="w-full text-center bg-emerald-500 text-white px-4 py-2 rounded-lg text-base font-medium">Попробовать бесплатно</button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
