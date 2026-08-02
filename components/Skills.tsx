"use client";

import { motion } from "framer-motion";
import {
  Server,
  LayoutTemplate,
  Database,
  Cloud,
  Sparkles,
  LucideIcon,
  Code2,
  ShieldCheck,
  Wrench
} from "lucide-react";
import { skillCategories } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

const iconMap: Record<string, LucideIcon> = {
  Server,
  LayoutTemplate,
  Database,
  Cloud,
  Sparkles,
  Code2,
  ShieldCheck,
  Wrench
};

const colorMap: Record<string, string> = {
  primary: "from-primary/20 to-primary/5 text-primary",
  secondary: "from-secondary/20 to-secondary/5 text-secondary",
  accent: "from-accent/20 to-accent/5 text-accent",
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="The stack I build with."
          description="A toolkit shaped by shipping production systems — from relational data modeling to retrieval-augmented AI features."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <FadeIn key={cat.category} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="glass group relative h-full overflow-hidden rounded-2xl p-6"
                >
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${
                      colorMap[cat.color]
                    }`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-4 font-display text-lg font-semibold text-text-primary">
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-card-border bg-white/[0.03] px-3 py-1 text-xs font-medium text-text-secondary transition-colors group-hover:text-text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Corner glow on hover */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-primary/0 to-secondary/0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40 group-hover:from-primary/40 group-hover:to-secondary/40" />
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
