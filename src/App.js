import React, { Component, Fragment } from 'react';
import Keypad from './Components/Keypad';
import Display from './Components/Display';

class App extends Component {
  render() {
    return <Fragment>
      <table>
        <Display />
        <Keypad />
      </table>
    </Fragment>;
  }
}
export default App;