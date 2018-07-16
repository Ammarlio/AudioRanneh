import React, { Component } from 'react';

import './App.css';
import NavBar from './Components/NavBar'
import RannatList from './Components/RannatList'


class App extends Component {

  render() {
    return (
      <div className="App">
          <NavBar />
          <RannatList />
      </div>
    );
  }
}

export default App;
