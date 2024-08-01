/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["res.cloudinary.com"]
    },
    reactStrictMode: true,
    transpilePackages: ["@biggle/ui"]
};

export default nextConfig;