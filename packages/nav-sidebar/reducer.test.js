import reducer from './reducer';

describe('reducer', () => {
  it('has no profiles as initial state', () => {
    const profiles = reducer().profiles;
    expect(profiles).toEqual([]);
  });
});
