import React, { Component } from 'react';
import Keypad from './Keypad';
import Display from './Display';

class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            result: "123"
        }
    }

    onClick = button => {
        alert(button)
    }

    render() {
        return <table>
            <Display result={this.state.result} />
            <Keypad />
        </table>;
    }
}
export default Calculator;