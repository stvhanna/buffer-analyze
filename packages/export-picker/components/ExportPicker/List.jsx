import React from 'react';
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

const ExportPickerList = (props) => {
  const {
    filename,

    // Actions
    close,
  } = props;

  return (
    <List>
      <Item onClick={close}><ExportAsCSV filename={filename} /></Item>
      <Item onClick={close}><ExportAsPNG filename={filename} /></Item>
    </List>
  );
};


ExportPickerList.propTypes = {
  filename: PropTypes.string.isRequired,

  // Actions
  close: PropTypes.func.isRequired,
};

export default ExportPickerList;
