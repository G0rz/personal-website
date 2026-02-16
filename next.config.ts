import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        unoptimized: true,
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                pathname: '/**',
            }, {
                protocol: 'https',
                hostname: 'leonardobecerril.dev',
                pathname: '/**',
            },
        ],
    },
    experimental: {
        optimizeCss: true,
    },
};

export default nextConfig;
