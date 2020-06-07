import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { PhonePropType } from '../../../prop-types/phone.prop-type';
import PhoneGallery from './PhoneGallery';
import PhoneInfo from './PhoneInfo';
import PhoneSpecs from './PhoneSpecs';
import './PhoneDetails.css';

function PhoneDetails({ phone }) {
  return (
    <div className='details'>
      <Link to='/phones'>All phones</Link>
      <div className='details__wrapper'>
        <PhoneGallery images={phone.images} phoneName={phone.name} />
        <PhoneInfo phone={phone} />
      </div>
      <PhoneSpecs phone={phone} />
    </div>
  );
}

PhoneDetails.propTypes = {
  phone: PropTypes.shape(PhonePropType).isRequired
};

export default PhoneDetails;
