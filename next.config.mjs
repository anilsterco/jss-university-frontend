/** @type {import('next').NextConfig} */

import { BASE_URL } from "./src/config/config.mjs";

const cspHeader = `
  default-src 'self';
  script-src 'self'
    'unsafe-inline'
    https://www.google.com
    https://www.gstatic.com
    https://www.recaptcha.net
    https://www.googletagmanager.com
    https://www.google-analytics.com
    https://www.clarity.ms;
  style-src 'self'
    'unsafe-inline'
    https://fonts.googleapis.com
    https://cdn.jsdelivr.net;
  img-src 'self' data: blob: https:;
  media-src 'self' https:;
  font-src 'self'
    https://fonts.gstatic.com
    https://cdn.jsdelivr.net
    data:;
  connect-src 'self'
    https://www.google-analytics.com
    https://analytics.google.com
    https://stats.g.doubleclick.net
    https://www.gstatic.com
    https://www.recaptcha.net
    https://www.clarity.ms
    https://*.clarity.ms
    https:;
  frame-src 'self'
    https://www.youtube.com
    https://youtube.com
    https://www.google.com
    https://www.gstatic.com
    https://www.recaptcha.net
    https://maps.google.com
    https://maps.googleapis.com
    https://www.googletagmanager.com;
  frame-ancestors 'self';
  object-src 'none';
  base-uri 'self';
`
  .replace(/\s{2,}/g, " ")
  .trim();

const nextConfig = {
  allowedDevOrigins: ["192.168.100.27"],

  experimental: {
    optimizePackageImports: ["react-icons"],
    optimizeCss: true,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader,
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