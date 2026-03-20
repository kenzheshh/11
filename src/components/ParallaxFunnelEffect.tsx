import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { Send, MousePointer2, Calendar, DollarSign, MessageCircle, CheckCheck } from 'lucide-react';

export default function ParallaxFunnelEffect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isExploding, setIsExploding] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  // Cursor animation
  const cursorX = useTransform(scrollYProgress, [0, 0.2], [200, 0]);
  const cursorY = useTransform(scrollYProgress, [0, 0.2], [200, 0]);
  const cursorScale = useTransform(scrollYProgress, [0.15, 0.2, 0.25], [1, 0.8, 1]);

  // Button press effect
  const buttonScale = useTransform(scrollYProgress, [0.18, 0.2, 0.22], [1, 0.95, 1]);

  // Number animations using MotionValues (prevents React re-renders)
  const leadsRaw = useTransform(scrollYProgress, [0.2, 0.8], [0, 150], { clamp: true });
  const leads = useTransform(leadsRaw, (latest) => Math.floor(latest));
  
  const revenueRaw = useTransform(scrollYProgress, [0.2, 0.8], [0, 225000], { clamp: true });
  const revenue = useTransform(revenueRaw, (latest) => Math.floor(latest).toLocaleString());

  // Update explosion state only when crossing threshold
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2) {
      if (!isExploding) setIsExploding(true);
    } else {
      if (isExploding) setIsExploding(false);
    }
  });

  return (
    <section ref={containerRef} className="relative h-[200vh] w-full bg-slate-900" style={{ position: 'relative' }}>
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-between py-20">
        
        {/* Header Text */}
        <div className="text-center z-30 px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Рассылки, которые приносят деньги, <br/><span className="text-brand">а не блокировки.</span>
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Верните «спящих» клиентов в воронку продаж. Забудьте про лимиты в 50 сообщений в день.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <div className="text-brand mb-3"><MessageCircle size={24} /></div>
              <h3 className="text-lg font-bold text-white mb-2">Официальные шаблоны Meta</h3>
              <p className="text-slate-400 text-sm">Одобряйте шаблоны в пару кликов прямо в нашем кабинете.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <div className="text-brand mb-3"><CheckCheck size={24} /></div>
              <h3 className="text-lg font-bold text-white mb-2">100% доставляемость</h3>
              <p className="text-slate-400 text-sm">Ваши акции и напоминания точно дойдут до адресата.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <div className="text-brand mb-3"><DollarSign size={24} /></div>
              <h3 className="text-lg font-bold text-white mb-2">Умная аналитика</h3>
              <p className="text-slate-400 text-sm">Видите, кто прочитал, кто кликнул, а кто записался.</p>
            </div>
          </div>
        </div>

        {/* Action Area (Top) */}
        <div className="relative z-20 mt-10">
          
          {/* Particles Explosion */}
          {isExploding && Array.from({ length: 30 }).map((_, i) => {
            const isLeft = i % 2 === 0;
            // Approximate target positions relative to the button
            const targetX = isLeft ? -window.innerWidth * 0.3 : window.innerWidth * 0.3;
            const targetY = window.innerHeight * 0.4;
            return (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={{ 
                  x: [0, (Math.random() - 0.5) * 300, targetX], 
                  y: [0, (Math.random() - 0.5) * 200 - 100, targetY],
                  opacity: [0, 1, 1, 0],
                  scale: [0, 1.5, 0.5]
                }}
                transition={{ duration: 2, ease: "easeInOut", delay: Math.random() * 0.5, repeat: Infinity, repeatDelay: 1 }}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 ${isLeft ? 'text-blue-400' : 'text-brand'}`}
              >
                {isLeft ? <MessageCircle size={24} className="fill-blue-400/20" /> : <DollarSign size={24} className="fill-brand/20" />}
              </motion.div>
            );
          })}

          <motion.button 
            className="bg-brand hover:bg-brand-hover text-white text-xl font-bold py-4 px-8 rounded-full shadow-[0_0_30px_rgba(14,165,233,0.5)] flex items-center gap-3 transition-colors"
            style={{ scale: buttonScale }}
          >
            <Send size={24} />
            Запустить рассылку (2000 контактов)
          </motion.button>

          {/* Animated Cursor */}
          <motion.div 
            className="absolute -bottom-10 -right-10 text-white drop-shadow-lg"
            style={{ x: cursorX, y: cursorY, scale: cursorScale }}
          >
            <MousePointer2 size={40} className="fill-white text-slate-800" />
          </motion.div>
        </div>

        {/* CRM Receivers (Bottom) */}
        <div className="w-full max-w-5xl flex justify-between px-4 md:px-20 z-20 mt-auto">
          {/* Leads Column */}
          <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-2xl p-6 w-[45%] shadow-2xl flex flex-col items-center">
            <div className="text-slate-400 font-medium mb-2 flex items-center gap-2">
              <Calendar size={20} /> Новые записи
            </div>
            <motion.div className="text-4xl md:text-6xl font-bold text-white tabular-nums">
              {leads}
            </motion.div>
          </div>

          {/* Revenue Column */}
          <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-2xl p-6 w-[45%] shadow-2xl flex flex-col items-center">
            <div className="text-slate-400 font-medium mb-2 flex items-center gap-2">
              <DollarSign size={20} /> Выручка (₽)
            </div>
            <motion.div className="text-4xl md:text-6xl font-bold text-brand tabular-nums">
              {revenue}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
