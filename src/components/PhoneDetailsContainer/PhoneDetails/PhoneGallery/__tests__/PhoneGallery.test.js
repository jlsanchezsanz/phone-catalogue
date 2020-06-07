import React from 'react';
import { shallow } from 'enzyme';

import PhoneGallery from '../PhoneGallery';
import { phonesMock } from '../../../../../mocks/phones.mock';

const setUpShallow = (phoneName, images) => {
  const component = shallow(
    <PhoneGallery phoneName={phoneName} images={images} />
  );
  return component;
};

describe('PhoneGallery', () => {
  let component;

  it('should display phone gallery', () => {
    component = setUpShallow(
      phonesMock.data[0].name,
      phonesMock.data[0].images
    );
    expect(component).toMatchSnapshot();
  });
});
