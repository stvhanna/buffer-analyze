import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as loginReducer } from '@bufferapp/login';
import { reducer as i18nReducer } from '@bufferapp/analyze-i18n';
import { reducer as appSidebarReducer } from '@bufferapp/app-sidebar';
import { reducer as asyncDataFetchReducer } from '@bufferapp/async-data-fetch';
import { reducer as navSidebarReducer } from '@bufferapp/nav-sidebar';
import { reducer as summaryReducer } from '@bufferapp/summary-table';
import { reducer as profileReducer } from '@bufferapp/analyze-profile-selector';
import { reducer as profileHeaderReducer } from '@bufferapp/profile-header';
import { reducer as datePickerReducer } from '@bufferapp/analyze-date-picker';
import { reducer as profileLoaderReducer } from '@bufferapp/profile-loader';
import { reducer as postsSummaryReducer } from '@bufferapp/posts-summary-table';

export default combineReducers({
  login: loginReducer,
  router: routerReducer,
  appSidebar: appSidebarReducer,
  asyncDataFetch: asyncDataFetchReducer,
  i18n: i18nReducer,
  navSidebar: navSidebarReducer,
  summary: summaryReducer,
  profiles: profileReducer,
  profileHeader: profileHeaderReducer,
  date: datePickerReducer,
  profileLoader: profileLoaderReducer,
  postsSummary: postsSummaryReducer
});
