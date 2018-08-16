import { actions, actionTypes } from '@bufferapp/async-data-fetch';
import { LOCATION_CHANGE } from 'react-router-redux';
import { actionTypes as reportListActionTypes } from './reducer';
import middleware from './middleware';

describe('middleware', () => {
  const next = jest.fn();
  const state = {
    profiles: {
      organizationId: 'organization1234',
    },
  };
  const store = {
    dispatch: jest.fn(),
    getState: jest.fn(() => state),
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

  it('should fetch the reports list on profiles load', () => {
    const action = {
      type: `profiles_${actionTypes.FETCH_SUCCESS}`,
      result: [{
        organizationId: 'organization1234',
      }],
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'list_reports',
      args: {
        organizationId: 'organization1234',
      },
    }));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should fetch the reports list when location changes to /reports', () => {
    const action = {
      type: LOCATION_CHANGE,
      payload: {
        pathname: '/reports',
      },
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'list_reports',
      args: {
        organizationId: 'organization1234',
      },
    }));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('does not fetch the reports list if location changes anywhere else', () => {
    const action = {
      type: LOCATION_CHANGE,
      payload: {
        pathname: '/another-path',
      },
    };
    middleware(store)(next)(action);
    expect(store.dispatch).not.toHaveBeenCalledWith(actions.fetch({
      name: 'list_reports',
      args: {
        userId: 'user1234',
      },
    }));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('triggers a remove_report RPC on REMOVE_REPORT', () => {
    const id = 'report-123';
    const action = {
      type: reportListActionTypes.REMOVE_REPORT,
      id,
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'remove_report',
      args: {
        id,
      },
    }));
    expect(next).toHaveBeenCalledWith(action);
  });

  beforeEach(() => store.dispatch.mockReset());
});
