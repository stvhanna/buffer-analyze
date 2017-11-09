
const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');
const moment = require('moment');
const DateRange = require('../utils/DateRange');

const METRICS_CONFIG = {
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
};

const formatDailyData = (day, value, profileService) => {
  const label = METRICS_CONFIG[profileService].label;
  const color = METRICS_CONFIG[profileService].color;
  return {
    day,
    metric: {
      label,
      value,
      color,
    },
  };
};

function formatData(result, profileService) {
  const profilesMetricData = result.profilesMetricData;
  const profileTotals = result.profileTotals;

  const formattedProfilesMetricData = Array.from(profilesMetricData, (data) => {
    const timezone = data.timezone;
    return {
      dailyData: data.dailyData.map(d =>
        formatDailyData(
          d.day,
          d.value,
          profileService,
        ),
      ),
      service: data.service,
      timezone,
    };
  });

  const formattedProfileTotals = Array.from(profileTotals, (data) => {
    const label = METRICS_CONFIG[profileService].label;
    const color = METRICS_CONFIG[profileService].color;
    return {
      metric: {
        label,
        color,
      },
      currentPeriodTotal: data.currentPeriodTotal,
      currentPeriodDiff: data.currentPeriodDiff,
      profileId: data.profileId,
    };
  });

  return {
    profilesMetricData: formattedProfilesMetricData,
    profileTotals: formattedProfileTotals,
  };
}

module.exports = method(
  'audience_comparison',
  'get daily audience data for profile',
  ({ profileId, profileService, startDate, endDate }) => {
    const start = moment.unix(startDate).format('MM/DD/YYYY');
    const end = moment.unix(endDate).format('MM/DD/YYYY');
    const dateRange = new DateRange(start, end);
    return rp({
      uri: `${process.env.ANALYZE_API_ADDR}/audience_comparison`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        profiles: [profileId],
        start_date: dateRange.start,
        end_date: dateRange.end,
      },
      json: true,
    }).then(({ response }) => (
      formatData(response, profileService)
    )).catch(err => console.log(err));
  },
);
