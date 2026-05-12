/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.tbsnews.net',
        port: '',
        pathname: '/**', // Allows all paths from this host
      },
      {
        protocol: 'https',
        hostname: 'media.digitalnomads.world',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
