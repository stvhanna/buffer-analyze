import React from 'react';
import { storiesOf } from '@storybook/react';
import { ReportsStore } from '@bufferapp/analyze-decorators';
import { checkA11y } from 'storybook-addon-a11y';
import AudienceOverviewTable from './index';

storiesOf('AudienceOverviewTable')
  .addDecorator(checkA11y)
  .addDecorator(ReportsStore)
  .add('should render', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <AudienceOverviewTable
        selectedGroup="page_fans"
        metrics={[
          {
            key: 'page_fans',
            metrics: [
              {
                key: 'gender_age',
                value: 'Female, 30-45',
              },
              {
                key: 'location',
                value: 'Arrakeen, Arrakis',
              },
            ],
          },
        ]}
      />
    </div>
  ))
  .add('should render with dropdown for multiple groups', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <AudienceOverviewTable
        selectedGroup="page_fans"
        metrics={[
          {
            key: 'page_fans',
            label: 'Page fans',
            metrics: [
              {
                key: 'gender_age',
                value: 'Female, 30-45',
              },
              {
                key: 'location',
                value: 'Arrakeen, Arrakis',
              },
            ],
          },
          {
            key: 'post_impressions',
            label: 'Post impressions',
            metrics: [
              {
                key: 'gender_age',
                value: 'Female, 30-45',
              },
              {
                key: 'location',
                value: 'Arrakeen, Arrakis',
              },
            ],
          },
        ]}
        isDropdownOpen={false}
      />
    </div>
  ))
  .add('should render a loading state', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <AudienceOverviewTable loading metrics={[]} />
    </div>
  ))
  .add('should render a "no data" state', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <AudienceOverviewTable metrics={[]} />
    </div>
  ));
