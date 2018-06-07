import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Table as SummaryTable, Title as SummaryTitle } from '@bufferapp/summary-table';
import { Table as PostsSummary, Title as PostsSummaryTitle } from '@bufferapp/posts-summary-table';
import { Table as AverageTable, Title as AverageTitle } from '@bufferapp/average-table';
import { Title as ContextualTitle } from '@bufferapp/contextual-compare';
import { Table as PostsTable, Title as PostsTitle } from '@bufferapp/posts-table';
import { Chart as CompareChart, Title as CompareTitle } from '@bufferapp/compare-chart';
import { Title as AudienceTitle } from '@bufferapp/audience-chart';
import { Chart as ComparisonChart, Title as ComparisonTitle } from '@bufferapp/comparison-chart';
import { ChartContent as HourlyChart, Title as HourlyTitle } from '@bufferapp/hourly-chart';
import { CommonChart } from '@bufferapp/analyze-shared-components';

import ChartEditButtons from '../ChartEditButtons';
import ProfileLegend from '../ProfileLegend';
import MultiProfileLegends from '../MultiProfileLegends';

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
  posts: {
    chart: PostsTable,
    title: PostsTitle,
  },
  'contextual-compare': {
    chart: CommonChart,
    title: ContextualTitle,
  },
  compare: {
    chart: CompareChart,
    title: CompareTitle,
  },
  audience: {
    chart: CommonChart,
    title: AudienceTitle,
  },
  comparison: {
    chart: ComparisonChart,
    title: ComparisonTitle,
  },
  'hourly-engagements': {
    chart: HourlyChart,
    title: HourlyTitle,
  },
};

const Container = styled.div`
  padding: 0.5rem 0 0;
`;

const Separator = styled.section`
  position: relative;
  background: #FFFFFF;
  border: 1px solid #D9E5ED;
  border-width: 1px 0;
  padding: 1.75rem 4rem 1.75rem;
  margin: 0.5rem 0 0;
  page-break-inside: avoid;
`;

const TitleWrapper = styled.div`
  color: #333B43;
  padding: 0.5rem 0.4rem 0.1rem 0;
`;

const ProfileWrapper = styled.div`
  padding: 0.4rem 0.1rem 0.25rem;
`;

const Header = styled.div`
  margin: 0 0 1rem;
`;

const ChartFactory = ({ charts, moveUp, moveDown, deleteChart, exporting }) =>
  charts.map((chart, index) => (
    <Separator key={chart._id}>
      <Header>
        <TitleWrapper>
          {React.createElement(CHARTS[chart.chart_id].title, {
            ...chart,
            forReport: true
          })}
          {!exporting && <ChartEditButtons
            moveUp={moveUp}
            moveDown={moveDown}
            deleteChart={deleteChart}
            id={chart._id}
            first={index === 0}
            last={index === charts.length - 1}
          />}
        </TitleWrapper>
        <ProfileWrapper>
          {chart.profile_id && !chart.profileIds &&
            <ProfileLegend
              profile={chart.profile}
            />
          }
          {chart.profileIds &&
            <MultiProfileLegends
              profiles={chart.profiles}
              comparedProfileIds={chart.profileIds}
            />
          }
        </ProfileWrapper>
      </Header>
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
