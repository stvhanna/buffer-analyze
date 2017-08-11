import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const InsightsItem = ({ activeLink, profiles, service }) => {
  if (profiles.find(profile => profile.service === service)) {
    const serviceLabel = service.charAt(0).toUpperCase() + service.slice(1);
    return (<Item active={activeLink === service}>{serviceLabel}</Item>);
  }
  return null;
};

InsightsItem.propTypes = {
  activeLink: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.shape({
    service: PropTypes.string,
  })).isRequired,
};

export default InsightsItem;
