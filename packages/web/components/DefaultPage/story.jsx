import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import createStore, { history } from '@bufferapp/analyze-store';
import { Provider } from 'react-redux';
import {
  ConnectedRouter as Router,
} from 'react-router-redux';

import DefaultPage from './index';


storiesOf('DefaultPage', module)
  .addDecorator(checkA11y)
  .addDecorator(getStory =>
    (<Provider store={createStore()}>
      <Router history={history}>
        {getStory()}
      </Router>
    </Provider>),
  )
  .add('should render the dashboard page', () => (
    <DefaultPage
      location={{
        pathname: '/',
      }}
    />
  ));

