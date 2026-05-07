"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { experiences } from "@/data";
import { Briefcase, Code, GraduationCap, User } from "lucide-react";

const typeConfig = {
  Internship: {
    icon: Briefcase,
    color: "#00e5ff",
    bg: "rgba(0,229,255,0.1)",
    border: "rgba(0,229,255,0.3)",
  },
  Freelance: {
    icon: Code,
    color: "#64ffda",
    bg: "rgba(100,255,218,0.1)",
    border: "rgba(100,255,218,0.3)",
  },
  Education: {
    icon: GraduationCap,
    color: "#818cf8",
    bg: "rgba(129,140,248,0.1)",
    border: "rgba(129,140,248,0.3)",
  },
  Personal: {
    icon: User,
    color: "#f472b6",
    bg: "rgba(244,114,182,0.1)",
    border: "rgba(244,114,182,0.3)",
  },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute right-0 top-1/3 w-64 h-64 bg-[#818cf8]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="03"
          title="Experience"
          subtitle="My professional journey and learning path"
        />

        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px">
            <div className="h-full timeline-line opacity-40 rounded-full" />
          </div>

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const config = typeConfig[exp.type];
              const Icon = config.icon;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="relative flex gap-8"
                >
                  {/* Icon dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center border"
                      style={{
                        background: config.bg,
                        borderColor: config.border,
                      }}
                    >
                      <Icon size={18} style={{ color: config.color }} />
                    </motion.div>
                    {/* Current badge */}
                    {exp.current && (
                      <div
                        className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse border-2 border-[#030712]"
                        style={{ background: config.color }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex-1 glass glass-hover rounded-2xl border border-white/5 p-6 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-display font-bold text-white text-lg">
                          {exp.role}
                        </h3>
                        <p
                          className="font-mono text-sm"
                          style={{ color: config.color }}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="font-mono text-xs text-[#8892b0] bg-[#0a1628] px-3 py-1 rounded-full border border-white/5 whitespace-nowrap">
                          {exp.duration}
                        </span>
                        <span
                          className="font-mono text-[10px] px-2 py-0.5 rounded-full border"
                          style={{
                            color: config.color,
                            borderColor: config.border,
                            background: config.bg,
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-[#8892b0] text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] px-2 py-0.5 bg-[#0a1628] text-[#8892b0] rounded border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
