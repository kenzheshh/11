import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Как происходит оплата? Выдаете ли вы закрывающие документы?",
      a: "Да, мы работаем с юридическими лицами (ТОО/ИП) в Казахстане и СНГ. Мы предоставляем полный пакет закрывающих документов (АВР, ЭСФ) через систему электронного документооборота (ЭДО). Оплатить можно по счету на оплату, а также картами Visa, Mastercard или через Kaspi Pay."
    },
    {
      q: "Забанят ли мой номер при переходе?",
      a: "Нет. Ваш номер переходит на официальный API. Вы получаете полную защиту от блокировок, так как работаете по белым правилам Meta."
    },
    {
      q: "Можно ли перенести мой текущий рабочий номер WhatsApp?",
      a: "Да! Главное — удалить приложение WhatsApp Business с телефона перед привязкой. Вся новая переписка будет идти через наш кабинет. (Примечание: старую историю перенести нельзя, мы честно об этом предупреждаем при онбординге)."
    },
    {
      q: "Как списываются деньги за сообщения?",
      a: "Meta берет плату не за каждое сообщение, а за 24-часовую сессию диалога. Входящие (сервисные) стоят копейки, маркетинговые (рассылки) — чуть дороже. В нашем кабинете есть удобный калькулятор."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Часто задаваемые вопросы
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-sm transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-lg text-gray-900 pr-8">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
