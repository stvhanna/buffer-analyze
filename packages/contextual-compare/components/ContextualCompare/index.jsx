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

const ContextualCompare = ({
  className,
  data,
  loading,
  profileService,
  ...props
}) => {
  return (
    <ChartCard>
      <ChartHeader>
        <Title />
        <AddReport
          chart="contextual-compare"
          state={{
            mode: props.mode,
            selectedMetrics: props.selectedMetrics,
            selectedPreset: props.selectedPreset,
            profileService,
          }}
        />
      </ChartHeader>
      <div className={className}>
        {loading && <Loading active noBorder />}
        {data.length === 0 && !loading && <NoData />}
        {data.length >= 1 && !loading && <div>
          <Header {...props} />
          <Chart
            mode={props.mode}
            presets={props.presets}
            profileService={profileService}
            selectedMetrics={props.selectedMetrics}
            selectedPreset={props.selectedPreset}
            timezone={props.timezone}
            pngExportId="contextual"
            data={data}
          />
        </div>}
      </div>
    </ChartCard>
  );
};

ContextualCompare.defaultProps = {
  loading: false,
  presets: null,
};

ContextualCompare.propTypes = {
  timezone: PropTypes.string.isRequired,
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
  selectedPreset: PropTypes.number.isRequired,
  selectedMetrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
  })).isRequired,
  mode: PropTypes.number.isRequired,
  presets: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
      metrics: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        label: PropTypes.string,
        value: PropTypes.number.isRequired,
      })),
    })),
  })),
};

const ContextualCompareStyled = styled(ContextualCompare)`
  margin: 0 auto;
  padding: 1.25rem;
  position: relative;
`;

export default ContextualCompareStyled;
