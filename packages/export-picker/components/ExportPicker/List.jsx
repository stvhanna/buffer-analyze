import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from '@bufferapp/components/Text';

const listStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const itemStyle = {
  cursor: 'pointer',
  listStyle: 'none',
  padding: '0.25rem 0',
  margin: 0,
};

class ExportPickerList extends Component {

  render() {
    return (
      <ul style={listStyle}>
        <li style={itemStyle}><Text size="small">Export as CSV</Text></li>
        <li style={itemStyle}><Text size="small">Export as PNG</Text></li>
      </ul>
    );
  }
}

ExportPickerList.defaultProps = {};

ExportPickerList.propTypes = {
  // Actions
  close: PropTypes.func.isRequired,
};

export default ExportPickerList;
