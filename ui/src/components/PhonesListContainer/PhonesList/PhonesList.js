import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Filters from '../../Filters';
import PhonesListItem from './PhonesListItem';
import { PhonePropType } from '../../../prop-types/phone.prop-type';
import './PhonesList.css';
import { MANUFACTURERS } from '../../../constants/manufacturers';

export default function PhonesList({ phones }) {
  const [filteredPhones, setFilteredPhones] = useState(phones);

  function handleFiltersChange(filters) {
    const { manufacturer } = filters;
    const filteredPhones =
      manufacturer === MANUFACTURERS['All Manufacturers']
        ? phones
        : phones.filter((phone) => phone.manufacturer === manufacturer);
    setFilteredPhones(filteredPhones);
  }

  return (
    <>
      <Filters onFiltersChange={handleFiltersChange} />
      <div className='card-deck'>
        {filteredPhones.map((phone) => (
          <Link to={`/phones/${phone.id}`} key={phone.id}>
            <PhonesListItem phone={phone} />
          </Link>
        ))}
      </div>
    </>
  );
}

PhonesList.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.shape(PhonePropType)).isRequired
};
