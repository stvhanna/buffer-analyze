import PropTypes from 'prop-types';
import React from 'react';
import Text from '@bufferapp/components/Text';
import moment from 'moment-timezone';

import TruncatedNumber from '../../../TruncatedNumber';

function transformLabelForTooltip(label) {
  return `${label.split(/\s/)[1].toLowerCase()}`;
}

const ChartTooltip = ({ point }) => (
  point.label ?
    (<span>
      <Text size="small" color="white">{moment.utc(point.x).format('D MMMM')},</Text>
      <Text size="small" weight="bold" color="white" > <TruncatedNumber>{point.y}</TruncatedNumber></Text>
      <Text size="small" color="white"> {transformLabelForTooltip(point.label)}</Text>
    </span>) :
    (<span>
      <Text size="small" color="white">No data for {moment.utc(point.x).format('D MMMM')}</Text>
    </span>)
);

ChartTooltip.propTypes = {
  point: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChartTooltip;
