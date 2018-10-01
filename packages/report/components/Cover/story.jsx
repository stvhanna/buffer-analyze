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
const description = 'This is our performance report for our weekly sync on Thursdays. It has a focus on the last 7-day period, showing upward trends from the content we have posted.';
const logoUrl = 'https://buffer-analyze.s3.amazonaws.com/report-logos/img_5b1330ff80d92.jpg';

const dateRange = {
  startDate: '02/20/2018',
  endDate: '02/25/2018',
};

storiesOf('Cover', module)
  .addDecorator(checkA11y)
  .add('renders a cover with name and date', () => (
    <Card>
      <Cover
        name={name}
        dateRange={dateRange}
      />
    </Card>
  ))
  .add('renders a cover with name, date and description', () => (
    <Card>
      <Cover
        name={name}
        description={description}
        dateRange={dateRange}
      />
    </Card>
  ))
  .add('renders a cover with logo, name and date', () => (
    <Card>
      <Cover
        name={name}
        dateRange={dateRange}
        logoUrl={logoUrl}
      />
    </Card>
  ))
  .add('renders a cover with logo, name, date and description', () => (
    <Card>
      <Cover
        name={name}
        description={description}
        dateRange={dateRange}
        logoUrl={logoUrl}
      />
    </Card>
  ));
