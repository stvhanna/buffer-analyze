import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import ArrowDownIcon from '@bufferapp/components/Icon/Icons/ArrowDownIcon';
import ArrowUpIcon from '@bufferapp/components/Icon/Icons/ArrowUpIcon';
import Title from './Title';

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

  ${props => props.loading && css`
    pointer-events: none;
  `}
`;

const Arrow = styled.span`
  margin-left: auto;
`;

const DatePickerButton = ({ presets, isOpen, loading, startDate, endDate, handleClick }) => (
  <Button
    loading={loading}
    disabled={loading}
    onClick={handleClick}
  >
    <Title presets={presets} loading={loading} startDate={startDate} endDate={endDate} />
    { !loading ?
      <Arrow>
        { isOpen ?
          <ArrowUpIcon size="small" /> :
          <ArrowDownIcon size="small" /> }
      </Arrow> : null}
  </Button>
);

DatePickerButton.defaultProps = {
  startDate: 0,
  endDate: 0,
  loading: false,
};

DatePickerButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  startDate: PropTypes.number,
  endDate: PropTypes.number,
};

export default DatePickerButton;
