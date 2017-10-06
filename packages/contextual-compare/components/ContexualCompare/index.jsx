import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  geyser,
} from '@bufferapp/components/style/color';

import {
  ChartStateNoData as NoData,
  ChartStateLoading as Loading,
} from '@bufferapp/analyze-shared-components';

import Title from '../Title';
import Header from '../Header';
import Footer from '../Footer';

const ContextualCompare = ({
  className,
  dailyData,
  loading,
  ...props
}) => (<div style={{ margin: '0 0 1.5rem' }}>
  {dailyData.length > 1 && !loading && <Title dailyData={dailyData} />}
  <div className={className}>
    {loading && <Loading active text="Engagement & Audience chart loading..." />}
    {dailyData.length === 0 && !loading && <NoData />}
    {dailyData.length > 1 && !loading && <div>
      <Header {...props} />
      <Footer {...props} />
    </div>}
  </div>
</div>);

ContextualCompare.defaultProps = {
  loading: false,
};

ContextualCompare.propTypes = {
  className: PropTypes.string.isRequired,
  dailyData: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string.isRequired,
    metrics: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })),
  })).isRequired,
  loading: PropTypes.bool,
};

const ContextualCompareStyled = styled(ContextualCompare)`
  margin: 0 auto;
  padding: 1.25rem;
  border-radius: 2px;
  border: solid
    ${({ loading, dailyData }) => (loading || dailyData.length === 0 ? '0' : '1px')}
    ${geyser};
  min-height: 12rem;
  position: relative;
`;

export default ContextualCompareStyled;
