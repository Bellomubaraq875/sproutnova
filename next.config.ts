/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['googleusercontent.com'], 

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pub-5414829a4bb54c43be56105a3d057bc0.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;