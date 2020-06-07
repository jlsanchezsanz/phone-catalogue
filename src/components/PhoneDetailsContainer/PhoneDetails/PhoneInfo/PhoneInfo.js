import React from 'react';
import PropTypes from 'prop-types';

import { PhonePropType } from '../../../../prop-types/phone.prop-type';
import './PhoneInfo.css';

export default function PhoneInfo(props) {
  return (
    <div className='info'>
      <h1>
        {props.phone.manufacturer} {props.phone.name} {props.phone.color}
      </h1>
      <div className='info__price'>{props.phone.price} €</div>
      <button type='button' class='btn btn-info'>
        Add to cart
        <img
          class="btn__icon"
          src={require('../../../../assets/cart-plus.svg')}
          alt='Add to cart'
        />
      </button>
    </div>
  );
}

PhoneInfo.propTypes = {
  phone: PropTypes.shape(PhonePropType).isRequired
};
