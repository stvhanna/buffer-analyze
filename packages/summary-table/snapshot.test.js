// use story.js files as snapshots
import initStoryshots from '@storybook/addon-storyshots';

jest.mock('@bufferapp/add-report');

initStoryshots({
  suit: 'Snapshots',
});
