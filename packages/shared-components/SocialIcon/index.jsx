import React from 'react';
import PropTypes from 'prop-types';

import {
  CircleFacebookIcon,
  CircleInstagramIcon,
  CircleTwitterIcon,
} from '@bufferapp/components';

const SocialIcon = ({ service, socialIconSize, avatarSize, withBorder, inline }) => {
  let icon;
  switch (service) {
    case 'twitter':
      icon = <CircleTwitterIcon color={service} size={{ width: '100%', height: '100%' }} />;
      break;
    case 'facebook':
      icon = <CircleFacebookIcon color={service} size={{ width: '100%', height: '100%' }} />;
      break;
    case 'instagram':
      icon = <CircleInstagramIcon color={service} size={{ width: '100%', height: '100%' }} />;
      break;
    default:
      icon = null;
      break;
  }

  return (
    <div
      style={{
        background: '#fff',
        position: `${!inline ? 'absolute' : ''}`,
        display: `${inline ? 'inline-block' : ''}`,
        marginRight: `${inline ? '0.25rem' : ''}`,
        width: `${socialIconSize}px`,
        height: `${socialIconSize}px`,
        top: `${avatarSize - socialIconSize}px`,
        left: `${avatarSize - socialIconSize}px`,
        borderRadius: '50%',
        border: `#fff ${withBorder ? '1px' : '0'} solid`,
      }}
    >
      {icon}
    </div>
  );
};

SocialIcon.propTypes = {
  service: PropTypes.oneOf(['twitter', 'facebook', 'instagram']).isRequired,
  socialIconSize: PropTypes.number.isRequired,
  avatarSize: PropTypes.number,
  withBorder: PropTypes.bool,
  inline: PropTypes.bool,
};

SocialIcon.defaultProps = {
  avatarSize: 0,
  withBorder: false,
  inline: false,
};

export default SocialIcon;
