import React, { Component } from 'react';
import './App.css';
import root from './componentRoot';


class App extends Component {
  render() {
    const image = 'image text, bitch'

    return (
      <div className="App">
        <root.Camera image={ image } />
      </div>
    );
  }
}

export default App;
