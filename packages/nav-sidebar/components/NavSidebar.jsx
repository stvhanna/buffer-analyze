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

const serviceIsAvailable = (service, profiles) => (
  profiles.find(profile => profile.service === service)
);

const NavSidebar = props => (
  <div style={sidebarStyle}>
    <div style={sidebarItemWrapperStyle}>
      <Text color="curiousBlue" weight="bold" size="large">Analyze</Text>
    </div>
    <Divider marginTop="0" marginBottom="1rem" />

    <Item href="/" {...props}>Dashboard</Item>

    <Label>Insights</Label>
    { serviceIsAvailable('facebook', props.profiles) && <Item href="/insights/facebook" {...props}>Facebook</Item>}
    { serviceIsAvailable('twitter', props.profiles) && <Item href="/insights/twitter" {...props}>Twitter</Item>}
    { serviceIsAvailable('instagram', props.profiles) && <Item href="/insights/instagram" {...props}>Instagram</Item>}

    <Label>Tools</Label>
    <Item href="/comparisons" {...props}>Comparisons</Item>
    <Item href="/reports" {...props}>Reports</Item>

    <div style={settingsDivider}>
      <Divider marginTop="0" marginBottom="0" />
    </div>
    <div style={settingsWrapper}>
      <Item href="/settings" {...props}>Settings</Item>
    </div>
  </div>
);

NavSidebar.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.shape({
    service: PropTypes.string,
  })).isRequired,
};

export default NavSidebar;
