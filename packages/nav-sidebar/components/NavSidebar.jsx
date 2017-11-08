import React from 'react';
import PropTypes from 'prop-types';

import {
  Divider,
} from '@bufferapp/components';

import {
  white,
  mystic,
} from '@bufferapp/components/style/color';

import Label from './Label';
import Item from './Item';
import Insights from './Insights';

const sidebarStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '0.75rem 0',
  minHeight: '100vh',
  maxHeight: '100vh',
  width: '200px',
  background: white,
  borderRight: `1px solid ${mystic}`,
  boxSizing: 'border-box',
};

const NavSidebar = props => (
  <div style={sidebarStyle}>
    <Item href="/" {...props}>Dashboard</Item>
    <Divider marginTop="0.75rem" marginBottom="1rem" />
    <Insights {...props} />
    <Label>Tools</Label>
    <Item href="/comparisons" {...props}>Comparisons</Item>
    <Item href="/reports" {...props}>Reports</Item>
  </div>
);

NavSidebar.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.shape({
    service: PropTypes.string,
  })).isRequired,
};

export default NavSidebar;
