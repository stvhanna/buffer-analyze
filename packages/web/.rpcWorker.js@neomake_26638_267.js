import rpcWorker, { STRATEGIES } from '@bufferapp/rpc-worker';
import moment from 'moment-timezone';

const WORKER_VERSION = '0.0.2';
// We are updating the service worker version once a day
// this is useful to prevent cache pollution.
const dayString = moment().format('YYYY-MM-DD');

rpcWorker(`${WORKER_VERSION}-${dayString}`, [
  { name: 'environment', strategy: STRATEGIES.cacheFirst },
  { name: 'user', strategy: STRATEGIES.cacheFirst },
  { name: 'profiles', strategy: STRATEGIES.cacheFirst },
  { name: 'profiles_overview', strategy: STRATEGIES.cacheFirst },
]);

