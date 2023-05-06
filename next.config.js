/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/mailchimp/:path*",
        destination: "https://us21.api.mailchimp.com/:path*",
      },
    ];
  },
  images: {
    domains: [
      "img.etimg.com",
      "assets.vogue.com",
      "m.media-amazon.com",
      "upload.wikimedia.org",
      "cdn.kastatic.org",
      "placehold.co",
    ],
  },
};

module.exports = nextConfig;
