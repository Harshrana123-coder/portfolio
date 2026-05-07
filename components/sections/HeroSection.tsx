"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Download, ExternalLink } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      {/* Radial gradient glow */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#00e5ff]/5 rounded-full blur-3xl animate-pulse2" />
      <div
        className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-[#64ffda]/3 rounded-full blur-3xl animate-pulse2"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-20 xl:px-24">
        <div className="max-w-4xl">
          {/* Pre-title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 bg-[#00e5ff] rounded-full animate-pulse" />
            <span className="font-mono text-sm text-[#00e5ff] tracking-widest">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-[#8892b0] text-lg mb-3"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 leading-none tracking-tight"
          >
            HARSH{" "}
            <span className="text-gradient animate-glow">RANA</span>
          </motion.h1>

          {/* Animated typing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#8892b0] mb-8 h-12 flex items-center"
          >
            I&apos;m a&nbsp;
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Cybersecurity Enthusiast",
                2000,
                "AI/LLM Engineer",
                2000,
                "Frontend Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#00e5ff]"
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-[#8892b0] text-base md:text-lg max-w-2xl leading-relaxed mb-10"
          >
            I craft high-performance web applications and intelligent systems at
            the intersection of modern frontend, scalable backend, and AI.
            Based in{" "}
            <span className="text-[#00e5ff]">Chennai, India</span> — building
            things that matter.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#00e5ff] text-[#030712] font-semibold rounded hover:bg-[#00e5ff]/90 transition-all duration-300 hover:shadow-neon text-sm"
            >
              View Projects
              <ExternalLink
                size={16}
                className="group-hover:rotate-12 transition-transform"
              />
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1wF1QREVDtY_pPuspkvzw-YDIUt8rV9Z0"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 border border-[#00e5ff] ..."
            >
              Download Resume
              <Download
                size={16}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </a>
          </motion.div>

          {/* Tech stack quick tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Python",
              "AI/LLM",
            ].map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs text-[#8892b0] border border-white/10 px-3 py-1.5 rounded-full hover:border-[#00e5ff]/40 hover:text-[#00e5ff] transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8892b0] hover:text-[#00e5ff] transition-colors group"
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <ArrowDown
          size={16}
          className="animate-bounce group-hover:drop-shadow-[0_0_6px_rgba(0,229,255,0.8)]"
        />
      </motion.a>
    </section>
  );
}
