import { motion } from 'motion/react';
import { Play, Sparkles, Send, User, MessageCircle } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Добрый день! Подскажите, а доставка в Алматы сколько займет?", sender: "client", time: "12:30" }
  ]);
  const [inputText, setInputText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [clientTyping, setClientTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, inputText, clientTyping]);

  const generateAIResponse = () => {
    if (isGenerating || inputText) return;
    setIsGenerating(true);
    const aiText = "Здравствуйте! Доставка в Алматы занимает 1-2 рабочих дня. Стоимость — 1500 ₸. Оформить заказ?";
    let i = 0;
    const interval = setInterval(() => {
      if (i <= aiText.length) {
        setInputText(aiText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setIsGenerating(false);
      }
    }, 30);
  };

  const handleSend = () => {
    if (!inputText.trim()) return;
    const newMsg = { id: Date.now(), text: inputText, sender: "manager", time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) };
    setMessages(prev => [...prev, newMsg]);
    setInputText('');
    
    setClientTyping(true);
    setTimeout(() => {
      setClientTyping(false);
      setMessages(prev => [...prev, { id: Date.now(), text: "Да, давайте оформим! Куда скинуть данные?", sender: "client", time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }]);
    }, 2500);
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-transparent">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand/10 rounded-full blur-[100px] -z-10" />

      {/* Floating Elements */}
      <motion.div 
        style={{ willChange: "transform" }}
        animate={{ y: [0, 20, 0], rotate: [0, -10, 10, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden lg:flex absolute bottom-40 right-20 w-14 h-14 bg-brand rounded-2xl shadow-xl shadow-brand/30 items-center justify-center z-10"
      >
        <Sparkles className="w-7 h-7 text-white" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]"
          >
            Официальный WhatsApp для бизнеса. <br className="hidden md:block" />
            <span className="text-brand">Без банов. С ИИ.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Объедините отдел продаж в одном окне. Делайте массовые рассылки легально, контролируйте менеджеров и отвечайте клиентам в 2 раза быстрее с помощью ИИ-суфлера.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-brand hover:bg-brand-hover text-white rounded-xl font-semibold text-lg transition-all shadow-[0_0_20px_rgba(10,128,94,0.4)] hover:shadow-[0_0_30px_rgba(10,128,94,0.6)] hover:-translate-y-0.5 relative overflow-hidden group">
              <span className="relative z-10">Начать 7 дней бесплатно</span>
              <motion.div 
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0"
              />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-900 border border-gray-200/60 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 group shadow-sm hover:shadow-md">
              <Play className="w-5 h-5 text-brand group-hover:scale-110 transition-transform" />
              Смотреть демо
            </button>
          </motion.div>
        </div>

        {/* Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <motion.div 
            style={{ willChange: "transform" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-[2rem] border border-white/60 bg-white/40 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row h-[500px]"
          >
            {/* Sidebar */}
            <div className="w-full md:w-80 border-r border-white/40 bg-white/40 hidden md:flex flex-col">
              <div className="p-4 border-b border-gray-100">
                <input type="text" placeholder="Поиск диалогов..." className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20" />
              </div>
              <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`p-3 rounded-xl flex items-start gap-3 cursor-pointer transition-colors ${i === 1 ? 'bg-brand-light' : 'hover:bg-gray-50'}`}>
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <h4 className="text-sm font-semibold text-gray-900 truncate">Клиент {i}</h4>
                        <span className="text-xs text-gray-400">12:30</span>
                      </div>
                      <p className="text-xs text-gray-500 truncate mt-0.5">
                        {i === 1 ? (messages[messages.length - 1]?.text || "Подскажите, а доставка...") : "Спасибо, буду ждать!"}
                      </p>
                      {i === 1 && (
                        <div className="mt-2 flex gap-1">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-blue-100 text-blue-800">VIP</span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-orange-100 text-orange-800">Ждет ответ</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col bg-[#efeae2]/10 relative">
              {/* Chat Header */}
              <div className="h-16 border-b border-white/40 bg-white/40 backdrop-blur-md flex items-center px-6 justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Александр (VIP)</h3>
                    <p className="text-xs text-brand font-medium">В сети</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-md">Менеджер: Вы</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4 custom-scrollbar">
                <div className="flex justify-center">
                  <span className="text-xs bg-white/60 px-3 py-1 rounded-full text-gray-500 shadow-sm border border-gray-100">Сегодня</span>
                </div>
                
                {messages.map((msg) => (
                  <motion.div 
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex items-end gap-2 max-w-[80%] ${msg.sender === 'manager' ? 'ml-auto flex-row-reverse' : ''}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.sender === 'manager' ? 'bg-brand' : 'bg-gray-200'}`}>
                      <User className={`w-4 h-4 ${msg.sender === 'manager' ? 'text-white' : 'text-gray-500'}`} />
                    </div>
                    <div className={`p-3 rounded-2xl shadow-sm border text-sm ${
                      msg.sender === 'manager' 
                        ? 'bg-brand-light border-brand/20 text-brand-hover rounded-br-none' 
                        : 'bg-white border-gray-100 text-gray-800 rounded-bl-none'
                    }`}>
                      {msg.text}
                      <div className={`text-[10px] mt-1 ${msg.sender === 'manager' ? 'text-brand/60 text-left' : 'text-gray-400 text-right'}`}>
                        {msg.time}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {clientTyping && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-end gap-2 max-w-[80%]"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center">
                      <User className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </motion.div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white/40 backdrop-blur-md border-t border-white/40 z-10">
                <div className="relative flex items-end gap-2">
                  <div className="flex-1 bg-white/60 border border-white/60 rounded-2xl p-1 flex items-center relative transition-all focus-within:ring-2 focus-within:ring-brand/20 focus-within:border-brand/30 shadow-sm">
                    <button 
                      onClick={generateAIResponse}
                      disabled={isGenerating || inputText.length > 0}
                      className="p-2 text-brand hover:bg-brand-light rounded-xl transition-colors group relative disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Sparkles className={`w-5 h-5 ${isGenerating ? 'animate-spin' : ''}`} />
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-0 mb-2 w-48 bg-gray-900/90 backdrop-blur-md text-white text-xs rounded-lg p-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        Сгенерировать идеальный ответ
                      </div>
                    </button>
                    <input 
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Написать сообщение..."
                      className="flex-1 px-3 py-2 text-sm text-gray-700 bg-transparent focus:outline-none"
                    />
                  </div>
                  <button 
                    onClick={handleSend}
                    disabled={!inputText.trim()}
                    className="w-12 h-12 bg-brand hover:bg-brand-hover disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-2xl flex items-center justify-center shadow-sm transition-colors flex-shrink-0"
                  >
                    <Send className="w-5 h-5 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
