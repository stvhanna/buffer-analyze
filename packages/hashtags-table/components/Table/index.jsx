import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  ChartStateLoading as Loading,
  ChartCard,
  ChartHeader,
  ChartTitle,
} from '@bufferapp/analyze-shared-components';

import NoData from '../NoData';
import TableRow, { TableHeader } from '../TableRows';
import AddReport from '@bufferapp/add-report';

const ChartContainer = styled.div`
  position: relative;
  border-radius: 2px;
  font-size: 12px;
`;

const HashtagsTableWrapper = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const GridContainer = styled.div`
  position: relative;
`;

function sortHashtags(hashtags, metricKey, descending) {
  return hashtags.sort((a, b) => {
    let value = 0;
    if (a[metricKey] > b[metricKey]) {
      value = 1;
    } else if (a[metricKey] < b[metricKey]) {
      value = -1;
    }

    if (descending) {
      value *= -1;
    }

    return value;
  });
}

function getFilteredMetrics(hashtags, sortBy, isDescending, numToShow) {
  return sortHashtags(
    hashtags,
    sortBy,
    isDescending,
  ).slice(0, numToShow);
}

export const Table = ({
  forReport,
  handleSortBy,
  hashtags,
  isDescending,
  labels,
  numToShow,
  sortBy,
}) => (
  <ChartContainer>
    <HashtagsTableWrapper>
      <TableHeader
        forReport={forReport}
        labels={labels}
        sortBy={sortBy}
        isDescending={isDescending}
        handleSortBy={handleSortBy}
      />
      {getFilteredMetrics(
        hashtags,
        sortBy,
        isDescending,
        numToShow,
      ).map((hashtag, index) =>
        <TableRow
          key={hashtag.display_name}
          index={index}
          hashtag={hashtag}
        />,
      )}
    </HashtagsTableWrapper>
  </ChartContainer>
);

Table.propTypes = {
  hashtags: PropTypes.arrayOf(PropTypes.shape({
    display_name: PropTypes.string,
    posts_count: PropTypes.number,
    primary_metric: PropTypes.number,
    secondary_metric: PropTypes.number,
  })).isRequired,
  labels: PropTypes.shape({
    primary_metric: PropTypes.string,
    secondary_metric: PropTypes.string,
  }).isRequired,
  sortBy: PropTypes.string.isRequired,
  numToShow: PropTypes.number.isRequired,
  isDescending: PropTypes.bool.isRequired,
  handleSortBy: PropTypes.func.isRequired,
  forReport: PropTypes.bool,
};

Table.defaultProps = {
  forReport: false
};

export const Title = () => (
  <ChartTitle>Hashtag performance</ChartTitle>
);

const HashtagsTable = (props) => {
  const {
    hashtags,
    isDescending,
    sortBy,
    numToShow,
    loading,
  } = props;

  let content = null;
  if (loading) {
    content = <Loading active noBorder large />;
  } else if (hashtags.length === 0) {
    content = (<ChartContainer><NoData {...props} /></ChartContainer>);
  } else {
    content = (
      <div id="js-dom-to-png-hashtags">
        <Table
          {...props}
        />
      </div>
    );
  }

  return (
    <ChartCard>
      <ChartHeader>
        <Title />
        {hashtags.length > 0 && <AddReport
          chart="hashtags-table"
          state={{
            isDescending,
            sortBy,
            numToShow,
          }}
        />}
      </ChartHeader>
      <GridContainer>
        {content}
      </GridContainer>
    </ChartCard>
  );
};

HashtagsTable.defaultProps = {
  loading: false,
};

HashtagsTable.propTypes = {
  loading: PropTypes.bool,
  hashtags: PropTypes.arrayOf(PropTypes.shape({
    display_name: PropTypes.string,
    posts_count: PropTypes.number,
    avg_impressions: PropTypes.number,
    avg_engagement: PropTypes.number,
  })).isRequired,
  sortBy: PropTypes.string.isRequired,
  numToShow: PropTypes.number.isRequired,
  isDescending: PropTypes.bool.isRequired,
};

export default HashtagsTable;
