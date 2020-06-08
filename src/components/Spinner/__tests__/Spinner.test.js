import React from 'react';
import { shallow } from 'enzyme';

import Spinner from '../Spinner';

test('should render component', () => {
  const component = shallow(<Spinner />);
  expect(component).toMatchSnapshot();
});
