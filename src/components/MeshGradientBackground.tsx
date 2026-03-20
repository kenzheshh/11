import { motion } from 'motion/react';

export default function MeshGradientBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#fafafa]">
      <div className="absolute top-0 left-0 w-full h-full opacity-40 mix-blend-multiply filter blur-[100px]">
        <motion.div
          style={{ willChange: "transform" }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand/30 rounded-full"
        />
        <motion.div
          style={{ willChange: "transform" }}
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-blue-400/20 rounded-full"
        />
        <motion.div
          style={{ willChange: "transform" }}
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-emerald-400/20 rounded-full"
        />
      </div>
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>
    </div>
  );
}
