import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import ArrowDownIcon from '@bufferapp/components/Icon/Icons/ArrowDownIcon';
import ArrowUpIcon from '@bufferapp/components/Icon/Icons/ArrowUpIcon';
import Text from '@bufferapp/components/Text';

const Button = styled.button`
  cursor: pointer;
  display: flex;
  padding: 0.75rem 1rem;
  color: #333333;
  text-decoration: none;
  text-shadow: none;
  text-align: left;
  border: 1px solid #D5E3EF;
  border-radius: 3px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  outline: 0 none;

  ${props => props.exporting && css`
    opacity: 0.2;
    pointer-events: none;
  `}
`;

const Arrow = styled.span`
  margin-left: auto;
`;

const ExportPickerButton = ({ isOpen, exporting, handleClick }) => (
  <Button
    exporting={exporting}
    disabled={exporting}
    onClick={handleClick}
  >
    <Text color="outerSpace" size="extra-small" weight="medium">{(exporting ? 'Exporting...' : 'Export as...')}</Text>
    <Arrow>
      { isOpen ?
        <ArrowUpIcon size="small" /> :
        <ArrowDownIcon size="small" /> }
    </Arrow>
  </Button>
);

ExportPickerButton.defaultProps = {
  startDate: 0,
  endDate: 0,
  exporting: false,
};

ExportPickerButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  exporting: PropTypes.bool,
};

export default ExportPickerButton;
