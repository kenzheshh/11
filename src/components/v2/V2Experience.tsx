import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mouse } from 'lucide-react';

export default function V2Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Screen 1 (Hero) Animations
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1, 1], [1, 0, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.1, 1], [0, -50, -50]);
  const heroScale = useTransform(scrollYProgress, [0, 0.1, 1], [1, 0.95, 0.95]);

  // Screen 2 (Transformation) Animations
  const screen2Opacity = useTransform(scrollYProgress, [0.05, 0.2, 0.85, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.05, 0.2, 0.85, 1], [30, 0, 0, -30]);
  const chatUiOpacity = useTransform(scrollYProgress, [0.05, 0.2, 0.85, 1], [0, 1, 1, 0]);

  // Gradient background transformation
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.6, 0.6]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#050505]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-grid-pattern">
        
        {/* Mesh Gradient Background */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ opacity: gradientOpacity }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(6,78,59,0.15)_0%,_rgba(2,44,34,0.1)_50%,_#050505_100%)]" />
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-600/10 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-900/10 blur-[120px]" />
        </motion.div>

        {/* Screen 1: Hero */}
        <motion.div 
          className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 md:px-16 max-w-7xl mx-auto w-full pointer-events-none"
          style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
        >
          <div className="max-w-4xl flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-300">Официальный партнер Meta</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tighter mb-6 leading-[1.1]"
            >
              Официальный WhatsApp для бизнеса.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400">
                Без блокировок.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-2xl font-light"
            >
              Подключите WABA и перестаньте терять клиентов из-за блокировок.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto"
            >
              <button onClick={() => window.dispatchEvent(new CustomEvent('open-amo-modal'))} className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] hover:-translate-y-1 relative overflow-hidden group">
                <span className="relative z-10">Начать бесплатно</span>
                <motion.div 
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0"
                />
              </button>
            </motion.div>
          </div>
          
        </motion.div>

        {/* Screen 2: Transformation */}
        <motion.div 
          className="absolute inset-0 z-20 flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16 max-w-7xl mx-auto pointer-events-none"
          style={{ opacity: screen2Opacity }}
        >
          {/* Left side: HTML Chat UI overlaying the 3D morphed background */}
          <motion.div 
            className="flex-1 flex justify-center pointer-events-auto"
            style={{ opacity: chatUiOpacity }}
          >
            <div className="w-full max-w-md p-8 space-y-6 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-3xl -z-10 rounded-full" />
              <div className="w-3/4 h-16 bg-white/5 backdrop-blur-xl rounded-2xl rounded-tl-none border border-white/10 shadow-2xl flex items-center px-4">
                <div className="w-8 h-2 bg-white/20 rounded-full" />
              </div>
              <div className="w-full h-16 bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/30 rounded-2xl rounded-tr-none ml-auto shadow-[0_0_30px_rgba(16,185,129,0.15)] flex items-center justify-end px-4">
                <div className="w-12 h-2 bg-emerald-400/50 rounded-full" />
              </div>
              <div className="w-2/3 h-16 bg-white/5 backdrop-blur-xl rounded-2xl rounded-tl-none border border-white/10 shadow-2xl flex items-center px-4">
                <div className="w-10 h-2 bg-white/20 rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="flex-1 text-left pointer-events-auto"
            style={{ y: textY }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
              Ваш бизнес в <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">безопасности</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed font-light">
              Забудьте о постоянных блокировках и потери клиентов. Мы используем официальный WhatsApp Business API, чтобы вы могли сфокусироваться на продажах.
            </p>
            <ul className="space-y-5 mb-10">
              {[
                'Зеленая галочка верификации',
                'Массовые рассылки без риска',
                'Интеграции с любой CRM'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-200 text-lg">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button onClick={() => window.dispatchEvent(new CustomEvent('open-amo-modal'))} className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold text-lg transition-all backdrop-blur-md pointer-events-auto w-fit">
              Узнать больше
            </button>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
