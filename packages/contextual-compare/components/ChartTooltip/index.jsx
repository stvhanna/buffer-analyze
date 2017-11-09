import PropTypes from 'prop-types';
import React from 'react';
import reactDOM from 'react-dom/server';
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

function parsePresetRewardWording(metric, template) {
  const rewardString = template
    .replace(
      '{value}',
      reactDOM.renderToStaticMarkup(<TruncatedNumber>{metric.value}</TruncatedNumber>)
        .replace(/<.*>-*([0-9]+\.*[0-9]*\w*)<.*>/, '$1'),
    )
    .replace(
      /\{(\w+)\|(\w+)\}/,
      metric.value >= 0 ? '$1' : '$2',
    )
    .replace(
      /\[\+(\w+)\]/,
      metric.value > 0 ? '$1' : '',
    );
  return rewardString;
}

const MetricEntry = ({
  metric,
}) => (
  <span>
    {!isUpdatesMetric(metric.label) && <span>
      <br />
      <Text color="white" size="small" weight="bold" >
        <MetricIcon
          metric={{ color: metric.color }}
        /> <TruncatedNumber>{metric.value}</TruncatedNumber>
      </Text>
      <Text color="white" size="small" > {transformLabelForTooltip(metric.label)}</Text>
    </span>}
  </span>
);

MetricEntry.propTypes = {
  metric: PropTypes.shape({
    color: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
};

const MetricsList = ({
  metrics,
}) => (
  <span>
    {metrics.map(m => <MetricEntry key={m.label} metric={m} />)}
  </span>
);

MetricsList.propTypes = {
  metrics: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.number,
  })).isRequired,
};

const PresetsTooltip = ({
  postsCount,
  profileService,
  primaryMetric,
  presetConfig,
}) => (
  <span>
    {presetConfig.showUpdatesCount &&
      <span>
        <Text color="white" size="small" >There {wasOrWere(postsCount)} a total of </Text>
        <Text color="white" size="small" weight="bold" >
          <TruncatedNumber>{postsCount}</TruncatedNumber>
        </Text>
        <Text color="white" size="small" > {postsWording(profileService, postsCount)} published</Text>
      </span>
    }
    <Text color="white" size="small" > {parsePresetRewardWording(primaryMetric, presetConfig.rewardWording)}</Text>
    <br />
  </span>
);

PresetsTooltip.propTypes = {
  postsCount: PropTypes.number,
  profileService: PropTypes.string.isRequired,
  primaryMetric: PropTypes.shape({
    color: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
  presetConfig: PropTypes.shape({
    showUpdatesCount: PropTypes.bool,
    rewardWording: PropTypes.string,
  }),
};

PresetsTooltip.defaultProps = {
  postsCount: null,
  presetConfig: null,
};

const CustomTooltip = ({
  postsCount,
  profileService,
  primaryMetric,
  secondaryMetric,
}) => (
  <span>
    <span>
      <Text color="white" size="small" >There {wasOrWere(postsCount)} a total of </Text>
      <Text color="white" size="small" weight="bold" >
        <TruncatedNumber>{postsCount}</TruncatedNumber>
      </Text>
      <Text color="white" size="small" > {postsWording(profileService, postsCount)} published</Text>
    </span>
    <Text color="white" size="small" >{rewardWording(profileService)}:</Text>
    <br />
    <MetricsList metrics={[primaryMetric, secondaryMetric]} />
  </span>
);

CustomTooltip.propTypes = {
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

CustomTooltip.defaultProps = {
  postsCount: null,
  presetConfig: null,
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
  isCustomMode,
  ...props
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
    <Header day={day} {...props} />
    {isCustomMode && <CustomTooltip profileService={profileService} {...props} />}
    {!isCustomMode && <PresetsTooltip profileService={profileService} {...props} />}
  </div>
);

ChartTooltip.propTypes = {
  day: PropTypes.number.isRequired,
  profileService: PropTypes.string.isRequired,
  isCustomMode: PropTypes.bool,
};

ChartTooltip.defaultProps = {
  isCustomMode: false,
};

export default ChartTooltip;
