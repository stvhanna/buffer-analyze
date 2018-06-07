import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '@bufferapp/components/Text';

import {
  GridItem,
  ProfileIcon,
  SocialIcon,
} from '@bufferapp/analyze-shared-components';

function capitalizeWord(name) {
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 0 0.5rem;
  margin: 0 auto;
`;

const Wrapper = styled.section`
  position: relative;
  padding: 0.75rem 0 0;
`;

const ProfileAvatarWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 14px;
`;
const ProfileUsernameWrapper = styled.div`
  margin: 0 0.75rem 0 0;
`;

const ProfileCell = ({ profileTotal, profile, gridWidth }) => (
  <GridItem
    gridWidth={gridWidth}
    metric={{
      label: profileTotal.metric.label,
      value: profileTotal.currentPeriodTotal,
      diff: profileTotal.currentPeriodDiff,
    }}
    smaller
    customLabel={
      <ProfileUsernameWrapper>
        <Text weight="medium" color="outerSpace" size="small">
          {profile.username}
        </Text>
      </ProfileUsernameWrapper>
    }
    prefix={
      <ProfileAvatarWrapper>
        <ProfileIcon color={profileTotal.metric.color} profile={profile} />
      </ProfileAvatarWrapper>
    }
  />
);

ProfileCell.propTypes = {
  profileTotal: PropTypes.shape({
    metric: PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
    currentPeriodTotal: PropTypes.number.isRequired,
    currentPeriodDiff: PropTypes.number.isRequired,
    profileId: PropTypes.string.isRequired,
  }).isRequired,
  gridWidth: PropTypes.string.isRequired,
  profile: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
  }).isRequired,
};

const ComingSoonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 0.8rem;
  margin-top: 1rem;
  position: relative;
  align-items: center;
`;

const ComingSoon = ({ metricKey, profile }) => (
  <ComingSoonWrapper>
    <SocialIcon
      service={profile.service}
      socialIconSize={18}
      avatarSize={12}
      inline
    />
    <Text size="small" color="lightSlate">
      {`${capitalizeWord(profile.service)} ${metricKey} coming soon`}
    </Text>
  </ComingSoonWrapper>
);
ComingSoon.propTypes = {
  metricKey: PropTypes.string.isRequired,
  profile: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
  }).isRequired,
};

function renderGridItem(profileTotal) {
  const profile = this.profiles.find(p => p.id === profileTotal.profileId);
  if (profile.service === 'instagram' && this.metricKey === 'reach') {
    return null;
  }
  const gridWidth = this.profileTotals.length === 4 ? '50%' : '33%';
  return (<ProfileCell
    gridWidth={gridWidth}
    key={profileTotal.profileId}
    profileTotal={profileTotal}
    profile={profile}
  />);
}

function renderComingSoon(profileTotal) {
  const profile = this.profiles.find(p => p.id === profileTotal.profileId);
  if (profile.service === 'instagram' && this.metricKey === 'reach') {
    return (<ComingSoon
      key={profile.id}
      metricKey={this.metricKey}
      profile={profile}
    />);
  }
  return null;
}

const ComparisonFooter = ({ profileTotals, profiles, metricKey }) => (
  <Wrapper>
    <Grid>
      {profileTotals.map(renderGridItem, { profiles, metricKey, profileTotals })}
    </Grid>
    {profileTotals.map(renderComingSoon, { profiles, metricKey })}
  </Wrapper>
);

ComparisonFooter.defaultProps = {
  loading: false,
};

ComparisonFooter.propTypes = {
  metricKey: PropTypes.string.isRequired,
  profileTotals: PropTypes.arrayOf(PropTypes.shape({
    metric: PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
    currentPeriodTotal: PropTypes.number.isRequired,
    currentPeriodDiff: PropTypes.number.isRequired,
    profileId: PropTypes.string.isRequired,
  })).isRequired,
  profiles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
  })).isRequired,
};

export default ComparisonFooter;

