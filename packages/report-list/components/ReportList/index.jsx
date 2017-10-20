import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '@bufferapp/components/Text';

import Report from '../Report';

const List = styled.ol`
  margin: 0;
  padding: 0;
  width: 100%;
`;

const ReportList = ({ loading, reports }) =>
  (loading ? <Text>Loading...</Text> :
  <List>
    {reports.map(report => <Report key={report._id} {...report} />)}
  </List>);

ReportList.defaultProps = {
  reports: [],
  loading: false,
};

ReportList.propTypes = {
  loading: PropTypes.bool,
  reports: PropTypes.arrayOf(PropTypes.shape({
    updated_at: PropTypes.string,
    name: PropTypes.string,
  })),
};

export default ReportList;
