import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '@bufferapp/components/Text';
import {
  ChartStateNoData as NoData,
  ChartStateLoading as Loading,
  ChartCard,
  ChartHeader,
  MetricsDropdown,
} from '@bufferapp/analyze-shared-components';
import { geyser } from '@bufferapp/components/style/color';
import AddReport from '@bufferapp/add-report';
import Title from '../Title';

function expandGenderAgeLabel(label) {
  return label.replace(/^M\./, 'Male, ').replace(/^F\./, 'Female, ').replace(/^U./, 'Unknown, ');
}

const HeadersActions = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const HeaderSpacer = styled.div`
  margin-right: 0.5rem;
  width: 1px;
  background: ${geyser};
  height: 30px;
}
`;

const GridContainer = styled.div`
  position: relative;
  padding: 0.75rem 1.5rem 1rem;
`;


function getSelectedMetricsGroup(metrics, selectedGroup) {
  return metrics.find(group => group.key === selectedGroup);
}

export const Chart = ({ metrics, selectedGroup }) =>
  null;

Chart.propTypes = {
  metrics: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    metrics: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      values: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
      })),
    })).isRequired,
  })).isRequired,
  selectedGroup: PropTypes.string.isRequired,
};

const AudienceGenderAgeChart = ({
  metrics,
  loading,
  selectedGroup,
  isDropdownOpen,
  openDropdown,
  closeDropdown,
  selectMetricsGroup,
}) => {
  let content = null;
  if (loading) {
    content = <Loading active noBorder />;
  } else if (metrics.length === 0) {
    content = <NoData />;
  } else {
    content = <Chart metrics={metrics} selectedGroup={selectedGroup} />;
  }

  return (
    <ChartCard>
      <ChartHeader>
        <Title />
        <HeadersActions>
          {metrics.length > 1 &&
            <MetricsDropdown
              metrics={metrics}
              selectedMetricLabel={getSelectedMetricsGroup(metrics, selectedGroup).label}
              isDropdownOpen={isDropdownOpen}
              selectMetric={selectMetricsGroup}
              openDropdown={openDropdown}
              closeDropdown={closeDropdown}
              iconless
              inHeader
            />
          }
          {metrics.length > 1 && <HeaderSpacer />}
          {metrics.length > 0 && <AddReport
            chart="demographic-overview"
            state={{
              selectedGroup,
            }}
          />}
        </HeadersActions>
      </ChartHeader>
      <GridContainer id="js-dom-to-png-gender-age">
        {content}
      </GridContainer>
    </ChartCard>
  );
};

AudienceGenderAgeChart.defaultProps = {
  closeDropdown: null,
  isDropdownOpen: false,
  loading: false,
  openDropdown: null,
  selectMetricsGroup: null,
  selectedGroup: '',
};

AudienceGenderAgeChart.propTypes = {
  closeDropdown: PropTypes.func,
  isDropdownOpen: PropTypes.bool,
  loading: PropTypes.bool,
  metrics: PropTypes.arrayOf(PropTypes.shape({ })).isRequired,
  openDropdown: PropTypes.func,
  selectMetricsGroup: PropTypes.func,
  selectedGroup: PropTypes.string,
};

export default AudienceGenderAgeChart;
