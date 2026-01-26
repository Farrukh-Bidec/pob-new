/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",          // usually https
        hostname: "pob.datainovate.com",
        port: "",                   // leave empty unless you use a custom port
        pathname: "/**",            // allow all paths
      },
    ],
  },
  productionBrowserSourceMaps: false, // disable source maps in production
};

module.exports = nextConfig;
