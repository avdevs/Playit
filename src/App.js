import React, { Component } from 'react';

import './App.css';
import RouteConfig from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouteConfig/>
      </div>
    );
  }
}

export default App;
