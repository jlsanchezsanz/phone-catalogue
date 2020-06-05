import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import PhonesListItem from './PhonesListItem';
import { PhonePropType } from '../../../prop-types/phone.prop-type';

export default function PhonesList(props) {
  return (
    <div>
      <ul>
        {props.phones.map((phone) => (
          <Link to={`/${phone.id}`}>
            <PhonesListItem phone={phone} key={phone.id} />
          </Link>
        ))}
      </ul>
    </div>
  );
}

PhonesList.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.shape(PhonePropType)).isRequired
};
