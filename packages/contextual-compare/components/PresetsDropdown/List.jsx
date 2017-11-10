import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Text,
  Button,
} from '@bufferapp/components';

const HelpButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  background: #cccfd2;
  color: white;
  font-size: 12px !important;
  font-weight: bolder !important;
  width: 16px;
  height: 16px;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;

  &::before {
    transition: opacity 250ms ease-out;
    content: " ";
    position: absolute;
    margin-left: 14px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 8px 5px 0;
    border-color: transparent #343E46 transparent transparent;
    opacity: 0;
  }

  &::after {
    transition: opacity 250ms ease-out;
    content: attr(data-description);
    position: absolute;
    margin-left: 14px;
    margin-top: -10px;
    background: #343E46;
    border-radius: 4px;
    width: 175px;
    padding: 18px;
    cursor: default;
    font-size: 9pt;
    text-align: left;
    font-weight: normal;
    line-height: 1.4em;
    opacity: 0;
  }

  &:hover {
    background: #59626a;
    &::before, &::after {
      opacity: 1;
    }
`;

const dropdownItem = {
  listStyle: 'none',
};

const dropdownItemContent = {
  width: '100%',
  display: 'inline-flex',
  textAlign: 'left',
  padding: '5px 10px',
  boxSizing: 'border-box',
};

const DropdownItem = ({ preset, handleClick, selectedPresetLabel }) => (
  <li style={dropdownItem}>
    <Button disabled={preset.data.length === 0} noStyle fillContainer onClick={handleClick}>
      <span style={dropdownItemContent}>
        <Text
          weight={preset.label === selectedPresetLabel ? 'bold' : null}
          size="small"
        >{preset.label} </Text>
        {preset.data.length === 0 && <Text
          weight="bold" color="torchRed"
          size="small"
        > &nbsp;(no data) </Text>}

        <HelpButton data-description={preset.description}>?</HelpButton>
      </span>
    </Button>
  </li>
);

DropdownItem.defaultProps = {
  preset: {},
  handleClick: () => {},
};

DropdownItem.propTypes = {
  preset: PropTypes.shape({
    label: PropTypes.string,
    color: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  }),
  selectedPresetLabel: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

const dropdownList = {
  padding: 0,
  margin: 0,
  marginBottom: '5px',
};

const List = ({ presets, selectPreset, selectedPreset }) => (
  <ol style={dropdownList}>
    { presets.map(preset =>
      <DropdownItem
        key={preset.label}
        preset={preset}
        selectedPresetLabel={presets[selectedPreset].label}
        handleClick={() => selectPreset(presets.indexOf(preset))}
      />)}
  </ol>
);

List.defaultProps = {
  presets: [],
};

List.propTypes = {
  selectPreset: PropTypes.func.isRequired,
  presets: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    color: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  })),
  selectedPreset: PropTypes.number.isRequired,
};

export default List;
