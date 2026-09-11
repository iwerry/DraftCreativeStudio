import React, { useMemo } from 'react';
import { motion } from 'motion/react';

export const CosmicBackground: React.FC = () => {
  // Deterministic star field for optimal performance
  const stars = useMemo(() => {
    return Array.from({ length: 95 }).map((_, i) => ({
      id: i,
      x: (i * 17.7 + 3) % 98 + 1, // 1% to 99% width
      y: (i * 23.3 + 7) % 98 + 1, // 1% to 99% height
      size: i % 4 === 0 ? 2.5 : i % 2 === 0 ? 1.5 : 1,
      delay: (i % 8) * 0.6,
      duration: 2.8 + (i % 5) * 0.7,
      color: i % 3 === 0 ? '#00F0FF' : i % 5 === 0 ? '#C084FC' : '#FFFFFF',
      glow: i % 4 === 0,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none">
      {/* 1. Moving Aurora / Fluid Ambient Lights */}
      <motion.div
        className="absolute w-[650px] h-[650px] rounded-full bg-cyan-600/12 blur-[140px]"
        animate={{
          x: ['-20%', '35%', '-10%', '-20%'],
          y: ['-10%', '30%', '10%', '-10%'],
          scale: [1, 1.25, 0.9, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '5%', left: '10%' }}
      />

      <motion.div
        className="absolute w-[750px] h-[750px] rounded-full bg-purple-600/12 blur-[160px]"
        animate={{
          x: ['30%', '-25%', '15%', '30%'],
          y: ['35%', '-15%', '25%', '35%'],
          scale: [1, 0.85, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '30%', right: '5%' }}
      />

      <motion.div
        className="absolute w-[550px] h-[550px] rounded-full bg-indigo-600/10 blur-[130px]"
        animate={{
          x: ['-15%', '25%', '-20%', '-15%'],
          y: ['15%', '-25%', '30%', '15%'],
          scale: [0.95, 1.15, 1, 0.95],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ bottom: '10%', left: '25%' }}
      />

      {/* 2. Delicate Twinkling Stars Floating in Background */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            boxShadow: star.glow ? `0 0 ${star.size * 3}px ${star.color}` : 'none',
          }}
          animate={{
            opacity: [0.12, 0.85, 0.12],
            scale: [0.75, 1.25, 0.75],
            y: ['0px', '-14px', '0px'],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
