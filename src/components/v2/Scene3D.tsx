import React, { useEffect, useRef } from 'react';
import { motion, MotionValue, useTransform, useSpring } from 'framer-motion';

interface Scene3DProps {
  scrollYProgress: MotionValue<number>;
}

export default function Scene3D({ scrollYProgress }: Scene3DProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const corePathRef = useRef<SVGPathElement>(null);
  const requestRef = useRef<number>();

  // Scroll transformations
  // Keep bubble shape, just move it from right to left
  const scaleX = useTransform(scrollYProgress, [0, 0.25, 1], [1, 1, 1]);
  const scaleY = useTransform(scrollYProgress, [0, 0.25, 1], [1, 1, 1]);
  
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const startX = isMobile ? 0 : 300; // px offset to the right
  const targetX = isMobile ? 0 : -300; // px offset to the left
  const posX = useTransform(scrollYProgress, [0, 0.25, 1], [startX, targetX, targetX]); 

  // Smooth the scroll values
  const smoothScaleX = useSpring(scaleX, { stiffness: 100, damping: 20 });
  const smoothScaleY = useSpring(scaleY, { stiffness: 100, damping: 20 });
  const smoothPosX = useSpring(posX, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const path = pathRef.current;
    const corePath = corePathRef.current;
    if (!path || !corePath) return;

    const n = 60; 
    const radius = 100;
    const center = { x: 200, y: 200 };
    let mouse = { x: -1000, y: -1000 };
    let points: any[] = [];

    for (let i = 0; i < n; i++) {
      const angle = (i / n) * Math.PI * 2;
      let currentRadius = radius;
      
      if (angle > 2.2 && angle < 2.6) {
        let t = (angle - 2.2) / 0.4;
        let spike = Math.sin(t * Math.PI) * 45; 
        currentRadius += spike;
      }

      points.push({
        x: center.x + Math.cos(angle) * currentRadius,
        y: center.y + Math.sin(angle) * currentRadius,
        ox: center.x + Math.cos(angle) * currentRadius,
        oy: center.y + Math.sin(angle) * currentRadius,
        a: angle,
        vx: 0, vy: 0
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const svg = svgRef.current;
      if (!svg) return;
      const rect = svg.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) * (400 / rect.width);
      mouse.y = (e.clientY - rect.top) * (400 / rect.height);
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    function createSmoothPath(pts: any[]) {
      let midX = (pts[0].x + pts[n - 1].x) / 2;
      let midY = (pts[0].y + pts[n - 1].y) / 2;
      let d = `M ${midX} ${midY} `;

      for (let i = 0; i < n; i++) {
        let p1 = pts[i];
        let p2 = pts[(i + 1) % n];
        let mx = (p1.x + p2.x) / 2;
        let my = (p1.y + p2.y) / 2;
        d += `Q ${p1.x} ${p1.y} ${mx} ${my} `;
      }
      return d + 'Z';
    }

    let time = 0;
    function animate() {
      time += 0.05;
      
      points.forEach((p, i) => {
        let breathe = Math.sin(time + i * 0.15) * 2;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 90) { 
          let mouseDistC = Math.sqrt(Math.pow(mouse.x - 200, 2) + Math.pow(mouse.y - 200, 2));
          let pointDistC = Math.sqrt(Math.pow(p.ox - 200, 2) + Math.pow(p.oy - 200, 2));

          if (mouseDistC > pointDistC - 15) {
              const force = (90 - dist) * 0.12; 
              p.vx -= Math.cos(p.a) * force;
              p.vy -= Math.sin(p.a) * force;
          }
        }

        p.vx += ((p.ox + Math.cos(p.a) * breathe) - p.x) * 0.08;
        p.vy += ((p.oy + Math.sin(p.a) * breathe) - p.y) * 0.08;
        
        p.vx *= 0.85; 
        p.vy *= 0.85;

        p.x += p.vx;
        p.y += p.vy;
      });

      if (pathRef.current) {
        pathRef.current.setAttribute('d', createSmoothPath(points));
      }

      let coreDx = mouse.x !== -1000 ? mouse.x - 200 : 0;
      let coreDy = mouse.y !== -1000 ? mouse.y - 200 : 0;
      
      if(coreDx > 40) coreDx = 40; if(coreDx < -40) coreDx = -40;
      if(coreDy > 40) coreDy = 40; if(coreDy < -40) coreDy = -40;

      let corePoints = points.map(p => ({
        x: 200 + (p.ox - 200) * 0.45 + coreDx * 0.15, 
        y: 200 + (p.oy - 200) * 0.45 + coreDy * 0.15
      }));
      
      if (corePathRef.current) {
        corePathRef.current.setAttribute('d', createSmoothPath(corePoints));
      }
      
      requestRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 z-0 pointer-events-auto flex items-center justify-center"
      style={{
        x: smoothPosX,
        scaleX: smoothScaleX,
        scaleY: smoothScaleY,
      }}
    >
      <svg 
        ref={svgRef}
        viewBox="0 0 400 400" 
        className="w-[600px] h-[600px] max-w-full max-h-full drop-shadow-[0px_25px_35px_rgba(16,185,129,0.3)] cursor-pointer"
      >
        <defs>
          <linearGradient id="bubbleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>

          <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          
          <filter id="blurFilter">
            <feGaussianBlur stdDeviation="15" />
          </filter>
        </defs>

        <path ref={corePathRef} fill="url(#coreGrad)" filter="url(#blurFilter)" d="" opacity="0.8" />
        <path ref={pathRef} fill="url(#bubbleGrad)" d="" opacity="0.85" />
      </svg>
    </motion.div>
  );
}
