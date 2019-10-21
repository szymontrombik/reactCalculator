import React, { Component } from 'react';
import Keypad from './Keypad';
import Display from './Display';

class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            result: '',
            result2: '',
            operation: ''
        }
    }

    onClick = button => {
        if (isNaN(button)) {
            switch (button) {
                case '+': this.setState({ operation: button, result2: this.state.result, result: '' }); break;
                case '-': this.setState({ operation: button, result2: this.state.result, result: '' }); break;
                case '*': this.setState({ operation: button, result2: this.state.result, result: '' }); break;
                case '/': this.setState({ operation: button, result2: this.state.result, result: '' }); break;
                case '=': this.calculate(); break;
                case 'c': this.clear(); break;
            }
        }
        else {
            this.setState({
                result: this.state.result + button,
            })
        }
    }

    calculate = () => {
        this.setState({
            result: (eval(this.state.result2 + this.state.operation + this.state.result) || "")
        })
    }

    clear = () => {
        this.setState({
            result: '',
            result2: '',
            operation: ''
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