import React from 'react';
import { shallow } from 'enzyme';

import PhoneInfo from '../PhoneInfo';
import { phonesMock } from '../../../../../mocks/phones.mock';

const setUpShallow = (phone) => {
  const component = shallow(<PhoneInfo phone={phone} />);
  return component;
};

describe('PhoneInfo', () => {
  let component;

  it('should display phone info', () => {
    component = setUpShallow(phonesMock.data[0]);
    expect(component).toMatchSnapshot();
  });
});
