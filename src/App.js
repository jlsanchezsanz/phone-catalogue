import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import PhoneDetailsContainer from './components/PhoneDetailsContainer';
import PhonesListContainer from './components/PhonesListContainer';
import { fetchPhones } from './state/actions/phones.actions';

function App(props) {
  useEffect(() => {
    props.dispatch(fetchPhones());
  }, []);

  return (
    <Router>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/phones' />
          </Route>
          <Route exact path='/phones' component={PhonesListContainer} />
          <Route path='/phones/:id' component={PhoneDetailsContainer} />
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
