/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com', 'images.unsplash.com'], // Correctly formatted array
  },
};

export default nextConfig;
