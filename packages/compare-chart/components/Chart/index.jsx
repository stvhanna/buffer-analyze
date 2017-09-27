import PropTypes from 'prop-types';
import React from 'react';
import ReactHighcharts from 'react-highcharts';
import moment from 'moment';

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
  visualizePreviousPeriod,
  profileService,
  isPreviousPeriod = false,
) {
  let color = '#9B9FA3';
  const seriesData = Array.from(dailyMetric, (day) => {
    let value = 0;
    if (day.metric) {
      if (isPreviousPeriod) {
        value = day.metric.previousValue;
      } else {
        value = day.metric.value;
        color = day.metric.color;
      }
    }

    // This is needed cause charts time need to be in utc to snap markers on the grid
    // but we want to display the data in the profile timezone
    const chartTime = moment.utc(Number(day.day)).startOf('day');
    const dayWithTimezone = moment.tz(Number(day.day), timezone).startOf('day');
    if (dayWithTimezone.utcOffset() < 0) {
      chartTime.subtract(1, 'day');
    }
    return {
      x: chartTime.valueOf(),
      y: value,
      metricData: Object.assign({}, day.metric, {
        day: Number(day.day),
        previousPeriodDay: Number(day.previousPeriodDay),
        profileService,
        timezone,
        visualizePreviousPeriod,
      }),
      pointPlacement: getTickInterval(dailyMetric),
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

function prepareChartOptions(dailyMetric, timezone, visualizePreviousPeriod, profileService) {
  const config = Object.assign({}, chartConfig);
  config.xAxis.minorTickInterval = getTickInterval(dailyMetric);
  config.series = [
    prepareSeries(dailyMetric, timezone, visualizePreviousPeriod, profileService),
    (visualizePreviousPeriod ? prepareSeries(
      dailyMetric,
      timezone,
      visualizePreviousPeriod,
      profileService,
      true,
    ) : null),
  ].filter(e => e !== null);
  return config;
}

const Chart = ({ dailyData, timezone, visualizePreviousPeriod, profileService }) => {
  const charOptions = prepareChartOptions(
    dailyData,
    timezone,
    visualizePreviousPeriod,
    profileService,
  );
  return (<ReactHighcharts config={charOptions} timezone={timezone} />);
};

Chart.propTypes = {
  dailyData: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string.isRequired,
    previousPeriodDay: PropTypes.string.isRequired,
    metric: PropTypes.shape({
      color: PropTypes.string.isRequired,
      diff: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      previousValue: PropTypes.number.isRequired,
      postsCount: PropTypes.number.isRequired,
    }),
  })).isRequired,
  profileService: PropTypes.string.isRequired,
  timezone: PropTypes.string.isRequired,
  visualizePreviousPeriod: PropTypes.bool,
};

Chart.defaultProps = {
  visualizePreviousPeriod: false,
};

export default Chart;
