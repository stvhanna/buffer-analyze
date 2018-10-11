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
import { PeopleIcon, LocationIcon } from './icons';

function expandGenderAgeLabel(label) {
  return label.replace(/^M\./, 'Male, ').replace(/^F\./, 'Female, ').replace(/^U./, 'Unknown, ');
}

const HeadersActions = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 auto 22px auto;
  list-style: none;
`;

const GridItemContainer = styled.li`
  width: 50%;
`;

const GridItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 auto;
  align-items: center;
`;

const GridContainer = styled.div`
  position: relative;
  padding: 0.75rem 1.5rem 1rem;
`;

const GridContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderSpacer = styled.div`
  margin-right: 0.5rem;
  width: 1px;
  background: ${geyser};
  height: 30px;
}
`;

const Metric = ({ metric }) =>
  <GridItemContainer>
    {metric.key === 'gender_age' &&
      <GridItem>
        <PeopleIcon />
        <GridContent>
          <Text weight="medium" >Top gender and age</Text>
          <Text weight="medium" size="large" color="black" >{expandGenderAgeLabel(metric.values[0].label)}</Text>
        </GridContent>
      </GridItem>
    }
    {metric.key === 'city' &&
      <GridItem>
        <LocationIcon />
        <GridContent>
          <Text weight="medium" >Top place</Text>
          <Text weight="medium" size="large" color="black" >{expandGenderAgeLabel(metric.values[0].label)}</Text>
        </GridContent>
      </GridItem>
    }
  </GridItemContainer>;

Metric.propTypes = {
  metric: PropTypes.shape({
    key: PropTypes.string.isRequired,
    values: PropTypes.string.isRequired,
  }).isRequired,
};

function getSelectedMetricsGroup(metrics, selectedGroup) {
  return metrics.find(group => group.key === selectedGroup);
}

export const Table = ({ metrics, selectedGroup }) =>
  <Grid>
    {getSelectedMetricsGroup(metrics, selectedGroup)
      .metrics.map(metric => <Metric metric={metric} />)
    }
  </Grid>;

Table.propTypes = {
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

const AudienceOverviewTable = ({
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
    content = <Table metrics={metrics} selectedGroup={selectedGroup} />;
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
      <GridContainer id="js-dom-to-png-summary">
        {content}
      </GridContainer>
    </ChartCard>
  );
};

AudienceOverviewTable.defaultProps = {
  closeDropdown: null,
  isDropdownOpen: false,
  loading: false,
  openDropdown: null,
  selectMetricsGroup: null,
  selectedGroup: '',
};

AudienceOverviewTable.propTypes = {
  closeDropdown: PropTypes.func,
  isDropdownOpen: PropTypes.bool,
  loading: PropTypes.bool,
  metrics: PropTypes.arrayOf(PropTypes.shape({ })).isRequired,
  openDropdown: PropTypes.func,
  selectMetricsGroup: PropTypes.func,
  selectedGroup: PropTypes.string,
};

export default AudienceOverviewTable;