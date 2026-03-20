import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

export default function ConnectingLine() {
  const { scrollYProgress } = useScroll();
  // Start at 0.1 so it's visible on the first screen, end at 1.1
  const adjustedProgress = useTransform(scrollYProgress, [0, 1], [0.1, 1.1]);
  const scaleY = useSpring(adjustedProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => setHeight(document.body.scrollHeight);
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(document.body);
    return () => observer.disconnect();
  }, []);

  const pathD = "M 50 0 C 90 100, 10 200, 50 300 C 90 400, 10 500, 50 600 C 90 700, 10 800, 50 900 C 90 950, 50 1000, 50 1000";

  return (
    <div 
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] pointer-events-none z-0 overflow-hidden" 
      style={{ height: height > 0 ? height : '100vh' }}
    >
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 1000">
        <defs>
          <linearGradient id="line-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0A805E" stopOpacity="0" />
            <stop offset="10%" stopColor="#0A805E" stopOpacity="0.5" />
            <stop offset="90%" stopColor="#0A805E" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0A805E" stopOpacity="0" />
          </linearGradient>
          <mask id="line-mask">
            <motion.path
              d={pathD}
              fill="none"
              stroke="white"
              strokeWidth="10"
              strokeLinecap="round"
              style={{ pathLength: scaleY }}
            />
          </mask>
        </defs>
        <path
          d={pathD}
          fill="none"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          strokeDasharray="6 6"
          mask="url(#line-mask)"
        />
      </svg>
    </div>
  );
}
