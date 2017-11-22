/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Button from './Button';
import Dropdown from './Dropdown';
import List from './List';

const Container = styled.div`
  position: relative;
  width: 8rem;
`;

const Catcher = styled.div`
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;

  ${props => props.isOpen && css`
    display: block;
  `}
`;

const ExportPicker = (props) => {
  const {
    isOpen,
    exporting,

    // Actions
    open,
    close,
  } = props;

  return (
    <Container>
      <Button
        isOpen={isOpen}
        exporting={exporting}
        handleClick={() => (isOpen ? close() : open())}
      />
      <Dropdown isOpen={isOpen}>
        <List {...props} />
      </Dropdown>

      <Catcher
        tabIndex="0"
        role="button"
        onClick={close}
        isOpen={isOpen}
      />
    </Container>
  );
};

ExportPicker.defaultProps = {
  exporting: false,
  isOpen: false,
};

ExportPicker.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  exporting: PropTypes.bool.isRequired,

  // Actions
  open: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default ExportPicker;
