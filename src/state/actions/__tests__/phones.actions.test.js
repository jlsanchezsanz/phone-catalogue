import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { phonesMock } from '../../../mocks/phones.mock';
import {
  fetchPhones,
  fetchPhonesError,
  fetchPhonesStart,
  fetchPhonesSuccess,
  PHONES_ENDPOINT
} from '../phones.actions';
import {
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_ERROR
} from '../types';
import { initialState } from '../../reducers/phones.reducer';

jest.unmock('../phones.actions');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Phones Actions', () => {
  const startAction = {
    type: FETCH_PHONES_START
  };
  const successAction = {
    type: FETCH_PHONES_SUCCESS,
    payload: phonesMock
  };
  const error = { message: 'Error' };
  const errorAction = {
    type: FETCH_PHONES_ERROR,
    error
  };

  afterEach(() => {
    fetchMock.restore();
  });

  it('should create an action to start fetching phones', () => {
    expect(fetchPhonesStart()).toEqual(startAction);
  });

  it('should create an action to success fetching phones', () => {
    expect(fetchPhonesSuccess(phonesMock)).toEqual(successAction);
  });

  it('should create an action to error fetching phones', () => {
    expect(fetchPhonesError(error)).toEqual(errorAction);
  });

  it('should dispatch fetch success action when fetching done', () => {
    const store = mockStore(initialState);
    const expectedActions = [startAction, successAction];
    fetchMock.getOnce(PHONES_ENDPOINT, {
      body: {
        data: phonesMock
      }
    });
    return store.dispatch(fetchPhones()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch fetch error action when fetching failed', () => {
    const store = mockStore(initialState);
    const expectedActions = [startAction, errorAction];
    fetchMock.getOnce(PHONES_ENDPOINT, Promise.reject(error));
    return store.dispatch(fetchPhones()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
