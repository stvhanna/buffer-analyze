import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Image } from '@bufferapp/components';
import { outerSpaceUltraLight } from '@bufferapp/components/style/color';
import SocialIcon from '../SocialIcon';

const Container = styled.div`
  position: relative;
  margin-right: 10px;
  width: ${props => props.size};
  height: ${props => props.size};
  background: ${outerSpaceUltraLight};
  border-radius: 50%;
  box-shadow: rgba(0,0,0,0.25) 0 0 2px;
  line-height: 0.75em;
`;

const ProfileBadge = ({ avatarUrl, service, avatarSize, socialIconSize }) => {
  const avatarPixelSize = `${avatarSize}px`;
  return (
    <Container size={avatarPixelSize}>
      <Image
        border={'circle'}
        src={avatarUrl}
        height={avatarPixelSize}
        width={avatarPixelSize}
      />
      <SocialIcon
        service={service}
        socialIconSize={socialIconSize}
        avatarSize={avatarSize}
        withBorder
      />
    </Container>
  );
};

ProfileBadge.propTypes = {
  service: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  socialIconSize: PropTypes.number.isRequired,
  avatarSize: PropTypes.number.isRequired,
};

export default ProfileBadge;
