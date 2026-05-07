"use client";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#030712] flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mb-8"
      >
        <div className="w-20 h-20 rounded-xl border-2 border-[#00e5ff] flex items-center justify-center relative overflow-hidden">
          <span className="font-display text-2xl font-black text-gradient z-10">
            HR
          </span>
          <div className="absolute inset-0 bg-[#00e5ff] opacity-5 animate-pulse2" />
        </div>
        {/* Rotating ring */}
        <div className="absolute -inset-2 rounded-xl border border-[#00e5ff] opacity-30 animate-spin-slow" />
      </motion.div>

      {/* Loading bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-48 h-0.5 bg-[#0a1628] relative overflow-hidden rounded-full"
      >
        <div className="loader-bar absolute inset-y-0 w-1/3 bg-[#00e5ff] rounded-full" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.6 }}
        className="mt-4 font-mono text-xs text-[#00e5ff] tracking-widest"
      >
        INITIALIZING...
      </motion.p>
    </motion.div>
  );
}
