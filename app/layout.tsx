import {ViewTransition} from 'react'
import {Metadata, Viewport} from "next";
import "./globals.css"
import {Providers} from "@/app/providers";
import Link from "next/link";
import {customFont, geistSans, jetbrainsMono, vt323} from "@/config/fonts";
import {RegisterSW} from "@/app/register-sw";

export const viewport: Viewport = {
    themeColor: [
        {media: '(prefers-color-scheme: light)', color: 'white'},
        {media: '(prefers-color-scheme: dark)', color: 'black'},
    ],
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
}

export const metadata: Metadata = {
    metadataBase: new URL('https://leonardobecerril.dev'),
    title: {
        default: 'Leonardo Becerril | Personal Website',
        template: '%s | Leonardo Becerril'
    },
    description: 'Personal Website of Leonardo Becerril, a Computer Systems Engineer and Full Stack Developer specializing in React, Next.js, and Mobile Development. Explore my projects and skills.',
    keywords: ['Leonardo Becerril', 'Full Stack Developer', 'Computer Systems Engineer', 'React Developer', 'Next.js', 'Mobile Development', 'Web Development', 'Software Engineer', 'Portfolio'],
    authors: [{name: 'Leonardo Becerril', url: 'https://leonardobecerril.dev'}],
    creator: 'Leonardo Becerril',
    publisher: 'Leonardo Becerril',
    openGraph: {
        title: 'Leonardo Becerril | Personal Website',
        description: 'Personal Website of Leonardo Becerril, a Computer Systems Engineer and Full Stack Developer specializing in React, Next.js, and Mobile Development. Explore my projects and skills.',
        url: 'https://leonardobecerril.dev',
        siteName: 'Leonardo Becerril | Personal Website',
        images:  {
            url: '/opengraph-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Leonardo Becerril Website Preview',
        },
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Leonardo Becerril | Personal Website',
        description: 'Personal Website of Leonardo Becerril, a Computer Systems Engineer and Full Stack Developer.',
        creator: '@XDeathZero',
        images: ['/opengraph-image.jpg'],
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    alternates: {
        canonical: 'https://leonardobecerril.dev',
    },
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <ViewTransition>
            <html lang="es" suppressHydrationWarning>
            <body
                className={`${customFont.variable} ${geistSans.variable} ${jetbrainsMono.variable} ${vt323.variable} antialiased scroll-smooth`}
            >
            <Providers>
                <RegisterSW />
                <main className="flex min-h-screen items-center justify-center text-foreground bg-background font-sans">
                    {children}
                </main>
                <footer className="w-full text-center text-sm text-muted-foreground py-4">
                    © {new Date().getFullYear()} <Link href="https://github.com/G0rz" target="_blank"
                                                       rel="noreferrer"
                                                       className="hover:text-primary transition-colors">G0rz</Link>. All
                    rights reserved.
                </footer>
            </Providers>
            </body>
            </html>
        </ViewTransition>
    );
}
