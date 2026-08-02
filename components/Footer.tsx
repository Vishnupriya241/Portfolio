"use client";

import { Linkedin, Mail, Phone, Instagram } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-card-border px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-text-secondary">
          &copy; {personalInfo.fullName} Portfolio
        </p>

        <div className="flex items-center gap-4">
          <a
            href={`tel:${personalInfo.phone}`}
            aria-label="Phone"
            className="focus-ring text-text-secondary transition-colors hover:text-text-primary"
          >
            <Phone size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="focus-ring text-text-secondary transition-colors hover:text-text-primary"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="focus-ring text-text-secondary transition-colors hover:text-text-primary"
          >
            <Mail size={18} />
          </a>
          <a
            href={personalInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="focus-ring text-text-secondary transition-colors hover:text-text-primary"
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
