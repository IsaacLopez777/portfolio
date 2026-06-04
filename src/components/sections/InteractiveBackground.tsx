'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Line {
  id: number;
  y: number;
  length: number;
  delay: number;
  speed: number;
}

interface Dot {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

interface CircleElement {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
}

const FIXED_LINES: Line[] = [
  { id: 0, y: 5, length: 75, delay: 0, speed: 8 },
  { id: 1, y: 11.5, length: 65, delay: 0.15, speed: 10 },
  { id: 2, y: 18, length: 80, delay: 0.3, speed: 9 },
  { id: 3, y: 24.5, length: 70, delay: 0.45, speed: 11 },
  { id: 4, y: 31, length: 85, delay: 0.6, speed: 8.5 },
  { id: 5, y: 37.5, length: 60, delay: 0.75, speed: 10.5 },
  { id: 6, y: 44, length: 78, delay: 0.9, speed: 9.5 },
  { id: 7, y: 50.5, length: 68, delay: 1.05, speed: 12 },
  { id: 8, y: 57, length: 82, delay: 1.2, speed: 8 },
  { id: 9, y: 63.5, length: 72, delay: 1.35, speed: 10 },
  { id: 10, y: 70, length: 88, delay: 1.5, speed: 9 },
  { id: 11, y: 76.5, length: 64, delay: 1.65, speed: 11 },
  { id: 12, y: 83, length: 76, delay: 1.8, speed: 10 },
  { id: 13, y: 89.5, length: 70, delay: 1.95, speed: 8.5 },
  { id: 14, y: 96, length: 80, delay: 2.1, speed: 9.5 },
];

const FIXED_DOTS: Dot[] = [
  { id: 0, x: 12, y: 15, size: 2, color: '#A8A29E' },
  { id: 1, x: 28, y: 22, size: 1.5, color: '#78716C' },
  { id: 2, x: 45, y: 8, size: 2.5, color: '#57534E' },
  { id: 3, x: 67, y: 35, size: 1.8, color: '#44403C' },
  { id: 4, x: 82, y: 12, size: 2, color: '#A8A29E' },
  { id: 5, x: 15, y: 48, size: 1.5, color: '#78716C' },
  { id: 6, x: 38, y: 55, size: 2.2, color: '#57534E' },
  { id: 7, x: 55, y: 42, size: 1.8, color: '#44403C' },
  { id: 8, x: 78, y: 58, size: 2, color: '#A8A29E' },
  { id: 9, x: 22, y: 72, size: 1.5, color: '#78716C' },
  { id: 10, x: 48, y: 68, size: 2.5, color: '#57534E' },
  { id: 11, x: 72, y: 78, size: 1.8, color: '#44403C' },
  { id: 12, x: 5, y: 92, size: 2, color: '#A8A29E' },
  { id: 13, x: 35, y: 88, size: 1.5, color: '#78716C' },
  { id: 14, x: 58, y: 95, size: 2.2, color: '#57534E' },
  { id: 15, x: 88, y: 42, size: 1.8, color: '#44403C' },
  { id: 16, x: 92, y: 68, size: 2, color: '#A8A29E' },
  { id: 17, x: 8, y: 38, size: 1.5, color: '#78716C' },
  { id: 18, x: 52, y: 25, size: 2.5, color: '#57534E' },
  { id: 19, x: 75, y: 92, size: 1.8, color: '#44403C' },
];

const FIXED_CIRCLES: CircleElement[] = [
  { id: 1, x: 15, y: 25, size: 30, rotation: 0 },
  { id: 2, x: 15, y: 25, size: 60, rotation: 30 },
  { id: 3, x: 15, y: 25, size: 90, rotation: 60 },
  { id: 4, x: 85, y: 20, size: 30, rotation: 15 },
  { id: 5, x: 85, y: 20, size: 60, rotation: 45 },
  { id: 6, x: 85, y: 20, size: 90, rotation: 75 },
  { id: 7, x: 80, y: 75, size: 30, rotation: 10 },
  { id: 8, x: 80, y: 75, size: 60, rotation: 40 },
  { id: 9, x: 80, y: 75, size: 90, rotation: 70 },
  { id: 10, x: 20, y: 80, size: 30, rotation: 20 },
  { id: 11, x: 20, y: 80, size: 60, rotation: 50 },
  { id: 12, x: 20, y: 80, size: 90, rotation: 80 },
  { id: 13, x: 50, y: 50, size: 30, rotation: 5 },
  { id: 14, x: 50, y: 50, size: 60, rotation: 35 },
  { id: 15, x: 50, y: 50, size: 90, rotation: 65 },
];

export default function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
      mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ 
        zIndex: -1, 
        background: 'linear-gradient(180deg, #FAFAF9 0%, #F5F5F4 50%, #FAFAF9 100%)',
      }}
    >
      <svg 
        className="absolute inset-0 w-full h-full"
        style={{ opacity: mounted ? 1 : 0 }}
      >
        <defs>
          <pattern id="dot-grid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="15" cy="15" r="0.8" fill="#D6D3D1" opacity="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />

        {FIXED_LINES.map((line) => (
          <motion.line
            key={`main-line-${line.id}`}
            x1="-10%"
            y1={`${line.y}%`}
            x2={`${line.length}%`}
            y2={`${line.y}%`}
            stroke="#A8A29E"
            strokeWidth="0.6"
            strokeLinecap="round"
            opacity={0.15}
            style={{ x: smoothMouseX }}
          />
        ))}

        {FIXED_CIRCLES.map((circle) => (
          <motion.g
            key={`circle-group-${circle.id}`}
            style={{ 
              x: smoothMouseX.get() > 50 ? circle.x - 2 : circle.x + 2,
              y: smoothMouseY.get() > 50 ? circle.y - 2 : circle.y + 2,
            }}
          >
            <motion.circle
              cx={`${circle.x}%`}
              cy={`${circle.y}%`}
              r={circle.size}
              fill="none"
              stroke="#A8A29E"
              strokeWidth={0.4}
              strokeDasharray={circle.id % 2 === 0 ? '4 4' : '8 8'}
              opacity={0.12}
              animate={{
                rotate: [circle.rotation, circle.rotation + 180, circle.rotation],
                scale: [1, 1.02, 1],
              }}
              transition={{
                rotate: { duration: 20 + circle.id * 2, repeat: Infinity, ease: 'linear' },
                scale: { duration: 4, repeat: Infinity },
              }}
              style={{
                x: smoothMouseX,
                y: smoothMouseY,
              }}
            />
          </motion.g>
        ))}

        {FIXED_DOTS.map((dot) => (
          <motion.circle
            key={`dot-${dot.id}`}
            cx={`${dot.x}%`}
            cy={`${dot.y}%`}
            r={dot.size}
            fill={dot.color}
            opacity={0.12}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.08, 0.18, 0.08],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: dot.id * 0.2,
            }}
          />
        ))}

        <motion.path
          d="M -5 85 Q 30 82 50 85 T 105 85"
          fill="none"
          stroke="#A8A29E"
          strokeWidth="1"
          opacity={0.12}
          style={{ x: smoothMouseX }}
          animate={{ 
            d: [
              "M -5 85 Q 30 82 50 85 T 105 85",
              "M -5 85 Q 30 88 50 85 T 105 85",
              "M -5 85 Q 30 82 50 85 T 105 85",
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.path
          d="M -5 15 Q 35 12 55 15 T 105 15"
          fill="none"
          stroke="#A8A29E"
          strokeWidth="1"
          opacity={0.1}
          style={{ x: smoothMouseX }}
          animate={{ 
            d: [
              "M -5 15 Q 35 12 55 15 T 105 15",
              "M -5 15 Q 35 18 55 15 T 105 15",
              "M -5 15 Q 35 12 55 15 T 105 15",
            ],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168,162,158,0.1) 0%, transparent 60%)',
          left: '50%',
          top: '50%',
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-4 h-4 rounded-full bg-[#78716C]"
        style={{
          left: `${smoothMouseX.get()}%`,
          top: `${smoothMouseY.get()}%`,
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`mouse-ring-${i}`}
          className="absolute rounded-full border border-[#A8A29E]"
          style={{
            left: `${smoothMouseX.get()}%`,
            top: `${smoothMouseY.get()}%`,
            width: (i + 1) * 80,
            height: (i + 1) * 80,
            x: '-50%',
            y: '-50%',
          }}
          animate={{
            scale: [0.9, 1.1, 0.9],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}

      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(245,245,244,0.5) 50%, transparent 100%)',
        }}
        animate={{
          x: [-200, 1200],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}