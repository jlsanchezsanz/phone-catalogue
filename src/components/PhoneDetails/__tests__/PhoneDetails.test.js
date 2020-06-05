import React from 'react';
import { shallow } from 'enzyme';

import PhoneDetails from '../PhoneDetails';
import { phonesMock } from '../../../mocks/phones.mock';

const setUpShallow = (phone) => {
  const component = shallow(<PhoneDetails phone={phone} />);
  return component;
};

describe('PhoneDetails', () => {
  let component;

  it('should display phones list', () => {
    component = setUpShallow(phonesMock.data[0]);
    expect(component).toMatchSnapshot();
  });
});
