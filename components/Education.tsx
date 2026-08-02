"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, LucideIcon, Cloud, Cpu, Boxes, Sparkles } from "lucide-react";
import { education } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

const iconMap: Record<string, LucideIcon> = {
  Cloud,
  Cpu,
  Boxes,
  Sparkles,
  GraduationCap,
  BookOpen,
};

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          description="A quick look at formal education and graduation details."
        />

        <div className="grid gap-6">
          <FadeIn delay={0.05}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="glass rounded-3xl p-6"
            >
              <div className="flex flex-col gap-4">
                {education.map((item) => {
                  const Icon = iconMap[item.icon] ?? GraduationCap;
                  return (
                    <div key={item.title} className="flex gap-4 rounded-3xl bg-white/5 p-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-medium text-text-primary">{item.title}</h4>
                        <p className="text-sm text-text-secondary">{item.institution} &middot; {item.date}</p>
                        {item.cgpa ? (
                          <p className="text-sm text-text-secondary">CGPA: {item.cgpa}</p>
                        ) : null}
                        {item.languages ? (
                          <div className="mt-3">
                            <span className="block text-xs uppercase tracking-[0.2em] text-secondary">Languages</span>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {item.languages.map((language) => (
                                <span key={language} className="rounded-full bg-white/10 px-3 py-1 text-sm text-text-secondary">{language}</span>
                              ))}
                            </div>
                          </div>
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
