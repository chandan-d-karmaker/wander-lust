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
      {
        protocol: 'https',
        hostname: 'dynamic-media-cdn.tripadvisor.com',
        port: '',
        pathname: '/**', // Allows all image paths from this host
      },
    ],
  },
};

export default nextConfig;
