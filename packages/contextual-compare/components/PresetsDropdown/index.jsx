import React from 'react';
import PropTypes from 'prop-types';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  Text,
} from '@bufferapp/components';

import Dropdown, {
  DropdownContent,
} from '@bufferapp/analyze-shared-components/Dropdown';

import List from './List';

const triggerContainer = {
  padding: '5px 0',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
};

const dropdown = {
  width: '24rem',
  display: 'inline-block',
};

const PresetsDropdown =
  ({ presets, open, selectedPreset, toggleDropdown, selectPreset }) => (
    <div style={dropdown}>
      <Dropdown toggleDropdown={toggleDropdown} isDropdownOpen={open}>
        <div style={triggerContainer}>
          <Text size="small">{presets[selectedPreset].label}</Text>
          <span style={{ marginLeft: 'auto' }} >
            { open && <ArrowUpIcon size="small" /> }
            { !open && <ArrowDownIcon size="small" /> }
          </span>
        </div>
        <DropdownContent isDropdownOpen={open}>
          <List
            presets={presets}
            selectedPreset={selectedPreset}
            selectPreset={selectPreset}
          />
        </DropdownContent>
      </Dropdown>
    </div>
  );

PresetsDropdown.defaultProps = {
  presets: [],
  open: false,
};

PresetsDropdown.propTypes = {
  open: PropTypes.bool,
  selectedPreset: PropTypes.number.isRequired,
  presets: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    description: PropTypes.string,
  })),
  selectPreset: PropTypes.func.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
};
export default PresetsDropdown;
