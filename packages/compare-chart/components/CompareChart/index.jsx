import React from 'react';
import PropTypes from 'prop-types';

import {
  geyser,
} from '@bufferapp/components/style/color';

import {
  ChartStateNoData as NoData,
  ChartStateLoading as Loading,
} from '@bufferapp/analyze-shared-components';

import Chart from '../Chart';
import Title from '../Title';
import Footer from '../Footer';
import MetricsDropdown from '../MetricsDropdown';
import PeriodToggle from '../PeriodToggle';

function getStartDate(dailyData) {
  return dailyData.length ? dailyData[0].day / 1000 : null;
}

function getEndDate(dailyData) {
  return dailyData.length ? dailyData[dailyData.length - 1].day / 1000 : null;
}

function filterDailyDataMetrics(dailyData, metricLabel) {
  return dailyData.map(day => ({
    day: day.day,
    metric: day.metrics.filter(metric => metric.label === metricLabel).shift(),
  }));
}

const containerStyle = {
  padding: '0',
  margin: '0 auto',
  borderRadius: '2px',
  minHeight: '12rem',
  position: 'relative',
};

const CompareChart = ({
  dailyData,
  selectedMetricLabel,
  loading,
  totals,
  timezone,
  visualizePreviousPeriod,
  selectMetric,
  togglePreviousPeriod,
  openDropdown,
  closeDropdown,
  isDropdownOpen,
}) => {
  let content = null;
  if (loading) {
    content = <Loading active text="Compare chart loading..." />;
  } else if (dailyData.length === 0) {
    content = <NoData />;
  } else {
    content = (
      <div>
        <div style={{ padding: '20px', display: 'flex' }} >
          <MetricsDropdown
            metrics={totals}
            selectedMetricLabel={selectedMetricLabel}
            isDropdownOpen={isDropdownOpen}
            selectMetric={selectMetric}
            openDropdown={openDropdown}
            closeDropdown={closeDropdown}
          />
          <PeriodToggle handleClick={togglePreviousPeriod} active={visualizePreviousPeriod} />
        </div>
        <Chart
          dailyData={filterDailyDataMetrics(dailyData, selectedMetricLabel)}
          timezone={timezone}
          visualizePreviousPeriod={visualizePreviousPeriod}
        />
      </div>
    );
  }

  if (!loading && dailyData.length !== 0) containerStyle.border = `solid 1px ${geyser}`;

  return (
    <div style={{ margin: '0 0 1.5rem' }}>
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
  selectedMetricLabel: '',
  visualizePreviousPeriod: false,
  isDropdownOpen: false,
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
      previousValue: PropTypes.number.isRequired,
      postsCount: PropTypes.number.isRequired,
    })),
  })).isRequired,
  selectedMetricLabel: PropTypes.string,
  totals: PropTypes.arrayOf(PropTypes.shape({
    diff: PropTypes.number,
    label: PropTypes.string,
    previousValue: PropTypes.number,
    value: PropTypes.number,
  })).isRequired,
  timezone: PropTypes.string.isRequired,
  visualizePreviousPeriod: PropTypes.bool,
  isDropdownOpen: PropTypes.bool,
  // actions
  selectMetric: PropTypes.func.isRequired,
  togglePreviousPeriod: PropTypes.func.isRequired,
  openDropdown: PropTypes.func.isRequired,
  closeDropdown: PropTypes.func.isRequired,
};

export default CompareChart;
