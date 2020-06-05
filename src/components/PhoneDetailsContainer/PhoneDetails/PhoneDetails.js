import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { PhonePropType } from '../../../prop-types/phone.prop-type';

function PhoneDetails(props) {
  return (
    <div>
      <Link to='/phones'>All phones</Link>
      <img
        className='image'
        src={require(`../../../assets/${props.phone.imageFileName}`)}
        alt={props.phone.name}
      />
      <h1 className='display-4'>
        {props.phone.manufacturer} {props.phone.name}
      </h1>
      <ul className='traits'>
        <li className='traits__item'>
          <span>{props.phone.price}€</span>
        </li>
        <li className='traits__item'>
          <span>{props.phone.color}</span>
        </li>
        <li className='traits__item'>
          <span>{props.phone.screen}</span>
        </li>
        <li className='traits__item'>
          <span>{props.phone.processor}</span>
        </li>
        <li className='traits__item'>
          <span>{props.phone.ram}GB RAM</span>
        </li>
        <li className='traits__item'>
          <span>{props.phone.description}</span>
        </li>
      </ul>
    </div>
  );
}

PhoneDetails.propTypes = {
  phone: PropTypes.shape(PhonePropType).isRequired
};

export default PhoneDetails;
