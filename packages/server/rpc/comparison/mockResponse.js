export const response = {
  response: {
    profile1234: {
      audience: {
        profileTotals: {
          currentPeriodDiff: 20,
          currentPeriodTotal: 1000,
          profileId: 'profile1234',
          service: 'facebook',
          username: 'Buffer',
        },
        profilesMetricData: {
          dailyData: [
            {
              day: 1504137600000,
              value: 50,
            },
            {
              day: 1504224000000,
              value: 100,
            },
          ],
          service: 'facebook',
          timezone: 'America/New_York',
        },
      },
    },
    profile134B: {
      audience: {
        profileTotals: {
          currentPeriodDiff: 0,
          currentPeriodTotal: 0,
          profileId: 'profile134B',
          service: 'facebook',
          username: 'Buffer',
        },
        profilesMetricData: {
          dailyData: [],
          service: 'facebook',
          timezone: 'America/New_York',
        },
      },
    },
  },
};


function getParsedResponse(label) {
  return {
    profileTotals: [
      {
        currentPeriodDiff: 20,
        currentPeriodTotal: 1000,
        metric: {
          color: '#53CBB0',
          label,
        },
        profileId: 'profile1234',
        username: 'Buffer',
        service: 'facebook',
      },
      {
        currentPeriodDiff: 0,
        currentPeriodTotal: 0,
        metric: {
          color: '#168EEA',
          label,
        },
        profileId: 'profile134B',
        username: 'Buffer',
        service: 'facebook',
      },
    ],

    profilesMetricData: [
      {
        dailyData: [
          {
            day: 1504137600000,
            metric: {
              color: '#53CBB0',
              value: 50,
              label,
            },
          },
          {
            day: 1504224000000,
            metric: {
              color: '#53CBB0',
              value: 100,
              label,
            },
          },
        ],
        profileId: 'profile1234',
      },
      {
        dailyData: [
          {
            day: 1504137600000,
            metric: {
              color: '#168EEA',
              value: null,
              label,
            },
          },
          {
            day: 1504224000000,
            metric: {
              color: '#168EEA',
              value: null,
              label,
            },
          },
        ],
        profileId: 'profile134B',
      },
    ],
  };
}

export const rpcFinalResponse = {
  audience: getParsedResponse('Fans'),
};
