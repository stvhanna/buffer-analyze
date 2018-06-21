import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  ChartStateNoData as NoData,
  ChartStateLoading as Loading,
  ChartCard,
  ChartHeader,
  MetricsDropdown,
} from '@bufferapp/analyze-shared-components';

import AddReport from '@bufferapp/add-report';

import Chart from '../Chart';
import Title from '../Title';
import Footer from '../Footer';
import PeriodToggle from '../PeriodToggle';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  padding: 0.5rem 1.5rem 0.75rem;
`;

const ChartContainer = styled.div`
  padding: 0;
  margin: 0 auto;
  position: relative;
`;

function getStartDate(dailyData) {
  return dailyData.length ? dailyData[0].day / 1000 : null;
}

function getEndDate(dailyData) {
  return dailyData.length ? dailyData[dailyData.length - 1].day / 1000 : null;
}

export const ChartWithFooter = ({
  daily,
  selectedMetricLabel,
  totals,
  timezone,
  visualizePreviousPeriod,
  profileService,
}) => {
  if (daily.length === 0) {
    return (
      <Container>
        <NoData />
      </Container>
    );
  }
  return (
    <div id="js-dom-to-png-compare">
      <Chart
        daily={daily}
        selectedMetricLabel={selectedMetricLabel}
        timezone={timezone}
        visualizePreviousPeriod={visualizePreviousPeriod}
        profileService={profileService}
      />
      <Footer
        startDate={getStartDate(daily)}
        endDate={getEndDate(daily)}
        selectedMetricLabel={selectedMetricLabel}
        totals={totals}
      />
    </div>
  );
};

ChartWithFooter.propTypes = {
  daily: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string,
    metrics: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string,
      diff: PropTypes.number,
      label: PropTypes.string,
      value: PropTypes.number,
      previousValue: PropTypes.number,
      postsCount: PropTypes.number,
    })),
  })).isRequired,
  totals: PropTypes.arrayOf(PropTypes.shape({
    diff: PropTypes.number,
    label: PropTypes.string,
    previousValue: PropTypes.number,
    value: PropTypes.number,
  })).isRequired,
  timezone: PropTypes.string.isRequired,
  profileService: PropTypes.string.isRequired,
  visualizePreviousPeriod: PropTypes.bool.isRequired,
  selectedMetricLabel: PropTypes.string.isRequired,
};

const CompareChart = ({
  daily,
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
}) => {
  let content = null;
  let header = null;
  if (loading) {
    content = <Loading active noBorder large />;
  } else {
    content = (
      <ChartWithFooter
        daily={daily}
        selectedMetricLabel={selectedMetricLabel}
        timezone={timezone}
        visualizePreviousPeriod={visualizePreviousPeriod}
        profileService={profileService}
        dailyData={daily}
        totals={totals}
      />
    );
    if (daily.length > 0) {
      header = (
        <Header>
          <MetricsDropdown
            metrics={totals}
            selectedMetricLabel={selectedMetricLabel}
            isDropdownOpen={isDropdownOpen}
            selectMetric={selectMetric}
            openDropdown={openDropdown}
            closeDropdown={closeDropdown}
          />
          <PeriodToggle handleClick={togglePreviousPeriod} active={visualizePreviousPeriod} />
        </Header>
      );
    }
  }

  return (
    <ChartCard>
      <ChartHeader>
        <Title
          startDate={getStartDate(daily)}
          endDate={getEndDate(daily)}
        />
        <AddReport
          chart="compare"
          state={{
            visualizePreviousPeriod,
            selectedMetricLabel,
            profileService,
          }}
        />
      </ChartHeader>
      <ChartContainer>
        {header}
        {content}
      </ChartContainer>
    </ChartCard>
  );
};

CompareChart.defaultProps = {
  loading: false,
  selectedMetricLabel: '',
  visualizePreviousPeriod: false,
  isDropdownOpen: false,
  profileService: '',
};

CompareChart.propTypes = {
  loading: PropTypes.bool,
  daily: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string,
    metrics: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string,
      diff: PropTypes.number,
      label: PropTypes.string,
      value: PropTypes.number,
      previousValue: PropTypes.number,
      postsCount: PropTypes.number,
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
  profileService: PropTypes.string,
  // actions
  selectMetric: PropTypes.func.isRequired,
  togglePreviousPeriod: PropTypes.func.isRequired,
  openDropdown: PropTypes.func.isRequired,
  closeDropdown: PropTypes.func.isRequired,
};

export default CompareChart;
