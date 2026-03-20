import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Monitor, Smartphone, Check, User, MessageSquare } from 'lucide-react';

export default function CoexistenceEffect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  // Typing animation (0 to 1)
  const typingProgress = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
  
  // Flying bubble animation
  const flyX = useTransform(scrollYProgress, [0.35, 0.4], [150, -50]);
  const flyY = useTransform(scrollYProgress, [0.35, 0.4], [150, 0]);
  const flyOpacity = useTransform(scrollYProgress, [0.35, 0.37, 0.4], [0, 1, 0]);
  const flyScale = useTransform(scrollYProgress, [0.35, 0.37, 0.4], [0.5, 1, 0.8]);

  // Sending animation (bubble flies up)
  const sendY = useTransform(scrollYProgress, [0.4, 0.5], [50, 0]);
  const sendOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);

  // Reply animation
  const replyY = useTransform(scrollYProgress, [0.6, 0.7], [20, 0]);
  const replyOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);

  const fullText = "Здравствуйте! Ваша запись подтверждена.";

  return (
    <section ref={containerRef} className="relative h-[300vh] w-full bg-slate-50" style={{ position: 'relative' }}>
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden px-4 gap-12 py-20">
        
        {/* Text Content */}
        <div className="md:w-1/3 z-30 md:pr-10">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Один номер. <br/><span className="text-brand">Вся команда.</span> Никаких рассинхронов.
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Хватит передавать рабочий телефон из рук в руки или сканировать QR-коды, которые постоянно «отваливаются».
          </p>
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-start gap-3">
              <div className="mt-1 bg-brand/10 p-1 rounded-full text-brand"><Monitor size={16} /></div>
              <div><strong>С компьютера:</strong> Менеджеры ведут продажи в удобной веб-CRM.</div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 bg-brand/10 p-1 rounded-full text-brand"><Smartphone size={16} /></div>
              <div><strong>Со смартфона:</strong> Администраторы или мастера отвечают на бегу.</div>
            </li>
          </ul>
          <p className="mt-6 text-slate-800 font-medium">
            Все сообщения синхронизируются мгновенно. Клиент видит единый, профессиональный сервис.
          </p>
        </div>

        {/* Devices Container */}
        <div className="relative w-full max-w-2xl h-[500px] flex items-center justify-center">
          
          {/* Flying Bubble */}
          <motion.div 
            className="absolute z-30 bg-[#dcf8c6] p-2 rounded-lg shadow-xl border border-green-200/50 backdrop-blur-sm"
            style={{ x: flyX, y: flyY, opacity: flyOpacity, scale: flyScale, willChange: "transform, opacity" }}
          >
            <p className="text-xs text-slate-800">{fullText}</p>
          </motion.div>

          {/* Laptop (Background) */}
          <div className="absolute top-0 right-10 md:right-20 w-[400px] md:w-[600px] h-[350px] md:h-[400px] bg-slate-800 rounded-t-3xl border-[12px] border-slate-800 shadow-[0_30px_60px_rgba(0,0,0,0.2)] overflow-hidden transform perspective-1000 rotateX-12 scale-90 md:scale-100 z-10">
            <div className="bg-white w-full h-full flex flex-col">
              {/* Web CRM Header */}
              <div className="h-12 border-b bg-slate-50 flex items-center px-4 gap-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="ml-4 font-medium text-slate-600 flex items-center gap-2">
                  <Monitor size={16} /> Flowsell CRM
                </div>
              </div>
              
              <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="w-1/4 border-r bg-slate-50 p-4 hidden md:block">
                  <div className="h-8 bg-slate-200 rounded mb-4" />
                  <div className="h-12 bg-brand/10 rounded mb-2 border-l-4 border-brand" />
                  <div className="h-12 bg-white rounded mb-2" />
                  <div className="h-12 bg-white rounded mb-2" />
                </div>
                
                {/* Chat Area */}
                <div className="flex-1 flex flex-col bg-[#efe6dd]">
                  <div className="p-4 border-b bg-white flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                      <User size={20} className="text-slate-500" />
                    </div>
                    <div>
                      <div className="font-semibold">Клиент Анна</div>
                      <div className="text-xs text-green-500">В сети</div>
                    </div>
                  </div>
                  
                  <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden relative">
                    {/* Sent Message */}
                    <motion.div 
                      className="self-end bg-[#dcf8c6] p-3 rounded-lg rounded-tr-none max-w-[70%] shadow-sm"
                      style={{ y: sendY, opacity: sendOpacity, willChange: "transform, opacity" }}
                    >
                      <p className="text-sm text-slate-800">{fullText}</p>
                      <div className="flex justify-end mt-1">
                        <Check size={14} className="text-blue-500" />
                        <Check size={14} className="text-blue-500 -ml-2" />
                      </div>
                    </motion.div>

                    {/* Reply Message */}
                    <motion.div 
                      className="self-start bg-white p-3 rounded-lg rounded-tl-none max-w-[70%] shadow-sm mt-4"
                      style={{ y: replyY, opacity: replyOpacity, willChange: "transform, opacity" }}
                    >
                      <p className="text-sm text-slate-800">Спасибо!</p>
                    </motion.div>
                  </div>
                  
                  {/* Input Area */}
                  <div className="p-4 bg-[#f0f0f0] flex gap-2 items-center">
                    <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-slate-600 relative overflow-hidden h-10 flex items-center">
                      <motion.span>
                        {useTransform(typingProgress, (p) => fullText.substring(0, Math.floor(p * fullText.length)))}
                      </motion.span>
                      {/* Blinking cursor */}
                      <motion.div 
                        className="w-[2px] h-4 bg-brand ml-1"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center">
                      <MessageSquare size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Smartphone (Foreground) */}
          <div className="absolute bottom-0 left-0 md:left-20 w-[240px] h-[480px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-[0_30px_60px_rgba(0,0,0,0.3)] overflow-hidden z-20 relative">
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-50 flex items-center justify-between px-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-800/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/20 shadow-[0_0_4px_rgba(34,197,94,0.5)]" />
            </div>

            <div className="bg-[#efe6dd] w-full h-full flex flex-col pt-4">
              {/* Mobile Header */}
              <div className="bg-[#075e54] text-white p-4 flex items-center gap-3 pt-8">
                <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center">
                  <User size={16} className="text-slate-500" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Анна</div>
                  <div className="text-[10px] opacity-80">В сети</div>
                </div>
              </div>
              
              {/* Mobile Chat Area */}
              <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
                {/* Sent Message */}
                <motion.div 
                  className="self-end bg-[#dcf8c6] p-2 rounded-lg rounded-tr-none max-w-[85%] shadow-sm"
                  style={{ y: sendY, opacity: sendOpacity, willChange: "transform, opacity" }}
                >
                  <p className="text-xs text-slate-800">{fullText}</p>
                  <div className="flex justify-end mt-1">
                    <Check size={12} className="text-blue-500" />
                    <Check size={12} className="text-blue-500 -ml-2" />
                  </div>
                </motion.div>

                {/* Reply Message */}
                <motion.div 
                  className="self-start bg-white p-2 rounded-lg rounded-tl-none max-w-[85%] shadow-sm mt-2"
                  style={{ y: replyY, opacity: replyOpacity, willChange: "transform, opacity" }}
                >
                  <p className="text-xs text-slate-800">Спасибо!</p>
                </motion.div>
              </div>
              
              {/* Mobile Input Area */}
              <div className="p-2 bg-[#f0f0f0] flex gap-2 items-center">
                <div className="flex-1 bg-white rounded-full px-3 py-2 text-xs text-slate-400 h-8 flex items-center overflow-hidden whitespace-nowrap shadow-sm">
                  <span>Сообщение...</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center shadow-sm">
                  <MessageSquare size={14} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
