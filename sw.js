const CACHE_NAME = "Recursos";

self.addEventListener("install", (event) => {
    caches.delete(CACHE_NAME);
    caches.delete(CACHE_IMG);
    const recursos = caches.open(CACHE_NAME).then((cache) => {
        cache.add("/");
        cache.add("app.js");
        cache.add("appWolf.js");
        cache.add("index.html");
        cache.add("manifest.json")
    });



    event.waitUntil(recursos);
  });

  self.addEventListener("fetch", (event) => {
    // Estrategia 3 abajo 
    const respuesta = fetch(event.request).then((newResp) => {
      caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, newResp);
      });

      return newResp.clone();      
    }).catch(err =>{
      return caches.match(event.request);
    })
    event.respondWith(respuesta);
});
