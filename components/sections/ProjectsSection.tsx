"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects, ProjectCategory } from "@/data/projects";

const categories: ProjectCategory[] = [
  "All",
  "Web Apps",
  "AI Projects",
  "Cybersecurity",
  "Python",
];

const categoryColors: Record<string, string> = {
  "Web Apps": "#00e5ff",
  "AI Projects": "#64ffda",
  Cybersecurity: "#f472b6",
  Python: "#fbbf24",
};

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute left-0 top-1/2 w-72 h-72 bg-[#64ffda]/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="02"
          title="Projects"
          subtitle="Things I've built that I'm proud of"
        />

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-[#00e5ff] text-[#030712] font-semibold shadow-neon"
                  : "border border-white/10 text-[#8892b0] hover:border-[#00e5ff]/40 hover:text-[#00e5ff]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="group relative glass card-shine rounded-2xl border border-white/5 overflow-hidden flex flex-col glass-hover"
              >
                {/* Project image placeholder */}
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[#0a1628] to-[#060d1f] flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20">
                    <div
                      className="absolute top-4 left-4 w-8 h-8 rounded border border-current opacity-30"
                      style={{
                        color: categoryColors[project.category[0]] || "#00e5ff",
                      }}
                    />
                    <div
                      className="absolute bottom-4 right-4 w-16 h-1 rounded"
                      style={{
                        background:
                          categoryColors[project.category[0]] || "#00e5ff",
                        opacity: 0.3,
                      }}
                    />
                  </div>
                  <span
                    className="font-display text-4xl font-black opacity-20 group-hover:opacity-30 transition-opacity"
                    style={{
                      color: categoryColors[project.category[0]] || "#00e5ff",
                    }}
                  >
                    {project.title.charAt(0)}
                  </span>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#00e5ff]/0 group-hover:bg-[#00e5ff]/5 transition-all duration-300" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Category tags */}
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {project.category.map((cat) => (
                      <span
                        key={cat}
                        className="font-mono text-[10px] px-2 py-0.5 rounded-full border"
                        style={{
                          color: categoryColors[cat] || "#00e5ff",
                          borderColor: (categoryColors[cat] || "#00e5ff") + "30",
                          background: (categoryColors[cat] || "#00e5ff") + "10",
                        }}
                      >
                        {cat}
                      </span>
                    ))}
                    {project.featured && (
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-yellow-400/30 text-yellow-400 bg-yellow-400/10 flex items-center gap-1">
                        <Star size={8} fill="currentColor" /> Featured
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#00e5ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#8892b0] text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1 mb-4">
                    {project.features.slice(0, 3).map((f) => (
                      <li
                        key={f}
                        className="text-[#8892b0] text-xs flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-[#00e5ff] rounded-full shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] px-2 py-0.5 bg-[#0a1628] text-[#8892b0] rounded border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-white/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[#8892b0] hover:text-[#00e5ff] text-xs font-mono transition-colors group/btn"
                    >
                      <Github
                        size={14}
                        className="group-hover/btn:rotate-12 transition-transform"
                      />
                      Code
                    </a>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[#8892b0] hover:text-[#00e5ff] text-xs font-mono transition-colors group/btn"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Harshrana123-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-[#8892b0] hover:text-[#00e5ff] transition-colors border-b border-[#8892b0]/30 hover:border-[#00e5ff] pb-0.5"
          >
            <Github size={14} />
            View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
