import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, ArrowRight, Shield } from 'lucide-react';

export default function V2Pricing() {
  return (
    <div className="bg-[#050505] text-slate-300 py-32 relative overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

      {/* Screen 5: Pricing */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 relative z-10" id="pricing">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">Тарифы <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">WABA</span></h2>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">Выберите план, который подходит вашему бизнесу. Никаких скрытых платежей.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Старт",
              price: "24 990",
              currency: " ₸/мес",
              desc: "Для базовых массовых рассылок",
              features: ["Без интерфейса", "Без интеграций", "Только массовые рассылки", "Базовая поддержка"],
              buttonText: "Выбрать тариф"
            },
            {
              name: "Бизнес",
              price: "39 990",
              currency: " ₸/мес",
              desc: "Для постоянной коммуникации с клиентами",
              popular: true,
              features: ["До 10 операторов", "Массовые рассылки", "Интеграция с CRM", "Приоритетная поддержка"],
              buttonText: "Выбрать тариф"
            },
            {
              name: "Enterprise",
              price: "Индивидуально",
              currency: "",
              desc: "Для крупных отделов продаж",
              features: ["Безлимитные номера", "Безлимитные операторы", "Выделенный менеджер", "SLA 99.9%"],
              buttonText: "Связаться с нами"
            }
          ].map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-8 md:p-10 flex flex-col ${plan.popular ? 'bg-gradient-to-b from-emerald-500/10 to-transparent border border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.1)]' : 'bg-white/5 border border-white/10 backdrop-blur-xl'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 px-6 py-1.5 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                  Хит продаж
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
              <p className="text-slate-400 mb-8 font-light">{plan.desc}</p>
              <div className="mb-8">
                <span className={`font-bold tracking-tight text-white ${plan.price === 'Индивидуально' ? 'text-3xl' : 'text-5xl'}`}>{plan.price}</span>
                <span className="text-slate-400 ml-1">{plan.currency}</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-300 font-light">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-emerald-400' : 'text-slate-500'}`} />
                    {feat}
                  </li>
                ))}
              </ul>
              <button onClick={() => window.dispatchEvent(new CustomEvent('open-amo-modal'))} className={`w-full py-4 rounded-xl font-bold text-lg transition-all mt-auto ${plan.popular ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-1' : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'}`}>
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Screen 6: Final CTA */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="glass-panel rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(16,185,129,0.15)_0%,_transparent_70%)]" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Готовы работать с <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">WABA?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light">
              Оставьте заявку прямо сейчас и подключите официальный WhatsApp для вашего бизнеса.
            </p>
            <button onClick={() => window.dispatchEvent(new CustomEvent('open-amo-modal'))} className="bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] flex items-center gap-3 mx-auto group hover:-translate-y-1">
              Подключить WABA
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
