import middleware from './middleware';

const getMiddlewareElements = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn();

  const invoke = action => middleware(store)(next)(action);

  return { store, next, invoke };
};

describe('middleware', () => {
  it('should exist', () => {
    expect(middleware).toBeDefined();
  });

  it('should keep propagating the action through the chain', () => {
    const { next, invoke } = getMiddlewareElements();
    const action = {
      type: 'TEST',
    };
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });
});
