import PropTypes from 'prop-types';
import React from 'react';
import Text from '@bufferapp/components/Text';
import moment from 'moment-timezone';
import { TruncatedNumber, MetricIcon } from '@bufferapp/analyze-shared-components';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 240px;
  padding: 10px;
  color: #fff;
  cursor: default;
  font-size: 9pt;
  font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans serif;
  pointer-events: none;
  white-space: normal;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function transformLabelForTooltip(label) {
  return `${label.toLowerCase()}`;
}

function postsWording(profileService) {
  let wording = '';
  switch (profileService) {
    case 'twitter':
      wording = 'tweet';
      break;
    default:
      wording = 'post';
      break;
  }
  return wording;
}

const MetricEntry = ({
  metric,
}) => (
  <span
    style={{
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: 'inline-box',
    }}
  >
    <br />
    <Text color="white" size="small" weight="bold" >
      <MetricIcon metric={{ color: metric.color }} /> <TruncatedNumber>
        {metric.value}
      </TruncatedNumber>
    </Text>
    <Text color="white" size="small" > {transformLabelForTooltip(metric.label)}</Text>
    <Text color="white" size="small" > for </Text>
    <Text color="white" size="small" weight="bold" > {metric.username} </Text>
  </span>
);

MetricEntry.propTypes = {
  metric: PropTypes.shape({
    color: PropTypes.string,
    label: PropTypes.string,
    username: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
};

const NoDataEntry = ({
  metric,
}) => (
  <span
    style={{
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: 'inline-box',
    }}
  >
    <br />
    <Text color="white" size="small" weight="bold" >
      <MetricIcon metric={{ color: metric.color }} />
    </Text>
    <Text color="white" size="small" > No {postsWording(metric.profileService)} were published for</Text>
    <Text color="white" size="small" weight="bold" > {metric.username} </Text>
  </span>
);

NoDataEntry.propTypes = {
  metric: PropTypes.shape({
    color: PropTypes.string,
    label: PropTypes.string,
    profileService: PropTypes.string,
    username: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
};

const Header = ({
  day,
}) => (
  <span>
    <Text color="mystic" size="small" >{moment.utc(day).format('D MMMM')}</Text>
    <br />
    <br />
  </span>
);

Header.propTypes = {
  day: PropTypes.number.isRequired,
};

const ComparisonChartTooltip = ({
  day,
  metrics,
}) => (
  <Wrapper>
    <Header day={day} />
    <span>
      {metrics.map(m => (m.value === null ?
        (<NoDataEntry key={m.username} metric={m} />) :
        (<MetricEntry key={m.username} metric={m} />)
      ))}
    </span>
  </Wrapper>
);

ComparisonChartTooltip.propTypes = {
  day: PropTypes.number.isRequired,
  metrics: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    label: PropTypes.string,
    profileService: PropTypes.string,
    username: PropTypes.string,
    value: PropTypes.number,
  })).isRequired,
};

export default ComparisonChartTooltip;
