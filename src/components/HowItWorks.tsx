import { motion } from 'motion/react';
import { UserPlus, Phone, Rocket, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="w-6 h-6 text-brand" />,
      title: "Регистрация",
      time: "1 мин",
      desc: "Создайте аккаунт в нашей системе."
    },
    {
      icon: <Phone className="w-6 h-6 text-brand" />,
      title: "Привязка номера",
      time: "5 мин",
      desc: "Пройдите авторизацию через встроенное окно Facebook (Embedded Signup)."
    },
    {
      icon: <Rocket className="w-6 h-6 text-brand" />,
      title: "Вы в эфире",
      time: "Сразу",
      desc: "Добавьте коллег, загрузите базу и запустите первую рассылку."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Запуск быстрее, чем вы выпьете кофе ☕
          </h2>
          <div className="inline-flex items-center gap-2 bg-brand-light text-brand px-4 py-2 rounded-full text-sm font-medium">
            <CheckCircle2 className="w-4 h-4" />
            Помогаем с верификацией Meta бесплатно
          </div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 bg-brand text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
                    {step.time}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Шаг {i + 1}: {step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
