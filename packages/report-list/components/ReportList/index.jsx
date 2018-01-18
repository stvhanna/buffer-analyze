import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  ChartStateLoading as Loading,
  EmptyState,
} from '@bufferapp/analyze-shared-components';
import Report from '../Report';

const List = styled.ol`
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Centered = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
`;

const ReportList = ({ loading, reports, selectReport, removeReport, small }) =>
  (loading ?
    <Centered>
      <Loading active noBorder transparent />
    </Centered> :
    reports.length > 0 ?
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
      </List> :
      <Centered>
        <EmptyState
          header="There are currently no reports"
        />
      </Centered>
  );

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
