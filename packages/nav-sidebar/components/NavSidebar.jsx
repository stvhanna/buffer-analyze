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

const getFirstProfileForService = (service, profiles) => (
  profiles.find(profile => profile.service === service)
);

const Insights = ({ profiles, ...props }) => {
  const tabId = props.tabId;
  const facebookProfile = getFirstProfileForService('facebook', profiles);
  const twitterProfile = getFirstProfileForService('twitter', profiles);
  const instagramProfile = getFirstProfileForService('instagram', profiles);
  const shouldShowInsights = facebookProfile || twitterProfile || instagramProfile;
  if (!shouldShowInsights) {
    return null;
  }
  return (
    <div>
      <Label>Insights</Label>
      { facebookProfile && <Item profileId={facebookProfile.id} href={`/insights/facebook/${facebookProfile.id}/${tabId}`} {...props}>Facebook</Item>}
      { twitterProfile && <Item profileId={twitterProfile.id} href={`/insights/twitter/${twitterProfile.id}/${tabId}`} {...props}>Twitter</Item>}
      { instagramProfile && <Item profileId={instagramProfile.id} href={`/insights/instagram/${instagramProfile.id}/${tabId}`} {...props}>Instagram</Item>}
    </div>
  );
};

Insights.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.shape({
    service: PropTypes.String,
  })).isRequired,
  tabId: PropTypes.string.isRequired,
};

Insights.defaultProps = {
  tabId: 'overview',
};

const NavSidebar = props => (
  <div style={sidebarStyle}>
    <div style={sidebarItemWrapperStyle}>
      <Text color="curiousBlue" weight="bold" size="large">Analyze</Text>
    </div>
    <Divider marginTop="0" marginBottom="1rem" />

    <Item href="/" {...props}>Dashboard</Item>

    <Insights {...props} />

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
