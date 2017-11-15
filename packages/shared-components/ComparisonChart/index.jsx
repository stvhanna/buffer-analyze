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

function getTickInterval(dailyMetric) {
  const oneDayMS = 24 * 3600 * 1000;
  const sevenDaysMS = 7 * oneDayMS;
  const isMoreThenSevenDays = dailyMetric[0].length > 7;

  return isMoreThenSevenDays ?
    sevenDaysMS :
    oneDayMS;
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

    const dayStartTimestamp = moment.tz(Number(day.day), timezone).startOf('day').valueOf();

    return {
      x: dayStartTimestamp,
      y: value,
      metricData: Object.assign({}, day.metric, {
        profileService,
        timezone,
      }),
      pointPlacement: getTickInterval(dailyMetric),
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
  return config;
}

const Chart = ({ profilesMetricData }) => {
  const charOptions = prepareChartOptions(profilesMetricData);
  // TODO: This won't work for multiple profiles.
  // We should move do timezone transformation in the backend
  // and get the data based on UTC from backend
  const timezone = profilesMetricData[0].timezone;
  ReactHighcharts.Highcharts.setOptions(
    {
      global: {
        getTimezoneOffset: timestamp => -moment.tz(timestamp, timezone).utcOffset(),
      },
    },
  );
  return (<ReactHighcharts config={charOptions} />);
};

Chart.propTypes = {
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

export default Chart;
