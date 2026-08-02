"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, LucideIcon, Cloud, Cpu, Boxes, Sparkles } from "lucide-react";
import { achievements } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

const iconMap: Record<string, LucideIcon> = {
  Cloud,
  Cpu,
  Boxes,
  Sparkles,
  GraduationCap,
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Awards and recognition"
          description="Major awards and impact-driven achievements across projects and leadership."
        />

        <div className="grid gap-6">
          <FadeIn delay={0.05}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="glass rounded-3xl p-6"
            >
              <div className="flex flex-col gap-4">
                {achievements.map((award) => {
                  const Icon = iconMap[award.icon] ?? Award;
                  return (
                    <div key={award.title} className="flex gap-4 rounded-3xl bg-white/5 p-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-medium text-text-primary">{award.title}</h4>
                        <p className="text-sm text-text-secondary">{award.date}</p>
                        {award.description ? (
                          <p className="mt-2 text-sm text-text-secondary">{award.description}</p>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
