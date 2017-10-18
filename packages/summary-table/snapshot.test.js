// use story.js files as snapshots
import initStoryshots from '@storybook/addon-storyshots';
import shallow from 'react-test-renderer/shallow';

initStoryshots({
  suit: 'Snapshots',
  test({ story, context }) {
    const shallowRenderer = shallow.createRenderer();
    const result = shallowRenderer.render(story.render(context));
    expect(result).toMatchSnapshot();
  },
});
