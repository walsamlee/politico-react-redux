import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello world!'
    }
  }
  render() {
    return (
      <div className='main'>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
