import {ViewTransition} from 'react'
import {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import CustomFont from "next/font/local";
import "./globals.css"
import {Providers} from "@/app/providers";
import Link from "next/link";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const customFont = CustomFont({
    src: "/../public/fonts/NIS-JTC-Win-M9.ttf",
    variable: "--font-custom",
});

const fontFallout = CustomFont({
    src: "/../public/fonts/VT323-Regular.ttf",
    variable: "--font-fallout",
});

export const metadata: Metadata = {
    title: 'Leonardo Becerril | Personal Website',
    description: 'Without description.',
    openGraph: {
        title: 'Personal Website',
        description: 'Without description.',
        url: "https://leonardobecerril.dev/",
        siteName: 'Leonardo Becerril | Personal Website',
        images: [
            {
                url: 'https://leonardobecerril.dev/preview.png',
                width: 800,
                height: 600,
                alt: 'Preview Image',
            },
        ],
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Personal Website',
        description: 'Without description.',
        images: ['https://example.com/images/blog-post.jpg'],
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
        <body
            className={`${customFont.variable} ${geistSans.variable} ${geistMono.variable} ${fontFallout.variable} antialiased scroll-smooth`}
        >
        <Providers>
            <ViewTransition>
                <main className="flex min-h-screen items-center justify-center text-foreground bg-background">
                    {children}
                </main>
                <footer className="w-full text-center text-sm text-default-400">
                    © {new Date().getFullYear()} <Link href="https://github.com/G0rz" target="_blank"
                                                       rel="noreferrer">G0rz</Link>. Al rights reserved.
                </footer>
            </ViewTransition>
        </Providers>
        </body>
        </html>
    );
}
