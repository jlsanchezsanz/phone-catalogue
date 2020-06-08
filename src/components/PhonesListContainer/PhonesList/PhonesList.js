import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import PhonesListItem from './PhonesListItem';
import { PhonePropType } from '../../../prop-types/phone.prop-type';
import './PhonesList.css';

export default function PhonesList(props) {
  return (
    <div className='card-deck'>
      {props.phones.map((phone) => (
        <Link to={`/phones/${phone.id}`} key={phone.id}>
          <PhonesListItem phone={phone} />
        </Link>
      ))}
    </div>
  );
}

PhonesList.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.shape(PhonePropType)).isRequired
};
