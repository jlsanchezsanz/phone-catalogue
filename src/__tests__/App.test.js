import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import { mockStore } from '../state/__mocks__/store';
import { phonesMock } from '../mocks/phones.mock';

const setUpShallow = (initialState) => {
  const store = mockStore(initialState);
  const component = shallow(<App store={store} />);
  return component;
};

test('should render component', () => {
  const phonesReducer = {
    phones: phonesMock.data,
    isLoading: false,
    error: {}
  };
  const component = setUpShallow({ phonesReducer });
  expect(component).toMatchSnapshot();
});
