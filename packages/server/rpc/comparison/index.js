
const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');
const moment = require('moment');
const DateRange = require('../utils/DateRange');

const METRIC_CONFIGS_BY_KEY = {
  audience: {
    facebook: {
      label: 'Fans',
      color: '#ced7df',
    },
    instagram: {
      label: 'Followers',
      color: '#FEC78B',
    },
    twitter: {
      label: 'Followers',
      color: '#3A92D3',
    },
  },
  reach: {
    facebook: {
      label: 'Impressions',
      color: '#ced7df',
    },
    instagram: {
      label: 'Impressions',
      color: '#FEC78B',
    },
    twitter: {
      label: 'Impressions',
      color: '#3A92D3',
    },
  },
  likes: {
    facebook: {
      label: 'Likes',
      color: '#ced7df',
    },
    instagram: {
      label: 'Likes',
      color: '#FEC78B',
    },
    twitter: {
      label: 'Likes',
      color: '#3A92D3',
    },
  },
  engagement: {
    facebook: {
      label: 'Engagement',
      color: '#ced7df',
    },
    instagram: {
      label: 'Engagement',
      color: '#FEC78B',
    },
    twitter: {
      label: 'Engagement',
      color: '#3A92D3',
    },
  },
  comments: {
    facebook: {
      label: 'Comments',
      color: '#ced7df',
    },
    instagram: {
      label: 'Comments',
      color: '#FEC78B',
    },
    twitter: {
      label: 'Comments',
      color: '#3A92D3',
    },
  },
};

const formatDailyData = (day, value, profileService, metricKey) => {
  const label = METRIC_CONFIGS_BY_KEY[metricKey][profileService].label;
  const color = METRIC_CONFIGS_BY_KEY[metricKey][profileService].color;
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
    return data.profilesMetricData;
  });

  const profileTotals = Array.from(profileIds, (id) => {
    const data = result[id];
    return data.profileTotals;
  });

  const formattedProfilesMetricData = Array.from(profilesMetricData, (data) => {
    const timezone = data.timezone;
    return {
      dailyData: data.dailyData.map(d =>
        formatDailyData(
          d.day,
          d.value,
          data.service,
          metricKey,
        ),
      ),
      service: data.service,
      timezone,
    };
  });

  const formattedProfileTotals = Array.from(profileTotals, (data) => {
    const label = METRIC_CONFIGS_BY_KEY[metricKey][data.service].label;
    const color = METRIC_CONFIGS_BY_KEY[metricKey][data.service].color;
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
