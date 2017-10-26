import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '@bufferapp/components/Text';

import {
  geyser,
} from '@bufferapp/components/style/color';

import {
  GridItem,
  MetricIcon,
} from '@bufferapp/analyze-shared-components';

import { ProfileBadge } from '@bufferapp/analyze-shared-components';

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 auto;
  border-left: solid 1px ${geyser};
  border-radius: 2px;
`;

const Wrapper = styled.section`
  min-height: 12rem;
  position: relative;
  margin: 0 0 1.5rem;
`;

const ProfileAvatarWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;
const ProfileUsernameWrapper = styled.div`
  margin-right: 10px;
`;

const Footer = ({ profileTotals, selectedProfile }) => (
  <Wrapper>
    <Grid>
      {profileTotals.map(total => <GridItem
        key={total.profileId}
        metric={{
          label: total.metric.label,
          value: total.currentPeriodTotal,
          diff: total.currentPeriodDiff,
        }}
        customLabel={
          <ProfileAvatarWrapper>
            <ProfileBadge
              avatarUrl={selectedProfile.avatarUrl}
              service={selectedProfile.service}
              avatarSize={16}
              socialIconSize={8}
            />
            <ProfileUsernameWrapper>
              <Text size="small">{selectedProfile.username}</Text>
            </ProfileUsernameWrapper>
            <MetricIcon key={total.profileId} metric={total.metric} />
          </ProfileAvatarWrapper>
        }
      />)}
    </Grid>
  </Wrapper>
);

Footer.defaultProps = {
  loading: false,
};

Footer.propTypes = {
  profileTotals: PropTypes.arrayOf(PropTypes.shape({
    metric: PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
    currentPeriodTotal: PropTypes.number.isRequired,
    currentPeriodDiff: PropTypes.number.isRequired,
    profileId: PropTypes.string.isRequired,
  })).isRequired,
  selectedProfile: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
    timezone: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default Footer;

