import React, { Component } from 'react';
import PropTypes from 'prop-types';


const buttonStyle = {
  cursor: 'pointer',
  appearance: 'none',
  display: 'block',
  background: '#FFFFFF',
  border: '0 none',
  padding: 0,
  margin: '0.5rem 0',
  fontSize: '1rem',
};

class ExportPickerList extends Component {

  render() {
    return (
      <div>
        <button style={buttonStyle}>Export as CSV</button>
        <button style={buttonStyle}>Export as PNG</button>
      </div>
    );
  }
}

ExportPickerList.defaultProps = {};

ExportPickerList.propTypes = {
  // Actions
  close: PropTypes.func.isRequired,
};

export default ExportPickerList;
