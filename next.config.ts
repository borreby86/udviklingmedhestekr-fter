import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/2018/:path*',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
