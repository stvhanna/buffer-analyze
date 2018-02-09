export const response = {
  response: {
    profile1234: {
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
    ],
  };
}

export const rpcFinalResponse = {
  audience: getParsedResponse('Fans'),
  reach: getParsedResponse('Impressions'),
  likes: getParsedResponse('Likes'),
  engagement: getParsedResponse('Engagement'),
  comments: getParsedResponse('Comments'),
};
