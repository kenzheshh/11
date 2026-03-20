import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Bot, Zap, Tags, FileText, Sparkles } from 'lucide-react';

export default function AIFeatures() {
  const [isGenerating, setIsGenerating] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsGenerating(prev => !prev);
    }, 4000); // Toggle every 4 seconds
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Zap size={24} />,
      title: "Анализирует контекст",
      description: "и предлагает идеальный вариант ответа.",
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      icon: <Tags size={24} />,
      title: "Автоматически тегирует",
      description: "клиентов (например: «VIP», «Интересуется доставкой»).",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: <FileText size={24} />,
      title: "Делает саммари",
      description: "длинных голосовых сообщений за секунду.",
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 font-medium mb-6">
                <Bot size={18} />
                <span>Продукт 2026 года</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Ваш ИИ-суфлер: <br/>
                <span className="text-indigo-600">отвечает в 2 раза быстрее, продает в 2 раза чаще.</span>
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Освободите менеджеров от рутины. Наш встроенный ИИ-ассистент:
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className={`mt-1 p-3 rounded-2xl ${feature.bg} ${feature.color}`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                      <p className="text-slate-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Visual / Illustration */}
          <div className="md:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl bg-slate-50 border border-slate-200 p-8 shadow-2xl"
            >
              {/* Mockup of AI Chat Interface */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0" />
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 text-sm text-slate-700">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-slate-400">Голосовое сообщение (1:45)</span>
                    </div>
                    <div className="w-48 h-8 bg-slate-100 rounded-full flex items-center px-3">
                      <div className="w-full h-1 bg-slate-300 rounded-full overflow-hidden">
                        <div className="w-1/3 h-full bg-brand" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Summary */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="ml-11 bg-indigo-50 border border-indigo-100 p-3 rounded-2xl shadow-sm relative"
                >
                  <div className="absolute -left-3 top-3 text-indigo-500 bg-white rounded-full p-0.5 shadow-sm border border-indigo-100">
                    <Bot size={14} />
                  </div>
                  <p className="text-xs font-medium text-indigo-800 mb-1">✨ AI Саммари:</p>
                  <p className="text-sm text-indigo-900">Клиент интересуется доставкой в субботу и просит скидку на второй товар. Готов оплатить сегодня.</p>
                </motion.div>

                {/* AI Suggestion */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="ml-11 mt-4 min-h-[160px]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-xs text-slate-400">Предлагаемые ответы:</p>
                    {isGenerating && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles size={14} className="text-indigo-500" />
                      </motion.div>
                    )}
                  </div>

                  {isGenerating ? (
                    <div className="flex flex-col gap-2">
                      <div className="h-[46px] bg-slate-200/50 animate-pulse rounded-xl border border-slate-100" />
                      <div className="h-[46px] bg-slate-200/50 animate-pulse rounded-xl border border-slate-100" />
                      <div className="h-[46px] bg-slate-200/50 animate-pulse rounded-xl border border-slate-100" />
                    </div>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col gap-2"
                    >
                      <button className="text-left bg-white border border-brand/30 hover:border-brand p-3 rounded-xl text-sm text-slate-700 shadow-sm transition-colors flex items-center justify-between group">
                        <span>Да, доставим в субботу. Скидка 10% на второй товар. Оформляем?</span>
                        <Zap size={16} className="text-brand opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                      <button className="text-left bg-white border border-slate-200 hover:border-brand p-3 rounded-xl text-sm text-slate-700 shadow-sm transition-colors flex items-center justify-between group">
                        <span>К сожалению, доставка только в будни. Оформить на понедельник?</span>
                        <Zap size={16} className="text-brand opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                      <button className="text-left bg-white border border-slate-200 hover:border-brand p-3 rounded-xl text-sm text-slate-700 shadow-sm transition-colors flex items-center justify-between group">
                        <span>Скидка 10% действует при заказе от 3х товаров. Добавить еще один?</span>
                        <Zap size={16} className="text-brand opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
