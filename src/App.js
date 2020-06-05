import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import PhoneDetailsContainer from './components/PhoneDetailsContainer';
import PhonesListContainer from './components/PhonesListContainer';
import { fetchPhones } from './state/actions/phones.actions';

function App(props) {
  useEffect(() => {
    props.dispatch(fetchPhones());
  }, []);

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={PhonesListContainer} />
          <Route path='/:id' component={PhoneDetailsContainer} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  phones: state.phonesReducer.phones,
  isLoading: state.phonesReducer.isLoading,
  error: state.phonesReducer.error
});

export default connect(mapStateToProps)(App);
