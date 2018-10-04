import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  CheckmarkIcon,
  Text,
} from '@bufferapp/components';

import MetricIcon from '../../../MetricIcon';

import {
  dropdownListItem,
} from '../../style.less';

const DropdownItem = ({ metric, handleClick, selected, iconless }) => (
  <li className={dropdownListItem}>
    <Button noStyle onClick={handleClick} >
      <span
        style={{
          alignItems: 'center',
          boxSizing: 'border-box',
          display: 'flex',
          position: 'relative',
          width: (iconless ? '15.84rem' : '15.5rem'),
          padding: '5px 10px',
        }}
      >
        {!iconless && <MetricIcon metric={metric} />}
        <Text size="extra-small">{metric.label}</Text>
        { selected && <div style={{ marginLeft: 'auto' }}>
          <CheckmarkIcon color={'curiousBlue'} />
        </div>}
      </span>
    </Button>
  </li>
);

DropdownItem.propTypes = {
  metric: PropTypes.shape({
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  iconless: PropTypes.bool,
};

DropdownItem.defaultProps = {
  selected: false,
  iconless: false,
};

export default DropdownItem;
