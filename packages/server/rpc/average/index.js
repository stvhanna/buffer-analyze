const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');
const DateRange = require('../utils/DateRange');

// We are using this to filter down the metrics we want
const LABELS = {
  // Facebook metrics
  facebook: {
    post_impressions: 'Average impressions per post',
    page_engagements: 'Average engagements per post',
    post_clicks: 'Average clicks per post',
  },
  // Twitter metrics
  twitter: {
    impressions: 'Average impressions per post',
    engagements: 'Average engagements per post',
    url_clicks: 'Average clicks per post',
  },
  // Instagram metrics
  instagram: {
    impressions: 'Average impressions per post',
    likes: 'Average likes per post',
    comments: 'Average comments per post',
  },
};

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

function percentageDifference (value, pastValue) {
  if (pastValue === 0 && value === 0) return 0;
  const difference = value - pastValue;
  if (pastValue === 0) pastValue = 1; // can't divide by 0
  return Math.ceil((difference / pastValue) * 100);
}

function averageValue(value, quantity) {
  if (value === 0) return 0;
  if (quantity === 0) quantity = 1; // can't divide by 0
  return Math.round(value / quantity);
}

const summarize = (
  metriKey,
  profileService,
  currentPeriod,
  currentPeriodPostCount,
  pastPeriod,
  pastPeriodPostCount,
) => {
  const pastValue = averageValue(pastPeriod[metriKey], pastPeriodPostCount);
  const value = averageValue(currentPeriod[metriKey], currentPeriodPostCount);
  const label = LABELS[profileService][metriKey];
  if (label) {
    return {
      diff: percentageDifference(value, pastValue),
      label: LABELS[profileService][metriKey],
      value,
    };
  }
  return null;
};

function formatTotals(
  currentPeriodResult,
  currentPeriodPostCount,
  pastPeriodResult,
  pastPeriodPostCount,
  profileService,
) {
  return Object
    .keys(currentPeriodResult)
    .map(metriKey =>
      summarize(
        metriKey,
        profileService,
        currentPeriodResult,
        currentPeriodPostCount,
        pastPeriodResult,
        pastPeriodPostCount,
      ),
    )
    .filter(metric => metric !== null);
}

function formatDaily(
  currentPeriodDailyTotalsResult,
  pastPeriodDailyTotalsResult,
  profileService,
) {
  const currentPeriodDays = Object.keys(currentPeriodDailyTotalsResult);
  const pastPeriodDays = Object.keys(pastPeriodDailyTotalsResult);
  const daily = Array.from(currentPeriodDays, (day, index) => ({
    day,
    currentPeriodMetrics: currentPeriodDailyTotalsResult[day],
    pastPeriodMetrics: pastPeriodDailyTotalsResult[pastPeriodDays[index]],
    currentPeriodPostCount: currentPeriodDailyTotalsResult[day].posts_count,
    pastPeriodPostCount: pastPeriodDailyTotalsResult[pastPeriodDays[index]].posts_count,
  })).map((data) => {
    const dailyMetrics = Object.keys(data.currentPeriodMetrics);
    return {
      day: data.day,
      metrics: dailyMetrics.map(metriKey =>
        summarize(
          metriKey,
          profileService,
          data.currentPeriodMetrics,
          data.currentPeriodPostCount,
          data.pastPeriodMetrics,
          data.pastPeriodPostCount,
        ),
      ).filter(metric => metric !== null),
    };
  });
  return daily;
}

function formatData(
  currentPeriodResult,
  currentPeriodPostCount,
  pastPeriodResult,
  pastPeriodPostCount,
  currentPeriodDailyTotalsResult,
  pastPeriodDailyTotalsResult,
  profileService,
) {
  const totals = formatTotals(
    currentPeriodResult,
    currentPeriodPostCount,
    pastPeriodResult,
    pastPeriodPostCount,
    profileService,
  );

  const daily = formatDaily(
    currentPeriodDailyTotalsResult,
    pastPeriodDailyTotalsResult,
    profileService,
  );

  return {
    totals,
    daily,
  };
}

module.exports = method(
  'average',
  'fetch analytics average for profiles and pages',
  ({ profileId, profileService, startDate, endDate }, { session }) => {
    const dateRange = new DateRange(startDate, endDate);
    const pastDateRange = dateRange.getPreviousDateRange();

    const currentPeriodTotals = requestTotals(profileId,
      profileService,
      dateRange,
      session.analyze.accessToken,
    );
    const pastPeriodTotals = requestTotals(profileId,
      profileService,
      pastDateRange,
      session.analyze.accessToken,
    );

    const currentPeriodDailyTotals = requestDailyTotals(profileId,
      profileService,
      dateRange,
      session.analyze.accessToken,
    );
    const pastPeriodDailyTotals = requestDailyTotals(profileId,
      profileService,
      pastDateRange,
      session.analyze.accessToken,
    );

    return Promise
      .all([currentPeriodTotals, pastPeriodTotals, currentPeriodDailyTotals, pastPeriodDailyTotals])
      .then((response) => {
        const currentPeriodTotalsResult = response[0].response;
        const pastPeriodTotalsResult = response[1].response;
        const currentPeriodTotalsPostCount = currentPeriodTotalsResult.posts_count;
        const pastPeriodTotalsPostCount = pastPeriodTotalsResult.posts_count;

        const currentPeriodDailyTotalsResult = response[2].response;
        const pastPeriodDailyTotalsResult = response[3].response;

        return formatData(
          currentPeriodTotalsResult,
          currentPeriodTotalsPostCount,
          pastPeriodTotalsResult,
          pastPeriodTotalsPostCount,
          currentPeriodDailyTotalsResult,
          pastPeriodDailyTotalsResult,
          profileService,
        );
      })
      .catch(() => ({
        totals: [],
        daily: [],
      }));
  },
);
