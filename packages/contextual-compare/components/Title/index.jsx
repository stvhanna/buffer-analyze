import React from 'react';
import PropTypes from 'prop-types';
import { ChartTitle } from '@bufferapp/analyze-shared-components';

const Title = ({ forReport, state, presets }) =>
  <ChartTitle forReport={forReport}>
    { (forReport && state.mode === 0) ? presets[state.selectedPreset].label : 'Engagement and audience' }
  </ChartTitle>;

Title.propTypes = {
  forReport: PropTypes.bool,
  state: PropTypes.shape({
    selectedPreset: PropTypes.number,
  }),
  presets: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
  })),
};

Title.defaultProps = {
  forReport: false,
  state: {},
  presets: [],
};

export default Title;
