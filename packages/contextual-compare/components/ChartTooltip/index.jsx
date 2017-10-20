import PropTypes from 'prop-types';
import React from 'react';
import Text from '@bufferapp/components/Text';
import moment from 'moment-timezone';
import { TruncatedNumber, MetricIcon } from '@bufferapp/analyze-shared-components';

function transformLabelForTooltip(label) {
  return `${label.toLowerCase()}`;
}

function isUpdatesMetric(label) {
  return Boolean(label.match(/^(posts|tweets)$/i));
}

function postsWording(profileService, count) {
  let wording = '';
  switch (profileService) {
    default:
      wording = 'post';
      break;
  }
  return `${wording}${count === 1 ? '' : 's'}`;
}

function wasOrWere(count) {
  return count === 1 ? 'was' : 'were';
}

function rewardWording(profileService) {
  switch (profileService) {
    default:
      return ', and you earned';
  }
}

const StandardTooltip = ({
  postsCount,
  profileService,
  primaryMetric,
  secondaryMetric,
}) => (
  <span>
    <Text color="white" size="small" >There {wasOrWere(postsCount)} a total of </Text>
    <Text color="white" size="small" weight="bold" >
      <TruncatedNumber>{postsCount}</TruncatedNumber>
    </Text>
    <Text color="white" size="small" > {postsWording(profileService, postsCount)} published</Text>

    <Text color="white" size="small" >{rewardWording(profileService)}:</Text>
    <br />
    <br />
    {!isUpdatesMetric(primaryMetric.label) && <span>
      <Text color="white" size="small" weight="bold" >
        <MetricIcon
          metric={{ color: primaryMetric.color }}
        /> <TruncatedNumber>{primaryMetric.value}</TruncatedNumber>
      </Text>
      <Text color="white" size="small" > {transformLabelForTooltip(primaryMetric.label)}</Text>
      <br />
    </span>}

    <span>
      <Text color="white" size="small" weight="bold" >
        <MetricIcon
          metric={{ color: secondaryMetric.color }}
        /> <TruncatedNumber>{secondaryMetric.value}</TruncatedNumber>
      </Text>
      <Text color="white" size="small" > {transformLabelForTooltip(secondaryMetric.label)}</Text>
    </span>
  </span>
);

StandardTooltip.propTypes = {
  postsCount: PropTypes.number,
  profileService: PropTypes.string.isRequired,
  primaryMetric: PropTypes.shape({
    color: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
  secondaryMetric: PropTypes.shape({
    color: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,

};

StandardTooltip.defaultProps = {
  color: null,
  label: null,
  postsCount: null,
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

const ChartTooltip = ({
  day,
  profileService,
  ...props
}) => (
  <div
    style={{
      width: '185px',
      padding: '10px',
      color: '#fff',
      cursor: 'default',
      fontSize: '9pt',
      fontFamily: 'Open Sans, Helvetica Neue, Helvetica, Arial, sans serif',
      pointerEvents: 'none',
      whiteSpace: 'normal',
    }}
  >
    <Header day={day} {...props} />
    <StandardTooltip profileService={profileService} {...props} />
  </div>
);

ChartTooltip.propTypes = {
  day: PropTypes.number.isRequired,
  profileService: PropTypes.string.isRequired,
};

export default ChartTooltip;
