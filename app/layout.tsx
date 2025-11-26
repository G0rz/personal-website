import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CustomFont from "next/font/local";
import "./globals.css"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const customFont = CustomFont({
    src: "/../public/fonts/matissePro.otf",
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
      <html lang="es" className="dark" data-theme="dark">
      <body
          className={`${customFont.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      {children}
      </body>
      </html>
  );
}
