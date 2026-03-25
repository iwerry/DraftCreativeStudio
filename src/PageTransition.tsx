import { motion } from "motion/react";
import { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full min-h-screen">
      {/* Page content renders immediately underneath — visible through overlay */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
        exit={{ opacity: 0, y: -8, transition: { duration: 0.3, ease: "easeIn" } }}
        className="w-full min-h-screen"
      >
        {children}
      </motion.div>

      {/* Semi-transparent overlay: fades in, holds, then fades away — lets you see the page load */}
      <motion.div
        className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{
          opacity: [1, 1, 0],
          transition: {
            duration: 0.9,
            times: [0, 0.5, 1],
            ease: "easeInOut",
          },
        }}
        exit={{ opacity: 0, transition: { duration: 0 } }}
        style={{ background: "rgba(10, 15, 30, 0.88)", backdropFilter: "blur(8px)" }}
      >
        {/* Draft logo + pulse ring */}
        <motion.div
          className="flex flex-col items-center gap-6 select-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.9, 1, 1, 0.95],
            transition: { duration: 0.9, times: [0, 0.2, 0.6, 1], ease: "easeInOut" },
          }}
        >
          {/* Pulsing glow ring */}
          <div className="relative flex items-center justify-center">
            <motion.div
              className="absolute w-28 h-28 rounded-full"
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ background: "radial-gradient(circle, rgba(0,240,255,0.5) 0%, transparent 70%)" }}
            />
            <img
              src="/draftlogo.svg"
              alt="Draft"
              className="w-16 h-16 relative z-10 drop-shadow-[0_0_20px_rgba(0,240,255,0.8)]"
              style={{ filter: "brightness(0) invert(1) drop-shadow(0 0 15px rgba(0,240,255,0.9))" }}
            />
          </div>

          {/* Brand text */}
          <p
            className="font-display uppercase tracking-[0.35em] text-sm"
            style={{ color: "rgba(0,240,255,0.7)" }}
          >
            Draft Creative Studio
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
