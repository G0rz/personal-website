import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                pathname: '/**',
            }, {
                protocol: 'https',
                hostname: 'leonardobecerril.dev',
                pathname: '/images/**',
            },
        ],
    },
    experimental: {
        optimizeCss: true,
        optimizeServerReact: true,
        optimisticClientCache: true,
        webpackMemoryOptimizations: true
    },

};

export default nextConfig;
