import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ContextualCompare from './index';

storiesOf('ContextualCompare')
  .addDecorator(checkA11y)
  .add('Should render the Contextul Chart', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ContextualCompare
        dailyData={[
          'foo',
          'bar',
        ]}
      />
    </div>
  ))
  .add('should render a loading state', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ContextualCompare
        dailyData={[]}
        loading
      />
    </div>
  ))
  .add('should render a "no data" state', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ContextualCompare
        dailyData={[]}
      />
    </div>
  ));
