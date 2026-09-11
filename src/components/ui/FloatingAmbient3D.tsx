import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const FloatingAmbient3D: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const yDrift1 = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const yDrift2 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const yDrift3 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -240]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Floating Rose / Luxury Petal 1 (Audiovisual Marketing Aesthetic) */}
      <motion.div
        style={{ y: yDrift1, rotate: rotate1 }}
        className="absolute top-[25%] left-[8%] w-10 h-10 rounded-[40%_60%_70%_30%/40%_50%_60%_55%] bg-gradient-to-br from-red-600/30 via-pink-700/20 to-purple-900/10 blur-[1px] shadow-[0_0_20px_rgba(225,29,72,0.3)] animate-pulse"
      />

      {/* Floating Luxury Petal 2 */}
      <motion.div
        style={{ y: yDrift2, rotate: rotate2 }}
        className="absolute top-[60%] right-[10%] w-14 h-14 rounded-[50%_50%_70%_30%/30%_60%_40%_70%] bg-gradient-to-tr from-rose-500/25 via-pink-600/15 to-transparent blur-[1px] shadow-[0_0_25px_rgba(244,63,94,0.25)]"
      />

      {/* Floating Optical Lens Flare Orb 1 */}
      <motion.div
        style={{ y: yDrift3 }}
        className="absolute top-[45%] left-[85%] w-24 h-24 rounded-full bg-cyan-500/10 blur-xl mix-blend-screen"
      />

      {/* Floating Optical Lens Flare Orb 2 */}
      <motion.div
        style={{ y: yDrift1 }}
        className="absolute top-[80%] left-[15%] w-32 h-32 rounded-full bg-purple-600/10 blur-2xl mix-blend-screen"
      />

      {/* Floating Sparkle Elements */}
      <div className="absolute top-[18%] right-[22%] w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#00F0FF] animate-ping opacity-60" />
      <div className="absolute top-[52%] left-[18%] w-2 h-2 rounded-full bg-purple-300 shadow-[0_0_12px_#7928CA] animate-pulse opacity-70" />
      <div className="absolute top-[88%] right-[30%] w-1.5 h-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_#10B981] animate-ping opacity-50" />
    </div>
  );
};
