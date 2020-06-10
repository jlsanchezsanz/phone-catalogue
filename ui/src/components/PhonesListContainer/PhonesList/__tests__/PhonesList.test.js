import React from 'react';
import { shallow } from 'enzyme';

import PhonesList from '../PhonesList';
import { phonesMock } from '../../../../mocks/phones.mock';
import { MANUFACTURERS } from '../../../../constants/manufacturers';

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

  it('should show all phones', () => {
    component = setUpShallow(phonesMock.data);
    const manufacturersSelect = component.find('Filters');
    manufacturersSelect.prop('onFiltersChange')({
      manufacturer: MANUFACTURERS['All Manufacturers']
    });
    expect(component).toMatchSnapshot();
  });

  it('should filter phones by manufacterer', () => {
    component = setUpShallow(phonesMock.data);
    const manufacturersSelect = component.find('Filters');
    manufacturersSelect.prop('onFiltersChange')({
      manufacturer: MANUFACTURERS.Apple
    });
    expect(component).toMatchSnapshot();
  });
});
