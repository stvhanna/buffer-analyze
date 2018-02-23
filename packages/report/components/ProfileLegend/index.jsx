import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from '@bufferapp/components';
import { ProfileBadge } from '@bufferapp/analyze-shared-components';

const Profile = styled.span`
  color: #343E47;
  position: relative;
`;

const Legend = styled.span`
  display: flex;
  align-items: center;
  margin: 0 2rem 0.5rem 0;
`;

const ProfileText = styled.div`
  margin: 0 0 0 -3px
`;

const Network = styled.div`
  font-size: 0.75rem;
  color: #919DA8;
  text-transform: lowercase;
`;

const ProfileLegend = ({ profile }) =>
  <Legend>
    <ProfileBadge
      avatarUrl={profile.avatarUrl}
      service={profile.service}
      avatarSize={22}
      socialIconSize={24}
    />
    <ProfileText>
      <Text weight="bold" size="small">
        <Profile>{profile.username}</Profile>
      </Text>
      <Text weight="medium" size="small">
        <Network>{profile.service}.com</Network>
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
