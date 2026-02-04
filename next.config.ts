import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "qumagie-landing";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",

  // Optional: Change the output directory `out` -> `dist`
  // distDir: "dist",
};

export default nextConfig;
