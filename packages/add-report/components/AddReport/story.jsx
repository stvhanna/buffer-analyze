import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import AddReport from './index';

const Spacer = styled.span`
  display: inline-block;
  width: 660px;
  height: 60px;
`;

storiesOf('AddReport')
  .addDecorator(checkA11y)
  .add('unopened', () => (
    <div>
      <Spacer />
      <AddReport
        translations={{
          addReport: 'Add to Report',
        }}
        toggleMenu={action('open menu')}
      />
    </div>
  ))
  .add('opened', () => (
    <div>
      <Spacer />
      <AddReport
        translations={{
          addReport: 'Add to Report',
        }}
        toggleMenu={action('close menu')}
        open
      />
    </div>
  ));
