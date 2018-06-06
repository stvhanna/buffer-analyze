import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from '@bufferapp/components';
import { ProfileBadge } from '@bufferapp/analyze-shared-components';

const Profile = styled.span`
  position: relative;
`;

const Legend = styled.span`
  display: flex;
  align-items: center;
  margin: 0 1.5rem 0.5rem 0;
`;

const ProfileText = styled.div`
  margin: -1px 0 0 -4px
`;

const ProfileLegend = ({ profile }) =>
  <Legend>
    <ProfileBadge
      avatarUrl={profile.avatarUrl}
      service={profile.service}
      avatarSize={16}
      socialIconSize={18}
    />
    <ProfileText>
      <Text color="outerSpace" weight="medium">
        <Profile>{profile.username}</Profile>
      </Text>
    </ProfileText>
  </Legend>;

ProfileLegend.propTypes = {
  profile: PropTypes.shape({
    service: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
};

export default ProfileLegend;
