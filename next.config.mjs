/** @type {import('next').NextConfig} */
import { BASE_URL } from "./src/config/config.js";

const nextConfig = {
  // ✅ ADD THIS (fix your warning)
  allowedDevOrigins: ['192.168.100.27'],

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "sd7",
        port: "8080",
        pathname: "/assets/img/banners/**",
      },
      {
        protocol: "https",
        hostname: "backoffice.jssuninoida.edu.in",
        pathname: "/**",
      },
    ],

    // ⚠️ REMOVE THIS (deprecated warning)
    // domains: ["sd7", "localhost", "backoffice.jssuninoida.edu.in"],

    unoptimized: true,
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${BASE_URL}:path*`,
      },
    ];
  },
};

export default nextConfig;