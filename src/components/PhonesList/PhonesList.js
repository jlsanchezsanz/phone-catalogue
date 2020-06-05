import React from 'react';

import PhonesListItem from './PhonesListItem';

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
