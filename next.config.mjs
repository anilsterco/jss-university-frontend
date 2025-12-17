/** @type {import('next').NextConfig} */
const nextConfig = {
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
