# Vishnupriya — Developer Portfolio

A premium, dark-themed full-stack developer portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Full-viewport animated hero with a conic-gradient glow and floating blobs
- Glassmorphism cards throughout (about, skills, timeline, projects, certifications, contact)
- Scroll-triggered fade-in animations and hover micro-interactions
- Vertical experience timeline with staggered reveal of highlights
- Project cards with tech badges, GitHub + live demo links
- Dark/light theme toggle (persisted, `next-themes`)
- Scroll progress bar + active-section navbar highlighting
- Animated particle background + floating gradient blobs
- Professional loading screen with progress animation
- Fully responsive, mobile-first, keyboard-accessible (visible focus rings)
- Respects `prefers-reduced-motion`
- SEO metadata (Open Graph, Twitter cards) in `app/layout.tsx`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All personal content — name, bio, stats, skills, experience, projects, and certifications — lives in a single file:

```
lib/data.ts
```

Update that file and every section updates automatically. No need to touch component code for content changes.

## Adding real project images

Drop images into `public/images/` and update the `image` field for each project in `lib/data.ts`. The `next/image` component is already configured in `next.config.ts` to allow remote hosts if you'd rather link to hosted screenshots.

## Adding your resume

Place your resume PDF at `public/resume.pdf` — the "Download Resume" button in the hero already points to `/resume.pdf`.

## Wiring up the contact form

The contact form in `components/Contact.tsx` currently simulates a submission. To make it functional, connect it to:
- An API route (`app/api/contact/route.ts`) that sends email via Resend/SendGrid, or
- A form service like Formspree or Web3Forms (swap the `handleSubmit` function for a `fetch` call).

## Build for production

```bash
npm run build
npm run start
```

## Tech stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (custom design tokens in `tailwind.config.ts`)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes
