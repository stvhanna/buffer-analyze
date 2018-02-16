import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from '@bufferapp/components';
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
  ChartTitle,
  ProfileBadge,
} from '@bufferapp/analyze-shared-components';
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
  background: transparent;
  color: #333B43;
  padding: 0.5rem 0.4rem 0.5rem 0;
  border: 2px solid #333B43;
  border-width: 0 0 2px;
`;

const ProfileWrapper = styled.div`
  padding: 0.5rem 0.5rem 0.25rem 0.1rem;
`;

const ProfileText = styled.div`
  margin: 0 0 0 -3px
`;

const URL = styled.div`
  font-size: 0.75rem;
  color: #919DA8;
  text-transform: lowercase;
`;

const Container = styled.div``;

const ProfileLegend = ({ profile }) =>
  <Legend>
    <ProfileBadge
      avatarUrl={profile.avatarUrl}
      service={profile.service}
      avatarSize={22}
      socialIconSize={22}
    />
    <ProfileText>
      <Text weight="bold" size="small">
        <Profile>{profile.username}</Profile>
      </Text>
      <Text weight="medium" size="small">
        <URL>{profile.service}.com/{profile.username}</URL>
      </Text>
    </ProfileText>
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
          {React.createElement(CHARTS[chart.chart_id].title, {...chart, forReport: true})}
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
