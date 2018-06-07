import PropTypes from 'prop-types';
import React from 'react';
import reactDOM from 'react-dom/server';
import Text from '@bufferapp/components/Text';
import moment from 'moment-timezone';

import MetricIcon from '../../../MetricIcon';
import TruncatedNumber from '../../../TruncatedNumber';
import { color } from '../../../style';

const metricsColor = color;

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
      '{category}',
      metric.category,
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
      <Text color="white" size="extra-small" weight="bold" >
        <MetricIcon
          metric={{ color: metricsColor[metric.key] }}
        /> <TruncatedNumber>{metric.value}</TruncatedNumber>
      </Text>
      <Text color="white" size="extra-small" > {transformLabelForTooltip(metric.label)}</Text>
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
  profileService,
  metricData,
  presetConfig,
  metrics,
}) => (
  <span>
    {presetConfig.showUpdatesCount &&
      <span>
        <Text color="white" size="extra-small" >There {wasOrWere(metricData.postsCount)} a total of </Text>
        <Text color="white" size="extra-small" weight="bold" >
          <TruncatedNumber>{metricData.postsCount}</TruncatedNumber>
        </Text>
        <Text color="white" size="extra-small" > {postsWording(profileService, metricData.postsCount)} published</Text>
      </span>
    }
    <Text color="white" size="extra-small" > {parsePresetRewardWording(metricData, presetConfig.rewardWording)}</Text>
    <br />
    {metrics && presetConfig.showMetricsList && <MetricsList metrics={metrics} />}
  </span>
);

PresetsTooltip.propTypes = {
  profileService: PropTypes.string.isRequired,
  metricData: PropTypes.shape({
    color: PropTypes.string,
    label: PropTypes.string,
    postsCount: PropTypes.number,
    value: PropTypes.number,
  }).isRequired,
  presetConfig: PropTypes.shape({
    showMetricsList: PropTypes.bool,
    showUpdatesCount: PropTypes.bool,
    rewardWording: PropTypes.string,
  }),
  metrics: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.number,
  })),
};

PresetsTooltip.defaultProps = {
  presetConfig: null,
  metrics: null,
};

const CustomTooltip = ({
  profileService,
  metricData,
  secondaryMetric,
}) => (
  <span>
    <span>
      <Text color="white" size="extra-small" >There {wasOrWere(metricData.postsCount)} a total of </Text>
      <Text color="white" size="extra-small" weight="bold" >
        <TruncatedNumber>{metricData.postsCount}</TruncatedNumber>
      </Text>
      <Text color="white" size="extra-small" > {postsWording(profileService, metricData.postsCount)} published</Text>
    </span>
    <Text color="white" size="extra-small" >{rewardWording(profileService)}:</Text>
    <br />
    <MetricsList metrics={[metricData, secondaryMetric]} />
  </span>
);

CustomTooltip.propTypes = {
  profileService: PropTypes.string.isRequired,
  metricData: PropTypes.shape({
    color: PropTypes.string,
    label: PropTypes.string,
    postsCount: PropTypes.number,
    value: PropTypes.number,
  }).isRequired,
  secondaryMetric: PropTypes.shape({
    color: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
};

CustomTooltip.defaultProps = {
  presetConfig: null,
};

const Header = ({
  day,
}) => (
  <span>
    <Text color="mystic" size="extra-small" >{moment.utc(day).format('D MMMM')}</Text>
    <br />
    <br />
  </span>
);

Header.propTypes = {
  day: PropTypes.number.isRequired,
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
    {props.presetConfig && !props.presetConfig.hideDate && <Header day={day} {...props} />}
    {isCustomMode && <CustomTooltip profileService={profileService} {...props} />}
    {!isCustomMode && <PresetsTooltip profileService={profileService} {...props} />}
  </div>
);

ChartTooltip.propTypes = {
  day: PropTypes.number.isRequired,
  profileService: PropTypes.string.isRequired,
  isCustomMode: PropTypes.bool,
  presetConfig: PropTypes.shape({
    hideDate: PropTypes.bool,
  }),
};

ChartTooltip.defaultProps = {
  isCustomMode: false,
  presetConfig: null,
};

export default ChartTooltip;
