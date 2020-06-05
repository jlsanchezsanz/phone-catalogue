import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PhonesList from './components/PhonesList';
import { fetchPhones } from './state/actions/phones.actions';

import './App.css';

function App(props) {
  useEffect(() => {
    props.dispatch(fetchPhones());
  }, []);

  return (
    <div className='App'>
      <PhonesList phones={props.phones} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  phones: state.phonesReducer.phones,
  isLoading: state.phonesReducer.isLoading,
  error: state.phonesReducer.error
});

export default connect(mapStateToProps)(App);
