import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,

  // Replace "portfolio" with your GitHub repository name
  basePath: "/Portfolio",
  assetPrefix: "/Portfolio",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/Portfolio",
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;


