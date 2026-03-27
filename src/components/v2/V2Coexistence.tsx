import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Server, RefreshCw, ShieldCheck, Bot, Phone } from 'lucide-react';

export default function V2Coexistence() {
  return (
    <div className="bg-[#050505] py-32 relative overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-emerald-500/20">
              <RefreshCw className="w-4 h-4" />
              WhatsApp Coexistence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white leading-tight">
              Один номер. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Два интерфейса.</span>
            </h2>
            <p className="text-lg text-slate-400 font-light mb-8 leading-relaxed">
              Официальная функция Meta, позволяющая использовать один и тот же номер телефона одновременно в приложении WhatsApp Business и через Cloud API (WABA).
            </p>
            
            <ul className="space-y-6 mb-10">
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-emerald-400">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Гибридный режим</h4>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">Продолжайте вести личные диалоги через телефон, в то время как боты или CRM обрабатывают автоматические запросы.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-cyan-400">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Единая история</h4>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">Переписки в мобильном приложении и через API полностью синхронизируются. Вы не потеряете ни одного сообщения.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-purple-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Безопасность и экономия</h4>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">Снижается риск блокировки номера при автоматизации. Идеально для компаний, которые хотят внедрять WABA, но не готовы отказываться от приложения.</p>
                </div>
              </li>
            </ul>

            <button onClick={() => window.dispatchEvent(new CustomEvent('open-amo-modal'))} className="flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors group">
              Узнать подробнее о Coexistence
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 blur-3xl rounded-full" />
            
            <div className="relative glass-panel rounded-3xl p-8 border border-white/10">
              <div className="flex flex-col items-center gap-8">
                
                {/* Top: The Number */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4 z-10 w-full max-w-sm">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">+7 (999) 123-45-67</div>
                    <div className="text-sm text-slate-400">Единый номер компании</div>
                  </div>
                </div>

                {/* Connecting Lines & Sync */}
                <div className="flex w-full justify-center items-center relative h-12">
                  {/* Vertical line from top */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-emerald-500/50 to-cyan-500/50" />
                  {/* Horizontal line to split */}
                  <div className="absolute top-1/2 left-[25%] right-[25%] h-px bg-gradient-to-r from-emerald-500/50 via-cyan-500/50 to-emerald-500/50" />
                  {/* Vertical lines down to boxes */}
                  <div className="absolute top-1/2 left-[25%] w-px h-1/2 bg-emerald-500/50" />
                  <div className="absolute top-1/2 right-[25%] w-px h-1/2 bg-cyan-500/50" />

                  <div className="z-10 bg-[#0a0a0a] p-2.5 rounded-full border border-white/10 shadow-lg">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <RefreshCw className="w-5 h-5 text-emerald-400" />
                    </motion.div>
                  </div>
                </div>

                {/* Bottom: Two Interfaces */}
                <div className="flex w-full gap-4 z-10">
                  <div className="flex-1 bg-black/40 border border-white/5 rounded-2xl p-5 text-center relative overflow-hidden">
                    <Smartphone className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                    <div className="text-base font-medium text-white mb-1">WA Business App</div>
                    <div className="text-sm text-slate-500">Ручное общение</div>
                  </div>
                  <div className="flex-1 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 text-center shadow-[0_0_30px_rgba(16,185,129,0.15)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/20 blur-xl rounded-full" />
                    <Server className="w-8 h-8 text-emerald-400 mx-auto mb-3 relative z-10" />
                    <div className="text-base font-medium text-white mb-1 relative z-10">Cloud API (WABA)</div>
                    <div className="text-sm text-emerald-400/80 relative z-10">Боты и CRM</div>
                  </div>
                </div>

                <div className="w-full text-center mt-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400">
                    <RefreshCw className="w-3 h-3" />
                    Мгновенная синхронизация истории
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
