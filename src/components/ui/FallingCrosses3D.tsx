import React, { useMemo } from 'react';
import { motion } from 'motion/react';

interface CrossConfig {
  id: number;
  x: number; // 0 to 100%
  size: number; // px
  duration: number; // seconds
  delay: number; // seconds
  opacity: number;
  rotationSpeedX: number;
  rotationSpeedY: number;
  rotationSpeedZ: number;
  color: string;
  glow: boolean;
  blur: string;
}

export const FallingCrosses3D: React.FC = () => {
  // Generate a balanced set of 3D gamer crosses at different depths
  const crosses = useMemo<CrossConfig[]>(() => {
    const colors = ['#00F0FF', '#A855F7', '#38BDF8', '#C084FC', '#F43F5E', '#FFFFFF'];
    return Array.from({ length: 32 }).map((_, i) => {
      const depth = i % 3; // 0 = far (small, slow), 1 = mid, 2 = near (large, fast)
      return {
        id: i,
        x: (i * 3.1 + (i % 5) * 19.3) % 96 + 2, // Distributed horizontally
        size: depth === 0 ? 14 : depth === 1 ? 22 : 32,
        duration: depth === 0 ? 18 + (i % 4) * 2 : depth === 1 ? 12 + (i % 3) * 2 : 8 + (i % 3) * 1.5,
        delay: -((i * 1.2) % 16), // Negative delay so they are immediately visible on screen!
        opacity: depth === 0 ? 0.18 : depth === 1 ? 0.32 : 0.5,
        rotationSpeedX: (i % 2 === 0 ? 1 : -1) * (360 + (i % 3) * 180),
        rotationSpeedY: (i % 3 === 0 ? 1 : -1) * (360 + (i % 4) * 120),
        rotationSpeedZ: (i % 2 === 0 ? 1 : -1) * 180,
        color: colors[i % colors.length],
        glow: depth === 2,
        blur: depth === 0 ? 'blur-[1px]' : '',
      };
    });
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
      style={{ perspective: '1000px' }}
    >
      {crosses.map((c) => (
        <motion.div
          key={c.id}
          className={`absolute ${c.blur}`}
          style={{
            left: `${c.x}%`,
            width: `${c.size}px`,
            height: `${c.size}px`,
            transformStyle: 'preserve-3d',
          }}
          initial={{ y: '-10vh', rotateX: 0, rotateY: 0, rotateZ: 0 }}
          animate={{
            y: ['-10vh', '115vh'],
            rotateX: [0, c.rotationSpeedX],
            rotateY: [0, c.rotationSpeedY],
            rotateZ: [0, c.rotationSpeedZ],
          }}
          transition={{
            duration: c.duration,
            delay: c.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Geometric 3D Gamer Plus Symbol */}
          <div
            className="relative w-full h-full"
            style={{
              opacity: c.opacity,
              filter: c.glow ? `drop-shadow(0 0 10px ${c.color}) drop-shadow(0 0 4px ${c.color})` : 'none',
            }}
          >
            {/* Horizontal Bar */}
            <div
              className="absolute top-1/2 left-0 w-full -translate-y-1/2 rounded-full"
              style={{
                height: `${Math.max(2, Math.round(c.size * 0.28))}px`,
                backgroundColor: c.color,
                boxShadow: `inset 0 0 2px rgba(255,255,255,0.8), 0 0 6px ${c.color}`,
              }}
            />
            {/* Vertical Bar */}
            <div
              className="absolute left-1/2 top-0 h-full -translate-x-1/2 rounded-full"
              style={{
                width: `${Math.max(2, Math.round(c.size * 0.28))}px`,
                backgroundColor: c.color,
                boxShadow: `inset 0 0 2px rgba(255,255,255,0.8), 0 0 6px ${c.color}`,
              }}
            />
            {/* Central 3D Core Highlight */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-white"
              style={{
                width: `${Math.max(2, Math.round(c.size * 0.22))}px`,
                height: `${Math.max(2, Math.round(c.size * 0.22))}px`,
                opacity: 0.9,
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
