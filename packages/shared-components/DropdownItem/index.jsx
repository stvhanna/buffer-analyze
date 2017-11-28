import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  CheckmarkIcon,
  Text,
} from '@bufferapp/components';

import { ProfileBadge } from '@bufferapp/analyze-shared-components';
import {
  dropdownListItem,
} from './style.less';

const DropdownItem = ({ profile, handleClick, selected }) => (
  <li className={dropdownListItem}>
    <Button noStyle fillContainer onClick={handleClick} >
      <span
        style={{
          alignItems: 'center',
          boxSizing: 'border-box',
          display: 'flex',
          position: 'relative',
          width: '100%',
          padding: '0.25rem 0',
        }}
      >
        <ProfileBadge
          avatarUrl={profile.avatarUrl}
          service={profile.service}
          avatarSize={24}
          socialIconSize={11}
        />
        <Text size="small">{profile.username}</Text>
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
