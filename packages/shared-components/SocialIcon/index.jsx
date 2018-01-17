import React from 'react';
import PropTypes from 'prop-types';

import {
  CircleFacebookIcon,
  CircleInstagramIcon,
  CircleTwitterIcon,
} from '@bufferapp/components';

const SocialIcon = ({ service, socialIconSize, avatarSize, withBorder }) => {
  let icon;
  switch (service) {
    case 'twitter':
      icon = <CircleTwitterIcon color={service} size={{ width: '100%', height: '100%' }} />;
      break;
    case 'facebook':
      icon = <CircleFacebookIcon color={service} size={{ width: '100%', height: '100%' }} />;
      break;
    case 'instagram':
      // TODO using this as it's the only red we have
      // but we need to change it to match instagram color
      icon = <CircleInstagramIcon color={'torchRed'} size={{ width: '100%', height: '100%' }} />;
      break;
    default:
      icon = null;
      break;
  }

  return (
    <div
      style={{
        background: '#fff',
        position: 'absolute',
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
  avatarSize: PropTypes.number.isRequired,
  withBorder: PropTypes.bool,
};

SocialIcon.defaultProps = {
  withBorder: false,
};

export default SocialIcon;
