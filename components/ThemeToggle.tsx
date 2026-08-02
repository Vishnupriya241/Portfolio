"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-10 w-10 rounded-full" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="focus-ring relative flex h-10 w-10 items-center justify-center rounded-full border border-card-border bg-card-bg text-text-secondary transition-colors hover:text-text-primary"
    >
      <motion.div
        key={isDark ? "moon" : "sun"}
        initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <Moon size={18} /> : <Sun size={18} />}
      </motion.div>
    </button>
  );
}
