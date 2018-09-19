import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text, Button } from '@bufferapp/components';

import {
  geyser,
  outerSpace,
  shuttleGray,
} from '@bufferapp/components/style/color';

import { TruncatedNumber, ArrowIcon } from '@bufferapp/analyze-shared-components';

const Row = styled.li`
  display: flex;
  align-content: stretch;
  margin: 0;
  padding: 0;
  border-color: ${geyser};
  border-bottom: 1px dotted ${geyser};
  vertical-align: center;

  &:first-child {
    border-top: 1px dotted ${geyser};
  }

  &:last-child {
    border-bottom: none;
  }
`;

const Cell = styled.div`
  width: 222px;
  position: relative;
  color: ${outerSpace};
  padding: 1.2rem 1rem 1rem 1rem;
  text-align: left;
  align-items: center;
  border-left: 1px dotted ${geyser};
  box-sizing: border-box;
  display: flex;
`;

const PostsCountCell = styled(Cell)`
  width: 140px;
`;

const NameCell = styled(Cell)`
  width: 269px;
  border-left: 0px;
  flex-shrink: 0;
`;

const HashtagCell = styled(NameCell)`
  padding: 1.2rem 1rem 1rem 1rem;
`;

const NumberCell = styled(Cell)`
  width: 46px;
  padding: 1.2rem 1rem 1rem 0;
  text-align: right;
  border-right: 1px dotted ${geyser};
  border-left: 0px;
  box-sizing: content-box;
  flex-shrink: 0;
  & > span {
    margin-left: auto;
  }
`;

const HeaderNumberCell = styled(NumberCell)`
`;

const TableRow = ({ hashtag, index }) => (<Row>
  <NumberCell>
    <Text weight="bold" size="large" color="outerSpace">{index + 1}</Text>
  </NumberCell>
  <HashtagCell>
    <Text weight="bold" color="outerSpace" >
      {hashtag.display_name}
    </Text>
  </HashtagCell>
  <PostsCountCell>
    <Text color="outerSpace" >{hashtag.posts_count}</Text>
  </PostsCountCell>
  <Cell>
    <Text color="outerSpace" >
      <TruncatedNumber>{hashtag.primary_metric}</TruncatedNumber>
    </Text>
  </Cell>
  <Cell>
    <Text color="outerSpace" >
      <TruncatedNumber showPercentSign>{hashtag.secondary_metric}</TruncatedNumber>
    </Text>
  </Cell>
</Row>);

TableRow.propTypes = {
  hashtag: PropTypes.shape({
    display_name: PropTypes.string.isRequired,
    posts_count: PropTypes.number.isRequired,
    primary_metric: PropTypes.number.isRequired,
    secondary_metric: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const SortingHolder = styled.div`
  display: inline-flex;
  margin-left: auto;
  flex-direction: column;
  height: ${props => props.sortBy === props.metricKey ? '8px' : '16px'};
  padding-top: ${props => props.sortBy === props.metricKey ? '6px' : '0px'};
  overflow: hidden;

  & > div {
    top: 0px;
    margin-top: -2px;
  }
}
`;

const Sorting = ({ forReport, metricKey, isDescending, sortBy, handleSortBy }) => (
  <SortingHolder sortBy={sortBy} metricKey={metricKey} >
    { sortBy !== metricKey && !forReport &&
      <Button noStyle onClick={() => handleSortBy({ isDescending: false, metricKey })}>
        <ArrowIcon
          upward
          color={geyser}
        />
      </Button>
    }
    { sortBy !== metricKey && !forReport &&
      <Button noStyle onClick={() => handleSortBy({ isDescending: true, metricKey })}>
        <ArrowIcon
          downward
          color={geyser}
        />
      </Button>
    }
    { sortBy === metricKey &&
      <Button
        noStyle
        disabled={forReport}
        onClick={() => handleSortBy({ isDescending: !isDescending, metricKey })}
      >
        <ArrowIcon
          downward={isDescending}
          upward={!isDescending}
          color={shuttleGray}
        />
      </Button>
    }
  </SortingHolder>
);

Sorting.propTypes = {
  forReport: PropTypes.bool,
  handleSortBy: PropTypes.func,
  isDescending: PropTypes.bool,
  metricKey: PropTypes.string,
  sortBy: PropTypes.string,
};

Sorting.defaultProps = {
  forReport: false,
  handleSortBy: null,
  isDescending: false,
  metricKey: null,
  sortBy: null,
};

export const TableHeader = ({ forReport, isDescending, sortBy, handleSortBy, labels }) => (<Row>
  <HeaderNumberCell>
    <Text size="extra-small" color="outerSpace">Rank</Text>
  </HeaderNumberCell>
  <NameCell>
    <Text size="extra-small" color="outerSpace" >Hashtag</Text>
  </NameCell>
  <PostsCountCell>
    <Text size="extra-small" color="outerSpace" >Posts</Text>
    <Sorting
      forReport={forReport}
      handleSortBy={handleSortBy}
      sortBy={sortBy}
      metricKey="posts_count"
      isDescending={isDescending}
    />
  </PostsCountCell>
  <Cell>
    <Text size="extra-small" color="outerSpace" >Average {labels.primary_metric}</Text>
    <Sorting
      forReport={forReport}
      handleSortBy={handleSortBy}
      sortBy={sortBy}
      metricKey="primary_metric"
      isDescending={isDescending}
    />
  </Cell>
  <Cell>
    <Text size="extra-small" color="outerSpace" >Average {labels.secondary_metric}</Text>
    <Sorting
      forReport={forReport}
      handleSortBy={handleSortBy}
      sortBy={sortBy}
      metricKey="secondary_metric"
      isDescending={isDescending}
    />
  </Cell>
</Row>);

TableHeader.propTypes = {
  forReport: PropTypes.bool,
  isDescending: PropTypes.bool,
  sortBy: PropTypes.string,
  handleSortBy: PropTypes.func,
  labels: PropTypes.shape({
    primary_metric: PropTypes.string,
    secondary_metric: PropTypes.string,
  }),
};

TableHeader.defaultProps = {
  forReport: false,
  isDescending: false,
  sortBy: null,
  handleSortBy: null,
  labels: {
    primary_metric: '',
    secondary_metric: '',
  },
};

export default TableRow;
