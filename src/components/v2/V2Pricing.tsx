import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, ArrowRight, Shield } from 'lucide-react';

export default function V2Pricing() {
  return (
    <div className="bg-white text-slate-900 py-32 relative overflow-hidden">
      {/* Screen 4: Reliability Section */}
      <div className="max-w-7xl mx-auto px-4 mb-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-emerald-100">
            <Shield className="w-4 h-4" />
            Meta Business Partner
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Официально. Безопасно.<br />
            <span className="text-emerald-600">Запуск за 5 минут.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Никаких серых схем. Только белый API, одобренный WhatsApp.
          </p>
        </div>

        {/* Timeline/Progress */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
          <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-slate-200" />
          
          {[
            {
              icon: <ShieldCheck className="w-6 h-6" />,
              title: "Верификация",
              desc: "Помогаем получить зеленую галочку"
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Подключение",
              desc: "Настраиваем интеграцию с вашей CRM"
            },
            {
              icon: <CheckCircle2 className="w-6 h-6" />,
              title: "Запуск",
              desc: "Вы начинаете продавать без риска банов"
            }
          ].map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center z-10"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-slate-500">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Screen 5: Pricing */}
      <div className="max-w-7xl mx-auto px-4 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Простые тарифы для роста</h2>
          <p className="text-slate-600">Выберите план, который подходит вашему бизнесу</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Старт",
              price: "14 990",
              currency: " ₸/мес",
              desc: "Для базовых массовых рассылок",
              features: ["Без интерфейса", "Без интеграций", "Только массовые рассылки", "Базовая поддержка"],
              buttonText: "Выбрать тариф"
            },
            {
              name: "Бизнес",
              price: "34 990",
              currency: " ₸/мес",
              desc: "Хит продаж для активных продаж",
              popular: true,
              features: ["До 3 номеров", "До 10 операторов", "Умный ИИ-ассистент", "Массовые рассылки", "Интеграция с CRM", "Приоритетная поддержка"],
              buttonText: "Выбрать тариф"
            },
            {
              name: "Enterprise",
              price: "Индивидуально",
              currency: "",
              desc: "Для крупных отделов продаж",
              features: ["Безлимитные номера", "Безлимитные операторы", "Кастомные ИИ-модели", "Выделенный менеджер", "SLA 99.9%"],
              buttonText: "Связаться с нами"
            }
          ].map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-3xl p-8 border flex flex-col ${plan.popular ? 'border-emerald-500 shadow-2xl shadow-emerald-500/20' : 'border-slate-200 shadow-lg'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                  Хит продаж
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-slate-500 mb-6">{plan.desc}</p>
              <div className="mb-8">
                <span className={`font-extrabold ${plan.price === 'Индивидуально' ? 'text-3xl' : 'text-4xl'}`}>{plan.price}</span>
                <span className="text-slate-500">{plan.currency}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all mt-auto ${plan.popular ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}>
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Screen 6: Final CTA */}
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#064e3b_0%,_transparent_70%)] opacity-50" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Готовы масштабировать продажи?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Оставьте заявку прямо сейчас и получите бесплатный аудит вашего текущего WhatsApp-маркетинга.
            </p>
            <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] flex items-center gap-3 mx-auto group">
              Начать бесплатно
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-6 text-sm text-slate-400">
              14 дней бесплатно • Без привязки карты • Отмена в любой момент
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
