/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Dropdown from './Dropdown';
import List from './List';

const styleCatcher = {
  display: 'none',
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: 1,
};

const styleCatcherOpen = {
  ...styleCatcher,
  display: 'block',
};

const ExportPicker = (props) => {
  const {
    isOpen,
    loading,
    exporting,
    // Actions
    open,
    close,
  } = props;

  return (
    <div style={{ position: 'relative', width: '12rem' }}>
      <Button
        isOpen={isOpen}
        loading={loading}
        exporting={exporting}
        handleClick={() => (isOpen ? close() : open())}
      />
      <Dropdown isOpen={isOpen}>
        <List {...props} />
      </Dropdown>

      <div style={(isOpen ? styleCatcherOpen : styleCatcher)} tabIndex="0" role="button" onClick={close} />
    </div>
  );
};

ExportPicker.defaultProps = {
  exporting: false,
  isOpen: false,
};

ExportPicker.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  exporting: PropTypes.bool.isRequired,

  // Actions
  open: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default ExportPicker;
