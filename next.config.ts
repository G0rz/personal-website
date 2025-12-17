import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
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
                hostname: 'lh3.googleusercontent.com',
                pathname: '/**',
            },{
                protocol: 'https',
                hostname: 'maps.app.goo.gl',
                pathname: '/**',
            },
        ],
    },
    experimental: {
        viewTransition: true,
    },
};

export default nextConfig;
