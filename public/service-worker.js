importScripts("/precache-manifest.9c336ae469222ff2559388aafa5e7a57.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");


if (workbox) {
    console.log(`Workbox is loaded`);
    workbox.precaching.precacheAndRoute(self.__precacheManifest);




    workbox.routing.registerRoute(
      '/categories',
      new workbox.strategies.NetworkFirst({
      cacheName: 'data-cache',
      }),
      );

      workbox.routing.registerRoute(
        new RegExp('/img/categories/*.png'),
        new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'images-categories-cache',
        }),
        );


        workbox.routing.registerRoute(
          new RegExp('/sounds/*.mp3'),
          new workbox.strategies.StaleWhileRevalidate({
          cacheName: 'sounds-categories-cache',
          }),
          );

    } else {
    console.log(`Workbox didn't load`);
    }
    
    // workbox.core.setCacheNameDetails({prefix: "headsup"});
    
    // self.addEventListener('message', (event) => {
    //   if (event.data && event.data.type === 'SKIP_WAITING') {
    //     self.skipWaiting();
    //   }
    // });



