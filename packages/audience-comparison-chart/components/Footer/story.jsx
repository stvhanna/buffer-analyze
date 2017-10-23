import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import Footer from './index';

const metric = {
  color: '#fda3f3',
  diff: 50,
  label: 'Fans',
  value: 200,
};

storiesOf('Footer')
  .addDecorator(checkA11y)
  .add('should render the footer for audience comparison chart', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <Footer
        metric={metric}
      />
    </div>
  ));
