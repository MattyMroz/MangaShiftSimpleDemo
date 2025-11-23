import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/MangaShiftSimpleDemo' : '',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.117.1'],
} satisfies NextConfig;

export default nextConfig;
