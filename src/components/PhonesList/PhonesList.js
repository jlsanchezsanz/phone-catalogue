import React from 'react';
import PropTypes from 'prop-types';

import PhonesListItem from './PhonesListItem';
import { PhonePropType } from '../../prop-types/phone.prop-type';

export default function PhonesList(props) {
  return (
    <div>
      <ul>
        {props.phones.map((phone) => (
          <PhonesListItem phone={phone} key={phone.id} />
        ))}
      </ul>
    </div>
  );
}

PhonesList.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.shape(PhonePropType)).isRequired
};
