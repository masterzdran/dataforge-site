import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true }, // ponytail: static export, no image optimizer
};

export default nextConfig;
