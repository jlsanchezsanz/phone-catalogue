import React from 'react';
import { mount } from 'enzyme';

import PhoneDetailsContainer from '../PhoneDetailsContainer';
import { mockStore } from '../../../state/__mocks__/store';
import { phonesMock } from '../../../mocks/phones.mock';

jest.mock('../PhoneDetails', () => () => <></>);

const setUpMount = (initialState, match) => {
  const store = mockStore(initialState);
  const component = mount(
    <PhoneDetailsContainer store={store} match={match} />
  );
  return component;
};

describe('PhoneDetailsContainer', () => {
  let component;

  it('should display loading message while no phone', () => {
    component = setUpMount(
      { phonesReducer: { phones: phonesMock.data } },
      { params: {} }
    );
    expect(component).toMatchSnapshot();
  });

  it('should display phone details', () => {
    component = setUpMount(
      { phonesReducer: { phones: phonesMock.data } },
      { params: { id: '1' } }
    );
    expect(component).toMatchSnapshot();
  });
});
