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
  async headers() {
    return [
      {
        source: '/llms.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400',
          },
        ],
      },
    ]
  },
}

export default nextConfig
