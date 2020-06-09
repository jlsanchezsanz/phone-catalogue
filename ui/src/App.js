import React, { useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import { fetchPhones } from './state/actions/phones.actions';
import Spinner from './components/Spinner';

const PhoneDetailsContainer = React.lazy(() =>
  import('./components/PhoneDetailsContainer')
);
const PhonesListContainer = React.lazy(() =>
  import('./components/PhonesListContainer')
);

function App({ dispatch }) {
  useEffect(() => {
    dispatch(fetchPhones());
  }, [dispatch]);

  return (
    <Router>
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  phones: state.phonesReducer.phones,
  isLoading: state.phonesReducer.isLoading,
  error: state.phonesReducer.error
});

export default connect(mapStateToProps)(App);
