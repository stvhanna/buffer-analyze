import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import styled from 'styled-components';
import Cover from './index';

const Card = styled.section`
  width: 880px;
  margin: 20px auto;
  background: #FFFFFF;
  border: 1px solid #E2E8ED;
  box-shadow: 0px 0px 10px rgba(48, 71, 89, 0.05);
  border-radius: 5px;
  padding: 4.5rem 4rem;
`;

const name = 'Weekly Sync Report';
const description = 'Weekly report of all the social account of Buffer. We only use organic posts in this report. t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';

const dateRange = {
  startDate: '02/20/2018',
  endDate: '02/25/2018',
};

storiesOf('Cover')
  .addDecorator(checkA11y)
  .add('renders a cover without a logo', () => (
    <Card>
      <Cover
        name={name}
        description={description}
        dateRange={dateRange}
      />
    </Card>
  ))
  .add('renders a cover with a logo', () => (
    <Card>
      <Cover
        name={name}
        dateRange={dateRange}
        logoUrl={'https://buffer-analyze.s3.amazonaws.com/report-logos/img_5afc8d8f209ec.jpg'}
      />
    </Card>
  ));
