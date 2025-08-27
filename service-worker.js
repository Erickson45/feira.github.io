// Instalação do Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    // Cache de alguns arquivos para uso offline, se necessário
    caches.open('minha-feira-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json'
      ]);
    })
  );
});

// Responde com o conteúdo do cache se offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});