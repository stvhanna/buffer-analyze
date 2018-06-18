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

function isEngagementRateMetric(label) {
  return Boolean(label.match(/^(engagement rate)$/i));
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
  previousPostsCount,
  color,
  visualizePreviousPeriod,
  profileService,
}) => (
  <span>
    <Text color="white" size="extra-small" >There {wasOrWere(postsCount)} a total of </Text>
    <Text color="white" size="extra-small" weight="bold" >
      <TruncatedNumber>{postsCount}</TruncatedNumber>
    </Text>
    <Text color="white" size="extra-small" > {postsWording(profileService, postsCount)} published</Text>

    {visualizePreviousPeriod && <span>
      <Text color="white" size="extra-small" >, compared with </Text>
      <Text color="white" size="extra-small" weight="bold" >
        <TruncatedNumber>{previousPostsCount}</TruncatedNumber>
      </Text>
      <Text color="white" size="extra-small" > previously,</Text>
    </span>}

    <Text color="white" size="extra-small" >{rewardWording(profileService)}:</Text>
    <br />
    <br />
    <span>
      <Text color="white" size="extra-small" weight="bold" >
        <MetricIcon metric={{ color }} /> <TruncatedNumber>{value}</TruncatedNumber>
      </Text>
      <Text color="white" size="extra-small" > {transformLabelForTooltip(label)}</Text>
    </span>

    {visualizePreviousPeriod && <span>
      <br />
      <Text color="white" size="extra-small" weight="bold" >
        <MetricIcon metric={{ color: '#9B9FA3' }} /> <TruncatedNumber>{previousValue}</TruncatedNumber>
      </Text>
      <Text color="white" size="extra-small" > Previous {transformLabelForTooltip(label)}</Text>
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
    <Text color="white" size="extra-small" >There {wasOrWere(postsCount)} a total of </Text>
    <Text color="white" size="extra-small" weight="bold" >
      <TruncatedNumber>{postsCount}</TruncatedNumber>
    </Text>
    <Text color="white" size="extra-small" > {postsWording(profileService, postsCount)} published</Text>

    {visualizePreviousPeriod && <span>
      <Text color="white" size="extra-small" >, compared with </Text>
      <Text color="white" size="extra-small" weight="bold" >
        <TruncatedNumber>{previousPostsCount}</TruncatedNumber>
      </Text>
      <Text color="white" size="extra-small" > previously.</Text>
    </span>}
    {!visualizePreviousPeriod && <Text color="white" size="extra-small" >.</Text>}
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

const EngagementRateTooltip = ({
  postsCount,
  previousPostsCount,
  value,
  previousValue,
  visualizePreviousPeriod,
  profileService,
}) => (
  <span>
    <Text color="white" size="extra-small" >There {wasOrWere(postsCount)} a total of </Text>
    <Text color="white" size="extra-small" weight="bold" >
      <TruncatedNumber>{postsCount}</TruncatedNumber>
    </Text>
    <Text color="white" size="extra-small" > {postsWording(profileService, postsCount)} published</Text>
    <Text color="white" size="extra-small" > with an Engagement Rate of {value}%</Text>

    {visualizePreviousPeriod && <span>
      <Text color="white" size="extra-small" >, compared with </Text>
      <Text color="white" size="extra-small" > an Engagement Rate of {previousValue}% for </Text>
      <Text color="white" size="extra-small" weight="bold" >
        <TruncatedNumber>{previousPostsCount}</TruncatedNumber>
      </Text>
      <Text color="white" size="extra-small" > {postsWording(profileService, postsCount)}</Text>
      <Text color="white" size="extra-small" > previously.</Text>
    </span>}
    {!visualizePreviousPeriod && <Text color="white" size="extra-small" >.</Text>}
  </span>
);

EngagementRateTooltip.propTypes = {
  postsCount: PropTypes.number,
  previousPostsCount: PropTypes.number,
  visualizePreviousPeriod: PropTypes.bool,
  profileService: PropTypes.string.isRequired,
  value: PropTypes.number,
  previousValue: PropTypes.number,
};

EngagementRateTooltip.defaultProps = {
  color: null,
  label: null,
  postsCount: null,
  previousPostsCount: null,
  value: null,
  previousValue: null,
  visualizePreviousPeriod: false,
};

const Header = ({
  day,
  previousPeriodDay,
  visualizePreviousPeriod,
}) => (
  <span>
    <Text color="mystic" size="extra-small" >{moment.utc(day).format('D MMMM')}</Text>
    {visualizePreviousPeriod && <span>
      <br />
      <Text color="mystic" size="extra-small" >comparing to </Text>
      <Text color="mystic" size="extra-small" >{moment.utc(previousPeriodDay).format('D MMMM')}</Text>
    </span>}
    <br />
    <br />
  </span>
);

Header.propTypes = {
  visualizePreviousPeriod: PropTypes.bool,
  day: PropTypes.number.isRequired,
  previousPeriodDay: PropTypes.number.isRequired,
};

Header.defaultProps = {
  visualizePreviousPeriod: false,
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
      fontFamily: 'Roboto, sans serif',
      pointerEvents: 'none',
      whiteSpace: 'normal',
    }}
  >
    <Header day={day} {...extraProps} />
    {label && <span>
      {!isUpdatesMetric(label) &&
        !isEngagementRateMetric(label)&&
        <StandardTolltip profileService={profileService} label={label} {...extraProps} />}
      {isUpdatesMetric(label) &&
        <UpdatesTooltip profileService={profileService}label={label} {...extraProps} />}
      {isEngagementRateMetric(label) &&
        <EngagementRateTooltip profileService={profileService}label={label} {...extraProps} />}
    </span>}
    {!label && <span>
      <Text color="white" size="extra-small" >There was no {postsWording(profileService)}s published at this time</Text>
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
