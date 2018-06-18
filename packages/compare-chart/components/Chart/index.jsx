import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import ReactHighcharts from 'react-highcharts';
import moment from 'moment';
import styled from 'styled-components';

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

    const dayStartTimestamp = moment.utc(Number(day.day)).startOf('day').valueOf();
    const previousPeriodDay = moment.utc(Number(day.previousPeriodDay)).startOf('day').valueOf();

    return {
      x: dayStartTimestamp,
      y: value,
      metricData: Object.assign({}, day.metric, {
        previousPeriodDay,
        profileService,
        timezone,
        visualizePreviousPeriod,
      }),
      pointPlacement: getMinorTickInterval(dailyMetric),
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
        [0, fadeColor(color, 0.7)],
        [1, fadeColor(color, 0.4)],
      ],
    },
    lineColor: color,
    data: seriesData,
  });

  if (dailyMetric[0].metric.label === 'Posts' || dailyMetric[0].metric.label === 'Tweets') {
    seriesConfig.type = 'column';
    seriesConfig.colors = [{
      linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
      stops: [
        [0, fadeColor(color, 0.7)],
        [1, fadeColor(color, 0.4)],
      ],
    }];
    seriesConfig.borderColor = color;
    seriesConfig.states = {
      hover: {
        color: {
          linearGradient: { x1: 0, y1: 0 },
          stops: [
            [0, color],
          ],
        },
        brightness: 0.0,
      },
    };
  }

  return seriesConfig;
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

function prepareChartOptions(dailyMetric, timezone, visualizePreviousPeriod, profileService) {
  const config = getChartConfig();

  config.xAxis.minorTickInterval = getMinorTickInterval(dailyMetric);
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
  setChartLimits(config);
  return config;
}

function filterDailyDataMetrics(dailyData, metricLabel) {
  return dailyData.map(day => ({
    day: day.day,
    previousPeriodDay: day.previousPeriodDay,
    metric: day.metrics.filter(metric => metric.label === metricLabel).shift(),
  }));
}

const Container = styled.div`
  padding: 0 0.5rem;
`;

class Chart extends PureComponent {
  render() {
    const { daily, totalPeriodDaily, selectedMetricLabel,
      dailyMode, timezone, visualizePreviousPeriod, profileService } = this.props;
    const dailyData = dailyMode === 1 ? totalPeriodDaily : daily;
    const filteredDailyData = filterDailyDataMetrics(dailyData, selectedMetricLabel);
    const charOptions = prepareChartOptions(
      filteredDailyData,
      timezone,
      visualizePreviousPeriod,
      profileService,
    );
    return (
      <Container>
        <ReactHighcharts config={charOptions} />
      </Container>
    );
  }
}

Chart.propTypes = {
  totalPeriodDaily: PropTypes.arrayOf(PropTypes.shape({
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
  daily: PropTypes.arrayOf(PropTypes.shape({
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
  selectedMetricLabel: PropTypes.string,
  dailyMode: PropTypes.number.isRequired,
};

Chart.defaultProps = {
  visualizePreviousPeriod: false,
  selectedMetricLabel: '',
};

export default Chart;
