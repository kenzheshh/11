import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function V2Transformation() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden py-20 md:py-32">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(6,78,59,0.1)_0%,_rgba(2,44,34,0.05)_50%,_#050505_100%)]" />
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-600/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Chat UI Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex justify-center w-full max-w-sm md:max-w-none"
          >
            <div className="relative w-full max-w-[400px] aspect-[9/16] glass-panel rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden p-4">
              <div className="absolute top-0 left-0 right-0 h-12 bg-black/40 backdrop-blur-md border-b border-white/5 flex items-center justify-center">
                <div className="w-16 h-1 bg-white/20 rounded-full" />
              </div>
              <div className="mt-12 space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30" />
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-3 max-w-[80%] text-sm text-slate-200">
                    Здравствуйте! Как подключить WABA?
                  </div>
                </div>
                <div className="flex gap-3 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl rounded-tr-none p-3 max-w-[80%] text-sm text-emerald-50">
                    Привет! Мы поможем вам с регистрацией. Это займет всего 15 минут.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30" />
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-3 max-w-[80%] text-sm text-slate-200">
                    А мой номер не заблокируют?
                  </div>
                </div>
                <div className="flex gap-3 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl rounded-tr-none p-3 max-w-[80%] text-sm text-emerald-50">
                    Нет! WABA — это официальный канал. Блокировки исключены.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 text-left"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 md:mb-8 leading-[1.1] text-white">
              Почему бизнес выбирает <span className="text-emerald-400">WhatsApp Business API</span>
            </h2>
            <p className="text-base md:text-xl text-slate-400 mb-6 md:mb-10 leading-relaxed font-light">
              Забудьте о постоянных блокировках и потере клиентской базы. Официальный WhatsApp Business API — это стабильность и доверие клиентов.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
              {[
                { icon: ShieldCheck, text: 'Никаких блокировок' },
                { icon: Zap, text: 'Мгновенная доставка' },
                { icon: MessageSquare, text: 'Массовые рассылки' },
                { icon: CheckCircle2, text: 'Верификация в Meta' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <item.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-sm md:text-lg font-medium text-slate-300">{item.text}</span>
                </div>
              ))}
            </div>
            <button onClick={() => window.dispatchEvent(new CustomEvent('open-amo-modal'))} className="px-6 md:px-8 py-3 md:py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold text-base md:text-lg transition-all border border-white/10 hover:border-white/20 flex items-center gap-3 group">
              Узнать больше
              <Zap className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
