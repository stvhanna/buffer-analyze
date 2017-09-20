import PropTypes from 'prop-types';
import React from 'react';
import Text from '@bufferapp/components/Text';
import moment from 'moment-timezone';
import { TruncatedNumber, MetricIcon } from '@bufferapp/analyze-shared-components';

function transformLabelForTooltip(label) {
  return `${label.toLowerCase()}`;
}

function isUpdatesMetric(label) {
  return Boolean(label.match(/post|tweet/i));
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
  return `${wording}${count > 1 ? 's' : ''}`;
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
  previousPostsCount,
  color,
  visualizePreviousPeriod,
  profileService,
}) => (
  <span>
    <Text color="white" size="small" >There were a total of </Text>
    <Text color="white" size="small" weight="bold" >
      <TruncatedNumber>{postsCount}</TruncatedNumber>
    </Text>
    <Text color="white" size="small" > {postsWording(profileService, postsCount)} published</Text>

    {visualizePreviousPeriod && <span>
      <Text color="white" size="small" >, compared with </Text>
      <Text color="white" size="small" weight="bold" >
        <TruncatedNumber>{previousPostsCount}</TruncatedNumber>
      </Text>
      <Text color="white" size="small" > previously,</Text>
    </span>}

    <Text color="white" size="small" >{rewardWording(profileService)}:</Text>
    <br />
    <br />
    <span>
      <Text color="white" size="small" weight="bold" >
        <MetricIcon metric={{ color }} /> <TruncatedNumber>{value}</TruncatedNumber>
      </Text>
      <Text color="white" size="small" > {transformLabelForTooltip(label)}</Text>
    </span>

    {visualizePreviousPeriod && <span>
      <br />
      <Text color="white" size="small" weight="bold" >
        <MetricIcon metric={{ color: '#9B9FA3' }} /> <TruncatedNumber>{previousValue}</TruncatedNumber>
      </Text>
      <Text color="white" size="small" > Previous {transformLabelForTooltip(label)}</Text>
    </span>}
  </span>
);

StandardTolltip.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  postsCount: PropTypes.number,
  previousPostsCount: PropTypes.number,
  value: PropTypes.number,
  previousValue: PropTypes.number,
  visualizePreviousPeriod: PropTypes.bool,
  profileService: PropTypes.string.isRequired,
};

StandardTolltip.defaultProps = {
  color: null,
  label: null,
  postsCount: null,
  previousPostsCount: null,
  value: null,
  previousValue: null,
  visualizePreviousPeriod: false,
};

const UpdatesTooltip = ({
  postsCount,
  previousPostsCount,
  visualizePreviousPeriod,
  profileService,
}) => (
  <span>
    <Text color="white" size="small" >There were a total of </Text>
    <Text color="white" size="small" weight="bold" >
      <TruncatedNumber>{postsCount}</TruncatedNumber>
    </Text>
    <Text color="white" size="small" > {postsWording(profileService, postsCount)} published</Text>

    {visualizePreviousPeriod && <span>
      <Text color="white" size="small" >, compared with </Text>
      <Text color="white" size="small" weight="bold" >
        <TruncatedNumber>{previousPostsCount}</TruncatedNumber>
      </Text>
      <Text color="white" size="small" > previously.</Text>
    </span>}
    {!visualizePreviousPeriod && <Text color="white" size="small" >.</Text>}
  </span>
);

UpdatesTooltip.propTypes = {
  postsCount: PropTypes.number,
  previousPostsCount: PropTypes.number,
  visualizePreviousPeriod: PropTypes.bool,
  profileService: PropTypes.string.isRequired,
};

UpdatesTooltip.defaultProps = {
  color: null,
  label: null,
  postsCount: null,
  previousPostsCount: null,
  value: null,
  previousValue: null,
  visualizePreviousPeriod: false,
};

const ChartTooltip = ({
  day,
  label,
  timezone,
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
    <Text color="offWhite" size="extra-small" >{moment.tz(day, timezone).startOf('day').format('D MMMM')}</Text>
    <br />
    <br />
    {label && <span>
      {!isUpdatesMetric(label) &&
        <StandardTolltip profileService={profileService} label={label} {...extraProps} />}
      {isUpdatesMetric(label) &&
        <UpdatesTooltip profileService={profileService}label={label} {...extraProps} />}
    </span>}
    {!label && <span>
      <Text color="white" size="small" >There was no {postsWording(profileService)}s published at this time</Text>
    </span> }
  </div>
);

ChartTooltip.propTypes = {
  day: PropTypes.number.isRequired,
  label: PropTypes.string,
  timezone: PropTypes.string,
  profileService: PropTypes.string.isRequired,
};

ChartTooltip.defaultProps = {
  label: null,
  timezone: 'Etc/UTC',
};

export default ChartTooltip;
