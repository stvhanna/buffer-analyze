export default [
  {
    label: 'How does post frequency affect my fan count?',
    description: 'Already it was conjectured that this might be the well-known interplan industrialist Palmer Eldritch, who had gone to the Prox system a decade ago at the invitation of the Prox Council of humanoid types; they had wanted him to modernize their autofacs along Terran lines. Nothing had been heard from Eldritch since. Now this.',
    hideDate: true,
    showUpdatesCount: false,
    showMetricsList: true,
    rewardWording: 'Your {category} posts earned on average:',
    type: 'column',
    xAxis: {
      categories:
      ['Video', 'Image'],
    },
    yAxis: {
      metrics: [
        {
          key: 'post_impressions',
          label: 'Impressions',
        },
        {
          key: 'new_followers',
          label: 'new fans',
        },
        {
          key: 'post_reach',
          label: 'reach',
        },
      ],
    },
    data: [
      {
        category: 'Video',
        metrics: [
          {
            key: 'post_impressions',
            label: 'impressions',
            value: 38,
          },
          {
            key: 'new_followers',
            label: 'new fans',
            value: 69,
          },
          {
            key: 'post_reach',
            label: 'reach',
            value: 42,
          },
        ],
      },
      {
        category: 'Image',
        metrics: [
          {
            key: 'post_impressions',
            label: 'impressions',
            value: 1,
          },
          {
            key: 'new_followers',
            label: 'new fans',
            value: 63,
          },
          {
            key: 'post_reach',
            label: 'reach',
            value: 42,
          },
        ],
      },
    ],
  },
  {
    label: 'How does post frequency affect te reach per post?',
    description: 'Discover how your posting frequency affects your fan count.',
    showUpdatesCount: false,
    rewardWording: 'and you {gained|lost} {value} [+new] fans.',
    xAxis: {},
    yAxis: {
      metrics: [
        {
          key: 'posts_count',
          label: 'posts',
        },
        {
          key: 'post_reach',
          label: 'reach',
        },
      ],
    },
    data: [
      {
        day: '1507852800000',
        metrics: [
          {
            key: 'posts_count',
            label: 'posts',
            value: 1,
          },
          {
            key: 'post_reach',
            label: 'reach',
            value: 56831,
          },
        ],
      },
      {
        day: '1507939200000',
        metrics: [
          {
            key: 'posts_count',
            label: 'posts',
            value: 1,
          },
          {
            key: 'post_reach',
            label: 'reach',
            value: 36682,
          },
        ],
      },
      {
        day: '1508025600000',
        metrics: [
          {
            key: 'posts_count',
            label: 'posts',
            value: 0,
          },
          {
            key: 'post_reach',
            label: 'reach',
            value: 26146,
          },
        ],
      },
      {
        day: '1508112000000',
        metrics: [
          {
            key: 'posts_count',
            label: 'posts',
            value: 0,
          },
          {
            key: 'post_reach',
            label: 'reach',
            value: 49864,
          },
        ],
      },
      {
        day: '1508198400000',
        metrics: [
          {
            key: 'posts_count',
            label: 'posts',
            value: 0,
          },
          {
            key: 'post_reach',
            label: 'reach',
            value: 45470,
          },
        ],
      },
      {
        day: '1508284800000',
        metrics: [
          {
            key: 'posts_count',
            label: 'posts',
            value: 0,
          },
          {
            key: 'post_reach',
            label: 'reach',
            value: 36530,
          },
        ],
      },
      {
        day: '1508371200000',
        metrics: [
          {
            key: 'posts_count',
            label: 'posts',
            value: 1,
          },
          {
            key: 'post_reach',
            label: 'reach',
            value: 33909,
          },
        ],
      },
    ],
  },
];
