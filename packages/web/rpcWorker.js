import rpcWorker, { STRATEGIES } from '@bufferapp/rpc-worker';
import moment from 'moment-timezone';

const WORKER_VERSION = '0.1.0';
// We are updating the service worker version once a day
// this is useful to prevent cache pollution.
const dayString = moment().format('YYYY-MM-DD');

rpcWorker(`${WORKER_VERSION}-${dayString}`, [
  { name: 'environment', strategy: STRATEGIES.cacheFirst },
  { name: 'user', strategy: STRATEGIES.cacheFirst },
  { name: 'profiles', strategy: STRATEGIES.cacheFirst },
  { name: 'profiles_overview', strategy: STRATEGIES.cacheFirst },
  { name: 'analytics_start_date', strategy: STRATEGIES.cacheFirst },
  { name: 'audience', strategy: STRATEGIES.cacheFirst },
  { name: 'average', strategy: STRATEGIES.cacheFirst },
  { name: 'compare', strategy: STRATEGIES.cacheFirst },
  { name: 'comparison', strategy: STRATEGIES.cacheFirst },
  { name: 'contextual', strategy: STRATEGIES.cacheFirst },
  { name: 'environment', strategy: STRATEGIES.cacheFirst },
  { name: 'followers', strategy: STRATEGIES.cacheFirst },
  { name: 'get_account_details', strategy: STRATEGIES.cacheFirst },
  { name: 'hashtags', strategy: STRATEGIES.cacheFirst },
  { name: 'hourly', strategy: STRATEGIES.cacheFirst },
  { name: 'posts', strategy: STRATEGIES.cacheFirst },
  { name: 'posts_summary', strategy: STRATEGIES.cacheFirst },
  { name: 'profiles', strategy: STRATEGIES.cacheFirst },
  { name: 'profiles_overview', strategy: STRATEGIES.cacheFirst },
  { name: 'summary', strategy: STRATEGIES.cacheFirst },
  { name: 'top_posts', strategy: STRATEGIES.cacheFirst },
  { name: 'user', strategy: STRATEGIES.cacheFirst },
]);

