"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, Instagram } from "lucide-react";
import { personalInfo } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "vishnupriya_linkedIn",
    href: personalInfo.linkedin,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "vishnupriya_instagram",
    href: personalInfo.instagram,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s create something impactful."
          description="Open to Senior Software Engineer / Software Engineering roles across India."
          align="center"
        />

        <FadeIn delay={0.1}>
          <div className="glass overflow-hidden rounded-3xl p-8 md:p-10">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-text-primary">
                  Let&apos;s Connect
                </h3>
                <p className="mt-3 text-sm text-text-secondary">
                  Based in {personalInfo.location}. Available for remote and
                  hybrid opportunities.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {contactLinks.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring group flex items-center gap-3 rounded-3xl border border-card-border bg-white/5 p-4 text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border transition-colors group-hover:border-primary/50 group-hover:text-primary">
                      <c.icon size={16} />
                    </span>
                    <span>
                      <span className="block text-xs text-text-secondary">
                        {c.label}
                      </span>
                      <span className="font-medium break-words">{c.value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
