import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as loginReducer } from '@bufferapp/login';
import { reducer as i18nReducer } from '@bufferapp/analyze-i18n';
import { reducer as appSidebarReducer } from '@bufferapp/app-sidebar';
import { reducer as asyncDataFetchReducer } from '@bufferapp/async-data-fetch';
import { reducer as navSidebarReducer } from '@bufferapp/nav-sidebar';

export default combineReducers({
  login: loginReducer,
  router: routerReducer,
  appSidebar: appSidebarReducer,
  asyncDataFetch: asyncDataFetchReducer,
  i18n: i18nReducer,
  navSidebar: navSidebarReducer,
});
