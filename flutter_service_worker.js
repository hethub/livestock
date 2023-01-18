'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f46f3d33067eb0e52600f12f6cc0038f",
".git/config": "e7ff3759e5328f52ecc2dd837f59096a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5c5aeddc38c1538f39fd6e259b63a3a1",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9c2afc79ca4916782f605a9c03a281ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "96588f217d85ff8c0aeaf6be21ccc16c",
".git/logs/refs/heads/master": "96588f217d85ff8c0aeaf6be21ccc16c",
".git/logs/refs/remotes/origin/main": "08dbeb0f49f46ec54dacb6fac7f1a50c",
".git/logs/refs/remotes/origin/master": "09f1bd4baf554f43437dab1876d742fd",
".git/objects/02/3a2ea72fab358ae32e79f1e05b0f85de713358": "dd1e56e6c8613a40f2239fcdbeea056c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0c/4156fa3227badc55715bf5ca4b4c367b0fc78e": "9bdf55a839e5fff0fe9108884a525845",
".git/objects/10/9b942f3a8eb2b5132a56996afd5af13b384f67": "820a483036c48e922d3fd0e8de835317",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/32/7a56a8ad8dd90da13e2f6a7cfc175d4854e24e": "cd26095d143454682f751aaeb271906c",
".git/objects/33/0c0c18c97d26f33b42f2fb09e8d5e7cfbc85fb": "254a86902992aceb725c6d5d2af698f6",
".git/objects/3e/8f256eaa128af8bf2ce01fd3d49be8865548ab": "cabbc7ba5b5d02a999be4a69949aeea4",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/43/353e3aaac87ac21cfa8de25c3ad5e13c5ca13d": "af46745ce2d500f73a5906c24ac496da",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/53/61df987737a2802193979649d81d0a701043f6": "aea6c75d1bcb2049d6f7e7cfb97e727e",
".git/objects/5e/4fd87c69257e43968512c17f41353dd4ad3dde": "86fe2531a9779867276239801c97a81c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d32fcee364d9151e6399fcc8de4dd60717d69a": "28df610aa2b72bf46d4e40adceaed3a6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/d9bd6bc2d9c8db3bba04c991ca99e63691565f": "345f950d8dce122a630008b60f02f815",
".git/objects/95/5f7d4abd033fa8f3c96f920115643a220fc1fd": "20e700098fbbae1d9f85b48599322c14",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/67ce290c1df035722b811438b7dad3648929fa": "1e55b7b92127e8bc37ce58c8cb4a5b6c",
".git/objects/a5/e72699d504d75aeb8edc95fd71364300249142": "c18fc92222173b565d33241096076aab",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/7c3bcfb3fc8f052e654b6436e8cb5bd7ac9669": "d7c861549887a5fc61adb3023f9e85e2",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/4b81e9bc7fc33e4c993271e6c71c354945f646": "db04e64aee46f37740e5b12219586c44",
".git/objects/d1/f6226b21734be8317bc64dae6b582831e96dce": "198f6a3afdff216f6204910b6ba8001a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/56d4a7155a9af882a3fc8a6071c04482fca3ca": "a50a12461ee020bd9ac1a73fcd69b84e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/1273c8368876630c5a9abc502d7f21cea64a18": "02d095de2ca893e78fa056adbe714feb",
".git/objects/fd/498aa0ad16096a26f48db6f1cfe120f4b40a78": "3b4de7dc91b87baee212d66b02b45a6f",
".git/objects/fe/5762d68f10328fac5b5eff2f401ca8d58c926e": "739a88e69ca1a7606a82b2c47edcc1b0",
".git/refs/heads/master": "8047325a1384babaa773fd3f310c1434",
".git/refs/remotes/origin/main": "116cf36c9d73f22604ecbef1e57b3123",
".git/refs/remotes/origin/master": "8047325a1384babaa773fd3f310c1434",
"assets/AssetManifest.json": "ec17e632a29b727a97590b86ed3ca85d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/about_us_page.png": "b2a35d5efa73dd0ca26fe9e9225f8d30",
"assets/images/authentication.png": "eaaab9f5f5d223d0d1161cfe89cc7c82",
"assets/images/beach_day.png": "9f2298310d66c4b126652f5b9156488c",
"assets/images/build_wireframe.png": "a5530f750971c1cee50ae2e5db957483",
"assets/images/business_decisions.png": "4f2549c279e60f27a93b1389ed5b218d",
"assets/images/cloud_files.png": "364b8446dde425af22e7efc8ac687d28",
"assets/images/community.png": "179d17b68a254a1f3fee340a5370d501",
"assets/images/confirm.png": "cdb8b39b25b3e10151e34dbca656505f",
"assets/images/connected_world.png": "1ce57fcf8e06ff7ffb0a0a5f4e890680",
"assets/images/dashboard.png": "2999a4de1adf5c8fd15ba197563ac3da",
"assets/images/delivery_address.png": "780eb9776aa13cb6accf898468b79175",
"assets/images/design_stats.png": "365ff8bc936595fa435a8640c9c2f750",
"assets/images/dog.png": "fc9054e07d561ecc1522eae491b1cb6a",
"assets/images/experience_design.png": "6832da69d265870ddf44779367fb2d64",
"assets/images/experts.png": "fd8a1acf53583fd95aebb8f970c3dfb1",
"assets/images/fingerpri.png": "21255316975ec298cfdb497ae0bab23f",
"assets/images/fingerprint_login.png": "93b386ff3aff65d22f9ec85a70637ce3",
"assets/images/fireworks.png": "0107fb5e89507dee5c5daf0726189a94",
"assets/images/gifts.png": "b7bf7f21ebdcc91660656b2592e8bbc0",
"assets/images/hello.png": "a1cb4b76f6a8deaa1d3dc1f2cf26df05",
"assets/images/houses.png": "fc962c4d82e7a406279feed896557d87",
"assets/images/location_search.png": "241307a6cd8ca6a4f6ed385902533011",
"assets/images/manwoman.png": "5332a06569916a0c62504d7c9723ab2b",
"assets/images/medicine.png": "9212bbd601d9336e7b829289702e936b",
"assets/images/moments.png": "f73150c4e9551e871f459f01a5857b64",
"assets/images/my_location.png": "51f999051fc618efccc9aa80ad3ab6c6",
"assets/images/navigation.png": "8588c1cbc54e6e45a2f1eaeaef5c94dd",
"assets/images/photo_sharing.png": "76c0c36c0196f7833156a202cfb39f48",
"assets/images/pitching.png": "2fcdb53f9551780cd8b8f690e5d68df3",
"assets/images/plain_credit_card.png": "82bd9d85d9b431e3859fcc44f7d2348a",
"assets/images/plus.png": "03c186ad9568aa95e301e1dec77fafd8",
"assets/images/profile.png": "82f4a8c153fbfc96d8a3904cdc514275",
"assets/images/real_time_sync.png": "c787c3b8342dce5f992b1e7eab107cf3",
"assets/images/register.png": "ae311cd16f70b83b1e849b9fae2ba645",
"assets/images/safe.png": "31e6d6383651f5daadea0e9f14b12949",
"assets/images/secure.png": "9153d826eb96e0952a2a4ce2633f269a",
"assets/images/security.png": "95e90cb1babcd71d44a58a50838df8a6",
"assets/images/social_tree.png": "842c120d9ba8b8e5e36e74636d761e28",
"assets/images/subscribe.png": "bf2f3a8ee7687856ef539de41689ebaa",
"assets/images/task.png": "784617b8ae3a2b9df11b044004dbe0e8",
"assets/images/thought_process.png": "2868bc9c06801be4c6fecd4e927fd346",
"assets/images/typing.png": "cc83474b4fa2b089c32d1862409247f1",
"assets/images/video_streaming.png": "d6f003c6bfdf5d1a230e2c8b7a0d0d0c",
"assets/images/world.png": "063f28b9669718b09cea0d1dcc3bff43",
"assets/NOTICES": "dcf20a32712e6803a6a75de37c9d1669",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "c00da48e499ee44ff7f5260851788ffd",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ed19230569c774016876acf822b6d605",
"/": "ed19230569c774016876acf822b6d605",
"main.dart.js": "d7dbfe642734076b24f9de346cdfd011",
"manifest.json": "cfe89a1915410993a2c435ad1a643f17",
"version.json": "a5f43913e1b21e92b04f39dba6771074"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
