import React from 'react';
import { mount } from 'enzyme';

import PhonesListContainer from '../PhonesListContainer';
import { mockStore } from '../../../state/__mocks__/store';
import { phonesMock } from '../../../mocks/phones.mock';

jest.mock('../PhonesList', () => () => <></>);
jest.mock('../../Spinner', () => () => <></>);

const setUpMount = (initialState) => {
  const store = mockStore(initialState);
  const component = mount(<PhonesListContainer store={store} />);
  return component;
};

describe('PhonesListContainer', () => {
  let component;

  it('should display loading message while loading', () => {
    component = setUpMount({ phonesReducer: { isLoading: true } });
    expect(component).toMatchSnapshot();
  });

  it('should display phones list', () => {
    component = setUpMount({ phonesReducer: { phones: phonesMock.data } });
    expect(component).toMatchSnapshot();
  });
});
