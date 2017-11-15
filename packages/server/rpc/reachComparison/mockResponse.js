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
          {
            day: 1504310400000,
            value: 25,
          },
          {
            day: 1504396800000,
            value: 40,
          },
          {
            day: 1504483200000,
            value: 10,
          },
          {
            day: 1504569600000,
            value: 70,
          },
          {
            day: 1504656000000,
            value: 100,
          },
        ],
        service: 'facebook',
        timezone: 'America/New_York',
      },
    },
  },
};

export const rpcFinalResponse = {
  profileTotals: [
    {
      currentPeriodDiff: 20,
      currentPeriodTotal: 1000,
      metric: {
        color: '#ced7df',
        label: 'Impressions',
      },
      profileId: 'profile1234',
      username: 'Buffer',
    },
  ],
  profilesMetricData: [
    {
      dailyData: [
        {
          day: 1504137600000,
          metric: {
            color: '#ced7df',
            label: 'Impressions',
            value: 50,
          },
        },
        {
          day: 1504224000000,
          metric: {
            color: '#ced7df',
            label: 'Impressions',
            value: 100,
          },
        },
        {
          day: 1504310400000,
          metric: {
            color: '#ced7df',
            label: 'Impressions',
            value: 25,
          },
        },
        {
          day: 1504396800000,
          metric: {
            color: '#ced7df',
            label: 'Impressions',
            value: 40,
          },
        },
        {
          day: 1504483200000,
          metric: {
            color: '#ced7df',
            label: 'Impressions',
            value: 10,
          },
        },
        {
          day: 1504569600000,
          metric: {
            color: '#ced7df',
            label: 'Impressions',
            value: 70,
          },
        },
        {
          day: 1504656000000,
          metric: {
            color: '#ced7df',
            label: 'Impressions',
            value: 100,
          },
        },
      ],
      service: 'facebook',
      timezone: 'America/New_York',
    },
  ],
};
