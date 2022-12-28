/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: {
          subsets: ["latin"],
        },
      },
    ],
  },
};
