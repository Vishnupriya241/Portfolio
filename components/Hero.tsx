"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Phone, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

const socials = [
  { icon: Phone, href: `tel:${personalInfo.phone}`, label: "Phone" },
  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mb-8 flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-text-secondary"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
          </span>
          Open to Senior Software Engineer / Software Engineering roles 
        </motion.div>

        {/* Profile image with animated glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mb-8 h-32 w-32 md:h-36 md:w-36"
        >
          <div className="absolute inset-0 -z-10 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,#6366F1,#06B6D4,#8B5CF6,#6366F1)] opacity-70 blur-xl" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-30 blur-2xl animate-float" />
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-white/10 bg-card-bg font-display text-4xl font-bold text-text-primary">
            VS
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-text-primary sm:text-6xl md:text-7xl"
        >
          Hi, I&apos;m <span className="text-gradient">{personalInfo.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 font-display text-xl font-medium text-text-secondary sm:text-2xl"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base text-text-secondary sm:text-lg"
        >
          {personalInfo.tagline} Currently architecting cloud-native systems
          and shipping Generative AI features from Bengaluru, India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="focus-ring group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            View Projects
          </a>
          <a
            href={personalInfo.resumeUrl}
            download
            className="focus-ring glass flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-text-primary transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex items-center gap-4"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-card-border text-text-secondary transition-all hover:-translate-y-1 hover:border-primary/50 hover:text-text-primary hover:shadow-glow"
            >
              <s.icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-text-secondary transition-colors hover:text-text-primary"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
