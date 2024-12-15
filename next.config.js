/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/acm-srm-website",
    images: {
      unoptimized: true,
    },
    eslint: {
      ignoreDuringBuilds: true, 
    },
}

module.exports = nextConfig