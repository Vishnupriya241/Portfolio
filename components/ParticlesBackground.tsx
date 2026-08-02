"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ParticlesBackground() {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      left: number;
      top: number;
      size: number;
      duration: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      }))
    );
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />

      {/* Floating gradient blobs */}
      <div className="absolute left-[10%] top-[10%] h-[380px] w-[380px] rounded-full bg-primary/20 blur-[100px] animate-blob" />
      <div className="absolute right-[8%] top-[30%] h-[320px] w-[320px] rounded-full bg-secondary/20 blur-[100px] animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-[5%] left-[35%] h-[360px] w-[360px] rounded-full bg-accent/20 blur-[100px] animate-blob [animation-delay:8s]" />

      {/* Particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-text-secondary/40"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
