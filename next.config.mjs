/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ucarecdn.com',
      },
      //   {
      //     protocol: 'https',
      //     hostname: 'wordpress-1269066-4577871.cloudwaysapps.com',
      //   },
    ],
  },
  // reactStrictMode: true,
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       ...config.resolve.fallback,
  //       fs: false,
  //     };
  //   }
  //   return config;
  // },
};

export default nextConfig;
