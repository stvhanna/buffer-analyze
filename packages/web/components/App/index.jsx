import React from 'react';
import { Route, Switch } from 'react-router';
import AppSidebar from '@bufferapp/app-sidebar';
import DefaultPage from '../DefaultPage';
import ReportsPage from '../ReportsPage';

const appStyle = {
  display: 'flex',
  height: '100%',
};

const contentStyle = {
  flexGrow: 1,
};

export default () =>
  <div style={appStyle}>
    <AppSidebar activeProduct="analyze" />
    <div style={contentStyle}>
      <Switch>
        <Route
          path="/reports"
          component={ReportsPage}
        />
        <Route component={DefaultPage} />
      </Switch>
    </div>
  </div>;
