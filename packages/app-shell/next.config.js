/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@invertax/ui-components'],
  experimental: {
    serverComponentsExternalPackages: ['@invertax/*'],
  },
};

module.exports = nextConfig;
