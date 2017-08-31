import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  CheckmarkIcon,
  CircleFacebookIcon,
  CircleInstagramIcon,
  CircleLinkedInIcon,
  CircleTwitterIcon,
  Image,
  Text,
} from '@bufferapp/components';

import {
  outerSpaceUltraLight,
} from '@bufferapp/components/style/color';

import {
  dropdownListItem,
} from '../../style.less';

const socialIconSize = 11;
const avatarSize = 24;

export const SocialIcon = ({ service }) => {
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
    case 'linkedin':
      icon = <CircleLinkedInIcon color={service} size={{ width: '100%', height: '100%' }} />;
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
      }}
    >
      {icon}
    </div>
  );
};

SocialIcon.propTypes = {
  service: PropTypes.oneOf(['twitter', 'facebook', 'instagram', 'linkedin']).isRequired,
};

export const ProfileBadge = ({ avatarUrl, service }) => {
  const avatarPixelSize = `${avatarSize}px`;
  return (
    <div
      style={{
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
      <SocialIcon service={service} />
    </div>
  );
};

ProfileBadge.propTypes = {
  service: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

const DropdownItem = ({ profile, handleClick, selected }) => (
  <li className={dropdownListItem}>
    <Button noStyle onClick={handleClick} >
      <span
        style={{
          alignItems: 'center',
          boxSizing: 'border-box',
          display: 'flex',
          position: 'relative',
          width: '280px',
          padding: '5px 10px',
        }}
      >
        <ProfileBadge avatarUrl={profile.avatarUrl} service={profile.service} />
        <Text weight="bold" size="small">{profile.username}</Text>
        { selected && <div style={{ marginLeft: 'auto' }}>
          <CheckmarkIcon color={'curiousBlue'} />
        </div>}
      </span>
    </Button>
  </li>
);

DropdownItem.propTypes = {
  profile: PropTypes.shape({
    service: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};

DropdownItem.defaultProps = {
  selected: false,
};

export default DropdownItem;
