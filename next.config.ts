import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isDev ? "" : "/check-scraping",
  assetPrefix: isDev ? "" : "/check-scraping/",
};

export default nextConfig;
