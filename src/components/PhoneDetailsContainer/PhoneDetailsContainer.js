import React from 'react';
import { connect } from 'react-redux';

import PhoneDetails from './PhoneDetails';
import Spinner from '../Spinner';

function PhoneDetailsContainer({ phone }) {
  return !phone ? <Spinner /> : <PhoneDetails phone={phone} />;
}

const mapStateToProps = (state, ownProps) => ({
  phone: state.phonesReducer.phones.find(
    (phone) => phone.id.toString() === ownProps.match.params.id
  ),
  isLoading: state.phonesReducer.isLoading
});

export default connect(mapStateToProps)(PhoneDetailsContainer);
