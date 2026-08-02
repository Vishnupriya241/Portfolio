"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've built."
          description="A timeline of ownership — from writing the first line of code to running it in production."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute bottom-0 left-[19px] top-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:left-6" />

          <div className="flex flex-col gap-10">
            {experience.map((job, i) => (
              <FadeIn key={job.company} delay={i * 0.1}>
                <div className="relative flex gap-6 pl-0 md:gap-8">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center md:h-12 md:w-12">
                    <span className="absolute h-3 w-3 animate-ping rounded-full bg-primary/50" />
                    <span className="relative h-3 w-3 rounded-full bg-gradient-to-br from-primary to-secondary shadow-glow" />
                  </div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className="group glass w-full rounded-2xl p-6 md:p-8"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl font-bold text-text-primary md:text-2xl">
                          {job.role}
                        </h3>
                        <p className="mt-1 font-medium text-secondary">
                          {job.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 text-xs text-text-secondary">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} /> {job.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} /> {job.location}
                        </span>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-text-secondary md:text-base">
                      {job.description}
                    </p>

                    <motion.ul
                      initial="collapsed"
                      whileInView="expanded"
                      viewport={{ once: true }}
                      variants={{
                        collapsed: {},
                        expanded: {
                          transition: { staggerChildren: 0.06, delayChildren: 0.2 },
                        },
                      }}
                      className="mt-5 space-y-2.5 border-t border-card-border pt-5"
                    >
                      {job.highlights.map((h) => (
                        <motion.li
                          key={h}
                          variants={{
                            collapsed: { opacity: 0, x: -12 },
                            expanded: { opacity: 1, x: 0 },
                          }}
                          className="flex items-start gap-2.5 text-sm text-text-secondary"
                        >
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                          {h}
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* <div className="mt-5 flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-white/[0.04] px-3 py-1 text-xs font-medium text-text-secondary"
                        >
                          {t}
                        </span>
                      ))}
                    </div> */}
                  </motion.div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
