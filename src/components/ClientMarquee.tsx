import { motion } from 'motion/react';

export default function ClientMarquee() {
  const logos = [
    "Yclients", "Altegio", "amoCRM", "Битрикс24", "iiko", "RetailCRM", "1C",
    "Yclients", "Altegio", "amoCRM", "Битрикс24", "iiko", "RetailCRM", "1C"
  ];

  return (
    <div className="py-10 border-b border-gray-100 bg-white/50 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
          Нам доверяют более 500+ компаний
        </p>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <motion.div
          style={{ willChange: "transform" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="mx-8 text-2xl font-bold text-gray-300 opacity-50 hover:opacity-100 hover:text-gray-500 transition-all cursor-default"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
