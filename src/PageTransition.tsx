import { motion } from "motion/react";
import { ReactNode } from "react";

const slideLayer1 = {
  initial: { top: "100vh" },
  animate: { top: "-100vh", transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } },
  exit: { top: ["100vh", "0vh"], transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }
};

const slideLayer2 = {
  initial: { top: "100vh" },
  animate: { top: "-100vh", transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.15 } },
  exit: { top: ["100vh", "0vh"], transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.15 } }
};

const slideLayer3 = {
  initial: { top: "100vh" },
  animate: { top: "-100vh", transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.3 } },
  exit: { top: ["100vh", "0vh"], transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.3 } }
};

export default function PageTransition({ children }: { children: ReactNode }) {
  // To avoid seeing the unstyled page enter instantly, we keep the page wrapped in an opacity fade
  // while the sweeping rectangles move.
  return (
    <>
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)", transition: { duration: 0.6, delay: 0.5 } }}
        exit={{ opacity: 0, filter: "blur(10px)", transition: { duration: 0.6 } }}
        className="w-full min-h-screen"
      >
        {children}
      </motion.div>

      {/* Layer 1: Dark Navy */}
      <motion.div
        className="fixed left-0 w-full h-[150vh] bg-paper z-[9997] pointer-events-none"
        variants={slideLayer1}
        initial="initial"
        animate="animate"
        exit="exit"
      />
      {/* Layer 2: Ink White */}
      <motion.div
        className="fixed left-0 w-full h-[150vh] bg-ink z-[9998] pointer-events-none"
        variants={slideLayer2}
        initial="initial"
        animate="animate"
        exit="exit"
      />
      {/* Layer 3: Brand Cyan */}
      <motion.div
        className="fixed left-0 w-full h-[150vh] bg-brand z-[9999] pointer-events-none shadow-[0_0_50px_rgba(0,240,255,0.8)]"
        variants={slideLayer3}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-paper uppercase font-display text-4xl md:text-8xl tracking-tighter mix-blend-overlay opacity-30">
          Draft
        </div>
      </motion.div>
    </>
  );
}
