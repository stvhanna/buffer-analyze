import PropTypes from 'prop-types';
import React from 'react';
import Text from '@bufferapp/components/Text';
import moment from 'moment-timezone';
import { TruncatedNumber, MetricIcon } from '@bufferapp/analyze-shared-components';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 185px;
  padding: 10px;
  color: #fff;
  cursor: default;
  font-size: 9pt;
  font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans serif;
  pointer-events: none;
  white-space: normal;
`;

function transformLabelForTooltip(label) {
  return `${label.toLowerCase()}`;
}

const StandardTooltip = ({
  label,
  value,
  color,
}) => (
  <span>
    <Text color="white" size="small" weight="bold">
      <MetricIcon metric={{ color }} /> <TruncatedNumber>{value}</TruncatedNumber>
    </Text>
    <Text color="white" size="small" > {transformLabelForTooltip(label)}</Text>
  </span>
);

StandardTooltip.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  color: PropTypes.string,
};

StandardTooltip.defaultProps = {
  color: null,
  label: null,
  value: null,
};

const Header = ({
  day,
  timezone,
}) => (
  <span>
    <Text color="mystic" size="extra-small" >{moment.tz(day, timezone).format('D MMMM')}</Text>
    <br />
    <br />
  </span>
);

Header.propTypes = {
  day: PropTypes.number.isRequired,
  timezone: PropTypes.string.isRequired,
};

const ComparisonChartTooltip = ({
  day,
  label,
  ...extraProps
}) => (
  <Wrapper>
    <Header day={day} {...extraProps} />
    {label &&
      <span>
        <StandardTooltip label={label} {...extraProps} />
      </span>}
  </Wrapper>
);

ComparisonChartTooltip.propTypes = {
  day: PropTypes.number.isRequired,
  label: PropTypes.string,
};

ComparisonChartTooltip.defaultProps = {
  label: null,
};

export default ComparisonChartTooltip;
