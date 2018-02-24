import PropTypes from 'prop-types';
import React from 'react';
import ReactHighcharts from 'react-highcharts';
import moment from 'moment-timezone';

import getChartConfig, { highChartsSeriesPrimaryConfig } from './chartConfig';

function getMarkerFillColor(color) {
  const highchartColor = ReactHighcharts.Highcharts.Color(color);
  return highchartColor ?
    highchartColor.brighten(0.1).get('rgba') :
    color;
}

function fadeColor(color, opacity) {
  const highchartColor = ReactHighcharts.Highcharts.Color(color);
  return highchartColor ?
    highchartColor.setOpacity(opacity).get('rgba') :
    color;
}

function getMinorTickInterval(dailyMetric) {
  const oneDay = 24 * 3600 * 1000;
  const moreThanAMonth = dailyMetric.length > 31;

  return moreThanAMonth ?
    null :
    oneDay;
}

function setChartLimits({ series, yAxis }) {
  let values = [];
  const reducedSeries = series.map(s => s.data.map(point => point.y));
  reducedSeries.forEach((s) => { values = values.concat(s); });
  let min = Math.min.apply(null, values);
  let max = Math.max.apply(null, values);
  const maxPaddingPercentage = 5.25;
  const minPaddingPercentage = 0.1;
  let topPaddingPercentage = (maxPaddingPercentage - Math.log10(max));
  if (topPaddingPercentage < minPaddingPercentage) {
    topPaddingPercentage = minPaddingPercentage;
  }
  let bottomPaddingPercentage = (maxPaddingPercentage - Math.log10(min));
  if (bottomPaddingPercentage < minPaddingPercentage) {
    bottomPaddingPercentage = minPaddingPercentage;
  }
  min -= (min / 100) * bottomPaddingPercentage;
  max += (max / 100) * topPaddingPercentage;
  yAxis[0].floor = min;
  yAxis[0].ceiling = max;
}

function prepareSeries(
  dailyMetric,
  timezone,
  profileService,
  username,
) {
  let color = '#9B9FA3';
  const seriesData = Array.from(dailyMetric, (day) => {
    let value = 0;
    if (day.metric) {
      value = day.metric.value;
      color = day.metric.color;
    }

    const dayStartTimestamp = moment.utc(Number(day.day)).startOf('day').valueOf();

    return {
      x: dayStartTimestamp,
      y: value || 0,
      metricData: Object.assign({}, day.metric, {
        profileService,
        timezone,
        username,
      }),
      pointPlacement: getMinorTickInterval(dailyMetric),
      // set profile specific timezone
      getTimezoneOffset: timestamp => -moment.tz(timestamp, timezone).utcOffset(),
    };
  });

  const seriesConfig = Object.assign({}, highChartsSeriesPrimaryConfig, {
    marker: {
      fillColor: getMarkerFillColor(color),
      lineColor: color,
    },
    fillColor: {
      linearGradient: [0, 0, 0, 300],
      stops: [
        [0, fadeColor(color, 0.6)],
        [1, fadeColor(color, 0.1)],
      ],
    },
    lineColor: color,
    data: seriesData,
  });

  return seriesConfig;
}

function prepareChartOptions(profilesMetricData, profiles, metricKey) {
  const config = getChartConfig();
  const seriesData = profilesMetricData.map((profileData) => {
    const profile = profiles.find(p => p.id === profileData.profileId);
    if (profile.service === 'instagram' && metricKey === 'reach') {
      return null;
    }
    return prepareSeries(
      profileData.dailyData,
      profile.timezone,
      profile.service,
      profile.username,
    );
  }, { profiles, metricKey });
  config.series = seriesData.filter(e => e !== null);
  setChartLimits(config);

  config.xAxis = Object.assign({}, getChartConfig().xAxis, {
    minorTickInterval: getMinorTickInterval(profilesMetricData[0].dailyData),
  });

  return config;
}

const CHART_HEIGHT = '400px';
const ComparisonChart = ({ profilesMetricData, profiles, metricKey }) => {
  const charOptions = prepareChartOptions(profilesMetricData, profiles, metricKey);
  return (<div style={{ minHeight: CHART_HEIGHT }}>
    <ReactHighcharts config={charOptions} />
  </div>);
};

ComparisonChart.propTypes = {
  metricKey: PropTypes.string.isRequired,
  profilesMetricData: PropTypes.arrayOf(PropTypes.shape({
    dailyData: PropTypes.arrayOf(PropTypes.shape({
      day: PropTypes.number.isRequired,
      metric: PropTypes.shape({
        color: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      }),
    })),
    profileId: PropTypes.string.isRequired,
  })).isRequired,
  profiles: PropTypes.arrayOf(PropTypes.shape({
    profileId: PropTypes.string,
    service: PropTypes.string,
    timezone: PropTypes.string,
  })).isRequired,
};

export default ComparisonChart;
