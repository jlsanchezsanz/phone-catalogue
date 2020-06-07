import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { PhonePropType } from '../../../prop-types/phone.prop-type';
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
        <div className='details__info'>
          <h1>
            {props.phone.manufacturer} {props.phone.name} {props.phone.color}
          </h1>
          <div className='info__price'>{props.phone.price} €</div>
          <button type='button' class='btn btn-info'>
            Add to cart
          </button>
        </div>
      </div>
      <PhoneSpecs phone={props.phone} />
    </div>
  );
}

PhoneDetails.propTypes = {
  phone: PropTypes.shape(PhonePropType).isRequired
};

export default PhoneDetails;
