/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'admin.ebitans.com',
            port: '',
          },
        ],
        unoptimized: true,
      },
      // output: "export",
};

export default nextConfig;
