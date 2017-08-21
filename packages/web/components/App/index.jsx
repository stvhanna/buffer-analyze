import React from 'react';
import { Route, Switch } from 'react-router';
import AppSidebar from '@bufferapp/app-sidebar';
import DefaultPage from '../DefaultPage';
import ReportsPage from '../ReportsPage';
import InsightsPage from '../InsightsPage';

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
          path="/reports"
          component={ReportsPage}
        />
        <Route
          path="/insights/*"
          component={InsightsPage}
        />
        <Route component={DefaultPage} />
      </Switch>
    </div>
  </div>);
