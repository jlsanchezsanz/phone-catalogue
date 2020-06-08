import React from 'react';
import PropTypes from 'prop-types';

import { MANUFACTURERS } from '../../../constants/manufacturers';

export default function ManufacturerSelect({ onManufacturerChange }) {
  function handleManufacturerChange(e) {
    const { value, name } = e.target;
    onManufacturerChange({ [name]: value });
  }

  return (
    <select
      name='manufacturer'
      className='form-control'
      onChange={handleManufacturerChange}
    >
      {Object.keys(MANUFACTURERS).map((manufacturer) => (
        <option key={manufacturer} value={MANUFACTURERS[manufacturer]}>
          {manufacturer}
        </option>
      ))}
    </select>
  );
}

ManufacturerSelect.propTypes = {
  onManufacturerChange: PropTypes.func.isRequired
};
