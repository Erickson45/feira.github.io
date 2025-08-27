self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('minha-feira-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        'android-icon-192x192.png',
        '3132693.png',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        'https://cdn.jsdelivr.net/npm/chart.js'
      ]);
    })
  );
});
