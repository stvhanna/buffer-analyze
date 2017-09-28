import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Text,
} from '@bufferapp/components';

import {
  ChartStateNoData as NoData,
  ChartStateLoading as Loading,
} from '@bufferapp/analyze-shared-components';

import {
  geyser,
} from '@bufferapp/components/style/color';

const ContextualCompare = ({
  className,
  dailyData,
  loading,
}) => (<div style={{ margin: '0 0 1.5rem' }}>
  <div className={className}>
    {loading && <Loading active text="Contextual Compare chart loading..." />}
    {dailyData.length === 0 && !loading && <NoData />}
    {dailyData.length > 1 && !loading && <div>
      <Text>Contextual Compare</Text>
    </div>}
  </div>
</div>);

ContextualCompare.defaultProps = {
  loading: false,
};

ContextualCompare.propTypes = {
  dailyData: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string.isRequired,
    metrics: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string.isRequired,
      diff: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      previousValue: PropTypes.number.isRequired,
      postsCount: PropTypes.number.isRequired,
    })),
  })).isRequired,
  loading: PropTypes.bool,
  className: PropTypes.string.isRequired,
};

const ContextualCompareStyled = styled(ContextualCompare)`
  padding: 0;
  margin: 0 auto;
  border-radius: 2px;
  border: solid
    ${({ loading, dailyData }) => (loading || dailyData.length === 0 ? '0' : '1px')}
    ${geyser};
  min-height: 12rem;
  position: relative;
`;

export default ContextualCompareStyled;
