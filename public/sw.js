console.warn("ws file is public folder");

let cacheData = "appV1";
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/static/js/src_pages_Home_js.chunk.js",
        "/static/js/src_pages_About_js.chunk.js",
        "/static/js/src_pages_Users_js.chunk.js",
        "/static/js/bundle.js",
        "/index.html",
        "/",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      console.log("cachedResponse $$$ ", cachedResponse);
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request)
        .then((networkResponse) => {
          console.log("cachedResponse no fetch $$$ ", cachedResponse);
          let responseClone = networkResponse.clone();
          if (networkResponse && networkResponse.status === 200) {
            caches.open(cacheData).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Aqui você pode fornecer uma resposta de fallback offline, se desejar
          console.log("catch offline");
          return caches.match("/index.html");
        });
    })
  );
  // }
});

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     (async () => {
//       try {
//         // Check if we are online
//         const response = await fetch(event.request);
//         const cache = await caches.open(cacheData);
//         cache.put(event.request, response.clone());
//         return response;
//       } catch (error) {
//         // Offline, use cache if available
//         const cachedResponse = await caches.match(event.request);
//         if (cachedResponse) {
//           return cachedResponse;
//         } else {
//           // Optionally, handle the error or return a fallback
//           return new Response("Offline and no cache available.", {
//             status: 404,
//             statusText: "Not Found",
//           });
//         }
//       }
//     })()
//   );
// });
