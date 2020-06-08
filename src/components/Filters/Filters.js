import React from 'react';
import PropTypes from 'prop-types';

import { MANUFACTURERS } from '../../constants/manufacturers';

export default function Filters({ onFiltersChange }) {
  function handleFiltersChange(e) {
    const { value, name } = e.target;
    onFiltersChange({ [name]: value });
  }

  return (
    <form>
      <select
        name='manufacturer'
        className='form-control'
        onChange={handleFiltersChange}
      >
        {Object.keys(MANUFACTURERS).map((manufacturer) => (
          <option key={manufacturer} value={MANUFACTURERS[manufacturer]}>
            {manufacturer}
          </option>
        ))}
      </select>
    </form>
  );
}

Filters.propTypes = {
  onFiltersChange: PropTypes.func.isRequired
};
