import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Logo from '../Logo';
import { useLanguage } from '../../contexts/LanguageContext';

export default function V2Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Logo className="w-8 h-8 text-emerald-400" />
            <span className="font-display font-bold text-2xl tracking-tight text-white">Wa<span className="text-emerald-400">Base</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-md">
            <a href="#features" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">{t.nav.features}</a>
            <a href="#integrations" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">{t.nav.process}</a>
            <a href="#pricing" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">{t.nav.pricing}</a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => window.dispatchEvent(new CustomEvent('open-amo-modal'))} className="bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-0.5">
              {t.nav.connect}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050505]/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 pt-4 pb-8 space-y-4">
              <a href="#features" className="block text-lg font-medium text-slate-300 hover:text-emerald-400 transition-colors">{t.nav.features}</a>
              <a href="#integrations" className="block text-lg font-medium text-slate-300 hover:text-emerald-400 transition-colors">{t.nav.process}</a>
              <a href="#pricing" className="block text-lg font-medium text-slate-300 hover:text-emerald-400 transition-colors">{t.nav.pricing}</a>
              <div className="pt-6 flex flex-col gap-4 border-t border-white/10">
                <button onClick={() => window.dispatchEvent(new CustomEvent('open-amo-modal'))} className="w-full text-center bg-emerald-500 text-white py-3 rounded-xl text-base font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)]">{t.nav.connect}</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
