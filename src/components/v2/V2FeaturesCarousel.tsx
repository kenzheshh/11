import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Users, UserCircle, Phone, Instagram, Search, MoreVertical, Send, Paperclip, CheckCheck, ChevronLeft, Info } from 'lucide-react';

const features = [
  {
    id: 'all-in-one',
    title: 'Все чаты в одном окне',
    description: 'WhatsApp, Telegram, Instagram и другие источники в едином интерфейсе. Менеджерам больше не нужно переключаться между вкладками.',
    icon: MessageSquare,
  },
  {
    id: 'routing',
    title: 'Передача ответственного',
    description: 'Мгновенно переводите диалог на нужного менеджера или отдел. Вся история переписки сохраняется при передаче.',
    icon: Users,
  },
  {
    id: 'crm',
    title: 'Карточка клиента',
    description: 'Вся информация о клиенте, история покупок и теги из CRM отображаются прямо в окне диалога.',
    icon: UserCircle,
  }
];

export default function V2FeaturesCarousel() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const [mobileView, setMobileView] = useState<'list' | 'chat' | 'crm'>('list');

  // Auto-switch mobile view when feature changes
  useEffect(() => {
    if (activeFeature === 'all-in-one') setMobileView('list');
    if (activeFeature === 'routing') setMobileView('chat');
    if (activeFeature === 'crm') setMobileView('crm');
  }, [activeFeature]);

  return (
    <div className="bg-[#050505] py-20 md:py-32 relative overflow-hidden border-t border-white/5" id="features">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Возможности</span> WABase
          </h2>
          <p className="text-xl text-slate-400 font-light">
            Удобное диалоговое окно, которое объединяет все каналы связи, данные из CRM и инструменты командной работы.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:gap-12 items-center">
          {/* Top: Feature Selection (Horizontal) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border ${
                  activeFeature === feature.id
                    ? 'bg-emerald-500/10 border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.1)] md:-translate-y-1'
                    : 'bg-white/5 border-white/5 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    activeFeature === feature.id ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/10 text-slate-400'
                  }`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-xl font-bold ${activeFeature === feature.id ? 'text-white' : 'text-slate-300'}`}>
                    {feature.title}
                  </h3>
                </div>
                <p className={`text-sm leading-relaxed ${activeFeature === feature.id ? 'text-slate-300' : 'text-slate-500'}`}>
                  {feature.description}
                </p>
              </button>
            ))}
          </div>

          {/* Bottom: Interactive Mockup */}
          <div className="w-full max-w-5xl mx-auto">
            <div className="glass-panel rounded-3xl border border-white/10 overflow-hidden flex h-[500px] md:h-[600px] shadow-2xl relative">
              
              {/* Left Sidebar: Chat List */}
              <div className={`w-full md:w-1/3 border-r border-white/10 bg-black/40 flex-col transition-opacity duration-500 ${mobileView === 'list' ? 'flex' : 'hidden md:flex'} ${activeFeature === 'all-in-one' ? 'opacity-100 ring-2 ring-emerald-500/50 relative z-10' : 'opacity-50'}`}>
                <div className="p-4 border-b border-white/10">
                  <div className="bg-white/5 rounded-lg px-3 py-2 flex items-center gap-2 text-slate-400">
                    <Search className="w-4 h-4" />
                    <span className="text-sm">Поиск...</span>
                  </div>
                </div>
                <div className="flex-1 overflow-hidden flex flex-col">
                  {/* Chat Item 1 */}
                  <div className="p-4 border-b border-white/5 bg-white/5 flex items-start gap-3 cursor-pointer hover:bg-white/10 transition-colors" onClick={() => setMobileView('chat')}>
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-slate-900 font-bold">
                        А
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#25D366] rounded-full border-2 border-[#050505] flex items-center justify-center">
                        <Phone className="w-2 h-2 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-white font-medium text-sm truncate">Александр (WhatsApp)</h4>
                        <span className="text-xs text-emerald-400">12:45</span>
                      </div>
                      <p className="text-xs text-slate-400 truncate">Отлично, давайте презентацию!</p>
                    </div>
                  </div>
                  {/* Chat Item 2 */}
                  <div className="p-4 border-b border-white/5 flex items-start gap-3 cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">
                        М
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#0088cc] rounded-full border-2 border-[#050505] flex items-center justify-center">
                        <Send className="w-2 h-2 text-white -ml-0.5 mt-0.5" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-white font-medium text-sm truncate">Мария (Telegram)</h4>
                        <span className="text-xs text-slate-500">Вчера</span>
                      </div>
                      <p className="text-xs text-slate-400 truncate">Подскажите статус заказа?</p>
                    </div>
                  </div>
                  {/* Chat Item 3 */}
                  <div className="p-4 border-b border-white/5 flex items-start gap-3 cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold">
                        E
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#E1306C] rounded-full border-2 border-[#050505] flex items-center justify-center">
                        <Instagram className="w-2 h-2 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-white font-medium text-sm truncate">Елена (Instagram)</h4>
                        <span className="text-xs text-slate-500">Вчера</span>
                      </div>
                      <p className="text-xs text-slate-400 truncate">Сколько стоит доставка?</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle: Chat Area */}
              <div className={`w-full md:w-1/3 flex-1 flex-col bg-black/20 relative ${mobileView === 'chat' ? 'flex' : 'hidden md:flex'} ${activeFeature === 'routing' ? 'opacity-100 ring-2 ring-emerald-500/50 relative z-10' : (activeFeature === 'all-in-one' ? 'opacity-100' : 'opacity-50')}`}>
                {/* Header */}
                <div className={`p-4 border-b border-white/10 flex justify-between items-center bg-black/40 transition-all duration-500 ${activeFeature === 'routing' ? 'ring-2 ring-emerald-500/50 relative z-10' : ''}`}>
                  <div className="flex items-center gap-3">
                    <button className="md:hidden p-1 -ml-2 text-slate-400 hover:text-white" onClick={() => setMobileView('list')}>
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div className="flex flex-col cursor-pointer md:cursor-default" onClick={() => setMobileView('crm')}>
                      <h3 className="text-white font-medium flex items-center gap-2">
                        Александр
                        <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">WhatsApp</span>
                      </h3>
                      <span className="text-xs text-slate-400 md:hidden">Нажмите для инфо</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {activeFeature === 'routing' && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute top-14 right-4 bg-slate-800 border border-white/10 rounded-xl p-2 shadow-xl z-20 w-48"
                      >
                        <div className="text-xs text-slate-400 mb-2 px-2">Передать диалог:</div>
                        <button className="w-full text-left px-2 py-1.5 hover:bg-white/5 rounded text-sm text-white flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-400" /> Отдел продаж
                        </button>
                        <button className="w-full text-left px-2 py-1.5 hover:bg-white/5 rounded text-sm text-white flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-400" /> Поддержка
                        </button>
                      </motion.div>
                    )}
                    <button className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-colors ${activeFeature === 'routing' ? 'bg-emerald-500 text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}>
                      <Users className="w-4 h-4" />
                      <span className="hidden sm:inline">Передать</span>
                    </button>
                    <button className="md:hidden p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5" onClick={() => setMobileView('crm')}>
                      <Info className="w-5 h-5" />
                    </button>
                    <button className="hidden md:block p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex-shrink-0" />
                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-3 max-w-[80%] text-sm text-slate-200">
                      Здравствуйте! Подскажите, сколько стоит внедрение вашей платформы для команды из 5 человек? И есть ли интеграция с amoCRM?
                      <div className="text-[10px] text-slate-500 mt-1 text-right">12:42</div>
                    </div>
                  </div>
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-emerald-400 font-bold">Вы</span>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl rounded-tr-none p-3 max-w-[80%] text-sm text-emerald-50">
                      Здравствуйте, Александр! Да, у нас есть полная интеграция с amoCRM. Для команды из 5 человек подойдет тариф "Бизнес". Стоимость составит 4990 руб/мес. Хотите, я пришлю вам подробную презентацию?
                      <div className="text-[10px] text-emerald-500/70 mt-1 flex justify-end items-center gap-1">
                        12:44 <CheckCheck className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex-shrink-0" />
                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-3 max-w-[80%] text-sm text-slate-200">
                      Отлично, давайте презентацию!
                      <div className="text-[10px] text-slate-500 mt-1 text-right">12:45</div>
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="p-4 border-t border-white/10 bg-black/40">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-2 flex items-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-white transition-colors">
                      <Paperclip className="w-5 h-5" />
                    </button>
                    <textarea 
                      placeholder="Введите сообщение..." 
                      className="flex-1 bg-transparent border-none outline-none text-sm text-white resize-none max-h-24 min-h-[40px] py-2 custom-scrollbar"
                      rows={1}
                      defaultValue="Отправляю презентацию! Файл прикреплен."
                    />
                    <button className="p-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-400 transition-colors">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Sidebar: CRM Info */}
              <div className={`w-full md:w-1/3 border-l border-white/10 bg-black/40 flex-col transition-opacity duration-500 ${mobileView === 'crm' ? 'flex' : 'hidden md:flex'} ${activeFeature === 'crm' ? 'opacity-100 ring-2 ring-emerald-500/50 relative z-10' : 'opacity-50'}`}>
                <div className="p-4 border-b border-white/10 flex items-center md:hidden bg-black/40">
                  <button className="p-1 -ml-2 text-slate-400 hover:text-white flex items-center gap-1" onClick={() => setMobileView('chat')}>
                    <ChevronLeft className="w-6 h-6" />
                    <span className="text-sm font-medium">Назад к чату</span>
                  </button>
                </div>
                <div className="p-6 border-b border-white/10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-slate-900 font-bold text-2xl mb-4 shadow-lg">
                    А
                  </div>
                  <h3 className="text-lg font-bold text-white">Александр Иванов</h3>
                  <p className="text-sm text-slate-400 mb-4">+7 (999) 123-45-67</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs">B2B</span>
                    <span className="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 text-xs">Горячий</span>
                  </div>
                </div>
                <div className="p-6 space-y-6 flex-1 overflow-y-auto custom-scrollbar">
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Сделка в CRM</h4>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-white font-medium">Внедрение WABA</span>
                        <span className="text-sm text-emerald-400 font-bold">4 990 ₽</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-1.5 mb-2">
                        <div className="bg-emerald-500 h-1.5 rounded-full w-2/3"></div>
                      </div>
                      <span className="text-xs text-slate-400">Этап: Отправка КП</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Ответственный</h4>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-white text-xs font-bold">
                        М
                      </div>
                      <div>
                        <div className="text-sm text-white font-medium">Михаил С.</div>
                        <div className="text-xs text-slate-400">Отдел продаж</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
