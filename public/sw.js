const staticCacheName = "site-static-v7";
const assets = [
    "/"
]

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(staticCacheName).then( cache => {
            console.log("caching assets")
            cache.addAll(assets);
    
    }));
    //console.log("Welcome to the jungle 🥳");
});

self.addEventListener("activate", function(event){
    console.log("Your service worker has been installed👨🏽‍💻");
})

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match( event.request ).then( cacheRes => {
            return cacheRes || fetch(event.request);
        })
    )
})