import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text, Link } from '@bufferapp/components';

import {
  geyser,
  outerSpace,
  curiousBlue,
} from '@bufferapp/components/style/color';

import {
  ProfileBadge,
  GridItem,
} from '@bufferapp/analyze-shared-components';

const ProfileRow = styled.tr`
  margin: 0;
  padding: 0;
  border-color: ${geyser};

  &:first-child > td {
    border-top: 1px dotted ${geyser};
  }

  &:last-child > td {
    border-bottom: none;
  }

  a {
    opacity: 0 !important;
    pointer-events: none !important;
    transition: opacity 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) !important;
  }

  &:hover a{
    opacity: 1 !important;
    pointer-events: all !important;
  }
`;

const ContentCell = styled.td`
  color: ${outerSpace};
  padding: 0.5rem 1rem 0.8rem 1.5rem;
  vertical-align: middle;
  border-bottom: 1px dotted ${geyser};
  border-right: 1px dotted ${geyser};
  align-items: center;
  width: 18%;

  &:first-child {
    width: 46%;
  }

  &:last-child {
    border-right: none;
  }
`;

const ProfileCell = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2px;
`;

const LoadingMetric = styled.div`
  background: #d6d5d5;
  background: linear-gradient(-45deg, #ececec, #d6d5d5, #ececec);
  background-size: 800% 100%;
  animation: Gradient 1.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
  width: 100%;
  height: 3px;
  border-radius: 3px;
  margin: 12px 0;

  @keyframes Gradient {
    0% {
      background-position: 0% 0%
    }
    100% {
      background-position: 100% 0%
    }
    50% {
      background-position: 0% 0%
    }
  }
`;

const MetricItem = ({ metric, profile }) => (
  <ContentCell>
    {metric && <GridItem
      key={`${metric.label}-${profile.id}`}
      metric={metric}
      gridWidth="100%"
      standalone
      smaller
    />}
    {!metric && <LoadingMetric />}
  </ContentCell>
);

MetricItem.propTypes = {
  metric: PropTypes.shape({
    diff: PropTypes.number,
    value: PropTypes.number,
    label: PropTypes.string,
  }),
  profile: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

MetricItem.defaultProps = {
  metric: null,
};

const ProfileItem = ({
  metrics,
  metricKeys,
  profile,
  onOverviewClick,
}) => (
  <ProfileRow>
    <ContentCell>
      <ProfileCell>
        <ProfileBadge
          avatarUrl={profile.avatarUrl}
          service={profile.service}
          avatarSize={24}
          socialIconSize={14}
        />
        <Text size="small">{profile.username}</Text>
        <span style={{ marginLeft: 'auto' }}>
          <Link
            href={`/overview/${profile.id}`}
            unstyled
            onClick={(e) => {
              e.preventDefault();
              onOverviewClick(`/overview/${profile.id}`, profile);
            }}
          >
            <Text size="small" color="curiousBlue">
              <i className="bi-click" />
              Overview
            </Text>
          </Link>
        </span>
      </ProfileCell>
    </ContentCell>
    {metricKeys.map(metricKey => (<MetricItem profile={profile} metric={metrics[metricKey]} key={metricKey} />))}
  </ProfileRow>
);

ProfileItem.propTypes = {
  metrics: PropTypes.shape(PropTypes.shape({
    diff: PropTypes.number,
    value: PropTypes.number,
  })),
  metricKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  profile: PropTypes.shape({
    service: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onOverviewClick: PropTypes.func.isRequired,
};

ProfileItem.defaultProps = {
  loading: true,
  metrics: {},
};

export default ProfileItem;
