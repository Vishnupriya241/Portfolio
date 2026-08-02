import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { personalInfo } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vishnupriya.dev"),
  title: `${personalInfo.fullName} — Senior Software Engineer`,
  description: personalInfo.summary,
  keywords: [
    "Full Stack Developer",
    "Node.js Developer",
    "AWS",
    "Next.js",
    "TypeScript",
    "Generative AI",
    "RAG",
    "Portfolio",
  ],
  authors: [{ name: personalInfo.fullName }],
  openGraph: {
    title: `${personalInfo.fullName} — Full Stack Developer`,
    description: personalInfo.summary,
    url: "https://vishnupriya.dev",
    siteName: personalInfo.fullName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.fullName} — Full Stack Developer`,
    description: personalInfo.summary,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased selection:bg-primary selection:text-text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="portfolio-theme"
          value={{ dark: "dark", light: "light" }}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
