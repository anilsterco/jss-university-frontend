/** @type {import('next').NextConfig} */
import { BASE_URL } from "./src/config/config.mjs";

const nextConfig = {
  allowedDevOrigins: ["192.168.100.27"],

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // NOTE: X-Frame-Options removed — frame-ancestors in CSP takes precedence
          // and they conflict. CSP frame-ancestors 'self' is set in middleware.
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
      {
        protocol: "https",
        hostname: "staging.jssuninoida.edu.in",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "sd7:8080",
        pathname: "/**",
      },
    ],
    // unoptimized: true,
  },

  async rewrites() {
    return [
      {
        source: "/api/:path((?!files).*)",
        destination: `${BASE_URL}:path`,
      },
    ];
  },
};

export default nextConfig;