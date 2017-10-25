
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

const requestProfileAudienceData = (profileId, dateRange, accessToken) =>
  rp({
    uri: `${process.env.API_ADDR}/1/profiles/${profileId}/analytics/daily_totals.json`,
    method: 'GET',
    strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
    qs: {
      access_token: accessToken,
      start_date: dateRange.start,
      end_date: dateRange.end,
    },
    json: true,
  });

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


function formatData(profileAudienceData, profileService) {
  const profilesMetricData = profileAudienceData.profileAudienceData;
  const profileTotals = profileAudienceData.profileTotals;

  const formattedProfilesMetricData = Array.from(profilesMetricData, (data) => {
    return {
      dailyData: data.dailyData.map(d =>
        formatDailyData(
          d.day,
          d.value,
          profileService,
        ),
      ),
      service: profileService,
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
  'fetch analytics audience for profiles and pages',
  ({ profileId, profileService, startDate, endDate }, { session }) => {
    const end = moment.unix(endDate).format('MM/DD/YYYY');
    const start = moment.unix(startDate).format('MM/DD/YYYY');
    const dateRange = new DateRange(start, end);

    // for testing
    return {
      profilesMetricData: [],
      profileTotals: [],
    };

    // const profileAudienceData = requestProfileAudienceData(
    //   profileId,
    //   dateRange,
    //   session.accessToken,
    // );

    // return Promise
    //   .all([
    //     profileAudienceData,
    //   ])
    //   .then((response) => {
    //     const profileAudienceDataResult = response[0].response;
    //     return formatData(
    //       profileAudienceDataResult,
    //       profileService,
    //     );
    //   })
    //   .catch(() => ({
    //     profilesMetricData: [],
    //     profileTotals: [],
    //   }));
  },
);
