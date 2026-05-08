const CACHE_NAME = 'uk-trip-v1';

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll([
        '/',
        '/index.html',
        '/theme-a.html',
        '/theme-b.html',
        '/theme-c.html',
        '/data.js',
        '/styles/landing.css',
        '/styles/theme-a.css',
        '/styles/theme-b.css',
        '/styles/theme-c.css'
      ])
    )
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
