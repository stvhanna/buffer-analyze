import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import Report from './index';

const report = {
  name: 'Weekly Sync Report',
  charts: [
    {
      chart_id: 'summary-table',
      profile: {
        name: 'Joel Gascoigne',
        service: 'twitter',
      },
      profile_id: '4e88a092512f7e1556000000',
      metrics: [{"value":8163,"diff":-70,"label":"Engaged Users"},{"value":298207,"diff":-34,"label":"Post Impressions"},{"value":842,"diff":-95,"label":"Reactions"},{"value":266624,"diff":-29,"label":"Post Reach"},{"value":1672,"diff":-91,"label":"Page & Post Engagements"},{"value":8503,"diff":-34,"label":"Post Clicks"},{"value":447,"diff":-6,"label":"New Fans"},{"value":2,"diff":-66,"label":"Posts"}],
    },
  ],
};

const dateRange = {
  startDate: 1496275200000,
  endDate: 1498780800000,
};

storiesOf('Report')
  .addDecorator(checkA11y)
  .add('renders a loading report', () => (
    <Report loading />
  ))
  .add('renders a report with summary table', () => (
    <Report {...report} dateRange={dateRange} />
  ));
