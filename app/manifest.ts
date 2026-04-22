import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Leonardo Becerril | Personal Website',
    short_name: 'Leonardo B.',
    description: 'Personal Website of Leonardo Becerril, a Computer Systems Engineer and Full Stack Developer specializing in React, Next.js, and Mobile Development.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/ico',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
          src: '/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png',
      }
    ],
  }
}