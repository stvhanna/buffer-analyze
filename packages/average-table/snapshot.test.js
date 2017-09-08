// use story.js files as snapshots
import initStoryshots, { shallowSnapshot } from '@storybook/addon-storyshots';

initStoryshots({
  suit: 'Snapshots',
  // Shallow is needed or Highchart test will fail with error 13
  test: shallowSnapshot,
});
