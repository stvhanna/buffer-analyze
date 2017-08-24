import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { middleware as loginMiddleware } from '@bufferapp/login';
import { middleware as appSidebarMiddleware } from '@bufferapp/app-sidebar';
import { middleware as i18nMiddleware } from '@bufferapp/analyze-i18n';
import { middleware as asyncDataFetchMiddleware } from '@bufferapp/async-data-fetch';
import { middleware as navSidebarMiddleware } from '@bufferapp/nav-sidebar';
import { middleware as performanceMiddleware } from '@bufferapp/performance-tracking';
import { middleware as summaryMiddleware } from '@bufferapp/summary-table';
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
        loginMiddleware,
        i18nMiddleware,
        appSidebarMiddleware,
        navSidebarMiddleware,
        performanceMiddleware,
        summaryMiddleware,
      ),
    ),
  );
};

export default configureStore;
