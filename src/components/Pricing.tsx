import { motion } from 'motion/react';
import { Check, Info } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Старт",
      desc: "Для микробизнеса, 1-2 оператора",
      price: "15 000 ₸",
      period: "/мес",
      features: ["Web-чат", "Шаблоны", "Базовая аналитика", "Поддержка по email"],
      highlight: false
    },
    {
      name: "Профи",
      desc: "Самый популярный",
      price: "45 000 ₸",
      period: "/мес",
      features: ["До 10 операторов", "Интеграция с CRM", "ИИ-суфлер", "Продвинутая аналитика", "Приоритетная поддержка"],
      highlight: true
    },
    {
      name: "Enterprise",
      desc: "Кастомные решения",
      price: "По запросу",
      period: "",
      features: ["Неограниченно операторов", "Выделенный менеджер", "SLA 99.9%", "Кастомные интеграции", "Обучение команды"],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 relative border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Честные цены без скрытых платежей
          </h2>
          <p className="text-gray-600 flex items-center justify-center gap-2 max-w-2xl mx-auto">
            <Info className="w-5 h-5 text-brand flex-shrink-0" />
            <span>Вы платите фиксированную цену за нашу платформу + официальный тариф Meta только за начатые диалоги. Мы не берем комиссию сверху.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-white rounded-3xl p-8 shadow-sm border ${plan.highlight ? 'border-brand ring-2 ring-brand/20 relative transform md:-translate-y-4' : 'border-gray-100'} flex flex-col`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                  Хит продаж
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-500 text-sm mb-6 h-10">{plan.desc}</p>
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-gray-900 tracking-tight">{plan.price}</span>
                {plan.period && <span className="text-gray-500 font-medium">{plan.period}</span>}
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${plan.highlight ? 'bg-brand hover:bg-brand-hover text-white shadow-lg shadow-brand/30' : 'bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200'}`}>
                {plan.name === 'Enterprise' ? 'Связаться с нами' : 'Выбрать тариф'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
