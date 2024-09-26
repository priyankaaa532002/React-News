import './App.css';
import React, {Component} from 'react';

export default class App extends Component {
  p = 'Priyanka';
  render() {
    return (
      <div className="App">
        Hello ! {this.p}
      </div>
    );
  }
}

