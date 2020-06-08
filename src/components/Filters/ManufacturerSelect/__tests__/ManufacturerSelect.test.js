import React from 'react';
import { shallow } from 'enzyme';

import ManufacturerSelect from '../ManufacturerSelect';

const setUpShallow = (handleManufacturerChange) => {
  const component = shallow(
    <ManufacturerSelect onManufacturerChange={handleManufacturerChange} />
  );
  return component;
};

describe('ManufacturerSelect', () => {
  const handleManufacturerChange = jest.fn();

  it('should render component', () => {
    const component = setUpShallow(handleManufacturerChange);
    expect(component).toMatchSnapshot();
  });

  it('should execute callback on manufacturer change', () => {
    const name = 'manufacturer';
    const value = 'Nokia';
    const component = setUpShallow(handleManufacturerChange);
    const select = component.find(`select[name="${name}"]`);

    expect(handleManufacturerChange).not.toHaveBeenCalled();
    select.simulate('change', { target: { value, name } });

    expect(handleManufacturerChange).toHaveBeenCalledTimes(1);
    expect(handleManufacturerChange).toHaveBeenCalledWith({
      [name]: value
    });
  });
});
