import React, { Component } from 'react';
import Keypad from './Keypad';
import Display from './Display';

class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            result: "",

        }
    }

    onClick = button => {
        if (isNaN(button)) {
            switch(button)
            {
                case '+': alert('plus'); break;
                case '-': alert('minus'); break;
                case '*': alert('multi'); break;
                case '/': alert('div'); break;
                case '=': alert('sum'); break;
            }
        }
        
        this.setState({
            result: this.state.result + button
        })
    }

    render() {
        return <table>
            <Display result={this.state.result} />
            <Keypad onClick={this.onClick} />
        </table>;
    }
}
export default Calculator;