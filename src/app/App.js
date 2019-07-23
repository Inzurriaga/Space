import React, { Component } from 'react';
import './App.css';
import THREE from "three"

export default class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="App" ref={mount => {this.mount = mount}}>
      </div>
    );
  }
}
