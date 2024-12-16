/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com', 'images.unsplash.com' , "via.placeholder.com"] // Correctly formatted array
  },
};

export default nextConfig;
