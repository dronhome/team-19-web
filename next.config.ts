import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
// If publishing at https://dronhome.github.io/team-19-web/
const repo = "team-19-web";

const nextConfig: NextConfig = {
  output: "export",            // enables `next export`
  images: { unoptimized: true } // needed for next/image with export
};

export default nextConfig;
