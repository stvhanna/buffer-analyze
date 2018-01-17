import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '@bufferapp/components/Text';

import {
  GridItem,
  MetricIcon,
} from '@bufferapp/analyze-shared-components';

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 0 0.5rem;
  margin: 0 auto;
`;

const Wrapper = styled.section`
  position: relative;
  padding: 0 1rem 1rem;
`;

const ProfileAvatarWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;
const ProfileUsernameWrapper = styled.div`
  margin-right: 10px;
`;

const ProfileCell = ({ profileTotal, profile }) => (
  <GridItem
    metric={{
      label: profileTotal.metric.label,
      value: profileTotal.currentPeriodTotal,
      diff: profileTotal.currentPeriodDiff,
    }}
    customLabel={
      <ProfileAvatarWrapper>
        <ProfileUsernameWrapper>
          <Text size="small">
            {profile.username}
          </Text>
        </ProfileUsernameWrapper>
        <MetricIcon key={profile.profileId} metric={profileTotal.metric} />
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
    username: PropTypes.string.isRequired,
    service: PropTypes.string,
  }).isRequired,
  profile: PropTypes.shape({
    profileId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
  }).isRequired,
};

function renderGridItem(profileTotal) {
  const profile = this.profiles.find(p => p.id === profileTotal.profileId);
  return (<ProfileCell
    key={profileTotal.profileId}
    profileTotal={profileTotal}
    profile={profile}
  />);
}

const ComparisonFooter = ({ profileTotals, profiles }) => (
  <Wrapper>
    <Grid>
      {profileTotals.map(renderGridItem, { profiles })}
    </Grid>
  </Wrapper>
);

ComparisonFooter.defaultProps = {
  loading: false,
};

ComparisonFooter.propTypes = {
  profileTotals: PropTypes.arrayOf(PropTypes.shape({
    metric: PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
    currentPeriodTotal: PropTypes.number.isRequired,
    currentPeriodDiff: PropTypes.number.isRequired,
    profileId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    service: PropTypes.string,
  })).isRequired,
  profiles: PropTypes.arrayOf(PropTypes.shape({
    profileId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
  })).isRequired,
};

export default ComparisonFooter;

