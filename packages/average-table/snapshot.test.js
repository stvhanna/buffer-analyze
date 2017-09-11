// use story.js files as snapshots
import initStoryshots from '@storybook/addon-storyshots';

// highcharts won't play that nice with snapshoot testing
jest.mock('react-highcharts');

initStoryshots({
  suit: 'Snapshots',
});
