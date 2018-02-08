import {
  reducer,
  actionTypes,
  middleware,
} from './index';

describe('CommentsComparisonChartContainer', () => {
  it('should export reducer', () => {
    expect(reducer).toBeDefined();
  });

  it('should export actionTypes', () => {
    expect(actionTypes).toBeDefined();
  });

  it('should export middleware', () => {
    expect(middleware).toBeDefined();
  });
});
