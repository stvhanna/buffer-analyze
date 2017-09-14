import React from 'react';
import PropTypes from 'prop-types';

import {
  geyser,
} from '@bufferapp/components/style/color';

import {
  ChartStateNoData as NoData,
  ChartStateLoading as Loading,
} from '@bufferapp/analyze-shared-components';

import Title from '../Title';
import Footer from '../Footer';
import MetricsDropdown from '../MetricsDropdown';

function getStartDate(dailyData) {
  return dailyData.length ? dailyData[0].day / 1000 : null;
}

function getEndDate(dailyData) {
  return dailyData.length ? dailyData[dailyData.length - 1].day / 1000 : null;
}

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  padding: '0',
  margin: '0 auto',
  border: `solid 1px ${geyser}`,
  borderRadius: '2px',
};

const CompareChart = ({ dailyData, selectedMetricLabel, loading, totals, timezone }) => {
  let content = null;
  if (loading) {
    content = <Loading active text="Compare chart loading..." />;
  } else if (dailyData.length === 0) {
    content = <NoData />;
  } else {
    content = (
      <div style={{ padding: '20px' }} >
        <MetricsDropdown
          metrics={totals}
          selectedMetricLabel={selectedMetricLabel}
          isDropdownOpen={false}
          selectMetric={() => {}}
          toggleDropdown={() => {}}
        />
      </div>
    );
  }

  return (
    <div>
      <Title
        startDate={getStartDate(dailyData)}
        endDate={getEndDate(dailyData)}
      />
      <div style={containerStyle}>
        {content}
      </div>
      {!loading && dailyData.length > 0 &&
      <Footer
        startDate={getStartDate(dailyData)}
        endDate={getEndDate(dailyData)}
        selectedMetricLabel={selectedMetricLabel}
        totals={totals}
      />}
    </div>
  );
};

CompareChart.defaultProps = {
  loading: false,
};

CompareChart.propTypes = {
  loading: PropTypes.bool,
  dailyData: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string.isRequired,
    metrics: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string.isRequired,
      diff: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      previous_value: PropTypes.number.isRequired,
      posts_count: PropTypes.number.isRequired,
    })),
  })).isRequired,
  selectedMetricLabel: PropTypes.string.isRequired,
  totals: PropTypes.arrayOf(PropTypes.shape({
    diff: PropTypes.number,
    label: PropTypes.string,
    previous_value: PropTypes.number.isRequired,
    value: PropTypes.number,
  })).isRequired,
  timezone: PropTypes.string.isRequired,
};

export default CompareChart;
