import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  ChartStateLoading as Loading,
  ChartCard,
  ChartHeader,
} from '@bufferapp/analyze-shared-components';

import AddReport from '@bufferapp/add-report';
import PostCountByHour from '../PostCountByHour';
import HourlyEngagementChart from '../HourlyEngagementChart';
import Legend from '../Legend';
import Title from '../Title';
import Header from '../ChartHeader';

const ChartContainer = styled.div`
  padding: 0.5rem 0.75rem 0rem;
  margin: 0 auto;
  position: relative;
`;

export class ChartContent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ref: null,
    };
  }
  render() {
    return (
      <div>
        <HourlyEngagementChart
          posts={this.props.postsCount}
          metric={this.props.selectedMetric}
          timezone={this.props.timezone}
          chartRef={(node) => {
            this._chart = node;
            if (!this.state.ref) {
              this.setState({
                ref: true,
              });
            }
          }}
        />
        <PostCountByHour
          posts={this.props.postsCount}
          hourlyChart={this._chart}
          timezone={this.props.timezone}
        />
        <Legend metric={this.props.selectedMetric} />
      </div>
    );
  }
}

ChartContent.defaultProps = {
  postsCount: [],
  timezone: 'America/Los_Angeles',
};

ChartContent.propTypes = {
  selectedMetric: PropTypes.shape({
    label: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  postsCount: PropTypes.arrayOf(PropTypes.number),
  timezone: PropTypes.string,
};

const getStateForReport = props => ({
  selectedMetric: props.loading ? null : props.selectedMetric.label
});

const HourlyChart = (props) => {
  if (props.profileService !== 'twitter') {
    return null;
  }
  return (
    <ChartCard>
      <ChartHeader>
        <Title />
        <AddReport
          chart="hourly-engagements"
          state={getStateForReport(props)}
        />
      </ChartHeader>
      <ChartContainer id="js-dom-to-png-hourly-engagements">
        {props.loading && <Loading active noBorder large />}
        {!props.loading &&
          <div>
            <Header {...props} />
            <ChartContent
              postsCount={props.postsCount}
              timezone={props.timezone}
              selectedMetric={props.selectedMetric}
            />
          </div>
        }
      </ChartContainer>
    </ChartCard>
  );
};

HourlyChart.defaultProps = {
  loading: false,
  selectedMetric: null,
  postsCount: [],
  timezone: 'America/Los_Angeles',
  profileService: '',
};

HourlyChart.propTypes = {
  loading: PropTypes.bool,
  profileService: PropTypes.string,
  selectedMetric: PropTypes.shape({
    label: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  }),
  postsCount: PropTypes.arrayOf(PropTypes.number),
  timezone: PropTypes.string,
};

export default HourlyChart;
