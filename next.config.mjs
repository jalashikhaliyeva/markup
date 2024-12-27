/** @type {import('next').NextConfig} */
const nextConfig = {
 
  reactStrictMode: true,
  images: {
    domains: ["new.markup.az"], // Add your external domain here
  },
  i18n: {
    locales: ['az', 'en', 'ru'], // The languages you support
    defaultLocale: 'az', // Your default language
    localeDetection: false, 
    // localeDetection: true, // Detect user's language automatically
  },
};

export default nextConfig;
