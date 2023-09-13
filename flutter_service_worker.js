'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "789c021a0cd0facf185d90a7b8622d38",
".git/config": "168b3a2384efe68a8f40801398cff543",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3dcb6bbe9bec00a1813577b68a24ab12",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "72eabe06d0a4686c2d5bbec05e797648",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "774c2cb9408890f89f2de64b629ce36a",
".git/logs/refs/heads/main": "8e966d638eaa149b4247f5088c0f7c23",
".git/logs/refs/remotes/origin/main": "1c114ff89674408957cfeae91f329186",
".git/objects/00/a94f8e9a28420c1aa52429e9dfef6c41f2d402": "f81224137756298a5bb137a84eab4250",
".git/objects/02/eaf2d3fb2e24b4a7db984ac08b02ea3101d9e5": "7aaa70a02c77003e0513ce1b04118920",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/06/1b62cd40ee5e19ae38a9c53f46f89ae95a5b03": "c553a752c75ef510913502b69ac5a59c",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/22/7ca10a4849e57c7cc140261c30d0293b44f288": "e2e021ab75eb83355abc8fce6cfaaa3c",
".git/objects/2e/4070fcd6b78ba412ee499c496ad29168cec507": "18ed4529b7b9afc42584f3d414e1ea4b",
".git/objects/33/37809b6590243446054125c7723061a3eb01c1": "bd43d9bdebe597e56e1e49659db7ff46",
".git/objects/34/bf82606fa8168e1b274326184c4c2209f901d3": "ab0399ac039cd23eaeb7eae928734a54",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/45/9e5ea925eb9271004917320e338bb7a9d94545": "9f6659a7af724a5bc42e1909547864d3",
".git/objects/4d/99da0f9b33462c8d0bbddeefb14c61b3808a72": "6ce54b24a2a9cd4c8463b1ddc5dc2599",
".git/objects/4e/168a21c088cddb2869ff7bae873b08b845b4cf": "69eecb42a8fa7b3f39329e77c7c0f22d",
".git/objects/51/156a806511999b64f05ec41cbdd9f0976356f3": "154ca8644fd6b33200894b42e3560d41",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/60/9e39e114a104486d80fe787cf40dacc2575e31": "ce38b830ceee4a81c195fdb2e364c65d",
".git/objects/61/1b356b54c7cc87a8f7e8e072df8f92eba3049a": "67363f36e660cb20e8ad1c43d1ab8978",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6e/16339a45c83e0ae3cd42cf100a8eb64521dac5": "b3f3238b1b21db777caee2645b68dd02",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/72/5feeab5275ff78ed636490054f06227c75890c": "57a20faacfb118d9025c4da020100a48",
".git/objects/72/793fa578e2b0713a84dfeacff381353efb30fd": "8a080106f14441a89f8ca6f64fd766df",
".git/objects/81/1369da37a40335c66504fc0d373a489d527046": "e2431a03e3464ae396334049ae32c1ca",
".git/objects/82/559963f776ef68a5b0bc5c948fe76ed35c1971": "1c215137d7e51399cfe6bcca90dab019",
".git/objects/82/eb8547df69bbd239b5e2101e2c93e1e5f95552": "ccd6a1427774c9e701d4e17b1455e481",
".git/objects/88/2491fd1c7579cb6f61d55295228e42cdd3bc72": "a0e0c79e72e95961da108cacdc5909c6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/c100d20c9a7f92a2f874fdc4b36a227ed36e7a": "6991609a706e607827de4d2ec9d208f3",
".git/objects/91/2261d7cd1de7fde407624832e423024848e675": "e28ffb16091623db8230775e46ac92b8",
".git/objects/9e/e0970bd6db6372abbbf2520ddb9cbdba5c775c": "bc0240b35f42e2b18d8fab771de9dd46",
".git/objects/a2/557ef1cae572ce27eef76084e7faebfc821110": "1f7f6635698c67bcac4f5494d3673a1a",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/af/f6df260c16728b3b6a17cc80d868c3eab34c05": "26b6574dd151ae0f05acee0e0b9f3ac6",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b6/dc4534f36d3af9e515e1d412aacc586fb1b4de": "7ef6e0fe255ea734a809e5965baa8fcf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c49798d987a55aa7a5611c4bc6635bc03b2ba1": "70097fb361f4943b82de5c9e14490525",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/b1741923c365fb37cf25b197bc67d081a00ecf": "473e376d83569ea3ac4c5a3324918515",
".git/objects/c1/ba1e468fbfdafc6b8a96682b27ccfb9d812620": "c6f1a611250dc9103cb33dd5b9ad89a4",
".git/objects/c2/4abf0fcc42eee5d91ecc34a9e897960c000a94": "1cc4c86781ae2a524aeebf880648a555",
".git/objects/cb/f44db93188aa3f540453461f19b1f355e8f7f8": "f066f0813d8c013a38687ef90bc43207",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/5f127f1e7416f7b3a2c6e77e83f898c157e732": "f827cd9e9ed172e420b90fc19ec0ff55",
".git/objects/df/c7e2fc59dfbfaf577dc2777f6bb910a6d04d1f": "1a3069e2a129bcd83854f2d53efd65b2",
".git/objects/e3/b6330d9b2dd63048253a6c0e271b939bfd98c8": "fb4bf8390e94584543ef6e6bf13e70e9",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/ddc83415f34cb2ca66704126323cca45d43981": "b656859c40b233f704bed382b7882445",
".git/objects/f3/72d2d3cf2ac5ab12b65900f90e9d2c776c67b4": "491c6ed57f5cbcd0a472a02ec321fa70",
".git/objects/ff/f7a4cb508f4b2fe1ae8177159ba363c40dc586": "219e4a1c4fd70022f6c87f14c314f049",
".git/ORIG_HEAD": "7416ba5be9dbbd2820bc611534491d41",
".git/refs/heads/main": "7416ba5be9dbbd2820bc611534491d41",
".git/refs/remotes/origin/main": "7416ba5be9dbbd2820bc611534491d41",
"assets/AssetManifest.bin": "60d6b63f2e6460178caa88d73446b40b",
"assets/AssetManifest.json": "6faddadb882b32c7fa9b80e9c6b6b51c",
"assets/FontManifest.json": "c90938742f7b5d9602c5f365382957b7",
"assets/fonts/MaterialIcons-Regular.otf": "449007e6b5d67da3376f54a08ac0837a",
"assets/lib/app/data/projects-data/data_json.json": "bd4a21c2d045ab333a73f5151b89e251",
"assets/lib/app/ui/atoms/fonts/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/lib/app/ui/atoms/fonts/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/lib/app/ui/atoms/fonts/Montserrat-SemiBold.ttf": "fb428a00b04d4e93deb4d7180814848b",
"assets/lib/app/ui/atoms/icons/pro_icons/fonts/pro_icons.ttf": "cd8c24628788e313561684f1d5c232f8",
"assets/lib/app/ui/images/png/hamburger.png": "f6dfafbce130af320e6a4dc9688c87a1",
"assets/lib/app/ui/images/png/tedera_logo.png": "cb57b20835ba2c5b1f399470757776f2",
"assets/NOTICES": "1d1fd771de4f175d806f1fa4aa075c34",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "38f21f8977245dd8b1724a5511f073e0",
"/": "38f21f8977245dd8b1724a5511f073e0",
"main.dart.js": "206eecdc7f99d285272aef06a1916f32",
"manifest.json": "9be06c8d1137dd666605fe493cd2e36f",
"version.json": "f409dc5e508cce71fa4f05f7da14ae4f"};
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
