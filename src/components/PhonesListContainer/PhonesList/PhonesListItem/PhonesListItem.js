import React from 'react';
import PropTypes from 'prop-types';

import { PhonePropType } from '../../../../prop-types/phone.prop-type';

export default function PhonesListItem(props) {
  return (
    <div>
      <img
        className='image'
        src={require(`../../../../assets/${props.phone.imageFileName}`)}
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
          <span>{props.phone.ram}GB RAM</span>
        </li>
      </ul>
    </div>
  );
}

PhonesListItem.propTypes = {
  phone: PropTypes.shape(PhonePropType).isRequired
};
