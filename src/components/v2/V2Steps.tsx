import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { MessageCircle, Send, Bot, CheckCircle2 } from 'lucide-react';

export default function V2Steps() {
  const [step, setStep] = useState(0);

  const handleGenerate = () => {
    setStep(1);
    setTimeout(() => {
      setStep(2);
    }, 1500);
  };

  const handleSend = () => {
    setStep(3);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10b981', '#34d399', '#059669']
    });
    setTimeout(() => {
      setStep(4);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-950 py-24 relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px]" />

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Магия <span className="text-emerald-400">WaBase</span> в действии
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Посмотрите, как ИИ помогает вашим менеджерам отвечать быстрее и точнее.
        </p>
      </div>

      {/* Interactive Chat Interface */}
      <div className="w-full max-w-3xl mx-auto bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden relative z-10">
        
        {/* Header */}
        <div className="bg-slate-800/50 border-b border-slate-800 p-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-medium text-slate-200">Клиент: Александр</h3>
            <p className="text-xs text-slate-400">Онлайн</p>
          </div>
        </div>

        {/* Chat Area */}
        <div className="p-6 space-y-6 h-[400px] overflow-y-auto flex flex-col">
          
          {/* Client Message */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-4"
          >
            <div className="w-8 h-8 rounded-full bg-slate-800 flex-shrink-0" />
            <div className="bg-slate-800 text-slate-200 p-4 rounded-2xl rounded-tl-none max-w-[80%]">
              Здравствуйте! Подскажите, сколько стоит внедрение вашей платформы для команды из 5 человек? И есть ли интеграция с amoCRM?
            </div>
          </motion.div>

          {/* AI Generation Step */}
          {step >= 1 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-4 self-end flex-row-reverse"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-100 p-4 rounded-2xl rounded-tr-none max-w-[80%]">
                {step === 1 ? (
                  <div className="flex items-center gap-2">
                    <span className="animate-pulse">ИИ генерирует ответ...</span>
                  </div>
                ) : (
                  <div>
                    Здравствуйте, Александр! Да, у нас есть полная интеграция с amoCRM. Для команды из 5 человек подойдет тариф "Бизнес". Стоимость составит 4990 руб/мес. Хотите, я пришлю вам подробную презентацию?
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Client Final Reply */}
          {step >= 4 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-slate-800 flex-shrink-0" />
              <div className="bg-slate-800 text-slate-200 p-4 rounded-2xl rounded-tl-none max-w-[80%]">
                Отлично, давайте презентацию!
              </div>
            </motion.div>
          )}

        </div>

        {/* Action Area */}
        <div className="p-4 bg-slate-800/30 border-t border-slate-800">
          {step === 0 && (
            <div className="flex justify-center relative">
              <div className="absolute -top-12 flex flex-col items-center animate-bounce">
                <span className="text-xs text-emerald-400 font-medium mb-1">Нажмите сюда</span>
                <div className="w-1 h-4 bg-emerald-400 rounded-full" />
              </div>
              <button 
                onClick={handleGenerate}
                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                <Bot className="w-5 h-5" />
                Сгенерировать ответ ИИ
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="flex justify-between items-center gap-4">
              <div className="text-sm text-slate-400">
                ИИ подготовил идеальный ответ.
              </div>
              <button 
                onClick={handleSend}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                <Send className="w-4 h-4" />
                Отправить клиенту
              </button>
            </div>
          )}

          {step >= 3 && (
            <div className="flex items-center justify-center gap-2 text-emerald-400 font-medium py-2">
              <CheckCircle2 className="w-5 h-5" />
              Сообщение успешно отправлено!
            </div>
          )}
        </div>

      </div>

      {/* Big CTA Button */}
      <div className="mt-20 relative z-10 flex justify-center">
        <button className="px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-bold text-xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] hover:-translate-y-1 relative overflow-hidden group">
          <span className="relative z-10">Подключить WABA</span>
          <motion.div 
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0"
          />
        </button>
      </div>
    </div>
  );
}
