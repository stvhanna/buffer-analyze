import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  MetricIcon,
} from '@bufferapp/analyze-shared-components';

import { curiousBlue } from '@bufferapp/components/style/color';
import { Text } from '@bufferapp/components';

const Tag = styled.span`
  border-radius: 2px;
  padding: .25rem .5rem;
  color: white;
  font-weight: bold;
  background-color: ${curiousBlue};
  margin-left: .25rem;
`;

const Legend = styled.section`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`;

const FilterLegend = styled.section`
  width: 40rem;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  display: flex;
  align-items: center;
`;

const Fade = styled.span`
  background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255, 255, 255, 1) 100%);
  display: block;
  position: absolute;
  right: -1px;
  top: 0;
  bottom: 0;
  z-index: 1;
  width: 4rem;
`;

const SortByLegend = styled.section`
  padding: 0 0 0 1rem;
  width: 220px;
  box-sizing: border-box;
`;

const MetricWrapper = styled.span`
  margin-left: .25rem;
`;

const BreakdownLegend = ({ posts, searchTerms, selectedMetric }) => (
  <Legend>
    <FilterLegend>
      <Text color="outerSpace" size="extra-small" weight="bold">Showing {posts} {posts > 1 ? 'posts' : 'post' } { searchTerms.length ? 'filtered by' : 'in total' }</Text>
      {searchTerms.map(term => <Tag><Text color="white" size="extra-small">{term}</Text></Tag>)}
      <Fade />
    </FilterLegend>
    <SortByLegend>
      <Text color="outerSpace" size="extra-small" weight="bold">Sorted by <MetricWrapper><MetricIcon metric={selectedMetric} /></MetricWrapper> {selectedMetric.label}</Text>
    </SortByLegend>
  </Legend>
);

BreakdownLegend.defaultProps = {
  searchTerms: [],
};

BreakdownLegend.propTypes = {
  searchTerms: PropTypes.arrayOf(PropTypes.string),
  posts: PropTypes.number.isRequired,
  selectedMetric: PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  descending: PropTypes.bool.isRequired,
}

export default BreakdownLegend;
