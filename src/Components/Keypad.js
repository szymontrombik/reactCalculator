import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Keypad extends Component {
    createTable = () => {
        let table = [];
        let number = 1;
        let operations = ["+", "-", "*", "/"]
        let i = 0;

        for (i; i < 3; i++) {
            let children = [];
            for (let j = 0; j < 3; j++) {
                children.push(
                    <td>
                        <Button className="keypad-button" name={number} onClick={e => this.props.onClick(e.target.name)}>{number}</Button>
                    </td>)
                number++;
            }

            children.push(
                <td>
                    <Button className="keypad-button operation" name={operations[i]} onClick={e => this.props.onClick(e.target.name)}>{operations[i]}</Button>
                </td>)

            table.push(<tr>{children}</tr>)
        }

        table.push(
            <tr>
                <td colSpan="2">
                    <Button className="keypad-button-submit" name="=" onClick={e => this.props.onClick(e.target.name)}>=</Button>
                </td>
                <td>
                    <Button className="keypad-button" name="0" onClick={e => this.props.onClick(e.target.name)}>0</Button>
                </td>
                <td>
                    <Button className="keypad-button operation" name={operations[i]} onClick={e => this.props.onClick(e.target.name)}>{operations[i]}</Button>
                </td>
            </tr>)

        return table;
    }

    render() {
        return this.createTable();
    }
}

export default Keypad;