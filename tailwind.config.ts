import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sora)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        display: ["var(--font-orbitron)", "sans-serif"],
      },
      colors: {
        navy: {
          950: "#030712",
          900: "#060d1f",
          800: "#0a1628",
          700: "#0d1f3c",
          600: "#122347",
        },
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
          glow: "#00fff5",
        },
        electric: "#00e5ff",
        neon: "#64ffda",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(0,229,255,0.15), transparent)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
      },
      backgroundSize: {
        "grid-size": "60px 60px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.8s ease forwards",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "spin-slow": "spin 8s linear infinite",
        typing: "typing 3.5s steps(40, end), blink 0.75s step-end infinite",
        shimmer: "shimmer 2s infinite",
        pulse2: "pulse2 4s ease-in-out infinite",
        "border-flow": "borderFlow 3s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { textShadow: "0 0 10px #00e5ff, 0 0 20px #00e5ff" },
          "100%": {
            textShadow: "0 0 20px #00e5ff, 0 0 40px #00e5ff, 0 0 60px #00e5ff",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulse2: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        borderFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      boxShadow: {
        neon: "0 0 20px rgba(0,229,255,0.4)",
        "neon-lg": "0 0 40px rgba(0,229,255,0.3)",
        "neon-sm": "0 0 10px rgba(0,229,255,0.5)",
        card: "0 8px 32px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
