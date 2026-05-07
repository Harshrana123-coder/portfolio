"use client";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display font-black text-lg text-gradient">
            HR
          </span>
          <span className="text-[#8892b0] text-sm font-mono">
            · Built with ❤️ by HR.
          </span>
        </div>

        <div className="flex items-center gap-5">
          {[
            { icon: FiGithub, href: "https://github.com/Harshrana123-coder" },
            { icon: FiLinkedin, href: "https://www.linkedin.com/in/harsh-rana-ba919a27b/" },
            { icon: FiInstagram, href: "https://www.instagram.com/harsh_ars33/?hl=en" },
            { icon: FiTwitter, href: "https://x.com/hars_ars33" },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-[#00e5ff] transition-colors duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p className="text-[#8892b0] text-xs font-mono">
          © {new Date().getFullYear()} Harsh Rana. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
