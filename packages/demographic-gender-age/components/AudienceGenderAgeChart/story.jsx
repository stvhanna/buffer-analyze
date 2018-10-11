import React from 'react';
import { storiesOf } from '@storybook/react';
import { ReportsStore } from '@bufferapp/analyze-decorators';
import { checkA11y } from 'storybook-addon-a11y';
import AudienceGenderAgeChart from './index';

storiesOf('AudienceGenderAgeChart')
  .addDecorator(checkA11y)
  .addDecorator(ReportsStore)
  .add('should render', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <AudienceGenderAgeChart
        selectedGroup="page_fans"
        metrics={[
          {
            key: 'page_fans',
            metrics: [
              {
                key: 'gender_age',
                values: [{ label: 'F.30-45' }],
              },
              {
                key: 'city',
                values: [{ label: 'Arrakeen, Arrakis' }],
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
      <AudienceGenderAgeChart
        selectedGroup="page_fans"
        metrics={[
          {
            key: 'page_fans',
            label: 'Page fans',
            metrics: [
              {
                key: 'gender_age',
                values: [{ label: 'F.30-45' }],
              },
              {
                key: 'city',
                values: [{ label: 'Arrakeen, Arrakis' }],
              },
            ],
          },
          {
            key: 'post_impressions',
            label: 'Post impressions',
            metrics: [
              {
                key: 'gender_age',
                values: [{ label: 'F.30-45' }],
              },
              {
                key: 'city',
                values: [{ label: 'Arrakeen, Arrakis' }],
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
      <AudienceGenderAgeChart loading metrics={[]} />
    </div>
  ))
  .add('should render a "no data" state', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <AudienceGenderAgeChart metrics={[]} />
    </div>
  ));
