import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B1020",
        "background-light": "#F8FAFC",
        primary: {
          DEFAULT: "#6366F1",
          light: "#818CF8",
        },
        secondary: {
          DEFAULT: "#06B6D4",
          light: "#22D3EE",
        },
        accent: {
          DEFAULT: "#8B5CF6",
          light: "#A78BFA",
        },
        "text-primary": "#F8FAFC",
        "text-secondary": "#94A3B8",
        "card-bg": "rgba(15,23,42,0.7)",
        "card-border": "rgba(148,163,184,0.15)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      animation: {
        blob: "blob 18s infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        marquee: "marquee 30s linear infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(99,102,241,0.5)",
        "glow-cyan": "0 0 40px -10px rgba(6,182,212,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
