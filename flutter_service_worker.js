'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js.deps": "c4694a4c7f73d0bb4ed4477586e8b3d0",
"index.html": "d25a22c25d8dcd589876b7123dbaede1",
"/": "d25a22c25d8dcd589876b7123dbaede1",
"main.dart.js": "b7a35af83fcbc736996bf33b661484d9",
"assets/FontManifest.json": "0d81608149e3cb9fbb5341f3901df3cf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Dekko-Regular.ttf": "df413a2acd7edb845e6658826c8a2aa9",
"assets/AssetManifest.json": "540abb6d055eabdceeeb6aa7c23d359c",
"assets/LICENSE": "cf992dfcc0d77802d11bcc9bb47d73a9",
"assets/assets/pishi.png": "a767c82b20d27c78b94d2d971db22c40",
"assets/assets/gmail.png": "828e4779415a6ad47ff7fa9d3c4a5772",
"assets/assets/pishi-m.jpg": "6a9ce3c5a92dd0f5e1ada11efd9cc154",
"assets/assets/iot.png": "293830ab5921407533984ca7fca653fb",
"assets/assets/back.png": "7b7ead0799465f1b0c96f89c340b1dd6",
"assets/assets/cplus.png": "8f42e018a9340b6e4e20161b06525308",
"assets/assets/api.png": "afbe301027eb7db62563004cabdfe836",
"assets/assets/csharp.png": "edaaf8481e18a85d4af5a80ffe3557af",
"assets/assets/gnulin.png": "c15e0cd02926c346edd84e79e792e224",
"assets/assets/twitter-blue.png": "c109b478d2f61697755ce2e40466f4ae",
"assets/assets/telegram.png": "4a8344ad11d66ad09e803c61f0ffa15f",
"assets/assets/github.png": "3e54ed15b9cd877c5223f5ecf64579df",
"assets/assets/pishi-n.jpg": "5f0dd5f8ff142a3f3a6b9e0644e7046c",
"assets/assets/linkedin.png": "b58956b46a5198db7e10f5a7b02ec1d7",
"assets/assets/git.jpeg": "16db046cbe23b17d1096fb9e6361b4ef",
"assets/assets/website.png": "3160433a3f8175858ef16b365c0708f5",
"assets/assets/laptop-small.jpg": "c174837c8db576edc096e6231487f3c3",
"assets/assets/laptop.jpg": "bd725b6b40c7f30b34a6ec9c9476186f",
"assets/assets/pishi-s.jpg": "fb1a69d8a71d94909c16da56bf932291",
"assets/assets/happy_sad_switch.flr": "42d5f98754bc96557ebb0918d80d611a",
"assets/assets/timeset.png": "72f61caff9d80b65c3da32ef78c5c2e5",
"assets/assets/expteam.png": "e25333637b34db10bfb688b95bfc10f3",
"assets/assets/kotlin.png": "0f6a690b27200af9bdd1657708d20cf8",
"assets/assets/persian-cal.png": "6513bbed5284ad9e5578c9c6c043163d",
"assets/assets/gitlab.png": "efbb714a90f6671297c4b07f2542ad35",
"assets/assets/present.png": "21ed5f9be632be8af2cd1c7bb51f2cee",
"assets/assets/mysql.png": "d196df8cd25ab11206d9756fb6940c7a",
"assets/assets/java.png": "4eb1819dc863ef386e09d86e9f482a9f",
"assets/assets/android.png": "8ad190834b094b997d6b91641f2f1041",
"assets/assets/broker.png": "251de7ba17f7f732acbf269d38ee98e0",
"assets/assets/waka.png": "17a949880582f6af792920cb9f80cebb",
"assets/assets/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"/",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(CORE);
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

