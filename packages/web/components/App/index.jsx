import React from 'react';
import { Route, Switch } from 'react-router';
import AppSidebar from '@bufferapp/app-sidebar';
import DefaultPage from '../DefaultPage';
import ReportsPage from '../ReportsPage';
import ReportsList from '../ReportsList';
import ReportExport from '../ReportExport';
import SingleProfilePage from '../SingleProfilePage';
import ComparisonsPage from '../ComparisonsPage';

const appStyle = {
  display: 'flex',
  height: '100vh',
};

const contentStyle = {
  flexGrow: 1,
  height: '100vh',
};

const App = () =>
  <div style={appStyle}>
    <AppSidebar activeProduct="analyze" />
    <div style={contentStyle}>
      <Switch>
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
        <Route
          path="/:tabId/:id?"
          component={SingleProfilePage}
        />
        <Route component={DefaultPage} />
      </Switch>
    </div>
  </div>
;

export default () =>
  <Switch>
    <Route
      path="/export/reports/:id"
      component={ReportExport}
    />
    <Route component={App} />
  </Switch>;
