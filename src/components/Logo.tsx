import { SVGProps } from 'react';

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="pill1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#047857" />
          <stop offset="100%" stopColor="#022c22" />
        </linearGradient>
        <linearGradient id="pill2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="pill3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="pill4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        <filter id="shadow-pill" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Back Checkmark - Left Leg */}
      <path d="M20 60 L40 80" stroke="url(#pill1)" strokeWidth="18" strokeLinecap="round" filter="url(#shadow-pill)" />
      
      {/* Back Checkmark - Right Leg */}
      <path d="M40 80 L80 40" stroke="url(#pill2)" strokeWidth="18" strokeLinecap="round" filter="url(#shadow-pill)" />

      {/* Front Checkmark - Left Leg */}
      <path d="M50 60 L70 80" stroke="url(#pill3)" strokeWidth="18" strokeLinecap="round" filter="url(#shadow-pill)" />
      
      {/* Front Checkmark - Right Leg */}
      <path d="M70 80 L110 40" stroke="url(#pill4)" strokeWidth="18" strokeLinecap="round" filter="url(#shadow-pill)" />
    </svg>
  );
}
