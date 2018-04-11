const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');
const DateRange = require('../utils/DateRange');
const METRICS_CONFIG = require('./metricsConfig');

function shouldUseAnalyzeApi (profileService) {
  return profileService === 'instagram';
}

const requestTotals = (profileId, profileService, dateRange, accessToken) =>
  rp({
    uri: (shouldUseAnalyzeApi(profileService) ?
      `${process.env.ANALYZE_API_ADDR}/metrics/totals` :
      `${process.env.API_ADDR}/1/profiles/${profileId}/analytics/totals.json`
    ),
    method: (shouldUseAnalyzeApi(profileService) ?
      'POST' :
      'GET'
    ),
    strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
    qs: {
      access_token: accessToken,
      start_date: dateRange.start,
      end_date: dateRange.end,
      profile_id: (shouldUseAnalyzeApi(profileService) ?
        profileId :
        null
      ),
    },
    json: true,
  });

const requestDailyTotals = (profileId, profileService, dateRange, accessToken) =>
  rp({
    uri: (shouldUseAnalyzeApi(profileService) ?
      `${process.env.ANALYZE_API_ADDR}/metrics/daily_totals` :
      `${process.env.API_ADDR}/1/profiles/${profileId}/analytics/daily_totals.json`
    ),
    method: (shouldUseAnalyzeApi(profileService) ?
      'POST' :
      'GET'
    ),
    strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
    qs: {
      access_token: accessToken,
      start_date: dateRange.start,
      end_date: dateRange.end,
      profile_id: (shouldUseAnalyzeApi(profileService) ?
        profileId :
        null
      ),
    },
    json: true,
  });

function percentageDifference (value, previousValue) {
  if (previousValue === 0 && value === 0) return 0;
  const difference = value - previousValue;
  if (previousValue === 0) previousValue = 1; // can't divide by 0
  return Math.ceil((difference / previousValue) * 100);
}

const summarize = (
  metricKey,
  currentPeriod,
  currentPeriodPostCount,
  previousPeriod,
  previousPeriodPostCount,
  profileService,
) => {
  const previousValue = previousPeriod[metricKey] || 0;
  const value = currentPeriod[metricKey] || 0;
  const label = METRICS_CONFIG[profileService].config[metricKey].label;
  if (label) {
    return {
      key: metricKey,
      diff: percentageDifference(value, previousValue),
      label,
      color: METRICS_CONFIG[profileService].config[metricKey].color,
      value,
      previousValue,
      postsCount: currentPeriodPostCount,
      previousPostsCount: previousPeriodPostCount,
    };
  }
  return null;
};

function formatTotals(
  currentPeriodResult,
  currentPeriodPostCount,
  previousPeriodResult,
  previousPeriodPostCount,
  profileService,
) {
  return METRICS_CONFIG[profileService].orderedKeys
    .map(metricKey =>
      summarize(
        metricKey,
        currentPeriodResult,
        currentPeriodPostCount,
        previousPeriodResult,
        previousPeriodPostCount,
        profileService,
      ),
    )
    .filter(metric => metric !== null);
}

function formatDaily(
  currentPeriodDailyTotalsResult,
  previousPeriodDailyTotalsResult,
  profileService,
) {
  const currentPeriodDays = Object.keys(currentPeriodDailyTotalsResult);
  const previousPeriodDays = Object.keys(previousPeriodDailyTotalsResult);
  const daily = Array.from(currentPeriodDays, (day, index) => ({
    day,
    previousPeriodDay: previousPeriodDays[index] ?
      previousPeriodDays[index] :
      null,
    currentPeriodMetrics: currentPeriodDailyTotalsResult[day],
    previousPeriodMetrics: previousPeriodDays[index] ?
      previousPeriodDailyTotalsResult[previousPeriodDays[index]] :
      null,
    currentPeriodPostCount: currentPeriodDailyTotalsResult[day].posts_count,
    previousPeriodPostCount: previousPeriodDays[index] ?
      previousPeriodDailyTotalsResult[previousPeriodDays[index]].posts_count :
      null,
  })).filter(data => data.previousPeriodDay !== null).map((data) => {
    const metricKeys = METRICS_CONFIG[profileService].orderedKeys;
    console.log(metricKeys);
    return {
      day: data.day,
      previousPeriodDay: data.previousPeriodDay,
      metrics: metricKeys.map(metricKey =>
        summarize(
          metricKey,
          data.currentPeriodMetrics,
          data.currentPeriodPostCount,
          data.previousPeriodMetrics,
          data.previousPeriodPostCount,
          profileService,
        ),
      ).filter(metric => metric !== null),
    };
  });
  return daily;
}

function formatTotalPeriodDaily(formattedDailyData) {
  const totalPeriodDaily = [];
  let dayClone = {};
  let metricClone = {};
  formattedDailyData.forEach((day, dayIndex) => {
    dayClone = Object.assign({}, day, {
      metrics: [],
    });

    day.metrics.forEach((metric, metricIndex) => {
      if (metric.key === 'followers') {
        metricClone = Object.assign({}, metric);
      } else {
        metricClone = Object.assign({}, metric, {
          value: dayIndex === 0 ? metric.value :
            metric.value + totalPeriodDaily[dayIndex - 1].metrics[metricIndex].value,
          previousValue: dayIndex === 0 ? metric.previousValue :
            metric.previousValue + totalPeriodDaily[dayIndex - 1].metrics[metricIndex].previousValue,
        });
      }
      delete metricClone.diff;
      dayClone.metrics.push(metricClone);
    });

    totalPeriodDaily.push(dayClone);
  });

  return totalPeriodDaily;
}

function shouldComputeTotalPeriodDaily (profileService) {
  return profileService === 'twitter' ||
  profileService === 'instagram';
}


function formatData(
  currentPeriodResult,
  currentPeriodPostCount,
  previousPeriodResult,
  previousPeriodPostCount,
  currentPeriodDailyTotalsResult,
  previousPeriodDailyTotalsResult,
  profileService,
) {
  const totals = formatTotals(
    currentPeriodResult,
    currentPeriodPostCount,
    previousPeriodResult,
    previousPeriodPostCount,
    profileService,
  );

  const daily = formatDaily(
    currentPeriodDailyTotalsResult,
    previousPeriodDailyTotalsResult,
    profileService,
  );

  const totalPeriodDaily = shouldComputeTotalPeriodDaily(profileService) ?
    formatTotalPeriodDaily(daily) :
    [];

  return {
    totals,
    daily,
    totalPeriodDaily,
  };
}

module.exports = method(
  'compare',
  'fetch analytics compare for profiles and pages',
  ({ profileId, profileService, startDate, endDate }, { session }) => {
    const dateRange = new DateRange(startDate, endDate);
    const previousDateRange = dateRange.getPreviousDateRange();

    const currentPeriodTotals = requestTotals(
      profileId,
      profileService,
      dateRange,
      session.analyze.accessToken,
    );
    const previousPeriodTotals = requestTotals(
      profileId,
      profileService,
      previousDateRange,
      session.analyze.accessToken,
    );
    const currentPeriodDailyTotals = requestDailyTotals(
      profileId,
      profileService,
      dateRange,
      session.analyze.accessToken,
    );
    const previousPeriodDailyTotals = requestDailyTotals(
      profileId,
      profileService,
      previousDateRange,
      session.analyze.accessToken,
    );

    return Promise
      .all([
        currentPeriodTotals,
        previousPeriodTotals,
        currentPeriodDailyTotals,
        previousPeriodDailyTotals,
      ])
      .then((response) => {
        const currentPeriodTotalsResult = response[0].response;
        const previousPeriodTotalsResult = response[1].response;
        const currentPeriodTotalsPostCount = currentPeriodTotalsResult.posts_count;
        const previousPeriodTotalsPostCount = previousPeriodTotalsResult.posts_count;

        const currentPeriodDailyTotalsResult = response[2].response;
        const previousPeriodDailyTotalsResult = response[3].response;

        return formatData(
          currentPeriodTotalsResult,
          currentPeriodTotalsPostCount,
          previousPeriodTotalsResult,
          previousPeriodTotalsPostCount,
          currentPeriodDailyTotalsResult,
          previousPeriodDailyTotalsResult,
          profileService,
        );
      })
      .catch(() => ({
        totals: [],
        daily: [],
      }));
  },
);
