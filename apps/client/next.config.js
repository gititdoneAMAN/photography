/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d29ixn4v7wn1nw.cloudfront.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
