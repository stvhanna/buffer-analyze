
const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');
const moment = require('moment');
const DateRange = require('../utils/DateRange');

const METRIC_KEYS = [
  'audience',
  'reach',
  'likes',
  'engagement',
  'comments',
];

const PROFILE_COLORS = [
  '#53CBB0',
  '#168EEA',
  '#C53DD2',
  '#E53C5F',
  '#F2994A',
];

const METRIC_CONFIGS_BY_KEY = {
  audience: {
    facebook: {
      label: 'Fans',
    },
    instagram: {
      label: 'Followers',
    },
    twitter: {
      label: 'Followers',
    },
  },
  reach: {
    facebook: {
      label: 'Impressions',
    },
    instagram: {
      label: 'Impressions',
    },
    twitter: {
      label: 'Impressions',
    },
  },
  likes: {
    facebook: {
      label: 'Likes',
    },
    instagram: {
      label: 'Likes',
    },
    twitter: {
      label: 'Likes',
    },
  },
  engagement: {
    facebook: {
      label: 'Engagement',
    },
    instagram: {
      label: 'Engagement',
    },
    twitter: {
      label: 'Engagement',
    },
  },
  comments: {
    facebook: {
      label: 'Comments',
    },
    instagram: {
      label: 'Comments',
    },
    twitter: {
      label: 'Comments',
    },
  },
};

const formatDailyData = (day, value, profileService, metricKey, profileIndex) => {
  const label = METRIC_CONFIGS_BY_KEY[metricKey][profileService].label;
  const color = PROFILE_COLORS[profileIndex];
  return {
    day,
    metric: {
      label,
      value,
      color,
    },
  };
};

function getDaysFromProfilesMetricData(profileIds, rawData, metricKey) {
  const validDailyData = profileIds
    .map(profileId => rawData[profileId][metricKey].profilesMetricData.dailyData)
    .filter(dailyData => dailyData.length > 0);
  return validDailyData[0].map(dayData => dayData.day);
}

function getDailyData(days, data, metricKey, profileIndex) {
  return days.map((day, index) =>
    formatDailyData(
      day,
      data.dailyData[index] ? data.dailyData[index].value : null,
      data.service,
      metricKey,
      profileIndex,
    ),
  );
}

function formatData(rawData, metricKey) {
  const profileIds = Object.keys(rawData);

  const profilesMetricData = Array.from(profileIds, (id) => {
    const data = rawData[id];
    if (data[metricKey] === undefined) return null;
    return Object.assign({ profileId: id }, data[metricKey].profilesMetricData);
  }).filter(e => e !== null);

  const profileTotals = Array.from(profileIds, (id) => {
    const data = rawData[id];
    if (data[metricKey] === undefined) return null;
    return data[metricKey].profileTotals;
  }).filter(e => e !== null);

  if (profilesMetricData.length === 0) return null;

  const days = getDaysFromProfilesMetricData(profileIds, rawData, metricKey);

  const formattedProfilesMetricData = Array.from(profilesMetricData, (data, profileIndex) => ({
    profileId: data.profileId,
    dailyData: getDailyData(days, data, metricKey, profileIndex),
  }));

  const formattedProfileTotals = Array.from(profileTotals, (data, profileIndex) => {
    const label = METRIC_CONFIGS_BY_KEY[metricKey][data.service].label;
    const color = PROFILE_COLORS[profileIndex];
    return {
      metric: {
        label,
        color,
      },
      currentPeriodTotal: data.currentPeriodTotal,
      currentPeriodDiff: data.currentPeriodDiff,
      profileId: data.profileId,
      username: data.username,
      service: data.service,
    };
  });

  return {
    profilesMetricData: formattedProfilesMetricData,
    profileTotals: formattedProfileTotals,
  };
}

function parseResponse(response) {
  const metricsData = METRIC_KEYS.map(metric => formatData(response, metric));
  const metrics = {};
  METRIC_KEYS.forEach((metricKey, index) => {
    const data = metricsData[index];
    if (data !== null) metrics[metricKey] = data;
  });
  return {
    metrics,
  };
}

module.exports = method(
  'comparison',
  'get daily comparison data for the given profiles',
  ({ profileIds, startDate, endDate }) => {
    const start = moment.unix(startDate).format('MM/DD/YYYY');
    const end = moment.unix(endDate).format('MM/DD/YYYY');
    const dateRange = new DateRange(start, end);
    return rp({
      uri: `${process.env.ANALYZE_API_ADDR}/comparison`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        profiles: profileIds,
        start_date: dateRange.start,
        end_date: dateRange.end,
        metrics: METRIC_KEYS,
      },
      json: true,
    })
      .then(({ response }) => parseResponse(response))
      .catch(() => {});
  });
