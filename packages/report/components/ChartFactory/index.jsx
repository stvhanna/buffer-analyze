import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
} from '@bufferapp/components';
import { Table as SummaryTable, Title as SummaryTitle } from '@bufferapp/summary-table';
import styled from 'styled-components';

const CHARTS = {
  'summary-table': {
    chart: SummaryTable,
    title: SummaryTitle,
  },
};

const Separator = styled.section`
  border-top: 1px solid #343E47;
  padding-top: 1.25rem;
  margin-top: 5rem;
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

const ChartFactory = ({ charts }) =>
  charts.map(chart => (
    <Separator>
      {React.createElement(CHARTS[chart.chart_id].title)}
      <ProfileLegend profile={chart.profile} />
      {React.createElement(CHARTS[chart.chart_id].chart, { ...chart })}
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
};

export default ChartFactory;
