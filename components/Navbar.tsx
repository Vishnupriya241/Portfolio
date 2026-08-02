"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 md:px-10">
          <div
            className={cn(
              "flex w-full items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300",
              scrolled ? "glass shadow-lg shadow-black/10" : "bg-transparent"
            )}
          >
            <a
              href="#home"
              className="font-display text-lg font-bold tracking-tight text-text-primary"
            >
              {personalInfo.name}
              <span className="text-primary">.</span>
            </a>

            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary",
                    active === link.href && "text-text-primary"
                  )}
                >
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-white/5"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                aria-label="Toggle menu"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-card-border text-text-secondary lg:hidden"
                onClick={() => setMobileOpen((o) => !o)}
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="glass fixed inset-x-4 top-24 z-40 rounded-2xl p-4 lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary",
                    active === link.href && "bg-white/5 text-text-primary"
                  )}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
