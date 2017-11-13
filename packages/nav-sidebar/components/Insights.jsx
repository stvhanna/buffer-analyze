import React from 'react';
import PropTypes from 'prop-types';

import {
  Divider,
} from '@bufferapp/components';

import Label from './Label';
import Item from './Item';

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
      { facebookProfile && <Item profileService="facebook" profileId={facebookProfile.id} href={`/insights/facebook/${facebookProfile.id}/${tabId}`} {...props}>Facebook</Item>}
      { twitterProfile && <Item profileService="twitter" profileId={twitterProfile.id} href={`/insights/twitter/${twitterProfile.id}/${tabId}`} {...props}>Twitter</Item>}
      { instagramProfile && <Item profileService="instagram" profileId={instagramProfile.id} href={`/insights/instagram/${instagramProfile.id}/${tabId}`} {...props}>Instagram</Item>}
      <Divider marginTop="0.75rem" marginBottom="1rem" />
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

export default Insights;
