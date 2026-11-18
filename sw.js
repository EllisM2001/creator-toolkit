var CACHE = "toolkit-v7";
var ASSETS = ["./", "index.html", "manifest.json", "icon-192.png", "icon-512.png", "icon-maskable.png", "apple-touch-icon.png", "favicon.png", "pubity-p.png",
  "fonts/VanguardCF-Bold.woff2", "fonts/Poppins-Bold.woff2", "fonts/Poppins-ExtraBold.woff2", "fonts/ImpactLTStd.woff2", "fonts/Arimo-Regular.woff2",
  "fonts/GeneralSans-Medium.woff2", "fonts/GeneralSans-MediumItalic.woff2", "fonts/GeneralSans-Semibold.woff2", "fonts/GeneralSans-Bold.woff2"];

self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(ASSETS); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener("fetch", function(e){
  var req = e.request;
  if (req.method !== "GET") return;
  var url;
  try { url = new URL(req.url); } catch(err){ return; }
  if (url.origin !== self.location.origin) return;
  e.respondWith(
    caches.match(req).then(function(hit){
      if (hit) return hit;
      return fetch(req).then(function(res){
        if (res && res.status === 200 && res.type === "basic"){
          var copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put(req, copy); });
        }
        return res;
      }).catch(function(){
        if (req.mode === "navigate") return caches.match("index.html");
        return new Response("", { status: 504 });
      });
    })
  );
});
