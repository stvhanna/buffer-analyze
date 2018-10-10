import {
  reducer,
  middleware,
} from './index';

describe('DemographicStore', () => {
  it('should export reducer', () => {
    expect(reducer)
      .toBeDefined();
  });

  it('should export middleware', () => {
    expect(middleware)
      .toBeDefined();
  });
});
