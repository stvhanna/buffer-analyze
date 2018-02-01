import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AddReport from '@bufferapp/add-report';

import {
  ChartStateNoData as NoData,
  ChartStateLoading as Loading,
  ChartCard,
  ChartHeader,
  CommonChart as Chart,
} from '@bufferapp/analyze-shared-components';

import Title from '../Title';
import Header from '../Header';

const AudienceChart = ({
  className,
  data,
  loading,
  ...props
}) => (
  <ChartCard>
    <ChartHeader>
      <Title dailyData={data} />
      <AddReport
        chart="audience"
        state={{
          mode: props.mode,
          selectedMetrics: props.selectedMetrics,
          profileService: props.profileService,
        }}
      />
    </ChartHeader>
    <div className={className}>
      {loading && <Loading active noBorder />}
      {data.length === 0 && !loading && <NoData />}
      {data.length >= 1 && !loading && <div>
        <Header {...props} />
        <Chart {...props} pngExportId="audience" data={data} />
      </div>}
    </div>
  </ChartCard>
);

AudienceChart.defaultProps = {
  loading: false,
  mode: 1,
};

AudienceChart.propTypes = {
  className: PropTypes.string.isRequired,
  profileService: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string.isRequired,
    metrics: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string,
      label: PropTypes.string,
    })),
  })).isRequired,
  loading: PropTypes.bool,
  selectedMetrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
  })).isRequired,
  mode: PropTypes.number,
};

const AudienceChartStyled = styled(AudienceChart)`
  margin: 0 auto;
  padding: 1.25rem;
  position: relative;
`;

export default AudienceChartStyled;
