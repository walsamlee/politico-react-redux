import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import Parties from '../containers/Parties';
import Login from '../containers/authentication/Login';

class App extends Component {
  render() {
    return (
      <div className='main'>
        <ToastContainer />
        <Header />
        <Switch >
          <Route exact path="/" component={Landing} />
          <Route exact path="/parties" component={Parties} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
