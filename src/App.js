import './App.css';
import React, { Component } from 'react';
import Header from './Header/Header.js';
import Block from './Block/Block.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Block />
      </div>
    )
  }
}

export default App;
