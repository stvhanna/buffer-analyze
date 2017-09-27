import React from 'react';
import PropTypes from 'prop-types';

import {
  geyser,
} from '@bufferapp/components/style/color';

import {
  ChartStateNoData as NoData,
  ChartStateLoading as Loading,
  ModeToggle,
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
    previousPeriodDay: day.previousPeriodDay,
    metric: day.metrics.filter(metric => metric.label === metricLabel).shift(),
  }));
}

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
  profileService,
  selectDailyMode,
  dailyMode,
}) => {
  let content = null;
  let header = null;
  let footer = null;
  if (loading) {
    content = <Loading active text="Compare chart loading..." />;
  } else if (dailyData.length === 0) {
    content = <NoData />;
  } else {
    content = (
      <div id="js-dom-to-png-compare">
        <Chart
          dailyData={filterDailyDataMetrics(dailyData, selectedMetricLabel)}
          timezone={timezone}
          visualizePreviousPeriod={visualizePreviousPeriod}
          profileService={profileService}
        />
      </div>
    );
    header = (
      <div style={{ padding: '20px', display: 'flex' }} >
        <MetricsDropdown
          metrics={totals}
          selectedMetricLabel={selectedMetricLabel}
          isDropdownOpen={isDropdownOpen}
          selectMetric={selectMetric}
          openDropdown={openDropdown}
          closeDropdown={closeDropdown}
        />
        {profileService === 'twitter' &&
          <ModeToggle
            baseModeLabel="Daily"
            secondaryModeLabel="Period Total"
            active={dailyMode === 1}
            handleClick={selectDailyMode}
          />
        }
        <PeriodToggle handleClick={togglePreviousPeriod} active={visualizePreviousPeriod} />
      </div>
    );
    footer = (
      <Footer
        startDate={getStartDate(dailyData)}
        endDate={getEndDate(dailyData)}
        selectedMetricLabel={selectedMetricLabel}
        totals={totals}
      />
    );
  }

  const containerStyle = {
    padding: '0',
    margin: '0 auto',
    borderRadius: '2px',
    border: `solid 1px ${geyser}`,
    minHeight: '12rem',
    position: 'relative',
  };

  if (loading || dailyData.length === 0) delete containerStyle.border;

  return (
    <div style={{ margin: '0 0 1.5rem' }}>
      <Title
        startDate={getStartDate(dailyData)}
        endDate={getEndDate(dailyData)}
      />
      <div style={containerStyle}>
        {header}
        {content}
      </div>
      {footer}
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
  profileService: PropTypes.string.isRequired,
  // actions
  selectMetric: PropTypes.func.isRequired,
  togglePreviousPeriod: PropTypes.func.isRequired,
  openDropdown: PropTypes.func.isRequired,
  closeDropdown: PropTypes.func.isRequired,
  selectDailyMode: PropTypes.func.isRequired,
  dailyMode: PropTypes.number.isRequired,
};

export default CompareChart;
