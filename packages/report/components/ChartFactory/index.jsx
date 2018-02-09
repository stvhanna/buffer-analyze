import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
} from '@bufferapp/components';
import { Table as SummaryTable, Title as SummaryTitle } from '@bufferapp/summary-table';
import { Table as PostsSummary, Title as PostsSummaryTitle } from '@bufferapp/posts-summary-table';
import { Table as AverageTable, Title as AverageTitle } from '@bufferapp/average-table';
import { Title as ContextualTitle } from '@bufferapp/contextual-compare';
import { Table as PostsTable, Title as PostsTitle } from '@bufferapp/posts-table';
import { Chart as CompareChart, Title as CompareTitle } from '@bufferapp/compare-chart';
import { Title as AudienceTitle } from '@bufferapp/audience-chart';
import { Chart as ComparisonChart, Title as ComparisonTitle } from '@bufferapp/comparison-chart';
import {
  CommonChart,
  ProfileBadge,
} from '@bufferapp/analyze-shared-components';
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
};

const Separator = styled.section`
  border-top: 1px solid #343E47;
  padding-top: 1.25rem;
  margin-top: 5rem;
  position: relative;
`;

const ProfileString = styled.span`
  color: #717A86;
  margin-right: .75rem;
`;

const Profile = styled.span`
  color: #343E47;
  position: relative;
`;

const Legend = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const TitleWrapper = styled.div`
  min-height: 48px;
`;

const ProfileLegend = ({ profile }) =>
  <Text weight="bold">
    <Legend>
      <ProfileString>Showing for accounts</ProfileString>
      <ProfileBadge
        avatarUrl={profile.avatarUrl}
        service={profile.service}
        avatarSize={22}
        socialIconSize={13}
      />
      <Profile>{profile.username}</Profile>
    </Legend>
  </Text>;

ProfileLegend.propTypes = {
  profile: PropTypes.shape({
    service: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
};

const ChartFactory = ({ charts, moveUp, moveDown, deleteChart, exporting }) =>
  charts.map((chart, index) => (
    <Separator key={chart._id}>
      <TitleWrapper>
        {React.createElement(CHARTS[chart.chart_id].title, { ...chart })}
        {!exporting && <ChartEditButtons
          moveUp={moveUp}
          moveDown={moveDown}
          deleteChart={deleteChart}
          id={chart._id}
          first={index === 0}
          last={index === charts.length - 1}
        />}
      </TitleWrapper>
      {chart.profile_id && <ProfileLegend profile={chart.profile} />}
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
