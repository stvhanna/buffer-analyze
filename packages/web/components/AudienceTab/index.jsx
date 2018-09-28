import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AudienceOverview from '@bufferapp/demographic-overview';

const AudienceTab = ({ match }) => (
  <div>
    {match.params.service !== 'twitter' && <AudienceOverview />}
  </div>
);

AudienceTab.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      service: PropTypes.string,
    }),
  }).isRequired,
};

export default connect()(AudienceTab);
