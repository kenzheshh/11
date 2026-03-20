import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { AlertCircle, CheckCircle2, MessageSquare, ShieldAlert, ShieldCheck, User, Check } from 'lucide-react';

export default function TransformationEffect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  // Scanner line position from 0% to 100%
  const scannerY = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);
  
  // Clip path for the "good" state (reveals from top to bottom)
  const clipPath = useTransform(scrollYProgress, [0, 0.8], ["inset(0 0 100% 0)", "inset(0 0 0% 0)"]);

  // Text opacities
  const textAOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textBOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
  const textBY = useTransform(scrollYProgress, [0.5, 0.8], [20, 0]);

  // Shake effect for bad state
  const shakeX = useTransform(scrollYProgress, 
    [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4], 
    [0, -4, 4, -4, 4, -4, 4, -4, 0]
  );

  return (
    <section ref={containerRef} className="relative h-[300vh] w-full bg-white" style={{ position: 'relative' }}>
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden px-4 md:px-20 gap-12">
        
        {/* Background transition */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-red-50/50 to-slate-50/50"
          style={{ opacity: useTransform(scrollYProgress, [0.6, 0.8], [1, 0]) }}
        />
        <motion.div 
          className="absolute inset-0 bg-brand/5"
          style={{ opacity: useTransform(scrollYProgress, [0.6, 0.8], [0, 1]) }}
        />

        {/* Text Content */}
        <div className="md:w-1/2 relative h-[300px] flex items-center z-30">
          {/* State A Text */}
          <motion.div 
            className="absolute inset-0 flex flex-col justify-center"
            style={{ opacity: textAOpacity, willChange: "opacity" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Устали трястись над каждым <span className="text-red-500">сообщением?</span>
            </h2>
            <p className="text-lg text-slate-600">
              Использование «серых» рассылок — это русская рулетка. Один неверный шаг, и вы теряете номер, историю переписок и лояльных клиентов.
            </p>
          </motion.div>

          {/* State B Text */}
          <motion.div 
            className="absolute inset-0 flex flex-col justify-center"
            style={{ opacity: textBOpacity, y: textBY, willChange: "opacity, transform" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Переходите на <span className="text-brand">«белую» сторону.</span>
            </h2>
            <p className="text-lg text-slate-600">
              Официальный WhatsApp Business API. 100% защита от банов, зеленая галочка рядом с названием компании и полное одобрение от Meta. Ваша база клиентов теперь в полной безопасности.
            </p>
          </motion.div>
        </div>

        {/* Phone Mockup */}
        <div className="md:w-1/2 flex justify-center z-20 relative">
          {/* Good State Glow */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[700px] bg-brand/40 rounded-full blur-[100px] z-0 pointer-events-none"
            style={{ opacity: useTransform(scrollYProgress, [0.4, 0.8], [0, 1]), willChange: "opacity" }}
          />
          <motion.div 
            className="relative w-[320px] h-[650px] rounded-[3rem] border-[8px] border-slate-800 bg-slate-900 shadow-2xl overflow-hidden z-10"
            style={{ x: shakeX, willChange: "transform" }}
          >
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-50 flex items-center justify-between px-2">
              <div className="w-2 h-2 rounded-full bg-slate-800/50" />
              <div className="w-2 h-2 rounded-full bg-green-500/20 shadow-[0_0_4px_rgba(34,197,94,0.5)]" />
            </div>
            
            {/* STATE A: BAD (Base layer) */}
            <div className="absolute inset-0 bg-[#efe6dd] flex flex-col">
              {/* Header */}
              <div className="bg-[#075e54] text-white p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center text-slate-500">
                  <User size={24} />
                </div>
                <div>
                  <div className="font-semibold">Неизвестный номер</div>
                </div>
              </div>
              {/* Blocked Banner */}
              <div className="bg-red-500 text-white text-xs p-2 flex items-center justify-center gap-2 font-medium">
                <ShieldAlert size={16} />
                Ваш номер заблокирован за спам
              </div>
              
              {/* Chat */}
              <div className="flex-1 p-4 flex flex-col gap-4">
                <div className="self-end bg-[#dcf8c6] p-3 rounded-lg rounded-tr-none max-w-[80%] relative shadow-sm">
                  <p className="text-sm text-slate-800">Здравствуйте! У нас акция на все товары 50%!</p>
                  <div className="absolute -right-2 bottom-1 text-red-500 bg-white rounded-full">
                    <AlertCircle size={16} />
                  </div>
                </div>
                <div className="self-end bg-[#dcf8c6] p-3 rounded-lg rounded-tr-none max-w-[80%] relative shadow-sm">
                  <p className="text-sm text-slate-800">Купите прямо сейчас по ссылке!</p>
                  <div className="absolute -right-2 bottom-1 text-red-500 bg-white rounded-full">
                    <AlertCircle size={16} />
                  </div>
                </div>
                <div className="self-start bg-white p-3 rounded-lg rounded-tl-none max-w-[80%] shadow-sm mt-4">
                  <p className="text-sm text-slate-800 font-medium">Вы кто? Откуда у вас мой номер?</p>
                </div>
                <div className="self-start bg-white p-3 rounded-lg rounded-tl-none max-w-[80%] shadow-sm">
                  <p className="text-sm text-slate-800 font-medium">Я буду жаловаться на спам!</p>
                </div>
              </div>
            </div>

            {/* STATE B: GOOD (Top layer, revealed by clip-path) */}
            <motion.div 
              className="absolute inset-0 bg-[#f0f2f5] flex flex-col z-10"
              style={{ clipPath, willChange: "clip-path" }}
            >
              {/* Header */}
              <div className="bg-white border-b p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                  <MessageSquare size={20} />
                </div>
                <div className="flex-1">
                  <div className="font-semibold flex items-center gap-1 text-slate-800">
                    Flowsell.me
                    <CheckCircle2 size={16} className="text-green-500 fill-green-100" />
                  </div>
                  <div className="text-xs text-slate-500">Официальный аккаунт</div>
                </div>
              </div>
              
              {/* Chat */}
              <div className="flex-1 p-4 flex flex-col gap-4">
                <div className="self-end bg-[#dcf8c6] p-3 rounded-lg rounded-tr-none max-w-[80%] shadow-sm">
                  <p className="text-sm text-slate-800">Здравствуйте, Анна! Ваша запись на завтра в 14:00 подтверждена.</p>
                  <div className="flex justify-end mt-1">
                    <Check size={14} className="text-blue-500" />
                    <Check size={14} className="text-blue-500 -ml-2" />
                  </div>
                </div>
                
                {/* Interactive Buttons (WABA feature) */}
                <div className="self-end flex gap-2 max-w-[80%]">
                  <div className="bg-white text-brand text-sm px-4 py-2 rounded-full shadow-sm border border-brand/20 font-medium">
                    Перенести
                  </div>
                  <div className="bg-white text-brand text-sm px-4 py-2 rounded-full shadow-sm border border-brand/20 font-medium">
                    Отменить
                  </div>
                </div>

                <div className="self-start bg-white p-3 rounded-lg rounded-tl-none max-w-[80%] shadow-sm mt-2">
                  <p className="text-sm text-slate-800">Спасибо! Буду вовремя.</p>
                </div>

                {/* AI Tag */}
                <div className="self-center bg-blue-50 text-blue-600 text-[10px] px-2 py-1 rounded-full font-medium uppercase tracking-wider flex items-center gap-1 mt-2">
                  <ShieldCheck size={12} />
                  Лояльный клиент
                </div>
              </div>
            </motion.div>

            {/* Scanner Line */}
            <motion.div 
              className="absolute left-0 right-0 h-1 bg-brand shadow-[0_0_20px_rgba(10,128,94,1),0_0_40px_rgba(10,128,94,0.8)] z-20"
              style={{ top: scannerY, willChange: "top" }}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
