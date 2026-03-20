import { motion } from 'motion/react';
import Logo from './Logo';

export default function Integrations() {
  const crms = [
    { name: "amoCRM", color: "bg-[#0A7BFF]", textColor: "text-white" },
    { name: "Битрикс24", color: "bg-[#2FC6F6]", textColor: "text-white" },
    { name: "Yclients", color: "bg-[#FF005B]", textColor: "text-white" },
    { name: "Altegio", color: "bg-[#6B46C1]", textColor: "text-white" },
    { name: "iiko", color: "bg-[#00A15D]", textColor: "text-white" },
    { name: "RetailCRM", color: "bg-[#FF6B00]", textColor: "text-white" },
    { name: "1C", color: "bg-[#E3000F]", textColor: "text-white" }
  ];

  return (
    <section id="integrations" className="py-32 relative border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            Работает там, где вы уже работаете.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Бесшовная интеграция с вашей CRM за 5 минут. Сделки создаются автоматически, переписка сохраняется в карточке клиента.
          </p>
        </motion.div>

        {/* Visual Map */}
        <div className="relative h-[500px] flex items-center justify-center mt-10">
          {/* Center Logo */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="absolute z-20 w-32 h-32 bg-white rounded-3xl shadow-[0_0_40px_rgba(10,128,94,0.3)] flex items-center justify-center border border-gray-100"
          >
            <Logo className="w-20 h-20" />
          </motion.div>

          {/* Orbit Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[300px] h-[300px] rounded-full border border-gray-200/50 absolute" />
            <div className="w-[450px] h-[450px] rounded-full border border-gray-200/50 absolute" />
          </div>

          {/* Orbiting Elements */}
          <motion.div 
            style={{ willChange: "transform" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {crms.map((crm, i) => {
              const angle = (i * Math.PI * 2) / crms.length;
              const radius = i % 2 === 0 ? 150 : 225; // Alternate between inner and outer orbit
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div 
                  key={crm.name}
                  className="absolute z-10 pointer-events-auto"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <motion.div 
                    style={{ willChange: "transform" }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className={`w-24 h-24 ${crm.color} rounded-2xl shadow-xl flex items-center justify-center border-4 border-white hover:scale-110 transition-transform cursor-pointer group relative`}
                  >
                    <span className={`${crm.textColor} font-bold text-sm text-center px-2`}>{crm.name}</span>
                    {/* Glow */}
                    <div className={`absolute inset-0 ${crm.color} blur-xl opacity-50 -z-10 rounded-2xl group-hover:opacity-80 transition-opacity`} />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
