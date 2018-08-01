import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  ChartStateLoading as Loading,
  ChartCard,
  ChartHeader,
} from '@bufferapp/analyze-shared-components';

import { Text } from '@bufferapp/components';

import {
  geyser,
} from '@bufferapp/components/style/color';

import Title from '../Title';
import ProfileItem from './components/ProfileItem';

const ChartContainer = styled.div`
  position: relative;
  border-radius: 2px;
  font-size: 12px;
  min-height: 177px;
`;

const METRIC_LABELS = {
  followers: 'Followers',
  reach: 'Impressions',
  engagement_rate: 'Engagement rate',
};

const ProfilesTableWrapper = styled.table`
  padding: 0;
  margin: 0;
  width: 100%;
`;

const GridContainer = styled.div`
  position: relative;
`;

const StyledTableHeader = styled.th`
  text-align: left;
  align-items: center;
  border-top: 1px dotted ${geyser};
  border-bottom: 1px dotted ${geyser};
  border-right: 1px dotted ${geyser};
  padding: 1rem 1rem 1.25rem 1.5rem;

  &:last-child {
    border-right: none;
  }
`;

const TableHeader = ({ children }) => (
  <StyledTableHeader>
    <Text size="small" color="shuttleGray">{children}</Text>
  </StyledTableHeader>
);

TableHeader.propTypes = {
  children: PropTypes.node.isRequired,
};


export const Table = ({ metrics, profiles, ...props }) => (
  <ChartContainer>
    <ProfilesTableWrapper>
      <tbody>
        <tr>
          <TableHeader key={'profiles'}>Profiles</TableHeader>
          {Object.values(METRIC_LABELS).map(label => (<TableHeader key={label}>{label}</TableHeader>))}
        </tr>
        {profiles.map(profile =>
          <ProfileItem
            metrics={metrics[profile.id]}
            profile={profile}
            key={profile.id}
            metricKeys={Object.keys(METRIC_LABELS)}
            {...props}
          />,
        )}
      </tbody>
    </ProfilesTableWrapper>
  </ChartContainer>
);

Table.propTypes = {
  metrics: PropTypes.shape(
    PropTypes.arrayOf(PropTypes.shape({
      diff: PropTypes.number,
      value: PropTypes.number,
    }))).isRequired,
  profiles: PropTypes.arrayOf(PropTypes.shape({
    service: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
};

const ProfilesTable = ({ metrics, profiles, ...props }) => {
  let content = null;
  if (profiles.length === 0) {
    content = <Loading active noBorder large />;
  } else {
    content = (
      <div>
        <Table
          metrics={metrics}
          profiles={profiles}
          {...props}
        />
      </div>
    );
  }

  return (
    <ChartCard>
      <ChartHeader>
        <Title />
        <Text size="small" color="lightSlate">
          Updated daily compared with previous day
        </Text>
      </ChartHeader>
      <GridContainer>
        {content}
      </GridContainer>
    </ChartCard>
  );
};

ProfilesTable.defaultProps = {
  metrics: {},
  profiles: [],
};

ProfilesTable.propTypes = {
  metrics: PropTypes.shape(
    PropTypes.arrayOf(PropTypes.shape({
      diff: PropTypes.number,
      value: PropTypes.number,
    }))),
  profiles: PropTypes.arrayOf(PropTypes.shape({
    service: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })),
};

export default ProfilesTable;
