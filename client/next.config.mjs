/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgprodutos.s3.us-east-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
