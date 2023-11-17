const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "dist",
  images: {
    remotePatterns: [
      {
        hostname: "images.pexels.com"
      },
    ]
  }
}

module.exports = nextConfig