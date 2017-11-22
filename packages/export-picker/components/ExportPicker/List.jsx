import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExportAsCSV from '@bufferapp/analyze-csv-export';
import ExportAsPNG from '@bufferapp/analyze-png-export';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  cursor: pointer;
  list-style: none;
  padding: 0.25rem 0;
  margin: 0;
`;

class ExportPickerList extends Component {

  render() {
    return (
      <List>
        <Item onClick={this.props.close}><ExportAsCSV filename={this.props.filename} /></Item>
        <Item onClick={this.props.close}><ExportAsPNG filename={this.props.filename} /></Item>
      </List>
    );
  }
}

ExportPickerList.propTypes = {
  filename: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};

export default ExportPickerList;
