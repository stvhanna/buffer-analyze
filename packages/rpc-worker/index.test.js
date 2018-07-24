import worker, {
  isInternalRequest,
  isRPCRequest,
  setCacheNamespace,
  setHandlingStrategies,
  getHandlingStrategyFromRpcName,
  STRATEGIES,
} from './index';

const makeServiceWorkerEnv = require('service-worker-mock');
const makeFetchMock = require('service-worker-mock/fetch');

describe('RPC Service Worker', () => {
  beforeEach(() => {
    Object.assign(
      global,
      makeServiceWorkerEnv(),
      makeFetchMock(),
    );
    jest.resetModules();
  });

  test('should export the cofiguration method', () => {
    expect(worker).toBeDefined();
  });

  test('should handle installation', async () => {
    worker('0.1');

    expect(self.listeners.install).toBeDefined();
    await self.trigger('install');
    expect(self.snapshot().caches['RPC-CACHE-0.1']).toBeDefined();
  });

  test('should invalidate previous cache on version upgrade', async () => {
    worker('0.1');

    expect(self.listeners.activate).toBeDefined();
    await self.caches.open('OLD_CACHE');
    expect(self.snapshot().caches.OLD_CACHE).toBeDefined();
    await self.trigger('activate');
    expect(self.snapshot().caches.OLD_CACHE).toBeUndefined();
  });

  test('should subscribe to fetch events', () => {
    worker('0.1');

    expect(self.listeners.fetch).toBeDefined();
  });
});

describe('RPC Workker internal methods', () => {
  test('setting cache namespace should throw if no version is defined', () => {
    expect(setCacheNamespace).toThrowError(/missing version string/);
  });

  test('should setup cache namespace', () => {
    setCacheNamespace('0.1');
    expect(global.currentCache).toBe('RPC-CACHE-0.1');
  });

  test('should match internal requests', () => {
    const externalRequest = new Request('http://foo.ninja');
    expect(isInternalRequest(externalRequest)).toBeFalsy();

    const internalRequest = new Request('https://analyze.buffer.com/');
    expect(isInternalRequest(internalRequest)).toBeTruthy();
  });

  test('should match rpc requests', () => {
    const request = new Request('https://analyze.buffer.com/');
    expect(isRPCRequest(request)).toBeFalsy();

    const rpcRequest = new Request('https://analyze.buffer.com/rpc');
    expect(isRPCRequest(rpcRequest)).toBeTruthy();
  });

  test('should return matching handling strategy', () => {
    function fooStrategy() {}

    setHandlingStrategies([
      {
        name: 'foo',
        strategy: fooStrategy,
      },
      {
        name: 'bar',
        strategy: STRATEGIES.cacheFirst,
      },
    ]);

    expect(getHandlingStrategyFromRpcName('foo')).toBe(fooStrategy);
    expect(getHandlingStrategyFromRpcName('bar')).toBe(STRATEGIES.cacheFirst);
  });
});
