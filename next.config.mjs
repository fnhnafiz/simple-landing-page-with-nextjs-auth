/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**", // Allows all paths under this hostname
      },
    ],
  },
};

export default nextConfig;
