import React from 'react';
import { shallow } from 'enzyme';

import PhonesList from '../PhonesList';
import { phonesMock } from '../../../mocks/phones.mock';

const setUpShallow = (phones) => {
  const component = shallow(<PhonesList phones={phones} />);
  return component;
};

describe('PhonesList', () => {
  let component;

  it('should display phones list', () => {
    component = setUpShallow(phonesMock.data);
    expect(component).toMatchSnapshot();
  });
});
