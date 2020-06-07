import React from 'react';
import PropTypes from 'prop-types';

import { PhonePropType } from '../../../../prop-types/phone.prop-type';
import './PhonesListItem.css';

export default function PhonesListItem(props) {
  return (
    <div class='card phone'>
      <img
        class='card-img-top'
        src={require(`../../../../assets/${props.phone.imageFileName}`)}
        alt={props.phone.name}
      />
      <div class='card-body'>
        <h5 class='card-title'>
          {props.phone.manufacturer} {props.phone.name}
        </h5>
        <p class='card-text phone__price'>{props.phone.price} €</p>
      </div>
      <button type="button" class="btn btn-info">+ Info</button>
    </div>
  );
}

PhonesListItem.propTypes = {
  phone: PropTypes.shape(PhonePropType).isRequired
};
