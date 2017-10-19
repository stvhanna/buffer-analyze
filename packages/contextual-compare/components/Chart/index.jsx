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

function getTickInterval(dailyMetrics) {
  const oneDayMS = 24 * 3600 * 1000;
  const sevenDaysMS = 7 * oneDayMS;
  const isMoreThenSevenDays = dailyMetrics[0].length > 7;

  return isMoreThenSevenDays ?
    sevenDaysMS :
    oneDayMS;
}

function getMaxValue(data) {
  let max = 0;
  data.forEach((item) => { if (max < item.y); max = item.y; });
  return max;
}

function setSecondaryScale([primarySeries, secondarySeries]) {
  // we are using two scales only if there is a siginificative difference in scale
  const yAxisMax = getMaxValue(primarySeries.data);
  const secondaryYAxisMax = getMaxValue(secondarySeries.data);
  const maxScaleDifference = 0.7;
  let scaleDifference = 0;
  if (yAxisMax > secondaryYAxisMax) {
    scaleDifference = (Math.log10(yAxisMax) - Math.log10(secondaryYAxisMax));
  } else {
    scaleDifference = (Math.log10(secondaryYAxisMax) - Math.log10(yAxisMax));
  }
  if (scaleDifference >= maxScaleDifference) {
    secondarySeries.yAxis = 1;
  }
}

function prepareSeriesForCustomMode(
  dailyMetrics,
  metricIndex,
  timezone,
  profileService,
) {
  let color = '#9B9FA3';
  const seriesData = Array.from(dailyMetrics, (day) => {
    let value = 0;
    const metric = day.metrics[metricIndex];
    if (metric) {
      value = metric.value;
      color = metric.color;
    }

    const dayStartTimestamp = moment.tz(Number(day.day), timezone).startOf('day').valueOf();

    return {
      x: dayStartTimestamp,
      y: value,
      profileService,
      timezone,
      metricData: Object.assign({}, metric),
      pointPlacement: getTickInterval(dailyMetrics),
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

function prepareDataForCustomMode(dailyMetrics, timezone, profileService) {
  const config = Object.assign({}, chartConfig);

  config.xAxis.minorTickInterval = getTickInterval(dailyMetrics);
  config.series = [
    prepareSeriesForCustomMode(dailyMetrics, 0, timezone, profileService),
    prepareSeriesForCustomMode(dailyMetrics, 1, timezone, profileService),
  ];
  setSecondaryScale(config.series);
  return config;
}

function prepareChartOptions(data, timezone, isCustomMode, profileService, selectedMetrics) {
  if (isCustomMode) {
    const dailyData = data.map(d => ({
      day: d.day,
      metrics: d.metrics.filter(m => (
        m.label === selectedMetrics[0].label ||
        m.label === selectedMetrics[1].label
      )),
    }));
    return prepareDataForCustomMode(dailyData, timezone, profileService);
  }
  return {};
}

const Chart = ({ data, timezone, mode, profileService, selectedMetrics }) => {
  const isCustomMode = mode === 1;
  const charOptions = prepareChartOptions(
    data,
    timezone,
    isCustomMode,
    profileService,
    selectedMetrics,
  );
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
  data: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string,
    metric: PropTypes.shape({
      color: PropTypes.string.isRequired,
      diff: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      postsCount: PropTypes.number.isRequired,
    }),
  })).isRequired,
  profileService: PropTypes.string.isRequired,
  timezone: PropTypes.string.isRequired,
  mode: PropTypes.number.isRequired,
  selectedMetrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
  })).isRequired,

};

Chart.defaultProps = {
  isCustomMode: false,
};

export default Chart;
