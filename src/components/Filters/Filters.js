import React from 'react';
import PropTypes from 'prop-types';

import ManufacturerSelect from './ManufacturerSelect';

export default function Filters({ onFiltersChange }) {
  return (
    <form>
      <ManufacturerSelect onManufacturerChange={onFiltersChange} />
    </form>
  );
}

Filters.propTypes = {
  onFiltersChange: PropTypes.func.isRequired
};
