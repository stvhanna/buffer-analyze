import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  Divider,
} from '@bufferapp/components';

import {
  offWhite,
  mystic,
} from '@bufferapp/components/style/color';

import Label from './Label';
import Item from './Item';
import InsightsItem from './InsightsItem';

const settingsDivider = {
  marginTop: 'auto',
  padding: '0 1rem',
};

const settingsWrapper = {
  padding: '.25rem 0 .5rem',
};

const sidebarStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  maxHeight: '100vh',
  width: '16rem',
  background: offWhite,
  borderRight: `1px solid ${mystic}`,
};

const sidebarItemWrapperStyle = {
  display: 'block',
  padding: '.75rem 1rem .5rem',
};

const NavSidebar = props => (
  <div style={sidebarStyle}>
    <div style={sidebarItemWrapperStyle}>
      <Text color="curiousBlue" weight="bold" size="large">Analyze</Text>
    </div>
    <Divider marginTop="0" marginBottom="1rem" />

    <Item active={props.activeLink === 'dashboard'}>Dashboard</Item>

    <Label>Insights</Label>
    <InsightsItem {...props} service="facebook" />
    <InsightsItem {...props} service="twitter" />
    <InsightsItem {...props} service="instagram" />

    <Label>Tools</Label>
    <Item>Comparisons</Item>
    <Item>Reports</Item>

    <div style={settingsDivider}>
      <Divider marginTop="0" marginBottom="0" />
    </div>
    <div style={settingsWrapper}>
      <Item>Settings</Item>
    </div>
  </div>
);

NavSidebar.propTypes = {
  activeLink: PropTypes.string.isRequired,
};

export default NavSidebar;
