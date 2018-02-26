import { JSDOM } from 'jsdom';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Report from '../components/Report';

const fullReport = {
  _id: '5a9455081def8a021d6446b3',
  charts: [
    {
      chart_id: 'comparison',
      profile_id: null,
      state: {
        metricKey: 'audience',
        profileIds: [
          '58ad6d42a3fb242d3f427876',
          '585ad161eca09f054a7e5a15',
          '578609e03c080f24098b4567'
        ],
        profiles: [
          {
            id: '50e37b8f1346af5841000007',
            avatarUrl: 'https://pbs.twimg.com/profile_images/780316299964669952/09Eolfv6_normal.jpg',
            service: 'twitter',
            timezone: 'Europe/Madrid',
            username: '@msanromanv'
          },
          {
            id: '55bb5a1b93aa06c42c3c94c5',
            avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/22195506_1971836796389978_2367249897943169236_n.png?oh=1d97c219b9442137f6dbb82ea0f2541c&oe=5ADA36F2',
            service: 'facebook',
            timezone: 'Europe/Madrid',
            username: 'otter'
          },
          {
            id: '56c2e5ec671d27e303db2804',
            avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c15.0.50.50/p50x50/399548_10149999285987789_1102888142_n.png?oh=8aaa97577732ff9be924b8499eb058a0&oe=5A71E66A',
            service: 'facebook',
            timezone: 'Europe/Madrid',
            username: 'Mike Test Page'
          },
          {
            id: '578609e03c080f24098b4567',
            avatarUrl: 'https://scontent.cdninstagram.com/vp/bbbcd85ed6bd9b2c2a75945fd2ed13e5/5B15E92D/t51.2885-19/s150x150/22221340_365712507174850_3448246143207604224_n.jpg',
            service: 'instagram',
            timezone: 'Europe/Madrid',
            username: 'otter.es'
          },
          {
            id: '57ce859ccfdfb881398b456b',
            avatarUrl: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png',
            service: 'twitter',
            timezone: 'Europe/Madrid',
            username: '@miketestaccount'
          },
          {
            id: '57fe40a65852f50e368b4568',
            avatarUrl: 'https://pbs.twimg.com/profile_images/786202104423645185/aF3lNHw7_normal.jpg',
            service: 'twitter',
            timezone: 'Europe/Madrid',
            username: '@otter_es'
          },
          {
            id: '585ad161eca09f054a7e5a15',
            avatarUrl: 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/14374484_1622365318056775_1345036316_n.jpg',
            service: 'instagram',
            timezone: 'Europe/Madrid',
            username: 'msanroman'
          },
          {
            id: '58ad6d42a3fb242d3f427876',
            avatarUrl: 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/12599249_962233467146002_499879555_a.jpg',
            service: 'instagram',
            timezone: 'Europe/Madrid',
            username: 'trawband'
          },
          {
            id: '5918a336a9a4935f2209006a',
            avatarUrl: 'https://scontent.cdninstagram.com/vp/eb2a2a9c5d5dc0fd931c5b83dd665fc6/5B0A513D/t51.2885-19/s150x150/18380068_101011583807419_1552665561228378112_a.jpg',
            service: 'instagram',
            timezone: 'Europe/Madrid',
            username: 'thezenfreelancer'
          },
          {
            id: '5936a00cb42eae6542ebf0da',
            avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10409310_817694491626638_8103572630064472037_n.jpg?oh=3d94fd1f5da6e7dddfd96aa2b2a37ac2&oe=59DA201C',
            service: 'facebook',
            timezone: 'Asia/Jerusalem',
            username: 'TraW Band'
          }
        ]
      },
      _id: '5a9455081def8a021d6446b1',
      service: null,
      profile: {
        id: null,
        avatarUrl: null,
        service: null,
        timezone: null,
        username: null
      },
      metricKey: 'audience',
      profileIds: [
        '58ad6d42a3fb242d3f427876',
        '585ad161eca09f054a7e5a15',
        '578609e03c080f24098b4567'
      ],
      profiles: [
        {
          id: '50e37b8f1346af5841000007',
          avatarUrl: 'https://pbs.twimg.com/profile_images/780316299964669952/09Eolfv6_normal.jpg',
          service: 'twitter',
          timezone: 'Europe/Madrid',
          username: '@msanromanv'
        },
        {
          id: '55bb5a1b93aa06c42c3c94c5',
          avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/22195506_1971836796389978_2367249897943169236_n.png?oh=1d97c219b9442137f6dbb82ea0f2541c&oe=5ADA36F2',
          service: 'facebook',
          timezone: 'Europe/Madrid',
          username: 'otter'
        },
        {
          id: '56c2e5ec671d27e303db2804',
          avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c15.0.50.50/p50x50/399548_10149999285987789_1102888142_n.png?oh=8aaa97577732ff9be924b8499eb058a0&oe=5A71E66A',
          service: 'facebook',
          timezone: 'Europe/Madrid',
          username: 'Mike Test Page'
        },
        {
          id: '578609e03c080f24098b4567',
          avatarUrl: 'https://scontent.cdninstagram.com/vp/bbbcd85ed6bd9b2c2a75945fd2ed13e5/5B15E92D/t51.2885-19/s150x150/22221340_365712507174850_3448246143207604224_n.jpg',
          service: 'instagram',
          timezone: 'Europe/Madrid',
          username: 'otter.es'
        },
        {
          id: '57ce859ccfdfb881398b456b',
          avatarUrl: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png',
          service: 'twitter',
          timezone: 'Europe/Madrid',
          username: '@miketestaccount'
        },
        {
          id: '57fe40a65852f50e368b4568',
          avatarUrl: 'https://pbs.twimg.com/profile_images/786202104423645185/aF3lNHw7_normal.jpg',
          service: 'twitter',
          timezone: 'Europe/Madrid',
          username: '@otter_es'
        },
        {
          id: '585ad161eca09f054a7e5a15',
          avatarUrl: 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/14374484_1622365318056775_1345036316_n.jpg',
          service: 'instagram',
          timezone: 'Europe/Madrid',
          username: 'msanroman'
        },
        {
          id: '58ad6d42a3fb242d3f427876',
          avatarUrl: 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/12599249_962233467146002_499879555_a.jpg',
          service: 'instagram',
          timezone: 'Europe/Madrid',
          username: 'trawband'
        },
        {
          id: '5918a336a9a4935f2209006a',
          avatarUrl: 'https://scontent.cdninstagram.com/vp/eb2a2a9c5d5dc0fd931c5b83dd665fc6/5B0A513D/t51.2885-19/s150x150/18380068_101011583807419_1552665561228378112_a.jpg',
          service: 'instagram',
          timezone: 'Europe/Madrid',
          username: 'thezenfreelancer'
        },
        {
          id: '5936a00cb42eae6542ebf0da',
          avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10409310_817694491626638_8103572630064472037_n.jpg?oh=3d94fd1f5da6e7dddfd96aa2b2a37ac2&oe=59DA201C',
          service: 'facebook',
          timezone: 'Asia/Jerusalem',
          username: 'TraW Band'
        }
      ],
      metrics: {
        audience: {
          profilesMetricData: [
            {
              profileId: '58ad6d42a3fb242d3f427876',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Followers',
                    value: 123,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Followers',
                    value: 123,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                }
              ]
            },
            {
              profileId: '585ad161eca09f054a7e5a15',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Followers',
                    value: 324,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Followers',
                    value: 324,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Followers',
                    value: 324,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Followers',
                    value: 324,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Followers',
                    value: 324,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Followers',
                    value: 323,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Followers',
                    value: 324,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Followers',
                    value: 326,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Followers',
                    value: 326,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Followers',
                    value: 328,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Followers',
                    value: 328,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Followers',
                    value: 328,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Followers',
                    value: 335,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                }
              ]
            },
            {
              profileId: '578609e03c080f24098b4567',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Followers',
                    value: 1038,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Followers',
                    value: 1039,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Followers',
                    value: 1042,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Followers',
                    value: 1043,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Followers',
                    value: 1047,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Followers',
                    value: 1053,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Followers',
                    value: 1059,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Followers',
                    value: 1062,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Followers',
                    value: 1059,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Followers',
                    value: 1062,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Followers',
                    value: 1064,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Followers',
                    value: 1067,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Followers',
                    value: 1066,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Followers',
                    value: 1065,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Followers',
                    value: 1068,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Followers',
                    value: 1072,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Followers',
                    value: 1070,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Followers',
                    value: 1070,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Followers',
                    value: 1099,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Followers',
                    value: 1109,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Followers',
                    value: 1114,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Followers',
                    value: 1123,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Followers',
                    value: 1125,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Followers',
                    value: 1128,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Followers',
                    value: 1129,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Followers',
                    value: 1133,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Followers',
                    value: 1135,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Followers',
                    value: 1137,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Followers',
                    value: 1138,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Followers',
                    value: 1142,
                    color: '#C53DD2'
                  }
                }
              ]
            }
          ],
          profileTotals: [
            {
              metric: {
                label: 'Followers',
                color: '#53CBB0'
              },
              currentPeriodTotal: 122,
              currentPeriodDiff: 1,
              profileId: '58ad6d42a3fb242d3f427876',
              username: 'trawband',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Followers',
                color: '#168EEA'
              },
              currentPeriodTotal: 334,
              currentPeriodDiff: 4,
              profileId: '585ad161eca09f054a7e5a15',
              username: 'msanroman',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Followers',
                color: '#C53DD2'
              },
              currentPeriodTotal: 1142,
              currentPeriodDiff: 11,
              profileId: '578609e03c080f24098b4567',
              username: 'otter.es',
              service: 'instagram'
            }
          ]
        },
        reach: {
          profilesMetricData: [
            {
              profileId: '58ad6d42a3fb242d3f427876',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                }
              ]
            },
            {
              profileId: '585ad161eca09f054a7e5a15',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                }
              ]
            },
            {
              profileId: '578609e03c080f24098b4567',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                }
              ]
            }
          ],
          profileTotals: [
            {
              metric: {
                label: 'Impressions',
                color: '#53CBB0'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '58ad6d42a3fb242d3f427876',
              username: 'trawband',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Impressions',
                color: '#168EEA'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '585ad161eca09f054a7e5a15',
              username: 'msanroman',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Impressions',
                color: '#C53DD2'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '578609e03c080f24098b4567',
              username: 'otter.es',
              service: 'instagram'
            }
          ]
        },
        likes: {
          profilesMetricData: [
            {
              profileId: '58ad6d42a3fb242d3f427876',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                }
              ]
            },
            {
              profileId: '585ad161eca09f054a7e5a15',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                }
              ]
            },
            {
              profileId: '578609e03c080f24098b4567',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Likes',
                    value: 88,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Likes',
                    value: 196,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Likes',
                    value: 81,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Likes',
                    value: 157,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Likes',
                    value: 114,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Likes',
                    value: 77,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Likes',
                    value: 155,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Likes',
                    value: 81,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Likes',
                    value: 122,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Likes',
                    value: 81,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Likes',
                    value: 127,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Likes',
                    value: 76,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Likes',
                    value: 133,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                }
              ]
            }
          ],
          profileTotals: [
            {
              metric: {
                label: 'Likes',
                color: '#53CBB0'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '58ad6d42a3fb242d3f427876',
              username: 'trawband',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Likes',
                color: '#168EEA'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '585ad161eca09f054a7e5a15',
              username: 'msanroman',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Likes',
                color: '#C53DD2'
              },
              currentPeriodTotal: 133,
              currentPeriodDiff: -47,
              profileId: '578609e03c080f24098b4567',
              username: 'otter.es',
              service: 'instagram'
            }
          ]
        },
        engagement: {
          profilesMetricData: [
            {
              profileId: '58ad6d42a3fb242d3f427876',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                }
              ]
            },
            {
              profileId: '585ad161eca09f054a7e5a15',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                }
              ]
            },
            {
              profileId: '578609e03c080f24098b4567',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Engagements',
                    value: 92,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Engagements',
                    value: 199,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Engagements',
                    value: 82,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Engagements',
                    value: 162,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Engagements',
                    value: 118,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Engagements',
                    value: 81,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Engagements',
                    value: 159,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Engagements',
                    value: 86,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Engagements',
                    value: 124,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Engagements',
                    value: 83,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Engagements',
                    value: 129,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Engagements',
                    value: 79,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Engagements',
                    value: 135,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                }
              ]
            }
          ],
          profileTotals: [
            {
              metric: {
                label: 'Engagements',
                color: '#53CBB0'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '58ad6d42a3fb242d3f427876',
              username: 'trawband',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Engagements',
                color: '#168EEA'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '585ad161eca09f054a7e5a15',
              username: 'msanroman',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Engagements',
                color: '#C53DD2'
              },
              currentPeriodTotal: 135,
              currentPeriodDiff: -48,
              profileId: '578609e03c080f24098b4567',
              username: 'otter.es',
              service: 'instagram'
            }
          ]
        },
        comments: {
          profilesMetricData: [
            {
              profileId: '58ad6d42a3fb242d3f427876',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                }
              ]
            },
            {
              profileId: '585ad161eca09f054a7e5a15',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                }
              ]
            },
            {
              profileId: '578609e03c080f24098b4567',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Comments',
                    value: 4,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Comments',
                    value: 3,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Comments',
                    value: 1,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Comments',
                    value: 5,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Comments',
                    value: 4,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Comments',
                    value: 4,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Comments',
                    value: 4,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Comments',
                    value: 5,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Comments',
                    value: 2,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Comments',
                    value: 2,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Comments',
                    value: 2,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Comments',
                    value: 3,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Comments',
                    value: 2,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                }
              ]
            }
          ],
          profileTotals: [
            {
              metric: {
                label: 'Comments',
                color: '#53CBB0'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '58ad6d42a3fb242d3f427876',
              username: 'trawband',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Comments',
                color: '#168EEA'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '585ad161eca09f054a7e5a15',
              username: 'msanroman',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Comments',
                color: '#C53DD2'
              },
              currentPeriodTotal: 2,
              currentPeriodDiff: -75,
              profileId: '578609e03c080f24098b4567',
              username: 'otter.es',
              service: 'instagram'
            }
          ]
        }
      }
    },
    {
      chart_id: 'comparison',
      profile_id: null,
      state: {
        metricKey: 'likes',
        profileIds: [
          '58ad6d42a3fb242d3f427876',
          '585ad161eca09f054a7e5a15',
          '578609e03c080f24098b4567'
        ],
        profiles: [
          {
            id: '50e37b8f1346af5841000007',
            avatarUrl: 'https://pbs.twimg.com/profile_images/780316299964669952/09Eolfv6_normal.jpg',
            service: 'twitter',
            timezone: 'Europe/Madrid',
            username: '@msanromanv'
          },
          {
            id: '55bb5a1b93aa06c42c3c94c5',
            avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/22195506_1971836796389978_2367249897943169236_n.png?oh=1d97c219b9442137f6dbb82ea0f2541c&oe=5ADA36F2',
            service: 'facebook',
            timezone: 'Europe/Madrid',
            username: 'otter'
          },
          {
            id: '56c2e5ec671d27e303db2804',
            avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c15.0.50.50/p50x50/399548_10149999285987789_1102888142_n.png?oh=8aaa97577732ff9be924b8499eb058a0&oe=5A71E66A',
            service: 'facebook',
            timezone: 'Europe/Madrid',
            username: 'Mike Test Page'
          },
          {
            id: '578609e03c080f24098b4567',
            avatarUrl: 'https://scontent.cdninstagram.com/vp/bbbcd85ed6bd9b2c2a75945fd2ed13e5/5B15E92D/t51.2885-19/s150x150/22221340_365712507174850_3448246143207604224_n.jpg',
            service: 'instagram',
            timezone: 'Europe/Madrid',
            username: 'otter.es'
          },
          {
            id: '57ce859ccfdfb881398b456b',
            avatarUrl: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png',
            service: 'twitter',
            timezone: 'Europe/Madrid',
            username: '@miketestaccount'
          },
          {
            id: '57fe40a65852f50e368b4568',
            avatarUrl: 'https://pbs.twimg.com/profile_images/786202104423645185/aF3lNHw7_normal.jpg',
            service: 'twitter',
            timezone: 'Europe/Madrid',
            username: '@otter_es'
          },
          {
            id: '585ad161eca09f054a7e5a15',
            avatarUrl: 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/14374484_1622365318056775_1345036316_n.jpg',
            service: 'instagram',
            timezone: 'Europe/Madrid',
            username: 'msanroman'
          },
          {
            id: '58ad6d42a3fb242d3f427876',
            avatarUrl: 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/12599249_962233467146002_499879555_a.jpg',
            service: 'instagram',
            timezone: 'Europe/Madrid',
            username: 'trawband'
          },
          {
            id: '5918a336a9a4935f2209006a',
            avatarUrl: 'https://scontent.cdninstagram.com/vp/eb2a2a9c5d5dc0fd931c5b83dd665fc6/5B0A513D/t51.2885-19/s150x150/18380068_101011583807419_1552665561228378112_a.jpg',
            service: 'instagram',
            timezone: 'Europe/Madrid',
            username: 'thezenfreelancer'
          },
          {
            id: '5936a00cb42eae6542ebf0da',
            avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10409310_817694491626638_8103572630064472037_n.jpg?oh=3d94fd1f5da6e7dddfd96aa2b2a37ac2&oe=59DA201C',
            service: 'facebook',
            timezone: 'Asia/Jerusalem',
            username: 'TraW Band'
          }
        ]
      },
      _id: '5a94550b5f6447020808aab3',
      service: null,
      profile: {
        id: null,
        avatarUrl: null,
        service: null,
        timezone: null,
        username: null
      },
      metricKey: 'likes',
      profileIds: [
        '58ad6d42a3fb242d3f427876',
        '585ad161eca09f054a7e5a15',
        '578609e03c080f24098b4567'
      ],
      profiles: [
        {
          id: '50e37b8f1346af5841000007',
          avatarUrl: 'https://pbs.twimg.com/profile_images/780316299964669952/09Eolfv6_normal.jpg',
          service: 'twitter',
          timezone: 'Europe/Madrid',
          username: '@msanromanv'
        },
        {
          id: '55bb5a1b93aa06c42c3c94c5',
          avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/22195506_1971836796389978_2367249897943169236_n.png?oh=1d97c219b9442137f6dbb82ea0f2541c&oe=5ADA36F2',
          service: 'facebook',
          timezone: 'Europe/Madrid',
          username: 'otter'
        },
        {
          id: '56c2e5ec671d27e303db2804',
          avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c15.0.50.50/p50x50/399548_10149999285987789_1102888142_n.png?oh=8aaa97577732ff9be924b8499eb058a0&oe=5A71E66A',
          service: 'facebook',
          timezone: 'Europe/Madrid',
          username: 'Mike Test Page'
        },
        {
          id: '578609e03c080f24098b4567',
          avatarUrl: 'https://scontent.cdninstagram.com/vp/bbbcd85ed6bd9b2c2a75945fd2ed13e5/5B15E92D/t51.2885-19/s150x150/22221340_365712507174850_3448246143207604224_n.jpg',
          service: 'instagram',
          timezone: 'Europe/Madrid',
          username: 'otter.es'
        },
        {
          id: '57ce859ccfdfb881398b456b',
          avatarUrl: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png',
          service: 'twitter',
          timezone: 'Europe/Madrid',
          username: '@miketestaccount'
        },
        {
          id: '57fe40a65852f50e368b4568',
          avatarUrl: 'https://pbs.twimg.com/profile_images/786202104423645185/aF3lNHw7_normal.jpg',
          service: 'twitter',
          timezone: 'Europe/Madrid',
          username: '@otter_es'
        },
        {
          id: '585ad161eca09f054a7e5a15',
          avatarUrl: 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/14374484_1622365318056775_1345036316_n.jpg',
          service: 'instagram',
          timezone: 'Europe/Madrid',
          username: 'msanroman'
        },
        {
          id: '58ad6d42a3fb242d3f427876',
          avatarUrl: 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/12599249_962233467146002_499879555_a.jpg',
          service: 'instagram',
          timezone: 'Europe/Madrid',
          username: 'trawband'
        },
        {
          id: '5918a336a9a4935f2209006a',
          avatarUrl: 'https://scontent.cdninstagram.com/vp/eb2a2a9c5d5dc0fd931c5b83dd665fc6/5B0A513D/t51.2885-19/s150x150/18380068_101011583807419_1552665561228378112_a.jpg',
          service: 'instagram',
          timezone: 'Europe/Madrid',
          username: 'thezenfreelancer'
        },
        {
          id: '5936a00cb42eae6542ebf0da',
          avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10409310_817694491626638_8103572630064472037_n.jpg?oh=3d94fd1f5da6e7dddfd96aa2b2a37ac2&oe=59DA201C',
          service: 'facebook',
          timezone: 'Asia/Jerusalem',
          username: 'TraW Band'
        }
      ],
      metrics: {
        audience: {
          profilesMetricData: [
            {
              profileId: '58ad6d42a3fb242d3f427876',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Followers',
                    value: 123,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Followers',
                    value: 123,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                }
              ]
            },
            {
              profileId: '585ad161eca09f054a7e5a15',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Followers',
                    value: 324,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Followers',
                    value: 324,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Followers',
                    value: 324,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Followers',
                    value: 324,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Followers',
                    value: 324,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Followers',
                    value: 323,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Followers',
                    value: 324,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Followers',
                    value: 326,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Followers',
                    value: 326,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Followers',
                    value: 328,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Followers',
                    value: 328,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Followers',
                    value: 328,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Followers',
                    value: 335,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                }
              ]
            },
            {
              profileId: '578609e03c080f24098b4567',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Followers',
                    value: 1038,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Followers',
                    value: 1039,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Followers',
                    value: 1042,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Followers',
                    value: 1043,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Followers',
                    value: 1047,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Followers',
                    value: 1053,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Followers',
                    value: 1059,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Followers',
                    value: 1062,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Followers',
                    value: 1059,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Followers',
                    value: 1062,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Followers',
                    value: 1064,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Followers',
                    value: 1067,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Followers',
                    value: 1066,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Followers',
                    value: 1065,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Followers',
                    value: 1068,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Followers',
                    value: 1072,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Followers',
                    value: 1070,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Followers',
                    value: 1070,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Followers',
                    value: 1099,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Followers',
                    value: 1109,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Followers',
                    value: 1114,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Followers',
                    value: 1123,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Followers',
                    value: 1125,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Followers',
                    value: 1128,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Followers',
                    value: 1129,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Followers',
                    value: 1133,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Followers',
                    value: 1135,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Followers',
                    value: 1137,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Followers',
                    value: 1138,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Followers',
                    value: 1142,
                    color: '#C53DD2'
                  }
                }
              ]
            }
          ],
          profileTotals: [
            {
              metric: {
                label: 'Followers',
                color: '#53CBB0'
              },
              currentPeriodTotal: 122,
              currentPeriodDiff: 1,
              profileId: '58ad6d42a3fb242d3f427876',
              username: 'trawband',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Followers',
                color: '#168EEA'
              },
              currentPeriodTotal: 334,
              currentPeriodDiff: 4,
              profileId: '585ad161eca09f054a7e5a15',
              username: 'msanroman',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Followers',
                color: '#C53DD2'
              },
              currentPeriodTotal: 1142,
              currentPeriodDiff: 11,
              profileId: '578609e03c080f24098b4567',
              username: 'otter.es',
              service: 'instagram'
            }
          ]
        },
        reach: {
          profilesMetricData: [
            {
              profileId: '58ad6d42a3fb242d3f427876',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                }
              ]
            },
            {
              profileId: '585ad161eca09f054a7e5a15',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                }
              ]
            },
            {
              profileId: '578609e03c080f24098b4567',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                }
              ]
            }
          ],
          profileTotals: [
            {
              metric: {
                label: 'Impressions',
                color: '#53CBB0'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '58ad6d42a3fb242d3f427876',
              username: 'trawband',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Impressions',
                color: '#168EEA'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '585ad161eca09f054a7e5a15',
              username: 'msanroman',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Impressions',
                color: '#C53DD2'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '578609e03c080f24098b4567',
              username: 'otter.es',
              service: 'instagram'
            }
          ]
        },
        likes: {
          profilesMetricData: [
            {
              profileId: '58ad6d42a3fb242d3f427876',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                }
              ]
            },
            {
              profileId: '585ad161eca09f054a7e5a15',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                }
              ]
            },
            {
              profileId: '578609e03c080f24098b4567',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Likes',
                    value: 88,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Likes',
                    value: 196,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Likes',
                    value: 81,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Likes',
                    value: 157,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Likes',
                    value: 114,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Likes',
                    value: 77,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Likes',
                    value: 155,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Likes',
                    value: 81,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Likes',
                    value: 122,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Likes',
                    value: 81,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Likes',
                    value: 127,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Likes',
                    value: 76,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Likes',
                    value: 133,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                }
              ]
            }
          ],
          profileTotals: [
            {
              metric: {
                label: 'Likes',
                color: '#53CBB0'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '58ad6d42a3fb242d3f427876',
              username: 'trawband',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Likes',
                color: '#168EEA'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '585ad161eca09f054a7e5a15',
              username: 'msanroman',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Likes',
                color: '#C53DD2'
              },
              currentPeriodTotal: 133,
              currentPeriodDiff: -47,
              profileId: '578609e03c080f24098b4567',
              username: 'otter.es',
              service: 'instagram'
            }
          ]
        },
        engagement: {
          profilesMetricData: [
            {
              profileId: '58ad6d42a3fb242d3f427876',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                }
              ]
            },
            {
              profileId: '585ad161eca09f054a7e5a15',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                }
              ]
            },
            {
              profileId: '578609e03c080f24098b4567',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Engagements',
                    value: 92,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Engagements',
                    value: 199,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Engagements',
                    value: 82,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Engagements',
                    value: 162,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Engagements',
                    value: 118,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Engagements',
                    value: 81,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Engagements',
                    value: 159,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Engagements',
                    value: 86,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Engagements',
                    value: 124,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Engagements',
                    value: 83,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Engagements',
                    value: 129,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Engagements',
                    value: 79,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Engagements',
                    value: 135,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                }
              ]
            }
          ],
          profileTotals: [
            {
              metric: {
                label: 'Engagements',
                color: '#53CBB0'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '58ad6d42a3fb242d3f427876',
              username: 'trawband',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Engagements',
                color: '#168EEA'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '585ad161eca09f054a7e5a15',
              username: 'msanroman',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Engagements',
                color: '#C53DD2'
              },
              currentPeriodTotal: 135,
              currentPeriodDiff: -48,
              profileId: '578609e03c080f24098b4567',
              username: 'otter.es',
              service: 'instagram'
            }
          ]
        },
        comments: {
          profilesMetricData: [
            {
              profileId: '58ad6d42a3fb242d3f427876',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                }
              ]
            },
            {
              profileId: '585ad161eca09f054a7e5a15',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                }
              ]
            },
            {
              profileId: '578609e03c080f24098b4567',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Comments',
                    value: 4,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Comments',
                    value: 3,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Comments',
                    value: 1,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Comments',
                    value: 5,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Comments',
                    value: 4,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Comments',
                    value: 4,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Comments',
                    value: 4,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Comments',
                    value: 5,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Comments',
                    value: 2,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Comments',
                    value: 2,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Comments',
                    value: 2,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Comments',
                    value: 3,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Comments',
                    value: 2,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                }
              ]
            }
          ],
          profileTotals: [
            {
              metric: {
                label: 'Comments',
                color: '#53CBB0'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '58ad6d42a3fb242d3f427876',
              username: 'trawband',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Comments',
                color: '#168EEA'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '585ad161eca09f054a7e5a15',
              username: 'msanroman',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Comments',
                color: '#C53DD2'
              },
              currentPeriodTotal: 2,
              currentPeriodDiff: -75,
              profileId: '578609e03c080f24098b4567',
              username: 'otter.es',
              service: 'instagram'
            }
          ]
        }
      }
    },
    {
      chart_id: 'comparison',
      profile_id: null,
      state: {
        metricKey: 'engagement',
        profileIds: [
          '58ad6d42a3fb242d3f427876',
          '585ad161eca09f054a7e5a15',
          '578609e03c080f24098b4567'
        ],
        profiles: [
          {
            id: '50e37b8f1346af5841000007',
            avatarUrl: 'https://pbs.twimg.com/profile_images/780316299964669952/09Eolfv6_normal.jpg',
            service: 'twitter',
            timezone: 'Europe/Madrid',
            username: '@msanromanv'
          },
          {
            id: '55bb5a1b93aa06c42c3c94c5',
            avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/22195506_1971836796389978_2367249897943169236_n.png?oh=1d97c219b9442137f6dbb82ea0f2541c&oe=5ADA36F2',
            service: 'facebook',
            timezone: 'Europe/Madrid',
            username: 'otter'
          },
          {
            id: '56c2e5ec671d27e303db2804',
            avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c15.0.50.50/p50x50/399548_10149999285987789_1102888142_n.png?oh=8aaa97577732ff9be924b8499eb058a0&oe=5A71E66A',
            service: 'facebook',
            timezone: 'Europe/Madrid',
            username: 'Mike Test Page'
          },
          {
            id: '578609e03c080f24098b4567',
            avatarUrl: 'https://scontent.cdninstagram.com/vp/bbbcd85ed6bd9b2c2a75945fd2ed13e5/5B15E92D/t51.2885-19/s150x150/22221340_365712507174850_3448246143207604224_n.jpg',
            service: 'instagram',
            timezone: 'Europe/Madrid',
            username: 'otter.es'
          },
          {
            id: '57ce859ccfdfb881398b456b',
            avatarUrl: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png',
            service: 'twitter',
            timezone: 'Europe/Madrid',
            username: '@miketestaccount'
          },
          {
            id: '57fe40a65852f50e368b4568',
            avatarUrl: 'https://pbs.twimg.com/profile_images/786202104423645185/aF3lNHw7_normal.jpg',
            service: 'twitter',
            timezone: 'Europe/Madrid',
            username: '@otter_es'
          },
          {
            id: '585ad161eca09f054a7e5a15',
            avatarUrl: 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/14374484_1622365318056775_1345036316_n.jpg',
            service: 'instagram',
            timezone: 'Europe/Madrid',
            username: 'msanroman'
          },
          {
            id: '58ad6d42a3fb242d3f427876',
            avatarUrl: 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/12599249_962233467146002_499879555_a.jpg',
            service: 'instagram',
            timezone: 'Europe/Madrid',
            username: 'trawband'
          },
          {
            id: '5918a336a9a4935f2209006a',
            avatarUrl: 'https://scontent.cdninstagram.com/vp/eb2a2a9c5d5dc0fd931c5b83dd665fc6/5B0A513D/t51.2885-19/s150x150/18380068_101011583807419_1552665561228378112_a.jpg',
            service: 'instagram',
            timezone: 'Europe/Madrid',
            username: 'thezenfreelancer'
          },
          {
            id: '5936a00cb42eae6542ebf0da',
            avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10409310_817694491626638_8103572630064472037_n.jpg?oh=3d94fd1f5da6e7dddfd96aa2b2a37ac2&oe=59DA201C',
            service: 'facebook',
            timezone: 'Asia/Jerusalem',
            username: 'TraW Band'
          }
        ]
      },
      _id: '5a94550d1def8a02324906f2',
      service: null,
      profile: {
        id: null,
        avatarUrl: null,
        service: null,
        timezone: null,
        username: null
      },
      metricKey: 'engagement',
      profileIds: [
        '58ad6d42a3fb242d3f427876',
        '585ad161eca09f054a7e5a15',
        '578609e03c080f24098b4567'
      ],
      profiles: [
        {
          id: '50e37b8f1346af5841000007',
          avatarUrl: 'https://pbs.twimg.com/profile_images/780316299964669952/09Eolfv6_normal.jpg',
          service: 'twitter',
          timezone: 'Europe/Madrid',
          username: '@msanromanv'
        },
        {
          id: '55bb5a1b93aa06c42c3c94c5',
          avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/22195506_1971836796389978_2367249897943169236_n.png?oh=1d97c219b9442137f6dbb82ea0f2541c&oe=5ADA36F2',
          service: 'facebook',
          timezone: 'Europe/Madrid',
          username: 'otter'
        },
        {
          id: '56c2e5ec671d27e303db2804',
          avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c15.0.50.50/p50x50/399548_10149999285987789_1102888142_n.png?oh=8aaa97577732ff9be924b8499eb058a0&oe=5A71E66A',
          service: 'facebook',
          timezone: 'Europe/Madrid',
          username: 'Mike Test Page'
        },
        {
          id: '578609e03c080f24098b4567',
          avatarUrl: 'https://scontent.cdninstagram.com/vp/bbbcd85ed6bd9b2c2a75945fd2ed13e5/5B15E92D/t51.2885-19/s150x150/22221340_365712507174850_3448246143207604224_n.jpg',
          service: 'instagram',
          timezone: 'Europe/Madrid',
          username: 'otter.es'
        },
        {
          id: '57ce859ccfdfb881398b456b',
          avatarUrl: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png',
          service: 'twitter',
          timezone: 'Europe/Madrid',
          username: '@miketestaccount'
        },
        {
          id: '57fe40a65852f50e368b4568',
          avatarUrl: 'https://pbs.twimg.com/profile_images/786202104423645185/aF3lNHw7_normal.jpg',
          service: 'twitter',
          timezone: 'Europe/Madrid',
          username: '@otter_es'
        },
        {
          id: '585ad161eca09f054a7e5a15',
          avatarUrl: 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/14374484_1622365318056775_1345036316_n.jpg',
          service: 'instagram',
          timezone: 'Europe/Madrid',
          username: 'msanroman'
        },
        {
          id: '58ad6d42a3fb242d3f427876',
          avatarUrl: 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/12599249_962233467146002_499879555_a.jpg',
          service: 'instagram',
          timezone: 'Europe/Madrid',
          username: 'trawband'
        },
        {
          id: '5918a336a9a4935f2209006a',
          avatarUrl: 'https://scontent.cdninstagram.com/vp/eb2a2a9c5d5dc0fd931c5b83dd665fc6/5B0A513D/t51.2885-19/s150x150/18380068_101011583807419_1552665561228378112_a.jpg',
          service: 'instagram',
          timezone: 'Europe/Madrid',
          username: 'thezenfreelancer'
        },
        {
          id: '5936a00cb42eae6542ebf0da',
          avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10409310_817694491626638_8103572630064472037_n.jpg?oh=3d94fd1f5da6e7dddfd96aa2b2a37ac2&oe=59DA201C',
          service: 'facebook',
          timezone: 'Asia/Jerusalem',
          username: 'TraW Band'
        }
      ],
      metrics: {
        audience: {
          profilesMetricData: [
            {
              profileId: '58ad6d42a3fb242d3f427876',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Followers',
                    value: 123,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Followers',
                    value: 123,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                }
              ]
            },
            {
              profileId: '585ad161eca09f054a7e5a15',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Followers',
                    value: 324,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Followers',
                    value: 324,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Followers',
                    value: 324,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Followers',
                    value: 324,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Followers',
                    value: 324,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Followers',
                    value: 323,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Followers',
                    value: 324,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Followers',
                    value: 326,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Followers',
                    value: 326,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Followers',
                    value: 328,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Followers',
                    value: 328,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Followers',
                    value: 328,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Followers',
                    value: 335,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                }
              ]
            },
            {
              profileId: '578609e03c080f24098b4567',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Followers',
                    value: 1038,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Followers',
                    value: 1039,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Followers',
                    value: 1042,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Followers',
                    value: 1043,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Followers',
                    value: 1047,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Followers',
                    value: 1053,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Followers',
                    value: 1059,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Followers',
                    value: 1062,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Followers',
                    value: 1059,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Followers',
                    value: 1062,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Followers',
                    value: 1064,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Followers',
                    value: 1067,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Followers',
                    value: 1066,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Followers',
                    value: 1065,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Followers',
                    value: 1068,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Followers',
                    value: 1072,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Followers',
                    value: 1070,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Followers',
                    value: 1070,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Followers',
                    value: 1099,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Followers',
                    value: 1109,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Followers',
                    value: 1114,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Followers',
                    value: 1123,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Followers',
                    value: 1125,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Followers',
                    value: 1128,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Followers',
                    value: 1129,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Followers',
                    value: 1133,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Followers',
                    value: 1135,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Followers',
                    value: 1137,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Followers',
                    value: 1138,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Followers',
                    value: 1142,
                    color: '#C53DD2'
                  }
                }
              ]
            }
          ],
          profileTotals: [
            {
              metric: {
                label: 'Followers',
                color: '#53CBB0'
              },
              currentPeriodTotal: 122,
              currentPeriodDiff: 1,
              profileId: '58ad6d42a3fb242d3f427876',
              username: 'trawband',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Followers',
                color: '#168EEA'
              },
              currentPeriodTotal: 334,
              currentPeriodDiff: 4,
              profileId: '585ad161eca09f054a7e5a15',
              username: 'msanroman',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Followers',
                color: '#C53DD2'
              },
              currentPeriodTotal: 1142,
              currentPeriodDiff: 11,
              profileId: '578609e03c080f24098b4567',
              username: 'otter.es',
              service: 'instagram'
            }
          ]
        },
        reach: {
          profilesMetricData: [
            {
              profileId: '58ad6d42a3fb242d3f427876',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                }
              ]
            },
            {
              profileId: '585ad161eca09f054a7e5a15',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                }
              ]
            },
            {
              profileId: '578609e03c080f24098b4567',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                }
              ]
            }
          ],
          profileTotals: [
            {
              metric: {
                label: 'Impressions',
                color: '#53CBB0'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '58ad6d42a3fb242d3f427876',
              username: 'trawband',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Impressions',
                color: '#168EEA'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '585ad161eca09f054a7e5a15',
              username: 'msanroman',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Impressions',
                color: '#C53DD2'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '578609e03c080f24098b4567',
              username: 'otter.es',
              service: 'instagram'
            }
          ]
        },
        likes: {
          profilesMetricData: [
            {
              profileId: '58ad6d42a3fb242d3f427876',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                }
              ]
            },
            {
              profileId: '585ad161eca09f054a7e5a15',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                }
              ]
            },
            {
              profileId: '578609e03c080f24098b4567',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Likes',
                    value: 88,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Likes',
                    value: 196,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Likes',
                    value: 81,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Likes',
                    value: 157,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Likes',
                    value: 114,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Likes',
                    value: 77,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Likes',
                    value: 155,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Likes',
                    value: 81,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Likes',
                    value: 122,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Likes',
                    value: 81,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Likes',
                    value: 127,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Likes',
                    value: 76,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Likes',
                    value: 133,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                }
              ]
            }
          ],
          profileTotals: [
            {
              metric: {
                label: 'Likes',
                color: '#53CBB0'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '58ad6d42a3fb242d3f427876',
              username: 'trawband',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Likes',
                color: '#168EEA'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '585ad161eca09f054a7e5a15',
              username: 'msanroman',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Likes',
                color: '#C53DD2'
              },
              currentPeriodTotal: 133,
              currentPeriodDiff: -47,
              profileId: '578609e03c080f24098b4567',
              username: 'otter.es',
              service: 'instagram'
            }
          ]
        },
        engagement: {
          profilesMetricData: [
            {
              profileId: '58ad6d42a3fb242d3f427876',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                }
              ]
            },
            {
              profileId: '585ad161eca09f054a7e5a15',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                }
              ]
            },
            {
              profileId: '578609e03c080f24098b4567',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Engagements',
                    value: 92,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Engagements',
                    value: 199,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Engagements',
                    value: 82,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Engagements',
                    value: 162,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Engagements',
                    value: 118,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Engagements',
                    value: 81,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Engagements',
                    value: 159,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Engagements',
                    value: 86,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Engagements',
                    value: 124,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Engagements',
                    value: 83,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Engagements',
                    value: 129,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Engagements',
                    value: 79,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Engagements',
                    value: 135,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                }
              ]
            }
          ],
          profileTotals: [
            {
              metric: {
                label: 'Engagements',
                color: '#53CBB0'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '58ad6d42a3fb242d3f427876',
              username: 'trawband',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Engagements',
                color: '#168EEA'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '585ad161eca09f054a7e5a15',
              username: 'msanroman',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Engagements',
                color: '#C53DD2'
              },
              currentPeriodTotal: 135,
              currentPeriodDiff: -48,
              profileId: '578609e03c080f24098b4567',
              username: 'otter.es',
              service: 'instagram'
            }
          ]
        },
        comments: {
          profilesMetricData: [
            {
              profileId: '58ad6d42a3fb242d3f427876',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                }
              ]
            },
            {
              profileId: '585ad161eca09f054a7e5a15',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                }
              ]
            },
            {
              profileId: '578609e03c080f24098b4567',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Comments',
                    value: 4,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Comments',
                    value: 3,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Comments',
                    value: 1,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Comments',
                    value: 5,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Comments',
                    value: 4,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Comments',
                    value: 4,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Comments',
                    value: 4,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Comments',
                    value: 5,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Comments',
                    value: 2,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Comments',
                    value: 2,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Comments',
                    value: 2,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Comments',
                    value: 3,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Comments',
                    value: 2,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                }
              ]
            }
          ],
          profileTotals: [
            {
              metric: {
                label: 'Comments',
                color: '#53CBB0'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '58ad6d42a3fb242d3f427876',
              username: 'trawband',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Comments',
                color: '#168EEA'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '585ad161eca09f054a7e5a15',
              username: 'msanroman',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Comments',
                color: '#C53DD2'
              },
              currentPeriodTotal: 2,
              currentPeriodDiff: -75,
              profileId: '578609e03c080f24098b4567',
              username: 'otter.es',
              service: 'instagram'
            }
          ]
        }
      }
    },
    {
      chart_id: 'comparison',
      profile_id: null,
      state: {
        metricKey: 'comments',
        profileIds: [
          '58ad6d42a3fb242d3f427876',
          '585ad161eca09f054a7e5a15',
          '578609e03c080f24098b4567'
        ],
        profiles: [
          {
            id: '50e37b8f1346af5841000007',
            avatarUrl: 'https://pbs.twimg.com/profile_images/780316299964669952/09Eolfv6_normal.jpg',
            service: 'twitter',
            timezone: 'Europe/Madrid',
            username: '@msanromanv'
          },
          {
            id: '55bb5a1b93aa06c42c3c94c5',
            avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/22195506_1971836796389978_2367249897943169236_n.png?oh=1d97c219b9442137f6dbb82ea0f2541c&oe=5ADA36F2',
            service: 'facebook',
            timezone: 'Europe/Madrid',
            username: 'otter'
          },
          {
            id: '56c2e5ec671d27e303db2804',
            avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c15.0.50.50/p50x50/399548_10149999285987789_1102888142_n.png?oh=8aaa97577732ff9be924b8499eb058a0&oe=5A71E66A',
            service: 'facebook',
            timezone: 'Europe/Madrid',
            username: 'Mike Test Page'
          },
          {
            id: '578609e03c080f24098b4567',
            avatarUrl: 'https://scontent.cdninstagram.com/vp/bbbcd85ed6bd9b2c2a75945fd2ed13e5/5B15E92D/t51.2885-19/s150x150/22221340_365712507174850_3448246143207604224_n.jpg',
            service: 'instagram',
            timezone: 'Europe/Madrid',
            username: 'otter.es'
          },
          {
            id: '57ce859ccfdfb881398b456b',
            avatarUrl: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png',
            service: 'twitter',
            timezone: 'Europe/Madrid',
            username: '@miketestaccount'
          },
          {
            id: '57fe40a65852f50e368b4568',
            avatarUrl: 'https://pbs.twimg.com/profile_images/786202104423645185/aF3lNHw7_normal.jpg',
            service: 'twitter',
            timezone: 'Europe/Madrid',
            username: '@otter_es'
          },
          {
            id: '585ad161eca09f054a7e5a15',
            avatarUrl: 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/14374484_1622365318056775_1345036316_n.jpg',
            service: 'instagram',
            timezone: 'Europe/Madrid',
            username: 'msanroman'
          },
          {
            id: '58ad6d42a3fb242d3f427876',
            avatarUrl: 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/12599249_962233467146002_499879555_a.jpg',
            service: 'instagram',
            timezone: 'Europe/Madrid',
            username: 'trawband'
          },
          {
            id: '5918a336a9a4935f2209006a',
            avatarUrl: 'https://scontent.cdninstagram.com/vp/eb2a2a9c5d5dc0fd931c5b83dd665fc6/5B0A513D/t51.2885-19/s150x150/18380068_101011583807419_1552665561228378112_a.jpg',
            service: 'instagram',
            timezone: 'Europe/Madrid',
            username: 'thezenfreelancer'
          },
          {
            id: '5936a00cb42eae6542ebf0da',
            avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10409310_817694491626638_8103572630064472037_n.jpg?oh=3d94fd1f5da6e7dddfd96aa2b2a37ac2&oe=59DA201C',
            service: 'facebook',
            timezone: 'Asia/Jerusalem',
            username: 'TraW Band'
          }
        ]
      },
      _id: '5a94550eaea71500f3209042',
      service: null,
      profile: {
        id: null,
        avatarUrl: null,
        service: null,
        timezone: null,
        username: null
      },
      metricKey: 'comments',
      profileIds: [
        '58ad6d42a3fb242d3f427876',
        '585ad161eca09f054a7e5a15',
        '578609e03c080f24098b4567'
      ],
      profiles: [
        {
          id: '50e37b8f1346af5841000007',
          avatarUrl: 'https://pbs.twimg.com/profile_images/780316299964669952/09Eolfv6_normal.jpg',
          service: 'twitter',
          timezone: 'Europe/Madrid',
          username: '@msanromanv'
        },
        {
          id: '55bb5a1b93aa06c42c3c94c5',
          avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/22195506_1971836796389978_2367249897943169236_n.png?oh=1d97c219b9442137f6dbb82ea0f2541c&oe=5ADA36F2',
          service: 'facebook',
          timezone: 'Europe/Madrid',
          username: 'otter'
        },
        {
          id: '56c2e5ec671d27e303db2804',
          avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c15.0.50.50/p50x50/399548_10149999285987789_1102888142_n.png?oh=8aaa97577732ff9be924b8499eb058a0&oe=5A71E66A',
          service: 'facebook',
          timezone: 'Europe/Madrid',
          username: 'Mike Test Page'
        },
        {
          id: '578609e03c080f24098b4567',
          avatarUrl: 'https://scontent.cdninstagram.com/vp/bbbcd85ed6bd9b2c2a75945fd2ed13e5/5B15E92D/t51.2885-19/s150x150/22221340_365712507174850_3448246143207604224_n.jpg',
          service: 'instagram',
          timezone: 'Europe/Madrid',
          username: 'otter.es'
        },
        {
          id: '57ce859ccfdfb881398b456b',
          avatarUrl: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png',
          service: 'twitter',
          timezone: 'Europe/Madrid',
          username: '@miketestaccount'
        },
        {
          id: '57fe40a65852f50e368b4568',
          avatarUrl: 'https://pbs.twimg.com/profile_images/786202104423645185/aF3lNHw7_normal.jpg',
          service: 'twitter',
          timezone: 'Europe/Madrid',
          username: '@otter_es'
        },
        {
          id: '585ad161eca09f054a7e5a15',
          avatarUrl: 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/14374484_1622365318056775_1345036316_n.jpg',
          service: 'instagram',
          timezone: 'Europe/Madrid',
          username: 'msanroman'
        },
        {
          id: '58ad6d42a3fb242d3f427876',
          avatarUrl: 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/12599249_962233467146002_499879555_a.jpg',
          service: 'instagram',
          timezone: 'Europe/Madrid',
          username: 'trawband'
        },
        {
          id: '5918a336a9a4935f2209006a',
          avatarUrl: 'https://scontent.cdninstagram.com/vp/eb2a2a9c5d5dc0fd931c5b83dd665fc6/5B0A513D/t51.2885-19/s150x150/18380068_101011583807419_1552665561228378112_a.jpg',
          service: 'instagram',
          timezone: 'Europe/Madrid',
          username: 'thezenfreelancer'
        },
        {
          id: '5936a00cb42eae6542ebf0da',
          avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10409310_817694491626638_8103572630064472037_n.jpg?oh=3d94fd1f5da6e7dddfd96aa2b2a37ac2&oe=59DA201C',
          service: 'facebook',
          timezone: 'Asia/Jerusalem',
          username: 'TraW Band'
        }
      ],
      metrics: {
        audience: {
          profilesMetricData: [
            {
              profileId: '58ad6d42a3fb242d3f427876',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Followers',
                    value: 121,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Followers',
                    value: 123,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Followers',
                    value: 123,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Followers',
                    value: 122,
                    color: '#53CBB0'
                  }
                }
              ]
            },
            {
              profileId: '585ad161eca09f054a7e5a15',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Followers',
                    value: 324,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Followers',
                    value: 324,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Followers',
                    value: 324,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Followers',
                    value: 324,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Followers',
                    value: 324,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Followers',
                    value: 323,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Followers',
                    value: 324,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Followers',
                    value: 326,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Followers',
                    value: 326,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Followers',
                    value: 327,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Followers',
                    value: 328,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Followers',
                    value: 328,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Followers',
                    value: 328,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Followers',
                    value: 335,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Followers',
                    value: 334,
                    color: '#168EEA'
                  }
                }
              ]
            },
            {
              profileId: '578609e03c080f24098b4567',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Followers',
                    value: 1038,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Followers',
                    value: 1039,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Followers',
                    value: 1042,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Followers',
                    value: 1043,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Followers',
                    value: 1047,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Followers',
                    value: 1053,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Followers',
                    value: 1059,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Followers',
                    value: 1062,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Followers',
                    value: 1059,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Followers',
                    value: 1062,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Followers',
                    value: 1064,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Followers',
                    value: 1067,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Followers',
                    value: 1066,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Followers',
                    value: 1065,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Followers',
                    value: 1068,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Followers',
                    value: 1072,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Followers',
                    value: 1070,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Followers',
                    value: 1070,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Followers',
                    value: 1099,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Followers',
                    value: 1109,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Followers',
                    value: 1114,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Followers',
                    value: 1123,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Followers',
                    value: 1125,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Followers',
                    value: 1128,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Followers',
                    value: 1129,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Followers',
                    value: 1133,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Followers',
                    value: 1135,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Followers',
                    value: 1137,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Followers',
                    value: 1138,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Followers',
                    value: 1142,
                    color: '#C53DD2'
                  }
                }
              ]
            }
          ],
          profileTotals: [
            {
              metric: {
                label: 'Followers',
                color: '#53CBB0'
              },
              currentPeriodTotal: 122,
              currentPeriodDiff: 1,
              profileId: '58ad6d42a3fb242d3f427876',
              username: 'trawband',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Followers',
                color: '#168EEA'
              },
              currentPeriodTotal: 334,
              currentPeriodDiff: 4,
              profileId: '585ad161eca09f054a7e5a15',
              username: 'msanroman',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Followers',
                color: '#C53DD2'
              },
              currentPeriodTotal: 1142,
              currentPeriodDiff: 11,
              profileId: '578609e03c080f24098b4567',
              username: 'otter.es',
              service: 'instagram'
            }
          ]
        },
        reach: {
          profilesMetricData: [
            {
              profileId: '58ad6d42a3fb242d3f427876',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#53CBB0'
                  }
                }
              ]
            },
            {
              profileId: '585ad161eca09f054a7e5a15',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#168EEA'
                  }
                }
              ]
            },
            {
              profileId: '578609e03c080f24098b4567',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Impressions',
                    value: 0,
                    color: '#C53DD2'
                  }
                }
              ]
            }
          ],
          profileTotals: [
            {
              metric: {
                label: 'Impressions',
                color: '#53CBB0'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '58ad6d42a3fb242d3f427876',
              username: 'trawband',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Impressions',
                color: '#168EEA'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '585ad161eca09f054a7e5a15',
              username: 'msanroman',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Impressions',
                color: '#C53DD2'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '578609e03c080f24098b4567',
              username: 'otter.es',
              service: 'instagram'
            }
          ]
        },
        likes: {
          profilesMetricData: [
            {
              profileId: '58ad6d42a3fb242d3f427876',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#53CBB0'
                  }
                }
              ]
            },
            {
              profileId: '585ad161eca09f054a7e5a15',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#168EEA'
                  }
                }
              ]
            },
            {
              profileId: '578609e03c080f24098b4567',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Likes',
                    value: 88,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Likes',
                    value: 196,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Likes',
                    value: 81,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Likes',
                    value: 157,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Likes',
                    value: 114,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Likes',
                    value: 77,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Likes',
                    value: 155,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Likes',
                    value: 81,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Likes',
                    value: 122,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Likes',
                    value: 81,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Likes',
                    value: 127,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Likes',
                    value: 76,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Likes',
                    value: 133,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Likes',
                    value: null,
                    color: '#C53DD2'
                  }
                }
              ]
            }
          ],
          profileTotals: [
            {
              metric: {
                label: 'Likes',
                color: '#53CBB0'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '58ad6d42a3fb242d3f427876',
              username: 'trawband',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Likes',
                color: '#168EEA'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '585ad161eca09f054a7e5a15',
              username: 'msanroman',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Likes',
                color: '#C53DD2'
              },
              currentPeriodTotal: 133,
              currentPeriodDiff: -47,
              profileId: '578609e03c080f24098b4567',
              username: 'otter.es',
              service: 'instagram'
            }
          ]
        },
        engagement: {
          profilesMetricData: [
            {
              profileId: '58ad6d42a3fb242d3f427876',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#53CBB0'
                  }
                }
              ]
            },
            {
              profileId: '585ad161eca09f054a7e5a15',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#168EEA'
                  }
                }
              ]
            },
            {
              profileId: '578609e03c080f24098b4567',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Engagements',
                    value: 92,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Engagements',
                    value: 199,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Engagements',
                    value: 82,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Engagements',
                    value: 162,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Engagements',
                    value: 118,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Engagements',
                    value: 81,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Engagements',
                    value: 159,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Engagements',
                    value: 86,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Engagements',
                    value: 124,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Engagements',
                    value: 83,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Engagements',
                    value: 129,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Engagements',
                    value: 79,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Engagements',
                    value: 135,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Engagements',
                    value: null,
                    color: '#C53DD2'
                  }
                }
              ]
            }
          ],
          profileTotals: [
            {
              metric: {
                label: 'Engagements',
                color: '#53CBB0'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '58ad6d42a3fb242d3f427876',
              username: 'trawband',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Engagements',
                color: '#168EEA'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '585ad161eca09f054a7e5a15',
              username: 'msanroman',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Engagements',
                color: '#C53DD2'
              },
              currentPeriodTotal: 135,
              currentPeriodDiff: -48,
              profileId: '578609e03c080f24098b4567',
              username: 'otter.es',
              service: 'instagram'
            }
          ]
        },
        comments: {
          profilesMetricData: [
            {
              profileId: '58ad6d42a3fb242d3f427876',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#53CBB0'
                  }
                }
              ]
            },
            {
              profileId: '585ad161eca09f054a7e5a15',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#168EEA'
                  }
                }
              ]
            },
            {
              profileId: '578609e03c080f24098b4567',
              dailyData: [
                {
                  day: 1516924800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517011200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517097600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517184000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517270400000,
                  metric: {
                    label: 'Comments',
                    value: 4,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517356800000,
                  metric: {
                    label: 'Comments',
                    value: 3,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517443200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517529600000,
                  metric: {
                    label: 'Comments',
                    value: 1,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517616000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517702400000,
                  metric: {
                    label: 'Comments',
                    value: 5,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517788800000,
                  metric: {
                    label: 'Comments',
                    value: 4,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517875200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1517961600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518048000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518134400000,
                  metric: {
                    label: 'Comments',
                    value: 4,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518220800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518307200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518393600000,
                  metric: {
                    label: 'Comments',
                    value: 4,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518480000000,
                  metric: {
                    label: 'Comments',
                    value: 5,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518566400000,
                  metric: {
                    label: 'Comments',
                    value: 2,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518652800000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518739200000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518825600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518912000000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1518998400000,
                  metric: {
                    label: 'Comments',
                    value: 2,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519084800000,
                  metric: {
                    label: 'Comments',
                    value: 2,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519171200000,
                  metric: {
                    label: 'Comments',
                    value: 3,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519257600000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519344000000,
                  metric: {
                    label: 'Comments',
                    value: 2,
                    color: '#C53DD2'
                  }
                },
                {
                  day: 1519430400000,
                  metric: {
                    label: 'Comments',
                    value: null,
                    color: '#C53DD2'
                  }
                }
              ]
            }
          ],
          profileTotals: [
            {
              metric: {
                label: 'Comments',
                color: '#53CBB0'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '58ad6d42a3fb242d3f427876',
              username: 'trawband',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Comments',
                color: '#168EEA'
              },
              currentPeriodTotal: 0,
              currentPeriodDiff: 0,
              profileId: '585ad161eca09f054a7e5a15',
              username: 'msanroman',
              service: 'instagram'
            },
            {
              metric: {
                label: 'Comments',
                color: '#C53DD2'
              },
              currentPeriodTotal: 2,
              currentPeriodDiff: -75,
              profileId: '578609e03c080f24098b4567',
              username: 'otter.es',
              service: 'instagram'
            }
          ]
        }
      }
    },
    {
      chart_id: 'summary-table',
      profile_id: '50e37b8f1346af5841000007',
      state: [],
      _id: '5a94551b1def8a021b5c5d62',
      service: 'twitter',
      profile: {
        id: {
          $oid: '50e37b8f1346af5841000007'
        },
        avatarUrl: 'http://pbs.twimg.com/profile_images/780316299964669952/09Eolfv6_normal.jpg',
        service: 'twitter',
        timezone: 'Europe/Madrid',
        username: 'msanromanv'
      },
      metrics: [
        {
          value: 0,
          diff: -100,
          label: 'Posts'
        },
        {
          value: 0,
          diff: -100,
          label: 'Retweets'
        },
        {
          value: 0,
          diff: -100,
          label: 'Impressions'
        },
        {
          value: 0,
          diff: -100,
          label: 'Engagements'
        },
        {
          value: 0,
          diff: null,
          label: 'Replies'
        },
        {
          value: 0,
          diff: -100,
          label: 'Clicks'
        },
        {
          value: 0,
          diff: -100,
          label: 'Likes'
        },
        {
          value: 6,
          diff: -25,
          label: 'New Followers'
        }
      ]
    },
    {
      chart_id: 'average',
      profile_id: '50e37b8f1346af5841000007',
      state: [],
      _id: '5a945523aea7150105650e22',
      service: 'twitter',
      profile: {
        id: {
          $oid: '50e37b8f1346af5841000007'
        },
        avatarUrl: 'http://pbs.twimg.com/profile_images/780316299964669952/09Eolfv6_normal.jpg',
        service: 'twitter',
        timezone: 'Europe/Madrid',
        username: 'msanromanv'
      },
      totals: [
        {
          diff: -100,
          label: 'Impression average',
          value: 0
        },
        {
          diff: -100,
          label: 'Engagement Average',
          value: 0
        },
        {
          diff: -100,
          label: 'Click average',
          value: 0
        }
      ],
      daily: [
        {
          day: '1516924800000',
          metrics: []
        },
        {
          day: '1517011200000',
          metrics: []
        },
        {
          day: '1517097600000',
          metrics: []
        },
        {
          day: '1517184000000',
          metrics: []
        },
        {
          day: '1517270400000',
          metrics: []
        },
        {
          day: '1517356800000',
          metrics: []
        },
        {
          day: '1517443200000',
          metrics: []
        },
        {
          day: '1517529600000',
          metrics: []
        },
        {
          day: '1517616000000',
          metrics: []
        },
        {
          day: '1517702400000',
          metrics: []
        },
        {
          day: '1517788800000',
          metrics: []
        },
        {
          day: '1517875200000',
          metrics: []
        },
        {
          day: '1517961600000',
          metrics: []
        },
        {
          day: '1518048000000',
          metrics: []
        },
        {
          day: '1518134400000',
          metrics: []
        },
        {
          day: '1518220800000',
          metrics: []
        },
        {
          day: '1518307200000',
          metrics: []
        },
        {
          day: '1518393600000',
          metrics: []
        },
        {
          day: '1518480000000',
          metrics: []
        },
        {
          day: '1518566400000',
          metrics: []
        },
        {
          day: '1518652800000',
          metrics: []
        },
        {
          day: '1518739200000',
          metrics: []
        },
        {
          day: '1518825600000',
          metrics: []
        },
        {
          day: '1518912000000',
          metrics: []
        },
        {
          day: '1518998400000',
          metrics: []
        },
        {
          day: '1519084800000',
          metrics: []
        },
        {
          day: '1519171200000',
          metrics: []
        },
        {
          day: '1519257600000',
          metrics: []
        },
        {
          day: '1519344000000',
          metrics: []
        },
        {
          day: '1519430400000',
          metrics: []
        }
      ]
    },
    {
      chart_id: 'compare',
      profile_id: '50e37b8f1346af5841000007',
      state: {
        visualizePreviousPeriod: false,
        selectedMetricLabel: 'Tweets',
        profileService: 'twitter',
        dailyMode: 0
      },
      _id: '5a9455251def8a022d25ce42',
      service: 'twitter',
      profile: {
        id: {
          $oid: '50e37b8f1346af5841000007'
        },
        avatarUrl: 'http://pbs.twimg.com/profile_images/780316299964669952/09Eolfv6_normal.jpg',
        service: 'twitter',
        timezone: 'Europe/Madrid',
        username: 'msanromanv'
      },
      visualizePreviousPeriod: false,
      selectedMetricLabel: 'Tweets',
      profileService: 'twitter',
      dailyMode: 0,
      totals: [
        {
          diff: -100,
          label: 'Tweets',
          color: '#ced7df',
          value: 0,
          previousValue: 3,
          postsCount: 0,
          previousPostsCount: 3
        },
        {
          diff: -100,
          label: 'Impressions',
          color: '#FEC78B',
          value: 0,
          previousValue: 1082,
          postsCount: 0,
          previousPostsCount: 3
        },
        {
          diff: -100,
          label: 'Engagements',
          color: '#3A92D3',
          value: 0,
          previousValue: 39,
          postsCount: 0,
          previousPostsCount: 3
        },
        {
          diff: -100,
          label: 'Retweets',
          color: '#FD8F90',
          value: 0,
          previousValue: 3,
          postsCount: 0,
          previousPostsCount: 3
        },
        {
          diff: -100,
          label: 'Likes',
          color: '#8FC6DB',
          value: 0,
          previousValue: 10,
          postsCount: 0,
          previousPostsCount: 3
        },
        {
          diff: -100,
          label: 'Clicks',
          color: '#98E8B2',
          value: 0,
          previousValue: 13,
          postsCount: 0,
          previousPostsCount: 3
        },
        {
          diff: 0,
          label: 'Replies',
          color: '#D2C3AB',
          value: 0,
          previousValue: 0,
          postsCount: 0,
          previousPostsCount: 3
        },
        {
          diff: -25,
          label: 'New Followers',
          color: '#D7B5FD',
          value: 6,
          previousValue: 8,
          postsCount: 0,
          previousPostsCount: 3
        },
        {
          diff: 0,
          label: 'Total Followers',
          color: '#FDA3F3',
          value: 1056,
          previousValue: 1056,
          postsCount: 0,
          previousPostsCount: 3
        }
      ],
      daily: [
        {
          day: '1516924800000',
          previousPeriodDay: '1514332800000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: -100,
              label: 'New Followers',
              color: '#D7B5FD',
              value: 0,
              previousValue: -1
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1050,
              previousValue: 1041
            }
          ]
        },
        {
          day: '1517011200000',
          previousPeriodDay: '1514419200000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 100,
              label: 'New Followers',
              color: '#D7B5FD',
              value: 1,
              previousValue: 0
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1051,
              previousValue: 1041
            }
          ]
        },
        {
          day: '1517097600000',
          previousPeriodDay: '1514505600000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 100,
              label: 'New Followers',
              color: '#D7B5FD',
              value: 1,
              previousValue: 0
            },
            {
              diff: 2,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1052,
              previousValue: 1041
            }
          ]
        },
        {
          day: '1517184000000',
          previousPeriodDay: '1514592000000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 100,
              label: 'New Followers',
              color: '#D7B5FD',
              value: 1,
              previousValue: 0
            },
            {
              diff: 2,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1053,
              previousValue: 1041
            }
          ]
        },
        {
          day: '1517270400000',
          previousPeriodDay: '1514678400000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 200,
              label: 'New Followers',
              color: '#D7B5FD',
              value: -3,
              previousValue: -1
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1050,
              previousValue: 1040
            }
          ]
        },
        {
          day: '1517356800000',
          previousPeriodDay: '1514764800000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: -100,
              label: 'New Followers',
              color: '#D7B5FD',
              value: -1,
              previousValue: 0
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1049,
              previousValue: 1040
            }
          ]
        },
        {
          day: '1517443200000',
          previousPeriodDay: '1514851200000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'New Followers',
              color: '#D7B5FD',
              value: 1,
              previousValue: 1
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1050,
              previousValue: 1041
            }
          ]
        },
        {
          day: '1517529600000',
          previousPeriodDay: '1514937600000',
          metrics: [
            {
              diff: -100,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 2,
              previousPostsCount: 2
            },
            {
              diff: -100,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 915,
              previousPostsCount: 2
            },
            {
              diff: -100,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 35,
              previousPostsCount: 2
            },
            {
              diff: -100,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 3,
              previousPostsCount: 2
            },
            {
              diff: -100,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 10,
              previousPostsCount: 2
            },
            {
              diff: -100,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 13,
              previousPostsCount: 2
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0,
              previousPostsCount: 2
            },
            {
              diff: -80,
              label: 'New Followers',
              color: '#D7B5FD',
              value: 1,
              previousValue: 5,
              previousPostsCount: 2
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1051,
              previousValue: 1046,
              previousPostsCount: 2
            }
          ]
        },
        {
          day: '1517616000000',
          previousPeriodDay: '1515024000000',
          metrics: [
            {
              diff: -100,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 1,
              previousPostsCount: 1
            },
            {
              diff: -100,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 167,
              previousPostsCount: 1
            },
            {
              diff: -100,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 4,
              previousPostsCount: 1
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0,
              previousPostsCount: 1
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0,
              previousPostsCount: 1
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0,
              previousPostsCount: 1
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0,
              previousPostsCount: 1
            },
            {
              diff: 300,
              label: 'New Followers',
              color: '#D7B5FD',
              value: 3,
              previousValue: 0,
              previousPostsCount: 1
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1054,
              previousValue: 1046,
              previousPostsCount: 1
            }
          ]
        },
        {
          day: '1517702400000',
          previousPeriodDay: '1515110400000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: -200,
              label: 'New Followers',
              color: '#D7B5FD',
              value: 1,
              previousValue: -1
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1055,
              previousValue: 1045
            }
          ]
        },
        {
          day: '1517788800000',
          previousPeriodDay: '1515196800000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: -200,
              label: 'New Followers',
              color: '#D7B5FD',
              value: -2,
              previousValue: 0
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1053,
              previousValue: 1045
            }
          ]
        },
        {
          day: '1517875200000',
          previousPeriodDay: '1515283200000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: -133,
              label: 'New Followers',
              color: '#D7B5FD',
              value: -1,
              previousValue: 3
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1052,
              previousValue: 1048
            }
          ]
        },
        {
          day: '1517961600000',
          previousPeriodDay: '1515369600000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'New Followers',
              color: '#D7B5FD',
              value: 0,
              previousValue: 0
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1052,
              previousValue: 1048
            }
          ]
        },
        {
          day: '1518048000000',
          previousPeriodDay: '1515456000000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: -100,
              label: 'New Followers',
              color: '#D7B5FD',
              value: 0,
              previousValue: -1
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1052,
              previousValue: 1047
            }
          ]
        },
        {
          day: '1518134400000',
          previousPeriodDay: '1515542400000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: -100,
              label: 'New Followers',
              color: '#D7B5FD',
              value: 0,
              previousValue: -1
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1052,
              previousValue: 1046
            }
          ]
        },
        {
          day: '1518220800000',
          previousPeriodDay: '1515628800000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'New Followers',
              color: '#D7B5FD',
              value: 0,
              previousValue: 0
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1052,
              previousValue: 1046
            }
          ]
        },
        {
          day: '1518307200000',
          previousPeriodDay: '1515715200000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 100,
              label: 'New Followers',
              color: '#D7B5FD',
              value: 1,
              previousValue: 0
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1053,
              previousValue: 1046
            }
          ]
        },
        {
          day: '1518393600000',
          previousPeriodDay: '1515801600000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 200,
              label: 'New Followers',
              color: '#D7B5FD',
              value: 2,
              previousValue: 0
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1055,
              previousValue: 1046
            }
          ]
        },
        {
          day: '1518480000000',
          previousPeriodDay: '1515888000000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: -200,
              label: 'New Followers',
              color: '#D7B5FD',
              value: -1,
              previousValue: 1
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1054,
              previousValue: 1047
            }
          ]
        },
        {
          day: '1518566400000',
          previousPeriodDay: '1515974400000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: -200,
              label: 'New Followers',
              color: '#D7B5FD',
              value: 1,
              previousValue: -1
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1055,
              previousValue: 1046
            }
          ]
        },
        {
          day: '1518652800000',
          previousPeriodDay: '1516060800000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: -200,
              label: 'New Followers',
              color: '#D7B5FD',
              value: -2,
              previousValue: 0
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1053,
              previousValue: 1046
            }
          ]
        },
        {
          day: '1518739200000',
          previousPeriodDay: '1516147200000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'New Followers',
              color: '#D7B5FD',
              value: 0,
              previousValue: 0
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1053,
              previousValue: 1046
            }
          ]
        },
        {
          day: '1518825600000',
          previousPeriodDay: '1516233600000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: -100,
              label: 'New Followers',
              color: '#D7B5FD',
              value: 0,
              previousValue: 2
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1053,
              previousValue: 1048
            }
          ]
        },
        {
          day: '1518912000000',
          previousPeriodDay: '1516320000000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: -100,
              label: 'New Followers',
              color: '#D7B5FD',
              value: 0,
              previousValue: -1
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1053,
              previousValue: 1047
            }
          ]
        },
        {
          day: '1518998400000',
          previousPeriodDay: '1516406400000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'New Followers',
              color: '#D7B5FD',
              value: 0,
              previousValue: 0
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1053,
              previousValue: 1047
            }
          ]
        },
        {
          day: '1519084800000',
          previousPeriodDay: '1516492800000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'New Followers',
              color: '#D7B5FD',
              value: 1,
              previousValue: 1
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1054,
              previousValue: 1048
            }
          ]
        },
        {
          day: '1519171200000',
          previousPeriodDay: '1516579200000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: -100,
              label: 'New Followers',
              color: '#D7B5FD',
              value: 0,
              previousValue: -1
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1054,
              previousValue: 1047
            }
          ]
        },
        {
          day: '1519257600000',
          previousPeriodDay: '1516665600000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: -100,
              label: 'New Followers',
              color: '#D7B5FD',
              value: 0,
              previousValue: 1
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1054,
              previousValue: 1048
            }
          ]
        },
        {
          day: '1519344000000',
          previousPeriodDay: '1516752000000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: -100,
              label: 'New Followers',
              color: '#D7B5FD',
              value: 0,
              previousValue: 1
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1054,
              previousValue: 1049
            }
          ]
        },
        {
          day: '1519430400000',
          previousPeriodDay: '1516838400000',
          metrics: [
            {
              diff: 0,
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              diff: 0,
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              diff: 100,
              label: 'New Followers',
              color: '#D7B5FD',
              value: 2,
              previousValue: 1
            },
            {
              diff: 1,
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1056,
              previousValue: 1050
            }
          ]
        }
      ],
      totalPeriodDaily: [
        {
          day: '1516924800000',
          previousPeriodDay: '1514332800000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 0,
              previousValue: -1
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 1050,
              previousValue: 1041
            }
          ]
        },
        {
          day: '1517011200000',
          previousPeriodDay: '1514419200000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 1,
              previousValue: -1
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 2101,
              previousValue: 2082
            }
          ]
        },
        {
          day: '1517097600000',
          previousPeriodDay: '1514505600000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 2,
              previousValue: -1
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 3153,
              previousValue: 3123
            }
          ]
        },
        {
          day: '1517184000000',
          previousPeriodDay: '1514592000000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 3,
              previousValue: -1
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 4206,
              previousValue: 4164
            }
          ]
        },
        {
          day: '1517270400000',
          previousPeriodDay: '1514678400000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 0,
              previousValue: -2
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 5256,
              previousValue: 5204
            }
          ]
        },
        {
          day: '1517356800000',
          previousPeriodDay: '1514764800000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: -1,
              previousValue: -2
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 6305,
              previousValue: 6244
            }
          ]
        },
        {
          day: '1517443200000',
          previousPeriodDay: '1514851200000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 0
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 0,
              previousValue: -1
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 7355,
              previousValue: 7285
            }
          ]
        },
        {
          day: '1517529600000',
          previousPeriodDay: '1514937600000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 2,
              previousPostsCount: 2
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 915,
              previousPostsCount: 2
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 35,
              previousPostsCount: 2
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 3,
              previousPostsCount: 2
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 10,
              previousPostsCount: 2
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 13,
              previousPostsCount: 2
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0,
              previousPostsCount: 2
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 1,
              previousValue: 4,
              previousPostsCount: 2
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 8406,
              previousValue: 8331,
              previousPostsCount: 2
            }
          ]
        },
        {
          day: '1517616000000',
          previousPeriodDay: '1515024000000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 3,
              previousPostsCount: 1
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 1082,
              previousPostsCount: 1
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 39,
              previousPostsCount: 1
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 3,
              previousPostsCount: 1
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 10,
              previousPostsCount: 1
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 13,
              previousPostsCount: 1
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0,
              previousPostsCount: 1
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 4,
              previousValue: 4,
              previousPostsCount: 1
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 9460,
              previousValue: 9377,
              previousPostsCount: 1
            }
          ]
        },
        {
          day: '1517702400000',
          previousPeriodDay: '1515110400000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 1082
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 39
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 10
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 13
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 5,
              previousValue: 3
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 10515,
              previousValue: 10422
            }
          ]
        },
        {
          day: '1517788800000',
          previousPeriodDay: '1515196800000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 1082
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 39
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 10
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 13
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 3,
              previousValue: 3
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 11568,
              previousValue: 11467
            }
          ]
        },
        {
          day: '1517875200000',
          previousPeriodDay: '1515283200000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 1082
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 39
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 10
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 13
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 2,
              previousValue: 6
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 12620,
              previousValue: 12515
            }
          ]
        },
        {
          day: '1517961600000',
          previousPeriodDay: '1515369600000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 1082
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 39
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 10
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 13
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 2,
              previousValue: 6
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 13672,
              previousValue: 13563
            }
          ]
        },
        {
          day: '1518048000000',
          previousPeriodDay: '1515456000000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 1082
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 39
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 10
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 13
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 2,
              previousValue: 5
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 14724,
              previousValue: 14610
            }
          ]
        },
        {
          day: '1518134400000',
          previousPeriodDay: '1515542400000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 1082
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 39
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 10
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 13
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 2,
              previousValue: 4
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 15776,
              previousValue: 15656
            }
          ]
        },
        {
          day: '1518220800000',
          previousPeriodDay: '1515628800000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 1082
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 39
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 10
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 13
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 2,
              previousValue: 4
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 16828,
              previousValue: 16702
            }
          ]
        },
        {
          day: '1518307200000',
          previousPeriodDay: '1515715200000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 1082
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 39
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 10
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 13
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 3,
              previousValue: 4
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 17881,
              previousValue: 17748
            }
          ]
        },
        {
          day: '1518393600000',
          previousPeriodDay: '1515801600000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 1082
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 39
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 10
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 13
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 5,
              previousValue: 4
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 18936,
              previousValue: 18794
            }
          ]
        },
        {
          day: '1518480000000',
          previousPeriodDay: '1515888000000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 1082
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 39
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 10
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 13
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 4,
              previousValue: 5
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 19990,
              previousValue: 19841
            }
          ]
        },
        {
          day: '1518566400000',
          previousPeriodDay: '1515974400000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 1082
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 39
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 10
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 13
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 5,
              previousValue: 4
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 21045,
              previousValue: 20887
            }
          ]
        },
        {
          day: '1518652800000',
          previousPeriodDay: '1516060800000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 1082
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 39
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 10
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 13
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 3,
              previousValue: 4
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 22098,
              previousValue: 21933
            }
          ]
        },
        {
          day: '1518739200000',
          previousPeriodDay: '1516147200000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 1082
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 39
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 10
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 13
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 3,
              previousValue: 4
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 23151,
              previousValue: 22979
            }
          ]
        },
        {
          day: '1518825600000',
          previousPeriodDay: '1516233600000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 1082
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 39
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 10
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 13
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 3,
              previousValue: 6
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 24204,
              previousValue: 24027
            }
          ]
        },
        {
          day: '1518912000000',
          previousPeriodDay: '1516320000000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 1082
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 39
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 10
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 13
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 3,
              previousValue: 5
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 25257,
              previousValue: 25074
            }
          ]
        },
        {
          day: '1518998400000',
          previousPeriodDay: '1516406400000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 1082
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 39
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 10
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 13
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 3,
              previousValue: 5
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 26310,
              previousValue: 26121
            }
          ]
        },
        {
          day: '1519084800000',
          previousPeriodDay: '1516492800000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 1082
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 39
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 10
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 13
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 4,
              previousValue: 6
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 27364,
              previousValue: 27169
            }
          ]
        },
        {
          day: '1519171200000',
          previousPeriodDay: '1516579200000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 1082
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 39
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 10
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 13
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 4,
              previousValue: 5
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 28418,
              previousValue: 28216
            }
          ]
        },
        {
          day: '1519257600000',
          previousPeriodDay: '1516665600000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 1082
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 39
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 10
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 13
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 4,
              previousValue: 6
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 29472,
              previousValue: 29264
            }
          ]
        },
        {
          day: '1519344000000',
          previousPeriodDay: '1516752000000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 1082
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 39
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 10
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 13
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 4,
              previousValue: 7
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 30526,
              previousValue: 30313
            }
          ]
        },
        {
          day: '1519430400000',
          previousPeriodDay: '1516838400000',
          metrics: [
            {
              label: 'Tweets',
              color: '#ced7df',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Impressions',
              color: '#FEC78B',
              value: 0,
              previousValue: 1082
            },
            {
              label: 'Engagements',
              color: '#3A92D3',
              value: 0,
              previousValue: 39
            },
            {
              label: 'Retweets',
              color: '#FD8F90',
              value: 0,
              previousValue: 3
            },
            {
              label: 'Likes',
              color: '#8FC6DB',
              value: 0,
              previousValue: 10
            },
            {
              label: 'Clicks',
              color: '#98E8B2',
              value: 0,
              previousValue: 13
            },
            {
              label: 'Replies',
              color: '#D2C3AB',
              value: 0,
              previousValue: 0
            },
            {
              label: 'New Followers',
              color: '#D7B5FD',
              value: 6,
              previousValue: 8
            },
            {
              label: 'Total Followers',
              color: '#FDA3F3',
              value: 31582,
              previousValue: 31363
            }
          ]
        }
      ]
    },
    {
      chart_id: 'posts',
      profile_id: '578609e03c080f24098b4567',
      state: {
        descending: true,
        limit: 10
      },
      _id: '5a94552b1def8a02324906f3',
      service: 'instagram',
      profile: {
        id: {
          $oid: '578609e03c080f24098b4567'
        },
        avatarUrl: 'https://scontent.cdninstagram.com/vp/bbbcd85ed6bd9b2c2a75945fd2ed13e5/5B15E92D/t51.2885-19/s150x150/22221340_365712507174850_3448246143207604224_n.jpg',
        service: 'instagram',
        timezone: 'Europe/Madrid',
        username: 'otter.es'
      },
      metrics: [
        {
          id: '1704655118772785225_2801718255',
          type: 'image',
          text: 'Uno de los proyectos que están en marcha en Otter tiene mucho que ver con esta puerta de la casa de la ceramista @kellicain y que hemos encontrado en el blog de @marthastewart. Madera recuperada y funcionalidad ¿Qué será? 😉',
          date: 1517430747000,
          serviceLink: 'https://www.instagram.com/p/BeoJsyDANBJ/',
          statistics: {
            likes: 196,
            comments: 3
          },
          media: {
            thumbnail: 'https://scontent.cdninstagram.com/vp/ee4cca4bd8970f3c8f2cf6de780dbdc6/5B119CAF/t51.2885-15/s320x320/e35/27573898_1474590609330270_7589615946889691136_n.jpg'
          }
        },
        {
          id: '1707561972486275899_2801718255',
          type: 'image',
          text: 'Un amigo nos dijo una vez que para él montar una startup era como ir en bici y al mismo tiempo intentar cambiar las ruedas. Es así como nos sentimos muchas veces y por eso es muy importante para nosotros el espacio en el que trabajamos, especialmente cuando se presentan nuevos retos y objetivos más altos como los que queremos alcanzar este año. Las ideas llegan mejor y más rápido desde @pasajemontoya, nuestro nuevo nido creativo y #bestworkspaceever👌🏻✨',
          date: 1517777271000,
          serviceLink: 'https://www.instagram.com/p/BeyepEiAoM7/',
          statistics: {
            likes: 157,
            comments: 5
          },
          media: {
            thumbnail: 'https://scontent.cdninstagram.com/vp/97456e0b991a3f6f423003342744b40a/5B13F703/t51.2885-15/s320x320/e35/26869871_128568121291091_3940455893614723072_n.jpg'
          }
        },
        {
          id: '1713355019031570032_2801718255',
          type: 'image',
          text: 'En estos días de frío pasajero tener un envoltorio de pino como interior nos parece lo más cercano a la idea de tener una manta de madera ❄️💛 Precioso proyecto publicado en @ad_spain con fotografías de @jc_quindos',
          date: 1518467856000,
          serviceLink: 'https://www.instagram.com/p/BfHD0_jgmZw/',
          statistics: {
            likes: 155,
            comments: 4
          },
          media: {
            thumbnail: 'https://scontent.cdninstagram.com/vp/fa334d2dd1022b0807756ab8bb7db49b/5B1121D3/t51.2885-15/s320x320/e35/27579208_1592215967530025_3238805258473832448_n.jpg'
          }
        },
        {
          id: '1721136098933198024_2801718255',
          type: 'image',
          text: '#woodinteriors que nos encantan y un espacio perfecto para pasar una tarde de viernes, ya estés en medio del intensivo laboral o en modo contemplativo. 👉🏻Un proyecto de @osullivanskoufoglouarchitects via @deezen',
          date: 1519395433000,
          serviceLink: 'https://www.instagram.com/p/BfitCm7A8zI/',
          statistics: {
            likes: 133,
            comments: 2
          },
          media: {
            thumbnail: 'https://scontent.cdninstagram.com/vp/ffd8a1fa7e8b6ba5e6b45e583ba156e6/5B44F25E/t51.2885-15/s320x320/e35/27893539_513341859048144_3004942893342261248_n.jpg'
          }
        },
        {
          id: '1719157840192632192_2801718255',
          type: 'image',
          text: 'Esta maravillosa cocina de @reformcph nos ha recordado que la madera también puede ser la base perfecta para una explosión de color. ¿Tú te atreves con el color en la cocina? 🍇🍋🍓🍐',
          date: 1519159606000,
          serviceLink: 'https://www.instagram.com/p/BfbrPJ5gnWA/',
          statistics: {
            likes: 127,
            comments: 2
          },
          media: {
            thumbnail: 'https://scontent.cdninstagram.com/vp/f825db0c66793dc6235bc210ed9297ad/5B1269D1/t51.2885-15/s320x320/e35/27891535_182761825787157_1506208630859366400_n.jpg'
          }
        },
        {
          id: '1714789813674084452_2801718255',
          type: 'image',
          text: 'Nos encanta esta propuesta de @hejustudio que integra cama y vestidor con la madera como protagonista a modo de cabecero. Podéis ver su proyecto completo de esta reciente reforma de un piso de París en su blog.',
          date: 1518638897000,
          serviceLink: 'https://www.instagram.com/p/BfMKEAMgIhk/',
          statistics: {
            likes: 122,
            comments: 2
          },
          media: {
            thumbnail: 'https://scontent.cdninstagram.com/vp/8c29e1a15f74ce735106cb2d030961ec/5B2864C3/t51.2885-15/s320x320/e35/27575358_2044625258911238_5328744926052089856_n.jpg'
          }
        },
        {
          id: '1708252944559963050_2801718255',
          type: 'image',
          text: 'Los artículos de @dezeen son siempre una dosis de inspiración. En uno de ellos hemos encontrado esta maravilla de @projektpraga . Nostros pondríamos una #woodbox en nuestra vida ¿y tu?',
          date: 1517859641000,
          serviceLink: 'https://www.instagram.com/p/Be07wCbAvuq/',
          statistics: {
            likes: 114,
            comments: 4
          },
          media: {
            thumbnail: 'https://scontent.cdninstagram.com/vp/54253d908c1592ac59191e4da2fc698d/5B1103C6/t51.2885-15/s320x320/e35/27575066_168223650472404_7988076057397821440_n.jpg'
          }
        },
        {
          id: '1703905077611208405_2801718255',
          type: 'image',
          text: 'Si te paras un momento a pensar qué implica comprar una cosa u otra ya sea comida, ropa o muebles, te darás cuenta que esas pequeñas decisiones del día a día son las que acaban conformando el imaginario material de nuestra vida. ⠀\n•\nQué y cómo consumimos tiene realmente un impacto en nuestra vida,  hace que nos sintamos de una manera u otra. Quizás el pensar cómo queremos sentirnos puede ayudarnos a tomar nuestras propias decisiones y a darnos cuenta que somos los diseñadores de nuestra vida.\n• ⠀\nDel mismo modo que cada vez somos más conscientes de lo positivo que puede ser para nuestro entorno el comprar comida de proximidad, te invitamos a que la próxima vez que necesites un mueble en tu vida nos escribas y pruebes la experiencia de hacer un mueble a medida, como tú quieras y en manos de uno de nuestros carpinteros. #lessismore',
          date: 1517341335000,
          serviceLink: 'https://www.instagram.com/p/BelfKPyAB7V/',
          statistics: {
            likes: 88,
            comments: 4
          },
          media: {
            thumbnail: 'https://scontent.cdninstagram.com/vp/37e7e6321f86cf395ebf9a44549c10ab/5B0E14CB/t51.2885-15/s320x320/e35/26871084_776104489251072_112002683971305472_n.jpg'
          }
        },
        {
          id: '1706001186781416895_2801718255',
          type: 'image',
          text: 'Sabemos que dormir con el móvil cerca no es lo más recomendable, pero con una bonita madera al lado de la cama todo se compensa 😉 #woodlovers',
          date: 1517591211000,
          serviceLink: 'https://www.instagram.com/p/Bes7wpkgE2_/',
          statistics: {
            likes: 81,
            comments: 1
          },
          media: {
            thumbnail: 'https://scontent.cdninstagram.com/vp/22a74108e12ed0c4057ea7292b338cdd/5B2B27DD/t51.2885-15/s320x320/e35/26869776_215809972316170_4869896991246647296_n.jpg'
          }
        },
        {
          id: '1718433331361835936_2801718255',
          type: 'image',
          text: 'Una persona, una idea. Un carpintero, un estilo propio. Nos encanta ver cuando tu idea encaja con alguno de nuestros carpinteros y podemos llevar a cabo el mueble o proyecto a medida que tienes en mente.',
          date: 1519073238000,
          serviceLink: 'https://www.instagram.com/p/BfZGgKeA2ug/',
          statistics: {
            likes: 81,
            comments: 2
          },
          media: {
            thumbnail: 'https://scontent.cdninstagram.com/vp/390f911e34df87bb4afe293b6c61fbb7/5B17D58C/t51.2885-15/s320x320/e35/27891110_1618990098185469_2634583817548988416_n.jpg'
          }
        }
      ]
    },
    {
      chart_id: 'posts-summary',
      profile_id: '578609e03c080f24098b4567',
      state: [],
      _id: '5a94552d1def8a02303eaea2',
      service: 'instagram',
      profile: {
        id: {
          $oid: '578609e03c080f24098b4567'
        },
        avatarUrl: 'https://scontent.cdninstagram.com/vp/bbbcd85ed6bd9b2c2a75945fd2ed13e5/5B15E92D/t51.2885-19/s150x150/22221340_365712507174850_3448246143207604224_n.jpg',
        service: 'instagram',
        timezone: 'Europe/Madrid',
        username: 'otter.es'
      },
      metrics: [
        {
          value: 13,
          diff: 86,
          label: 'Posts'
        },
        {
          value: 1488,
          diff: 79,
          label: 'Likes'
        },
        {
          value: 41,
          diff: 0,
          label: 'Comments'
        }
      ]
    }
  ],
  date_range: {
    range: 7,
    start: null,
    end: null
  },
  name: 'Full report',
  updated_at: 1519670573000,
}


const report = ReactDOMServer.renderToString(<Report {...fullReport} />);
const { document } = (new JSDOM(report)).window;

const page = document.getElementById('report-page');
Object.defineProperty(Object.getPrototypeOf(page), 'clientHeight', {
  get: () => 1600,
  configurable: true,
});
Object.defineProperty(Object.getPrototypeOf(page.getElementsByTagName('section')[0]), 'clientHeight', {
  get: () => 1200,
  configurable: true,
});
Object.defineProperty(Object.getPrototypeOf(page.getElementsByTagName('li')[0]), 'clientHeight', {
  get: () => 150,
  configurable: true,
});

export default page;
