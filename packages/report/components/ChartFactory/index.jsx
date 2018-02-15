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
    title: 'Performance',
  },
  'posts-summary': {
    chart: PostsSummary,
    title: 'Posts Summary',
  },
  average: {
    chart: AverageTable,
    title: 'Averages',
  },
  posts: {
    chart: PostsTable,
    title: 'Posts breakdown',
  },
  'contextual-compare': {
    chart: CommonChart,
    title: 'Answers',
  },
  compare: {
    chart: CompareChart,
    title: 'Compare',
  },
  audience: {
    chart: CommonChart,
    title: 'Audience',
  },
  comparison: {
    chart: ComparisonChart,
    title: 'Comparison',
  },
};

const Separator = styled.section`
  padding-top: 1.25rem;
  margin-top: 4rem;
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
  background: #343E47;
  color: #FFFFFF;
  padding: 0.5rem;
`;

const ProfileWrapper = styled.div`
  padding: 0.5rem 0.5rem 0.25rem;
`;

const ProfileTexts = styled.div`
  
`;

const URL = styled.div`
  font-size: 0.75rem;
  color: #CCCCCC;
`;

const Container = styled.div``;

const ProfileLegend = ({ profile }) =>
  <Legend>
    <ProfileBadge
      avatarUrl={profile.avatarUrl}
      service={profile.service}
      avatarSize={22}
      socialIconSize={24}
    />
    <ProfileTexts>
      <Profile><Text weight="bold" size="small">{profile.username}</Text></Profile>
      <URL><Text weight="medium" color="grey" size="small">facebook.com/username</Text></URL>
    </ProfileTexts>
  </Legend>;

ProfileLegend.propTypes = {
  profile: PropTypes.shape({
    service: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
};

const ChartFactory = ({ charts, moveUp, moveDown, deleteChart, exporting }) =>
  charts.map((chart, index) => (
    <Separator key={chart._id}>
      <Container>
        <TitleWrapper>
          <Text color="white" weight="medium" size="medium">{CHARTS[chart.chart_id].title}</Text>
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
          {chart.profile_id && <ProfileLegend profile={chart.profile} />}
        </ProfileWrapper>
      </Container>
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
