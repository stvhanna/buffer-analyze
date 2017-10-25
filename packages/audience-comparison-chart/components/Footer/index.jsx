import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  geyser,
} from '@bufferapp/components/style/color';

import {
  GridItem,
  MetricIcon,
} from '@bufferapp/analyze-shared-components';

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 auto;
  border-left: solid 1px ${geyser};
  border-radius: 2px;
`;

const Wrapper = styled.section`
  min-height: 12rem;
  position: relative;
  margin: 0 0 1.5rem;
`;

const Footer = ({ profileTotals }) => (
  <Wrapper>
    <Grid>
      {profileTotals.map(total => <GridItem
        key={total.profileId}
        metric={{
          label: total.metric.label,
          value: total.currentPeriodTotal,
          diff: total.currentPeriodDiff,
        }}
        customLabel={
          <span>
            <MetricIcon key={total.profileId} metric={total.metric} />
            {total.metric.label}
          </span>
        }
      />)}
    </Grid>
  </Wrapper>
);

Footer.defaultProps = {
  loading: false,
};

Footer.propTypes = {
  profileTotals: PropTypes.arrayOf(PropTypes.shape({
    metric: PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
    currentPeriodTotal: PropTypes.number.isRequired,
    currentPeriodDiff: PropTypes.number.isRequired,
    profileId: PropTypes.string.isRequired,
  })).isRequired,
};

export default Footer;

