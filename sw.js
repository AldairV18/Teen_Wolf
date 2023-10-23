const CACHE_NAME = "Recursos";

self.addEventListener("install", (event) => {
    caches.delete(CACHE_NAME);
    const recursos = caches.open(CACHE_NAME).then((cache) => {
        cache.add("/");
        cache.add("app.js");
        cache.add("appWolf.js");
        cache.add("index.html");
        cache.add("manifest.json")
        cache.add("logo.jpg")
        cache.add("personaje.html")
        cache.add("style.css")
        cache.add("teen.webp")
        cache.add("wolf.ico")
        cache.add("img/Jackson.webp")
        cache.add("img/Lydia.webp")
        cache.add("img/allison.webp")
        cache.add("img/derek.webp")
        cache.add("img/kira.webp")
        cache.add("img/liam.jpg")
        cache.add("img/malia.jpg")
        cache.add("img/noa.webp")
        cache.add("img/scott.webp")
        cache.add("img/styles.jpg")
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
