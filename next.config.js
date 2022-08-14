/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/', // mau diganti jadi apa ?
        destination: '/dashboard', // path lama ?
      },
      
    ]
  },
  async redirects() {
    return [
      {
        source: '/dashboard', // jika ada yang akses ini
        destination: '/', // lempar kesini
        permanent: true,
      },
    ]
  },
  images: {
    domains: ["res.cloudinary.com"]
  }
}

module.exports = nextConfig
