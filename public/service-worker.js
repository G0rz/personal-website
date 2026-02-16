const CACHE_NAME = 'leo-dev-cache';

const PRECACHE_URLS = ['/', '/manifest.webmanifest', '/favicon.ico',];

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)));
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(caches.keys().then((cacheNames) => {
        return Promise.all(cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
                return caches.delete(cacheName);
            }
        }));
    }));
    self.clients.claim();
});

const cacheResponse = (request, response) => {
    if (!response || response.status !== 200 || response.type !== 'basic') {
        return response;
    }
    const responseClone = response.clone();
    caches.open(CACHE_NAME).then((cache) => {
        cache.put(request, responseClone);
    });
    return response;
};

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);

    if (url.protocol === 'chrome-extension:') return;

    if (url.pathname.startsWith('/_next/static')) {
        event.respondWith(caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            } else {
                return fetch(event.request).then((response) => cacheResponse(event.request, response));
            }
        }));
        return;
    }

    event.respondWith(fetch(event.request)
        .then((response) => cacheResponse(event.request, response))
        .catch(() => caches.match(event.request)));
});
