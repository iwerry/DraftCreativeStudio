import { motion } from "motion/react";
import { Instagram } from "lucide-react";

export default function FloatingWidgets() {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
      {/* Instagram */}
      <motion.a
        href="https://www.instagram.com/draftcreativestudio/"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full flex items-center justify-center text-white shadow-lg relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <Instagram className="w-5 h-5 mx-auto" />
        {/* Tooltip */}
        <div className="absolute right-full mr-4 bg-paper/90 backdrop-blur text-ink text-xs font-bold uppercase py-2 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-ink/10 shadow-xl">
          Siga no Instagram
        </div>
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/556198905720"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        {/* Tooltip */}
        <div className="absolute right-full mr-4 bg-paper/90 backdrop-blur text-ink text-xs font-bold uppercase py-2 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-ink/10 shadow-xl">
          Fale Conosco
        </div>
      </motion.a>
    </div>
  );
}
