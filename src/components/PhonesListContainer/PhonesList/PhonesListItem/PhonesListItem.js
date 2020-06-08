import React from 'react';
import PropTypes from 'prop-types';

import { PhonePropType } from '../../../../prop-types/phone.prop-type';
import './PhonesListItem.css';

export default function PhonesListItem(props) {
  return (
    <div className='card phone'>
      <img
        className='card-img-top'
        src={require(`../../../../assets/${props.phone.images[0]}`)}
        alt={props.phone.name}
      />
      <div className='card-body'>
        <h5 className='card-title'>
          {props.phone.manufacturer} {props.phone.name}
        </h5>
        <p className='card-text phone__price'>{props.phone.price} €</p>
      </div>
      <button type="button" class="btn btn-info">+ Info</button>
    </div>
  );
}

PhonesListItem.propTypes = {
  phone: PropTypes.shape(PhonePropType).isRequired
};
