// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // only set basePath when building for GitHub Pages
  basePath: process.env.NEXT_PUBLIC_TARGET === "gh-pages" ? "/team-19-web" : "",
};

export default nextConfig;
