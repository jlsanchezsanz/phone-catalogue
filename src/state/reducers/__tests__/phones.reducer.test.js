import {
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_START,
  FETCH_PHONES_ERROR
} from '../../actions/types';
import { phonesReducer, initialState } from '../phones.reducer';
import { phonesMock } from '../../../mocks/phones.mock';

describe('phonesReducer', () => {
  it('should return default state', () => {
    const state = phonesReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should set "isFetching" if fetch start', () => {
    const state = phonesReducer(undefined, {
      type: FETCH_PHONES_START
    });
    expect(state).toEqual({ ...initialState, isFetching: true });
  });

  it('should initialize phones if success', () => {
    const state = phonesReducer(undefined, {
      type: FETCH_PHONES_SUCCESS,
      payload: phonesMock
    });
    expect(state).toEqual({ ...initialState, phones: phonesMock });
  });

  it('should set "error" if error', () => {
    const error = { message: 'Error' };
    const state = phonesReducer(undefined, {
      type: FETCH_PHONES_ERROR,
      error
    });
    expect(state).toEqual({ ...initialState, error });
  });
});
