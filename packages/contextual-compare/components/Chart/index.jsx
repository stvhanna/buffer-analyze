import PropTypes from 'prop-types';
import React from 'react';
import ReactHighcharts from 'react-highcharts';
import moment from 'moment';

import {
  color as metricsColor,
} from '@bufferapp/analyze-shared-components/style';

import Footer from '../Footer';

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

function setyAxisScale([primarySeries, secondarySeries], xAxis) {
  // we are using two scales only if there is a siginificative difference in scale
  const yAxisMax = getMaxValue(primarySeries.data);
  if (secondarySeries) {
    const secondaryYAxisMax = getMaxValue(secondarySeries.data);
    const maxScaleDifference = 0.7;
    let scaleDifference = 0;
    if (yAxisMax > secondaryYAxisMax) {
      scaleDifference = (Math.log10(yAxisMax) - Math.log10(secondaryYAxisMax));
    } else {
      scaleDifference = (Math.log10(secondaryYAxisMax) - Math.log10(yAxisMax));
    }
    if (scaleDifference >= maxScaleDifference && !xAxis.categories) {
      secondarySeries.yAxis = 1;
    } else {
      secondarySeries.yAxis = 0;
    }
  }
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
      pointPlacement: getTickInterval(dailyMetrics),
    };

    if (dailyEntry.day) {
      const dayStartTimestamp = moment.tz(Number(dailyEntry.day), timezone).startOf('day').valueOf();
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

    if (presetConfig && presetConfig.type) {
      seriesConfig.type = presetConfig.type;

      if (presetConfig.type === 'column') {
        seriesConfig.colors = [{
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, fadeColor(color, 0.6)],
            [1, fadeColor(color, 0)],
          ],
        }];
        seriesConfig.borderColor = seriesConfig.color;
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
    minorTickInterval: getTickInterval(dailyMetrics),
  });

  if (presetConfig && presetConfig.xAxis.categories) {
    delete config.xAxis.labels.format;
    delete config.xAxis.labels.align;
    delete config.xAxis.type;
    config.xAxis.crosshair = false;
    config.xAxis.categories = presetConfig.xAxis.categories;
  }

  config.series = prepareSeries(dailyMetrics, timezone, profileService, isCustomMode, presetConfig);
  setyAxisScale(config.series, config.xAxis);
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

const Chart = ({
  data,
  mode,
  presets,
  profileService,
  selectedMetrics,
  selectedPreset,
  timezone,
}) => {
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
  ReactHighcharts.Highcharts.setOptions(
    {
      global: {
        getTimezoneOffset: timestamp => -moment.tz(timestamp, timezone).utcOffset(),
      },
    },
  );
  return (
    <div id="js-dom-to-png-contextual">
      <ReactHighcharts config={charOptions} />
      <Footer
        selectedMetrics={selectedMetrics}
        mode={mode}
        presets={presets}
        selectedPreset={selectedPreset}
      />
    </div>
  );
};

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
  timezone: PropTypes.string.isRequired,
  mode: PropTypes.number.isRequired,
  selectedMetrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
  })).isRequired,
  selectedPreset: PropTypes.number.isRequired,
  presets: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
      metrics: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        label: PropTypes.string,
        value: PropTypes.number.isRequired,
      })),
    })),
  })).isRequired,
};

Chart.defaultProps = {
  isCustomMode: false,
};

export default Chart;
