import React, { Component } from 'react';
import Router from './components/Router/Router'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='myBeautifulBackground'>
        <Router />
      </div>
    );
  }
}

export default App;
