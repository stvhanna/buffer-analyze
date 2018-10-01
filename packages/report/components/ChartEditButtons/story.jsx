import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action } from '@storybook/addon-actions';

import ChartEditButtons from './index';

storiesOf('ChartEditButtons', module)
  .addDecorator(checkA11y)
  .add('they render', () => (
    <ChartEditButtons
      moveUp={action('up')}
      moveDown={action('down')}
      deleteChart={action('deleteChart')}
      id={'chart_1123'}
    />
  ))
  .add('move up is disabled if chart is first on list', () => (
    <ChartEditButtons
      moveUp={action('up')}
      moveDown={action('down')}
      deleteChart={action('deleteChart')}
      id={'chart_1123'}
      first
    />
  ))
  .add('move down is disabled if chart is last on list', () => (
    <ChartEditButtons
      moveUp={action('up')}
      moveDown={action('down')}
      deleteChart={action('deleteChart')}
      id={'chart_1123'}
      last
    />
  ));
