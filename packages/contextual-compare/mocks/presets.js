export default [
  {
    label: 'How does post frequency affect my fan count?',
    description: 'Already it was conjectured that this might be the well-known interplan industrialist Palmer Eldritch, who had gone to the Prox system a decade ago at the invitation of the Prox Council of humanoid types; they had wanted him to modernize their autofacs along Terran lines. Nothing had been heard from Eldritch since. Now this.',
    showUpdatesCount: true,
    rewardWording: 'and you {gained|lost} {value} [+new] fans.',
    xAxis: 'date',
    yAxis: {
      metrics: [
        {
          key: 'posts_count',
          label: 'posts',
        },
        {
          key: 'new_followers',
          label: 'new fans',
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
            key: 'new_followers',
            label: 'new fans',
            value: 69,
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
            key: 'new_followers',
            label: 'new fans',
            value: 63,
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
            key: 'new_followers',
            label: 'new fans',
            value: 48,
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
            key: 'new_followers',
            label: 'new fans',
            value: 64,
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
            key: 'new_followers',
            label: 'new fans',
            value: 74,
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
            key: 'new_followers',
            label: 'new fans',
            value: 65,
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
            key: 'new_followers',
            label: 'new fans',
            value: 58,
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
    xAxis: 'date',
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
