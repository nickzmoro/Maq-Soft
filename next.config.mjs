/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lvk0y2uvlr.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
