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
  display: 'flex',
  flexWrap: 'wrap',
  padding: '0',
  margin: '0 auto',
  borderLeft: solid 1px ${geyser},
  borderRadius: '2px',
`;

const Wrapper = styled.section`
  minHeight: '12rem',
  position: 'relative',
  margin: '0 0 1.5rem',
`;

const Footer = ({ metric }) => {
  const currentMetric = Object.assign({}, metric, {
    key: `${metric.label}_current`,
  });
  return (
    <Wrapper>
      <Grid>
        <GridItem
          key={currentMetric.key}
          metric={currentMetric}
          customLabel={
            <span>
              <MetricIcon metric={currentMetric} />
              {metric.label} dot
            </span>
          }
        />
      </Grid>
    </Wrapper>
  );
};

Footer.defaultProps = {
  loading: false,
};

Footer.propTypes = {
  metric: PropTypes.shape({
    diff: PropTypes.number,
    label: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
};

export default Footer;

