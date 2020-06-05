import React from 'react';
import { shallow } from 'enzyme';

import PhonesListItem from '../PhonesListItem';
import { phonesMock } from '../../../../../mocks/phones.mock';

const setUpShallow = (phone) => {
  const component = shallow(<PhonesListItem phone={phone} />);
  return component;
};

describe('PhonesListItem', () => {
  let component;

  it('should display phones list item', () => {
    component = setUpShallow(phonesMock.data[0]);
    expect(component).toMatchSnapshot();
  });
});
