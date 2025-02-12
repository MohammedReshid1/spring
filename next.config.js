/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "springofknowledge.org",
          port: "",
          pathname: "/images/**",
        },
      ],
    },
  }
  
  module.exports = nextConfig
  
  