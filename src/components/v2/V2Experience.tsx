import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mouse } from 'lucide-react';
import Scene3D from './Scene3D';

export default function V2Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Screen 1 (Hero) Animations
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15, 1], [1, 0, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.15, 1], [0, -50, -50]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15, 1], [1, 0.95, 0.95]);

  // Screen 2 (Transformation) Animations
  const screen2Opacity = useTransform(scrollYProgress, [0.1, 0.25, 0.8, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.1, 0.25, 0.8, 1], [30, 0, 0, -30]);
  const chatUiOpacity = useTransform(scrollYProgress, [0.1, 0.25, 0.8, 1], [0, 1, 1, 0]);

  // Gradient background transformation
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.6, 0.6]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-slate-950">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Mesh Gradient Background */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ opacity: gradientOpacity }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#064e3b_0%,_#022c22_50%,_#020617_100%)] opacity-80" />
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-600/20 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/30 blur-[120px]" />
        </motion.div>

        {/* 3D Scene */}
        <Scene3D scrollYProgress={scrollYProgress} />

        {/* Screen 1: Hero */}
        <motion.div 
          className="absolute inset-0 z-10 flex flex-col justify-center text-left px-8 md:px-16 max-w-7xl mx-auto w-full pointer-events-none"
          style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
        >
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Официальный WhatsApp для бизнеса.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Без блокировок и ограничений
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed">
              Платформа WaBase. Объедините команду, автоматизируйте ответы и перестаньте терять клиентов из-за блокировок.
            </p>
          </div>
          
        </motion.div>

        {/* Screen 2: Transformation */}
        <motion.div 
          className="absolute inset-0 z-20 flex flex-col md:flex-row items-center justify-center gap-12 px-8 max-w-7xl mx-auto pointer-events-none"
          style={{ opacity: screen2Opacity }}
        >
          {/* Left side: HTML Chat UI overlaying the 3D morphed background */}
          <motion.div 
            className="flex-1 flex justify-center pointer-events-auto"
            style={{ opacity: chatUiOpacity }}
          >
            <div className="w-full max-w-md p-8 space-y-6">
              <div className="w-3/4 h-14 bg-slate-800/80 backdrop-blur-md rounded-2xl rounded-tl-none border border-white/10 shadow-lg" />
              <div className="w-full h-14 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 rounded-2xl rounded-tr-none ml-auto shadow-lg" />
              <div className="w-2/3 h-14 bg-slate-800/80 backdrop-blur-md rounded-2xl rounded-tl-none border border-white/10 shadow-lg" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="flex-1 text-left pointer-events-auto"
            style={{ y: textY }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ваш бизнес в <br />
              <span className="text-emerald-400">безопасности</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Забудьте о серых схемах и постоянном страхе блокировки номера. Мы используем официальный WhatsApp Business API, чтобы вы могли сфокусироваться на продажах, а не на технических проблемах.
            </p>
            <ul className="space-y-4">
              {[
                'Зеленая галочка верификации',
                'Массовые рассылки без риска',
                'Интеграции с CRM'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-200">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
