import React from 'react';
import PropTypes from 'prop-types';
import {
  outerSpaceUltraLight,
} from '@bufferapp/components/style/color';
import { Image } from '@bufferapp/components';

import SocialIcon from '../SocialIcon';

const ProfileBadge = ({ avatarUrl, service, avatarSize, socialIconSize }) => {
  const avatarPixelSize = `${avatarSize}px`;
  return (
    <div style={{
      position: 'relative',
      marginRight: '10px',
      width: avatarPixelSize,
      height: avatarPixelSize,
      background: outerSpaceUltraLight,
      borderRadius: '50%',
    }}
    >
      <Image
        border={'circle'}
        src={avatarUrl}
        height={avatarPixelSize}
        width={avatarPixelSize}
      />
      <SocialIcon service={service} socialIconSize={socialIconSize} avatarSize={avatarSize} />
    </div>
  );
};

ProfileBadge.propTypes = {
  service: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  socialIconSize: PropTypes.number.isRequired,
  avatarSize: PropTypes.number.isRequired,
};

export default ProfileBadge;
