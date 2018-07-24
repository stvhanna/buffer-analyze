function respondWithCacheAndUpdateCache(
  request,
  cachableRequest,
  cachedResponse,
  resolve,
  reject,
) {
  resolve(cachedResponse);
  return caches.open(self.currentCache)
    .then(
      cache => fetch(request.clone())
        .then(
          response => cache.put(cachableRequest, response.clone()),
        ),
    )
    .catch(error => reject(error));
}

function respondWithFetchAndCache(
  request,
  cachableRequest,
  resolve,
  reject,
) {
  return caches.open(self.currentCache)
    .then(
      cache => fetch(request)
        .then(
          response => cache.put(cachableRequest, response.clone())
            .then(
              () => resolve(response),
            ),
        ),
    )
    .catch(error => reject(error));
}

export const STRATEGIES = {
  cacheFirst(request) {
    return new Promise((resolve, reject) => {
      request.clone().json()
        .then((params) => {
          let cachableRequest;
          if (request.method === 'POST') {
            // This is a bit hacky but we can't direcly cache POST requests
            const paramsAsQuery = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
            cachableRequest = new Request(`${request.url}?${paramsAsQuery}`);
          } else {
            cachableRequest = request.clone();
          }

          caches.match(cachableRequest)
            .then((cachedResponse) => {
              if (cachedResponse) {
                return respondWithCacheAndUpdateCache(
                  request,
                  cachableRequest,
                  cachedResponse,
                  resolve,
                  reject,
                );
              }

              return respondWithFetchAndCache(
                request,
                cachableRequest,
                resolve,
                reject,
              );
            });
        });
    });
  },
};

export function setCacheNamespace(version) {
  if (!version) {
    throw new Error('missing version string');
  }
  self.currentCache = `RPC-CACHE-${version}`;
}

export function isInternalRequest(request) {
  return request.url.startsWith(self.location.origin);
}

export function isRPCRequest(request) {
  return isInternalRequest(request) && request.url.endsWith('/rpc');
}

export function setHandlingStrategies(handlers) {
  self.handlers = handlers;
}

export function getHandlingStrategyFromRpcName(rpcName) {
  const handler = self.handlers.find(({ name }) => name === rpcName);
  return handler ? handler.strategy : null;
}

function handleInstall(event) {
  event.waitUntil(
    caches.open(self.currentCache)
      .then(self.skipWaiting()),
  );
}

function handleActivate(event) {
  event.waitUntil(
    caches.keys()
      .then((cacheKeys) => {
        const oldCacheKeys = cacheKeys.filter(key => (!key.includes(self.currentCache)));
        const cachesToDelete = oldCacheKeys.map(oldKey => caches.delete(oldKey));
        return Promise.all(cachesToDelete);
      })
      .then(() => self.clients.claim()),
  );
}

function handleFetch(event) {
  if (!isRPCRequest(event.request)) {
    return null;
  }

  event.respondWith(
    event.request.clone().json()
      .then((req) => {
        const rpcName = req.name;
        const handlingStrategy = getHandlingStrategyFromRpcName(rpcName);
        if (handlingStrategy) {
          return handlingStrategy(event.request.clone())
            .then(response => response);
        }
        return fetch(event.request);
      }),
  );
}

function init(version, handlers) {
  setCacheNamespace(version);
  setHandlingStrategies(handlers);

  self.addEventListener('install', handleInstall);
  self.addEventListener('activate', handleActivate);
  self.addEventListener('fetch', handleFetch);
}

export default init;
