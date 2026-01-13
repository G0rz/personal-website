import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'heroui.com',
                pathname: '/images/**',
            },{
                protocol: 'https',
                hostname: 'leonardobecerril.dev',
                pathname: '/**',
            },
        ],
    },
    experimental: {
        viewTransition: true,
        optimizeCss: true,

    },
};

export default nextConfig;
