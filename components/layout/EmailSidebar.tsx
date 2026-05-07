"use client";
import { motion } from "framer-motion";

export default function EmailSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="fixed right-6 bottom-0 z-40 hidden lg:flex flex-col items-center gap-4"
    >
      <a
        href="mailto:harshrana15april2020@gmail.com"
        className="group"
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="font-mono text-xs text-[#8892b0] group-hover:text-[#00e5ff] tracking-widest transition-colors duration-200 group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]">
          harshrana15april2020@gmail.com
        </span>
      </a>
      <div className="w-px h-24 bg-gradient-to-b from-[#00e5ff]/40 to-transparent" />
    </motion.div>
  );
}
