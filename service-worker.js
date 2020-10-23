const CACHE_NAME = "footballpwaV3"
var urlsToCache = [
    "/",
    "/index.html",
    "/nav.html",
    "/team.html",
    "/pages/home.html",
    "/pages/favorite.html",
    "/pages/ranking.html",
    "/css/footer.css",
    "/css/home.css",
    "/css/materialize.css",
    "/css/materialize.min.css",
    "/css/ranking.css",
    "/images/background.jpg",
    "/images/notif.png",
    "/js/api.js",
    "/js/materialize.min.js",
    "/js/nav.js",
    "/js/idb.js",
    "/js/db.js",
    'https://fonts.googleapis.com/icon?family=Material+Icons'
];

self.addEventListener("install", function(event) {
    event.waitUntil(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.addAll(urlsToCache);
      })
    );
  });
  
  self.addEventListener("fetch", function(event) {
    event.respondWith(
      caches
        .match(event.request, { cacheName: CACHE_NAME })
        .then(function(response) {
          if (response) {
            console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
            return response;
          }
   
          console.log(
            "ServiceWorker: Memuat aset dari server: ",
            event.request.url
          );
          return fetch(event.request);
        })
    );
  });
  
  self.addEventListener("activate", function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheName != CACHE_NAME) {
              console.log("ServiceWorker: cache " + cacheName + " dihapus");
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });

  self.addEventListener('push', function(event) {
    var body;

    if(event.data){
      body = event.data.text();
    } else {
      body = 'Push message no payload';
    }

    var options = {
      body: body,
      icon: '/images/notif.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };

    event.waitUntil(
      self.registration.showNotification('Push Notification', options)
    );

  });