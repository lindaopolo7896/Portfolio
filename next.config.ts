import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // a stray package-lock.json in the user home dir confuses root inference
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
