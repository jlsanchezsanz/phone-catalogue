import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { PhonePropType } from '../../../prop-types/phone.prop-type';
import PhoneInfo from './PhoneInfo';
import PhoneSpecs from './PhoneSpecs';
import './PhoneDetails.css';

function PhoneDetails(props) {
  return (
    <div className='details'>
      <Link to='/phones'>All phones</Link>
      <div className='details__wrapper'>
        <div className='details__img-gallery'>
          <img
            className='image'
            src={require(`../../../assets/${props.phone.imageFileName}`)}
            alt={props.phone.name}
          />
        </div>
        <PhoneInfo phone={props.phone} />
      </div>
      <PhoneSpecs phone={props.phone} />
    </div>
  );
}

PhoneDetails.propTypes = {
  phone: PropTypes.shape(PhonePropType).isRequired
};

export default PhoneDetails;
