/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/home',
            permanent: false,
          },
        ]
    },
    env: {
      BASE_URL: 'http://localhost:3000',
    },
};

module.exports = nextConfig;
