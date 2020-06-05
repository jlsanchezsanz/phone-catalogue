import React from 'react';
import { connect } from 'react-redux';

import PhonesList from './PhonesList';

function PhonesListContainer(props) {
  return props.isLoading ? (
    <p>Loading...</p>
  ) : (
    <PhonesList phones={props.phones} />
  );
}

const mapStateToProps = (state) => ({
  phones: state.phonesReducer.phones,
  isLoading: state.phonesReducer.isLoading
});

export default connect(mapStateToProps)(PhonesListContainer);
