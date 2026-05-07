"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useScrollProgress";

const navLinks = [
  { label: "About", href: "#about", number: "01" },
  { label: "Projects", href: "#projects", number: "02" },
  { label: "Experience", href: "#experience", number: "03" },
  { label: "Resume", href: "#resume", number: "04" },
  { label: "Contact", href: "#contact", number: "05" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection([
    "about",
    "projects",
    "experience",
    "resume",
    "contact",
  ]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#030712]/90 backdrop-blur-lg border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-display font-black text-xl text-gradient tracking-wider"
          >
            HR<span className="text-[#00e5ff]">.</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                  >
                    <span className="font-mono text-[#00e5ff] text-xs opacity-60 group-hover:opacity-100 transition-opacity">
                      {link.number}.
                    </span>
                    <span
                      className={`${
                        isActive ? "text-[#00e5ff]" : "text-[#8892b0]"
                      } group-hover:text-[#00e5ff] transition-colors`}
                    >
                      {link.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
             href="https://drive.google.com/uc?export=download&id=1wF1QREVDtY_pPuspkvzw-YDIUt8rV9Z0"
             target="_blank"
             rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-medium border border-[#00e5ff] text-[#00e5ff] rounded hover:bg-[#00e5ff]/10 transition-all duration-200 font-mono"
            >
              Resume
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#00e5ff] p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#060d1f] flex flex-col items-center justify-center md:hidden"
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex flex-col items-center gap-1 group"
                  >
                    <span className="font-mono text-[#00e5ff] text-sm">
                      {link.number}.
                    </span>
                    <span className="text-3xl font-display font-bold text-white group-hover:text-[#00e5ff] transition-colors">
                      {link.label}
                    </span>
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="https://drive.google.com/uc?export=download&id=1wF1QREVDtY_pPuspkvzw-YDIUt8rV9Z0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border border-[#00e5ff] text-[#00e5ff] rounded font-mono text-lg hover:bg-[#00e5ff]/10 transition-all"
                >
                  Resume
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
