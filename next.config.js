/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/login', // mau diganti jadi apa ?
        destination: '/auth/signin', // path lama ?
      },
      {
        source: '/forgot', // mau diganti jadi apa ?
        destination: '/auth/passforgot', // path lama ?
      },
      {
        source: '/new-pass', // mau diganti jadi apa ?
        destination: '/auth/passnew', // path lama ?
      },
      {
        source: '/signup', // mau diganti jadi apa ?
        destination: '/auth/signup', // path lama ?
      },
      {
        source: '/create-pin', // mau diganti jadi apa ?
        destination: '/auth/pincreate', // path lama ?
      },
      {
        source: '/pin-success', // mau diganti jadi apa ?
        destination: '/auth/pincreatesuccess', // path lama ?
      },
      {
        source: '/home', // mau diganti jadi apa ?
        destination: '/dashboard/home', // path lama ?
      },
      {
        source: '/search-tf', // mau diganti jadi apa ?
        destination: '/dashboard/transsearch', // path lama ?
      },
      {
        source: '/input-tf', // mau diganti jadi apa ?
        destination: '/dashboard/transinput', // path lama ?
      },
      {
        source: '/confirm-tf', // mau diganti jadi apa ?
        destination: '/dashboard/transconfirm', // path lama ?
      },
      {
        source: '/fail-tf', // mau diganti jadi apa ?
        destination: '/dashboard/transfail', // path lama ?
      },
      {
        source: '/success-tf', // mau diganti jadi apa ?
        destination: '/dashboard/transsuccess', // path lama ?
      },
      {
        source: '/topup', // mau diganti jadi apa ?
        destination: '/dashboard/topup', // path lama ?
      },
      {
        source: '/history', // mau diganti jadi apa ?
        destination: '/dashboard/transhistory', // path lama ?
      },
      {
        source: '/profile', // mau diganti jadi apa ?
        destination: '/dashboard/profile', // path lama ?
      },
      {
        source: '/personal-info', // mau diganti jadi apa ?
        destination: '/dashboard/profileinfo', // path lama ?
      },
      {
        source: '/change-pass', // mau diganti jadi apa ?
        destination: '/dashboard/passchange', // path lama ?
      },
      {
        source: '/change-pin', // mau diganti jadi apa ?
        destination: '/dashboard/pinchange', // path lama ?
      },
      {
        source: '/phone', // mau diganti jadi apa ?
        destination: '/dashboard/phone', // path lama ?
      },
      {
        source: '/add-phone', // mau diganti jadi apa ?
        destination: '/dashboard/phoneadd', // path lama ?
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
