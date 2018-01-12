import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import ReactHighcharts from 'react-highcharts';
import moment from 'moment';

import {
  color as metricsColor,
} from '../style';

import Footer from './components/Footer';

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

function reduceSeriesToValues(series) {
  let values = [];
  const reducedSeries = series.map(s => s.data.map(point => point.y));
  reducedSeries.forEach((s) => { values = values.concat(s); });
  return values;
}

function getSeriesRange(series) {
  const reducedSeries = reduceSeriesToValues(series);
  let min = Math.min.apply(null, reducedSeries);
  let max = Math.max.apply(null, reducedSeries);
  const maxPaddingPercentage = 5.25;
  const minPaddingPercentage = 2;
  const topPaddingPercentage = (maxPaddingPercentage - Math.log10(max)) || minPaddingPercentage;
  const bottomPaddingPercentage = (maxPaddingPercentage - Math.log10(min)) || minPaddingPercentage;
  min -= (min / 100) * bottomPaddingPercentage;
  max += (max / 100) * topPaddingPercentage;
  return {
    min,
    max,
  };
}

function setChartLimits({ series, yAxis }, usesTwoScales) {
  if (!usesTwoScales) {
    const range = getSeriesRange(series);
    yAxis[0].floor = range.min;
    yAxis[0].ceiling = range.max;
  } else {
    const range = getSeriesRange([series[0]]);
    const secondaryRange = getSeriesRange([series[1]]);
    yAxis[0].floor = range.min;
    yAxis[0].ceiling = range.max;
    yAxis[1].floor = secondaryRange.min;
    yAxis[1].ceiling = secondaryRange.max;
  }
}

function setYAxisScale([primarySeries, secondarySeries], xAxis, yAxis) {
  // we are using two scales only if there is a siginificative difference in scale
  const yAxisMax = Math.max.apply(null, reduceSeriesToValues([primarySeries]));
  let usesTwoScales = false;
  if (secondarySeries) {
    const secondaryYAxisMax = Math.max.apply(null, reduceSeriesToValues([secondarySeries]));
    const maxScaleDifference = 0.7;
    let scaleDifference = 0;
    if (yAxisMax > secondaryYAxisMax) {
      scaleDifference = (Math.log10(yAxisMax) - Math.log10(secondaryYAxisMax));
    } else {
      scaleDifference = (Math.log10(secondaryYAxisMax) - Math.log10(yAxisMax));
    }
    if (scaleDifference >= maxScaleDifference && !xAxis.categories) {
      secondarySeries.yAxis = 1;
      usesTwoScales = true;
    } else {
      secondarySeries.yAxis = 0;
    }
  }
  setChartLimits({
    series: [primarySeries, secondarySeries].filter(s => typeof s !== 'undefined'),
    yAxis,
  }, usesTwoScales);
}


function prepareSeries(
  dailyMetrics,
  timezone,
  profileService,
  isCustomMode,
  presetConfig,
) {
  const series = [];
  let color = '#9B9FA3';
  let metricIndex = 0;

  function mapDataToPoint(dailyEntry) {
    let value = 0;
    const metric = dailyEntry.metrics[metricIndex];
    if (metric) {
      value = metric.value;
      color = metric.color ? metric.color : metricsColor[metric.key];
    }

    const data = {
      y: value,
      profileService,
      timezone,
      isCustomMode,
      metricData: Object.assign({}, metric, { category: dailyEntry.category }),
      presetConfig,
      metrics: dailyEntry.metrics,
      pointPlacement: getMinorTickInterval(dailyMetrics),
    };

    if (dailyEntry.day) {
      const dayStartTimestamp = moment.utc(Number(dailyEntry.day)).startOf('day').valueOf();
      data.x = dayStartTimestamp;
    }

    return data;
  }

  while (series.length < dailyMetrics[0].metrics.length) {
    const seriesData = Array.from(dailyMetrics, mapDataToPoint);

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
      states: {},
    });

    const columnColors = [{
      linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
      stops: [
        [0, fadeColor(color, 0.6)],
        [1, fadeColor(color, 0)],
      ],
    }];

    const columnStates = {
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

    if (presetConfig && presetConfig.type) {
      seriesConfig.type = presetConfig.type;

      if (presetConfig.type === 'column') {
        seriesConfig.colors = columnColors;
        seriesConfig.borderColor = seriesConfig.color;
        seriesConfig.states = columnStates;
      }
    }

    if (seriesConfig.data[0].metricData.key === 'posts_count') {
      seriesConfig.type = 'column';
      seriesConfig.colors = columnColors;
      seriesConfig.borderColor = color;
      seriesConfig.states = columnStates;
    }

    series.push(seriesConfig);
    metricIndex += 1;
  }
  return series;
}

function prepareData(
  dailyMetrics,
  timezone,
  profileService,
  isCustomMode = false,
  presetConfig = null,
) {
  const config = Object.assign({}, chartConfig);

  config.xAxis = Object.assign({}, chartConfig.xAxis, {
    minorTickInterval: getMinorTickInterval(dailyMetrics),
  });

  if (presetConfig && presetConfig.xAxis.categories) {
    delete config.xAxis.labels.format;
    delete config.xAxis.labels.align;
    delete config.xAxis.type;
    config.xAxis.crosshair = false;
    config.xAxis.categories = presetConfig.xAxis.categories;
  }

  config.series = prepareSeries(dailyMetrics, timezone, profileService, isCustomMode, presetConfig);
  setYAxisScale(config.series, config.xAxis, config.yAxis);
  return config;
}

function prepareChartOptions(
  data,
  isCustomMode,
  presets,
  profileService,
  selectedMetrics,
  selectedPreset,
  timezone,
) {
  if (isCustomMode) {
    const dailyMetrics = data.map(d => ({
      day: d.day,
      metrics: d.metrics.filter(m => (
        m.label === selectedMetrics[0].label ||
        m.label === selectedMetrics[1].label
      )),
    }));
    return prepareData(
      dailyMetrics,
      timezone,
      profileService,
      isCustomMode,
    );
  }
  return prepareData(
    presets[selectedPreset].data,
    timezone,
    profileService,
    false,
    presets[selectedPreset],
  );
}

class Chart extends PureComponent {
  render() {
    const {
      data,
      mode,
      presets,
      profileService,
      pngExportId,
      selectedMetrics,
      selectedPreset,
      timezone,
    } = this.props;

    const isCustomMode = mode === 1;
    const charOptions = prepareChartOptions(
      data,
      isCustomMode,
      presets,
      profileService,
      selectedMetrics,
      selectedPreset,
      timezone,
    );
    return (
      <div id={`js-dom-to-png-${pngExportId}`}>
        <ReactHighcharts config={charOptions} />
        <Footer
          selectedMetrics={selectedMetrics}
          mode={mode}
          presets={presets}
          selectedPreset={selectedPreset}
        />
      </div>
    );
  }
}

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string,
    metric: PropTypes.shape({
      color: PropTypes.string,
      diff: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      postsCount: PropTypes.number.isRequired,
    }),
  })).isRequired,
  profileService: PropTypes.string.isRequired,
  pngExportId: PropTypes.string,
  timezone: PropTypes.string.isRequired,
  mode: PropTypes.number,
  selectedMetrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
  })).isRequired,
  selectedPreset: PropTypes.number,
  presets: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
      metrics: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        label: PropTypes.string,
        value: PropTypes.number.isRequired,
      })),
    })),
  })),
};

Chart.defaultProps = {
  isCustomMode: false,
  pngExportId: 'common',
  presets: null,
  selectedPreset: null,
  mode: 1,
};

export default Chart;
