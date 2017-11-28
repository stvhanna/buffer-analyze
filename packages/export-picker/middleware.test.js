import middleware from './middleware';

describe('middleware', () => {
  const next = jest.fn();
  const store = {
    dispatch: jest.fn(),
  };
  it('should exist', () => {
    expect(middleware).toBeDefined();
  });

  it('should keep propagating the action through the chain', () => {
    const action = {
      type: 'TEST',
    };
    middleware(store)(next)(action);
  });
});
