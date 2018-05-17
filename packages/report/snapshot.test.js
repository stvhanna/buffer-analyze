// use story.js files as snapshots
import initStoryshots from '@storybook/addon-storyshots';

jest.mock('react-dropzone');

initStoryshots({
  suit: 'Snapshots',
});
