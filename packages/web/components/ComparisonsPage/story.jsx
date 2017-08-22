import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import createStore, { history } from '@bufferapp/store';
import { Provider } from 'react-redux';
import {
  ConnectedRouter as Router,
} from 'react-router-redux';

import ComparisonsPage from './index';


storiesOf('ComparisonsPage')
  .addDecorator(checkA11y)
  .addDecorator(getStory =>
    (<Provider store={createStore()}>
      <Router history={history}>
        {getStory()}
      </Router>
    </Provider>),
  )
  .add('should render comparisons page', () => (
    <ComparisonsPage
      location={{
        pathname: '/insights',
      }}
    />
  ));
