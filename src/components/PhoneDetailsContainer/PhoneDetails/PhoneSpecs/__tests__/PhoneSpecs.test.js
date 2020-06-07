import React from 'react';
import { shallow } from 'enzyme';

import PhoneSpecs from '../PhoneSpecs';
import { phonesMock } from '../../../../../mocks/phones.mock';

const setUpShallow = (phone) => {
  const component = shallow(<PhoneSpecs phone={phone} />);
  return component;
};

describe('PhoneSpecs', () => {
  let component;

  it('should display phone specs', () => {
    component = setUpShallow(phonesMock.data[0]);
    expect(component).toMatchSnapshot();
  });
});
