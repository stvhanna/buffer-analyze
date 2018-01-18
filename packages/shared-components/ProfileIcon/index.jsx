import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Image } from '@bufferapp/components';

import {
  geyser,
} from '@bufferapp/components/style/color';

import SocialIcon from '../SocialIcon';

const avatarSize = 26;
const AvatarWithAuraSize = 34;
const socialIconSize = 14;

const IconAura = ({ color, children, className }) => (
  <span className={className} >
    { children }
  </span>
);

IconAura.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

const IconAuraStyled = styled(IconAura)`
  width: 30px;
  height: 30px;
  border: 2px solid ${props => props.color};
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;

const ProfileIcon = ({ className, profile, color }) => (
  <span className={className} >
    <IconAuraStyled color={color} >
      <Image
        border={'circle'}
        src={profile.avatarUrl}
        height={`${avatarSize}px`}
        width={`${avatarSize}px`}
      />
    </IconAuraStyled>
    <SocialIcon service={profile.service} socialIconSize={socialIconSize} avatarSize={AvatarWithAuraSize} withBorder />
  </span>
);

ProfileIcon.propTypes = {
  className: PropTypes.string.isRequired,
  color: PropTypes.string,
  profile: PropTypes.shape({
    username: PropTypes.string,
    service: PropTypes.string,
  }).isRequired,
};

ProfileIcon.defaultProps = {
  color: geyser,
};

const ProfileIconStyled = styled(ProfileIcon)`
  position: relative;
`;

export default ProfileIconStyled;
