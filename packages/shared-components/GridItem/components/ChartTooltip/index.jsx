import PropTypes from 'prop-types';
import React from 'react';
import Text from '@bufferapp/components/Text';
import moment from 'moment';

import TruncatedNumber from '../TruncatedNumber';

function transformLabelForTooltip(label) {
  return `${label.split(/\s/)[0].toLowerCase()}s`;
}

const ChartTooltip = ({ point }) => (
  <span style={{ marginLeft: '7px' }}>
    <Text size="small" >{moment(point.x).format('D MMMM')},</Text>
    <Text size="small" weight="bold" color="black" > <TruncatedNumber>{point.y}</TruncatedNumber></Text>
    <Text size="small" > {transformLabelForTooltip(point.label)}</Text>
  </span>
);

ChartTooltip.propTypes = {
  point: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChartTooltip;
