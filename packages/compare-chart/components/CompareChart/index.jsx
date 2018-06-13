import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  ChartStateNoData as NoData,
  ChartStateLoading as Loading,
  ChartCard,
  ChartHeader,
  ModeToggle,
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
  totalPeriodDaily,
  selectedMetricLabel,
  totals,
  timezone,
  visualizePreviousPeriod,
  profileService,
  dailyMode,
}) => {
  const dailyData = dailyMode === 1 ? totalPeriodDaily : daily;
  if (dailyData.length === 0) {
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
        totalPeriodDaily={totalPeriodDaily}
        dailyMode={dailyMode}
        selectedMetricLabel={selectedMetricLabel}
        timezone={timezone}
        visualizePreviousPeriod={visualizePreviousPeriod}
        profileService={profileService}
      />
      <Footer
        startDate={getStartDate(dailyData)}
        endDate={getEndDate(dailyData)}
        selectedMetricLabel={selectedMetricLabel}
        totals={totals}
      />
    </div>
  );
};

ChartWithFooter.propTypes = {
  totalPeriodDaily: PropTypes.arrayOf(PropTypes.shape({
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
  dailyMode: PropTypes.number.isRequired,
  visualizePreviousPeriod: PropTypes.bool.isRequired,
  selectedMetricLabel: PropTypes.string.isRequired,
};

const CompareChart = ({
  daily,
  totalPeriodDaily,
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
  const dailyData = dailyMode === 1 ? totalPeriodDaily : daily;
  if (loading) {
    content = <Loading active noBorder large />;
  } else {
    content = (
      <ChartWithFooter
        daily={daily}
        totalPeriodDaily={totalPeriodDaily}
        dailyMode={dailyMode}
        selectedMetricLabel={selectedMetricLabel}
        timezone={timezone}
        visualizePreviousPeriod={visualizePreviousPeriod}
        profileService={profileService}
        dailyData={dailyData}
        totals={totals}
      />
    );
    if (dailyData.length > 0) {
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
          {profileService === 'twitter' &&
            <ModeToggle
              baseModeLabel="Daily"
              secondaryModeLabel="Period Total"
              active={dailyMode === 1}
              handleClick={selectDailyMode}
            />
          }
          <PeriodToggle handleClick={togglePreviousPeriod} active={visualizePreviousPeriod} />
        </Header>
      );
    }
  }

  return (
    <ChartCard>
      <ChartHeader>
        <Title
          startDate={getStartDate(dailyData)}
          endDate={getEndDate(dailyData)}
        />
        <AddReport
          chart="compare"
          state={{
            visualizePreviousPeriod,
            selectedMetricLabel,
            profileService,
            dailyMode,
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
  totalPeriodDaily: [],
  profileService: '',
};

CompareChart.propTypes = {
  loading: PropTypes.bool,
  totalPeriodDaily: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string,
    metrics: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string,
      diff: PropTypes.number,
      label: PropTypes.string,
      value: PropTypes.number,
      previousValue: PropTypes.number,
      postsCount: PropTypes.number,
    })),
  })),
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
  selectDailyMode: PropTypes.func.isRequired,
  dailyMode: PropTypes.number.isRequired,
};

export default CompareChart;
