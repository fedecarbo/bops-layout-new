import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    // Enable Turbopack for faster builds
    turbo: {},
  },
}

export default nextConfig
