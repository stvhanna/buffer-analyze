/* eslint-disable import/first */
import moment from 'moment';
import generateCSVFromChart from './generateCSVFromChart';

describe('generateCSVFromChart', () => {
  const date = {
    startDate: moment('20170707', 'YYYYMMDD').unix(),
    endDate: moment('20170715', 'YYYYMMDD').unix(),
  };

  it('returns a csv for a chart with one dimension only', (done) => {
    const singleDimensionCSV = `Tweets,Replies,Impressions,Clicks,Engagements,Followers,Retweets,New Followers,Likes
49,359,786430,1418,16106,895929,661,2301,1529`;

    const chart = {
      filename: 'summary',
      data: {
        Tweets: 49,
        Replies: 359,
        Impressions: 786430,
        Clicks: 1418,
        Engagements: 16106,
        Followers: 895929,
        Retweets: 661,
        'New Followers': 2301,
        Likes: 1529,
      },
    };
    generateCSVFromChart([chart], date)
      .then((csvs) => {
        const csv = csvs[0].csv;
        const filename = csvs[0].filename;
        expect(csv).toBe(singleDimensionCSV);
        expect(filename).toBe('summary-20170707-to-20170715.csv');
        done();
      });
  });

  it('returns a csv for a chart with multiple dimensions', (done) => {
    const multipleDimensionCSV = `foo,date,impressions
1,10/03/2017,26950
2,10/04/2017,426478
3,10/05/2017,104590
4,10/06/2017,81864
5,10/07/2017,111577
6,10/08/2017,34971
7,10/09/2017,`;

    const chart = {
      filename: 'engagements',
      data: {
        foo: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
        ],
        date: [
          '10/03/2017',
          '10/04/2017',
          '10/05/2017',
          '10/06/2017',
          '10/07/2017',
          '10/08/2017',
          '10/09/2017',
        ],
        impressions: [
          26950,
          426478,
          104590,
          81864,
          111577,
          34971,
        ],
      },
    };

    generateCSVFromChart([chart], date)
      .then((csvs) => {
        const csv = csvs[0].csv;
        const filename = csvs[0].filename;
        expect(csv).toBe(multipleDimensionCSV);
        expect(filename).toBe('engagements-20170707-to-20170715.csv');
        done();
      });
  });
});
