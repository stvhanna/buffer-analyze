import PropTypes from 'prop-types';
import React from 'react';
import ReactHighcharts from 'react-highcharts';
import moment from 'moment-timezone';

import chartConfig, { highChartsSeriesPrimaryConfig } from './chartConfig';

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
      y: value,
      metricData: Object.assign({}, day.metric, {
        profileService,
        timezone,
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
        [0, fadeColor(color, 0.3)],
        [1, fadeColor(color, 0)],
      ],
    },
    lineColor: color,
    data: seriesData,
  });

  return seriesConfig;
}

function prepareChartOptions(profilesMetricData) {
  const config = Object.assign({}, chartConfig);
  const seriesData = profilesMetricData.map(profileData =>
    prepareSeries(profileData.dailyData, profileData.timezone, profileData.service),
  );
  config.series = seriesData.filter(e => e !== null);
  setChartLimits(config);
  return config;
}

const ComparisonChart = ({ profilesMetricData }) => {
  const charOptions = prepareChartOptions(profilesMetricData);
  return (<ReactHighcharts config={charOptions} />);
};

ComparisonChart.propTypes = {
  profilesMetricData: PropTypes.arrayOf(PropTypes.shape({
    dailyData: PropTypes.arrayOf(PropTypes.shape({
      day: PropTypes.number.isRequired,
      metric: PropTypes.shape({
        color: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      }),
    })),
    service: PropTypes.string.isRequired,
    timezone: PropTypes.string.isRequired,
  })).isRequired,
};

export default ComparisonChart;
