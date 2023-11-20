const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
  appDir: true,
  images: {
    remotePatterns: [
      {
        hostname: "images.pexels.com"
      },
    ]
  }
}

module.exports = nextConfig