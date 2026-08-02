"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 4;
      });
    }, 120);

    const timeout = setTimeout(() => setLoading(false), 1600);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              className="font-display text-3xl md:text-4xl font-bold tracking-tight text-gradient"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              VS<span className="text-text-primary"></span>
            </motion.div>
            <div className="h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <span className="font-mono text-xs text-text-secondary">
              {Math.min(progress, 100)}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
