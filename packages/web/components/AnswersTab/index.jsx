import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContextualCompare from '@bufferapp/contextual-compare';

const AnswersTab = ({ match }) => (
  <div>
    <ContextualCompare />
  </div>
);

AnswersTab.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      service: PropTypes.string,
    }),
  }).isRequired,
};

export default connect()(AnswersTab);
