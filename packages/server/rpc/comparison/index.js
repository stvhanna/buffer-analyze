
const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');
const moment = require('moment');
const DateRange = require('../utils/DateRange');

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

const formatDailyData = (day, value, profileService, metricKey, index) => {
  const label = METRIC_CONFIGS_BY_KEY[metricKey][profileService].label;
  const color = PROFILE_COLORS[index];
  return {
    day,
    metric: {
      label,
      value,
      color,
    },
  };
};

function formatData(result, metricKey) {
  const profileIds = Object.keys(result);
  const profilesMetricData = Array.from(profileIds, (id) => {
    const data = result[id];
    return Object.assign({ profileId: id }, data.profilesMetricData);
  });

  const profileTotals = Array.from(profileIds, (id) => {
    const data = result[id];
    return data.profileTotals;
  });

  const formattedProfilesMetricData = Array.from(profilesMetricData, (data, index) => {
    const timezone = data.timezone;
    return {
      dailyData: data.dailyData.map(d =>
        formatDailyData(
          d.day,
          d.value,
          data.service,
          metricKey,
          index,
        ),
      ),
      profileId: data.profileId,
    };
  });

  const formattedProfileTotals = Array.from(profileTotals, (data, index) => {
    const label = METRIC_CONFIGS_BY_KEY[metricKey][data.service].label;
    const color = PROFILE_COLORS[index];
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

module.exports = method(
  'comparison',
  'get daily comparison data for the given profiles',
  ({ profileIds, startDate, endDate, metric }) => {
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
        metric,
      },
      json: true,
    }).then(({ response }) => (
      formatData(response, metric)
    )).catch(() => ({
      profilesMetricData: [],
      profileTotals: [],
    }));
  },
);
