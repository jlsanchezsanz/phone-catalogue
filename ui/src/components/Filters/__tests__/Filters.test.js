import React from 'react';
import { shallow } from 'enzyme';

import Filters from '../Filters';

const setUpShallow = (handleFiltersChange) => {
  const component = shallow(<Filters onFiltersChange={handleFiltersChange} />);
  return component;
};

describe('Filters', () => {
  const handleFiltersChange = jest.fn();

  it('should render component', () => {
    const component = setUpShallow(handleFiltersChange);
    expect(component).toMatchSnapshot();
  });

  it('should execute callback on manufacturer change', () => {
    const name = 'manufacturer';
    const value = 'Nokia';
    const component = setUpShallow(handleFiltersChange);
    const select = component.find('ManufacturerSelect');

    expect(handleFiltersChange).not.toHaveBeenCalled();
    select.prop('onManufacturerChange')({ [name]: value });

    expect(handleFiltersChange).toHaveBeenCalledTimes(1);
    expect(handleFiltersChange).toHaveBeenCalledWith({ [name]: value });
  });
});
