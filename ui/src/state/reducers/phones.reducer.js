import {
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_START,
  FETCH_PHONES_ERROR
} from '../actions/types';

export const initialState = {
  isLoading: false,
  phones: [],
  error: undefined
};

export function phonesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PHONES_START:
      return { ...state, isLoading: true };
    case FETCH_PHONES_SUCCESS:
      return { ...state, phones: action.payload, isLoading: false };
    case FETCH_PHONES_ERROR:
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
}
