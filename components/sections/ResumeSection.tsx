"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { Download, Eye, FileText } from "lucide-react";

export default function ResumeSection() {
  return (
    <section id="resume" className="section-padding relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00e5ff]/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="04"
          title="Resume"
          subtitle="My professional background and qualifications"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Resume card preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative glass rounded-2xl border border-white/10 overflow-hidden aspect-[3/4] max-w-sm mx-auto">
              {/* Resume preview mockup */}
              <div className="absolute inset-0 flex flex-col p-6">
                {/* Header */}
                <div className="border-b border-white/10 pb-4 mb-4">
                  <div className="w-3/4 h-4 bg-[#00e5ff]/20 rounded mb-2" />
                  <div className="w-1/2 h-3 bg-white/10 rounded mb-1" />
                  <div className="w-2/3 h-2 bg-white/5 rounded" />
                </div>
                {/* Sections */}
                {[35, 25, 30, 20].map((width, i) => (
                  <div key={i} className="mb-4">
                    <div className="w-1/3 h-2.5 bg-[#00e5ff]/30 rounded mb-2" />
                    <div className="space-y-1.5">
                      <div
                        className="h-2 bg-white/5 rounded"
                        style={{ width: `${width + 40}%` }}
                      />
                      <div
                        className="h-2 bg-white/5 rounded"
                        style={{ width: `${width + 20}%` }}
                      />
                      <div
                        className="h-2 bg-white/5 rounded"
                        style={{ width: `${width}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/50 to-transparent" />
              {/* Icon center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <FileText size={48} className="text-[#00e5ff]/20" />
              </div>
            </div>
            {/* Decorative rings */}
            <div className="absolute -inset-4 rounded-2xl border border-[#00e5ff]/10 -z-10" />
          </motion.div>

          {/* Right - Info & buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
              Harsh Rana
              <span className="text-[#00e5ff]">.</span>
            </h3>
            <p className="text-[#8892b0] leading-relaxed mb-8">
              My resume highlights my technical skills, project experience, and
              academic background. It&apos;s designed to be ATS-friendly while
              maintaining a clean, professional look.
            </p>

            {/* Quick highlights */}
            <div className="space-y-3 mb-8">
              {[
                { label: "Education", value: "B.E. CSE · Anna University · 2021–2025" },
                { label: "Experience", value: "1+ Year · Full Stack & Freelance" },
                { label: "Projects", value: "10+ Live Projects" },
                { label: "Skills", value: "15+ Technologies" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 p-3 glass rounded-xl border border-white/5"
                >
                  <span className="font-mono text-xs text-[#00e5ff] w-24 shrink-0 mt-0.5">
                    {label}
                  </span>
                  <span className="text-sm text-[#8892b0]">{value}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Download CV — fetches the PDF from Google Drive as a direct download */}
              <a
                href="https://drive.google.com/uc?export=download&id=1wF1QREVDtY_pPuspkvzw-YDIUt8rV9Z0"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00e5ff] text-[#030712] font-semibold rounded-xl hover:bg-[#00e5ff]/90 transition-all duration-300 hover:shadow-neon text-sm"
              >
                <Download
                  size={16}
                  className="group-hover:translate-y-0.5 transition-transform"
                />
                Download CV
              </a>

              {/* View Resume — opens Google Drive preview */}
              <a
                href="https://drive.google.com/file/d/1wF1QREVDtY_pPuspkvzw-YDIUt8rV9Z0/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#00e5ff] text-[#00e5ff] font-semibold rounded-xl hover:bg-[#00e5ff]/10 transition-all duration-300 text-sm"
              >
                <Eye size={16} />
                View Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}