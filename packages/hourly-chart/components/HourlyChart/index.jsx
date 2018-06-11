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

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
`;

const ChartContainer = styled.div`
  padding: 0.5rem 0.75rem 0rem;
  margin: 0 auto;
  position: relative;
  min-height: 474px;
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
          secondaryMetric={this.props.secondaryMetric}
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
        <Legend metric={this.props.selectedMetric} secondaryMetric={this.props.secondaryMetric} />
      </div>
    );
  }
}

ChartContent.defaultProps = {
  secondaryMetric: null,
  postsCount: [],
  timezone: 'America/Los_Angeles',
};

ChartContent.propTypes = {
  selectedMetric: PropTypes.shape({
    label: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  secondaryMetric: PropTypes.shape({
    label: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  }),
  postsCount: PropTypes.arrayOf(PropTypes.number),
  timezone: PropTypes.string,
};

const getStateForReport = props => ({
  selectedMetric: props.loading ? null : props.selectedMetric.label,
  secondaryMetric: props.secondaryMetric ? props.secondaryMetric.label : null,
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
        {props.loading && (
          <Container>
            <Loading active noBorder />
          </Container>
        )}
        {!props.loading &&
          <div>
            <Header {...props} />
            <ChartContent
              postsCount={props.postsCount}
              timezone={props.timezone}
              selectedMetric={props.selectedMetric}
              secondaryMetric={props.secondaryMetric}
            />
          </div>
        }
      </ChartContainer>
    </ChartCard>
  );
};

HourlyChart.defaultProps = {
  loading: false,
  secondaryMetric: null,
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
  secondaryMetric: PropTypes.shape({
    label: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  }),
  postsCount: PropTypes.arrayOf(PropTypes.number),
  timezone: PropTypes.string,
};

export default HourlyChart;
