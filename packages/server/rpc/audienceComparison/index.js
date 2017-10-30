
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
  'fetch analytics audience for profiles and pages',
  ({ profileId, profileService, startDate, endDate }, { session }) => {
    const end = moment.unix(endDate).format('MM/DD/YYYY');
    const start = moment.unix(startDate).format('MM/DD/YYYY');
    const dateRange = new DateRange(start, end);

    // const profileAudienceDataResult = {
    //   profileAudienceData: [{
    //     dailyData: [
    //       {
    //         day: '1504137600000',
    //         value: 50,
    //       },
    //       {
    //         day: '1504224000000',
    //         value: 100,
    //       },
    //       {
    //         day: '1504310400000',
    //         value: 25,
    //       },
    //       {
    //         day: '1504396800000',
    //         value: 40,
    //       },
    //       {
    //         day: '1504483200000',
    //         value: 10,
    //       },
    //       {
    //         day: '1504569600000',
    //         value: 70,
    //       },
    //       {
    //         day: '1504656000000',
    //         value: 100,
    //       },
    //     ],
    //   }],
    //   profileTotals: [{
    //     currentPeriodTotal: 1000,
    //     currentPeriodDiff: 20,
    //     profileId: '12345',
    //   }],
    // };
    // // for testing
    // return formatData(
    //   profileAudienceDataResult,
    //   'facebook',
    // );
    // return {
    //   profilesMetricData: [],
    //   profileTotals: [],
    // };

    const profileAudienceData = requestProfileAudienceData(
      profileId,
      dateRange,
      session.accessToken,
    );

    return Promise
      .all([
        profileAudienceData,
      ])
      .then((response) => {
        const profileAudienceDataResult = response[0].response;
        // const profileAudienceDataResult = {
        //   profileAudienceData: [{
        //     dailyData: [
        //       {
        //         day: '1504137600000',
        //         value: 50,
        //       },
        //       {
        //         day: '1504224000000',
        //         value: 100,
        //       },
        //       {
        //         day: '1504310400000',
        //         value: 25,
        //       },
        //       {
        //         day: '1504396800000',
        //         value: 40,
        //       },
        //       {
        //         day: '1504483200000',
        //         value: 10,
        //       },
        //       {
        //         day: '1504569600000',
        //         value: 70,
        //       },
        //       {
        //         day: '1504656000000',
        //         value: 100,
        //       },
        //     ],
        //     timezone: 'America/New_York',
        //     service: 'facebook',
        //   }],
        //   profileTotals: [{
        //     currentPeriodTotal: 1000,
        //     currentPeriodDiff: 20,
        //     profileId: '12345',
        //   }],
        // };
        // for testing
        return formatData(
          profileAudienceDataResult,
          profileService,
        );
      })
      .catch(() => ({
        profilesMetricData: [],
        profileTotals: [],
      }));
  },
);
