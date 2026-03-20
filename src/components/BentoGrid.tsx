import { motion } from 'motion/react';
import { Users, Send, Sparkles, Wallet, Plus, ChevronDown } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Всё, что нужно для продаж. <span className="text-brand">И даже больше.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Large Cell: Team Inbox */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 bg-gray-50 rounded-3xl p-8 border border-gray-100 overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 max-w-md">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-brand">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Командный Inbox</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Распределяйте диалоги, ставьте теги и оставляйте внутренние заметки прямо во время общения.
              </p>
            </div>
            {/* Mockup */}
            <div className="absolute -right-10 -bottom-10 w-[400px] h-[300px] bg-white rounded-tl-2xl shadow-2xl border border-gray-200 p-4 transform group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-500">
              <div className="flex flex-col gap-3">
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Теги</span>
                    <Plus className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium">Покупали в феврале</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md text-xs font-medium">VIP клиент</span>
                  </div>
                </div>
                <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-100">
                  <span className="text-xs font-semibold text-yellow-700 uppercase tracking-wider mb-1 block">Заметка (только для своих)</span>
                  <p className="text-sm text-yellow-800">Обещали скидку 10% на следующий заказ.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Medium Top Right: Broadcasts */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-50 rounded-3xl p-8 border border-gray-100 overflow-hidden relative group"
          >
            <div className="relative z-10">
              <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 text-brand">
                <Send className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Легальные рассылки</h3>
              <p className="text-sm text-gray-600">
                Отправляйте тысячи сообщений по базе без страха блокировки. 100% Inbox.
              </p>
            </div>
            {/* Mockup */}
            <div className="absolute -bottom-8 -right-8 w-full h-32 bg-white rounded-tl-2xl shadow-xl border border-gray-200 p-4 transform group-hover:-translate-y-2 transition-transform duration-500">
              <div className="flex justify-between items-end h-full pb-2">
                <div className="w-8 bg-brand/20 rounded-t-md h-[40%]" />
                <div className="w-8 bg-brand/40 rounded-t-md h-[70%]" />
                <div className="w-8 bg-brand/60 rounded-t-md h-[85%]" />
                <div className="w-8 bg-brand rounded-t-md h-[100%] relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-brand">98%</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Medium Bottom Right: AI Magic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-brand text-white rounded-3xl p-8 border border-brand-hover overflow-hidden relative group"
          >
            <div className="relative z-10">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Магия ИИ-суфлера</h3>
              <p className="text-sm text-brand-light">
                Ваш персональный копирайтер прямо в строке чата.
              </p>
            </div>
            {/* Mockup */}
            <div className="absolute -bottom-4 -right-4 w-[110%] bg-white/10 backdrop-blur-md rounded-tl-2xl border border-white/20 p-3 transform group-hover:-translate-y-2 transition-transform duration-500">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-white hover:bg-white/10 p-2 rounded-lg cursor-pointer transition-colors">
                  <Sparkles className="w-4 h-4" /> Улучшить текст
                </div>
                <div className="flex items-center gap-2 text-sm text-white hover:bg-white/10 p-2 rounded-lg cursor-pointer transition-colors">
                  <Sparkles className="w-4 h-4" /> Сделать короче
                </div>
              </div>
            </div>
          </motion.div>

          {/* Wide Bottom: Balance & Templates */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-3 bg-gray-900 text-white rounded-3xl p-8 border border-gray-800 overflow-hidden relative group flex flex-col md:flex-row items-center justify-between"
          >
            <div className="relative z-10 max-w-lg mb-8 md:mb-0">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Умный баланс и шаблоны</h3>
              <p className="text-gray-400 text-lg">
                Полный контроль над расходами Meta с прозрачной тарификацией.
              </p>
            </div>
            {/* Mockup */}
            <div className="relative z-10">
              <div className="flex items-center bg-gray-800 rounded-2xl border border-gray-700 p-2 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <div className="px-6 py-3 flex items-center gap-3 border-r border-gray-700">
                  <Wallet className="w-5 h-5 text-brand" />
                  <span className="font-mono text-xl font-bold tracking-tight">15 000 ₸</span>
                </div>
                <button className="px-4 py-3 hover:bg-gray-700 rounded-xl transition-colors flex items-center justify-center">
                  <Plus className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
            {/* Decorative background */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand/20 to-transparent opacity-50 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
