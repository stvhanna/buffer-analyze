import PropTypes from 'prop-types';
import React from 'react';
import Text from '@bufferapp/components/Text';
import moment from 'moment-timezone';
import { TruncatedNumber, MetricIcon } from '@bufferapp/analyze-shared-components';

function transformLabelForTooltip(label) {
  return `${label.toLowerCase()}`;
}

function postsWording(profileService, count = 1) {
  let wording = '';
  switch (profileService) {
    case 'twitter':
      wording = 'tweet';
      break;
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
    case 'twitter':
      return ' that generated';
    default:
      return ', and you earned';
  }
}

const StandardTolltip = ({
  label,
  value,
  previousValue,
  postsCount,
  color,
  profileService,
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
    <span>
      <Text color="white" size="small" weight="bold" >
        <MetricIcon metric={{ color }} /> <TruncatedNumber>{value}</TruncatedNumber>
      </Text>
      <Text color="white" size="small" > {transformLabelForTooltip(label)}</Text>
    </span>

    <span>
      <br />
      <Text color="white" size="small" weight="bold" >
        <MetricIcon metric={{ color: '#9B9FA3' }} /> <TruncatedNumber>{previousValue}</TruncatedNumber>
      </Text>
      <Text color="white" size="small" > Previous {transformLabelForTooltip(label)}</Text>
    </span>
  </span>
);

StandardTolltip.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  postsCount: PropTypes.number,
  value: PropTypes.number,
  profileService: PropTypes.string.isRequired,
};

StandardTolltip.defaultProps = {
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
  label,
  profileService,
  ...extraProps
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
    <Header day={day} {...extraProps} />
    {label && <StandardTolltip profileService={profileService} label={label} {...extraProps} />}
    {!label && <span>
      <Text color="white" size="small" >There was no {postsWording(profileService, 2)} published at this time</Text>
    </span> }
  </div>
);

ChartTooltip.propTypes = {
  day: PropTypes.number.isRequired,
  label: PropTypes.string,
  profileService: PropTypes.string.isRequired,
};

ChartTooltip.defaultProps = {
  label: null,
};

export default ChartTooltip;
