import React from 'react';
import { Route, Switch } from 'react-router';
import AppSidebar from '@bufferapp/app-sidebar';
import DefaultPage from '../DefaultPage';
import ReportsPage from '../ReportsPage';
import ReportsList from '../ReportsList';
import InsightsPage from '../InsightsPage';
import ComparisonsPage from '../ComparisonsPage';

const appStyle = {
  display: 'flex',
  height: '100%',
};

const contentStyle = {
  flexGrow: 1,
};

export default () =>
  (<div style={appStyle}>
    <AppSidebar activeProduct="analyze" />
    <div style={contentStyle}>
      <Switch>
        <Route
          path="/insights/:service/:id/:tabId"
          component={InsightsPage}
        />
        <Route
          path="/comparisons"
          component={ComparisonsPage}
        />
        <Route
          path="/reports/:id"
          component={ReportsPage}
        />
        <Route
          path="/reports"
          component={ReportsList}
        />
        <Route component={DefaultPage} />
      </Switch>
    </div>
  </div>);
