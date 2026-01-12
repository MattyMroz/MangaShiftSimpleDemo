import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/MangaShiftSimpleDemo' : '',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.117.1'],
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
} satisfies NextConfig;

export default nextConfig;
