import React from 'react';
import PropTypes from 'prop-types';

const styleDropdown = {
  zIndex: 2,
  display: 'none',
  boxSizing: 'border-box',
  position: 'absolute',
  width: '100%',
  top: '3rem',
  backgroundColor: '#FFFFFF',
  borderRadius: 3,
  boxShadow: '0 1px 2px #333333',
  padding: '0.5rem 1rem',
};

const styleDropdownOpen = {
  ...styleDropdown,
  display: 'block',
};

const ExportPickerDropdown = ({ isOpen, children }) => {
  return (
    <div style={(isOpen) ? styleDropdownOpen : styleDropdown}>
      {children}
    </div>
  );
};

ExportPickerDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ExportPickerDropdown;
