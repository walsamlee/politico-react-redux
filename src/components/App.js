import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PartyList from '../containers/party-list';

import Header from './Header';
import Footer from './Footer';
import Parties from '../containers/Parties';

class App extends Component {
  render() {
    return (
      <div className='main'>
        <Header />
        <PartyList />
        <Switch >
          <Route exact path="/parties" component={Parties}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
