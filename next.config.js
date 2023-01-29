/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/login',
        destination: '/a#auth-sign-in',
        permanent: true,
      },
      {
        source: '/signup',
        destination: '/a',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
