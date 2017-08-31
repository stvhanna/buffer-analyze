import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  CheckmarkIcon,
  Image,
  Text,
} from '@bufferapp/components';

import { SocialIcon } from '@bufferapp/analyze-shared-components';

import {
  outerSpaceUltraLight,
} from '@bufferapp/components/style/color';

import {
  dropdownListItem,
} from '../../style.less';

const avatarSize = 24;

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
      <SocialIcon service={service} socialIconSize={11} avatarSize={24} />
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
