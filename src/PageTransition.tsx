import { motion } from "motion/react";
import { ReactNode } from "react";

// Each layer sweeps: bottom → covers screen → exits through top
// Using keyframes so it's ONE continuous motion — never stops
const makeLayer = (delay: number) => ({
  initial: { top: "100vh" },
  animate: {
    top: ["100vh", "0vh", "-150vh"],
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay,
      times: [0, 0.35, 1],
    },
  },
});

const layer1 = makeLayer(0);      // Dark Navy
const layer2 = makeLayer(0.08);   // Ink White
const layer3 = makeLayer(0.16);   // Brand Cyan

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Page content fades in after the wipe passes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.55, duration: 0.4 } }}
        exit={{ opacity: 0, transition: { duration: 0.25 } }}
        className="w-full min-h-screen"
      >
        {children}
      </motion.div>

      {/* Layer 1: Navy */}
      <motion.div
        className="fixed left-0 w-full h-[150vh] bg-paper z-[9997] pointer-events-none will-change-transform"
        initial={layer1.initial}
        animate={layer1.animate}
        exit={{ opacity: 0, transition: { duration: 0 } }}
      />

      {/* Layer 2: White */}
      <motion.div
        className="fixed left-0 w-full h-[150vh] bg-ink z-[9998] pointer-events-none will-change-transform"
        initial={layer2.initial}
        animate={layer2.animate}
        exit={{ opacity: 0, transition: { duration: 0 } }}
      />

      {/* Layer 3: Cyan Brand */}
      <motion.div
        className="fixed left-0 w-full h-[150vh] bg-brand z-[9999] pointer-events-none will-change-transform overflow-hidden"
        initial={layer3.initial}
        animate={layer3.animate}
        exit={{ opacity: 0, transition: { duration: 0 } }}
      >
        {/* "Draft" ghost watermark during wipe */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-5xl md:text-9xl uppercase tracking-tighter select-none pointer-events-none"
          style={{ color: "rgba(0,15,30,0.15)", letterSpacing: "-0.05em" }}
        >
          Draft
        </div>
      </motion.div>
    </>
  );
}
