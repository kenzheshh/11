import { motion } from 'motion/react';
import { Ban, EyeOff, Snail } from 'lucide-react';

export default function PainPoints() {
  const points = [
    {
      icon: <Ban className="w-8 h-8 text-red-500" />,
      title: "Риск блокировки",
      desc: "Одно неверное слово в рассылке — и номер банят навсегда вместе с базой клиентов.",
      bg: "bg-red-50"
    },
    {
      icon: <EyeOff className="w-8 h-8 text-gray-500" />,
      title: "Слепая зона",
      desc: "Менеджеры общаются с личных телефонов. Вы не знаете, что они пишут и как быстро отвечают.",
      bg: "bg-gray-100"
    },
    {
      icon: <Snail className="w-8 h-8 text-orange-500" />,
      title: "Медленная работа",
      desc: "Нет интеграции с CRM, шаблонов и автоответов. Клиенты уходят к конкурентам.",
      bg: "bg-orange-50"
    }
  ];

  return (
    <section className="py-24 relative border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Обычный WhatsApp тормозит ваши продажи
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className={`w-16 h-16 rounded-2xl ${point.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
