import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
<<<<<<< HEAD
const repo = "team-19-web"; // your repo name

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Use ONLY basePath for GitHub Project Pages
  basePath: isProd ? `/${repo}` : "",
  // REMOVE assetPrefix to avoid double prefixing of CSS/JS on Pages
  // assetPrefix: isProd ? `/${repo}/` : "",
=======
const repo = "team-19-web";

const nextConfig: NextConfig = {
    output: "export",
    images: { unoptimized: true },
    basePath: isProd ? `/${repo}` : "",
>>>>>>> feb714e (Fix: logo)
};

export default nextConfig;
