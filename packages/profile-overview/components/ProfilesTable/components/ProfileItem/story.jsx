import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ProfileItem from './index';

const profile = {
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/503a5c8ffc99f72a7f00002e/f49c2ff693f1c307af5e1b3d84e581ca.png',
  username: 'Buffer',
  id: '1',
  service: 'twitter',
};

const metrics = {
  engagement_rate: {
    diff: -42,
    value: 416,
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

const metricKeys = [
  'engagement',
  'followers',
  'reach',
];

storiesOf('ProfileItem')
  .addDecorator(checkA11y)
  .add('should render a profiles item', () => (
    <div
      style={{
        width: '920px',
      }}
    >
      <table>
        <tbody>
          <ProfileItem
            profile={profile}
            metrics={metrics}
            metricKeys={metricKeys}
          />
        </tbody>
      </table>
    </div>
  ))
  .add('should render a profiles item without metrics', () => (
    <div
      style={{
        width: '920px',
      }}
    >
      <table>
        <tbody>
          <ProfileItem
            profile={profile}
            metricKeys={metricKeys}
          />
        </tbody>
      </table>
    </div>
  ));
