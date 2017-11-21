import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
} from '@bufferapp/components';
import { Table as SummaryTable, Title as SummaryTitle } from '@bufferapp/summary-table';
import { Table as PostsSummary, Title as PostsSummaryTitle } from '@bufferapp/posts-summary-table';
import { Table as AverageTable, Title as AverageTitle } from '@bufferapp/average-table';
import { ChartContent as HourlyCharts, Title as HourlyTitle } from '@bufferapp/hourly-chart';
import { Table as TopPostsTable, Title as TopPostsTitle } from '@bufferapp/top-posts-table';
import { Chart as ContextualChart, Title as ContextualTitle } from '@bufferapp/contextual-compare';
import { Chart as CompareChart, Title as CompareTitle } from '@bufferapp/compare-chart';
import styled from 'styled-components';

import ChartEditButtons from '../ChartEditButtons';

const CHARTS = {
  'summary-table': {
    chart: SummaryTable,
    title: SummaryTitle,
  },
  'posts-summary': {
    chart: PostsSummary,
    title: PostsSummaryTitle,
  },
  average: {
    chart: AverageTable,
    title: AverageTitle,
  },
  'hourly-engagements': {
    chart: HourlyCharts,
    title: HourlyTitle,
  },
  'top-posts': {
    chart: TopPostsTable,
    title: TopPostsTitle,
  },
  'contextual-compare': {
    chart: ContextualChart,
    title: ContextualTitle,
  },
  compare: {
    chart: CompareChart,
    title: CompareTitle,
  },
};

const Separator = styled.section`
  border-top: 1px solid #343E47;
  padding-top: 1.25rem;
  margin-top: 5rem;
  position: relative;
`;

const ProfileString = styled.span`
  color: #717A86;
`;

const Profile = styled.span`
  color: #343E47;
  position: relative;
`;

const ProfileLegend = ({ profile }) =>
  <Text weight="bold">
    <ProfileString>Showing for accounts</ProfileString>
    <Profile> {profile.username}</Profile>
  </Text>;

ProfileLegend.propTypes = {
  profile: PropTypes.shape({
    service: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
};

const ChartFactory = ({ charts, moveUp, moveDown, deleteChart }) =>
  charts.map((chart, index) => (
    <Separator key={chart._id}>
      {React.createElement(CHARTS[chart.chart_id].title)}
      <ChartEditButtons
        moveUp={moveUp}
        moveDown={moveDown}
        deleteChart={deleteChart}
        id={chart._id}
        first={index === 0}
        last={index === charts.length - 1}
      />
      <ProfileLegend profile={chart.profile} />
      {React.createElement(CHARTS[chart.chart_id].chart, {
        ...chart,
        timezone: chart.profile.timezone,
        service: chart.profile.service,
      })}
    </Separator>
  ));

ChartFactory.propTypes = {
  charts: PropTypes.arrayOf(PropTypes.shape({
    profile: PropTypes.shape({
      service: PropTypes.string,
      username: PropTypes.string,
    }),
    chart_id: PropTypes.string,
  })),
  moveUp: PropTypes.func.isRequired,
  moveDown: PropTypes.func.isRequired,
  deleteChart: PropTypes.func.isRequired,
};

export default ChartFactory;
