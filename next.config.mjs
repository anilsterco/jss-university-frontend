/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // ✅ X-Frame-Options — controls who can embed YOUR site
          // This does NOT block iframes you embed on your own page
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },

          // ✅ ADD THIS: Content Security Policy
          // Controls what YOUR page is allowed to load
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Scripts: your origin + reCAPTCHA + Google APIs
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com",
              // Frames: reCAPTCHA iframe + Google Maps embed
              "frame-src 'self' https://www.google.com https://maps.google.com https://www.google.com/maps/",
              // Styles
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              // Fonts
              "font-src 'self' https://fonts.gstatic.com",
              // Images
              "img-src 'self' data: https: blob:",
              // Connections (API calls, reCAPTCHA verification)
              "connect-src 'self' https://www.google.com https://project-demo.in",
            ].join("; "),
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
        pathname: "/jss/assets/img/banners/**",
      },
      {
        protocol: "https",
        hostname: "project-demo.in",
        pathname: "/**",
      },
    ],
    domains: ["sd7", "localhost", "project-demo.in"],
    unoptimized: true,
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://project-demo.in/jss/api/:path*",
      },
    ];
  },
};

export default nextConfig;