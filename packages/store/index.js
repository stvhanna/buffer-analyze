import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { middleware as appSidebarMiddleware } from '@bufferapp/app-sidebar';
import { middleware as i18nMiddleware } from '@bufferapp/analyze-i18n';
import { middleware as asyncDataFetchMiddleware } from '@bufferapp/async-data-fetch';
import { middleware as navSidebarMiddleware } from '@bufferapp/nav-sidebar';
import { middleware as performanceMiddleware } from '@bufferapp/performance-tracking';
import { middleware as summaryMiddleware } from '@bufferapp/summary-table';
import { middleware as profileHeaderMiddleware } from '@bufferapp/profile-header';
import { middleware as datePickerMiddleware } from '@bufferapp/analyze-date-picker';
import { middleware as profileLoaderMiddleware } from '@bufferapp/profile-loader';
import { middleware as postsSummaryMiddleware } from '@bufferapp/posts-summary-table';
import { middleware as averageMiddleware } from '@bufferapp/average-table';
import { middleware as exportToPNGMiddleware } from '@bufferapp/analyze-png-export';
import { middleware as topPostsMiddleware } from '@bufferapp/top-posts-table';
import { middleware as compareChartMiddleware } from '@bufferapp/compare-chart';
import reducers from './reducers';

export const history = createHistory();

const configureStore = (initialstate) => {
  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

  return createStore(
    reducers,
    initialstate,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        asyncDataFetchMiddleware,
        i18nMiddleware,
        appSidebarMiddleware,
        navSidebarMiddleware,
        performanceMiddleware,
        summaryMiddleware,
        profileHeaderMiddleware,
        datePickerMiddleware,
        profileLoaderMiddleware,
        postsSummaryMiddleware,
        averageMiddleware,
        topPostsMiddleware,
        compareChartMiddleware,
        exportToPNGMiddleware,
      ),
    ),
  );
};

export default configureStore;
