import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import PostsHeader from './index';

import mockMetrics from './components/TopPostsDropdown/mocks/metrics';

storiesOf('PostsHeader', module)
  .addDecorator(checkA11y)
  .add('should render top posts header', () => (
    <div>
      <PostsHeader
        metrics={mockMetrics}
        selectedMetric={mockMetrics[3]}
        isDescendingSelected
        handlePostsCountClick={() => {}}
        handlePostsSortClick={() => {}}
        activePostsCount={10}
        isDropdownOpen={false}
        selectMetric={() => {}}
        toggleDropdown={() => {}}
      />
    </div>
  ));
