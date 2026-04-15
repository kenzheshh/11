import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Михаил Воронов',
    role: 'Руководитель отдела продаж, AutoDealer',
    content: 'Переход на официальный API спас наш отдел продаж. Раньше номера блокировали каждую неделю, мы теряли базу. Сейчас мы делаем рассылки на 10 000 контактов и конверсия выросла на 35% благодаря ИИ-ассистенту.',
    rating: 5,
    avatar: 'М'
  },
  {
    name: 'Елена Смирнова',
    role: 'CEO, BeautyLab',
    content: 'Очень удобное диалоговое окно! Все сообщения из Инсты, Телеграма и Ватсапа падают в одно место. Менеджеры больше не путаются, а я вижу всю аналитику. Подключение заняло реально пару часов.',
    rating: 5,
    avatar: 'Е'
  },
  {
    name: 'Алексей Д.',
    role: 'Основатель, EdTech Platform',
    content: 'Долго сомневались из-за цены за диалоги в WABA, но ребята из WaBase настроили нам правильную маршрутизацию и шаблоны. В итоге стоимость лида упала, а доходимость на вебинары выросла в 2 раза.',
    rating: 5,
    avatar: 'А'
  }
];

export default function V2Testimonials() {
  return (
    <div className="bg-[#050505] py-32 relative overflow-hidden border-t border-white/5" id="cases">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Кейсы</span> клиентов
          </h2>
          <p className="text-xl text-slate-400 font-light">
            Компании, которые уже масштабировали свои продажи с помощью официального WhatsApp Business API.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-panel p-8 rounded-3xl relative flex flex-col"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-emerald-400 text-emerald-400" />
                ))}
              </div>
              
              <p className="text-slate-300 font-light leading-relaxed mb-8 flex-1 relative z-10">
                "{review.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-slate-900 font-bold text-lg">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
