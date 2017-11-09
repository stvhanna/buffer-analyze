import React from 'react';
import PropTypes from 'prop-types';

const header = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.5rem',
  borderBottom: '1px solid #ECEEEF',
};

const Header = ({ children }) =>
  <header style={header}>{children}</header>;

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
