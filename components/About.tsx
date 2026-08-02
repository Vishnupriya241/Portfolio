"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  FolderGit2,
  Layers,
  TrendingUp,
  LucideIcon,
} from "lucide-react";
import { personalInfo, stats } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

const iconMap: Record<string, LucideIcon> = {
  BriefcaseBusiness,
  FolderGit2,
  Layers,
  TrendingUp,
};

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering with ownership, end to end."
          description="From database schema to deployment pipeline — I like owning problems fully, not just the parts that are interesting."
        />

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <FadeIn className="lg:col-span-3" delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-text-secondary md:text-lg">
              <p>{personalInfo.summary}</p>
              <p>
                My expertise includes backend engineering, REST API development, microservices architecture, database design, and implementing secure authentication and authorization solutions. I have experience building cloud-native applications and developing scalable systems that prioritize performance, reliability, and maintainability.
              </p>
              <p>
               In addition to application development, I have worked on AI observability and monitoring platforms, helping improve visibility into AI workloads and system performance. I have also contributed to Generative AI initiatives, including Retrieval-Augmented Generation (RAG) applications powered by Large Language Models (LLMs).
              </p>
              <p>
                I am passionate about solving complex technical challenges, optimizing system performance, improving reliability, and delivering solutions that create measurable business value. I enjoy collaborating with cross-functional teams, participating in technical design discussions, conducting code reviews, and driving projects from concept to production in Agile environments.
              </p>
              {/* <p>
                Currently, I am focused on expanding my expertise in system design, distributed systems, cloud-native architectures, DevOps practices, AI-powered engineering workflows, and platform engineering to build resilient, intelligent, and scalable software systems.
              </p> */}
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {stats.map((stat, i) => {
              const Icon = iconMap[stat.icon];
              return (
                <FadeIn key={stat.label} delay={0.15 + i * 0.08}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="glass flex h-full flex-col justify-between gap-4 rounded-2xl p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="font-display text-2xl font-bold text-text-primary md:text-3xl">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-xs text-text-secondary md:text-sm">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
