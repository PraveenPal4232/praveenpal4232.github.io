self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(
          [ '/',
            '/css/style.css',
            '/js/main.js',
          ]
        );
      })
    );
  });