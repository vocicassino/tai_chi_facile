const CACHE_NAME = "tai-chi-facile-v13";
const ASSETS = ["./", "./index.html", "./styles.css", "./app.js", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./assets/img/cloud.png", "./assets/img/hero.png", "./assets/img/opening.png", "./assets/img/push.png", "./assets/img/rooted.png", "./assets/img/seated.png", "./assets/img/shift.png", "./assets/anim/cloud/1.jpg", "./assets/anim/cloud/2.jpg", "./assets/anim/cloud/3.jpg", "./assets/anim/cloud/4.jpg", "./assets/anim/open/1.jpg", "./assets/anim/open/2.jpg", "./assets/anim/open/3.jpg", "./assets/anim/open/4.jpg", "./assets/anim/push/1.jpg", "./assets/anim/push/2.jpg", "./assets/anim/push/3.jpg", "./assets/anim/push/4.jpg", "./assets/anim/seated/1.jpg", "./assets/anim/seated/2.jpg", "./assets/anim/seated/3.jpg", "./assets/anim/seated/4.jpg", "./assets/anim/shift/1.jpg", "./assets/anim/shift/2.jpg", "./assets/anim/shift/3.jpg", "./assets/anim/shift/4.jpg"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match("./index.html"))));
});
