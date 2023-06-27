'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a3447aeaff1fb7b191566a2f8b4c90e6",
"manifest.json": "24d2619bc2a413a103dac790eadc6ae9",
"favicon.png": "6dc0c99d05d33eeea04277f6f96c1cd9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon.png": "6dc0c99d05d33eeea04277f6f96c1cd9",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "9e47c839f66d12f53bbd6a9594ce8fb7",
"assets/fonts/Dekko-Regular.ttf": "df413a2acd7edb845e6658826c8a2aa9",
"assets/NOTICES": "21705c05292e6b558817f9193719291d",
"assets/AssetManifest.json": "a17fccdd4f93e2f5c0995c94b01e25e1",
"assets/AssetManifest.bin": "89bcaafbecb13610763db1a0646b7e7b",
"assets/assets/persian-cal.png": "6513bbed5284ad9e5578c9c6c043163d",
"assets/assets/about-1.gif": "ddc7eaa3383a402cbe82fb7c297742ad",
"assets/assets/timeset/4.png": "86db8c9f9a432b37b91e41c1fd291b8e",
"assets/assets/timeset/7.png": "f4e98c79e4d7f365773b7b40cb44d098",
"assets/assets/timeset/6.png": "8edcb03dbcb35a8e1f38c9210203865f",
"assets/assets/timeset/3.png": "6843f5fafa809b063f4c2d2620650fad",
"assets/assets/timeset/1.png": "c0af0326dfed9d3738f7e19f8822afe9",
"assets/assets/timeset/12.png": "9aca801d0b803bcc1df8f67eb65dd689",
"assets/assets/timeset/5.png": "941a520083466edb384f9bf6d83cf2af",
"assets/assets/timeset/10.png": "bfa4f9ef17cf1202970616e9afa505d3",
"assets/assets/timeset/9.png": "7288a04bde4ecefe6ec00027042bb172",
"assets/assets/timeset/11.png": "48cb8c4cae92dddbec8e8acef89d441c",
"assets/assets/timeset/timeset.png": "b2818de031a3710343556b650c8d4aba",
"assets/assets/timeset/8.png": "f2154eb2d8e47bdd25a02e68c8b78637",
"assets/assets/timeset/2.png": "cdd01c7998bdf1d5f8541e5bd85952a6",
"assets/assets/twitter.png": "2386e7db60f5c4d8875611b10dd018c0",
"assets/assets/payatam/partner-logo.png": "594f3ff0a38fae42c32a80617bae05ed",
"assets/assets/payatam/4.png": "d7000dfa5ad1c86f505f28e7d40b7d11",
"assets/assets/payatam/7.png": "d2fdd76df3871e09305ce72928ab0d3f",
"assets/assets/payatam/6.png": "2e44de56438d06e1df0ba41945e224d7",
"assets/assets/payatam/16.png": "c02aadd353b81dd9c5c75a988a0afd9c",
"assets/assets/payatam/3.png": "614c0d5c3c2d2fb0107c7db05791329b",
"assets/assets/payatam/1.png": "697658003698830986e432a0e46d5c84",
"assets/assets/payatam/12.png": "f25444809fcbedc98a1ba89d239c7962",
"assets/assets/payatam/5.png": "6349f51d9be1855b48cadf5a0503bdf3",
"assets/assets/payatam/10.png": "e267e60e57c3eb52d6c63afc360dfe85",
"assets/assets/payatam/9.png": "f75cb9f8902d327e8a2aa590e5547cc0",
"assets/assets/payatam/13.png": "5c4792ad3ebfbe1ee1526a16fdb899af",
"assets/assets/payatam/11.png": "135a2ecb21699504b7fbf1cc544eab66",
"assets/assets/payatam/14.png": "63c622965f928003374740fc98006cc0",
"assets/assets/payatam/15.png": "d7565c3baf42de00c77ca5a14774b17f",
"assets/assets/payatam/8.png": "e13349fa546972fdea70c58e0a732cfc",
"assets/assets/payatam/2.png": "1257a571a2a2d799464a4303f98c42a0",
"assets/assets/pishi.png": "a767c82b20d27c78b94d2d971db22c40",
"assets/assets/waka.png": "17a949880582f6af792920cb9f80cebb",
"assets/assets/website.png": "3160433a3f8175858ef16b365c0708f5",
"assets/assets/present.png": "21ed5f9be632be8af2cd1c7bb51f2cee",
"assets/assets/behin/4.png": "53ba94cab054b8afd24790fb4b1fde5b",
"assets/assets/behin/7.png": "0a99fb70dca24ab4359e8b9427d5de51",
"assets/assets/behin/6.png": "afcb4260b3c9abbe77e88adb60e5410b",
"assets/assets/behin/3.png": "713ce4e1e6b10699923320df6274f14e",
"assets/assets/behin/1.png": "eccabc1174b35701eb96a595dc72fdcb",
"assets/assets/behin/5.png": "c4a1c6b41feecc01c00ab38b5cd1fa68",
"assets/assets/behin/behin-logo.png": "1c1ac10354cab97d94f99121b73d541a",
"assets/assets/behin/2.png": "d4108588610ef359248b82653bf137a0",
"assets/assets/linkedin.png": "b58956b46a5198db7e10f5a7b02ec1d7",
"assets/assets/yas/4.png": "845166c9051ff22f62a599a8f8f8feba",
"assets/assets/yas/7.png": "3ae488f8f065a2d40d0b5fd3fc3327a0",
"assets/assets/yas/6.png": "382bef776d8547863e5ae094f6ec9bb8",
"assets/assets/yas/3.png": "f38c49a2de7806db8aadb586eb02ecd5",
"assets/assets/yas/1.png": "9783546fda900716e10648f53752bd2c",
"assets/assets/yas/12.png": "74c7ae669924b0666d3de49acb19ce5b",
"assets/assets/yas/5.png": "5b4c7f66c27dd34da02866e36a9f57e1",
"assets/assets/yas/10.png": "624b6b32e5d166221dc7f134d6d67e56",
"assets/assets/yas/yas-logo.png": "c2498a0f499307cae76cb86bdff46ac1",
"assets/assets/yas/9.png": "041bbe27200790e79a81c54493e2faa5",
"assets/assets/yas/11.png": "77d39dda5c5ac6745447be8a79db0d3e",
"assets/assets/yas/8.png": "657a577bd5564094474497d848fff448",
"assets/assets/yas/2.png": "d67b42268089b6827e2da24685043f10",
"assets/assets/telegram.png": "4a8344ad11d66ad09e803c61f0ffa15f",
"assets/assets/github.png": "3e54ed15b9cd877c5223f5ecf64579df",
"assets/assets/network/cv.png": "4050f0fa173ad637f981c3e726b2c635",
"assets/assets/network/email.png": "d3f701ca15f99ae452c019fec5e9cf96",
"assets/assets/network/linkedin.png": "a68a9095ffeba5918572fbf4ddaeaae4",
"assets/assets/network/telegram.png": "23dd3a4774be46d46acdeba611e8a6e7",
"assets/assets/network/github.png": "7b58744f3e4245c9f07846caf8648c83",
"assets/assets/gmail.png": "828e4779415a6ad47ff7fa9d3c4a5772",
"assets/assets/therappy/8.jpg": "3b3a7149d401a9cf66cc5defe1343e2b",
"assets/assets/therappy/2.jpg": "7e62c522e408737d6c3ec240cc6e8a8f",
"assets/assets/therappy/1.jpg": "8c085e150431f62f5d61fab42c67bbf7",
"assets/assets/therappy/5.jpg": "1dc84886232119f2987716ce6a820347",
"assets/assets/therappy/4.jpg": "4441c4bc814230377ea9a6981d36b62a",
"assets/assets/therappy/7.jpg": "e25639c1e6b8a8557b42a3fc2df748ee",
"assets/assets/therappy/therappy-logo.png": "5c19936080960f40752cfb75b0a9bc86",
"assets/assets/broker1.png": "5f3db17fde09cd1f6acccb3b2c9c7dc3",
"assets/assets/books-logo.png": "62be20f0009610a74b37f3364260f35b",
"assets/assets/jojo/shop/4.png": "b6fa673800be05db477d3c3573cebcc3",
"assets/assets/jojo/shop/7.png": "533aeb3cfe37ce37e5c5a6cad8ed26d1",
"assets/assets/jojo/shop/6.png": "2fee9974406dc51a7ffe7607779b4b9b",
"assets/assets/jojo/shop/3.png": "f953ec5fca53232a0b72336b5a221e4e",
"assets/assets/jojo/shop/1.png": "c55e58081d5f2b20abfa8b75cfd99f0d",
"assets/assets/jojo/shop/5.png": "a658fe3c5635d71b4ba83f30dcc52174",
"assets/assets/jojo/shop/2.png": "e3388a7c7325d560ab122a1e5f3c1116",
"assets/assets/jojo/customer/4.png": "880aa567866739e0a2b01cb692f86e5d",
"assets/assets/jojo/customer/7.png": "81f5601cf4626179d98f782e6ada7ad3",
"assets/assets/jojo/customer/6.png": "c0db860e58f71e5f04c9c8828ca68daa",
"assets/assets/jojo/customer/16.png": "a302238e0d8e21edc59d632771f1e8dd",
"assets/assets/jojo/customer/3.png": "0adbc270b33ac6dd6d69f6cefbf84342",
"assets/assets/jojo/customer/1.png": "655407ed9e63d3d34a1038de717787ca",
"assets/assets/jojo/customer/12.png": "1468d7390f940dab7861216d59be636b",
"assets/assets/jojo/customer/18.png": "83d0619eaa825f5d047c4481df616e12",
"assets/assets/jojo/customer/5.png": "eb042392dedcf08bdb8949ab8342e308",
"assets/assets/jojo/customer/10.png": "88b47aea396f39f3b1fd16bbf24a626d",
"assets/assets/jojo/customer/9.png": "658d58ff0b5bed1906283bbef9ff8771",
"assets/assets/jojo/customer/13.png": "54203020ac5b1337b2fe5b4e6a0ce843",
"assets/assets/jojo/customer/11.png": "5405ea22978e63f89217aaf7a106be3c",
"assets/assets/jojo/customer/14.png": "9d3e3cb72117f80256c7a68660ecd1d7",
"assets/assets/jojo/customer/15.png": "2e17ece135874f820055b2b47bc3db71",
"assets/assets/jojo/customer/17.png": "cd979ff1db4a10648e640407e2936cc4",
"assets/assets/jojo/customer/8.png": "6c8fc6c46e8bb2435d7e4467d6cb9ed9",
"assets/assets/jojo/customer/2.png": "376904d464304ad0e44aa6b3aa6cf127",
"assets/assets/jojo/jojo-logo.png": "14ad0d6f2e0189a03c4d0e056e27d9c4",
"assets/FontManifest.json": "a16045b6683b5593663a1623f652c4c3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js": "44baf3581c71704166fa78c17c0ba0e2",
"index.html": "8a469ff107b4303c16b4e467edb70421",
"/": "8a469ff107b4303c16b4e467edb70421",
"three-dots.svg": "10f170fc3d501421cb5199b33296b928",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
