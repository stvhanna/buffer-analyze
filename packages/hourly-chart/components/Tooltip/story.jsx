import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import moment from 'moment';
import Tooltip from './index';

storiesOf('Tooltip', module)
  .addDecorator(checkA11y)
  .add('no updates', () => (
    <Tooltip
      points={[{
        key: moment().startOf('day').valueOf(),
        point: {
          totalUpdates: 0,
        },
        series: {
          name: 'Clicks',
        },
      }]}
    />
  ))
  .add('1 update', () => (
    <Tooltip
      points={[{
        key: moment().startOf('day').valueOf(),
        point: {
          totalUpdates: 1,
        },
        series: {
          name: 'Clicks',
        },
      }]}
    />
  ))
  .add('should render', () => (
    <Tooltip
      points={[{
        key: moment().startOf('day').valueOf(),
        point: {
          totalUpdates: 10,
        },
        series: {
          name: 'Clicks',
        },
      }]}
    />
  ))
  .add('two metrics', () => (
    <Tooltip
      points={[{
        key: moment().startOf('day').valueOf(),
        point: {
          totalUpdates: 10,
        },
        series: {
          name: 'Clicks',
        },
      }, {
        key: moment().startOf('day').valueOf(),
        point: {
          totalUpdates: 10,
        },
        series: {
          name: 'Impressions',
        },
      }]}
    />
  ));
