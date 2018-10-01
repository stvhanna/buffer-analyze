import React from 'react';
import moment from 'moment-timezone';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import createStore, { history } from '@bufferapp/analyze-store';
import { actions } from '@bufferapp/analyze-date-picker';
import { Provider } from 'react-redux';
import {
  ConnectedRouter as Router,
} from 'react-router-redux';

import ReportsPage from './index';

storiesOf('ReportsPage', module)
  .addDecorator(checkA11y)
  .addDecorator((getStory) => {
    const store = createStore({
      router: {
        location: {
          pathname: '',
        },
      },
    });
    store.dispatch(
      actions.setDateRange(
        moment('2017-11-05')
        .subtract('7', 'days')
        .tz('etc/UTC')
        .unix(),
        moment('2017-11-05')
        .subtract('1', 'days')
        .tz('etc/UTC')
        .unix(),
      ),
    );
    return (
      <Provider store={store}>
        <Router history={history}>
          {getStory()}
        </Router>
      </Provider>
    );
  })
  .add('should render reports page', () => (
    <ReportsPage
      location={{
        pathname: '/reports',
      }}
    />
  ));
