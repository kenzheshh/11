import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, ShieldCheck, Plug, Rocket } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function V2Process() {
  const { t } = useLanguage();

  const steps = [
    {
      title: t('Заявка и аудит', 'Application and audit'),
      description: t('Оставляете заявку. Мы анализируем ваши текущие процессы и подбираем оптимальный тариф.', 'Leave an application. We analyze your current processes and select the optimal plan.'),
      icon: ClipboardList
    },
    {
      title: t('Верификация Meta', 'Meta Verification'),
      description: t('Помогаем пройти проверку бизнеса в Facebook Business Manager и получить зеленую галочку.', 'We help you pass business verification in Facebook Business Manager and get the green checkmark.'),
      icon: ShieldCheck
    },
    {
      title: t('Интеграция', 'Integration'),
      description: t('Подключаем номер к WhatsApp Business API и настраиваем интеграцию с вашей CRM.', 'We connect the number to WhatsApp Business API and set up integration with your CRM.'),
      icon: Plug
    },
    {
      title: t('Обучение и запуск', 'Training and launch'),
      description: t('Проводим онбординг для вашей команды. Вы начинаете делать рассылки и общаться с клиентами без риска блокировок.', 'We conduct onboarding for your team. You start sending campaigns and communicating with customers without the risk of blocking.'),
      icon: Rocket
    }
  ];
  return (
    <div className="bg-[#050505] py-32 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            {t('Как подключить', 'How to connect')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">WABA</span> {t('через WABase', 'via WABase')}
          </h2>
          <p className="text-xl text-slate-400 font-light">
            {t('Прозрачный процесс от заявки до первых сообщений вашим клиентам. Мы берем всю техническую часть на себя.', 'A transparent process from application to the first messages to your clients. We take care of all the technical parts.')}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -right-2 w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 font-bold text-sm z-20 group-hover:text-emerald-400 transition-colors">
                  {index + 1}
                </div>

                {/* Icon Container */}
                <div className="w-24 h-24 rounded-3xl glass-panel flex items-center justify-center mb-6 relative group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute inset-0 bg-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <step.icon className="w-10 h-10 text-emerald-400 relative z-10" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-slate-400 font-light mb-4 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <button onClick={() => window.dispatchEvent(new CustomEvent('open-amo-modal'))} className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold text-lg transition-all backdrop-blur-md">
            Оставить заявку на подключение
          </button>
        </div>
      </div>
    </div>
  );
}
