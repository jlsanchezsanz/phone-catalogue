import {
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_ERROR
} from './types';

export const PHONES_ENDPOINT = 'http://localhost:3001/phones';

export function fetchPhonesStart() {
  return {
    type: FETCH_PHONES_START
  };
}

export function fetchPhonesSuccess(payload) {
  return {
    type: FETCH_PHONES_SUCCESS,
    payload
  };
}

export function fetchPhonesError(error) {
  return {
    type: FETCH_PHONES_ERROR,
    error
  };
}

export const fetchPhones = () => (dispatch) => {
  dispatch(fetchPhonesStart());
  return fetch(PHONES_ENDPOINT)
    .then((response) => response.json())
    .then(({ data }) => dispatch(fetchPhonesSuccess(data)))
    .catch((error) => dispatch(fetchPhonesError(error)));
};
