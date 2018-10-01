import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ProfilesTable from './index';
import profiles from '../../mocks/profiles';

const profileMetrics = {
  engagement_rate: {
    diff: -42,
    value: 3.6,
  },
  followers: {
    diff: 0,
    value: 42,
  },
  reach: {
    diff: 45,
    value: 63795,
  },
};

const metrics = {};
profiles.forEach((profile) => {
  metrics[profile.id] = profileMetrics;
});

storiesOf('ProfilesTable', module)
  .addDecorator(checkA11y)
  .add('should render the profiles overview', () => (
    <div
      style={{
        width: '920px',
      }}
    >
      <ProfilesTable
        profiles={profiles}
        metrics={metrics}
      />
    </div>
  ))
  .add('should render the profiles overview without metrics', () => (
    <div
      style={{
        width: '920px',
      }}
    >
      <ProfilesTable
        profiles={profiles}
      />
    </div>
  ))
  .add('should render a loading state', () => (
    <div
      style={{
        width: '920px',
      }}
    >
      <ProfilesTable />
    </div>
  ));
