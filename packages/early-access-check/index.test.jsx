import {
  middleware,
} from './index';

describe('FeatureFlipCheck', () => {
  it('should export middleware', () => {
    expect(middleware)
      .toBeDefined();
  });
});
