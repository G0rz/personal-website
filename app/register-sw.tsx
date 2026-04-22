'use client';

import { useEffect } from 'react';

export function RegisterSW() {
  useEffect(() => {
    const isProduction = process.env.NODE_ENV === 'production';
    
    if ('serviceWorker' in navigator && isProduction) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .catch((error) => {
          // Silent catch in production unless debugging is needed
          if (process.env.NEXT_PUBLIC_DEBUG === 'true') {
            console.error('Service Worker registration failed:', error);
          }
        });
    }
  }, []);

  return null;
}
