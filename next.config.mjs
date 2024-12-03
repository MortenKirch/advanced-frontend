/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export
    basePath: '/repo-name', // Replace 'repo-name' with your GitHub repository name if deploying to a subpath
    trailingSlash: true, // Ensures all routes have a trailing slash for compatibility
  };
  
  export default nextConfig;
  