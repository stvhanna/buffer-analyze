import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
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
import { reducer as averageReducer } from '@bufferapp/average-table';
import { reducer as exportToPNGReducer } from '@bufferapp/analyze-png-export';
import { reducer as exportToCSVReducer } from '@bufferapp/analyze-csv-export';
import { reducer as postsReducer } from '@bufferapp/posts-table';
import { reducer as compareChartReducer } from '@bufferapp/compare-chart';
import { reducer as audienceChartReducer } from '@bufferapp/audience-chart';
import { reducer as reportListReducer } from '@bufferapp/report-list';
import { reducer as contextualCompareReducer } from '@bufferapp/contextual-compare';
import { reducer as reportReducer } from '@bufferapp/report';
import { reducer as multiProfileSelectorReducer } from '@bufferapp/multi-profile-selector';
import { reducer as exportPickerReducer } from '@bufferapp/analyze-export-picker';
import { reducer as comparisonReducer } from '@bufferapp/comparison-chart';
import { reducer as hourlyReducer } from '@bufferapp/hourly-chart';
import { reducer as environmentReducer } from '@bufferapp/environment';
import { reducer as profilesOverviewReducer } from '@bufferapp/analyze-profiles-overview';
import { reducer as accountReducer } from '@bufferapp/analyze-account';
import { reducer as hashtagsReducer } from '@bufferapp/hashtags-table';
import { reducer as demographicReducer } from '@bufferapp/demographic-store';
import { reducer as demographicOverviewReducer } from '@bufferapp/demographic-overview';

export default combineReducers({
  router: routerReducer,
  appSidebar: appSidebarReducer,
  asyncDataFetch: asyncDataFetchReducer,
  average: averageReducer,
  i18n: i18nReducer,
  navSidebar: navSidebarReducer,
  summary: summaryReducer,
  profiles: profileReducer,
  profileHeader: profileHeaderReducer,
  date: datePickerReducer,
  profileLoader: profileLoaderReducer,
  profilesOverview: profilesOverviewReducer,
  postsSummary: postsSummaryReducer,
  posts: postsReducer,
  exportPicker: exportPickerReducer,
  exportToPNG: exportToPNGReducer,
  exportToCSV: exportToCSVReducer,
  compare: compareChartReducer,
  audience: audienceChartReducer,
  reportList: reportListReducer,
  contextual: contextualCompareReducer,
  report: reportReducer,
  multiProfileSelector: multiProfileSelectorReducer,
  comparison: comparisonReducer,
  hourly: hourlyReducer,
  environment: environmentReducer,
  account: accountReducer,
  hashtags: hashtagsReducer,
  demographic: demographicReducer,
  demographicOverview: demographicOverviewReducer,
});
