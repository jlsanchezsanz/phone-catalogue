import React from 'react';
import { connect } from 'react-redux';

import PhoneDetails from './PhoneDetails';

function PhoneDetailsContainer(props) {
  return !props.phone ? (
    <p>Loading...</p>
  ) : (
    <PhoneDetails phone={props.phone} />
  );
}

const mapStateToProps = (state, ownProps) => ({
  phone: state.phonesReducer.phones.find(
    (phone) => phone.id.toString() === ownProps.match.params.id
  ),
  isLoading: state.phonesReducer.isLoading
});

export default connect(mapStateToProps)(PhoneDetailsContainer);
