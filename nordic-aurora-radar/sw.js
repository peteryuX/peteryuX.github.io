self.addEventListener("install", function () {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    (async function () {
      try {
        var keys = await caches.keys();
        await Promise.all(
          keys.map(function (key) {
            return caches.delete(key);
          })
        );
      } catch (_) {}

      var windowClients = [];
      try {
        windowClients = await self.clients.matchAll({
          type: "window",
          includeUncontrolled: true,
        });
      } catch (_) {}

      try {
        await self.registration.unregister();
      } catch (_) {}

      await Promise.all(
        windowClients.map(function (client) {
          try {
            var url = new URL(client.url);
            if (
              url.pathname === "/nordic-aurora-radar" ||
              url.pathname.indexOf("/nordic-aurora-radar/") === 0
            ) {
              var dest =
                "https://ohwhatif.com" + url.pathname + url.search + url.hash;
              return client.navigate(dest).catch(function () {});
            }
          } catch (_) {}
          return Promise.resolve();
        })
      );
    })()
  );
});
