import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  action,
} from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import TabNavigation from './index';

storiesOf('Tabs')
  .addDecorator(checkA11y)
  .add('a story', () => (
    <TabNavigation
      selectedTabId={'posts'}
      onTabClick={action('tab-click')}
    />
  ));

