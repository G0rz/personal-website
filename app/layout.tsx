import {ViewTransition} from 'react'
import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import CustomFont from "next/font/local";
import "./globals.css"
import Navbar from "@/components/ui/navbar/Navbar";
import {Providers} from "@/app/providers";

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
      <html lang="es" className="dark">
      <body
          className={`${customFont.variable} ${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
     <Providers>
         <ViewTransition>
             <main className="flex min-h-screen items-center justify-center bg-background">
                 {children}
             </main>
         </ViewTransition>
     </Providers>
      </body>
      </html>
  );
}
