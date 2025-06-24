/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ This is the key setting
  reactStrictMode: true,
  devIndicators: false,
  images: {
    unoptimized: true, // ✅ Required for static export if you're using <Image>
  },
};

export default nextConfig;

