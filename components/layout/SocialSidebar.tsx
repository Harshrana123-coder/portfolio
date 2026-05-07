"use client";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiMail,
} from "react-icons/fi";

const socials = [
  { icon: FiGithub, href: "https://github.com/Harshrana123-coder", label: "GitHub" },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/harsh-rana-ba919a27b/",
    label: "LinkedIn",
  },
  {
    icon: FiInstagram,
    href: "https://www.instagram.com/harsh_ars33/?hl=en",
    label: "Instagram",
  },
  { icon: FiTwitter, href: "https://x.com/hars_ars33", label: "Twitter" },
  { icon: FiMail, href: "mailto:harshrana15april2020@gmail.com", label: "Email" },
];

export default function SocialSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="fixed left-6 bottom-0 z-40 hidden lg:flex flex-col items-center gap-4"
    >
      {socials.map(({ icon: Icon, href, label }, i) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith("mailto") ? "_self" : "_blank"}
          rel="noopener noreferrer"
          aria-label={label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 + i * 0.1 }}
          whileHover={{ y: -4, color: "#00e5ff" }}
          className="text-[#8892b0] hover:text-[#00e5ff] transition-all duration-200 group"
        >
          <Icon
            size={18}
            className="group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.8)] transition-all duration-200"
          />
        </motion.a>
      ))}
      <div className="w-px h-24 bg-gradient-to-b from-[#00e5ff]/40 to-transparent mt-2" />
    </motion.div>
  );
}
