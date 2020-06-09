import React from 'react';
import { connect } from 'react-redux';

import PhonesList from './PhonesList';
import Spinner from '../Spinner';

function PhonesListContainer({ isLoading, phones }) {
  return isLoading ? <Spinner /> : <PhonesList phones={phones} />;
}

const mapStateToProps = (state) => ({
  phones: state.phonesReducer.phones,
  isLoading: state.phonesReducer.isLoading
});

export default connect(mapStateToProps)(PhonesListContainer);
