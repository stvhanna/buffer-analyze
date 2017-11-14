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

const ReportList = ({ loading, reports, selectReport, removeReport, small }) =>
  (loading ?
    <Text>Loading...</Text> :
    <List>
      {reports.map(report =>
        <Report
          key={report._id}
          {...report}
          small={small}
          selectReport={selectReport}
          removeReport={removeReport}
        />,
      )}
    </List>);

ReportList.defaultProps = {
  reports: [],
  loading: false,
  small: false,
  removeReport: null,
};

ReportList.propTypes = {
  loading: PropTypes.bool,
  reports: PropTypes.arrayOf(PropTypes.shape({
    updated_at: PropTypes.number,
    name: PropTypes.string,
  })),
  selectReport: PropTypes.func.isRequired,
  removeReport: PropTypes.func,
  small: PropTypes.bool,
};

export default ReportList;
