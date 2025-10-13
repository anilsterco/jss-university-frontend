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
      // Add other domains if needed
      {
        protocol: "https",
        hostname: "your-production-domain.com",
        pathname: "/**",
      },
    ],
    // Or use the simpler domains array for development
    domains: ["sd7", "localhost", "your-production-domain.com"],
  },
};

export default nextConfig;
