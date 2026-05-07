"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  number,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <span className="section-number">// {number}</span>
      <h2 className="section-title text-3xl md:text-4xl lg:text-5xl text-white mt-2">
        {title}
        <span className="text-[#00e5ff]">.</span>
      </h2>
      <div className="flex items-center gap-4 mt-4">
        <div className="h-px w-12 bg-[#00e5ff]" />
        {subtitle && (
          <p className="text-[#8892b0] text-sm md:text-base">{subtitle}</p>
        )}
        <div className="h-px flex-1 bg-[#0a1628]" />
      </div>
    </motion.div>
  );
}
