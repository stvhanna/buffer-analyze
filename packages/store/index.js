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
import { middleware as performanceMiddleware } from '@bufferapp/performance-tracking';
import { middleware as summaryMiddleware } from '@bufferapp/summary-table';
import { middleware as profileHeaderMiddleware } from '@bufferapp/profile-header';
import { middleware as datePickerMiddleware } from '@bufferapp/analyze-date-picker';
import { middleware as profileLoaderMiddleware } from '@bufferapp/profile-loader';
import { middleware as postsSummaryMiddleware } from '@bufferapp/posts-summary-table';
import { middleware as averageMiddleware } from '@bufferapp/average-table';
import { middleware as exportPickerMiddleware } from '@bufferapp/analyze-export-picker';
import { middleware as exportToPNGMiddleware } from '@bufferapp/analyze-png-export';
import { middleware as exportToCSVMiddleware } from '@bufferapp/analyze-csv-export';
import { middleware as postsMiddleware } from '@bufferapp/posts-table';
import { middleware as compareChartMiddleware } from '@bufferapp/compare-chart';
import { middleware as audienceChartMiddleware } from '@bufferapp/audience-chart';
import { middleware as addReportMiddleware } from '@bufferapp/add-report';
import { middleware as reportListMiddleware } from '@bufferapp/report-list';
import { middleware as contextualCompareMiddleware } from '@bufferapp/contextual-compare';
import { middleware as profileSelectorMiddleware } from '@bufferapp/analyze-profile-selector';
import { middleware as reportMiddleware } from '@bufferapp/report';
import { middleware as comparisonMiddleware } from '@bufferapp/comparison-chart';
import { middleware as hourlyMiddleware } from '@bufferapp/hourly-chart';
import { middleware as environmentMiddleware } from '@bufferapp/environment';
import { middleware as unauthorizedRedirectMiddleware } from '@bufferapp/unauthorized-redirect';
import { middleware as exportToPDFMiddleware } from '@bufferapp/pdf-export';
import { middleware as earlyAccessMiddleware } from '@bufferapp/analyze-early-access';
import { middleware as profilesOverviewMiddleware } from '@bufferapp/analyze-profiles-overview';
import { middleware as accountMiddleware } from '@bufferapp/analyze-account';
import { createMiddleware } from '@bufferapp/buffermetrics/redux';
import initMiddleware from './initMiddleware';

import reducers from './reducers';

export const history = createHistory();

const configureStore = (initialstate) => {
  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

  const buffermetricsMiddleware = createMiddleware({
    application: 'ANALYZE',
    batchSize: 10,
    throttle: 1000,
    metadata: state => ({
      userId: state.appSidebar.user.id,
      profileId: state.profiles.selectedProfileId,
    }),
  });

  return createStore(
    reducers,
    initialstate,
    composeEnhancers(
      applyMiddleware(
        earlyAccessMiddleware,
        initMiddleware,
        routerMiddleware(history),
        asyncDataFetchMiddleware,
        i18nMiddleware,
        appSidebarMiddleware,
        performanceMiddleware,
        summaryMiddleware,
        profileHeaderMiddleware,
        datePickerMiddleware,
        profileLoaderMiddleware,
        profilesOverviewMiddleware,
        postsSummaryMiddleware,
        averageMiddleware,
        postsMiddleware,
        compareChartMiddleware,
        audienceChartMiddleware,
        contextualCompareMiddleware,
        exportToPNGMiddleware,
        addReportMiddleware,
        reportListMiddleware,
        exportToCSVMiddleware,
        profileSelectorMiddleware,
        reportMiddleware,
        exportPickerMiddleware,
        comparisonMiddleware,
        hourlyMiddleware,
        environmentMiddleware,
        unauthorizedRedirectMiddleware,
        accountMiddleware,
        exportToPDFMiddleware,
        buffermetricsMiddleware,
      ),
    ),
  );
};

export default configureStore;
