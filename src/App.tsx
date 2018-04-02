import * as React from 'react';
import './App.css';
import { show } from './show';

const logo = require('./logo.svg');

import Test from './Test';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Test name="weekend"/>
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }

  componentDidMount() {
    show('aa');
  }

}

export default App;
