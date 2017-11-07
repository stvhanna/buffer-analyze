import React from 'react';
import PropTypes from 'prop-types';

const header = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
};

const Header = ({ children }) =>
  <header style={header}>{children}</header>;

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
