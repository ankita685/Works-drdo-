


const CACHE_NAME = 'my-cache';

const urlsToCache = [
  '/',
  '/index.html',
  '/assets/index-CJ2Ix86w.js',
  '/assets/index-B-3m6pGA.css',
 
  '/images',
  // Add more URLs to cache as needed
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Add each URL to the cache individually
        return Promise.all(
          urlsToCache.map(url => cache.add(url))
        );
      })
      .catch(error => {
        console.error('Failed to cache URLs:', error);
      })
  );
});

self.addEventListener('fetch', event => {
  // Exclude Firebase URLs from being cached
  if (event.request.url.startsWith('https://vite-project-4dcf8-default-rtdb.firebaseio.com')) {
    return fetch(event.request);
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // If the resource is found in the cache, return it
        if (response) {
          return response;
        }
        // If the resource is not found in the cache, fetch it from the network
        return fetch(event.request)
          .then(response => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response since it can be consumed only once
            const responseToCache = response.clone();

            // Open the cache and store the fetched response
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          });
      })
  );
});
