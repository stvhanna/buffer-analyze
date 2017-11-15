import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ exporting }) => {
  let title;
  if (exporting) {
    title = 'Exporting...';
  } else {
    title = 'Export as...';
  }
  return (<span>{title}</span>);
};

Title.defaultProps = {
  exporting: false,
};

Title.propTypes = {
  exporting: PropTypes.bool,
};

export default Title;
