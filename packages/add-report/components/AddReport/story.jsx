import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import AddReport from './index';

import mockReports from '../../mock/reports';

const Spacer = styled.span`
  display: inline-block;
  width: 660px;
  height: 60px;
`;

storiesOf(__dirname, module)
  .addDecorator(checkA11y)
  .add('unopened', () => (
    <div>
      <Spacer />
      <AddReport
        translations={{
          addReport: 'Add to Report',
        }}
        toggleMenu={action('open menu')}
        createReport={action('create report')}
        addToReport={action('add to report')}
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
        addReport={action('add report')}
        reports={mockReports}
        createReport={action('create report')}
        addToReport={action('add to report')}
        open
      />
    </div>
  ));
