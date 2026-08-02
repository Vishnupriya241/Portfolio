"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've shipped."
          description="A mix of platform tooling, internal systems, and applied Generative AI — built for real teams and real usage."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={(i % 2) * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="glass relative flex h-full flex-col overflow-hidden rounded-2xl"
              >
                <div
                  className={`relative flex h-48 items-center justify-center overflow-hidden bg-cover bg-center ${
                    project.featured ? "md:h-56" : ""
                  }`}
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute right-4 bottom-4 z-20 rounded-full bg-black/40 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm">
                    {project.title}
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 6, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                  >
                    <Sparkles className="text-text-primary" size={26} />
                  </motion.div>
                  {project.featured && (
                    <span className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-text-primary backdrop-blur-sm">
                      Featured
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold text-text-primary">
                    {project.title}
                  </h3>
                  {project.details?.role && project.details?.period ? (
                    <p className="mt-2 text-sm text-text-secondary">
                      {project.details.role} &middot; {project.details.period}
                    </p>
                  ) : null}
                  <p className="mt-3 flex-1 text-sm text-text-secondary md:text-base">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-card-border bg-white/[0.03] px-3 py-1 text-xs font-medium text-text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="focus-ring mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2 text-xs font-semibold text-white transition-transform hover:scale-[1.02]"
                  >
                    Explore more details
                  </Link>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
