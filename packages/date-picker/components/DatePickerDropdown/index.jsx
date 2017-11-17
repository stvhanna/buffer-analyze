import React from 'react';
import PropTypes from 'prop-types';

const dropdownStyle = {
  zIndex: 2,
  display: 'none',
  position: 'absolute',
  width: '100%',
  top: '2.25rem',
  backgroundColor: '#FFFFFF',
  border: '1px solid #D5E3EF',
  borderWidth: '0 1px 1px',
  borderRadius: 3,
  padding: '0.5rem 1rem',
  boxSizing: 'border-box',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
};

const dropdownOpenStyle = {
  ...dropdownStyle,
  display: 'block',
};

const Dropdown = ({ isOpen, children }) => {
  return (
    <div style={(isOpen ? dropdownOpenStyle : dropdownStyle)}>
      {children}
    </div>
  );
};

Dropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Dropdown;
