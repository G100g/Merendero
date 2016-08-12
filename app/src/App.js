import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Merendero</h2>
        </div>

        <Places />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </MuiThemeProvider>
    );
  }
}

export default App;
