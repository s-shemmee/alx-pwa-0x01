import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: false,
  },
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'],
  },
};

import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */

const withPWA = withPWAInit({
  dest: 'public'
});

export default withPWA({
  ...nextConfig
});
