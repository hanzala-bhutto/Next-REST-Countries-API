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
      BASE_URL: 'https://next-rest-countries-api.vercel.app',
    },
};

module.exports = nextConfig;
