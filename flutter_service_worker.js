'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "3be699ed747628b76e87656fe25c02b5",
"/": "3be699ed747628b76e87656fe25c02b5",
"main.dart.js": "e19011c066ea90a7bbeb4215e2b44360",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "24d2619bc2a413a103dac790eadc6ae9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/FontManifest.json": "0d81608149e3cb9fbb5341f3901df3cf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Dekko-Regular.ttf": "df413a2acd7edb845e6658826c8a2aa9",
"assets/AssetManifest.json": "f05f359db3d24717cc012883b36bdd03",
"assets/LICENSE": "04daa14b894c621373bded05e5b57865",
"assets/assets/pishi.png": "a767c82b20d27c78b94d2d971db22c40",
"assets/assets/gmail.png": "828e4779415a6ad47ff7fa9d3c4a5772",
"assets/assets/pishi-m.jpg": "6a9ce3c5a92dd0f5e1ada11efd9cc154",
"assets/assets/iot.png": "293830ab5921407533984ca7fca653fb",
"assets/assets/back.png": "7b7ead0799465f1b0c96f89c340b1dd6",
"assets/assets/cplus.png": "8f42e018a9340b6e4e20161b06525308",
"assets/assets/api.png": "afbe301027eb7db62563004cabdfe836",
"assets/assets/yas/10.png": "82831e3c7d962887f69992262d6d2e61",
"assets/assets/yas/12.png": "2b801a355b36568726f4869b2324a1a1",
"assets/assets/yas/11.png": "704fb9067e5b2d9b437db6640dc5b6de",
"assets/assets/yas/6.png": "e5a01e98588ef7176c91f213c8f7340d",
"assets/assets/yas/5.png": "8d1ef2f95e4ffaa70234c74be66790b5",
"assets/assets/yas/3.png": "fc17a98c8f3670c348a3ee27af7d4961",
"assets/assets/yas/9.png": "76b1d7ab087d953a89af77b184343e2f",
"assets/assets/yas/7.png": "7d15a34de36a6f3e2e7496aba9e54be8",
"assets/assets/yas/8.png": "4acca3426c5842134f779c926ac22e20",
"assets/assets/yas/1.png": "85a1bfb26404211108aa6103e343277d",
"assets/assets/yas/2.png": "aeddc0cbb3d245397134e6f5bea9b0af",
"assets/assets/yas/4.png": "400ac35300f96ac85f3c8ceb48196105",
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
"assets/assets/payatam/10.png": "e267e60e57c3eb52d6c63afc360dfe85",
"assets/assets/payatam/15.png": "d7565c3baf42de00c77ca5a14774b17f",
"assets/assets/payatam/12.png": "f25444809fcbedc98a1ba89d239c7962",
"assets/assets/payatam/11.png": "135a2ecb21699504b7fbf1cc544eab66",
"assets/assets/payatam/6.png": "2e44de56438d06e1df0ba41945e224d7",
"assets/assets/payatam/5.png": "6349f51d9be1855b48cadf5a0503bdf3",
"assets/assets/payatam/3.png": "614c0d5c3c2d2fb0107c7db05791329b",
"assets/assets/payatam/9.png": "f75cb9f8902d327e8a2aa590e5547cc0",
"assets/assets/payatam/7.png": "d2fdd76df3871e09305ce72928ab0d3f",
"assets/assets/payatam/13.png": "5c4792ad3ebfbe1ee1526a16fdb899af",
"assets/assets/payatam/8.png": "e13349fa546972fdea70c58e0a732cfc",
"assets/assets/payatam/1.png": "697658003698830986e432a0e46d5c84",
"assets/assets/payatam/2.png": "1257a571a2a2d799464a4303f98c42a0",
"assets/assets/payatam/16.png": "c02aadd353b81dd9c5c75a988a0afd9c",
"assets/assets/payatam/4.png": "d7000dfa5ad1c86f505f28e7d40b7d11",
"assets/assets/payatam/14.png": "63c622965f928003374740fc98006cc0",
"assets/assets/pishi-s.jpg": "fb1a69d8a71d94909c16da56bf932291",
"assets/assets/happy_sad_switch.flr": "42d5f98754bc96557ebb0918d80d611a",
"assets/assets/timeset.png": "72f61caff9d80b65c3da32ef78c5c2e5",
"assets/assets/therappy/1.jpg": "8c085e150431f62f5d61fab42c67bbf7",
"assets/assets/therappy/8.jpg": "3b3a7149d401a9cf66cc5defe1343e2b",
"assets/assets/therappy/4.jpg": "4441c4bc814230377ea9a6981d36b62a",
"assets/assets/therappy/2.jpg": "7e62c522e408737d6c3ec240cc6e8a8f",
"assets/assets/therappy/7.jpg": "e25639c1e6b8a8557b42a3fc2df748ee",
"assets/assets/therappy/5.jpg": "1dc84886232119f2987716ce6a820347",
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

