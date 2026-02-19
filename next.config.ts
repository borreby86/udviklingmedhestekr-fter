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
      {
        source: '/psykoterapi-i-nordsjaelland',
        destination: '/recalibrate',
        permanent: true,
      },
      {
        source: '/samtaleterapi',
        destination: '/recalibrate',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
