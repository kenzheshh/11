import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Анна Смирнова",
      role: "Владелец сети салонов красоты",
      image: "https://picsum.photos/seed/anna/100/100",
      text: "Раньше теряли по 2 номера в месяц из-за банов. С WaBase перешли на официальный канал за день, а ИИ-суфлер разгрузил админа. Выручка с рассылок +30%.",
      rating: 5,
    },
    {
      id: 2,
      name: "Игорь Петров",
      role: "Директор агентства недвижимости",
      image: "https://picsum.photos/seed/igor/100/100",
      text: "Интеграция с amoCRM работает как часы. Менеджеры больше не путаются в диалогах, а клиенты получают ответы мгновенно. Лучшее решение на рынке.",
      rating: 5,
    },
    {
      id: 3,
      name: "Елена Иванова",
      role: "Руководитель отдела продаж",
      image: "https://picsum.photos/seed/elena/100/100",
      text: "Массовые рассылки без страха блокировки — это то, что нам было нужно. Конверсия выросла в 2 раза, а затраты на рекламу снизились.",
      rating: 5,
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            Реальные результаты наших клиентов
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Узнайте, как WaBase помогает бизнесу расти и автоматизировать продажи.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-gray-100 relative group hover:-translate-y-2 transition-transform"
            >
              <Quote className="w-10 h-10 text-brand/20 absolute top-6 right-6 group-hover:text-brand/40 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
