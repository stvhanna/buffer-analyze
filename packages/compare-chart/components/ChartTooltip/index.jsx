import PropTypes from 'prop-types';
import React from 'react';
import Text from '@bufferapp/components/Text';
import moment from 'moment-timezone';
import { TruncatedNumber } from '@bufferapp/analyze-shared-components';

function transformLabelForTooltip(label) {
  return `${label.split(/\s/)[0].toLowerCase()}s`;
}

const ChartTooltip = ({ metric, day }) => (
  metric.label ?
    (<span style={{ marginLeft: '7px' }}>
      <Text size="small" >{moment.tz(day, metric.timezone).startOf('day').format('D MMMM')},</Text>
      <Text size="small" weight="bold" color="black" > <TruncatedNumber>{metric.value}</TruncatedNumber></Text>
      <Text size="small" > {transformLabelForTooltip(metric.label)}</Text>
    </span>) :
    (<span style={{ marginLeft: '7px' }}>
      <Text size="small">No data for {moment.tz(metric.x, metric.timezone).startOf('day').format('D MMMM')}</Text>
    </span>)
);

ChartTooltip.propTypes = {
  day: PropTypes.number.isRequired,
  metric: PropTypes.shape({
    color: PropTypes.string.isRequired,
    diff: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    previous_value: PropTypes.number.isRequired,
    posts_count: PropTypes.number.isRequired,
  }).isRequired,
};

ChartTooltip.defaultProps = {
  timezone: 'Etc/UTC',
};

export default ChartTooltip;
