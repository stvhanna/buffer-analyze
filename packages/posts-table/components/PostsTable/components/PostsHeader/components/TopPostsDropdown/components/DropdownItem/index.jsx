import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Button,
  CheckmarkIcon,
  Text,
} from '@bufferapp/components';

import {
  MetricIcon,
} from '@bufferapp/analyze-shared-components';

import {
  dropdownListItem,
} from '../../style.less';

const MetricText = styled.span`
  display: inline-block;
  margin: 0 0 0 0.2rem;
`;

const DropdownItem = ({ metric, handleClick, selected }) => (
  <li className={dropdownListItem}>
    <Button noStyle onClick={handleClick} >
      <span
        style={{
          alignItems: 'center',
          boxSizing: 'border-box',
          display: 'flex',
          position: 'relative',
          width: '200px',
          padding: '0.25rem 0.75rem',
          marginTop: '0.5rem',
        }}
      >
        <MetricIcon metric={metric} />
        <MetricText>
          <Text weight="medium" size="extra-small" color="outerSpace">{metric.label}</Text>
        </MetricText>
        <span>&nbsp;</span>
        { selected && <div style={{ marginLeft: 'auto' }}>
          <CheckmarkIcon color={'curiousBlue'} />
        </div>}
      </span>
    </Button>
  </li>
);

DropdownItem.propTypes = {
  metric: PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};

DropdownItem.defaultProps = {
  selected: false,
};

export default DropdownItem;
