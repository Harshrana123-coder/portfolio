"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { skills, personalInfo } from "@/data";
import {
  SiHtml5,
  SiCss as SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiDocker,
  SiGithub,
} from "react-icons/si";

const iconMap: Record<string, React.ElementType> = {
  html: SiHtml5,
  css: SiCss3,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  python: SiPython,
  mongodb: SiMongodb,
  mysql: SiMysql,
  firebase: SiFirebase,
  docker: SiDocker,
  github: SiGithub,
};

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      {/* Subtle bg glow */}
      <div className="absolute right-0 top-1/2 w-72 h-72 bg-[#00e5ff]/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="01"
          title="About Me"
          subtitle="A little bit about who I am and what I do"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Avatar placeholder */}
            <div className="relative w-48 h-48 mb-8">
              <div className="absolute inset-0 rounded-2xl border-2 border-[#00e5ff]/30 bg-gradient-to-br from-[#00e5ff]/10 to-[#64ffda]/5 flex items-center justify-center">
                <span className="font-display font-black text-5xl text-gradient">
                  HR
                </span>
              </div>
              {/* Decorative corner accent */}
              <div className="absolute -bottom-2 -right-2 w-full h-full rounded-2xl border-2 border-[#00e5ff]/20" />
              <div className="absolute top-2 -right-4 w-3 h-3 bg-[#00e5ff] rounded-full animate-pulse" />
            </div>

            <div className="space-y-4 text-[#8892b0] leading-relaxed">
              <p>
                Hey! I'm{" "}
                <span className="text-[#00e5ff] font-medium">Harsh Rana</span>,
                a passionate Full Stack Developer and Cybersecurity enthusiast
                studying Computer Science at SRM Institute of Science and Technology, Chennai.
              </p>
              <p>
                I love turning ideas into reality through code — from sleek,
                pixel-perfect frontends to robust, scalable backends. I'm
                particularly fascinated by the intersection of{" "}
                <span className="text-white">AI and web development</span>,
                building intelligent tools that solve real problems.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the latest in
                cybersecurity, AI and machine learning, contributing to open source, or working on
                personal projects that push the boundaries of what's possible on
                the web.
              </p>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { number: "10+", label: "Projects" },
                { number: "3+", label: "Years Coding" },
                { number: "3+", label: "Certifications" },
              ].map(({ number, label }) => (
                <div
                  key={label}
                  className="text-center p-4 glass rounded-xl border border-white/5"
                >
                  <div className="font-display text-2xl font-bold text-[#00e5ff]">
                    {number}
                  </div>
                  <div className="text-[#8892b0] text-xs mt-1 font-mono">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-mono text-[#00e5ff] text-sm mb-6 tracking-widest">
              // TECH STACK
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {skills.map((skill, i) => {
                const Icon = iconMap[skill.icon];
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{
                      scale: 1.08,
                      y: -4,
                      borderColor: skill.color + "60",
                    }}
                    className="glass card-shine flex flex-col items-center gap-2 p-3 rounded-xl border border-white/5 cursor-default group transition-all duration-200"
                  >
                    {Icon && (
                      <Icon
                        size={22}
                        style={{ color: skill.color }}
                        className="group-hover:drop-shadow-sm transition-all duration-200"
                      />
                    )}
                    <span className="font-mono text-[10px] text-[#8892b0] group-hover:text-white transition-colors text-center leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Categories */}
            <div className="mt-8 space-y-3">
              {["Frontend", "Backend", "Database", "DevOps"].map((cat) => {
                const catSkills = skills.filter((s) => s.category === cat);
                return (
                  <div key={cat} className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#8892b0] w-20 shrink-0">
                      {cat}
                    </span>
                    <div className="flex-1 h-1.5 bg-[#0a1628] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(catSkills.length / 5) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full bg-gradient-to-r from-[#00e5ff] to-[#64ffda] rounded-full"
                      />
                    </div>
                    <span className="font-mono text-xs text-[#00e5ff] w-5 text-right">
                      {catSkills.length}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
